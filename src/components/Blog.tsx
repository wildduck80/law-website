import React from 'react';

const blogPosts = [
  {
    title: 'Razumevanje Radnih Prava u 2024.',
    date: '15. mart 2024.',
    author: 'Sara Jovanović',
    excerpt: 'Sveobuhvatni vodič kroz prava zaposlenih i propise na radnom mestu u modernom dobu.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80',
  },
  {
    title: 'Uticaj AI na Pravnu Praksu',
    date: '10. mart 2024.',
    author: 'Mihajlo Čen',
    excerpt: 'Istraživanje kako veštačka inteligencija transformiše pravnu industriju i usluge klijentima.',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80',
  },
  {
    title: 'Porodično Pravo: Navigacija kroz Složene Emocije',
    date: '5. mart 2024.',
    author: 'Emilija Rodić',
    excerpt: 'Saveti za upravljanje emocionalnim izazovima tokom postupaka porodičnog prava.',
    image: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?auto=format&fit=crop&q=80',
  },
];

export function Blog() {
  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Pravni Uvidi</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.title}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-200"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <div className="text-sm text-gray-500 mb-3">
                  {post.date} | Autor: {post.author}
                </div>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <button className="text-amber-500 font-semibold hover:text-amber-600 transition-colors duration-200">
                  Pročitaj Više →
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}