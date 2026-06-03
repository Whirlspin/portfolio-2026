import { GoogleAnalytics } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
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
  title:
    "Jethro Edwards • Website design and development. Trowbridge, Wiltshire.",
  description:
    "I specialise in creating user-friendly websites that help businesses grow online. Trowbridge, Wiltshire.",
  openGraph: {
    url: "https://www.jethroedwards.com/",
    type: "website",
    title: "Jethro Edwards • Website design and development",
    description:
      "I specialise in creating user-friendly websites that help businesses grow online. Trowbridge, Wiltshire.",
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

        <GoogleAnalytics gaId="G-CQ1BK93JHL" />
        <SpeedInsights />
        <Analytics />

        {/* Hotjar  */}
        {/* <Script id="hotjar" strategy="afterInteractive">
          {`(function(h,o,t,j,a,r){
    h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
    h._hjSettings={hjid:6625273,hjsv:6};
    a=o.getElementsByTagName('head')[0];
    r=o.createElement('script');r.async=1;
    r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
    a.appendChild(r);
  })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`}
        </Script> */}

        {/* Clarity */}
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`(function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "wfauecrbv0");`}
        </Script>
      </body>
    </html>
  );
}
