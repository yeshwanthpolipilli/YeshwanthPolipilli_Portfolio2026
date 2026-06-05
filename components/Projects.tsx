"use client";
import { useEffect, useRef } from "react";

const projects = [
  {
    tag: "PROPERTY MANAGEMENT",
    title: "Property Source Hub",
    desc: "A scalable property management web application with Stripe payments, JWT authentication, and optimized REST APIs delivering 35% faster response times.",
    tech: [
      "Node.js", "Express.js", "React.js", "PostgreSQL", "Redis", "Next.js", "JWT", "Stripe", "PM2", "Nginx",
    ],
    demo: "https://propertysourcehub.com/",
    github: "#",
    featured: true,
    color: "#00D4AA",
  },
  {
    tag: "SAAS PLATFORM",
    title: "Clearstay360",
    desc: "A multi-tenant SaaS platform for rental property management with role-based authentication, inventory tracking, PDF inspection reports, and Azure Blob Storage integration.",
    tech: [
      "Node.js", "React.js", "PostgreSQL", "Sequelize", "Stripe", "Redis", "Azure Blob", "Express.js",
    ],
    demo: "https://clearstay360.com/",
    github: "#",
    featured: false,
    color: "#3B82F6",
  },
  {
    tag: "JEWELLERY SHOWCASE",
    title: "Sree Jewells",
    desc: "A high-performance jewellery showcase website with admin authentication, REST APIs, responsive design, and integrated lead capture system.",
    tech: [
      "Node.js", "REST APIs", "PM2", "HTML", "CSS", "JavaScript",
    ],
    demo: "https://shreejewellers.com/",
    github: "#",
    featured: false,
    color: "#F59E0B",
  },
  {
    tag: "FRONTEND PORTFOLIO",
    title: "My Frontend Projects",
    desc: "Collection of modern frontend applications built using React.js, Next.js, Tailwind CSS, animations, reusable components, and responsive UI/UX principles.",
    tech: [
      "Next.js", "React.js", "Tailwind CSS", "JavaScript", "Framer Motion", "Swiper.js", "AOS", "Responsive Design",
    ],
    demo: "https://corporate-astrology.netlify.app/",
    github: "#",
    featured: false,
    color: "#8B5CF6",
  },
  {
    tag: "BUSINESS WEBSITE",
    title: "Corporate Astrology",
    desc: "A modern astrology business platform focused on astro-branding, astro staffing, Vastu services, consultations, testimonials, and business growth solutions.",
    tech: [
      "Next.js", "React.js", "Tailwind CSS", "Framer Motion", "Swiper.js", "JavaScript",
    ],
    demo: "https://corporate-astrology.netlify.app/",
    github: "#",
    featured: false,
    color: "#A855F7",
  },
  {
    tag: "EDUCATION PLATFORM",
    title: "DevrootzHub",
    desc: "An educational technology platform featuring modern landing pages, testimonials, newsletter sections, and career-focused learning experiences.",
    tech: [
      "Next.js", "React.js", "Tailwind CSS", "Bootstrap", "Animations", "Responsive Design",
    ],
    demo: "https://devrootzhub.netlify.app/",
    github: "#",
    featured: false,
    color: "#06B6D4",
  },
  {
    tag: "CAR DEALERSHIP",
    title: "CarNest",
    desc: "A modern automobile dealership platform with featured cars, pricing sections, filtering options, testimonials, and responsive frontend experience.",
    tech: [
      "React.js", "Next.js", "Tailwind CSS", "Swiper.js", "AOS", "JavaScript",
    ],
    demo: "https://carnest.netlify.app/",
    github: "#",
    featured: false,
    color: "#EF4444",
  },
  {
    tag: "ECOMMERCE WEBSITE",
    title: "Fiora Shoes",
    desc: "A stylish ecommerce platform featuring product showcases, latest collections, countdown offers, responsive shopping layouts, and engaging animations.",
    tech: [
      "React.js", "Next.js", "Tailwind CSS", "JavaScript", "Swiper.js", "AOS", "Responsive Design",
    ],
    demo: "https://fiora-shoes.netlify.app/",
    github: "#",
    featured: false,
    color: "#EC4899",
  },
  {
    tag: "ORGANIC FRUIT STORE",
    title: "FruitBox",
    desc: "An organic fruits ecommerce platform featuring seasonal collections, blogs, newsletters, responsive layouts, and modern frontend UI design.",
    tech: [
      "React.js", "Next.js", "Tailwind CSS", "JavaScript", "Responsive Design", "Swiper.js", "Frontend UI",
    ],
    demo: "https://fruitboxx.netlify.app/",
    github: "#",
    featured: false,
    color: "#22C55E",
  },
];

