import "./globals.css";
import MatrixBackground from "@/components/MatrixBackground";

export const metadata = {
  title: "Ben Brochet",
  description: "Ben Brochet's personal website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MatrixBackground />
        <header className="content">{children}</header>
      </body>
    </html>
  );
}
