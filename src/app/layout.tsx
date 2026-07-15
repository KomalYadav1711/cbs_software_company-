import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "../components/layout/navbar/navbar";
import { Footer } from "@/components/layout/footer";
import Script from "next/script";

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
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-LCVVVRLPVT"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-LCVVVRLPVT');
        `}
      </Script>
    </html>
  );
}