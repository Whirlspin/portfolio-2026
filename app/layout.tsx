import { GoogleAnalytics } from "@next/third-parties/google";
import { Inter } from "next/font/google";
import { Metadata } from "next";
import "./globals.css";
import CookieConsentV3 from "./cookieConsentV3";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jethro Edwards • Website design and development",
  description:
    "I specialise in creating user-friendly websites that help businesses grow online.",
  openGraph: {
    url: "https://www.jethroedwards.com/",
    type: "website",
    title: "Jethro Edwards • Website design and development",
    description:
      "I specialise in creating user-friendly websites that help businesses grow online.",
    images: "/opengraph-logo.png",
  },
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

        <CookieConsentV3 />

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
      </body>
    </html>
  );
}
