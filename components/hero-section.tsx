import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-slate-900 py-16 sm:py-32 lg:pb-32 xl:pb-36">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/electrical-worker-installing-wiring-in-commercial-.jpg"
          alt="Background"
          className="h-full w-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/60 to-slate-900" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center rounded-full border border-slate-700 bg-slate-800/50 px-3 py-1 text-sm font-medium text-slate-300 backdrop-blur mb-8">
            <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
            Available 24/7 for Emergency Services
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl drop-shadow-sm">
            Powering the Future of <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200">
              Kentucky & Indiana
            </span>
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-300 max-w-2xl">
            Over 35 years of reliable electrical excellence. From residential
            repairs to large-scale industrial installations, we deliver safety,
            quality, and performance.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <Button
              size="lg"
              className="w-full sm:w-auto text-base h-12 px-8"
              onClick={() => (window.location.href = "/estimate")}
            >
              Request Free Estimate
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto text-base h-12 px-8 bg-transparent text-white border-slate-600 hover:bg-slate-800 hover:text-white"
              onClick={() => (window.location.href = "#services")}
            >
              Explore Services
            </Button>
          </div>

          <div className="mt-12 pt-8 border-t border-slate-800 grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-4 text-left">
            <div className="flex items-center gap-2 text-slate-300">
              <CheckCircle2 className="h-5 w-5 text-primary" />
              <span className="font-medium">Licensed & Insured</span>
            </div>
            <div className="flex items-center gap-2 text-slate-300">
              <CheckCircle2 className="h-5 w-5 text-primary" />
              <span className="font-medium">Master Electricians</span>
            </div>
            <div className="flex items-center gap-2 text-slate-300">
              <CheckCircle2 className="h-5 w-5 text-primary" />
              <span className="font-medium">Upfront Pricing</span>
            </div>
            <div className="flex items-center gap-2 text-slate-300">
              <CheckCircle2 className="h-5 w-5 text-primary" />
              <span className="font-medium">Satisfaction Guaranteed</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



