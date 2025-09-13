import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white border-b-2 border-primary shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-primary tracking-wide">TOLLIVER ELECTRIC</h1>
              <p className="text-sm text-muted-foreground font-medium">Professional Electrical Services Since 1987</p>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <div className="flex items-center space-x-2 text-primary font-semibold">
                <span className="text-lg">📞</span>
                <span className="text-lg">(502) 555-WIRE</span>
              </div>
              <Button className="bg-gradient-to-b from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold px-6 py-2 rounded shadow-md">
                FREE ESTIMATE
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-card border-b border-border">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex space-x-8 py-3">
            <a href="#home" className="text-foreground hover:text-primary font-medium py-2 border-b-2 border-primary">
              HOME
            </a>
            <a href="#services" className="text-muted-foreground hover:text-primary font-medium py-2">
              SERVICES
            </a>
            <a href="#about" className="text-muted-foreground hover:text-primary font-medium py-2">
              ABOUT US
            </a>
            <a href="#locations" className="text-muted-foreground hover:text-primary font-medium py-2">
              LOCATIONS
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-primary font-medium py-2">
              CONTACT
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-b from-blue-500 to-blue-700 text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-4" style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.3)" }}>
                Kentucky & Indiana's Most Trusted Electrical Contractor
              </h2>
              <p className="text-xl mb-6" style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.3)" }}>
                {
                  "Over 35 years of reliable electrical services for homes and businesses across the region. Licensed, insured, and available 24/7 for emergencies."
                }
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-b from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white font-bold px-8 py-3 rounded shadow-lg"
                >
                  GET FREE ESTIMATE
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white text-blue-600 border-2 border-white font-bold px-8 py-3 rounded shadow-lg hover:bg-gray-100"
                >
                  EMERGENCY SERVICE
                </Button>
              </div>
            </div>
            <div className="hidden md:block">
              <img
                src="/electrical-worker-installing-wiring-in-commercial-.jpg"
                alt="Professional electrician at work"
                className="rounded-lg shadow-lg"
                style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.15)" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-muted">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Our Electrical Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="text-4xl text-primary mb-4">🏠</div>
                <h3 className="font-bold text-lg mb-2">Residential</h3>
                <p className="text-muted-foreground">Wiring, outlets, lighting, panel upgrades, and home automation</p>
              </CardContent>
            </Card>
            <Card className="shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="text-4xl text-primary mb-4">🏢</div>
                <h3 className="font-bold text-lg mb-2">Commercial</h3>
                <p className="text-muted-foreground">
                  Office buildings, retail spaces, warehouses, and industrial facilities
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="text-4xl text-primary mb-4">🔧</div>
                <h3 className="font-bold text-lg mb-2">Repairs</h3>
                <p className="text-muted-foreground">Troubleshooting, emergency repairs, and electrical maintenance</p>
              </CardContent>
            </Card>
            <Card className="shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="text-4xl text-primary mb-4">🛡️</div>
                <h3 className="font-bold text-lg mb-2">Safety Inspections</h3>
                <p className="text-muted-foreground">
                  Code compliance, safety audits, and electrical system evaluations
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-foreground">About Tolliver Electric</h2>
              <p className="text-lg mb-4 text-muted-foreground">
                {
                  "Founded in 1987 by Master Electrician Robert Tolliver, our company has grown from a small family business to one of the region's largest electrical contractors."
                }
              </p>
              <p className="text-lg mb-6 text-muted-foreground">
                {
                  "With over 150 certified electricians and 12 locations across Kentucky, Indiana, Ohio, Tennessee, and West Virginia, we've completed over 50,000 electrical projects."
                }
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-card rounded shadow-md">
                  <div className="text-2xl font-bold text-primary">35+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center p-4 bg-card rounded shadow-md">
                  <div className="text-2xl font-bold text-primary">150+</div>
                  <div className="text-sm text-muted-foreground">Certified Electricians</div>
                </div>
                <div className="text-center p-4 bg-card rounded shadow-md">
                  <div className="text-2xl font-bold text-primary">50K+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </div>
                <div className="text-center p-4 bg-card rounded shadow-md">
                  <div className="text-2xl font-bold text-primary">24/7</div>
                  <div className="text-sm text-muted-foreground">Emergency Service</div>
                </div>
              </div>
            </div>
            <div>
              <img
                src="/team-of-professional-electricians-in-uniform-with-.jpg"
                alt="Tolliver Electric team"
                className="rounded-lg shadow-lg"
                style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.15)" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section id="locations" className="py-16 bg-muted">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Our Service Locations</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="shadow-md">
              <CardContent className="p-6">
                <div className="flex items-center mb-3">
                  <span className="text-primary mr-2">📍</span>
                  <h3 className="font-bold text-lg">Louisville, KY (Headquarters)</h3>
                </div>
                <p className="text-muted-foreground mb-2">2847 Bardstown Road</p>
                <p className="text-muted-foreground mb-2">Louisville, KY 40205</p>
                <p className="text-primary font-semibold">(502) 555-WIRE</p>
              </CardContent>
            </Card>
            <Card className="shadow-md">
              <CardContent className="p-6">
                <div className="flex items-center mb-3">
                  <span className="text-primary mr-2">📍</span>
                  <h3 className="font-bold text-lg">Lexington, KY</h3>
                </div>
                <p className="text-muted-foreground mb-2">1205 New Circle Road</p>
                <p className="text-muted-foreground mb-2">Lexington, KY 40505</p>
                <p className="text-primary font-semibold">(502) 555-WIRE</p>
              </CardContent>
            </Card>
            <Card className="shadow-md">
              <CardContent className="p-6">
                <div className="flex items-center mb-3">
                  <span className="text-primary mr-2">📍</span>
                  <h3 className="font-bold text-lg">Indianapolis, IN</h3>
                </div>
                <p className="text-muted-foreground mb-2">4521 Madison Avenue</p>
                <p className="text-muted-foreground mb-2">Indianapolis, IN 46227</p>
                <p className="text-primary font-semibold">(502) 555-WIRE</p>
              </CardContent>
            </Card>
            <Card className="shadow-md">
              <CardContent className="p-6">
                <div className="flex items-center mb-3">
                  <span className="text-primary mr-2">📍</span>
                  <h3 className="font-bold text-lg">Evansville, IN</h3>
                </div>
                <p className="text-muted-foreground mb-2">812 Lincoln Avenue</p>
                <p className="text-muted-foreground mb-2">Evansville, IN 47714</p>
                <p className="text-primary font-semibold">(502) 555-WIRE</p>
              </CardContent>
            </Card>
            <Card className="shadow-md">
              <CardContent className="p-6">
                <div className="flex items-center mb-3">
                  <span className="text-primary mr-2">📍</span>
                  <h3 className="font-bold text-lg">Cincinnati, OH</h3>
                </div>
                <p className="text-muted-foreground mb-2">3456 Reading Road</p>
                <p className="text-muted-foreground mb-2">Cincinnati, OH 45229</p>
                <p className="text-primary font-semibold">(502) 555-WIRE</p>
              </CardContent>
            </Card>
            <Card className="shadow-md">
              <CardContent className="p-6">
                <div className="flex items-center mb-3">
                  <span className="text-primary mr-2">📍</span>
                  <h3 className="font-bold text-lg">Nashville, TN</h3>
                </div>
                <p className="text-muted-foreground mb-2">2100 West End Avenue</p>
                <p className="text-muted-foreground mb-2">Nashville, TN 37203</p>
                <p className="text-primary font-semibold">(502) 555-WIRE</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8 text-foreground">Get Your Free Estimate Today</h2>
          <p className="text-xl mb-8 text-muted-foreground">
            {"Ready to get started? Contact Tolliver Electric for professional electrical services you can trust."}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
            <div className="flex items-center space-x-3">
              <span className="text-2xl text-primary">📞</span>
              <div>
                <div className="text-2xl font-bold text-primary">(502) 555-WIRE</div>
                <div className="text-sm text-muted-foreground">24/7 Emergency Service</div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-2xl text-primary">🕒</span>
              <div>
                <div className="font-semibold">Mon-Fri: 7AM-6PM</div>
                <div className="text-sm text-muted-foreground">Emergency: 24/7</div>
              </div>
            </div>
          </div>
          <Button
            size="lg"
            className="bg-gradient-to-b from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white font-bold px-12 py-4 text-lg rounded shadow-lg"
          >
            REQUEST FREE ESTIMATE
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="mb-4">
                <span className="font-bold text-primary text-lg">TOLLIVER ELECTRIC</span>
              </div>
              <p className="text-sm text-muted-foreground">
                {
                  "Professional electrical services across Kentucky, Indiana, Ohio, Tennessee, and West Virginia since 1987."
                }
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Services</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Residential Electrical</li>
                <li>Commercial Electrical</li>
                <li>Emergency Repairs</li>
                <li>Safety Inspections</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Contact Info</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>2847 Bardstown Road</p>
                <p>Louisville, KY 40205</p>
                <p className="text-primary font-semibold">(502) 555-WIRE</p>
                <p>info@tolliverelectric.com</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Certifications</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Licensed & Insured</li>
                <li>NECA Member</li>
                <li>Better Business Bureau A+</li>
                <li>OSHA Certified</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>© 2024 Tolliver Electric Company. All rights reserved. | Licensed Electrical Contractor</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
