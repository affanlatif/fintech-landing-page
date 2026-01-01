import React, { useState } from 'react';
import { X, TrendingUp, Calendar, Coins, CheckCircle2 } from 'lucide-react';
import { TransactionModal } from './TransactionModal';
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

interface InvestmentModalProps {
  invoice: Invoice;
  onClose: () => void;
  navigate: (screen: Screen) => void;
}

export function InvestmentModal({ invoice, onClose, navigate }: InvestmentModalProps) {
  const [investmentAmount, setInvestmentAmount] = useState('');
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showTxModal, setShowTxModal] = useState(false);

  const handleConfirm = (e: React.FormEvent) => {
    e.preventDefault();
    setIsConfirmed(true);
    setShowTxModal(true);
  };

  const handleTxModalClose = () => {
    setShowTxModal(false);
    setShowSuccessMessage(true);

    // Show success message for 2 seconds, then redirect to Smart Contract Flow
    setTimeout(() => {
      navigate('smart-contract');
      onClose();
    }, 2500);
  };

  const handleClose = () => {
    setIsConfirmed(false);
    setInvestmentAmount('');
    onClose();
  };

  // Calculate estimated return
  const returnRate = parseFloat(invoice.expectedReturn.split('–')[1]) / 100;
  const estimatedReturnAmount = investmentAmount 
    ? (parseFloat(investmentAmount) * returnRate).toFixed(2)
    : '0.00';

  const formattedMaturityDate = new Date(invoice.maturityDate).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  if (isConfirmed && showSuccessMessage) {
    return (
      <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fadeIn" style={{ fontFamily: "'Sora', sans-serif" }}>
        <div className="backdrop-blur-xl bg-slate-800/90 border-2 border-emerald-500/50 rounded-2xl max-w-md w-full p-8 shadow-2xl animate-fadeInUp" style={{ boxShadow: '0 20px 60px rgba(16, 185, 129, 0.4)' }}>
          <div className="text-center">
            <div 
              className="w-16 h-16 bg-emerald-500/20 backdrop-blur-xl border-2 border-emerald-500/50 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse"
              style={{ boxShadow: '0 0 40px rgba(16, 185, 129, 0.5)' }}
            >
              <CheckCircle2 className="w-10 h-10 text-emerald-400" />
            </div>
            
            <h2 
              className="mb-3 font-bold text-2xl"
              style={{
                background: 'linear-gradient(to right, #ffffff, #10B981)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              Investment Confirmed!
            </h2>
            
            <p className="text-cyan-200/80 mb-6">
              Your investment has been successfully processed and recorded on the blockchain.
            </p>

            <div className="backdrop-blur-xl bg-slate-900/40 border border-cyan-500/30 rounded-xl p-6 mb-6 text-left">
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-cyan-400/60 text-xs uppercase tracking-wider">MSME</span>
                  <span className="text-white font-semibold">{invoice.msmeName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-cyan-400/60 text-xs uppercase tracking-wider">Investment Amount</span>
                  <span className="text-white font-semibold">₹{parseFloat(investmentAmount).toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-cyan-400/60 text-xs uppercase tracking-wider">Estimated Return</span>
                  <span className="text-emerald-400 font-bold">₹{parseFloat(estimatedReturnAmount).toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-cyan-400/60 text-xs uppercase tracking-wider">Maturity Date</span>
                  <span className="text-white font-semibold" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                    {formattedMaturityDate}
                  </span>
                </div>
              </div>
            </div>

            <p className="text-cyan-400 text-sm animate-pulse" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
              Redirecting to Smart Contract Flow...
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fadeIn" style={{ fontFamily: "'Sora', sans-serif" }}>
      <div className="backdrop-blur-xl bg-slate-800/90 border border-cyan-500/30 rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl" style={{ boxShadow: '0 20px 60px rgba(0, 217, 255, 0.3)' }}>
        {/* Header */}
        <div className="sticky top-0 backdrop-blur-xl bg-slate-900/90 border-b border-cyan-500/20 px-6 py-4 flex items-center justify-between rounded-t-2xl">
          <h2 className="text-white font-bold tracking-wide">Investment Preview</h2>
          <button
            onClick={handleClose}
            className="text-cyan-400/60 hover:text-cyan-400 transition-all p-1 rounded-lg hover:bg-cyan-500/10"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <form onSubmit={handleConfirm} className="p-6">
          {/* Invoice Details */}
          <div className="backdrop-blur-xl bg-slate-900/40 border border-cyan-500/30 rounded-xl p-5 mb-6">
            <h3 className="text-cyan-300 mb-4 font-bold uppercase tracking-wider text-sm" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
              Invoice Details
            </h3>
            
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-cyan-400/60 text-xs uppercase tracking-wider">MSME Name</span>
                <span className="text-white font-semibold">{invoice.msmeName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-cyan-400/60 text-xs uppercase tracking-wider">Invoice ID</span>
                <span className="text-white font-semibold" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                  {invoice.id}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-cyan-400/60 text-xs uppercase tracking-wider">Total Amount</span>
                <span 
                  className="font-bold"
                  style={{
                    background: 'linear-gradient(135deg, #F59E0B 0%, #10B981 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}
                >
                  {new Intl.NumberFormat('en-IN', {
                    style: 'currency',
                    currency: 'INR',
                    maximumFractionDigits: 0
                  }).format(invoice.amount)}
                </span>
              </div>
            </div>
          </div>

          {/* Investment Amount Input */}
          <div className="mb-6">
            <label htmlFor="investment-amount" className="text-cyan-300 mb-2 block uppercase text-xs tracking-wider" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
              Investment Amount (USDC)
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-400/60 font-semibold">₹</span>
              <input
                id="investment-amount"
                type="number"
                value={investmentAmount}
                onChange={(e) => setInvestmentAmount(e.target.value)}
                placeholder="Enter amount"
                className="w-full backdrop-blur-xl bg-slate-900/50 border border-cyan-500/30 rounded-lg pl-8 px-4 py-3 text-white placeholder:text-cyan-400/40 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                style={{ colorScheme: 'dark' }}
                min="1000"
                step="1000"
                required
              />
            </div>
            <div className="text-cyan-400/60 text-xs mt-2">
              Minimum investment: ₹1,000
            </div>
          </div>

          {/* Estimated Returns */}
          <div className="backdrop-blur-xl bg-gradient-to-br from-cyan-500/10 to-emerald-500/10 border border-cyan-500/30 rounded-xl p-5 mb-6">
            <h3 className="text-cyan-300 mb-4 font-bold uppercase tracking-wider text-sm" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
              Your Investment Summary
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div 
                  className="w-10 h-10 bg-emerald-500/20 backdrop-blur-xl border border-emerald-500/50 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ boxShadow: '0 0 20px rgba(16, 185, 129, 0.3)' }}
                >
                  <TrendingUp className="w-5 h-5 text-emerald-400" />
                </div>
                <div className="flex-1">
                  <div className="text-cyan-400/60 text-xs mb-1 uppercase tracking-wider">Estimated Return</div>
                  <div className="text-emerald-400 font-bold">
                    ₹{parseFloat(estimatedReturnAmount).toLocaleString('en-IN')} ({invoice.expectedReturn})
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div 
                  className="w-10 h-10 bg-cyan-500/20 backdrop-blur-xl border border-cyan-500/50 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ boxShadow: '0 0 20px rgba(0, 217, 255, 0.3)' }}
                >
                  <Calendar className="w-5 h-5 text-cyan-400" />
                </div>
                <div className="flex-1">
                  <div className="text-cyan-400/60 text-xs mb-1 uppercase tracking-wider">Maturity Date</div>
                  <div className="text-white font-semibold" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                    {formattedMaturityDate}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div 
                  className="w-10 h-10 bg-amber-500/20 backdrop-blur-xl border border-amber-500/50 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ boxShadow: '0 0 20px rgba(245, 158, 11, 0.3)' }}
                >
                  <Coins className="w-5 h-5 text-amber-400" />
                </div>
                <div className="flex-1">
                  <div className="text-cyan-400/60 text-xs mb-1 uppercase tracking-wider">Payment Method</div>
                  <div className="text-white font-semibold">USDC Stablecoin</div>
                </div>
              </div>
            </div>
          </div>

          {/* Info Box */}
          <div className="backdrop-blur-xl bg-slate-900/40 border border-cyan-500/30 rounded-lg p-4 mb-6">
            <p className="text-cyan-200/70 text-sm">
              <strong className="text-cyan-300">Smart Contract Protection:</strong> Your investment is secured by blockchain smart contracts. Returns will be automatically distributed upon invoice payment.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <button
              type="button"
              onClick={handleClose}
              className="flex-1 backdrop-blur-xl bg-slate-900/50 border-2 border-cyan-500/30 text-cyan-300 hover:bg-slate-900/70 hover:border-cyan-500/50 py-3 rounded-xl transition-all font-bold"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="group relative flex-1 py-3 rounded-xl transition-all font-bold disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, #F59E0B 0%, #10B981 100%)',
                boxShadow: '0 10px 40px rgba(245, 158, 11, 0.3)',
              }}
              disabled={!investmentAmount || parseFloat(investmentAmount) < 1000}
              onMouseEnter={(e) => {
                if (!(e.currentTarget.disabled)) {
                  e.currentTarget.style.boxShadow = '0 15px 50px rgba(245, 158, 11, 0.5)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 10px 40px rgba(245, 158, 11, 0.3)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              <span className="text-slate-900 relative z-10">Confirm Investment</span>
            </button>
          </div>
        </form>
      </div>

      <TransactionModal
        isOpen={showTxModal}
        onClose={handleTxModalClose}
        type="invest"
        amount={Number(investmentAmount)}
        invoiceId={invoice.id}
      />

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
}