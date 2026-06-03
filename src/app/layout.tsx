import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair", display: "swap" });

export const metadata: Metadata = {
  title: "Jenan Surgical Speciality Center | Yaalii Baqaqsanii Yaaluu Ol'aanaa Jennaan",
  description: "Ethiopia's premier surgical speciality center. Advanced surgical procedures, diagnostic imaging, maternal and pediatric care — 24/7 in Addis Ababa, Burayu.",
  keywords: ["Jenan Medical Center", "surgical center Ethiopia", "Addis Ababa hospital", "Burayu clinic"],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} font-inter bg-white text-slate-900 antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
