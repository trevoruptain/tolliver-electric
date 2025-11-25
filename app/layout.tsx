import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import type React from "react";
import { Suspense } from "react";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title:
    "Tolliver Electric - Professional Electrical Services | Kentucky & Indiana",
  description:
    "Trusted electrical contractors serving Kentucky, Indiana, Ohio, Tennessee, and West Virginia since 1987. Commercial & residential electrical services.",
  generator: "v0.app",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
    >
      <body className="font-sans min-h-screen flex flex-col">
        <SiteHeader />
        <main className="flex-1">
          <Suspense fallback={null}>{children}</Suspense>
        </main>
        <SiteFooter />
        <Script
          src={
            process.env.NODE_ENV === "development"
              ? process.env.NEXT_PUBLIC_WIDGET_URL ||
                "http://localhost:3000/hank-widget.js?id=2fc19c13f298435b"
              : "https://app.dialhank.com/hank-widget.js?id=5d301605ec9b4747"
          }
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
