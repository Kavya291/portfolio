import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About'; 
import Experience from './Experience';
import Projects from './Projects';

function App() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column',
      background: 'var(--navy)', 
      overflowX: 'hidden'
    }}>
      <Navbar />
      <Hero />
      <About /> 
      <Experience />
      <Projects />
    </div>
  );
}

export default App;