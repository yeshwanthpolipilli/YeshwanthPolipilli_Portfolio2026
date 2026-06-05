"use client";
import { useEffect, useRef } from "react";

const skillCategories = [
  {
    title: "Languages",
    icon: "⚡",
    color: "#00D4AA",
    skills: ["JavaScript (ES6+)", "TypeScript"],
  },
  {
    title: "Frontend",
    icon: "🎨",
    color: "#3B82F6",
    skills: [
      "React.js",
      "Next.js",
      "Astro.js",
      "Tailwind CSS",
      "HTML",
      "CSS",
      "Bootstrap",
    ],
  },
  {
    title: "Backend",
    icon: "⚙️",
    color: "#8B5CF6",
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "JWT Authentication",
    ],
  },
  {
    title: "Database & Cache",
    icon: "🗄️",
    color: "#F59E0B",
    skills: [
      "PostgreSQL",
      "Redis",
      "Sequelize ORM",
    ],
  },
  {
    title: "Integrations",
    icon: "🔌",
    color: "#EC4899",
    skills: [
      "Stripe",
      "Google Maps API",
      "Azure Blob Storage",
    ],
  },
  {
    title: "DevOps & Tools",
    icon: "🚀",
    color: "#10B981",
    skills: [
      "PM2",
      "Nginx",
      "Git",
      "GitHub",
      "Postman",
      "VS Code",
      "Hostinger",
    ],
  },
  {
    title: "Design",
    icon: "✏️",
    color: "#F97316",
    skills: [
      "Figma",
      "Adobe Illustrator",
      "Canva",
    ],
  },
];

const stats = [
  { num: "15+", label: "Languages & Frameworks" },
  { num: "20+", label: "APIs Built & Integrated" },
  { num: "35-40%", label: "Performance Improvement" },
  { num: "2.5+", label: "Years of Experience" },
];

