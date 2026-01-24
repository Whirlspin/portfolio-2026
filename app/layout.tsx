import { Inter } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import { Banner } from "./banner";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
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
      <body className={`${inter.className} antialiased`}>
        {children}
        <Banner />
      </body>
    </html>
  );
}
