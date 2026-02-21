import Link from "next/link";


export default function Home() {
  return (
    <div className="card">
      <h1 className="title">Ben Brochet</h1>
      <p className="tech-stack"><b> Python</b>, <b>JavaScript/TypeScript</b>, <b>Swift</b>, learning <b>C</b> </p>

      <nav>
        <ul className="nav-links">
          <li className="nav-link">
            <a href="mailto:benb123435cc@gmail.com">
              Email
            </a>
          </li>
          <li className="nav-link">
            <a href="https://github.com/BenBrochet" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </li>
          <li className="nav-link">
            <Link href="/projects">Projects</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
