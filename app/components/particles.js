"use client";
import React from "react";

export default function AmbianceParticles() {
  React.useEffect(() => {
    const particles = document.querySelectorAll(".museum-particle");
    particles.forEach((p) => {
      p.style.left = Math.random() * 100 + "%";
      p.style.top = Math.random() * 100 + "%";
      p.style.setProperty("--d", Math.random()); // random animation offset
    });
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden z-0">
      <div className="museum-grain"></div>

      {/* Particles container */}
      <div className="museum-particles">
        {Array.from({ length: 40 }).map((_, i) => (
          <span key={i} className="museum-particle" />
        ))}
      </div>
    </div>
  );
}
