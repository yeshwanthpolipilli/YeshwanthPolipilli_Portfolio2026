"use client";
import { useEffect, useRef } from "react";

const experiences = [
  {
    company: "Innovation Eco Solutions",
    period: "Jan 2025 – Present",
    role: "Web Developer",
    current: true,
    desc: [
      {
        name: "Property Source Hub",
        points: [
          "Developed scalable web applications using Node.js, Express.js, React.js, and PostgreSQL",
          "Designed and optimized REST APIs, improving response time by 35%",
          "Integrated Stripe payment gateway for secure subscription and transaction workflows",
          "Implemented JWT authentication and role-based access control",
          "Deployed applications using PM2 and Nginx ensuring high availability",
          "Improved performance using Redis caching and efficient query optimization",
          "Built responsive and SEO-friendly UIs using Next.js",
        ],
      },
      {
  name: "Bizzcurve",
  points: [
    "Developed and maintained a business growth platform using React.js, Next.js, Node.js, Express.js, and PostgreSQL",
    "Built scalable REST APIs and optimized backend services to support funding, finance, mortgage, insurance, and AI solution workflows",
    "Implemented secure JWT-based authentication and role-based access control for user management",
    "Integrated Google Analytics, Meta Pixel, and SEO best practices to improve lead generation and website visibility",
    "Designed responsive and SEO-friendly user interfaces using Next.js, improving user engagement across devices",
    "Optimized database queries and application performance to ensure fast page load times and reliable user experience",
    "Collaborated with business stakeholders to develop landing pages and lead-capture workflows for funding and financial services campaigns",
  ],
},
      {
        name: "Clearstay360 — SaaS Platform",
        points: [
          "Built a scalable SaaS platform for rental property management",
          "Designed REST APIs and database schemas using Sequelize ORM",
          "Implemented role-based authentication for SA Owner, PM, and Cleaning Co.",
          "Integrated Stripe for subscription-based payments and onboarding workflows",
          "Developed inventory management system with property-level tracking",
          "Built inspection reporting system with PDF generation and email notifications",
          "Managed file storage using Azure Blob Storage",
        ],
      },
    ],
    tags: [
      "React.js",
      "Next.js",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Redis",
      "Stripe",
      "Azure",
    ],
  },

  {
    company: "Genamplify Solutions Hub",
    period: "Mar 2024 – Nov 2024",
    role: "Web Developer",
    current: false,
    desc: [
      {
        name: "Sree Jewells — Jewellery Showcase",
        points: [
          "Built responsive jewellery platform with REST APIs and admin authentication",
          "Improved performance by 40% through targeted optimizations",
          "Integrated lead capture system to boost conversion rates",
          "Managed backend stability and uptime using PM2",
        ],
      },
    ],
    tags: [
      "React.js",
      "Node.js",
      "Express.js",
      "MySQL",
      "PM2",
      "REST API",
    ],
  },
];

const projects_side = [
  { name: "Kairosw Jewellery", desc: "E-commerce jewellery showcase", link: "#" },
  { name: "ChatFlow.io", desc: "Real-time messaging platform", link: "#" },
];

export default function Experience() {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const section = document.getElementById("experience");
      if (!section || !parallaxRef.current) return;
      const rect = section.getBoundingClientRect();
      const ratio = -rect.top / window.innerHeight;
      parallaxRef.current.style.transform = `translateY(${ratio * 20}px)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="experience" className="section parallax-section" style={{ background: "var(--bg-primary)" }}>
      <div
        ref={parallaxRef}
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          background: "radial-gradient(ellipse 100% 50% at 50% 50%, rgba(124,58,237,0.04) 0%, transparent 70%)",
        }}
      />

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1.5rem", position: "relative" }}>
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <div className="section-label" data-aos="fade-up">CAREER JOURNEY</div>
          <h2 className="section-title" data-aos="fade-up" data-aos-delay="100">
            <span style={{ color: "var(--text-muted)", fontSize: "0.6em", display: "block", fontFamily: "'Fira Code', monospace" }}>
              {/* {'// background'} */}
            </span>
            <span>Experience</span>
          </h2>
        </div>

        {/* Timeline */}
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          {experiences.map((exp, i) => (
            <div
              key={exp.company}
              data-aos={i % 2 === 0 ? "fade-right" : "fade-left"}
              data-aos-delay={`${i * 80}`}
              style={{
                display: "flex",
                gap: "1.5rem",
                marginBottom: "2.5rem",
                position: "relative",
              }}
            >
              {/* Timeline line + dot */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <div className="timeline-dot" />
                {i < experiences.length - 1 && (
                  <div className="timeline-line" style={{ height: "100%", minHeight: "100px" }} />
                )}
              </div>

              {/* Content */}
              <div
                className="card"
                style={{ padding: "1.5rem", flex: 1, marginBottom: "0.5rem" }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "0.5rem", marginBottom: "0.5rem" }}>
                  <div>
               {exp.current && (
  <span
    style={{
      fontFamily: "'Fira Code', monospace",
      fontSize: "0.7rem",
      color: "var(--accent-cyan)",
      background: "rgba(0,212,255,0.08)",
      padding: "0.2rem 0.6rem",
      borderRadius: "4px",
      border: "1px solid rgba(0,212,255,0.2)",
    }}
  >
    ● Current
  </span>
)}
                  </div>
                  <span style={{ fontFamily: "'Fira Code', monospace", fontSize: "0.75rem", color: "var(--text-muted)" }}>
                    {exp.period}
                  </span>
                </div>
                <h3 style={{ fontWeight: 700, fontSize: "1.1rem", color: "var(--text-primary)", marginBottom: "0.25rem" }}>
                  {exp.company}
                </h3>
                <div style={{ fontFamily: "'Fira Code', monospace", fontSize: "0.8rem", color: "var(--accent-cyan)", marginBottom: "0.75rem" }}>
                  {exp.role}
                </div>
              <div style={{ marginBottom: "1rem" }}>
  {exp.desc.map((project) => (
    <div key={project.name} style={{ marginBottom: "1rem" }}>
      <div
        style={{
          color: "var(--accent-cyan)",
          fontWeight: 600,
          marginBottom: "0.5rem",
          fontSize: "0.9rem",
        }}
      >
        {project.name}
      </div>

      <ul
        style={{
          paddingLeft: "1rem",
          margin: 0,
        }}
      >
        {project.points.map((point, idx) => (
          <li
            key={idx}
            style={{
              color: "var(--text-secondary)",
              marginBottom: "0.4rem",
              lineHeight: 1.6,
              fontSize: "0.88rem",
            }}
          >
            {point}
          </li>
        ))}
      </ul>
    </div>
  ))}
</div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                  {exp.tags.map(t => (
                    <span key={t} className="skill-tag">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Side project cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1rem",
            maxWidth: "800px",
            margin: "0 auto",
          }}
          data-aos="fade-up"
        >
          {projects_side.map((p) => (
            <div key={p.name} className="card" style={{ padding: "1.25rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div>
                <div style={{ fontWeight: 600, color: "var(--text-primary)", marginBottom: "0.25rem" }}>{p.name}</div>
                <div style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>{p.desc}</div>
              </div>
              <a href={p.link} style={{ color: "var(--accent-cyan)", fontSize: "0.8rem", fontFamily: "'Fira Code', monospace" }}>
                View →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
