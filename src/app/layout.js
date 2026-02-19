import "./globals.css";
import ConditionalMatrix from "@/components/ConditionalMatrix";

export const metadata = {
  title: "Ben Brochet",
  description: "Ben Brochet's personal website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ConditionalMatrix />
        <header className="content">{children}</header>
      </body>
    </html>
  );
}
