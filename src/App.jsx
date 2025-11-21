// src/App.jsx

import React from 'react';
import Header from './components/layout/Header';
import Navigation from './components/layout/Navigation';
import Hero from './components/sections/Hero'; 
import Features from './components/sections/Features'; 
import TargetedSolutions from './components/sections/TargetedSolutions'; 
import DetailedService from './components/sections/DetailedService'; 
import Footer from './components/layout/Footer'; 


function App() {
  return (
    // CRITICAL FIX: 
    // 1. flex flex-col: Allows the layout to stack vertically.
    // 2. overflow-x-hidden: Prevents horizontal scrolling caused by oversized elements (like the Hero background).
    <div className="min-h-screen bg-neutral-light flex flex-col overflow-x-hidden">
      <Header />
      <Navigation />
      
      {/* flex-grow ensures the main content area expands to push the footer down */}
      <main className="flex-grow">
        <Hero />
        <Features />
        <TargetedSolutions />
        <DetailedService />
      </main>
      
      <Footer /> 
    </div>
  );
}

export default App;