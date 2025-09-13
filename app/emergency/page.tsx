"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { AlertTriangle, Clock, Phone, Zap } from "lucide-react";
import { useState } from "react";

export default function EmergencyPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    emergencyType: "",
    description: "",
    urgency: "high",
    accessInstructions: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would submit to a backend and trigger immediate dispatch
    alert(
      "Emergency service request submitted! A certified electrician will contact you within 15 minutes and dispatch to your location immediately."
    );
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white border-b-2 border-primary shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-primary tracking-wide">
                TOLLIVER ELECTRIC
              </h1>
              <p className="text-sm text-muted-foreground font-medium">
                Professional Electrical Services Since 1987
              </p>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <div className="flex items-center space-x-2 text-primary font-semibold">
                <Phone className="h-5 w-5" />
                <span className="text-lg">(502) 518-7804</span>
              </div>
              <Button
                className="bg-gradient-to-b from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold px-6 py-2 rounded shadow-md cursor-pointer"
                onClick={() => (window.location.href = "/")}
              >
                BACK TO HOME
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Emergency Alert Banner */}
      <div className="bg-red-600 text-white py-4">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-center space-x-3">
            <AlertTriangle className="h-6 w-6" />
            <div className="text-center">
              <h2 className="text-xl font-bold">
                24/7 EMERGENCY ELECTRICAL SERVICE
              </h2>
              <p className="text-sm">
                Immediate response for electrical emergencies
              </p>
            </div>
            <AlertTriangle className="h-6 w-6" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="py-16 bg-muted">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Emergency Electrical Service
            </h2>
            <p className="text-xl text-muted-foreground">
              When electrical emergencies strike, Tolliver Electric responds
              fast. Available 24/7 for immediate service across Kentucky &
              Indiana.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-lg bg-white">
                <CardHeader>
                  <CardTitle className="text-2xl text-center text-red-600">
                    Emergency Service Request
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Contact Information */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-foreground border-b pb-2">
                        Contact Information
                      </h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">First Name *</Label>
                          <Input
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            required
                            placeholder="John"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Last Name *</Label>
                          <Input
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            required
                            placeholder="Smith"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          placeholder="(502) 555-0123"
                        />
                      </div>
                    </div>

                    {/* Emergency Location */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-foreground border-b pb-2">
                        Emergency Location
                      </h3>
                      <div className="space-y-2">
                        <Label htmlFor="address">Street Address *</Label>
                        <Input
                          id="address"
                          name="address"
                          value={formData.address}
                          onChange={handleInputChange}
                          required
                          placeholder="123 Main Street"
                        />
                      </div>
                      <div className="grid md:grid-cols-3 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="city">City *</Label>
                          <Input
                            id="city"
                            name="city"
                            value={formData.city}
                            onChange={handleInputChange}
                            required
                            placeholder="Louisville"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="state">State *</Label>
                          <select
                            id="state"
                            name="state"
                            value={formData.state}
                            onChange={handleInputChange}
                            required
                            className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                          >
                            <option value="">Select State</option>
                            <option value="KY">Kentucky</option>
                            <option value="IN">Indiana</option>
                            <option value="OH">Ohio</option>
                            <option value="TN">Tennessee</option>
                            <option value="WV">West Virginia</option>
                          </select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="zipCode">ZIP Code *</Label>
                          <Input
                            id="zipCode"
                            name="zipCode"
                            value={formData.zipCode}
                            onChange={handleInputChange}
                            required
                            placeholder="40205"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Emergency Details */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-foreground border-b pb-2">
                        Emergency Details
                      </h3>
                      <div className="space-y-2">
                        <Label htmlFor="emergencyType">
                          Type of Emergency *
                        </Label>
                        <select
                          id="emergencyType"
                          name="emergencyType"
                          value={formData.emergencyType}
                          onChange={handleInputChange}
                          required
                          className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                        >
                          <option value="">Select Emergency Type</option>
                          <option value="power-outage">
                            Complete Power Outage
                          </option>
                          <option value="partial-outage">
                            Partial Power Outage
                          </option>
                          <option value="sparking">
                            Electrical Sparking/Arcing
                          </option>
                          <option value="burning-smell">
                            Burning Smell from Electrical
                          </option>
                          <option value="hot-outlets">
                            Hot Outlets/Switches
                          </option>
                          <option value="flickering-lights">
                            Flickering Lights
                          </option>
                          <option value="tripped-breakers">
                            Constantly Tripping Breakers
                          </option>
                          <option value="water-damage">
                            Electrical Water Damage
                          </option>
                          <option value="exposed-wires">
                            Exposed Live Wires
                          </option>
                          <option value="other">Other Emergency</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="description">
                          Emergency Description *
                        </Label>
                        <Textarea
                          id="description"
                          name="description"
                          value={formData.description}
                          onChange={handleInputChange}
                          required
                          placeholder="Please describe the electrical emergency in detail..."
                          rows={4}
                        />
                      </div>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="urgency">Emergency Level</Label>
                          <select
                            id="urgency"
                            name="urgency"
                            value={formData.urgency}
                            onChange={handleInputChange}
                            className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                          >
                            <option value="critical">
                              Critical (Immediate Danger)
                            </option>
                            <option value="high">High (No Power/Heat)</option>
                            <option value="medium">
                              Medium (Partial Service)
                            </option>
                          </select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="accessInstructions">
                            Access Instructions
                          </Label>
                          <Input
                            id="accessInstructions"
                            name="accessInstructions"
                            value={formData.accessInstructions}
                            onChange={handleInputChange}
                            placeholder="Gate code, key location, etc."
                          />
                        </div>
                      </div>
                    </div>

                    <div className="pt-6">
                      <Button
                        type="submit"
                        size="lg"
                        className="w-full bg-gradient-to-b from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-bold py-3 text-lg rounded shadow-lg cursor-pointer"
                      >
                        <AlertTriangle className="h-5 w-5 mr-2" />
                        SUBMIT EMERGENCY REQUEST
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card className="shadow-lg bg-white">
                <CardHeader>
                  <CardTitle className="text-xl text-red-600">
                    Emergency Response
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Clock className="h-5 w-5 text-red-600 mt-1" />
                    <div>
                      <h4 className="font-semibold">15-Minute Response</h4>
                      <p className="text-sm text-muted-foreground">
                        We contact you within 15 minutes of your request
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Zap className="h-5 w-5 text-red-600 mt-1" />
                    <div>
                      <h4 className="font-semibold">Immediate Dispatch</h4>
                      <p className="text-sm text-muted-foreground">
                        Certified electricians dispatched immediately
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Phone className="h-5 w-5 text-red-600 mt-1" />
                    <div>
                      <h4 className="font-semibold">24/7 Availability</h4>
                      <p className="text-sm text-muted-foreground">
                        Emergency service available every day of the year
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <AlertTriangle className="h-5 w-5 text-red-600 mt-1" />
                    <div>
                      <h4 className="font-semibold">Safety First</h4>
                      <p className="text-sm text-muted-foreground">
                        Licensed, insured, and safety-certified technicians
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg bg-white">
                <CardHeader>
                  <CardTitle className="text-xl">Emergency Contact</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-red-600" />
                    <div>
                      <p className="font-semibold text-lg">(502) 518-7804</p>
                      <p className="text-sm text-muted-foreground">
                        24/7 Emergency Hotline
                      </p>
                    </div>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                    <p className="text-sm text-red-800 font-medium">
                      <strong>
                        If this is a life-threatening emergency, call 911
                        immediately.
                      </strong>
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg bg-white">
                <CardHeader>
                  <CardTitle className="text-xl">Common Emergencies</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-red-600">
                      Power Outages
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Complete or partial loss of electrical power
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-600">
                      Electrical Fires
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Sparks, burning smells, or visible electrical fires
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-600">
                      Exposed Wires
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Damaged or exposed electrical wiring
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-600">Water Damage</h4>
                    <p className="text-sm text-muted-foreground">
                      Electrical systems affected by water or flooding
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 Tolliver Electric Company. All rights reserved. | Licensed
            Electrical Contractor
          </p>
        </div>
      </footer>
    </div>
  );
}
