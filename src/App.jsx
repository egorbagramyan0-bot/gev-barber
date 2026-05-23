import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Masters from './components/Masters';
import Reviews from './components/Reviews';
import Contacts from './components/Contacts';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 font-sans selection:bg-amber-500 selection:text-slate-950 flex flex-col overflow-x-hidden relative">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Services />
        <Masters />
        <Reviews />
        <Contacts />
      </main>
      <Footer />
    </div>
  );
}

export default App;
