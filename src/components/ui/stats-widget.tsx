import React, { useState, useEffect, useMemo, useRef } from 'react';
import { ArrowUp, ArrowDown } from 'lucide-react';

// A small utility function to generate random numbers in a range
const getRandom = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;

// A function to generate a smooth SVG path from data points
const generateSmoothPath = (points: number[], width: number, height: number) => {
    if (!points || points.length < 2) {
        return `M 0 ${height}`;
    }

    const xStep = width / (points.length - 1);
    const pathData = points.map((point, i) => {
        const x = i * xStep;
        // Scale point to height, with a small padding from top/bottom
        const y = height - (point / 100) * (height * 0.8) - (height * 0.1);
        return [x, y];
    });

    let path = `M ${pathData[0][0]} ${pathData[0][1]}`;

    for (let i = 0; i < pathData.length - 1; i++) {
        const x1 = pathData[i][0];
        const y1 = pathData[i][1];
        const x2 = pathData[i + 1][0];
        const y2 = pathData[i + 1][1];
        const midX = (x1 + x2) / 2;
        path += ` C ${midX},${y1} ${midX},${y2} ${x2},${y2}`;
    }

    return path;
};

interface StatsWidgetProps {
    label?: string;
    prefix?: string;
    suffix?: string;
    initialAmount?: number;
    initialChange?: number;
    initialData?: number[];
    autoUpdate?: boolean;
}

// The main Stats Widget Component, adapted for InvoiceX dark theme
export const StatsWidget = ({ 
    label = "This Week",
    prefix = "$",
    suffix = "",
    initialAmount = 283,
    initialChange = 36,
    initialData = [30, 55, 45, 75, 60, 85, 70],
    autoUpdate = true
}: StatsWidgetProps) => {
    const [stats, setStats] = useState({
        amount: initialAmount,
        change: initialChange,
        chartData: initialData,
    });
    const linePathRef = useRef<SVGPathElement>(null);
    const areaPathRef = useRef<SVGPathElement>(null);

    // Function to generate new random data for interactivity
    const updateStats = () => {
        const newAmount = getRandom(100, 999);
        const newChange = getRandom(-50, 100);
        const newChartData = Array.from({ length: 7 }, () => getRandom(10, 90));

        setStats({
            amount: newAmount,
            change: newChange,
            chartData: newChartData,
        });
    };

    // Auto-update stats every 3 seconds if enabled
    useEffect(() => {
        if (autoUpdate) {
            const intervalId = setInterval(updateStats, 3000);
            return () => clearInterval(intervalId);
        }
    }, [autoUpdate]);

    // SVG viewbox dimensions
    const svgWidth = 150;
    const svgHeight = 60;

    // Generate the SVG path for the line, memoized for performance
    const linePath = useMemo(() => generateSmoothPath(stats.chartData, svgWidth, svgHeight), [stats.chartData]);

    // Generate the SVG path for the gradient area
    const areaPath = useMemo(() => {
        if (!linePath.startsWith("M")) return "";
        return `${linePath} L ${svgWidth} ${svgHeight} L 0 ${svgHeight} Z`;
    }, [linePath]);

    // Animate the line graph on change
    useEffect(() => {
        const path = linePathRef.current;
        const area = areaPathRef.current;

        if (path && area) {
            const length = path.getTotalLength();
            // --- Animate Line ---
            path.style.transition = 'none';
            path.style.strokeDasharray = length + ' ' + length;
            path.style.strokeDashoffset = String(length);

            // --- Animate Area ---
            area.style.transition = 'none';
            area.style.opacity = '0';

            // Trigger reflow to apply initial styles before transition
            path.getBoundingClientRect();

            // --- Start Transitions ---
            path.style.transition = 'stroke-dashoffset 0.8s ease-in-out, stroke 0.5s ease';
            path.style.strokeDashoffset = '0';

            area.style.transition = 'opacity 0.8s ease-in-out 0.2s, fill 0.5s ease'; // Delay start
            area.style.opacity = '1';
        }
    }, [linePath]); // Re-run animation when the path data changes

    const isPositiveChange = stats.change >= 0;
    const changeColorClass = isPositiveChange ? 'text-emerald-400' : 'text-red-400';
    const graphStrokeColor = isPositiveChange ? '#00D9FF' : '#F59E0B';
    const gradientId = isPositiveChange ? 'areaGradientSuccess' : 'areaGradientDestructive';

    return (
        <div
            className="w-full backdrop-blur-xl bg-slate-800/40 border border-cyan-500/30 rounded-2xl shadow-2xl p-6 hover:border-cyan-500/60 transition-all group"
            style={{ 
                fontFamily: "'Sora', sans-serif",
                boxShadow: '0 10px 40px rgba(0, 217, 255, 0.2)'
            }}
        >
            <div className="flex justify-between items-center">
                {/* Left side content */}
                <div className="flex flex-col w-1/2">
                    <div className="flex items-center text-cyan-400/60 text-sm uppercase tracking-wider" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                        <span>{label}</span>
                        <span className={`ml-2 flex items-center font-bold ${changeColorClass}`}>
                            {Math.abs(stats.change)}%
                            {isPositiveChange ? <ArrowUp size={16} className="ml-1" /> : <ArrowDown size={16} className="ml-1" />}
                        </span>
                    </div>
                    <p 
                        className="text-4xl font-bold mt-2"
                        style={{
                            background: 'linear-gradient(135deg, #00D9FF 0%, #10B981 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text'
                        }}
                    >
                        {prefix}{stats.amount}{suffix}
                    </p>
                </div>

                {/* Right side chart */}
                <div className="w-1/2 h-16">
                    <svg viewBox={`0 0 ${svgWidth} ${svgHeight}`} className="w-full h-full" preserveAspectRatio="none">
                        <defs>
                            <linearGradient id="areaGradientSuccess" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor={graphStrokeColor} stopOpacity={0.4}/>
                                <stop offset="100%" stopColor={graphStrokeColor} stopOpacity={0}/>
                            </linearGradient>
                            <linearGradient id="areaGradientDestructive" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor={graphStrokeColor} stopOpacity={0.4}/>
                                <stop offset="100%" stopColor={graphStrokeColor} stopOpacity={0}/>
                            </linearGradient>
                        </defs>
                        <path
                            ref={areaPathRef}
                            d={areaPath}
                            fill={`url(#${gradientId})`}
                        />
                        <path
                            ref={linePathRef}
                            d={linePath}
                            fill="none"
                            stroke={graphStrokeColor}
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>
            </div>
        </div>
    );
};

export function Component() {
    return (
        <div className="w-full min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900">
            <StatsWidget />
        </div>
    );
}
