import React from 'react';

const Hero = () => {
  return (
    <section className="hero-container" style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      maxWidth: '1200px',
      margin: '0 auto',
    }}>
      <div style={{
        flex: '1',
        display: 'flex',
        justifyContent: 'flex-end',
        position: 'relative'
      }}>
        <div className="profile-image-wrapper" style={{
          borderRadius: '20px',
          overflow: 'hidden',
          boxShadow: '0 0 50px -10px rgba(100, 255, 218, 0.3)', 
          border: '2px solid var(--green)',
          position: 'relative',
          zIndex: 1
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

      {/* RIGHT SIDE: The Text */}
      <div style={{ flex: '1.2' }}>
        
        <h1 style={{ 
          fontSize: 'clamp(40px, 6vw, 80px)', 
          fontWeight: '800', 
          color: 'var(--white)', 
          lineHeight: '1.1',
          marginBottom: '20px',
          fontFamily: 'Inter, sans-serif'
        }}>
          hi, <span style={{ color: 'var(--green)' }}>kavya</span> here.
        </h1>

        <p style={{ 
          fontSize: '18px', 
          color: 'var(--slate)', 
          lineHeight: '1.6', 
          maxWidth: '540px' 
        }}>
          I’m an <b style={{ color: 'var(--green)' }}>AI Engineer</b> and software builder based in Bangalore. 
          I’m fascinated by intelligent systems and love creating scalable products that bridge the gap between complex data and human understanding.
          <br /><br />
        </p>

        {/* Buttons */}
        <div style={{ marginTop: '40px', display: 'flex', gap: '20px' }}>
          
          {/* Directs to Gmail Web Compose */}
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=kavya200267@gmail.com" target="_blank" rel="noreferrer" style={{ 
            padding: '18px 28px', 
            border: '1px solid var(--green)', 
            color: 'var(--green)', 
            borderRadius: '4px',
            fontSize: '14px',
            fontFamily: 'var(--font-mono)',
            textDecoration: 'none',
            cursor: 'pointer',
            backgroundColor: 'transparent'
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
            textDecoration: 'none',
            cursor: 'pointer'
          }}>
            Check out my git
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;