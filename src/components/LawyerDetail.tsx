import { useParams } from 'react-router-dom';

const LawyerDetail = () => {
  const { id } = useParams<{ id: string }>();

  const lawyers = [
    {
      id: '1',
      name: 'Bosko Trivunović',
      role: 'Stariji Partner',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80',
      specialization: 'Privredno Pravo',
      biography:
        'Bosko Trivunović je priznati stručnjak za privredno pravo sa preko 10 godina iskustva u zastupanju. Njegov pristup kombinuje duboko razumevanje poslovnog prava sa praktičnim poslovnim rešenjima.',
      education: [
        'Pravni fakultet, Univerzitet u Novom Sadu (2005)',
        'Master iz Poslovnog prava, Univerzitet u Beču (2007)',
        'Pravosudni ispit (2008)',
      ],
      experience: [
        'Stariji partner, Advokatska kancelarija Trivunović (2015-danas)',
        'Partner, Advokatska kancelarija Marković (2010-2015)',
        'Advokat saradnik, Advokatska kancelarija Petrović (2008-2010)',
      ],
      languages: ['Srpski', 'Engleski'],
      awards: ['Nagrada za izvrsnost u privrednom pravu 2022', 'Priznanje Advokatske komore za doprinos struci 2020'],
    },
    {
      id: '2',
      name: 'Natalija Trivunović',
      role: 'Partner',
      image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80',
      specialization: 'Parnični Postupak',
      biography:
        'Natalija Trivunović je ekspert za parnični postupak sa posebnim fokusom na složene privredne sporove. Poznata je po svojoj analitičkoj preciznosti i strateškom pristupu parničenju.',
      education: [
        'Pravni fakultet, Univerzitet u Novom Sadu (2008)',
        'Specijalizacija iz Parničnog postupka (2011)',
        'Pravosudni ispit (2010)',
      ],
      experience: [
        'Partner, Advokatska kancelarija Trivunović (2016-danas)',
        'Samostalni advokat (2012-2016)',
        'Advokat saradnik, Advokatska kancelarija Jović (2010-2012)',
      ],
      languages: ['Srpski', 'Engleski'],
      awards: ['Najbolji mladi advokat godine 2020', 'Priznanje za pro bono rad 2021'],
    },
    {
      id: '3',
      name: 'Maja Reljin',
      role: 'Partner',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80',
      specialization: 'Porodično Pravo',
      biography:
        'Maja Reljin je posvećena zastupanju klijenata u oblasti porodičnog prava. Njen empatičan pristup i duboko razumevanje porodične dinamike čine je izuzetnim zastupnikom u osetljivim porodičnim pitanjima.',
      education: [
        'Pravni fakultet, Univerzitet u Novom Sadu (2015)',
        'Master iz Porodičnog prava (2017)',
        'Pravosudni ispit (2018)',
      ],
      experience: [
        'Partner, Advokatska kancelarija Trivunović (2018-danas)',
        'Advokat, Advokatska kancelarija Aleksic (2015-2019)',
      ],
      languages: ['Srpski', 'Engleski'],
      awards: [],
    },
  ];

  const lawyer = lawyers.find((lawyer) => lawyer.id === id);

  if (!lawyer) return <div>Lawyer not found</div>;

  return (
    <section id="lawyer-detail" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <img src={lawyer.image} alt={lawyer.name} className="w-32 h-32 rounded-full mx-auto mb-4" />
          <h1 className="text-3xl font-bold">{lawyer.name}</h1>
          <p className="text-gray-600">{lawyer.role}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-200">
            <h3 className="text-xl font-semibold mb-2">Biografija</h3>
            <p className="text-gray-600">{lawyer.biography}</p>
          </div>

          <div className="p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-200">
            <h3 className="text-xl font-semibold mb-2">Obrazovanje</h3>
            <ul className="list-disc ml-4 text-gray-600">
              {lawyer.education.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-200">
            <h3 className="text-xl font-semibold mb-2">Iskustvo</h3>
            <ul className="list-disc ml-4 text-gray-600">
              {lawyer.experience.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-200">
            <h3 className="text-xl font-semibold mb-2">Jezici</h3>
            <ul className="list-disc ml-4 text-gray-600">
              {lawyer.languages.map((lang, index) => (
                <li key={index}>{lang}</li>
              ))}
            </ul>
          </div>

          <div className="p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-200">
            <h3 className="text-xl font-semibold mb-2">Nagrade</h3>
            {lawyer.awards.length > 0 ? (
              <ul className="list-disc ml-4 text-gray-600">
                {lawyer.awards.map((award, index) => (
                  <li key={index}>{award}</li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-600">Nema nagrada</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LawyerDetail;
