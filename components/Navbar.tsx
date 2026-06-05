"use client";
import { useState, useEffect } from "react";
import { useTheme } from "./ThemeProvider";

const navLinks = [
  { label: "About", href: "#hero" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setActive(href);
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav
        className="navbar"
        style={{
          boxShadow: scrolled ? "0 4px 30px rgba(0,0,0,0.3)" : "none",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 1.5rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "64px",
          }}
        >
          {/* Logo */}
        <a
  href="/logo"
  onClick={(e) => handleNav(e, "#hero")}
  style={{
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
  }}
>
  <img
    src="/logo.png" // place logo.png inside public folder
    alt="Yeshwanth Logo"
    style={{
      width: "50px",
      height: "50px",
      objectFit: "contain",
    }}
  />
</a>

          {/* Desktop Links */}
          <div
            className="desktop-nav"
            style={{ display: "flex", gap: "2rem", alignItems: "center" }}
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="nav-link"
                onClick={(e) => handleNav(e, link.href)}
                style={{
                  color: active === link.href ? "var(--accent-cyan)" : undefined,
                }}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            {/* Resume button */}
            <a
              href="/Yeshwanth_FullStack_WebDeveloper_Resume_2026.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ fontSize: "0.8rem", padding: "0.5rem 1.1rem" }}
            >
              Resume ↗
            </a>

            {/* Theme Toggle */}
            <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
              {theme === "dark" ? "☀️" : "🌙"}
            </button>

            {/* Hamburger (mobile) */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="hamburger"
              aria-label="Menu"
              style={{
                display: "none",
                background: "none",
                border: "none",
                color: "var(--text-primary)",
                fontSize: "1.5rem",
                cursor: "none",
              }}
            >
              {menuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            style={{
              fontSize: "1.5rem",
              fontWeight: 600,
              color: "var(--text-primary)",
              textDecoration: "none",
            }}
            onClick={(e) => handleNav(e, link.href)}
          >
            {link.label}
          </a>
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>
    </>
  );
}
