import React from 'react';
import { Building2, Wallet, FileText, Coins, Users, CheckCircle2, ArrowRight } from 'lucide-react';
import { ConnectWalletButton } from './ConnectWalletButton';
import { Screen } from '../App';

interface LandingPageProps {
  navigate: (screen: Screen) => void;
}

export function LandingPage({ navigate }: LandingPageProps) {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden" style={{ fontFamily: "'Sora', sans-serif" }}>
      {/* Layered Background with Grid Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900" />
      
      {/* Animated Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, #00D9FF 1px, transparent 1px),
            linear-gradient(to bottom, #00D9FF 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          animation: 'gridMove 20s linear infinite'
        }}
      />
      
      {/* Radial Gradient Overlay for Depth */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-slate-900/50 to-slate-900" />
      
      {/* Glowing Orb Effects */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '1s' }} />

      {/* Content Layer */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Header */}
        <header className="border-b border-cyan-500/20 backdrop-blur-xl bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-6 py-3">
            <div className="flex items-center justify-between animate-fadeIn">
              <button 
                onClick={() => navigate('landing')}
                className="flex items-center gap-2 hover:opacity-80 transition-all group"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-emerald-500 rounded-lg flex items-center justify-center shadow-lg shadow-cyan-500/50 group-hover:shadow-cyan-500/80 transition-all">
                  <span className="text-slate-900 font-bold" style={{ fontFamily: "'JetBrains Mono', monospace" }}>IX</span>
                </div>
                <span className="text-white font-bold text-lg tracking-wide">InvoiceX</span>
              </button>
              
              <ConnectWalletButton />
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <main className="flex-1 flex items-center justify-center px-6 py-4">
          <div className="text-center max-w-5xl w-full">
            {/* Main Heading with Stagger Animation */}
            <h1 
              className="text-white mb-2 font-bold tracking-tight animate-fadeInUp leading-tight"
              style={{ 
                fontSize: '3.5rem',
                background: 'linear-gradient(to right, #ffffff, #00D9FF, #10B981)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              Unlock Cash Flow with<br />Tokenized Invoices
            </h1>
            
            {/* Subtitle */}
            <p className="text-cyan-100/80 mb-5 text-lg max-w-2xl mx-auto animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
              Instant liquidity for MSMEs. Secure investments for everyone.
            </p>

            {/* Workflow Visualization */}
            <div className="flex justify-center mb-5 animate-fadeInUp" style={{ animationDelay: '0.15s' }}>
              <div className="backdrop-blur-xl bg-slate-800/40 rounded-2xl px-6 py-3 border border-cyan-500/30 inline-flex flex-col items-center gap-3">
                <div className="text-cyan-400/70 text-xs uppercase tracking-wider" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                  Built by Industry Experts
                </div>
                <div className="flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-cyan-400" />
                  <span className="text-cyan-400 text-sm">MSME Dashboard</span>
                </div>
                <div className="flex items-center gap-2">
                  <Wallet className="w-5 h-5 text-cyan-400" />
                  <span className="text-cyan-400 text-sm">Investor Marketplace</span>
                </div>
              </div>
            </div>

            {/* Badge */}
            <div 
              className="inline-flex items-center gap-2 backdrop-blur-sm bg-cyan-500/10 border border-cyan-500/30 rounded-full px-4 py-1.5 mb-5 shadow-lg shadow-cyan-500/10 animate-fadeInUp"
              style={{ animationDelay: '0.7s' }}
            >
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" style={{ boxShadow: '0 0 10px #00D9FF' }} />
              <span className="text-cyan-300 text-xs font-medium tracking-wide" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                POWERED BY BLOCKCHAIN
              </span>
            </div>

            {/* Action Buttons */}
            <div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-4 animate-fadeInUp"
              style={{ animationDelay: '0.8s' }}
            >
              <button 
                onClick={() => navigate('msme-dashboard')}
                className="group relative px-8 py-4 rounded-xl transition-all flex items-center justify-center gap-3 min-w-[260px] overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, #00D9FF 0%, #10B981 100%)',
                  boxShadow: '0 10px 40px rgba(0, 217, 255, 0.3)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 15px 50px rgba(0, 217, 255, 0.5)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 10px 40px rgba(0, 217, 255, 0.3)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                <Building2 className="w-5 h-5 text-slate-900 group-hover:scale-110 transition-transform relative z-10" />
                <span className="font-bold text-slate-900 relative z-10">I am an MSME</span>
              </button>
              
              <button 
                onClick={() => navigate('investor-marketplace')}
                className="group relative px-8 py-4 rounded-xl backdrop-blur-xl transition-all flex items-center justify-center gap-3 min-w-[260px] border-2 overflow-hidden"
                style={{
                  borderColor: '#00D9FF',
                  background: 'rgba(0, 217, 255, 0.05)',
                  boxShadow: '0 10px 40px rgba(0, 217, 255, 0.2)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(0, 217, 255, 0.15)';
                  e.currentTarget.style.boxShadow = '0 15px 50px rgba(0, 217, 255, 0.4)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(0, 217, 255, 0.05)';
                  e.currentTarget.style.boxShadow = '0 10px 40px rgba(0, 217, 255, 0.2)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                <Wallet className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform relative z-10" />
                <span className="font-bold text-white relative z-10">I am an Investor</span>
              </button>
            </div>

            {/* Quick Info Link */}
            <div className="animate-fadeInUp" style={{ animationDelay: '0.9s' }}>
              <button 
                onClick={() => navigate('impact-trust')}
                className="text-cyan-400 hover:text-cyan-300 transition-colors text-xs font-medium hover:underline backdrop-blur-sm bg-cyan-500/5 px-3 py-1.5 rounded-full border border-cyan-500/20"
              >
                Learn about our impact and trust mechanisms →
              </button>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="border-t border-cyan-500/20 backdrop-blur-xl bg-slate-900/50 py-2 animate-fadeIn" style={{ animationDelay: '1s' }}>
          <div className="max-w-7xl mx-auto px-6 text-center">
            <p className="text-cyan-300/50 text-xs" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
              © 2025 InvoiceX • Powered by blockchain • Built for MSMEs and investors
            </p>
          </div>
        </footer>
      </div>

      <style>{`
        @keyframes gridMove {
          0% { transform: translateY(0); }
          100% { transform: translateY(60px); }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes fadeInUp {
          from { 
            opacity: 0;
            transform: translateY(20px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
}