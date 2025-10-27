import React from "react";
import Header from "./components/layout/Header";
import Hero from "./components/sections/Hero";
import Stats from "./components/sections/Stats";
import "./index.css";

function App() {
  return (
    <div>
      <Header />
      <main className="pt-20">
        <Hero />
        <Stats />
        {/* Other sections will go here */}
      </main>
    </div>
  );
}

export default App;














  
