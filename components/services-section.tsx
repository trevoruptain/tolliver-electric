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
  },
  {
    title: "Commercial Projects",
    description:
      "Scalable electrical systems for office buildings, retail spaces, and commercial properties. Reliable power for your business.",
    icon: Building2,
  },
  {
    title: "Industrial Electrical",
    description:
      "Heavy-duty electrical infrastructure for manufacturing plants, warehouses, and industrial facilities.",
    icon: Factory,
  },
  {
    title: "Service & Repair",
    description:
      "Fast troubleshooting and repairs for any electrical issue. Our expert technicians are ready to help 24/7.",
    icon: Wrench,
  },
  {
    title: "Safety Inspections",
    description:
      "Comprehensive safety audits and code compliance inspections to ensure your property is safe and up to standard.",
    icon: Shield,
  },
  {
    title: "Generator Systems",
    description:
      "Installation and maintenance of backup generators to keep your power running during outages.",
    icon: Zap,
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-16 md:py-24 bg-slate-50 dark:bg-slate-900/50">
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
              className="group hover:shadow-lg transition-all duration-300 border-slate-200 dark:border-slate-800 hover:border-primary/50"
            >
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                  <service.icon className="h-6 w-6 text-primary group-hover:text-white transition-colors" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
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



