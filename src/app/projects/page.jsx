import Link from "next/link";

export const metadata = {
  title: "Projects - Ben Brochet",
};

export default function Projects() {
  return (
    <>
      <h1 className="title">There are no public projects for now :</h1>
      <nav>
        <ul>
          <li className="Sneakylink">
            <Link href="/"> &larr;Back to Home</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
