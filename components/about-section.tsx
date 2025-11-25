import { Badge } from "@/components/ui/badge";

export function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary to-blue-600 rounded-xl opacity-20 blur-lg"></div>
            <img
              src="/team-of-professional-electricians-in-uniform-with-.jpg"
              alt="Tolliver Electric team"
              className="relative rounded-xl shadow-2xl w-full object-cover aspect-video"
            />
            <div className="absolute -bottom-6 -right-6 bg-white dark:bg-slate-900 p-6 rounded-xl shadow-xl border border-slate-100 dark:border-slate-800 max-w-xs hidden md:block">
              <p className="text-4xl font-bold text-primary mb-1">35+</p>
              <p className="text-sm text-muted-foreground">
                Years of delivering excellence in electrical services.
              </p>
            </div>
          </div>

          <div>
            <Badge className="mb-6">About Us</Badge>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-6">
              Building Trust Through Quality Workmanship
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Founded in 1987 by Master Electrician Robert Tolliver, our company
              has grown from a small family business to one of the region's
              largest electrical contractors.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              With over 150 certified electricians and 12 locations across
              Kentucky, Indiana, Ohio, Tennessee, and West Virginia, we've
              completed over 50,000 electrical projects. We take pride in our
              reputation for safety, reliability, and getting the job done right
              the first time.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <h4 className="text-xl font-bold text-foreground mb-2">150+</h4>
                <p className="text-sm text-muted-foreground">
                  Certified Electricians
                </p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-foreground mb-2">50k+</h4>
                <p className="text-sm text-muted-foreground">
                  Projects Completed
                </p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-foreground mb-2">12</h4>
                <p className="text-sm text-muted-foreground">
                  Office Locations
                </p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-foreground mb-2">24/7</h4>
                <p className="text-sm text-muted-foreground">
                  Support Available
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}





