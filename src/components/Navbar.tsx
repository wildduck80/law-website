import React from 'react';
import { Scale } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="bg-slate-900 text-white py-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Scale className="h-8 w-8 text-amber-500" />
          <span className="text-xl font-semibold">Advokatska Kancelarija Trivunović</span>
        </div>
        <div className="hidden md:flex space-x-8">
          <NavLink href="#home">Početna</NavLink>
          <NavLink href="#about">O Nama</NavLink>
          <NavLink href="#practice-areas">Oblasti Rada</NavLink>
          <NavLink href="#team">Naš Tim</NavLink>
          <NavLink href="#blog">Blog</NavLink>
          <NavLink href="#contact">Kontakt</NavLink>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="hover:text-amber-500 transition-colors duration-200"
    >
      {children}
    </a>
  );
}