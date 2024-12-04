import React from 'react';

const speakers = [
  {
    name: "Johnson",
    firstName: "Sarah",
    country: "United States",
    expertise: "Artificial Intelligence",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80"
  },
  {
    name: "Chen",
    firstName: "Wei",
    country: "Singapore",
    expertise: "Blockchain Technology",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80"
  },
  {
    name: "Roberts",
    firstName: "Michael",
    country: "United Kingdom",
    expertise: "Cybersecurity",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80"
  },
  {
    name: "Rodriguez",
    firstName: "Elena",
    country: "Spain",
    expertise: "Digital Transformation",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80"
  }
];

export function Speakers() {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Speakers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {speakers.map((speaker, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <img
                src={speaker.image}
                alt={`${speaker.firstName} ${speaker.name}`}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">{speaker.firstName} {speaker.name}</h3>
                <p className="text-gray-600 mb-2">{speaker.country}</p>
                <p className="text-blue-600 font-semibold">{speaker.expertise}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}