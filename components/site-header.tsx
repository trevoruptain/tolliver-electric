"use client";

import { Menu, Phone } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { Button } from "@/components/ui/button";

function TolliverLogo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      className="h-10 w-10"
    >
      <defs>
        <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: "#3B82F6", stopOpacity: 1 }} />
          <stop
            offset="100%"
            style={{ stopColor: "#2563EB", stopOpacity: 1 }}
          />
        </linearGradient>
      </defs>
      {/* Background with rounded square */}
      <rect x="4" y="4" width="56" height="56" rx="12" fill="url(#logoGrad)" />
      {/* Stylized T letter - bold and modern */}
      <path
        d="M 32 16 L 32 48 M 18 24 L 46 24"
        stroke="white"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/* Small accent circle for electrical theme */}
      <circle cx="32" cy="24" r="2" fill="white" />
    </svg>
  );
}

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <TolliverLogo />
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight">TOLLIVER</span>
              <span className="text-xs font-medium text-muted-foreground -mt-1 tracking-widest">
                ELECTRIC
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Home
            </Link>
            <Link
              href="#services"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Services
            </Link>
            <Link
              href="#about"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              About
            </Link>
            <Link
              href="#locations"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Locations
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Contact
            </Link>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:502-518-7804"
              className="flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-primary transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span>(502) 518-7804</span>
            </a>
            <Button onClick={() => (window.location.href = "/estimate")}>
              Free Estimate
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t p-4 bg-background space-y-4">
          <nav className="flex flex-col gap-4">
            <Link
              href="/"
              className="text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="#services"
              className="text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="#about"
              className="text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="#locations"
              className="text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Locations
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="pt-4 border-t flex flex-col gap-4">
              <a
                href="tel:502-518-7804"
                className="flex items-center gap-2 text-sm font-semibold"
              >
                <Phone className="h-4 w-4" />
                <span>(502) 518-7804</span>
              </a>
              <Button
                className="w-full"
                onClick={() => (window.location.href = "/estimate")}
              >
                Free Estimate
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
