// App.jsx
import React from "react";

// Layout
import Header from "./layout/Header.jsx";

// Sections
import Hero from "./components/sections/Hero.jsx";
import Services from "./components/sections/Services.jsx";
import About from "./components/sections/About.jsx";
import Features from "./components/sections/Features.jsx";
import Contact from "./components/sections/Contact.jsx";

// Footer
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div className="font-sans bg-white">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Features />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;

