import React from 'react';
import { Building2, Users, Briefcase, Scale } from 'lucide-react';

const practices = [
  {
    icon: Building2,
    title: 'Privredno Pravo',
    description:
      'Stručno vođenje za preduzeća svih veličina, od startapa do etabliranih korporacija.',
  },
  {
    icon: Users,
    title: 'Porodično Pravo',
    description:
      'Saosećajno zastupanje u razvodu, starateljstvu i porodičnim pitanjima.',
  },
  {
    icon: Briefcase,
    title: 'Radno Pravo',
    description:
      'Zaštita prava kako zaposlenih tako i poslodavaca na radnom mestu.',
  },
  {
    icon: Scale,
    title: 'Parnični Postupak',
    description:
      'Snažno zastupanje u složenim građanskim sporovima i parničnim postupcima.',
  },
];

export function PracticeAreas() {
  return (
    <section id="practice-areas" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Oblasti Rada</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {practices.map((practice) => (
            <div
              key={practice.title}
              className="p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-200"
            >
              <practice.icon className="h-12 w-12 text-amber-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{practice.title}</h3>
              <p className="text-gray-600">{practice.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}