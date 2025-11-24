import {
  Clock,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
  Zap,
} from "lucide-react";
import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="bg-slate-950 text-slate-200 pt-12 md:pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-primary/20 p-2 rounded-full">
                <Zap className="h-6 w-6 text-primary fill-primary" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-white">
                  TOLLIVER
                </span>
                <span className="text-xs font-medium text-slate-400 -mt-1 tracking-widest">
                  ELECTRIC
                </span>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Professional electrical services across Kentucky, Indiana, Ohio,
              Tennessee, and West Virginia since 1987. We bring power to your
              projects with safety and reliability.
            </p>
            <div className="flex space-x-4 pt-2">
              <Link
                href="#"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-slate-400 hover:text-primary transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="text-slate-400 hover:text-primary transition-colors"
                >
                  Our Services
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className="text-slate-400 hover:text-primary transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#locations"
                  className="text-slate-400 hover:text-primary transition-colors"
                >
                  Service Areas
                </Link>
              </li>
              <li>
                <Link
                  href="/estimate"
                  className="text-slate-400 hover:text-primary transition-colors"
                >
                  Request Estimate
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-slate-400 hover:text-primary transition-colors"
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Services</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="#"
                  className="text-slate-400 hover:text-primary transition-colors"
                >
                  Residential Wiring
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-slate-400 hover:text-primary transition-colors"
                >
                  Commercial Installations
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-slate-400 hover:text-primary transition-colors"
                >
                  Industrial Maintenance
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-slate-400 hover:text-primary transition-colors"
                >
                  Generator Installation
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-slate-400 hover:text-primary transition-colors"
                >
                  Lighting Design
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-slate-400 hover:text-primary transition-colors"
                >
                  Emergency Repairs
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">
              Contact Us
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="text-slate-400">
                  Headquarters:
                  <br />
                  Bardstown Road
                  <br />
                  Louisville, KY 40205
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <span className="text-slate-400">(502) 518-7804</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <span className="text-slate-400">
                  info@tolliverelectric.com
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="text-slate-400">
                  Mon-Fri: 7AM - 6PM
                  <br />
                  24/7 Emergency Service
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} Tolliver Electric Company. All rights
            reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-slate-300 transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-slate-300 transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}


