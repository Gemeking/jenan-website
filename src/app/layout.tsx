import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair", display: "swap" });

const SITE_URL = "https://jenansurgical.et";
const SITE_NAME = "Jenan Surgical Speciality Center";
const DESCRIPTION =
  "Jenan Surgical Speciality Center (Wiirtuu Baqaqsanii Yaaluu Jennaan) is a surgical hospital in Ashewa Meda, Burayu, Ethiopia — general & laparoscopic surgery, pediatric care, maternal care, diagnostic imaging, and 24/7 emergency services.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Burayu, Ashewa Meda Hospital`,
    template: `%s | ${SITE_NAME}`,
  },
  description: DESCRIPTION,
  keywords: [
    "Jenan Surgical",
    "Jenan Surgical Speciality Center",
    "Jenan Hospital Burayu",
    "Jenan Surgical Burayu",
    "surgical hospital Burayu",
    "hospital Ashewa Meda",
    "surgical center Ethiopia",
    "Burayu clinic",
    "Addis Ababa surgical hospital",
    "Wiirtuu Baqaqsanii Yaaluu Jennaan",
    "Dr Dejene Desalegn surgeon",
    "pediatrician Burayu",
    "24/7 emergency hospital Burayu",
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} | Burayu, Ashewa Meda Hospital`,
    description: DESCRIPTION,
    images: [
      {
        url: "/images/hero/building-signage.jpg",
        width: 1448,
        height: 1086,
        alt: "Jenan Surgical Speciality Center building in Ashewa Meda, Burayu",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | Burayu, Ashewa Meda Hospital`,
    description: DESCRIPTION,
    images: ["/images/hero/building-signage.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} font-inter bg-white text-slate-900 antialiased`}>
        <StructuredData />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
