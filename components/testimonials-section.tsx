import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    content:
      "Tolliver Electric transformed our aging office building with a complete electrical overhaul. Their team was professional, efficient, and the lighting design is fantastic.",
    author: "Sarah Jenkins",
    role: "Property Manager, Louisville",
    rating: 5,
  },
  {
    content:
      "I called them at 2 AM when our main breaker failed. The technician arrived within 45 minutes and had us back up and running before opening time. Incredible service!",
    author: "Michael Chen",
    role: "Restaurant Owner, Lexington",
    rating: 5,
  },
  {
    content:
      "Very knowledgeable and courteous. They explained everything they were doing during our home renovation and even suggested ways to save on energy bills.",
    author: "David & Martha Wilson",
    role: "Homeowners, Evansville",
    rating: 5,
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Trusted by the Community
          </h2>
          <p className="text-muted-foreground text-lg">
            See what our satisfied clients have to say about their experience
            with Tolliver Electric.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="border-none shadow-none bg-slate-50 dark:bg-slate-900"
            >
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-lg text-muted-foreground mb-6 italic">
                  "{testimonial.content}"
                </p>
                <div>
                  <div className="font-semibold text-foreground">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}



