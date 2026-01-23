import React from 'react';

const Hero = () => {
  return (
    <section id="home" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0 20px'
    }}>
      
      
      <div className="hero-layout">

        
        <div className="hero-image-container">
          <div className="profile-image-wrapper" style={{
            boxShadow: '0 0 50px -10px rgba(100, 255, 218, 0.3)', 
          }}>
             <img 
              src="/kavya_.jpeg" 
              alt="Kavya Profile"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                filter: 'sepia(100%) hue-rotate(170deg) saturate(150%) brightness(0.9)',
                transition: 'filter 0.3s ease'
              }}
              onMouseEnter={(e) => e.target.style.filter = 'none'} 
              onMouseLeave={(e) => e.target.style.filter = 'sepia(100%) hue-rotate(170deg) saturate(150%) brightness(0.9)'}
             />
          </div>
        </div>

        
        <div className="hero-text">
          <h1 style={{ 
            fontSize: 'clamp(40px, 6vw, 80px)', 
            fontWeight: '800', 
            marginBottom: '20px',
            fontFamily: 'Inter, sans-serif'
          }}>
            hi, <span style={{ color: 'var(--green)' }}>kavya</span> here.
          </h1>

          <p style={{ 
            fontSize: '18px', 
            color: 'var(--slate)', 
            marginBottom: '40px',
            maxWidth: '540px' 
          }}>
            I’m an <b style={{ color: 'var(--green)' }}>AI Engineer</b> and software builder based in Bangalore. 
            I’m fascinated by intelligent systems and love creating scalable products that bridge the gap between complex data and human understanding.
          </p>

          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=kavya200267@gmail.com" target="_blank" rel="noreferrer" style={{ 
              padding: '18px 28px', 
              border: '1px solid var(--green)', 
              color: 'var(--green)', 
              borderRadius: '4px',
              fontSize: '14px',
              fontFamily: 'var(--font-mono)',
              textDecoration: 'none'
            }}>
              Get in Touch
            </a>
            <a href="https://github.com/Kavya291" target="_blank" rel="noreferrer" style={{ 
              padding: '18px 28px', 
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

      </div>
    </section>
  );
};

export default Hero;