import React, { useState } from 'react';
import { Wallet, ChevronDown } from 'lucide-react';
import { useWallet } from '../contexts/WalletContext';
import { WalletConnectModal } from './WalletConnectModal';

export function ConnectWalletButton() {
  const { isConnected, walletAddress, walletType, disconnectWallet } = useWallet();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const shortAddress = walletAddress
    ? `${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)}`
    : '';

  if (!isConnected) {
    return (
      <>
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-400 hover:to-emerald-400 text-slate-900 font-bold px-4 py-2 rounded-lg border border-black transition-all"
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
          <Wallet className="w-4 h-4" />
          <span className="text-sm">Connect Wallet</span>
        </button>

        <WalletConnectModal 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)} 
        />
      </>
    );
  }

  return (
    <div className="relative">
      <button
        onClick={() => setShowDropdown(!showDropdown)}
        className="flex items-center gap-2 bg-slate-800/80 hover:bg-slate-700/80 text-white px-4 py-2 rounded-lg border border-black transition-all"
        style={{ 
          boxShadow: '0 4px 6px -1px rgba(0, 217, 255, 0.2)',
        }}
      >
        <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
        <span className="text-sm font-mono">{shortAddress}</span>
        <ChevronDown className="w-4 h-4 text-cyan-400" />
      </button>

      {/* Dropdown */}
      {showDropdown && (
        <>
          <div 
            className="fixed inset-0 z-40" 
            onClick={() => setShowDropdown(false)}
          />
          <div 
            className="absolute right-0 mt-2 w-64 bg-slate-800 border border-cyan-500/30 rounded-lg shadow-2xl z-50 overflow-hidden"
            style={{ boxShadow: '0 25px 50px -12px rgba(0, 217, 255, 0.25)' }}
          >
            <div className="p-4 border-b border-cyan-500/20">
              <div className="text-cyan-400 text-xs mb-1">Connected with {walletType}</div>
              <div className="text-white font-mono text-sm break-all">{walletAddress}</div>
            </div>
            <button
              onClick={() => {
                disconnectWallet();
                setShowDropdown(false);
              }}
              className="w-full px-4 py-3 text-left text-red-400 hover:bg-slate-700/50 transition-colors text-sm font-medium"
            >
              Disconnect Wallet
            </button>
          </div>
        </>
      )}
    </div>
  );
}
