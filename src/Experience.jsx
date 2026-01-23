import React, { useState } from 'react';

const Experience = () => {
  const [activeTabId, setActiveTabId] = useState(0);

  const jobs = [
    {
      company: "ARTPARK, IISC",
      role: "AI Engineer",
      date: "Aug 2025 - Present",
      points: [
        "Engineering Retrieval-Augmented Generation (RAG) systems to validate business expenses against policy documents.",
        "Designing and evaluating LLM pipelines using embedding retrieval, corrective strategies, and fusion RAG approaches.",
        "Built an automated scoring and error analysis framework to benchmark generation accuracy."
      ]
    },
    {
      company: "Ellucian",
      role: "Cloud Engineering Intern",
      date: "Jan 2025 - Apr 2025",
      points: [
        "Led AWS cost optimization using LLM-based AI agents to analyze usage patterns and recommend savings.",
        "Built a React dashboard for insights, anomaly detection, and chatbot interfaces.",
        "Developed AWS Lambda functions to preprocess billing data and trigger LLM-based analysis."
      ]
    }
  ];

  return (
    <section id="experience" className="section-content" style={{
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
          experience
        </h2>
        <div style={{
          height: '1px',
          backgroundColor: '#233554',
          width: '100%',
          maxWidth: '300px'
        }}></div>
      </div>

      
      <div className="experience-inner" style={{
        display: 'flex',
        gap: '20px'
      }}>
        
        
        <div className="tab-list" style={{
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          minWidth: '150px' 
        }}>
          
          <div style={{
            position: 'absolute',
            top: `${activeTabId * 42}px`, 
            left: 0,
            width: '2px',
            height: '42px',
            backgroundColor: 'var(--green)',
            transition: 'top 0.3s ease',
            zIndex: 10
          }}></div>

          
          {jobs.map((job, index) => (
            <button
              key={index}
              onClick={() => setActiveTabId(index)}
              style={{
                background: 'transparent',
                border: 'none',
                borderLeft: '2px solid #233554', 
                textAlign: 'left',
                padding: '0 20px',
                height: '42px', 
                cursor: 'pointer',
                fontFamily: 'var(--font-mono)',
                fontSize: '13px',
                color: activeTabId === index ? 'var(--green)' : 'var(--slate)',
                transition: 'all 0.2s ease',
                backgroundColor: activeTabId === index ? 'rgba(100, 255, 218, 0.05)' : 'transparent', 
                outline: 'none'
              }}
            >
              {job.company}
            </button>
          ))}
        </div>

        
        <div style={{ flex: 1, paddingLeft: '10px' }}>
          <h3 style={{
            fontSize: '22px',
            fontWeight: '500',
            color: 'var(--lightest-slate)',
            marginBottom: '5px'
          }}>
            {jobs[activeTabId].role} <span style={{ color: 'var(--green)' }}>@ {jobs[activeTabId].company}</span>
          </h3>
          
          <p style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '13px',
            color: 'var(--light-slate)',
            marginBottom: '25px'
          }}>
            {jobs[activeTabId].date}
          </p>

          <ul style={{ padding: 0, margin: 0, listStyle: 'none' }}>
            {jobs[activeTabId].points.map((point, i) => (
              <li key={i} style={{
                position: 'relative',
                paddingLeft: '30px',
                marginBottom: '15px',
                fontSize: '16px',
                lineHeight: '1.5'
              }}>
                <span style={{
                  position: 'absolute',
                  left: 0,
                  top: '5px', 
                  color: 'var(--green)',
                  fontSize: '14px'
                }}>▹</span>
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;