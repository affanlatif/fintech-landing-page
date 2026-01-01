import React from 'react';
import { Calendar, Building2 } from 'lucide-react';

type InvoiceStatus = 'pending' | 'funded' | 'paid';

interface Invoice {
  id: string;
  buyerName: string;
  amount: number;
  dueDate: string;
  status: InvoiceStatus;
}

interface InvoiceCardProps {
  invoice: Invoice;
}

const statusConfig = {
  pending: {
    label: 'PENDING',
    bgColor: 'bg-amber-500/20',
    textColor: 'text-amber-400',
    borderColor: 'border-amber-500/50',
    glowColor: 'rgba(245, 158, 11, 0.3)'
  },
  funded: {
    label: 'FUNDED',
    bgColor: 'bg-cyan-500/20',
    textColor: 'text-cyan-400',
    borderColor: 'border-cyan-500/50',
    glowColor: 'rgba(0, 217, 255, 0.3)'
  },
  paid: {
    label: 'PAID',
    bgColor: 'bg-emerald-500/20',
    textColor: 'text-emerald-400',
    borderColor: 'border-emerald-500/50',
    glowColor: 'rgba(16, 185, 129, 0.3)'
  }
};

export function InvoiceCard({ invoice }: InvoiceCardProps) {
  const status = statusConfig[invoice.status];
  
  // Format date
  const formattedDate = new Date(invoice.dueDate).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  });

  // Format amount
  const formattedAmount = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(invoice.amount);

  return (
    <div 
      className="backdrop-blur-xl bg-slate-800/40 border border-cyan-500/30 rounded-xl p-6 hover:border-cyan-500/60 hover:bg-slate-800/60 transition-all cursor-pointer group relative overflow-hidden"
      style={{ fontFamily: "'Sora', sans-serif" }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = `0 10px 40px ${status.glowColor}`;
        e.currentTarget.style.transform = 'translateY(-4px)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
        e.currentTarget.style.transform = 'translateY(0)';
      }}
    >
      {/* Shimmer Effect on Hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
      
      {/* Header with ID and Status */}
      <div className="flex items-start justify-between mb-4 relative z-10">
        <div>
          <div className="text-cyan-400/60 text-xs mb-1 tracking-wider uppercase" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
            Invoice ID
          </div>
          <div className="text-white font-semibold" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
            {invoice.id}
          </div>
        </div>
        <span 
          className={`${status.bgColor} ${status.textColor} px-3 py-1 rounded-full text-xs border ${status.borderColor} font-semibold backdrop-blur-sm`}
          style={{ 
            fontFamily: "'JetBrains Mono', monospace",
            boxShadow: `0 0 20px ${status.glowColor}`
          }}
        >
          {status.label}
        </span>
      </div>

      {/* Buyer Name */}
      <div className="mb-4 relative z-10">
        <div className="flex items-center gap-2 text-cyan-400/60 text-xs mb-1 uppercase tracking-wider">
          <Building2 className="w-4 h-4" />
          <span>Buyer</span>
        </div>
        <div className="text-white">{invoice.buyerName}</div>
      </div>

      {/* Amount and Due Date */}
      <div className="flex items-center justify-between pt-4 border-t border-cyan-500/20 relative z-10">
        <div>
          <div className="text-cyan-400/60 text-xs mb-1 uppercase tracking-wider">Amount</div>
          <div 
            className="font-bold text-lg"
            style={{
              background: 'linear-gradient(135deg, #00D9FF 0%, #10B981 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            {formattedAmount}
          </div>
        </div>
        <div className="text-right">
          <div className="flex items-center gap-1 text-cyan-400/60 text-xs mb-1 uppercase tracking-wider">
            <Calendar className="w-4 h-4" />
            <span>Due</span>
          </div>
          <div className="text-white text-sm" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
            {formattedDate}
          </div>
        </div>
      </div>
    </div>
  );
}
