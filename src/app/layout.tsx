import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "TechX - Powering Sustainable Energy",
  description: "TechX - Ecology & Solar Energy Solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/icon.webp" type="image/gif" sizes="16x16" />
      </head>
      <body>
        <div id="wrapper">
          <Header />
          {children}
          <Footer />
        </div>

        {/* Scripts - In a real app, these should be handled better, but for replica we include them */}
        {/* We can use next/script for these if needed */}
      </body>
    </html>
  );
}
