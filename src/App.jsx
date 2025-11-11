import React from "react";
import Header from "./layout/Header";
import Features from "./components/sections/Features";
import Hero from "./components/sections/Hero";
import Services from "./components/sections/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-sans bg-white">
      <Header />
      <main>
        <Hero />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;






