import React from 'react';
import { Plus, Home } from 'lucide-react';
import { InvoiceCard } from './InvoiceCard';
import { StatsWidget } from './ui/stats-widget';
import { ConnectWalletButton } from './ConnectWalletButton';
import { Screen } from '../App';

interface DashboardProps {
  navigate: (screen: Screen) => void;
}

// Mock invoice data
const invoices = [
  {
    id: 'INV-2024-001',
    buyerName: 'Tech Solutions Pvt Ltd',
    amount: 125000,
    dueDate: '2025-01-15',
    status: 'pending' as const
  },
  {
    id: 'INV-2024-002',
    buyerName: 'Global Traders Inc',
    amount: 89500,
    dueDate: '2025-01-20',
    status: 'funded' as const
  },
  {
    id: 'INV-2024-003',
    buyerName: 'Manufacturing Co',
    amount: 234000,
    dueDate: '2025-01-10',
    status: 'paid' as const
  },
  {
    id: 'INV-2024-004',
    buyerName: 'Retail Ventures Ltd',
    amount: 156800,
    dueDate: '2025-02-01',
    status: 'pending' as const
  },
  {
    id: 'INV-2024-005',
    buyerName: 'Digital Services Group',
    amount: 67200,
    dueDate: '2025-01-25',
    status: 'funded' as const
  },
  {
    id: 'INV-2024-006',
    buyerName: 'Export Partners LLC',
    amount: 198000,
    dueDate: '2024-12-28',
    status: 'paid' as const
  }
];

export function Dashboard({ navigate }: DashboardProps) {
  return (
    <div className="min-h-screen relative overflow-hidden" style={{ fontFamily: "'Sora', sans-serif" }}>
      {/* Background Layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900" />
      
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(to right, #00D9FF 1px, transparent 1px), linear-gradient(to bottom, #00D9FF 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
          animation: 'gridMove 20s linear infinite'
        }}
      />
      
      {/* Radial Gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-slate-900/30 to-slate-900/50" />
      
      {/* Glowing Orbs */}
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
            
            <div className="flex items-center gap-4">
              <ConnectWalletButton />
              <span className="text-cyan-200 text-sm" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                Welcome, <span className="text-cyan-400 font-semibold">MSME User</span>
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
          {/* Section Header */}
          <div className="flex items-center justify-between mb-8 animate-fadeInUp">
            <div>
              <h1 
                className="mb-2 font-bold tracking-tight"
                style={{ 
                  fontSize: '2.5rem',
                  background: 'linear-gradient(to right, #ffffff, #00D9FF)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                Your Invoices
              </h1>
              <p className="text-cyan-200/70">Manage and tokenize your unpaid invoices</p>
            </div>
            <button 
              onClick={() => navigate('create-invoice')}
              className="group relative px-6 py-3 rounded-xl transition-all flex items-center gap-2 overflow-hidden"
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
              <Plus className="w-5 h-5 text-slate-900 relative z-10" />
              <span className="font-bold text-slate-900 relative z-10">Create New Invoice</span>
            </button>
          </div>

          {/* Stats Widgets */}
          <div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 animate-fadeInUp"
            style={{ animationDelay: '0.1s' }}
          >
            <StatsWidget 
              label="Total Value"
              prefix="₹"
              suffix="k"
              initialAmount={872}
              initialChange={24}
              initialData={[45, 52, 48, 65, 58, 70, 75]}
              autoUpdate={true}
            />
            <StatsWidget 
              label="Funded"
              prefix="₹"
              suffix="k"
              initialAmount={534}
              initialChange={18}
              initialData={[30, 45, 42, 55, 50, 62, 58]}
              autoUpdate={true}
            />
            <StatsWidget 
              label="Pending"
              prefix="₹"
              suffix="k"
              initialAmount={338}
              initialChange={-8}
              initialData={[60, 55, 58, 52, 48, 45, 42]}
              autoUpdate={true}
            />
          </div>

          {/* Invoice Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {invoices.map((invoice, index) => (
              <div 
                key={invoice.id} 
                className="animate-fadeInUp"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <InvoiceCard invoice={invoice} />
              </div>
            ))}
          </div>
        </main>

        {/* Footer */}
        <footer className="border-t border-cyan-500/20 backdrop-blur-xl bg-slate-900/50 py-6 mt-auto animate-fadeIn" style={{ animationDelay: '0.8s' }}>
          <div className="max-w-7xl mx-auto px-6 text-center">
            <p className="text-cyan-300/50 text-sm" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
              All invoices are tokenized and secured on-chain with blockchain technology.
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