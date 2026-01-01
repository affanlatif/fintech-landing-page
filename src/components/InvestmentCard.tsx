import React from 'react';
import { Building2, TrendingUp, Shield, Coins } from 'lucide-react';

type RiskLevel = 'low' | 'medium' | 'high';

interface Invoice {
  id: string;
  msmeName: string;
  amount: number;
  expectedReturn: string;
  riskLevel: RiskLevel;
  fundingProgress: number;
  maturityDate: string;
  tokenUnits: number;
}

interface InvestmentCardProps {
  invoice: Invoice;
  onInvest: () => void;
}

const riskConfig = {
  low: {
    label: 'LOW RISK',
    bgColor: 'bg-emerald-500/20',
    textColor: 'text-emerald-400',
    borderColor: 'border-emerald-500/50',
    glowColor: 'rgba(16, 185, 129, 0.3)'
  },
  medium: {
    label: 'MEDIUM RISK',
    bgColor: 'bg-amber-500/20',
    textColor: 'text-amber-400',
    borderColor: 'border-amber-500/50',
    glowColor: 'rgba(245, 158, 11, 0.3)'
  },
  high: {
    label: 'HIGH RISK',
    bgColor: 'bg-red-500/20',
    textColor: 'text-red-400',
    borderColor: 'border-red-500/50',
    glowColor: 'rgba(239, 68, 68, 0.3)'
  }
};

export function InvestmentCard({ invoice, onInvest }: InvestmentCardProps) {
  const risk = riskConfig[invoice.riskLevel];
  
  const formattedAmount = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(invoice.amount);

  return (
    <div 
      className="backdrop-blur-xl bg-slate-800/40 border border-cyan-500/30 rounded-xl p-6 hover:border-cyan-500/60 hover:bg-slate-800/60 transition-all group relative overflow-hidden"
      style={{ fontFamily: "'Sora', sans-serif" }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = '0 10px 40px rgba(0, 217, 255, 0.3)';
        e.currentTarget.style.transform = 'translateY(-4px)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
        e.currentTarget.style.transform = 'translateY(0)';
      }}
    >
      {/* Shimmer Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
      
      {/* MSME Name */}
      <div className="mb-4 relative z-10">
        <div className="flex items-center gap-2 text-cyan-400/60 text-xs mb-2 uppercase tracking-wider">
          <Building2 className="w-4 h-4" />
          <span>MSME</span>
        </div>
        <h3 className="text-white font-bold">{invoice.msmeName}</h3>
      </div>

      {/* Invoice Amount */}
      <div className="mb-4 relative z-10">
        <div className="text-cyan-400/60 text-xs mb-1 uppercase tracking-wider">Invoice Amount</div>
        <div 
          className="font-bold text-lg"
          style={{
            background: 'linear-gradient(135deg, #F59E0B 0%, #10B981 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}
        >
          {formattedAmount}
        </div>
      </div>

      {/* Expected Return and Risk Level */}
      <div className="grid grid-cols-2 gap-3 mb-4 relative z-10">
        <div>
          <div className="flex items-center gap-1 text-cyan-400/60 text-xs mb-1 uppercase tracking-wider">
            <TrendingUp className="w-4 h-4" />
            <span>Return</span>
          </div>
          <div className="text-emerald-400 font-bold text-sm">{invoice.expectedReturn}</div>
        </div>
        
        <div>
          <div className="flex items-center gap-1 text-cyan-400/60 text-xs mb-1 uppercase tracking-wider">
            <Shield className="w-4 h-4" />
            <span>Risk</span>
          </div>
          <span 
            className={`${risk.bgColor} ${risk.textColor} px-2 py-1 rounded border ${risk.borderColor} inline-block font-bold text-xs backdrop-blur-sm`}
            style={{ 
              fontFamily: "'JetBrains Mono', monospace",
              boxShadow: `0 0 15px ${risk.glowColor}`
            }}
          >
            {risk.label.split(' ')[0]}
          </span>
        </div>
      </div>

      {/* Funding Progress */}
      <div className="mb-4 relative z-10">
        <div className="flex items-center justify-between text-xs mb-2">
          <span className="text-cyan-400/60 uppercase tracking-wider">Funding Progress</span>
          <span className="text-white font-bold" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
            {invoice.fundingProgress}%
          </span>
        </div>
        <div className="w-full backdrop-blur-xl bg-slate-900/50 rounded-full h-2 border border-cyan-500/30">
          <div
            className="h-2 rounded-full transition-all relative overflow-hidden"
            style={{ 
              width: `${invoice.fundingProgress}%`,
              background: 'linear-gradient(90deg, #00D9FF 0%, #10B981 100%)',
              boxShadow: '0 0 10px rgba(0, 217, 255, 0.5)'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
          </div>
        </div>
      </div>

      {/* Token Units */}
      <div className="mb-6 pb-4 border-b border-cyan-500/20 relative z-10">
        <div className="flex items-center gap-2 text-cyan-400/60 text-xs mb-1 uppercase tracking-wider">
          <Coins className="w-4 h-4" />
          <span>Available Tokens</span>
        </div>
        <div className="text-white font-bold">{invoice.tokenUnits} Tokens</div>
      </div>

      {/* Invest Button */}
      <button
        onClick={onInvest}
        className="group/btn relative w-full py-3 rounded-lg font-bold transition-all overflow-hidden z-10"
        style={{
          background: 'linear-gradient(135deg, #F59E0B 0%, #10B981 100%)',
          boxShadow: '0 8px 30px rgba(245, 158, 11, 0.3)',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow = '0 12px 40px rgba(245, 158, 11, 0.5)';
          e.currentTarget.style.transform = 'translateY(-2px)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = '0 8px 30px rgba(245, 158, 11, 0.3)';
          e.currentTarget.style.transform = 'translateY(0)';
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700" />
        <span className="text-slate-900 relative z-10">Invest Using Stablecoin</span>
      </button>

      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </div>
  );
}
