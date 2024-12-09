import React from 'react';
import { X } from 'lucide-react';

interface LawyerModalProps {
  lawyer: {
    name: string;
    role: string;
    image: string;
    specialization: string;
    biography: string;
    education: string[];
    experience: string[];
    languages: string[];
    awards: string[];
  } | null;
  onClose: () => void;
}

export function LawyerModal({ lawyer, onClose }: LawyerModalProps) {
  if (!lawyer) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 p-4 flex justify-between items-center">
          <h2 className="text-2xl font-bold">{lawyer.name}</h2>
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        <div className="p-6">
          <div className="flex flex-col md:flex-row gap-6">
            <img
              src={lawyer.image}
              alt={lawyer.name}
              className="w-full md:w-64 h-64 object-cover rounded-lg"
            />
            <div className="flex-1">
              <div className="mb-4">
                <p className="text-amber-500 font-medium">{lawyer.role}</p>
                <p className="text-gray-600">Specijalizacija: {lawyer.specialization}</p>
              </div>
              <p className="text-gray-700 mb-6">{lawyer.biography}</p>
              
              <h3 className="text-lg font-semibold mb-2">Obrazovanje</h3>
              <ul className="list-disc list-inside mb-4 text-gray-700">
                {lawyer.education.map((edu, index) => (
                  <li key={index}>{edu}</li>
                ))}
              </ul>

              <h3 className="text-lg font-semibold mb-2">Radno Iskustvo</h3>
              <ul className="list-disc list-inside mb-4 text-gray-700">
                {lawyer.experience.map((exp, index) => (
                  <li key={index}>{exp}</li>
                ))}
              </ul>

              <h3 className="text-lg font-semibold mb-2">Jezici</h3>
              <p className="text-gray-700 mb-4">{lawyer.languages.join(', ')}</p>

              {lawyer.awards.length > 0 && (
                <>
                  <h3 className="text-lg font-semibold mb-2">Priznanja i Nagrade</h3>
                  <ul className="list-disc list-inside text-gray-700">
                    {lawyer.awards.map((award, index) => (
                      <li key={index}>{award}</li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}