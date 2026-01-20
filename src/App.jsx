import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';

function App() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column',
      background: 'var(--navy)', // Ensures background covers whole page
      overflowX: 'hidden'
    }}>
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;