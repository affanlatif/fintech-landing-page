import React, { useState } from 'react';
import { ArrowLeft, Upload, CheckCircle2, Shield, TrendingUp, Coins, Info, Home } from 'lucide-react';
import { ConnectWalletButton } from './ConnectWalletButton';
import { TransactionModal } from './TransactionModal';
import { SmartContractInfo } from './SmartContractInfo';
import { Screen } from '../App';

interface CreateInvoiceProps {
  navigate: (screen: Screen) => void;
}

export function CreateInvoice({ navigate }: CreateInvoiceProps) {
  const [buyerName, setBuyerName] = useState('');
  const [amount, setAmount] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [fileName, setFileName] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showTxModal, setShowTxModal] = useState(false);
  const [invoiceId, setInvoiceId] = useState('');

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Generate invoice ID
    const newInvoiceId = `INV-2024-${String(Math.floor(Math.random() * 999) + 100).padStart(3, '0')}`;
    setInvoiceId(newInvoiceId);
    
    // Show transaction modal
    setShowTxModal(true);
    setIsSubmitted(true);
  };

  const handleTxModalClose = () => {
    setShowTxModal(false);
    setShowSuccessMessage(true);

    // Navigate to dashboard after brief delay
    setTimeout(() => {
      navigate('msme-dashboard');
    }, 2000);
  };

  const handleCreateAnother = () => {
    setBuyerName('');
    setAmount('');
    setDueDate('');
    setFileName('');
    setIsSubmitted(false);
    setShowSuccessMessage(false);
  };

  // Calculate auto-generated values based on amount
  const tokenUnits = amount ? Math.floor(Number(amount) / 1000) : 100;
  const estimatedYield = '10–12%';
  const riskScore = 'Medium';

  if (isSubmitted && showSuccessMessage) {
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
        <div className="absolute top-20 left-20 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />

        <div className="relative z-10">
          {/* Top Bar */}
          <header className="border-b border-cyan-500/20 backdrop-blur-xl bg-slate-900/50">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
              <button 
                onClick={() => navigate('landing')}
                className="flex items-center gap-3 hover:opacity-80 transition-all group"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-emerald-500 rounded-lg flex items-center justify-center shadow-lg shadow-cyan-500/50">
                  <span className="text-slate-900 font-bold" style={{ fontFamily: "'JetBrains Mono', monospace" }}>IX</span>
                </div>
                <span className="text-white font-bold tracking-wide">InvoiceX</span>
              </button>
            </div>
          </header>

          {/* Success State */}
          <main className="max-w-2xl mx-auto px-6 py-16">
            <div className="text-center animate-fadeInUp">
              <div 
                className="w-20 h-20 bg-emerald-500/20 backdrop-blur-xl border-2 border-emerald-500/50 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse"
                style={{ boxShadow: '0 0 40px rgba(16, 185, 129, 0.5)' }}
              >
                <CheckCircle2 className="w-12 h-12 text-emerald-400" />
              </div>
              
              <h1 
                className="mb-4 font-bold"
                style={{
                  fontSize: '2.5rem',
                  background: 'linear-gradient(to right, #ffffff, #10B981)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                Invoice Successfully Tokenized!
              </h1>
              
              <p className="text-cyan-200/80 mb-6">
                Your invoice is now ready for investment on the blockchain.
              </p>

              <div 
                className="backdrop-blur-xl bg-emerald-500/20 border-2 border-emerald-500/50 rounded-lg px-6 py-4 inline-flex items-center gap-3 mb-8"
                style={{ boxShadow: '0 0 30px rgba(16, 185, 129, 0.3)' }}
              >
                <Shield className="w-5 h-5 text-emerald-400" />
                <span className="text-emerald-300 font-bold" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                  NFT MINTED SUCCESSFULLY
                </span>
              </div>

              <div className="backdrop-blur-xl bg-slate-800/40 border border-cyan-500/30 rounded-xl p-6 mb-8 text-left">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="text-cyan-400/60 text-xs mb-1 uppercase tracking-wider">Buyer Name</div>
                    <div className="text-white font-semibold">{buyerName}</div>
                  </div>
                  <div>
                    <div className="text-cyan-400/60 text-xs mb-1 uppercase tracking-wider">Amount</div>
                    <div 
                      className="font-bold"
                      style={{
                        background: 'linear-gradient(135deg, #00D9FF 0%, #10B981 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                      }}
                    >
                      ₹{Number(amount).toLocaleString('en-IN')}
                    </div>
                  </div>
                  <div>
                    <div className="text-cyan-400/60 text-xs mb-1 uppercase tracking-wider">Due Date</div>
                    <div className="text-white font-semibold" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                      {new Date(dueDate).toLocaleDateString('en-IN', {
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric'
                      })}
                    </div>
                  </div>
                  <div>
                    <div className="text-cyan-400/60 text-xs mb-1 uppercase tracking-wider">Token Units</div>
                    <div className="text-white font-semibold">{tokenUnits} Tokens</div>
                  </div>
                </div>
              </div>

              <p className="text-cyan-400 text-sm animate-pulse" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                Redirecting to Smart Contract Flow...
              </p>
            </div>
          </main>
        </div>

        <style>{`
          @keyframes gridMove {
            0% { transform: translateY(0); }
            100% { transform: translateY(60px); }
          }
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeInUp {
            animation: fadeInUp 0.8s ease-out forwards;
            opacity: 0;
          }
        `}</style>
      </div>
    );
  }

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
        <main className="max-w-7xl mx-auto px-6 py-8">
          {/* Back Button */}
          <button 
            onClick={() => navigate('msme-dashboard')}
            className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 mb-6 transition-all animate-fadeInUp backdrop-blur-sm bg-cyan-500/10 px-3 py-1.5 rounded-lg border border-cyan-500/30"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Dashboard
          </button>

          {/* Page Title */}
          <div className="mb-8 animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
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
              Create New Invoice
            </h1>
            <p className="text-cyan-200/70">Tokenize your unpaid invoice and get instant access to liquidity</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Form Section */}
            <div className="lg:col-span-2">
              <form 
                onSubmit={handleSubmit} 
                className="backdrop-blur-xl bg-slate-800/40 border border-cyan-500/30 rounded-2xl p-8 shadow-2xl animate-fadeInUp"
                style={{ animationDelay: '0.2s' }}
              >
                <h2 className="text-white mb-6 font-bold text-xl">Invoice Details</h2>

                {/* Buyer Name */}
                <div className="mb-6">
                  <label htmlFor="buyerName" className="text-cyan-300 mb-2 block uppercase text-xs tracking-wider" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                    Buyer Name
                  </label>
                  <input
                    id="buyerName"
                    type="text"
                    value={buyerName}
                    onChange={(e) => setBuyerName(e.target.value)}
                    placeholder="Enter buyer company name"
                    className="w-full backdrop-blur-xl bg-slate-900/50 border border-cyan-500/30 rounded-lg px-4 py-3 text-white placeholder:text-cyan-400/40 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                    required
                  />
                </div>

                {/* Invoice Amount */}
                <div className="mb-6">
                  <label htmlFor="amount" className="text-cyan-300 mb-2 block uppercase text-xs tracking-wider" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                    Invoice Amount (₹)
                  </label>
                  <input
                    id="amount"
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="Enter amount in INR"
                    className="w-full backdrop-blur-xl bg-slate-900/50 border border-cyan-500/30 rounded-lg px-4 py-3 text-white placeholder:text-cyan-400/40 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                    required
                  />
                </div>

                {/* Due Date */}
                <div className="mb-6">
                  <label htmlFor="dueDate" className="text-cyan-300 mb-2 block uppercase text-xs tracking-wider" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                    Due Date
                  </label>
                  <input
                    id="dueDate"
                    type="date"
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
                    className="w-full backdrop-blur-xl bg-slate-900/50 border border-cyan-500/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                    style={{ colorScheme: 'dark' }}
                    required
                  />
                </div>

                {/* Upload Invoice */}
                <div className="mb-8">
                  <label htmlFor="invoice-file" className="text-cyan-300 mb-2 block uppercase text-xs tracking-wider" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                    Upload Invoice (PDF)
                  </label>
                  <div className="border-2 border-dashed border-cyan-500/30 rounded-lg p-8 text-center hover:border-cyan-500/60 transition-all cursor-pointer backdrop-blur-xl bg-slate-900/30">
                    <input
                      id="invoice-file"
                      type="file"
                      accept=".pdf"
                      onChange={handleFileUpload}
                      className="hidden"
                      required
                    />
                    <label htmlFor="invoice-file" className="cursor-pointer">
                      <Upload className="w-10 h-10 text-cyan-400/60 mx-auto mb-3" />
                      {fileName ? (
                        <div className="text-white font-semibold mb-1">{fileName}</div>
                      ) : (
                        <>
                          <div className="text-white font-semibold mb-1">
                            Click to upload or drag and drop
                          </div>
                          <div className="text-cyan-400/60 text-sm">PDF files only</div>
                        </>
                      )}
                    </label>
                  </div>
                </div>

                {/* Auto-Generated Section */}
                <div className="backdrop-blur-xl bg-gradient-to-br from-cyan-500/10 to-emerald-500/10 border border-cyan-500/30 rounded-xl p-6 mb-8">
                  <h3 className="text-cyan-300 mb-4 font-bold uppercase tracking-wider text-sm" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                    Auto-Generated Analysis
                  </h3>
                  
                  <div className="grid grid-cols-3 gap-4">
                    <div className="backdrop-blur-xl bg-slate-900/40 rounded-lg p-4 border border-amber-500/50 hover:border-amber-500/80 transition-all group">
                      <div className="flex items-center gap-2 text-amber-400 mb-2">
                        <Shield className="w-5 h-5" />
                        <span className="text-amber-400/70 text-xs uppercase tracking-wider">Risk Score</span>
                      </div>
                      <div className="text-white font-bold">{riskScore}</div>
                    </div>

                    <div className="backdrop-blur-xl bg-slate-900/40 rounded-lg p-4 border border-emerald-500/50 hover:border-emerald-500/80 transition-all group">
                      <div className="flex items-center gap-2 text-emerald-400 mb-2">
                        <TrendingUp className="w-5 h-5" />
                        <span className="text-emerald-400/70 text-xs uppercase tracking-wider">Est. Yield</span>
                      </div>
                      <div className="text-white font-bold">{estimatedYield}</div>
                    </div>

                    <div className="backdrop-blur-xl bg-slate-900/40 rounded-lg p-4 border border-cyan-500/50 hover:border-cyan-500/80 transition-all group">
                      <div className="flex items-center gap-2 text-cyan-400 mb-2">
                        <Coins className="w-5 h-5" />
                        <span className="text-cyan-400/70 text-xs uppercase tracking-wider">Token Units</span>
                      </div>
                      <div className="text-white font-bold">{tokenUnits} Tokens</div>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="group relative w-full py-4 rounded-xl font-bold transition-all overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{
                    background: 'linear-gradient(135deg, #00D9FF 0%, #10B981 100%)',
                    boxShadow: '0 10px 40px rgba(0, 217, 255, 0.3)',
                  }}
                  disabled={!buyerName || !amount || !dueDate || !fileName}
                  onMouseEnter={(e) => {
                    if (!(!buyerName || !amount || !dueDate || !fileName)) {
                      e.currentTarget.style.boxShadow = '0 15px 50px rgba(0, 217, 255, 0.5)';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = '0 10px 40px rgba(0, 217, 255, 0.3)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                  <span className="text-slate-900 relative z-10">Tokenize Invoice</span>
                </button>
              </form>
            </div>

            {/* Side Information Panel */}
            <div className="lg:col-span-1">
              <div 
                className="backdrop-blur-xl bg-gradient-to-br from-cyan-500/10 to-emerald-500/10 border border-cyan-500/30 rounded-2xl p-6 sticky top-24 shadow-2xl animate-fadeInUp"
                style={{ animationDelay: '0.3s' }}
              >
                <div className="flex items-center gap-2 text-cyan-300 mb-4">
                  <Info className="w-5 h-5" />
                  <h3 className="font-bold uppercase tracking-wider text-sm" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                    How It Works
                  </h3>
                </div>

                <div className="space-y-4">
                  <div className="flex gap-3">
                    <div 
                      className="w-6 h-6 bg-gradient-to-br from-cyan-400 to-emerald-500 text-slate-900 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold"
                      style={{ boxShadow: '0 0 20px rgba(0, 217, 255, 0.5)' }}
                    >
                      1
                    </div>
                    <div>
                      <div className="text-white font-semibold mb-1">Submit Invoice Details</div>
                      <div className="text-cyan-200/70 text-sm">
                        Provide buyer information and upload your invoice document
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div 
                      className="w-6 h-6 bg-gradient-to-br from-cyan-400 to-emerald-500 text-slate-900 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold"
                      style={{ boxShadow: '0 0 20px rgba(0, 217, 255, 0.5)' }}
                    >
                      2
                    </div>
                    <div>
                      <div className="text-white font-semibold mb-1">NFT Minting</div>
                      <div className="text-cyan-200/70 text-sm">
                        Each invoice is converted into a secure NFT on the blockchain
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div 
                      className="w-6 h-6 bg-gradient-to-br from-cyan-400 to-emerald-500 text-slate-900 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold"
                      style={{ boxShadow: '0 0 20px rgba(0, 217, 255, 0.5)' }}
                    >
                      3
                    </div>
                    <div>
                      <div className="text-white font-semibold mb-1">Get Funded</div>
                      <div className="text-cyan-200/70 text-sm">
                        Investors can purchase your tokenized invoice for instant liquidity
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-cyan-500/20">
                  <div className="text-cyan-200/70 text-sm space-y-3">
                    <p>
                      <strong className="text-cyan-300">Transparency:</strong> All transactions are recorded on-chain
                    </p>
                    <p>
                      <strong className="text-cyan-300">Security:</strong> Smart contracts ensure automated payments
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="border-t border-cyan-500/20 backdrop-blur-xl bg-slate-900/50 py-6 mt-12 animate-fadeIn" style={{ animationDelay: '0.5s' }}>
          <div className="max-w-7xl mx-auto px-6 text-center">
            <p className="text-cyan-300/50 text-sm" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
              Secure invoice tokenization powered by blockchain technology
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

      {/* Transaction Modal */}
      <TransactionModal 
        isOpen={showTxModal}
        onClose={handleTxModalClose}
        type="tokenize"
        amount={Number(amount)}
        invoiceId={invoiceId}
      />
    </div>
  );
}