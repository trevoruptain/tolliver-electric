"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export default function EstimatePage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    serviceType: "",
    projectDescription: "",
    preferredContact: "phone",
    urgency: "standard",
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
    // In a real application, this would submit to a backend
    alert(
      "Thank you for your request! We'll contact you within 24 hours to schedule your free estimate."
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
                <span className="text-lg">📞</span>
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

      {/* Main Content */}
      <main className="py-16 bg-muted">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Request Your Free Estimate
            </h2>
            <p className="text-xl text-muted-foreground">
              Get a professional electrical estimate from Kentucky & Indiana's
              most trusted electrical contractor
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-lg bg-white">
                <CardHeader>
                  <CardTitle className="text-2xl text-center">
                    Project Information
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Personal Information */}
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
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address *</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            placeholder="john@example.com"
                          />
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
                    </div>

                    {/* Address Information */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-foreground border-b pb-2">
                        Project Location
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

                    {/* Project Details */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-foreground border-b pb-2">
                        Project Details
                      </h3>
                      <div className="space-y-2">
                        <Label htmlFor="serviceType">Type of Service *</Label>
                        <select
                          id="serviceType"
                          name="serviceType"
                          value={formData.serviceType}
                          onChange={handleInputChange}
                          required
                          className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                        >
                          <option value="">Select Service Type</option>
                          <option value="residential">
                            Residential Electrical
                          </option>
                          <option value="commercial">
                            Commercial Electrical
                          </option>
                          <option value="repair">Electrical Repair</option>
                          <option value="installation">New Installation</option>
                          <option value="upgrade">Panel/System Upgrade</option>
                          <option value="inspection">Safety Inspection</option>
                          <option value="emergency">Emergency Service</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="projectDescription">
                          Project Description *
                        </Label>
                        <Textarea
                          id="projectDescription"
                          name="projectDescription"
                          value={formData.projectDescription}
                          onChange={handleInputChange}
                          required
                          placeholder="Please describe your electrical project in detail..."
                          rows={4}
                        />
                      </div>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="preferredContact">
                            Preferred Contact Method
                          </Label>
                          <select
                            id="preferredContact"
                            name="preferredContact"
                            value={formData.preferredContact}
                            onChange={handleInputChange}
                            className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                          >
                            <option value="phone">Phone Call</option>
                            <option value="email">Email</option>
                            <option value="text">Text Message</option>
                          </select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="urgency">Project Urgency</Label>
                          <select
                            id="urgency"
                            name="urgency"
                            value={formData.urgency}
                            onChange={handleInputChange}
                            className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                          >
                            <option value="standard">
                              Standard (1-2 weeks)
                            </option>
                            <option value="urgent">Urgent (3-5 days)</option>
                            <option value="emergency">
                              Emergency (24 hours)
                            </option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="pt-6">
                      <Button
                        type="submit"
                        size="lg"
                        className="w-full bg-gradient-to-b from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-3 text-lg rounded shadow-lg cursor-pointer"
                      >
                        SUBMIT ESTIMATE REQUEST
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
                  <CardTitle className="text-xl">
                    Why Choose Tolliver Electric?
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <span className="text-primary text-xl">✓</span>
                    <div>
                      <h4 className="font-semibold">35+ Years Experience</h4>
                      <p className="text-sm text-muted-foreground">
                        Serving Kentucky & Indiana since 1987
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-primary text-xl">✓</span>
                    <div>
                      <h4 className="font-semibold">Licensed & Insured</h4>
                      <p className="text-sm text-muted-foreground">
                        Fully licensed electrical contractors
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-primary text-xl">✓</span>
                    <div>
                      <h4 className="font-semibold">24/7 Emergency Service</h4>
                      <p className="text-sm text-muted-foreground">
                        Available when you need us most
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-primary text-xl">✓</span>
                    <div>
                      <h4 className="font-semibold">Free Estimates</h4>
                      <p className="text-sm text-muted-foreground">
                        No obligation, detailed estimates
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg bg-white">
                <CardHeader>
                  <CardTitle className="text-xl">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-primary text-xl">📞</span>
                    <div>
                      <p className="font-semibold">(502) 518-7804</p>
                      <p className="text-sm text-muted-foreground">
                        24/7 Emergency Service
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-primary text-xl">📧</span>
                    <div>
                      <p className="font-semibold">info@tolliverelectric.com</p>
                      <p className="text-sm text-muted-foreground">
                        General Inquiries
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-primary text-xl">🕒</span>
                    <div>
                      <p className="font-semibold">Mon-Fri: 7AM-6PM</p>
                      <p className="text-sm text-muted-foreground">
                        Emergency: 24/7
                      </p>
                    </div>
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
