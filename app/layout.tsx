import { GoogleAnalytics } from "@next/third-parties/google";
import Script from "next/script";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jethro Edwards • Website design & development",
  description:
    "I specialise in creating user-friendly websites and applications that help businesses grow online.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>{children}</body>
      <GoogleAnalytics gaId="G-MRFBSZXSWD" />
    </html>
  );
}
