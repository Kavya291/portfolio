import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "NLP to SQL Converter",
      description: "Built an app using DeepSeek LLM (via Ollama) to convert natural-language queries into SQL. Enabled Excel upload and RAG-enhanced prompts for accurate SQL generation.",
      tech: ["Python", "DeepSeek", "Ollama", "RAG"],
      github: "https://github.com/Kavya291/nlptosql" 
    },
    {
      title: "Slice Insights: Pizza Sales",
      description: "Analyzed pizza sales data using SQL and Power BI to uncover KPIs and trends. Built dashboards and proposed inventory changes based on revenue patterns.",
      tech: ["SQL", "Power BI", "Data Analysis"],
      github: "https://github.com/Kavya291/Slice-Insights"
    },
    {
      title: "Breast Cancer Predictor",
      description: "Created a Streamlit app using Logistic Regression to classify breast cancer from the Wisconsin dataset. Deployed with live evaluation metrics.",
      tech: ["Python", "Streamlit", "Machine Learning"],
      github: "https://github.com/Kavya291/Breast_Cancer_Predictor"
    }
  ];

  return (
    <section id="projects" className="section-content" style={{
      color: 'var(--slate)',
      marginBottom: '100px' 
    }}>
      
      {/* HEADER */}
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '40px' }}>
        <h2 style={{
          fontSize: 'clamp(26px, 5vw, 32px)',
          fontWeight: 'bold',
          color: 'var(--lightest-slate)',
          marginRight: '20px',
          whiteSpace: 'nowrap'
        }}>
          <span style={{ color: 'white', fontSize: '20px', marginRight: '10px' }}>/</span>
          projects
        </h2>
        <div style={{
          height: '1px',
          backgroundColor: '#233554',
          width: '100%',
          maxWidth: '300px'
        }}></div>
      </div>

      {/* PROJECT GRID - Adjusted for Laptops */}
      <div style={{
        display: 'grid',
        /* CHANGED: Lowered min-width from 320px to 270px so 3 cards fit on laptops */
        gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))', 
        gap: '20px',
        justifyContent: 'center'
      }}>
        {projects.map((project, i) => (
          <div key={i} className="project-card" style={{
            backgroundColor: 'var(--light-navy)',
            padding: '2rem 1.75rem',
            borderRadius: '4px',
            transition: 'transform 0.25s ease, box-shadow 0.25s ease',
            cursor: 'default',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-7px)';
            e.currentTarget.style.boxShadow = '0 10px 30px -15px rgba(2,12,27,0.7)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'none';
          }}
          >
            {/* TOP PART */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '30px' }}>
                <div style={{ color: 'var(--green)' }}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                  </svg>
                </div>
                <a href={project.github} target="_blank" rel="noreferrer" style={{ color: 'var(--slate)' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </a>
              </div>

              <h3 style={{ color: 'var(--lightest-slate)', fontSize: '22px', marginBottom: '10px', fontWeight: 'bold' }}>
                {project.title}
              </h3>

              <p style={{ fontSize: '17px', color: 'var(--light-slate)', marginBottom: '20px' }}>
                {project.description}
              </p>
            </div>

            {/* BOTTOM PART */}
            <ul style={{ display: 'flex', flexWrap: 'wrap', gap: '15px', padding: 0, margin: 0, listStyle: 'none', fontSize: '12px', fontFamily: 'var(--font-mono)', color: 'var(--slate)' }}>
              {project.tech.map((t, i) => (
                <li key={i}>{t}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;