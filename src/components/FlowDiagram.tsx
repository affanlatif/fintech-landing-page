import React from 'react';
import { Building2, FileText, Boxes, Users, ChevronRight } from 'lucide-react';

export function FlowDiagram() {
  const steps = [
    {
      icon: Building2,
      label: 'MSME',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      icon: FileText,
      label: 'Invoice',
      color: 'text-blue-700',
      bgColor: 'bg-blue-100'
    },
    {
      icon: Boxes,
      label: 'Blockchain',
      color: 'text-blue-800',
      bgColor: 'bg-blue-200'
    },
    {
      icon: Users,
      label: 'Investor',
      color: 'text-blue-900',
      bgColor: 'bg-blue-300'
    }
  ];

  return (
    <div className="flex items-center justify-center gap-3 flex-wrap">
      {steps.map((step, index) => (
        <React.Fragment key={step.label}>
          <div className="flex flex-col items-center gap-3 min-w-[120px]">
            <div className={`${step.bgColor} ${step.color} w-16 h-16 rounded-xl flex items-center justify-center`}>
              <step.icon className="w-8 h-8" />
            </div>
            <span className="text-gray-700">{step.label}</span>
          </div>
          
          {index < steps.length - 1 && (
            <ChevronRight className="w-6 h-6 text-gray-400 hidden sm:block" />
          )}
        </React.Fragment>
      ))}
    </div>
  );
}
