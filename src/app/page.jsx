
"use client";


import { useEffect, useRef, useState } from "react";
export default function Home() {
  const introVideoRef = useRef(null);
  const [showIntro, setShowIntro] = useState(true);
  useEffect(() => {
    if (!showIntro || !introVideoRef.current) {
      return;
    }
    const fallbackTimer = window.setTimeout(() => {
      setShowIntro(false);
    }, 5400);
    introVideoRef.current.play().catch(() => {
      window.setTimeout(() => setShowIntro(false), 5000);
    });
    return () => {
      window.clearTimeout(fallbackTimer);
    };
  }, [showIntro]);
  return (
    <main className="home">
      {showIntro && (
        <video
          ref={introVideoRef}
          className="intro-video"
          src="/live-photos/v1-ultrakill-first-5-hq.mp4"
          autoPlay
          muted
          playsInline
          preload="auto"
          aria-label="Ultrakill intro"
          onEnded={() => setShowIntro(false)}
        />
      )}
      <section className="home-static">
        <nav className="menu-panel" aria-label="Main navigation">
          <h1 className="menu-title">BEN BROCHET</h1>
          <a className="menu-button menu-button--active" href="mailto:benb123435cc@gmail.com">
            EMAIL
          </a>
          <a className="menu-button" href="https://github.com/BenBrochet" target="_blank" rel="noopener noreferrer">
            GITHUB
          </a>
          <a className="menu-button" href="/projects">
            PROJECTS
          </a>
          <a className="menu-button" href="/cmatrix">
            CMATRIX
          </a>
          <div className="socials">
            <p>INIT TECH STAK...OK</p>
            <div className="social-links">
              <span>PYTHON, TYPESCRIPT/JAVASCRIPT,SHELL, ARCH/UBUNTU/MACOS, C</span>
            </div>
          </div>
        </nav>
      </section>
    </main>
  );
}