export default function Skills() {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const section = document.getElementById("skills");
      if (!section || !parallaxRef.current) return;
      const rect = section.getBoundingClientRect();
      const ratio = -rect.top / window.innerHeight;
      parallaxRef.current.style.transform = `translateY(${ratio * 30}px)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      id="skills"
      className="section parallax-section"
      style={{
        background: "var(--bg-secondary)",
        position: "relative",
        overflow: "hidden",
        padding: "80px 0",
      }}
    >
      <div
        ref={parallaxRef}
        style={{ position: "absolute", inset: 0, pointerEvents: "none" }}
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            width: "min(600px, 80vw)",
            height: "min(600px, 80vw)",
            background:
              "radial-gradient(circle, rgba(0,212,255,0.04) 0%, transparent 70%)",
          }}
        />
      </div>

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 1.5rem",
          position: "relative",
        }}
      >
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "clamp(2rem, 6vw, 4rem)" }}>
          <div
            className="section-label"
            data-aos="fade-up"
            style={{
              fontFamily: "'Fira Code', monospace",
              fontSize: "clamp(0.7rem, 2vw, 0.8rem)",
              color: "var(--accent-cyan)",
              letterSpacing: "0.1em",
              marginBottom: "1rem",
            }}
          >
            TECHNICAL EXPERTISE
          </div>
          <h2
            className="section-title"
            data-aos="fade-up"
            data-aos-delay="100"
            style={{
              fontSize: "clamp(1.8rem, 5vw, 2.5rem)",
              fontWeight: 700,
              marginBottom: "1rem",
            }}
          >
            Skills & <span style={{ color: "var(--accent-cyan)" }}>Technologies</span>
          </h2>
          <p
            data-aos="fade-up"
            data-aos-delay="150"
            style={{
              color: "var(--text-secondary)",
              marginTop: "1rem",
              maxWidth: "500px",
              margin: "1rem auto 0",
              fontSize: "clamp(0.85rem, 3vw, 1rem)",
            }}
          >
            A comprehensive toolkit spanning full-stack development, from scalable
            backends to polished frontend architectures.
          </p>
        </div>

        {/* Skill Cards Grid */}
        <div className="skills-grid" style={{ marginBottom: "clamp(2rem, 6vw, 4rem)" }}>
          {skillCategories.map((cat, i) => (
            <div
              key={cat.title}
              className="card"
              data-aos="fade-up"
              data-aos-delay={`${(i % 3) * 100}`}
              style={{
                padding: "clamp(1rem, 3vw, 1.5rem)",
                background: "var(--bg-card)",
                border: "1px solid var(--border-color)",
                borderRadius: "16px",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  marginBottom: "1rem",
                }}
              >
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "10px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: `${cat.color}15`,
                    border: `1px solid ${cat.color}30`,
                    fontSize: "1.2rem",
                    flexShrink: 0,
                  }}
                >
                  {cat.icon}
                </div>
                <h3
                  style={{
                    fontFamily: "'Fira Code', monospace",
                    fontSize: "clamp(0.75rem, 2.5vw, 0.85rem)",
                    color: cat.color,
                    fontWeight: 600,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    margin: 0,
                  }}
                >
                  {cat.title}
                </h3>
              </div>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "0.5rem",
                }}
              >
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="skill-tag"
                    style={{
                      fontSize: "clamp(0.7rem, 2vw, 0.8rem)",
                      padding: "0.3rem 0.8rem",
                      background: `${cat.color}10`,
                      border: `1px solid ${cat.color}20`,
                      borderRadius: "6px",
                      color: "var(--text-primary)",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = `${cat.color}20`;
                      e.currentTarget.style.transform = "translateY(-2px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = `${cat.color}10`;
                      e.currentTarget.style.transform = "translateY(0)";
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Stats Row */}
        <div
          className="stats-container"
          style={{
            background: "var(--bg-card)",
            border: "1px solid var(--border-color)",
            borderRadius: "16px",
            padding: "clamp(1.5rem, 4vw, 2.5rem)",
          }}
          data-aos="fade-up"
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "1.5rem",
            }}
            className="stats-grid"
          >
            {stats.map((s, i) => (
              <div key={s.label} style={{ textAlign: "center" }}>
                <div
                  className="stat-number"
                  style={{
                    fontSize: "clamp(1.5rem, 4vw, 2rem)",
                    fontWeight: 800,
                    color: "var(--accent-cyan)",
                    marginBottom: "0.5rem",
                  }}
                >
                  {s.num}
                </div>
                <div
                  className="stat-label"
                  style={{
                    fontSize: "clamp(0.7rem, 2.5vw, 0.85rem)",
                    color: "var(--text-muted)",
                  }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        /* Skills Grid Base */
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 1.5rem;
        }
        
        /* Large Laptops and Desktops */
        @media (min-width: 1200px) {
          .skills-grid {
            grid-template-columns: repeat(3, 1fr) !important;
            gap: 1.5rem !important;
          }
        }
        
        /* Extra Large Screens */
        @media (min-width: 1600px) {
          .skills-grid {
            grid-template-columns: repeat(4, 1fr) !important;
            gap: 1.75rem !important;
          }
        }
        
        /* Tablet Landscape */
        @media (max-width: 1199px) and (min-width: 769px) {
          .skills-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 1.25rem !important;
          }
          
          .stats-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 1.5rem !important;
          }
        }
        
        /* Tablet Portrait */
        @media (max-width: 768px) {
          .skills-grid {
            grid-template-columns: 1fr !important;
            gap: 1rem !important;
          }
          
          .stats-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 1rem !important;
          }
        }
        
        /* Small Mobile Devices */
        @media (max-width: 480px) {
          .skills-grid {
            gap: 0.875rem !important;
          }
          
          .stats-grid {
            grid-template-columns: 1fr !important;
            gap: 1rem !important;
          }
          
          .stats-container {
            padding: 1.25rem !important;
          }
        }
        
        /* Landscape Mode for Mobile */
        @media (max-width: 768px) and (orientation: landscape) {
          .skills-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 1rem !important;
          }
          
          .stats-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        
        /* Animation for skill tags */
        .skill-tag {
          transition: all 0.3s ease;
          cursor: default;
        }
        
        /* Card hover effect */
        .card {
          transition: all 0.3s ease;
        }
        
        /* Responsive padding adjustments */
        @media (max-width: 640px) {
          #skills {
            padding: 60px 0 !important;
          }
        }
      `}</style>
    </section>
  );
}