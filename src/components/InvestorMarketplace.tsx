import React, { useState } from 'react';
import { InvestmentCard } from './InvestmentCard';
import { InvestmentModal } from './InvestmentModal';
import { StatsWidget } from './ui/stats-widget';
import { Filter, Home } from 'lucide-react';
import { Screen } from '../App';

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

interface InvestorMarketplaceProps {
  navigate: (screen: Screen) => void;
}

// Mock invoice data
const allInvoices: Invoice[] = [
  {
    id: 'INV-001',
    msmeName: 'Tech Solutions Pvt Ltd',
    amount: 125000,
    expectedReturn: '10–12%',
    riskLevel: 'low',
    fundingProgress: 65,
    maturityDate: '2025-04-15',
    tokenUnits: 125
  },
  {
    id: 'INV-002',
    msmeName: 'Global Traders Inc',
    amount: 89500,
    expectedReturn: '12–14%',
    riskLevel: 'medium',
    fundingProgress: 40,
    maturityDate: '2025-05-20',
    tokenUnits: 90
  },
  {
    id: 'INV-003',
    msmeName: 'Manufacturing Co',
    amount: 234000,
    expectedReturn: '8–10%',
    riskLevel: 'low',
    fundingProgress: 85,
    maturityDate: '2025-03-10',
    tokenUnits: 234
  },
  {
    id: 'INV-004',
    msmeName: 'Retail Ventures Ltd',
    amount: 156800,
    expectedReturn: '14–16%',
    riskLevel: 'high',
    fundingProgress: 25,
    maturityDate: '2025-06-01',
    tokenUnits: 157
  },
  {
    id: 'INV-005',
    msmeName: 'Digital Services Group',
    amount: 67200,
    expectedReturn: '11–13%',
    riskLevel: 'medium',
    fundingProgress: 55,
    maturityDate: '2025-04-25',
    tokenUnits: 67
  },
  {
    id: 'INV-006',
    msmeName: 'Export Partners LLC',
    amount: 198000,
    expectedReturn: '9–11%',
    riskLevel: 'low',
    fundingProgress: 72,
    maturityDate: '2025-03-28',
    tokenUnits: 198
  }
];

