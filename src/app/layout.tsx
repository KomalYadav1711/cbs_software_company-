import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "../components/layout/navbar/navbar";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "CBS Software",
  description: "Transforming Businesses Through Smart Digital Solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="font-sans">
      <body className="antialiased">
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}