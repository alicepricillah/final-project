import React from "react";
import Header from "./components/layout/Header";
import Hero from "./components/sections/Hero";

function App() {
  return (
    <>
      <Header />
      <main className="pt-20"> {/* Adds space for fixed header */}
        <Hero />
      </main>
    </>
  );
}

export default App;













  
