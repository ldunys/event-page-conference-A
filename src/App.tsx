import React from 'react';
import { Hero } from './components/Hero';
import { EventDetails } from './components/EventDetails';
import { Program } from './components/Program';
import { Speakers } from './components/Speakers';
import { Registration } from './components/Registration';
import { Sponsors } from './components/Sponsors';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <EventDetails />
      <Program />
      <Speakers />
      <Registration />
      <Sponsors />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;