export function InvestorMarketplace({ navigate }: InvestorMarketplaceProps) {
  const [selectedInvoice, setSelectedInvoice] = useState<Invoice | null>(null);
  const [riskFilter, setRiskFilter] = useState<RiskLevel | 'all'>('all');
  const [returnFilter, setReturnFilter] = useState<string>('all');

  // Filter invoices
  const filteredInvoices = allInvoices.filter(invoice => {
    if (riskFilter !== 'all' && invoice.riskLevel !== riskFilter) {
      return false;
    }
    
    if (returnFilter !== 'all') {
      const returnValue = parseInt(invoice.expectedReturn.split('–')[0]);
      if (returnFilter === 'low' && returnValue >= 10) return false;
      if (returnFilter === 'medium' && (returnValue < 10 || returnValue >= 14)) return false;
      if (returnFilter === 'high' && returnValue < 14) return false;
    }
    
    return true;
  });

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
      <div className="absolute top-40 left-20 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
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
            
            <div className="flex items-center gap-4">
              <span className="text-cyan-200 text-sm" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                <span className="text-cyan-400 font-semibold">Investor Dashboard</span>
              </span>
              <button 
                onClick={() => navigate('landing')}
                className="text-cyan-300 hover:text-cyan-400 transition-all flex items-center gap-2 backdrop-blur-sm bg-cyan-500/10 px-3 py-1.5 rounded-lg border border-cyan-500/30 hover:border-cyan-500/50"
              >
                <Home className="w-4 h-4" />
                <span className="text-sm">Home</span>
              </button>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-6 py-8">
          {/* Page Title */}
          <div className="mb-8 animate-fadeInUp">
            <h1 
              className="mb-2 font-bold tracking-tight"
              style={{
                fontSize: '2.5rem',
                background: 'linear-gradient(to right, #ffffff, #F59E0B)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              Investment Marketplace
            </h1>
            <p className="text-cyan-200/70">Browse and invest in verified tokenized invoices</p>
          </div>

          {/* Stats Widgets */}
          <div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 animate-fadeInUp"
            style={{ animationDelay: '0.1s' }}
          >
            <StatsWidget 
              label="Portfolio"
              prefix="₹"
              suffix="k"
              initialAmount={1245}
              initialChange={32}
              initialData={[40, 50, 48, 62, 58, 75, 82]}
              autoUpdate={true}
            />
            <StatsWidget 
              label="Returns"
              prefix=""
              suffix="%"
              initialAmount={12}
              initialChange={15}
              initialData={[35, 42, 45, 55, 52, 60, 65]}
              autoUpdate={true}
            />
            <StatsWidget 
              label="Active"
              prefix=""
              suffix=" Deals"
              initialAmount={24}
              initialChange={8}
              initialData={[50, 55, 52, 58, 60, 62, 68]}
              autoUpdate={true}
            />
          </div>

          {/* Filter Section */}
          <div 
            className="backdrop-blur-xl bg-slate-800/40 border border-cyan-500/30 rounded-2xl p-6 mb-8 shadow-2xl animate-fadeInUp"
            style={{ animationDelay: '0.1s' }}
          >
            <div className="flex items-center gap-2 mb-4">
              <Filter className="w-5 h-5 text-cyan-400" />
              <h2 className="text-white font-bold uppercase tracking-wider text-sm" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                Filters
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Risk Level Filter */}
              <div>
                <label className="text-cyan-300 mb-3 block uppercase tracking-wider text-xs" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                  Risk Level
                </label>
                <div className="flex gap-2 flex-wrap">
                  <button
                    onClick={() => setRiskFilter('all')}
                    className={`px-4 py-2 rounded-lg border-2 transition-all font-semibold text-sm ${
                      riskFilter === 'all'
                        ? 'border-cyan-500 bg-cyan-500/20 text-cyan-300 shadow-lg shadow-cyan-500/30'
                        : 'border-cyan-500/30 text-cyan-400/70 hover:bg-cyan-500/10 hover:border-cyan-500/50'
                    }`}
                  >
                    All
                  </button>
                  <button
                    onClick={() => setRiskFilter('low')}
                    className={`px-4 py-2 rounded-lg border-2 transition-all font-semibold text-sm ${
                      riskFilter === 'low'
                        ? 'border-emerald-500 bg-emerald-500/20 text-emerald-300 shadow-lg shadow-emerald-500/30'
                        : 'border-emerald-500/30 text-emerald-400/70 hover:bg-emerald-500/10 hover:border-emerald-500/50'
                    }`}
                  >
                    Low
                  </button>
                  <button
                    onClick={() => setRiskFilter('medium')}
                    className={`px-4 py-2 rounded-lg border-2 transition-all font-semibold text-sm ${
                      riskFilter === 'medium'
                        ? 'border-amber-500 bg-amber-500/20 text-amber-300 shadow-lg shadow-amber-500/30'
                        : 'border-amber-500/30 text-amber-400/70 hover:bg-amber-500/10 hover:border-amber-500/50'
                    }`}
                  >
                    Medium
                  </button>
                  <button
                    onClick={() => setRiskFilter('high')}
                    className={`px-4 py-2 rounded-lg border-2 transition-all font-semibold text-sm ${
                      riskFilter === 'high'
                        ? 'border-red-500 bg-red-500/20 text-red-300 shadow-lg shadow-red-500/30'
                        : 'border-red-500/30 text-red-400/70 hover:bg-red-500/10 hover:border-red-500/50'
                    }`}
                  >
                    High
                  </button>
                </div>
              </div>

              {/* Return Range Filter */}
              <div>
                <label className="text-cyan-300 mb-3 block uppercase tracking-wider text-xs" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                  Return Range (%)
                </label>
                <div className="flex gap-2 flex-wrap">
                  <button
                    onClick={() => setReturnFilter('all')}
                    className={`px-4 py-2 rounded-lg border-2 transition-all font-semibold text-sm ${
                      returnFilter === 'all'
                        ? 'border-cyan-500 bg-cyan-500/20 text-cyan-300 shadow-lg shadow-cyan-500/30'
                        : 'border-cyan-500/30 text-cyan-400/70 hover:bg-cyan-500/10 hover:border-cyan-500/50'
                    }`}
                  >
                    All
                  </button>
                  <button
                    onClick={() => setReturnFilter('low')}
                    className={`px-4 py-2 rounded-lg border-2 transition-all font-semibold text-sm ${
                      returnFilter === 'low'
                        ? 'border-cyan-500 bg-cyan-500/20 text-cyan-300 shadow-lg shadow-cyan-500/30'
                        : 'border-cyan-500/30 text-cyan-400/70 hover:bg-cyan-500/10 hover:border-cyan-500/50'
                    }`}
                  >
                    &lt; 10%
                  </button>
                  <button
                    onClick={() => setReturnFilter('medium')}
                    className={`px-4 py-2 rounded-lg border-2 transition-all font-semibold text-sm ${
                      returnFilter === 'medium'
                        ? 'border-cyan-500 bg-cyan-500/20 text-cyan-300 shadow-lg shadow-cyan-500/30'
                        : 'border-cyan-500/30 text-cyan-400/70 hover:bg-cyan-500/10 hover:border-cyan-500/50'
                    }`}
                  >
                    10–14%
                  </button>
                  <button
                    onClick={() => setReturnFilter('high')}
                    className={`px-4 py-2 rounded-lg border-2 transition-all font-semibold text-sm ${
                      returnFilter === 'high'
                        ? 'border-cyan-500 bg-cyan-500/20 text-cyan-300 shadow-lg shadow-cyan-500/30'
                        : 'border-cyan-500/30 text-cyan-400/70 hover:bg-cyan-500/10 hover:border-cyan-500/50'
                    }`}
                  >
                    &gt; 14%
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Results Count */}
          <div className="text-cyan-300/70 mb-4 text-sm animate-fadeInUp" style={{ animationDelay: '0.2s', fontFamily: "'JetBrains Mono', monospace" }}>
            Showing {filteredInvoices.length} {filteredInvoices.length === 1 ? 'opportunity' : 'opportunities'}
          </div>

          {/* Invoice Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {filteredInvoices.map((invoice, index) => (
              <div 
                key={invoice.id}
                className="animate-fadeInUp"
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              >
                <InvestmentCard
                  invoice={invoice}
                  onInvest={() => setSelectedInvoice(invoice)}
                />
              </div>
            ))}
          </div>

          {filteredInvoices.length === 0 && (
            <div className="text-center py-16 backdrop-blur-xl bg-slate-800/40 border border-cyan-500/30 rounded-2xl animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
              <div className="text-cyan-400/40 mb-4">
                <Filter className="w-16 h-16 mx-auto" />
              </div>
              <h3 className="text-white mb-2 font-bold">No investments found</h3>
              <p className="text-cyan-200/70">Try adjusting your filters to see more opportunities</p>
            </div>
          )}
        </main>

        {/* Footer */}
        <footer className="border-t border-cyan-500/20 backdrop-blur-xl bg-slate-900/50 py-6 mt-auto animate-fadeIn" style={{ animationDelay: '0.5s' }}>
          <div className="max-w-7xl mx-auto px-6 text-center">
            <p className="text-cyan-300/50 text-sm" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
              All investments are secured by smart contracts and transparently recorded on-chain.
            </p>
          </div>
        </footer>

        {/* Investment Modal */}
        {selectedInvoice && (
          <InvestmentModal
            invoice={selectedInvoice}
            onClose={() => setSelectedInvoice(null)}
            navigate={navigate}
          />
        )}
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