"use client";
import { useEffect, useRef, useState } from "react";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
        const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;
        setMousePosition({ x, y });
      }
    };
    window.addEventListener("mousemove", onMouseMove);
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, []);

  const techIcons = [
    { name: "React", icon: "⚛️", color: "#61DAFB" },
    { name: "Next.js", icon: "▲", color: "#ffffff" },
    { name: "Node.js", icon: "💚", color: "#68A063" },
    { name: "Express.js", icon: "🚀", color: "#ffffff" },
    { name: "JavaScript", icon: "🟡", color: "#F7DF1E" },
    { name: "TypeScript", icon: "🔵", color: "#3178C6" },
    { name: "PostgreSQL", icon: "🐘", color: "#336791" },
    { name: "GitHub", icon: "🐙", color: "#ffffff" },
  ];

  return (
    <section
      id="hero"
      ref={heroRef}
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        background: "var(--bg-primary)",
      }}
    >
      {/* Animated Gradient Background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(circle at 20% 50%, rgba(0,212,255,0.08) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(0,255,136,0.06) 0%, transparent 50%)",
          pointerEvents: "none",
        }}
      />

      {/* Floating Particles */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          overflow: "hidden",
          pointerEvents: "none",
        }}
      >
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              background: `rgba(0, ${Math.random() * 255}, ${Math.random() * 255}, 0.3)`,
              borderRadius: "50%",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 10 + 10}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "100px 2rem",
          width: "100%",
          position: "relative",
          zIndex: 2,
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "4rem",
            alignItems: "center",
          }}
          className="hero-grid-layout"
        >
          {/* Left Content - Name and Role */}
          <div className="hero-left-content">
            {/* Name with Playfair Display font */}
            <div
              data-aos="fade-up"
              style={{
                marginBottom: "1.5rem",
              }}
            >
              <h1
                style={{
                  fontSize: "clamp(2.5rem, 7vw, 5rem)",
                  fontWeight: 700,
                  lineHeight: 1.1,
                  marginBottom: "0.5rem",
                  fontFamily: "'Playfair Display', 'Georgia', 'Times New Roman', serif",
                  background: "linear-gradient(135deg, #ffffff 0%, var(--accent-cyan) 40%, var(--accent-green) 100%)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                  letterSpacing: "-0.02em",
                }}
              >
                Polipilli
                <br />
                Yeshwanth Kumar
              </h1>
            </div>

            {/* Role Badge */}
            <div
              data-aos="fade-up"
              data-aos-delay="100"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.75rem",
                background: "rgba(0, 212, 255, 0.1)",
                border: "1px solid rgba(0, 212, 255, 0.2)",
                borderRadius: "50px",
                padding: "0.6rem 1.25rem",
                marginBottom: "1.5rem",
              }}
            >
              <span
                style={{
                  width: "8px",
                  height: "8px",
                  background: "var(--accent-cyan)",
                  borderRadius: "50%",
                  animation: "pulse 2s infinite",
                }}
              />
              <span
                style={{
                  fontFamily: "'Fira Code', monospace",
                  fontSize: "clamp(0.7rem, 2vw, 0.85rem)",
                  color: "var(--accent-cyan)",
                  letterSpacing: "0.05em",
                  fontWeight: 500,
                }}
              >
                FULL STACK WEB DEVELOPER
              </span>
            </div>

            {/* Description */}
            <p
              data-aos="fade-up"
              data-aos-delay="200"
              style={{
                color: "var(--text-secondary)",
                fontSize: "clamp(0.95rem, 2.5vw, 1.1rem)",
                lineHeight: 1.7,
                maxWidth: "550px",
                marginBottom: "2rem",
              }}
            >
              Building scalable web applications with modern technologies.
              <span style={{ display: "block", marginTop: "0.5rem", color: "var(--text-muted)" }}>
                Specialized in full-stack development with React, Next.js, Node.js, and cloud architecture.
              </span>
            </p>

            {/* Buttons */}
            <div
              data-aos="fade-up"
              data-aos-delay="300"
              style={{
                display: "flex",
                gap: "1rem",
                flexWrap: "wrap",
                marginBottom: "2.5rem",
              }}
            >
              <a
                href="/Yeshwanth_FullStack_WebDeveloper_Resume_2026.pdf"
                target="_blank"
                className="btn-gradient"
                style={{
                  background: "linear-gradient(135deg, var(--accent-cyan), var(--accent-green))",
                  color: "white",
                  padding: "0.85rem 2rem",
                  borderRadius: "50px",
                  fontWeight: 600,
                  textDecoration: "none",
                  transition: "all 0.3s ease",
                  display: "inline-block",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "0.9rem",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,212,255,0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                📄 Download Resume
              </a>
              <a
                href="#contact"
                className="btn-outline"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  color: "var(--text-primary)",
                  padding: "0.85rem 2rem",
                  borderRadius: "50px",
                  fontWeight: 600,
                  textDecoration: "none",
                  border: "1px solid var(--border-color)",
                  transition: "all 0.3s ease",
                  display: "inline-block",
                  cursor: "pointer",
                  fontSize: "0.9rem",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(0,212,255,0.1)";
                  e.currentTarget.style.borderColor = "var(--accent-cyan)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.03)";
                  e.currentTarget.style.borderColor = "var(--border-color)";
                }}
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                💬 Get in Touch →
              </a>
            </div>

            {/* Stats */}
            <div
              data-aos="fade-up"
              data-aos-delay="400"
              style={{
                display: "flex",
                gap: "clamp(2rem, 5vw, 3.5rem)",
                flexWrap: "wrap",
              }}
              className="hero-stats"
            >
              {[
                { value: "2.5+", label: "Years Experience" },
                { value: "25+", label: "Projects Completed" },
                { value: "100%", label: "Client Satisfaction" },
              ].map((stat) => (
                <div key={stat.label} style={{ textAlign: "center" }}>
                  <div
                    style={{
                      fontSize: "clamp(1.5rem, 4vw, 2rem)",
                      fontWeight: 800,
                      color: "var(--accent-cyan)",
                      fontFamily: "'Inter', sans-serif",
                    }}
                  >
                    {stat.value}
                  </div>
                  <div
                    style={{
                      fontSize: "clamp(0.7rem, 2vw, 0.85rem)",
                      color: "var(--text-muted)",
                      fontWeight: 500,
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Tech Stack Card */}
          <div
            data-aos="fade-left"
            data-aos-delay="200"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            className="hero-right-content"
          >
            <div
              style={{
                position: "relative",
                transform: `perspective(1000px) rotateY(${mousePosition.x * 0.03}deg) rotateX(${-mousePosition.y * 0.03}deg)`,
                transition: "transform 0.1s ease",
              }}
            >
              {/* Glow behind card */}
              <div
                style={{
                  position: "absolute",
                  inset: "-20px",
                  background: "radial-gradient(circle, rgba(0,212,255,0.15) 0%, transparent 70%)",
                  borderRadius: "30px",
                  filter: "blur(20px)",
                  zIndex: -1,
                }}
              />

              {/* Main Card */}
              <div
                style={{
                  background: "rgba(10, 25, 47, 0.8)",
                  backdropFilter: "blur(10px)",
                  borderRadius: "24px",
                  padding: "clamp(1.5rem, 3vw, 2rem)",
                  width: "clamp(300px, 35vw, 420px)",
                  border: "1px solid rgba(0, 212, 255, 0.15)",
                  boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
                }}
              >
                {/* Card Header */}
                <div style={{ textAlign: "center", marginBottom: "1.5rem" }}>
                  <div
                    style={{
                      width: "clamp(60px, 10vw, 80px)",
                      height: "clamp(60px, 10vw, 80px)",
                      margin: "0 auto 1rem",
                      borderRadius: "50%",
                      background: "linear-gradient(135deg, var(--accent-cyan), var(--accent-green))",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "clamp(1.8rem, 5vw, 2.5rem)",
                        fontWeight: "bold",
                        color: "white",
                        fontFamily: "'Playfair Display', serif",
                      }}
                    >
                      Y
                    </span>
                  </div>
                  <h3
                    style={{
                      fontSize: "clamp(1.1rem, 2.5vw, 1.3rem)",
                      fontWeight: 700,
                      marginBottom: "0.25rem",
                      color: "var(--text-primary)",
                      fontFamily: "'Inter', sans-serif",
                    }}
                  >
                    Full Stack Web Developer
                  </h3>
                  <p
                    style={{
                      fontSize: "clamp(0.7rem, 2vw, 0.8rem)",
                      color: "var(--text-muted)",
                    }}
                  >
                    Modern Web Technologies
                  </p>
                </div>

                {/* Tech Icons Grid */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(4, 1fr)",
                    gap: "1rem",
                    marginBottom: "1.5rem",
                  }}
                  className="tech-grid"
                >
                  {techIcons.map((tech, index) => (
                    <div
                      key={tech.name}
                      style={{
                        textAlign: "center",
                        padding: "0.5rem",
                        background: "rgba(255,255,255,0.03)",
                        borderRadius: "12px",
                        transition: "all 0.3s ease",
                        cursor: "pointer",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "translateY(-5px)";
                        e.currentTarget.style.background = "rgba(0,212,255,0.1)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.background = "rgba(255,255,255,0.03)";
                      }}
                    >
                      <div style={{ fontSize: "1.6rem", marginBottom: "0.25rem" }}>{tech.icon}</div>
                      <div
                        style={{
                          fontSize: "0.65rem",
                          color: "var(--text-muted)",
                          fontWeight: 500,
                        }}
                      >
                        {tech.name}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Availability Status */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.5rem",
                    padding: "0.75rem",
                    background: "rgba(0, 255, 136, 0.08)",
                    borderRadius: "12px",
                    border: "1px solid rgba(0, 255, 136, 0.2)",
                  }}
                >
                  <span
                    style={{
                      width: "8px",
                      height: "8px",
                      background: "#00ff88",
                      borderRadius: "50%",
                      animation: "pulse 2s infinite",
                    }}
                  />
                  <span style={{ fontSize: "0.8rem", color: "var(--accent-green)", fontWeight: 500 }}>
                    🟢 Available for hire
                  </span>
                </div>
              </div>

              {/* Floating Elements */}
              <div
                style={{
                  position: "absolute",
                  top: "-20px",
                  right: "-10px",
                  background: "rgba(0,212,255,0.15)",
                  backdropFilter: "blur(5px)",
                  padding: "0.4rem 0.8rem",
                  borderRadius: "50px",
                  fontSize: "0.7rem",
                  border: "1px solid rgba(0,212,255,0.3)",
                  animation: "float 3s ease-in-out infinite",
                  fontWeight: 500,
                  whiteSpace: "nowrap",
                }}
              >
                ⚛️ React Expert
              </div>
              <div
                style={{
                  position: "absolute",
                  bottom: "-15px",
                  left: "-10px",
                  background: "rgba(0,255,136,0.15)",
                  backdropFilter: "blur(5px)",
                  padding: "0.4rem 0.8rem",
                  borderRadius: "50px",
                  fontSize: "0.7rem",
                  border: "1px solid rgba(0,255,136,0.3)",
                  animation: "float 4s ease-in-out infinite reverse",
                  fontWeight: 500,
                  whiteSpace: "nowrap",
                }}
              >
                Tech Stack 🚀
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        style={{
          position: "absolute",
          bottom: "2rem",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.5rem",
          cursor: "pointer",
          zIndex: 10,
        }}
        onClick={() => {
          document.querySelector("#skills")?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <span
          style={{
            fontSize: "0.7rem",
            color: "var(--text-muted)",
            letterSpacing: "0.2em",
            fontWeight: 500,
          }}
        >
          SCROLL
        </span>
        <div
          style={{
            width: "20px",
            height: "35px",
            border: "2px solid var(--border-color)",
            borderRadius: "20px",
            display: "flex",
            justifyContent: "center",
            paddingTop: "6px",
          }}
        >
          <div
            style={{
              width: "3px",
              height: "8px",
              background: "var(--accent-cyan)",
              borderRadius: "2px",
              animation: "scrollDown 2s infinite",
            }}
          />
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        
        @keyframes scrollDown {
          0% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(12px); opacity: 0; }
        }
        
        /* Import Playfair Display Font */
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800;900&display=swap');
        
        /* Desktop Layout */
        @media (min-width: 969px) {
          .hero-grid-layout {
            grid-template-columns: 1fr 1fr !important;
            gap: 4rem !important;
          }
          
          .hero-left-content {
            text-align: left;
            padding-left: 0;
          }
          
          .hero-left-content p {
            margin-left: 0;
            text-align: left;
          }
          
          .hero-left-content .hero-stats {
            justify-content: flex-start;
          }
        }
        
        /* Tablet and Mobile Layout */
        @media (max-width: 968px) {
          .hero-grid-layout {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
          
          /* On mobile: Name first, then buttons and stats, then tech card */
          .hero-left-content {
            order: 1 !important;
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          
          .hero-left-content p {
            margin-left: auto;
            margin-right: auto;
            text-align: center;
          }
          
          .hero-left-content .hero-stats {
            justify-content: center;
          }
          
          .hero-right-content {
            order: 2 !important;
          }
          
          .tech-grid {
            grid-template-columns: repeat(4, 1fr) !important;
          }
        }
        
        /* Small Mobile Devices */
        @media (max-width: 640px) {
          .hero-grid-layout {
            padding: 0px 1rem !important;
          }
          
          .hero-left-content .hero-stats {
            gap: 1.5rem !important;
          }
          
          .tech-grid {
            grid-template-columns: repeat(4, 1fr) !important;
            gap: 0.75rem !important;
          }
          
          .tech-grid > div {
            padding: 0.4rem !important;
          }
          
          .tech-grid > div div:first-child {
            font-size: 1.3rem !important;
          }
          
          .tech-grid > div div:last-child {
            font-size: 0.55rem !important;
          }
        }
        
        /* Extra Small Mobile */
        @media (max-width: 480px) {
          .hero-left-content .btn-gradient,
          .hero-left-content .btn-outline {
            width: 100%;
            text-align: center;
            padding: 0.7rem 1rem !important;
          }
          
          .hero-left-content .hero-stats > div {
            min-width: 85px;
          }
          
          .tech-grid {
            grid-template-columns: repeat(4, 1fr) !important;
          }
        }
        
        /* Landscape Mode */
        @media (max-width: 968px) and (orientation: landscape) {
          .hero-grid-layout {
            gap: 2rem !important;
          }
          
          .hero-right-content {
            max-width: 400px;
            margin: 0 auto;
          }
          
          .tech-grid {
            grid-template-columns: repeat(4, 1fr) !important;
          }
        }
        
        /* Large Desktop */
        @media (min-width: 1400px) {
          .hero-grid-layout {
            gap: 5rem !important;
          }
        }
      `}</style>
    </section>
  );
}