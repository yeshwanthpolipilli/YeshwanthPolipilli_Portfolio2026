"use client";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer style={{
      background: "var(--bg-secondary)",
      borderTop: "1px solid var(--border-color)",
      padding: "2rem 1.5rem",
      textAlign: "center",
    }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "1rem",
        }}>
          <div style={{ fontFamily: "'Fira Code', monospace", fontSize: "0.9rem", color: "var(--accent-cyan)", fontWeight: 600 }}>
            YK
          </div>
          <p style={{ fontSize: "0.82rem", color: "var(--text-muted)" }}>
            © {year} Polipilli Yeshwanth Kumar · Built with Next.js & TypeScript
          </p>
       <div
  style={{
    display: "flex",
    gap: "1rem",
    flexWrap: "wrap",
  }}
>
  <a
    href="https://github.com/yeshwanthpolipilli"
    target="_blank"
    rel="noopener noreferrer"
    style={{
      fontSize: "0.82rem",
      color: "var(--text-muted)",
      textDecoration: "none",
      transition: "color 0.2s",
    }}
    onMouseEnter={(e) =>
      (e.currentTarget.style.color = "var(--accent-cyan)")
    }
    onMouseLeave={(e) =>
      (e.currentTarget.style.color = "var(--text-muted)")
    }
  >
    GitHub
  </a>

  <a
    href="https://linkedin.com/in/yeshwanth-kumar-b57297293"
    target="_blank"
    rel="noopener noreferrer"
    style={{
      fontSize: "0.82rem",
      color: "var(--text-muted)",
      textDecoration: "none",
      transition: "color 0.2s",
    }}
    onMouseEnter={(e) =>
      (e.currentTarget.style.color = "var(--accent-cyan)")
    }
    onMouseLeave={(e) =>
      (e.currentTarget.style.color = "var(--text-muted)")
    }
  >
    LinkedIn
  </a>

  <a
    href="https://wa.me/919014097242"
    target="_blank"
    rel="noopener noreferrer"
    style={{
      fontSize: "0.82rem",
      color: "var(--text-muted)",
      textDecoration: "none",
      transition: "color 0.2s",
    }}
    onMouseEnter={(e) =>
      (e.currentTarget.style.color = "var(--accent-cyan)")
    }
    onMouseLeave={(e) =>
      (e.currentTarget.style.color = "var(--text-muted)")
    }
  >
    WhatsApp
  </a>
</div>
        </div>
      </div>
    </footer>
  );
}
