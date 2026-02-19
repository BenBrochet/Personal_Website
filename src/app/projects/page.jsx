import Link from "next/link";

export const metadata = {
  title: "Projects - Ben Brochet",
};

export default function Projects() {
  return (
    <>
      <h1 className="title">Coming soon</h1>
      <nav>
        <ul>
          <li className="nav-link">
            <Link href="/">(Back to Home)</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
