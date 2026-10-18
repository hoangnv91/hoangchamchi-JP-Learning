// layout.tsx

import "./globals.css";
import { Inter } from "next/font/google";

import AppShell from "@/components/AppShell";
import CookieConsent from "@/components/CookieConsent";

import Script from "next/script";
import Head from "next/head";

import { GoogleAnalytics } from '@next/third-parties/google'
import { GoogleTagManager } from '@next/third-parties/google'

import { Providers } from "./providers";

// we use config.json now instead, keeping it commented here, it is public anyways
// const GA_MEASUREMENT_ID = "G-P4SLLVSNCX"; // your hoangchamchi.org code

// Import the config file
//import config from "@/../config.json"; // Adjust the path if needed
//const GA_MEASUREMENT_ID = config.GA_MEASUREMENT_ID; // Use the value from config.json

const GA_MEASUREMENT_ID = process.env.GA_MEASUREMENT_ID;




const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
    <html lang="en">
      <Head>
        {/* Primary Meta Tags */}
        <meta charSet="UTF-8" />
        <title>Hoangchamchi.org - Nền tảng học tiếng Nhật miễn phí, mã nguồn mở, không quảng cáo</title>
        <meta name="title" content="Hoangchamchi.org - Nền tảng học tiếng Nhật miễn phí, mã nguồn mở, không quảng cáo" />
        <meta name="description" content="Học tiếng Nhật miễn phí với Hoangchamchi.org, nền tảng mã nguồn mở không quảng cáo." />
        <meta name="keywords" content="Hoangchamchi, Học tiếng Nhật, JLPT, Mã nguồn mở, Không quảng cáo" />
        <meta name="author" content="hoangchamchi.org" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Open Graph / Facebook Meta Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://hoangchamchi.org/" />
        <meta property="og:title" content="Hoangchamchi.org - Nền tảng học tiếng Nhật miễn phí, mã nguồn mở, không quảng cáo" />
        <meta property="og:description" content="Học tiếng Nhật miễn phí với Hoangchamchi.org, nền tảng mã nguồn mở không quảng cáo." />
        <meta property="og:image" content="https://hoangchamchi.org/path-to-your-image.jpg" />

        {/* Twitter Meta Tags */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://hoangchamchi.org/" />
        <meta property="twitter:title" content="Hoangchamchi.org - Nền tảng học tiếng Nhật miễn phí, mã nguồn mở, không quảng cáo" />
        <meta property="twitter:description" content="Học tiếng Nhật miễn phí với Hoangchamchi.org, nền tảng mã nguồn mở không quảng cáo." />
        <meta property="twitter:image" content="https://hoangchamchi.org/path-to-your-image.jpg" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />

        {/* Additional Meta Tags */}
        <meta name="application-name" content="Hoangchamchi.org" />
        <meta name="robots" content="index, follow" />

        {/* Base URL */}
        <base href="/" />
      </Head>
      <body className={inter.className}>
        
        {/* Google Analytics Scripts */}
        {/* <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script> */}

        {/* Page Layout */}
        <AppShell>{children}</AppShell>
        <CookieConsent />
      </body>


      <GoogleAnalytics gaId={GA_MEASUREMENT_ID} />
      {/* <GoogleTagManager gtmId={GA_MEASUREMENT_ID} /> */}
    </html>
    </Providers>
  );
}




























// decently functioning stuff

// import "./globals.css";
// import type { Metadata } from "next";
// import { Inter } from "next/font/google";

// import Nav from "@/components/Nav";
// import DashboardNav from "@/components/DashboardNav";
// import Sidebar from "@/components/Sidebar";
// import Footer from "@/components/Footer";
// import CookieConsent from "@/components/CookieConsent";

// import { Html, Head, Main, NextScript } from 'next/document';


// import Script from "next/script";
// const GA_MEASUREMENT_ID = "G-P4SLLVSNCX"; //my hoangchamchi.org code
// //const GA_MEASUREMENT_ID = "G-27EKDKSDWE"; // zen-lingo.com


// const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "hoangchamchi.org",
//   description: "Your path to Japanese fluency (JLPT N5-N1).",
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <head>
//         <base href="/" />

//         <meta property="og:title" content="Hoangchamchi.org - Nền tảng học tiếng Nhật miễn phí, mã nguồn mở, không quảng cáo" />
//         <meta property="og:description" content="Học tiếng Nhật miễn phí với Hoangchamchi.org, nền tảng mã nguồn mở không quảng cáo." />
//         <meta property="og:url" content="https://hoangchamchi.org" />
//         <meta property="og:type" content="website" />
//         {/* Optionally include an image */}
//         <meta property="og:image" content="https://hoangchamchi.org/path-to-your-image.jpg" />


//       </head>
//       <Script
//         src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
//         strategy="afterInteractive"
//       />
//       <Script id="google-analytics" strategy="afterInteractive">
//         {`
//           window.dataLayer = window.dataLayer || [];
//           function gtag(){window.dataLayer.push(arguments);}
//           gtag('js', new Date());
//           gtag('config', '${GA_MEASUREMENT_ID}');
//         `}
//       </Script>


//       <body className={inter.className}>
//             <div className="h-full grid lg:grid-cols-body overflow-auto">
//               <Sidebar />
//               <div className="flex flex-col h-full">
//                 <Nav />
//                 <DashboardNav />
//                 {children}
//               </div>
//             </div>
//           <Footer />
//           <CookieConsent />
//       </body>
//     </html>
//   );
// }
