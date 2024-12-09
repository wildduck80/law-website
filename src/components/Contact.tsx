import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Kontaktirajte Nas</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-6">Stupite u Kontakt</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-amber-500" />
                <span>(069) 346-35-13</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-amber-500" />
                <span>kontakt@trivunovic.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-amber-500" />
                <span>Rade Kondica 122a, Sprat 2<br />Futog, 21000</span>
              </div>
            </div>
          </div>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Vaše Ime"
              className="w-full px-4 py-2 rounded-md bg-slate-800 border border-slate-700 focus:border-amber-500 focus:outline-none"
            />
            <input
              type="email"
              placeholder="Vaš Email"
              className="w-full px-4 py-2 rounded-md bg-slate-800 border border-slate-700 focus:border-amber-500 focus:outline-none"
            />
            <textarea
              placeholder="Vaša Poruka"
              rows={4}
              className="w-full px-4 py-2 rounded-md bg-slate-800 border border-slate-700 focus:border-amber-500 focus:outline-none"
            />
            <button className="bg-amber-500 text-slate-900 px-6 py-2 rounded-md font-semibold hover:bg-amber-400 transition-colors duration-200">
              Pošaljite Poruku
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
