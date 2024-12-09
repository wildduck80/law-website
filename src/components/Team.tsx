import React, { useState } from 'react';
import { LawyerModal } from './LawyerModal';
import { Link } from 'react-router-dom';

const Team = () => {
  const lawyers = [
    {
      id: '1',
      name: 'Bosko Trivunović',
    },
    {
      id: '2',
      name: 'Natalija Trivunović',
    },
    {
      id: '3',
      name: 'Maja Reljin',
    }
  ];

  return (
    <section id="team" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Nas tim</h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {lawyers.map((lawyer) => (
            <div
              key={lawyer.id}
              className="p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-200"
            >
              <Link to={`/lawyer/${lawyer.id}`} className="text-xl font-semibold text-amber-500">
                {lawyer.name}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
