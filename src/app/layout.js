import "./globals.css";

export const metadata = {
  title: "Ben Brochet",
  description: "Ben Brochet's personal website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="content">{children}</header>
      </body>
    </html>
  );
}
