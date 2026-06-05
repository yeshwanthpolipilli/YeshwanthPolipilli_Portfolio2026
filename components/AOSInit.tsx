"use client";
import { useEffect } from "react";

export default function AOSInit() {
  useEffect(() => {
    const initAOS = () => {
      const elements = document.querySelectorAll("[data-aos]");
      
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const el = entry.target as HTMLElement;
              const delay = parseInt(el.dataset.aosDelay || "0");
              setTimeout(() => {
                el.classList.add("aos-animate");
              }, delay);
              observer.unobserve(el);
            }
          });
        },
        { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
      );

      elements.forEach((el) => observer.observe(el));
    };

    // Small delay to ensure DOM is ready
    setTimeout(initAOS, 100);
  }, []);

  return null;
}
