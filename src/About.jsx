import React from 'react';

const About = () => {
  const skills = [
    "Python",
    "LLMs",
    "RAG Systems",
    "SQL",
    "Postgres DB",
    "APIs",
    "AI Agents",
    "React.js",
    "AWS",
    "C++",
    "Golang",
    "Langchain",
    "Langgraph",
    "Git",
    "Docker"
  ];

  return (
    <section id="about" className="section-content" style={{
      color: 'var(--slate)'
    }}>
      
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '40px' }}>
        <h2 style={{
          fontSize: 'clamp(26px, 5vw, 32px)',
          fontWeight: 'bold',
          color: 'var(--lightest-slate)',
          marginRight: '20px',
          whiteSpace: 'nowrap'
        }}>
          <span style={{ color: 'white', fontSize: '20px', marginRight: '10px' }}>/</span>
          about me
        </h2>
        
        <div style={{
          height: '1px',
          backgroundColor: '#233554',
          width: '100%',
          maxWidth: '300px'
        }}></div>
      </div>

      
      <div style={{ display: 'block' }}> 
        
        
        <div style={{ fontSize: '18px', lineHeight: '1.6', maxWidth: '800px' }}>
          <p style={{ marginBottom: '15px' }}>
            I enjoy creating intelligent systems that live on the internet. My interest in technology started back in college, and I love solving complex problems using data and logic.
          </p>

          <p style={{ marginBottom: '15px' }}>
            Fast-forward to today, I'm currently working as an AI Engineer at <b style={{ color: 'var(--green)' }}> ARTPARK,IISC. </b> Previously I was at <span style={{ color: 'var(--green)' }}>Ellucian</span>  as a cloud Intern.
          </p>

          <p style={{ marginBottom: '20px' }}>
            My main focus these days is engineering scalable <b>Retrieval-Augmented Generation (RAG)</b> systems and building intelligent AI agents that solve real-world data problems.
          </p>

          <p style={{ marginBottom: '20px' }}>
            Here are a few technologies I’ve been working with recently:
          </p>
        </div>

        
        <ul style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, minmax(140px, 10fr))', 
          gap: '10px',
          padding: 0,
          margin: '20px 0 40px 0',
          listStyle: 'none'
        }}>
          {skills.map((skill, i) => (
            <li key={i} style={{
              position: 'relative',
              paddingLeft: '20px',
              fontFamily: 'var(--font-mono)',
              fontSize: '13px',
              marginBottom: '10px'
            }}>
              <span style={{
                position: 'absolute',
                left: 0,
                color: 'var(--green)',
                content: '▹' 
              }}>▹</span>
              {skill}
            </li>
          ))}
        </ul>

        
        <div style={{ fontSize: '18px', lineHeight: '1.6', maxWidth: '800px' }}>
            <p>
                Outside of work, I love <b>exploring and traveling</b> to new places. When I'm not coding, you'll find me reading <b>fiction</b>, binge-watching series, or getting lost in the rabbit hole of <b>YouTube</b>. I also love to <b>swim</b> and experiment with new recipes in the kitchen.
            </p>
        </div>

      </div>
    </section>
  );
};

export default About;