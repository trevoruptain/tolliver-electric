"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle2, Clock, Mail, Phone } from "lucide-react";
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
    <div className="min-h-screen bg-muted/30">
      {/* Page Header */}
      <div className="bg-slate-900 py-12 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Request Your Free Estimate
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Get a professional electrical estimate from Kentucky & Indiana's
            most trusted electrical contractor. Fast, accurate, and transparent
            pricing.
          </p>
        </div>
      </div>

      <main className="container mx-auto px-4 py-12 -mt-8 relative z-10">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-xl border-slate-200">
              <CardHeader>
                <CardTitle className="text-2xl">Project Information</CardTitle>
                <CardDescription>
                  Please provide details about your electrical needs so we can
                  assist you better.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Personal Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold border-b pb-2">
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
                    <h3 className="text-lg font-semibold border-b pb-2">
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
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
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
                    <h3 className="text-lg font-semibold border-b pb-2">
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
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
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
                        rows={5}
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
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
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
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                          <option value="standard">Standard (1-2 weeks)</option>
                          <option value="urgent">Urgent (3-5 days)</option>
                          <option value="emergency">
                            Emergency (24 hours)
                          </option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4">
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full text-lg py-6 font-semibold"
                    >
                      Submit Estimate Request
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card className="shadow-lg border-slate-200">
              <CardHeader>
                <CardTitle className="text-xl">Why Choose Tolliver?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="text-primary h-5 w-5 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-sm">
                      35+ Years Experience
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Serving Kentucky & Indiana since 1987
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="text-primary h-5 w-5 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-sm">
                      Licensed & Insured
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Fully licensed electrical contractors
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="text-primary h-5 w-5 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-sm">
                      24/7 Emergency Service
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Available when you need us most
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="text-primary h-5 w-5 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-sm">Free Estimates</h4>
                    <p className="text-sm text-muted-foreground">
                      No obligation, detailed estimates
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-slate-200">
              <CardHeader>
                <CardTitle className="text-xl">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="text-primary h-5 w-5" />
                  <div>
                    <p className="font-semibold text-sm">(502) 518-7804</p>
                    <p className="text-xs text-muted-foreground">
                      24/7 Emergency Service
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="text-primary h-5 w-5" />
                  <div>
                    <p className="font-semibold text-sm">
                      info@tolliverelectric.com
                    </p>
                    <p className="text-xs text-muted-foreground">
                      General Inquiries
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="text-primary h-5 w-5" />
                  <div>
                    <p className="font-semibold text-sm">Mon-Fri: 7AM-6PM</p>
                    <p className="text-xs text-muted-foreground">
                      Emergency: 24/7
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
