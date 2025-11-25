import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-16 md:py-20 bg-primary">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6">
          Ready to Upgrade Your Electrical System?
        </h2>
        <p className="text-blue-100 text-xl max-w-2xl mx-auto mb-10">
          Whether it's a small repair or a major installation, our team is ready
          to deliver excellence. Get a free estimate today.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button
            size="lg"
            variant="secondary"
            className="h-12 px-8 text-base font-semibold"
            onClick={() => (window.location.href = "/estimate")}
          >
            Get Free Estimate
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="h-12 px-8 text-base font-semibold bg-transparent text-white border-white hover:bg-white/10 hover:text-white"
            onClick={() => (window.location.href = "tel:502-518-7804")}
          >
            Call Now: (502) 518-7804
          </Button>
        </div>
      </div>
    </section>
  );
}





