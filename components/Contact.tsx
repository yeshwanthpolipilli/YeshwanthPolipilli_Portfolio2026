"use client";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const contactInfo = [
  { 
    icon: "📧", 
    label: "Email", 
    value: "yeshwanthpolipilli@gmail.com", 
    href: "mailto:yeshwanthpolipilli@gmail.com" 
  },
  { 
    icon: "📞", 
    label: "Phone", 
    value: "+91 9014097242", 
    href: "tel:+919014097242" 
  },
  { 
    icon: "💼", 
    label: "LinkedIn", 
    value: "linkedin.com/in/yeshwanth-kumar-b57297293", 
    href: "https://linkedin.com/in/yeshwanth-kumar-b57297293" 
  },
  { 
    icon: "🐙", 
    label: "GitHub", 
    value: "github.com/yeshwanthpolipilli", 
    href: "https://github.com/yeshwanthpolipilli" 
  },
  { 
    icon: "📍", 
    label: "Location", 
    value: "Hyderabad, India (Remote)", 
    href: null 
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      await emailjs.send(
        "service_vdjte52",
        "template_pztv7w8",
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        "kOzHBeOTxtltjNG3s"
      );

      setStatus("sent");
      setShowPopup(true);

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      setTimeout(() => {
        setStatus("idle");
        setShowPopup(false);
      }, 4000);
    } catch (error) {
      console.error("Failed to send message:", error);
      setStatus("idle");
      alert("Failed to send message. Please try again.");
    }
  };

  return (
    <section id="contact" className="section" style={{ background: "var(--bg-primary)", position: "relative", overflow: "hidden" }}>
      {/* Success Popup */}
      {showPopup && (
        <div
          style={{
            position: "fixed",
            top: "1.5rem",
            right: "1.5rem",
            zIndex: 9999,
            animation: "fadeIn 0.3s ease-out",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              background: "var(--bg-card)",
              border: "1px solid rgba(0, 212, 170, 0.2)",
              boxShadow: "0 0 30px rgba(0, 212, 170, 0.15)",
              padding: "1rem 1.5rem",
              borderRadius: "16px",
              backdropFilter: "blur(12px)",
            }}
          >
            <div
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                background: "rgba(0, 212, 170, 0.15)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--accent-green)",
                fontSize: "1.5rem",
              }}
            >
              ✓
            </div>
            <div>
              <h4 style={{ color: "var(--text-primary)", fontWeight: 600, fontSize: "0.9rem", marginBottom: "0.25rem" }}>
                Message Sent Successfully!
              </h4>
              <p style={{ color: "var(--text-muted)", fontSize: "0.75rem" }}>
                Thanks for reaching out. I'll get back to you soon.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Background Glow */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "min(600px, 80vw)",
          height: "300px",
          background: "radial-gradient(circle, rgba(0,212,170,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
          borderRadius: "50%",
        }}
      />

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1.5rem", position: "relative", zIndex: 2 }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "clamp(2rem, 6vw, 4rem)" }}>
          <div className="section-label" data-aos="fade-up" style={{
            fontFamily: "'Fira Code', monospace",
            fontSize: "clamp(0.7rem, 2vw, 0.8rem)",
            color: "var(--accent-cyan)",
            letterSpacing: "0.1em",
            marginBottom: "1rem",
          }}>
            LET'S CONNECT
          </div>
          <h2 className="section-title" data-aos="fade-up" data-aos-delay="100" style={{
            fontSize: "clamp(1.8rem, 5vw, 2.5rem)",
            fontWeight: 700,
            marginBottom: "1rem",
          }}>
            Get in <span style={{ color: "var(--accent-cyan)" }}>Touch</span>
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
            Have a project in mind or want to collaborate? I'd love to hear from you.
            Let's build something amazing together.
          </p>
          <div style={{
            width: "60px",
            height: "3px",
            background: "linear-gradient(90deg, var(--accent-cyan), transparent)",
            margin: "1.5rem auto 0",
            borderRadius: "2px",
          }} />
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.5fr",
            gap: "clamp(2rem, 4vw, 3rem)",
            alignItems: "start",
          }}
          className="contact-grid"
        >
          {/* Left - Contact Info */}
          <div data-aos="fade-right">
            <div
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border-color)",
                borderRadius: "20px",
                padding: "clamp(1.5rem, 3vw, 2rem)",
              }}
            >
              <h3 style={{
                fontWeight: 700,
                fontSize: "clamp(1.1rem, 3vw, 1.2rem)",
                color: "var(--text-primary)",
                marginBottom: "1.5rem",
                fontFamily: "'Inter', sans-serif",
              }}>
                Contact Information
              </h3>

              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                {contactInfo.map((info) => (
                  <div key={info.label} style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                    <div style={{
                      width: "42px",
                      height: "42px",
                      background: "rgba(0, 212, 170, 0.08)",
                      border: "1px solid rgba(0, 212, 170, 0.15)",
                      borderRadius: "12px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "1.1rem",
                      flexShrink: 0,
                    }}>
                      {info.icon}
                    </div>
                    <div>
                      <div style={{
                        fontSize: "0.7rem",
                        color: "var(--accent-cyan)",
                        fontFamily: "'Fira Code', monospace",
                        letterSpacing: "0.05em",
                        marginBottom: "0.25rem",
                      }}>
                        {info.label}
                      </div>
                      {info.href ? (
                        <a
                          href={info.href}
                          target={info.label === "Email" || info.label === "LinkedIn" || info.label === "GitHub" ? "_blank" : undefined}
                          rel="noopener noreferrer"
                          style={{
                            fontSize: "clamp(0.8rem, 2.5vw, 0.9rem)",
                            color: "var(--text-primary)",
                            textDecoration: "none",
                            transition: "color 0.3s ease",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.color = "var(--accent-cyan)";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.color = "var(--text-primary)";
                          }}
                        >
                          {info.value}
                        </a>
                      ) : (
                        <span style={{ fontSize: "clamp(0.8rem, 2.5vw, 0.9rem)", color: "var(--text-primary)" }}>
                          {info.value}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right - Contact Form */}
          <div
            className="card"
            style={{
              padding: "clamp(1.5rem, 3vw, 2rem)",
              background: "var(--bg-card)",
              border: "1px solid var(--border-color)",
              borderRadius: "20px",
            }}
            data-aos="fade-left"
          >
            <h3 style={{
              fontWeight: 700,
              fontSize: "clamp(1.1rem, 3vw, 1.2rem)",
              color: "var(--text-primary)",
              marginBottom: "1.5rem",
              fontFamily: "'Inter', sans-serif",
            }}>
              Send a Message
            </h3>

            {status === "sent" ? (
              <div style={{ textAlign: "center", padding: "2rem" }}>
                <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>✅</div>
                <h3 style={{ color: "var(--accent-green)", marginBottom: "0.5rem", fontSize: "1.2rem" }}>
                  Message sent!
                </h3>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>
                  I'll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }} className="form-row">
                  <div>
                    <label style={{
                      fontSize: "0.75rem",
                      color: "var(--text-muted)",
                      display: "block",
                      marginBottom: "0.5rem",
                      fontFamily: "'Fira Code', monospace",
                      letterSpacing: "0.05em",
                    }}>
                      Name
                    </label>
                    <input
                      className="contact-input"
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      style={{
                        width: "100%",
                        background: "rgba(255,255,255,0.03)",
                        border: "1px solid var(--border-color)",
                        borderRadius: "12px",
                        padding: "0.8rem 1rem",
                        color: "var(--text-primary)",
                        fontSize: "0.9rem",
                        outline: "none",
                        transition: "all 0.3s ease",
                      }}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = "var(--accent-cyan)";
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor = "var(--border-color)";
                      }}
                    />
                  </div>
                  <div>
                    <label style={{
                      fontSize: "0.75rem",
                      color: "var(--text-muted)",
                      display: "block",
                      marginBottom: "0.5rem",
                      fontFamily: "'Fira Code', monospace",
                      letterSpacing: "0.05em",
                    }}>
                      Email
                    </label>
                    <input
                      className="contact-input"
                      type="email"
                      name="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      style={{
                        width: "100%",
                        background: "rgba(255,255,255,0.03)",
                        border: "1px solid var(--border-color)",
                        borderRadius: "12px",
                        padding: "0.8rem 1rem",
                        color: "var(--text-primary)",
                        fontSize: "0.9rem",
                        outline: "none",
                        transition: "all 0.3s ease",
                      }}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = "var(--accent-cyan)";
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor = "var(--border-color)";
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{
                    fontSize: "0.75rem",
                    color: "var(--text-muted)",
                    display: "block",
                    marginBottom: "0.5rem",
                    fontFamily: "'Fira Code', monospace",
                    letterSpacing: "0.05em",
                  }}>
                    Subject
                  </label>
                  <input
                    className="contact-input"
                    type="text"
                    name="subject"
                    placeholder="Project Inquiry"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    style={{
                      width: "100%",
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid var(--border-color)",
                      borderRadius: "12px",
                      padding: "0.8rem 1rem",
                      color: "var(--text-primary)",
                      fontSize: "0.9rem",
                      outline: "none",
                      transition: "all 0.3s ease",
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = "var(--accent-cyan)";
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = "var(--border-color)";
                    }}
                  />
                </div>

                <div>
                  <label style={{
                    fontSize: "0.75rem",
                    color: "var(--text-muted)",
                    display: "block",
                    marginBottom: "0.5rem",
                    fontFamily: "'Fira Code', monospace",
                    letterSpacing: "0.05em",
                  }}>
                    Message
                  </label>
                  <textarea
                    className="contact-input"
                    name="message"
                    placeholder="Tell me about your project..."
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    style={{
                      width: "100%",
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid var(--border-color)",
                      borderRadius: "12px",
                      padding: "0.8rem 1rem",
                      color: "var(--text-primary)",
                      fontSize: "0.9rem",
                      outline: "none",
                      resize: "vertical",
                      fontFamily: "inherit",
                      transition: "all 0.3s ease",
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = "var(--accent-cyan)";
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = "var(--border-color)";
                    }}
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary"
                  style={{
                    width: "100%",
                    justifyContent: "center",
                    padding: "1rem",
                    fontSize: "0.9rem",
                    fontWeight: 600,
                    background: "linear-gradient(135deg, var(--accent-cyan), var(--accent-green))",
                    border: "none",
                    borderRadius: "12px",
                    color: "white",
                    cursor: status === "sending" ? "not-allowed" : "pointer",
                    opacity: status === "sending" ? 0.7 : 1,
                    transition: "all 0.3s ease",
                  }}
                  disabled={status === "sending"}
                  onMouseEnter={(e) => {
                    if (status !== "sending") {
                      e.currentTarget.style.transform = "translateY(-2px)";
                      e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,212,255,0.3)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  {status === "sending" ? (
                    <>⏳ Sending...</>
                  ) : (
                    <>✉️ Send Message →</>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        /* Responsive Design */
        @media (max-width: 968px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
        
        @media (max-width: 640px) {
          .form-row {
            grid-template-columns: 1fr !important;
            gap: 1rem !important;
          }
        }
        
        @media (max-width: 480px) {
          #contact {
            padding: 60px 0 !important;
          }
          
          .contact-grid {
            gap: 1.5rem !important;
          }
        }
        
        /* Tablet specific */
        @media (min-width: 641px) and (max-width: 968px) {
          .form-row {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        
        /* Input focus styles */
        .contact-input:focus {
          border-color: var(--accent-cyan) !important;
          box-shadow: 0 0 0 2px rgba(0, 212, 170, 0.1);
        }
      `}</style>
    </section>
  );
}