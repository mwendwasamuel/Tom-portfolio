// src/App.js
import React from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Background from './components/Background';

function App() {
  return (
    <div className="App">
      <Background />
      <div className="content">
        <Header />
        <main>
          <About />
          <Projects />
          <Contact />
        </main>
      </div>
    </div>
  );
}

export default App;
