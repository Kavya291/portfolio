import React from 'react';

function App() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      padding: '0px 50px', 
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'center',
      alignItems: 'flex-start', /* Aligns text to the left like the reference */
      maxWidth: '1000px',
      margin: '0 auto'
    }}>
      
      {/* Big Intro Header */}
      <h1 style={{ 
        fontSize: 'clamp(50px, 8vw, 90px)', 
        fontWeight: '800', 
        color: 'var(--white)', 
        lineHeight: '1.1',
        marginBottom: '30px'
      }}>
        hi, <span style={{ color: 'var(--green)' }}>kavya</span> here.
      </h1>

      {/* The Bio Section */}
      <h2 style={{ 
        fontSize: '30px', 
        color: 'var(--slate)', 
        lineHeight: '1.4', 
        fontWeight: '400', 
        maxWidth: '700px' 
      }}>
        I’m an AI engineer and builder based in Bangalore. 
        I build intelligent systems that actually work.
      </h2>
      
      <p style={{ 
        maxWidth: '600px', 
        marginTop: '30px', 
        fontSize: '18px', 
        color: 'var(--slate)', 
        lineHeight: '1.6' 
      }}>
        Currently, I'm engineering <b>Retrieval-Augmented Generation (RAG)</b> systems at <span style={{ color: 'var(--green)' }}>ARTPARK</span>[cite: 6, 8]. Before that, I built AI agents to optimize cloud costs at <span style={{ color: 'var(--green)' }}>Ellucian</span>[cite: 12, 13].
        <br /><br />
        I’m fascinated by large-scale LLM pipelines and creating tools that solve real problems.
      </p>

      {/* Buttons */}
      <div style={{ marginTop: '50px', display: 'flex', gap: '20px' }}>
        <a href="mailto:kavya200267@gmail.com" style={{ 
          padding: '18px 24px', 
          border: '1px solid var(--green)', 
          color: 'var(--green)', 
          borderRadius: '4px',
          fontSize: '14px',
          fontFamily: 'var(--font-mono)',
          textDecoration: 'none'
        }}>
          Say hi!
        </a>

        <a href="https://github.com/Kavya291" target="_blank" rel="noreferrer" style={{ 
          padding: '18px 24px', 
          border: '1px solid var(--white)', 
          color: 'var(--white)', 
          borderRadius: '4px',
          fontSize: '14px',
          fontFamily: 'var(--font-mono)',
          textDecoration: 'none'
        }}>
          Check out my git
        </a>
      </div>

    </div>
  );
}

export default App;