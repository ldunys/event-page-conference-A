import React from 'react';
import { ChevronDown } from 'lucide-react';

export function ScrollArrow() {
  return (
    <div className="md:hidden absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
      <ChevronDown className="w-8 h-8 text-blue-500" strokeWidth={3} />
    </div>
  );
}