import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio by Kim GyeGwan",
  description: "포트폴리오 사이트입니다.",
  keywords: ["Portfolio", "Next.js", "React", "Frontend Developer"],
  metadataBase: new URL(`${process.env.NEXTAUTH_URL}`), // 동적으로 생성된 URL
  openGraph: {
    title: "Portfolio",
    description: "A modern portfolio built with Next.js",
    url: new URL(`${process.env.NEXTAUTH_URL}`),
    siteName: "Portfolio",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Portfolio Open Graph Image",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio",
    description: "A modern portfolio built with Next.js",
    images: ["/opengraph-image"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}