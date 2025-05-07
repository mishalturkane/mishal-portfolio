'use client';

import { useEffect, useState } from 'react';

export default function NotFound() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 600);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <div
      style={{
        height: "100vh",
        padding: isMobile ? '1rem' : '2rem',
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        textAlign: "center",
        backgroundColor: "#f0f0f0",
      }}
    >
      <h1
        style={{
          fontSize: isMobile ? "1.8rem" : "3rem",
          marginBottom: "1rem",
          color: "#333",
        }}
      >
        🚧 Bana Rha Hu Bhai 🚧
      </h1>
      <p
        style={{
          fontSize: isMobile ? "1rem" : "1.2rem",
          marginBottom: "1.5rem",
          color: "#666",
        }}
      >
        gand me ghus jayenga kya.
      </p>
      <img
        src="https://i.guim.co.uk/img/media/02088fb2247b13df646907d47f552dc69a236bc7/0_93_3235_3304/master/3235.jpg?width=700&quality=85&auto=format&fit=max&s=68f6a70c31fdd9fbdafce53e7d9b752c"
        alt="Under development"
        style={{
          width: isMobile ? "80%" : "300px",
          height: "auto",
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        }}
      />
    </div>
  );
}
