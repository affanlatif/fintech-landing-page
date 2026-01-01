import React, { useState } from 'react';
import { WalletProvider } from './contexts/WalletContext';
import { LandingPage } from './components/LandingPage';
import { Dashboard } from './components/Dashboard';
import { CreateInvoice } from './components/CreateInvoice';
import { InvestorMarketplace } from './components/InvestorMarketplace';
import { SmartContractWorkflow } from './components/SmartContractWorkflow';
import { ImpactTrust } from './components/ImpactTrust';

export type Screen = 'landing' | 'msme-dashboard' | 'create-invoice' | 'investor-marketplace' | 'smart-contract' | 'impact-trust';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('landing');

  const navigate = (screen: Screen) => {
    setCurrentScreen(screen);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <WalletProvider>
      {currentScreen === 'landing' && <LandingPage navigate={navigate} />}
      {currentScreen === 'msme-dashboard' && <Dashboard navigate={navigate} />}
      {currentScreen === 'create-invoice' && <CreateInvoice navigate={navigate} />}
      {currentScreen === 'investor-marketplace' && <InvestorMarketplace navigate={navigate} />}
      {currentScreen === 'smart-contract' && <SmartContractWorkflow navigate={navigate} />}
      {currentScreen === 'impact-trust' && <ImpactTrust navigate={navigate} />}
    </WalletProvider>
  );
}