export default function Projects() {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const section = document.getElementById("projects");
      if (!section || !parallaxRef.current) return;
      const rect = section.getBoundingClientRect();
      const ratio = -rect.top / window.innerHeight;
      parallaxRef.current.style.transform = `translateY(${ratio * 25}px)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      id="projects"
      className="section parallax-section"
      style={{
        background: "var(--bg-secondary)",
        position: "relative",
        overflow: "hidden",
        padding: "80px 0",
      }}
    >
      {/* Parallax Background */}
      <div
        ref={parallaxRef}
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          background: "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(0,255,136,0.03) 0%, transparent 70%)",
        }}
      />

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 1.5rem",
          position: "relative",
          zIndex: 2,
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
            MY WORK
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
            Featured <span style={{ color: "var(--accent-cyan)" }}>Projects</span>
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
            Real-world applications built with scalability, security, performance optimization and modern UX principles.
          </p>
          <div
            style={{
              width: "60px",
              height: "3px",
              background: "linear-gradient(90deg, var(--accent-cyan), transparent)",
              margin: "1.5rem auto 0",
              borderRadius: "2px",
            }}
          />
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {projects.map((p, i) => (
            <div
              key={p.title}
              className="project-card"
              data-aos="fade-up"
              data-aos-delay={`${(i % 3) * 100}`}
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border-color)",
                borderRadius: "20px",
                padding: "clamp(1.2rem, 3vw, 1.5rem)",
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
                transition: "all 0.3s ease",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.borderColor = `${p.color}40`;
                e.currentTarget.style.boxShadow = `0 10px 30px rgba(0,0,0,0.2)`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.borderColor = "var(--border-color)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {/* Tag and Icon */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    fontFamily: "'Fira Code', monospace",
                    fontSize: "clamp(0.6rem, 2vw, 0.65rem)",
                    color: p.color,
                    background: `${p.color}15`,
                    padding: "0.25rem 0.75rem",
                    borderRadius: "6px",
                    border: `1px solid ${p.color}30`,
                    letterSpacing: "0.05em",
                  }}
                >
                  {p.tag}
                </span>
                {p.featured && (
                  <span
                    style={{
                      fontSize: "0.75rem",
                      color: "var(--accent-cyan)",
                      background: "rgba(0,212,170,0.1)",
                      padding: "0.2rem 0.5rem",
                      borderRadius: "4px",
                    }}
                  >
                    ⭐ Featured
                  </span>
                )}
              </div>

              {/* Title */}
              <h3
                style={{
                  fontWeight: 700,
                  fontSize: "clamp(1rem, 3vw, 1.1rem)",
                  color: "var(--text-primary)",
                  marginTop: "0.25rem",
                }}
              >
                {p.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  color: "var(--text-secondary)",
                  fontSize: "clamp(0.75rem, 2.5vw, 0.82rem)",
                  lineHeight: 1.6,
                  flex: 1,
                }}
              >
                {p.desc}
              </p>

              {/* Tech Stack */}
              <div>
                <div
                  style={{
                    fontSize: "0.7rem",
                    color: "var(--text-muted)",
                    marginBottom: "0.5rem",
                    fontFamily: "'Fira Code', monospace",
                  }}
                >
                  TECH STACK
                </div>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "0.4rem",
                  }}
                >
                  {p.tech.slice(0, 6).map((t) => (
                    <span
                      key={t}
                      className="skill-tag"
                      style={{
                        fontSize: "clamp(0.65rem, 2vw, 0.7rem)",
                        padding: "0.2rem 0.6rem",
                        background: `${p.color}10`,
                        border: `1px solid ${p.color}20`,
                        borderRadius: "4px",
                        color: "var(--text-primary)",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                  {p.tech.length > 6 && (
                    <span
                      style={{
                        fontSize: "clamp(0.65rem, 2vw, 0.7rem)",
                        padding: "0.2rem 0.6rem",
                        background: "rgba(255,255,255,0.05)",
                        borderRadius: "4px",
                        color: "var(--text-muted)",
                      }}
                    >
                      +{p.tech.length - 6} more
                    </span>
                  )}
                </div>
              </div>

              {/* Demo Link */}
              <div
                style={{
                  display: "flex",
                  gap: "0.75rem",
                  paddingTop: "0.5rem",
                  marginTop: "auto",
                }}
              >
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={p.demo}
                  style={{
                    fontSize: "0.8rem",
                    color: "var(--accent-cyan)",
                    textDecoration: "none",
                    fontFamily: "'Fira Code', monospace",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.25rem",
                    transition: "gap 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.gap = "0.5rem";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.gap = "0.25rem";
                  }}
                >
                  Visit Website ↗
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        /* Projects Grid Base */
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }
        
        /* Large Laptops and Desktops */
        @media (min-width: 1200px) {
          .projects-grid {
            grid-template-columns: repeat(3, 1fr) !important;
            gap: 1.75rem !important;
          }
        }
        
        /* Tablet Landscape (1024px - 1199px) */
        @media (max-width: 1199px) and (min-width: 769px) {
          .projects-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 1.5rem !important;
          }
        }
        
        /* Tablet Portrait (641px - 768px) */
        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 1.25rem !important;
          }
        }
        
        /* Mobile Large (481px - 640px) */
        @media (max-width: 640px) {
          .projects-grid {
            grid-template-columns: 1fr !important;
            gap: 1.25rem !important;
          }
          
          #projects {
            padding: 60px 0 !important;
          }
        }
        
        /* Mobile Small (up to 480px) */
        @media (max-width: 480px) {
          .projects-grid {
            gap: 1rem !important;
          }
          
          .project-card {
            padding: 1rem !important;
          }
        }
        
        /* Landscape Mode for Mobile */
        @media (max-width: 768px) and (orientation: landscape) {
          .projects-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 1rem !important;
          }
        }
        
        /* Project Card Animations */
        .project-card {
          transition: all 0.3s ease;
        }
        
        /* Skill Tags Hover Effect */
        .skill-tag {
          transition: all 0.3s ease;
        }
        
        .skill-tag:hover {
          transform: translateY(-2px);
        }
        
        /* Responsive Typography */
        @media (max-width: 768px) {
          .projects-grid .project-card h3 {
            font-size: 1rem !important;
          }
          
          .projects-grid .project-card p {
            font-size: 0.8rem !important;
          }
        }
        
        /* Smooth Scroll Behavior */
        html {
          scroll-behavior: smooth;
        }
        
        /* Custom Scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
          height: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: var(--bg-secondary);
        }
        
        ::-webkit-scrollbar-thumb {
          background: var(--accent-cyan);
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: var(--accent-green);
        }
      `}</style>
    </section>
  );
}