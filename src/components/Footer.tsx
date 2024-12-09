import React from 'react';
import { Scale } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Scale className="h-6 w-6 text-amber-500" />
            <span className="text-lg font-semibold">Advokatska Kancelarija Trivunović</span>
          </div>
          <div className="text-sm text-gray-400">
            © {new Date().getFullYear()} Advokatska Kancelarija Trivunović. Sva prava zadržana.
          </div>
        </div>
      </div>
    </footer>
  );
}