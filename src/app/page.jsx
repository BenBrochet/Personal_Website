export default function Home() {
  return (
    <main className="home">
      {/* Granulated-edge filter applied to the text below */}
      <svg className="grain-defs" aria-hidden="true" focusable="false">
        <filter id="granulate">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.85"
            numOctaves="2"
            result="noise"
          />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="2.2" />
        </filter>
      </svg>

      <h1 className="name">Benjamin Brochet</h1>
      <p className="stack">Python JavaScript TypeScript Shell C</p>
      <nav className="links" aria-label="Links">
        <a href="https://github.com/BenBrochet" target="_blank" rel="noopener noreferrer">
          github
        </a>
        <a href="https://staklabs.ai" target="_blank" rel="noopener noreferrer">
          staklabs
        </a>
        <a href="https://vindexdynamics.com" target="_blank" rel="noopener noreferrer">
          vindexdynamics
        </a>
        <a href="https://gitlab.com/BenBrochet" target="_blank" rel="noopener noreferrer">
          gitlab
        </a>
        <a href="https://zoltyck.com/" target="_blank" rel="noopener noreferrer">
          Zoltyck
        </a>
        <a href="mailto:benb123435cc@gmail.com">email</a>
      </nav>
    </main>
  );
}
