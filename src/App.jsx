// src/App.jsx
import React from "react";
import Header from "./components/layout/Header";  // ✅ no curly braces

function App() {
  return (
    <>
      <Header />
      <main>
        <section id="hero" className="h-screen flex items-center justify-center bg-neutralLight">
          <h2 className="text-4xl font-bold text-primary">Welcome to SoftMax Fumigation</h2>
        </section>
      </main>
    </>
  );
}

export default App;

