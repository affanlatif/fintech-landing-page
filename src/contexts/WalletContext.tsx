import React, { createContext, useContext, useState, ReactNode } from 'react';

interface WalletContextType {
  isConnected: boolean;
  walletAddress: string | null;
  walletType: 'MetaMask' | 'WalletConnect' | null;
  connectWallet: (type: 'MetaMask' | 'WalletConnect') => void;
  disconnectWallet: () => void;
}

const WalletContext = createContext<WalletContextType | undefined>(undefined);

export function WalletProvider({ children }: { children: ReactNode }) {
  const [isConnected, setIsConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState<string | null>(null);
  const [walletType, setWalletType] = useState<'MetaMask' | 'WalletConnect' | null>(null);

  const connectWallet = (type: 'MetaMask' | 'WalletConnect') => {
    // Simulate wallet connection with a realistic address
    const mockAddress = '0xA3F7B2C8E9D1F5A6B3C7E2F8A9D1C5E7B3F92D4A';
    setWalletAddress(mockAddress);
    setWalletType(type);
    setIsConnected(true);
  };

  const disconnectWallet = () => {
    setWalletAddress(null);
    setWalletType(null);
    setIsConnected(false);
  };

  return (
    <WalletContext.Provider
      value={{
        isConnected,
        walletAddress,
        walletType,
        connectWallet,
        disconnectWallet,
      }}
    >
      {children}
    </WalletContext.Provider>
  );
}

export function useWallet() {
  const context = useContext(WalletContext);
  if (context === undefined) {
    throw new Error('useWallet must be used within a WalletProvider');
  }
  return context;
}
