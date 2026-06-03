import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jenan Surgical Speciality Center | Premium Medical Care in Ethiopia",
  description:
    "Ethiopia's premier surgical speciality center. Advanced surgical procedures, diagnostic imaging, and 24/7 emergency care in Addis Ababa, Burayu.",
  keywords: [
    "Jenan Medical Center",
    "surgical center Ethiopia",
    "Addis Ababa hospital",
    "Burayu clinic",
    "surgical speciality center",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${playfair.variable} font-inter bg-navy-900 text-white antialiased`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
