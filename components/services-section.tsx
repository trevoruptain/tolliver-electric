import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Building2, Factory, Home, Shield, Wrench, Zap } from "lucide-react";

const services = [
  {
    title: "Residential Services",
    description:
      "Complete home electrical solutions including wiring, panel upgrades, lighting design, and smart home installations.",
    icon: Home,
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Commercial Projects",
    description:
      "Scalable electrical systems for office buildings, retail spaces, and commercial properties. Reliable power for your business.",
    icon: Building2,
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Industrial Electrical",
    description:
      "Heavy-duty electrical infrastructure for manufacturing plants, warehouses, and industrial facilities.",
    icon: Factory,
    image:
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Service & Repair",
    description:
      "Fast troubleshooting and repairs for any electrical issue. Our expert technicians are ready to help 24/7.",
    icon: Wrench,
    image:
      "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Safety Inspections",
    description:
      "Comprehensive safety audits and code compliance inspections to ensure your property is safe and up to standard.",
    icon: Shield,
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Generator Systems",
    description:
      "Installation and maintenance of backup generators to keep your power running during outages.",
    icon: Zap,
    image:
      "https://images.unsplash.com/photo-1661660860311-dc26ed236d5f?q=80&w=2070&auto=format&fit=crop",
  },
];

export function ServicesSection() {
  return (
    <section
      id="services"
      className="relative py-16 md:py-24 bg-slate-50 dark:bg-slate-900/50"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Comprehensive Electrical Solutions
          </h2>
          <p className="text-muted-foreground text-lg">
            We provide a full range of electrical services tailored to meet the
            unique needs of homeowners, businesses, and industrial clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 border-0 hover:-translate-y-1 h-full"
            >
              {/* Background image for each card */}
              <div className="absolute inset-0 z-0">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/70 to-slate-900/90" />
              </div>

              <CardHeader className="relative z-10">
                <div className="h-12 w-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-primary/50">
                  <service.icon className="h-6 w-6 text-primary group-hover:text-white transition-colors" />
                </div>
                <CardTitle className="text-xl text-white">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <CardDescription className="text-base leading-relaxed text-slate-200">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
