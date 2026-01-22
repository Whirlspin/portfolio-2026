import { GoogleAnalytics } from "@next/third-parties/google";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import Script from "next/script";
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

      {/* Hotjar  */}
      <Script strategy="afterInteractive">
        {`(function(h,o,t,j,a,r){
    h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
    h._hjSettings={hjid:6625273,hjsv:6};
    a=o.getElementsByTagName('head')[0];
    r=o.createElement('script');r.async=1;
    r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
    a.appendChild(r);
  })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`}
      </Script>
    </html>
  );
}
