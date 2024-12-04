import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Navbar } from "@/app/client-component/navbar";

export const metadata: Metadata = {
  title: "Esensi Digital",
  description: "Where Ideas Meet Formulas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* Google Fonts link */}
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@100;300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={` antialiased `}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
