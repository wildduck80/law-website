import React from 'react';
import { Shield } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative bg-slate-900 text-white">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80)',
        }}
      />
      <div className="relative container mx-auto px-4 py-24">
        <div className="max-w-3xl">
          <div className="flex items-center space-x-2 mb-6">
            <Shield className="h-8 w-8 text-amber-500" />
            <h1 className="text-4xl font-bold">Štitimo Vaša Prava</h1>
          </div>
          <p className="text-xl mb-8 text-gray-300">
            Sa preko 10 godina iskustva, pružamo izuzetno pravno zastupanje kada vam je najpotrebnije.
          </p>
          <button className="bg-amber-500 text-slate-900 px-8 py-3 rounded-md font-semibold hover:bg-amber-400 transition-colors duration-200">
            Besplatna Konsultacija
          </button>
        </div>
      </div>
    </div>
  );
}
