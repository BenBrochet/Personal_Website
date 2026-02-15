import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1 className="title">Ben Brochet</h1>

      <h3 className="ME">Languages:</h3>
      <p className="ME">python/js/ts/tailwind/html5/css/swift/c/c++</p>

      <nav>
        <ul id="Nala">
          <li className="Sneakylink">
            <a
              href="https://github.com/BenBrochet"
              target="_blank"
              rel="noopener"
            >
              Github
            </a>
          </li>
          <li className="Sneakylink">
            <a
              href="https://www.linkedin.com/feed/"
              target="_blank"
              rel="noopener"
            >
              LinkedIn
            </a>
          </li>
          <li className="Sneakylink">
            <Link href="/projects">Personal Projects</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
