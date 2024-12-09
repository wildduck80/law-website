import React from 'react';
import { Award, Users, History } from 'lucide-react';

const highlights = [
  {
    icon: History,
    title: '10+ Godina Iskustva',
    description: 'Služimo našoj zajednici sa posvećenošću i izvrsnošću od 1998.',
  },
  {
    icon: Award,
    title: 'Nagrađivani',
    description: 'Priznati od strane Advokatske komore za izvrsnost u pravnim uslugama.',
  },
  {
    icon: Users,
    title: 'Fokus na Klijente',
    description: 'Preko 1.000 uspešnih slučajeva i zadovoljnih klijenata u svim oblastima rada.',
  },
];

export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">O Nama</h2>
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Naše Nasleđe Izvrsnosti</h3>
            <p className="text-gray-600 mb-6">
              Osnovana 2015. godine, Advokatska Kancelarija Trivunović se etablirala kao jedna od najcenjenijih advokatskih kancelarija u Novom Sadu. Naša posvećenost izvrsnosti i zadovoljstvu klijenata donela nam je priznanje u celoj pravnoj zajednici.
            </p>
            <p className="text-gray-600">
              Verujemo u pružanje personalizovane pažnje svakom slučaju uz održavanje najviših standarda pravne ekspertize i profesionalnog integriteta. Naš tim iskusnih advokata neumorno radi na zaštiti vaših prava i interesa.
            </p>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1585829365295-ab7cd400c167?auto=format&fit=crop&q=80"
              alt="Advokatska Kancelarija"
              className="rounded-lg shadow-lg w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((item) => (
            <div key={item.title} className="text-center">
              <item.icon className="h-12 w-12 text-amber-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
