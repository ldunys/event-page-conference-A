import React, { useState } from 'react';
import { ScrollArrow } from './ScrollArrow';

export function Hero() {
  const [videoError, setVideoError] = useState(false);

  return (
    <div className="relative h-screen md:h-[70vh] w-full overflow-hidden">
      {!videoError ? (
        <video
          autoPlay
          muted
          loop
          playsInline
          onError={() => setVideoError(true)}
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source
            src="https://player.vimeo.com/external/434045526.hd.mp4?s=81d9fdf68dbbfe29f17527e7193c4e180b6a9683&profile_id=175"
            type="video/mp4"
          />
        </video>
      ) : (
        <img 
          src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80"
          alt="Tech Conference"
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 flex items-center justify-center">
        <div className="text-center text-white px-6 md:px-12 lg:px-24 max-w-5xl mx-auto relative z-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Tech Innovation Summit 2024
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 animate-fade-in-delay">
            Where Technology Meets Tomorrow
          </p>
          <button 
            onClick={() => document.querySelector('#registration')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
          >
            Register Now
          </button>
        </div>
      </div>
      <ScrollArrow />
    </div>
  );
}