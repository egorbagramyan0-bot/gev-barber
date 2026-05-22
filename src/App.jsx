import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Masters from './components/Masters';
import Atmosphere from './components/Atmosphere';
import Reviews from './components/Reviews';
import Contacts from './components/Contacts';
import Footer from './components/Footer';
import MobileBookBtn from './components/MobileBookBtn';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 font-sans selection:bg-amber-500 selection:text-slate-950 flex flex-col overflow-x-hidden relative pb-24 md:pb-0">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Services />
        <Masters />
        <Atmosphere />
        <Reviews />
        <Contacts />
      </main>
      <Footer />
      <MobileBookBtn />
    </div>
  );
}

export default App;
