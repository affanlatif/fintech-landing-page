import React from 'react';
import { 
  Clock, 
  TrendingUp, 
  ShieldCheck, 
  Users, 
  Eye, 
  Lock, 
  Zap,
  CheckCircle,
  FileCheck,
  Award,
  Home,
  ArrowLeft
} from 'lucide-react';
import { StatsWidget } from './ui/stats-widget';
import { Screen } from '../App';

interface ImpactTrustProps {
  navigate: (screen: Screen) => void;
}

export function ImpactTrust({ navigate }: ImpactTrustProps) {
  const impactMetrics = [
    {
      icon: Clock,
      title: 'Faster Payments',
      metric: '60 days → 1 day',
      description: 'MSMEs receive funds in 24 hours instead of waiting months',
      color: 'cyan',
      bgColor: 'bg-cyan-500/20',
      textColor: 'text-cyan-400',
      borderColor: 'border-cyan-500/50',
      glowColor: 'rgba(0, 217, 255, 0.3)'
    },
    {
      icon: TrendingUp,
      title: 'Improved MSME Cash Flow',
      metric: '3x faster',
      description: 'Accelerated working capital cycles for small businesses',
      color: 'emerald',
      bgColor: 'bg-emerald-500/20',
      textColor: 'text-emerald-400',
      borderColor: 'border-emerald-500/50',
      glowColor: 'rgba(16, 185, 129, 0.3)'
    },
    {
      icon: ShieldCheck,
      title: 'Reduced Invoice Fraud',
      metric: '99.9% secure',
      description: 'Blockchain immutability prevents tampering and fraud',
      color: 'amber',
      bgColor: 'bg-amber-500/20',
      textColor: 'text-amber-400',
      borderColor: 'border-amber-500/50',
      glowColor: 'rgba(245, 158, 11, 0.3)'
    },
    {
      icon: Users,
      title: 'Accessible Investment',
      metric: 'Open to all',
      description: 'Democratized access to invoice financing opportunities',
      color: 'green',
      bgColor: 'bg-green-500/20',
      textColor: 'text-green-400',
      borderColor: 'border-green-500/50',
      glowColor: 'rgba(34, 197, 94, 0.3)'
    }
  ];

  const blockchainBenefits = [
    {
      icon: Eye,
      title: 'Transparent and immutable records',
      description: 'Every transaction is permanently recorded on the blockchain'
    },
    {
      icon: Lock,
      title: 'Trustless settlement via smart contracts',
      description: 'Automated execution without requiring intermediaries'
    },
    {
      icon: Zap,
      title: 'No intermediaries or manual reconciliation',
      description: 'Reduced costs and faster processing times'
    }
  ];

  const trustFeatures = [
    {
      icon: CheckCircle,
      title: 'KYC-Verified MSMEs',
      description: 'All businesses undergo identity verification'
    },
    {
      icon: FileCheck,
      title: 'On-chain Audit Trail',
      description: 'Complete transaction history available for review'
    },
    {
      icon: Award,
      title: 'Tamper-proof Invoice Records',
      description: 'Blockchain ensures document integrity'
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden" style={{ fontFamily: "'Sora', sans-serif" }}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900" />
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(to right, #00D9FF 1px, transparent 1px), linear-gradient(to bottom, #00D9FF 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
          animation: 'gridMove 20s linear infinite'
        }}
      />
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-slate-900/30 to-slate-900/50" />
      <div className="absolute top-40 left-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-40 right-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />

      <div className="relative z-10">
        {/* Top Bar */}
        <header className="border-b border-cyan-500/20 backdrop-blur-xl bg-slate-900/50 sticky top-0 z-20 animate-fadeIn">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <button 
              onClick={() => navigate('landing')}
              className="flex items-center gap-3 hover:opacity-80 transition-all group"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-emerald-500 rounded-lg flex items-center justify-center shadow-lg shadow-cyan-500/50 group-hover:shadow-cyan-500/80 transition-all">
                <span className="text-slate-900 font-bold" style={{ fontFamily: "'JetBrains Mono', monospace" }}>IX</span>
              </div>
              <span className="text-white font-bold tracking-wide">InvoiceX</span>
            </button>
            
            <button 
              onClick={() => navigate('landing')}
              className="text-cyan-300 hover:text-cyan-400 transition-all flex items-center gap-2 backdrop-blur-sm bg-cyan-500/10 px-3 py-1.5 rounded-lg border border-cyan-500/30 hover:border-cyan-500/50"
            >
              <Home className="w-4 h-4" />
              <span className="text-sm">Home</span>
            </button>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-6 py-16">
          {/* Back Button */}
          <button 
            onClick={() => navigate('smart-contract')}
            className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 mb-8 transition-all animate-fadeInUp backdrop-blur-sm bg-cyan-500/10 px-3 py-1.5 rounded-lg border border-cyan-500/30"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Smart Contract Flow
          </button>

          {/* Page Title */}
          <div className="text-center mb-16 animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
            <h1 
              className="mb-4 font-bold tracking-tight"
              style={{
                fontSize: '3rem',
                background: 'linear-gradient(to right, #ffffff, #00D9FF, #10B981)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              Impact & Trust
            </h1>
            <p className="text-cyan-200/70 max-w-2xl mx-auto text-lg">
              Transforming MSME financing through blockchain technology and creating measurable impact
            </p>
          </div>

          {/* Live Impact Metrics - Stats Widgets */}
          <section className="mb-16">
            <h2 
              className="text-center mb-8 font-bold text-2xl uppercase tracking-wider"
              style={{
                background: 'linear-gradient(to right, #00D9FF, #10B981)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                fontFamily: "'JetBrains Mono', monospace"
              }}
            >
              Live Platform Metrics
            </h2>
            <div 
              className="grid grid-cols-1 md:grid-cols-4 gap-6 animate-fadeInUp"
              style={{ animationDelay: '0.15s' }}
            >
              <StatsWidget 
                label="MSMEs Funded"
                prefix=""
                suffix=""
                initialAmount={156}
                initialChange={42}
                initialData={[30, 45, 52, 68, 75, 88, 95]}
                autoUpdate={true}
              />
              <StatsWidget 
                label="Total Funded"
                prefix="₹"
                suffix="M"
                initialAmount={42}
                initialChange={28}
                initialData={[40, 48, 55, 62, 70, 78, 85]}
                autoUpdate={true}
              />
              <StatsWidget 
                label="Avg. Speed"
                prefix=""
                suffix=" hrs"
                initialAmount={18}
                initialChange={-65}
                initialData={[90, 82, 75, 68, 55, 42, 30]}
                autoUpdate={true}
              />
              <StatsWidget 
                label="Investors"
                prefix=""
                suffix="+"
                initialAmount={892}
                initialChange={35}
                initialData={[45, 52, 58, 65, 72, 82, 90]}
                autoUpdate={true}
              />
            </div>
          </section>

          {/* Section 1: Impact Metrics */}
          <section className="mb-20">
            <h2 
              className="text-center mb-10 font-bold text-3xl"
              style={{
                background: 'linear-gradient(to right, #ffffff, #00D9FF)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              Real-World Impact
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {impactMetrics.map((metric, index) => (
                <div
                  key={index}
                  className={`backdrop-blur-xl bg-slate-800/40 border-2 ${metric.borderColor} rounded-2xl p-6 hover:bg-slate-800/60 transition-all group animate-fadeInUp`}
                  style={{ 
                    animationDelay: `${0.2 + index * 0.1}s`,
                    boxShadow: `0 4px 20px ${metric.glowColor}`
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = `0 10px 40px ${metric.glowColor}`;
                    e.currentTarget.style.transform = 'translateY(-4px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = `0 4px 20px ${metric.glowColor}`;
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <div 
                    className={`w-14 h-14 ${metric.bgColor} rounded-xl flex items-center justify-center mb-4 border ${metric.borderColor}`}
                    style={{ boxShadow: `0 0 20px ${metric.glowColor}` }}
                  >
                    <metric.icon className={`w-7 h-7 ${metric.textColor}`} />
                  </div>
                  
                  <h3 className="text-white mb-2 font-bold">{metric.title}</h3>
                  
                  <div className={`mb-3 font-bold text-lg ${metric.textColor}`}>
                    {metric.metric}
                  </div>
                  
                  <p className="text-cyan-200/70 text-sm">{metric.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 2: Why Blockchain */}
          <section className="mb-20">
            <div className="backdrop-blur-xl bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 border border-cyan-500/30 rounded-2xl p-10 shadow-2xl animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
              <h2 
                className="text-center mb-10 font-bold text-3xl"
                style={{
                  background: 'linear-gradient(to right, #ffffff, #00D9FF)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                Why Blockchain?
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {blockchainBenefits.map((benefit, index) => (
                  <div key={index} className="text-center">
                    <div 
                      className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4"
                      style={{ boxShadow: '0 10px 30px rgba(0, 217, 255, 0.4)' }}
                    >
                      <benefit.icon className="w-8 h-8 text-slate-900" />
                    </div>
                    
                    <h3 className="text-white mb-3 font-bold">{benefit.title}</h3>
                    
                    <p className="text-cyan-200/70 text-sm">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Section 3: Trust & Compliance */}
          <section className="mb-20">
            <h2 
              className="text-center mb-10 font-bold text-3xl"
              style={{
                background: 'linear-gradient(to right, #ffffff, #10B981)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              Trust & Compliance
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {trustFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="backdrop-blur-xl bg-slate-800/40 border-2 border-emerald-500/50 rounded-2xl p-6 hover:border-emerald-500/80 hover:bg-slate-800/60 transition-all group animate-fadeInUp"
                  style={{ 
                    animationDelay: `${0.8 + index * 0.1}s`,
                    boxShadow: '0 4px 20px rgba(16, 185, 129, 0.2)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = '0 10px 40px rgba(16, 185, 129, 0.4)';
                    e.currentTarget.style.transform = 'translateY(-4px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = '0 4px 20px rgba(16, 185, 129, 0.2)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <div 
                    className="w-12 h-12 bg-emerald-500/20 backdrop-blur-xl border border-emerald-500/50 rounded-xl flex items-center justify-center mb-4"
                    style={{ boxShadow: '0 0 20px rgba(16, 185, 129, 0.3)' }}
                  >
                    <feature.icon className="w-6 h-6 text-emerald-400" />
                  </div>
                  
                  <h3 className="text-white mb-2 font-bold">{feature.title}</h3>
                  
                  <p className="text-cyan-200/70 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Closing Statement */}
          <section className="text-center mb-12">
            <div 
              className="backdrop-blur-xl bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 border-2 border-cyan-500/40 rounded-2xl p-12 max-w-4xl mx-auto shadow-2xl animate-fadeInUp"
              style={{ 
                animationDelay: '1.1s',
                boxShadow: '0 20px 60px rgba(0, 217, 255, 0.3)'
              }}
            >
              <div 
                className="w-16 h-16 bg-slate-900/50 backdrop-blur-xl border-2 border-cyan-500/50 rounded-full flex items-center justify-center mx-auto mb-6"
                style={{ boxShadow: '0 0 30px rgba(0, 217, 255, 0.5)' }}
              >
                <ShieldCheck className="w-9 h-9 text-cyan-400" />
              </div>
              
              <h2 
                className="mb-4 font-bold text-3xl"
                style={{
                  background: 'linear-gradient(to right, #ffffff, #00D9FF, #10B981)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                Our Mission
              </h2>
              
              <p className="text-cyan-200/80 max-w-2xl mx-auto text-lg">
                Building trust, liquidity, and opportunity for MSMEs through decentralized finance.
              </p>

              <div className="mt-8 pt-8 border-t border-cyan-500/20">
                <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
                  <div>
                    <div className="text-white mb-1 font-bold text-lg">Trust</div>
                    <div className="text-cyan-200/70 text-sm">Blockchain-verified</div>
                  </div>
                  <div>
                    <div className="text-white mb-1 font-bold text-lg">Liquidity</div>
                    <div className="text-cyan-200/70 text-sm">Instant access</div>
                  </div>
                  <div>
                    <div className="text-white mb-1 font-bold text-lg">Opportunity</div>
                    <div className="text-cyan-200/70 text-sm">For everyone</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mb-8 animate-fadeInUp" style={{ animationDelay: '1.2s' }}>
            <button 
              onClick={() => navigate('landing')}
              className="group relative px-8 py-4 rounded-xl transition-all overflow-hidden font-bold"
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
              <span className="text-slate-900 relative z-10">Explore Platform Again</span>
            </button>
            <button 
              onClick={() => navigate('smart-contract')}
              className="backdrop-blur-xl bg-slate-900/50 border-2 border-cyan-500/30 text-cyan-300 px-8 py-4 rounded-xl hover:bg-slate-900/70 hover:border-cyan-500/50 transition-all font-bold"
            >
              Back to Smart Contract Flow
            </button>
          </div>
        </main>

        {/* Footer */}
        <footer className="border-t border-cyan-500/20 backdrop-blur-xl bg-slate-900/50 py-8 mt-16 animate-fadeIn" style={{ animationDelay: '1.3s' }}>
          <div className="max-w-7xl mx-auto px-6 text-center">
            <p className="text-cyan-300/50 text-sm" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
              Powered by blockchain technology. Secured by smart contracts. Built for MSMEs.
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
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
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