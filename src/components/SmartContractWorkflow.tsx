import React from 'react';
import { ArrowLeft, Wallet, Building2, Receipt, CheckCircle, Lock, Eye, Zap, ArrowDown, Home } from 'lucide-react';
import { Screen } from '../App';

interface SmartContractWorkflowProps {
  navigate: (screen: Screen) => void;
}

export function SmartContractWorkflow({ navigate }: SmartContractWorkflowProps) {
  const steps = [
    {
      number: '1',
      title: 'Investor Deposits Stablecoins',
      subtitle: 'Funds are locked in a smart contract',
      icon: Wallet,
      color: 'cyan',
      bgColor: 'bg-cyan-500/20',
      iconColor: 'text-cyan-400',
      borderColor: 'border-cyan-500/50',
      glowColor: 'rgba(0, 217, 255, 0.3)'
    },
    {
      number: '2',
      title: 'MSME Receives Instant Liquidity',
      subtitle: 'Capital is released to MSME wallet',
      icon: Building2,
      color: 'emerald',
      bgColor: 'bg-emerald-500/20',
      iconColor: 'text-emerald-400',
      borderColor: 'border-emerald-500/50',
      glowColor: 'rgba(16, 185, 129, 0.3)'
    },
    {
      number: '3',
      title: 'Buyer Pays Invoice',
      subtitle: 'Payment goes directly to the smart contract',
      icon: Receipt,
      color: 'amber',
      bgColor: 'bg-amber-500/20',
      iconColor: 'text-amber-400',
      borderColor: 'border-amber-500/50',
      glowColor: 'rgba(245, 158, 11, 0.3)'
    },
    {
      number: '4',
      title: 'Automatic Settlement',
      subtitle: 'Investors receive principal + yield',
      icon: CheckCircle,
      color: 'green',
      bgColor: 'bg-green-500/20',
      iconColor: 'text-green-400',
      borderColor: 'border-green-500/50',
      glowColor: 'rgba(34, 197, 94, 0.3)'
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
      <div className="absolute top-40 right-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-40 left-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />

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
        <main className="max-w-6xl mx-auto px-6 py-12">
          {/* Back Button */}
          <button 
            onClick={() => navigate('investor-marketplace')}
            className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 mb-8 transition-all animate-fadeInUp backdrop-blur-sm bg-cyan-500/10 px-3 py-1.5 rounded-lg border border-cyan-500/30"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Marketplace
          </button>

          {/* Title */}
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
              Smart Contract Settlement Flow
            </h1>
            <p className="text-cyan-200/70 max-w-2xl mx-auto text-lg">
              Automated, transparent, and secure fund movement powered by blockchain technology
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-16">
            {/* Flow Steps */}
            <div className="lg:col-span-3">
              <div className="space-y-6">
                {steps.map((step, index) => (
                  <React.Fragment key={step.number}>
                    {/* Step Card */}
                    <div 
                      className={`backdrop-blur-xl bg-slate-800/40 border-2 ${step.borderColor} rounded-2xl p-8 hover:bg-slate-800/60 transition-all group animate-fadeInUp`}
                      style={{ 
                        animationDelay: `${0.2 + index * 0.1}s`,
                        boxShadow: `0 4px 20px ${step.glowColor}`
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.boxShadow = `0 10px 40px ${step.glowColor}`;
                        e.currentTarget.style.transform = 'translateY(-4px)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.boxShadow = `0 4px 20px ${step.glowColor}`;
                        e.currentTarget.style.transform = 'translateY(0)';
                      }}
                    >
                      <div className="flex items-start gap-6">
                        {/* Step Number Badge */}
                        <div 
                          className={`${step.bgColor} w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 border ${step.borderColor}`}
                          style={{ boxShadow: `0 0 20px ${step.glowColor}` }}
                        >
                          <span className={`${step.iconColor} font-bold`} style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                            {step.number}
                          </span>
                        </div>

                        {/* Content */}
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-3">
                            <h3 className="text-white font-bold text-xl">{step.title}</h3>
                            <div 
                              className={`${step.bgColor} ${step.iconColor} w-12 h-12 rounded-xl flex items-center justify-center border ${step.borderColor}`}
                              style={{ boxShadow: `0 0 20px ${step.glowColor}` }}
                            >
                              <step.icon className="w-6 h-6" />
                            </div>
                          </div>
                          <p className="text-cyan-200/70">{step.subtitle}</p>
                        </div>
                      </div>
                    </div>

                    {/* Arrow between steps */}
                    {index < steps.length - 1 && (
                      <div className="flex justify-center animate-pulse">
                        <ArrowDown className="w-8 h-8 text-cyan-500/50" />
                      </div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Side Information Box */}
            <div className="lg:col-span-1">
              <div 
                className="backdrop-blur-xl bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 border border-cyan-500/30 rounded-2xl p-6 text-white sticky top-8 shadow-2xl animate-fadeInUp"
                style={{ 
                  animationDelay: '0.6s',
                  boxShadow: '0 10px 40px rgba(0, 217, 255, 0.2)'
                }}
              >
                <h3 className="mb-6 font-bold text-cyan-300 uppercase tracking-wider text-sm" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                  Why Smart Contracts?
                </h3>

                <div className="space-y-5">
                  <div className="flex gap-3">
                    <div 
                      className="w-10 h-10 bg-slate-900/50 backdrop-blur-xl border border-cyan-500/50 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ boxShadow: '0 0 20px rgba(0, 217, 255, 0.3)' }}
                    >
                      <Zap className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div>
                      <div className="font-bold mb-1">Fully Automated</div>
                      <div className="text-cyan-200/70 text-sm">No intermediaries required</div>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div 
                      className="w-10 h-10 bg-slate-900/50 backdrop-blur-xl border border-cyan-500/50 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ boxShadow: '0 0 20px rgba(0, 217, 255, 0.3)' }}
                    >
                      <Eye className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div>
                      <div className="font-bold mb-1">On-chain Transparency</div>
                      <div className="text-cyan-200/70 text-sm">Complete auditability</div>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div 
                      className="w-10 h-10 bg-slate-900/50 backdrop-blur-xl border border-cyan-500/50 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ boxShadow: '0 0 20px rgba(0, 217, 255, 0.3)' }}
                    >
                      <Lock className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div>
                      <div className="font-bold mb-1">Trustless Execution</div>
                      <div className="text-cyan-200/70 text-sm">Smart contracts ensure security</div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-cyan-500/20">
                  <div className="text-cyan-200/70 text-sm">
                    All transactions are cryptographically secured and irreversible once confirmed.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Visual Flow (Alternative Horizontal View) */}
          <div className="backdrop-blur-xl bg-slate-800/40 border border-cyan-500/30 rounded-2xl p-8 mb-12 shadow-2xl animate-fadeInUp" style={{ animationDelay: '0.7s' }}>
            <h2 className="text-white text-center mb-8 font-bold text-2xl">Visual Flow Overview</h2>
            
            <div className="flex items-center justify-between gap-4 flex-wrap">
              {steps.map((step, index) => (
                <React.Fragment key={step.number}>
                  {/* Compact Step */}
                  <div className="flex flex-col items-center text-center flex-1 min-w-[140px]">
                    <div 
                      className={`${step.bgColor} ${step.iconColor} w-16 h-16 rounded-2xl flex items-center justify-center mb-3 border ${step.borderColor}`}
                      style={{ boxShadow: `0 0 25px ${step.glowColor}` }}
                    >
                      <step.icon className="w-8 h-8" />
                    </div>
                    <div className="text-white font-bold mb-1 text-sm">{step.title}</div>
                    <div className="text-cyan-200/70 text-xs">{step.subtitle}</div>
                  </div>

                  {/* Arrow */}
                  {index < steps.length - 1 && (
                    <div className="text-cyan-500/50 hidden sm:block text-2xl">
                      →
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mb-8 animate-fadeInUp" style={{ animationDelay: '0.8s' }}>
            <button 
              onClick={() => navigate('impact-trust')}
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
              <span className="text-slate-900 relative z-10">View Impact & Trust</span>
            </button>
            <button 
              onClick={() => navigate('investor-marketplace')}
              className="backdrop-blur-xl bg-slate-900/50 border-2 border-cyan-500/30 text-cyan-300 px-8 py-4 rounded-xl hover:bg-slate-900/70 hover:border-cyan-500/50 transition-all font-bold"
            >
              Back to Marketplace
            </button>
          </div>
        </main>

        {/* Footer */}
        <footer className="border-t border-cyan-500/20 backdrop-blur-xl bg-slate-900/50 py-8 animate-fadeIn" style={{ animationDelay: '0.9s' }}>
          <div className="max-w-6xl mx-auto px-6 text-center">
            <p className="text-cyan-300/50 text-sm" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
              Every transaction is verifiable on the blockchain.
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
