import React, { useState } from 'react';
import { X, CheckCircle2 } from 'lucide-react';
import { useWallet } from '../contexts/WalletContext';

interface WalletConnectModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function WalletConnectModal({ isOpen, onClose }: WalletConnectModalProps) {
  const { connectWallet } = useWallet();
  const [isConnecting, setIsConnecting] = useState(false);
  const [selectedWallet, setSelectedWallet] = useState<'MetaMask' | 'WalletConnect' | null>(null);
  const [connectionSuccess, setConnectionSuccess] = useState(false);

  if (!isOpen) return null;

  const handleWalletSelect = async (type: 'MetaMask' | 'WalletConnect') => {
    setSelectedWallet(type);
    setIsConnecting(true);

    // Simulate connection delay
    setTimeout(() => {
      connectWallet(type);
      setIsConnecting(false);
      setConnectionSuccess(true);

      // Close modal after success animation
      setTimeout(() => {
        setConnectionSuccess(false);
        setSelectedWallet(null);
        onClose();
      }, 1500);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4" style={{ fontFamily: "'Sora', sans-serif" }}>
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={!isConnecting ? onClose : undefined}
      />

      {/* Modal */}
      <div 
        className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 max-w-md w-full border border-cyan-500/30 shadow-2xl"
        style={{ boxShadow: '0 25px 50px -12px rgba(0, 217, 255, 0.25)' }}
      >
        {/* Close Button */}
        {!isConnecting && !connectionSuccess && (
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        )}

        {/* Success State */}
        {connectionSuccess && (
          <div className="text-center animate-fadeIn">
            <div className="mb-4 flex justify-center">
              <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center animate-pulse">
                <CheckCircle2 className="w-10 h-10 text-emerald-400" />
              </div>
            </div>
            <h3 className="text-white font-bold text-xl mb-2">Wallet Connected!</h3>
            <p className="text-cyan-100/70 text-sm">
              Your {selectedWallet} wallet is now connected
            </p>
          </div>
        )}

        {/* Connecting State */}
        {isConnecting && !connectionSuccess && (
          <div className="text-center">
            <div className="mb-4 flex justify-center">
              <div className="w-16 h-16 border-4 border-cyan-500/30 border-t-cyan-400 rounded-full animate-spin" />
            </div>
            <h3 className="text-white font-bold text-xl mb-2">Connecting...</h3>
            <p className="text-cyan-100/70 text-sm">
              Please confirm in your {selectedWallet} wallet
            </p>
          </div>
        )}

        {/* Initial State */}
        {!isConnecting && !connectionSuccess && (
          <>
            <h2 className="text-white font-bold text-2xl mb-2 text-center">Connect Wallet</h2>
            <p className="text-cyan-100/70 text-sm mb-6 text-center">
              Choose your preferred wallet to continue
            </p>

            <div className="space-y-3">
              {/* MetaMask Option */}
              <button
                onClick={() => handleWalletSelect('MetaMask')}
                className="w-full bg-slate-800/50 hover:bg-slate-700/50 border border-black rounded-xl p-4 flex items-center gap-4 transition-all group"
                style={{ 
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.3)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 10px 20px -5px rgba(0, 217, 255, 0.3)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.3)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center border border-black">
                  <span className="text-2xl">🦊</span>
                </div>
                <div className="flex-1 text-left">
                  <div className="text-white font-bold">MetaMask</div>
                  <div className="text-cyan-100/50 text-xs">Connect using MetaMask wallet</div>
                </div>
                <div className="text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity">→</div>
              </button>

              {/* WalletConnect Option */}
              <button
                onClick={() => handleWalletSelect('WalletConnect')}
                className="w-full bg-slate-800/50 hover:bg-slate-700/50 border border-black rounded-xl p-4 flex items-center gap-4 transition-all group"
                style={{ 
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.3)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 10px 20px -5px rgba(0, 217, 255, 0.3)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.3)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center border border-black">
                  <span className="text-2xl">🔗</span>
                </div>
                <div className="flex-1 text-left">
                  <div className="text-white font-bold">WalletConnect</div>
                  <div className="text-cyan-100/50 text-xs">Connect using WalletConnect</div>
                </div>
                <div className="text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity">→</div>
              </button>
            </div>

            {/* Disclaimer */}
            <div className="mt-6 pt-4 border-t border-cyan-500/20">
              <p className="text-cyan-100/40 text-xs text-center" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                Blockchain interactions are simulated for demonstration purposes
              </p>
            </div>
          </>
        )}
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}
