import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
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
        <script src="/hank-widget.js" defer></script>
      </body>
    </html>
  );
}
