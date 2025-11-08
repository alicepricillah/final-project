import React from "react";

import Header from "./layout/Header";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Features from "./components/sections/Features";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-sans bg-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Features />
        <Contact />
      </main>
       <Footer />
    </div>
  );
}

export default App;
