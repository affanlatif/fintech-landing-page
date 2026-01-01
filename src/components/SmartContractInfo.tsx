import React from 'react';
import { Shield, Lock, Zap } from 'lucide-react';

export function SmartContractInfo() {
  return (
    <div 
      className="bg-slate-900/50 backdrop-blur-xl rounded-2xl p-6 border border-cyan-500/30"
      style={{ 
        boxShadow: '0 10px 40px -10px rgba(0, 217, 255, 0.2)',
        fontFamily: "'Sora', sans-serif"
      }}
    >
      <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
        <Shield className="w-5 h-5 text-cyan-400" />
        Smart Contract Logic
      </h3>

      <div className="space-y-4">
        <InfoItem 
          icon={<Lock className="w-5 h-5" />}
          title="Escrow Protection"
          description="Smart contract holds investor funds in escrow until invoice payment is received"
          color="emerald"
        />
        
        <InfoItem 
          icon={<Zap className="w-5 h-5" />}
          title="Auto-Settlement"
          description="Automatic fund distribution to investors upon invoice payment confirmation"
          color="amber"
        />
        
        <InfoItem 
          icon={<Shield className="w-5 h-5" />}
          title="Transparent Tracking"
          description="All transactions recorded immutably on blockchain for complete transparency"
          color="cyan"
        />
      </div>

      <div className="mt-6 pt-4 border-t border-cyan-500/20">
        <p className="text-cyan-100/40 text-xs text-center" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
          Powered by Ethereum-compatible smart contracts
        </p>
      </div>
    </div>
  );
}

function InfoItem({ 
  icon, 
  title, 
  description, 
  color 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string; 
  color: 'emerald' | 'amber' | 'cyan';
}) {
  const colorClasses = {
    emerald: 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400',
    amber: 'bg-amber-500/10 border-amber-500/30 text-amber-400',
    cyan: 'bg-cyan-500/10 border-cyan-500/30 text-cyan-400',
  };

  return (
    <div className="flex gap-3">
      <div className={`w-10 h-10 rounded-lg border flex items-center justify-center flex-shrink-0 ${colorClasses[color]}`}>
        {icon}
      </div>
      <div>
        <div className="text-white font-medium text-sm mb-1">{title}</div>
        <div className="text-cyan-100/60 text-xs">{description}</div>
      </div>
    </div>
  );
}
