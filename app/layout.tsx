import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import StructuredData from "@/components/StructuredData";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap", // Improves font loading performance
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Shanti Library - Premium Study Spaces & Library Services",
    template: "%s | Shanti Library"
  },
  description: "Discover Shanti Library's premium study spaces, quiet reading rooms, and comprehensive library services. Book your study spot today for focused learning in a peaceful environment.",
  keywords: [
    "Shanti Library",
    "study spaces",
    "library services",
    "quiet study rooms",
    "reading rooms",
    "study hall",
    "library booking",
    "premium library",
    "study environment",
    "academic resources"
  ],
  authors: [{ name: "Shanti Library" }],
  creator: "Shanti Library",
  publisher: "Shanti Library",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://shantilibrary.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://shantilibrary.com",
    title: "Shanti Library - Premium Study Spaces & Library Services",
    description: "Discover Shanti Library's premium study spaces, quiet reading rooms, and comprehensive library services. Book your study spot today.",
    siteName: "Shanti Library",
    images: [
      {
        url: "/logo_shanti_library.jpg",
        width: 1200,
        height: 630,
        alt: "Shanti Library - Premium Study Spaces",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shanti Library - Premium Study Spaces & Library Services",
    description: "Discover Shanti Library's premium study spaces, quiet reading rooms, and comprehensive library services.",
    images: ["/logo_shanti_library.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code", // Add your Google Search Console verification code
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <StructuredData />
        {children}
      </body>
    </html>
  );
}
