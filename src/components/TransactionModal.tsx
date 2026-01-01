import React, { useState, useEffect } from 'react';
import { CheckCircle2, ExternalLink } from 'lucide-react';

interface TransactionModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'tokenize' | 'invest';
  amount?: number;
  invoiceId?: string;
}

export function TransactionModal({ isOpen, onClose, type, amount, invoiceId }: TransactionModalProps) {
  const [step, setStep] = useState<'deploying' | 'minting' | 'confirming' | 'success'>('deploying');
  const [txHash, setTxHash] = useState('');

  useEffect(() => {
    if (!isOpen) {
      setStep('deploying');
      return;
    }

    // Generate realistic transaction hash
    const generateTxHash = () => {
      const chars = '0123456789abcdef';
      let hash = '0x';
      for (let i = 0; i < 64; i++) {
        hash += chars[Math.floor(Math.random() * chars.length)];
      }
      return hash;
    };

    const hash = generateTxHash();
    setTxHash(hash);

    // Simulate transaction steps
    const timer1 = setTimeout(() => setStep('minting'), 1500);
    const timer2 = setTimeout(() => setStep('confirming'), 3000);
    const timer3 = setTimeout(() => setStep('success'), 4500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const getStepText = () => {
    if (type === 'tokenize') {
      switch (step) {
        case 'deploying': return 'Deploying Smart Contract...';
        case 'minting': return 'Minting Invoice NFT...';
        case 'confirming': return 'Confirming Transaction...';
        case 'success': return 'Invoice Tokenized Successfully!';
      }
    } else {
      switch (step) {
        case 'deploying': return 'Requesting Wallet Approval...';
        case 'minting': return 'Transferring Stablecoins...';
        case 'confirming': return 'Recording Investment On-Chain...';
        case 'success': return 'Investment Recorded Successfully!';
      }
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4" style={{ fontFamily: "'Sora', sans-serif" }}>
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      {/* Modal */}
      <div 
        className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 max-w-lg w-full border border-cyan-500/30 shadow-2xl"
        style={{ boxShadow: '0 25px 50px -12px rgba(0, 217, 255, 0.25)' }}
      >
        {step !== 'success' ? (
          // Loading State
          <div className="text-center">
            <div className="mb-6 flex justify-center">
              <div className="relative">
                <div className="w-20 h-20 border-4 border-cyan-500/30 border-t-cyan-400 rounded-full animate-spin" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 bg-cyan-500/20 rounded-full" />
                </div>
              </div>
            </div>

            <h3 className="text-white font-bold text-2xl mb-3">{getStepText()}</h3>
            
            <div className="space-y-2 mb-6">
              <StepIndicator label="Deploy Contract" active={step === 'deploying'} completed={['minting', 'confirming', 'success'].includes(step)} />
              <StepIndicator label={type === 'tokenize' ? 'Mint NFT' : 'Transfer Funds'} active={step === 'minting'} completed={['confirming', 'success'].includes(step)} />
              <StepIndicator label="Confirm Transaction" active={step === 'confirming'} completed={step === 'success'} />
            </div>

            <p className="text-cyan-100/60 text-sm">
              Please wait while we process your transaction...
            </p>
          </div>
        ) : (
          // Success State
          <div className="text-center animate-fadeIn">
            <div className="mb-6 flex justify-center">
              <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center animate-pulse border border-emerald-500/30">
                <CheckCircle2 className="w-12 h-12 text-emerald-400" />
              </div>
            </div>

            <h3 className="text-white font-bold text-2xl mb-3">
              {type === 'tokenize' ? 'Invoice Tokenized!' : 'Investment Confirmed!'}
            </h3>

            <p className="text-cyan-100/70 text-sm mb-6">
              {type === 'tokenize' 
                ? 'Your invoice has been successfully tokenized and is now available for investment.'
                : 'Your investment has been successfully recorded on-chain.'}
            </p>

            {/* Transaction Details */}
            <div className="bg-slate-900/50 rounded-xl p-4 mb-6 border border-cyan-500/20 text-left">
              <div className="space-y-3">
                {invoiceId && (
                  <div className="flex justify-between text-sm">
                    <span className="text-cyan-100/50">Invoice ID:</span>
                    <span className="text-white font-mono">{invoiceId}</span>
                  </div>
                )}
                {amount && (
                  <div className="flex justify-between text-sm">
                    <span className="text-cyan-100/50">Amount:</span>
                    <span className="text-white font-bold">₹{amount.toLocaleString()}</span>
                  </div>
                )}
                <div className="flex justify-between text-sm">
                  <span className="text-cyan-100/50">Network:</span>
                  <span className="text-white">Ethereum (Simulated)</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-cyan-100/50">Gas Fee:</span>
                  <span className="text-emerald-400">~$2.45</span>
                </div>
                <div className="pt-3 border-t border-cyan-500/20">
                  <div className="text-cyan-100/50 text-xs mb-1">Transaction Hash:</div>
                  <div className="flex items-center gap-2 bg-slate-800/50 rounded-lg p-2 border border-black">
                    <code className="text-cyan-400 text-xs font-mono break-all flex-1">
                      {txHash.slice(0, 20)}...{txHash.slice(-20)}
                    </code>
                    <ExternalLink className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  </div>
                </div>
              </div>
            </div>

            {/* Info Box */}
            <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4 mb-6">
              <p className="text-blue-300 text-xs" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                ✓ Executed via Ethereum-compatible smart contract (simulated for demo)
              </p>
            </div>

            <button
              onClick={onClose}
              className="w-full bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-400 hover:to-emerald-400 text-slate-900 font-bold py-3 rounded-lg border border-black transition-all"
              style={{ 
                boxShadow: '0 4px 6px -1px rgba(0, 217, 255, 0.3)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 10px 20px -5px rgba(0, 217, 255, 0.5)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 217, 255, 0.3)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Close
            </button>
          </div>
        )}
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}

function StepIndicator({ label, active, completed }: { label: string; active: boolean; completed: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
        completed 
          ? 'border-emerald-500 bg-emerald-500/20' 
          : active 
          ? 'border-cyan-400 bg-cyan-500/20' 
          : 'border-slate-600 bg-slate-800'
      }`}>
        {completed && <CheckCircle2 className="w-4 h-4 text-emerald-400" />}
        {active && !completed && <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />}
      </div>
      <span className={`text-sm ${
        completed ? 'text-emerald-400' : active ? 'text-cyan-400' : 'text-slate-500'
      }`}>
        {label}
      </span>
    </div>
  );
}
