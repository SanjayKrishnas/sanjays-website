// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";  
import Navbar from "../components/Navbar/Navbar";

export const metadata: Metadata = {
  title: "Sanjay Krishna - Portfolio",
  description: "Personal portfolio website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}