"use client"

import React, { useState } from 'react';
import {
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  ChevronRight,
  Clock,
  AlertCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Alert, AlertDescription } from '@/components/ui/alert';
import Navigation from '@/components/sections/navigation';
import Footer from '@/components/sections/Footer';
import RegionalMarkets from '@/components/sections/RegionalMarkets';

const ContactPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Contact', href: '/contact' }
  ];

  const projectTypes = [
    'Simple Cycle Gas Turbine',
    'Combined Cycle',
    'Cogeneration/CHP',
    'Reciprocating Engines',
    'Peaking Plant',
    'Behind-the-Meter Generation',
    'Project Recovery/Troubleshooting',
    'Other'
  ];

  const projectStages = [
    'Concept/Feasibility',
    'Development/Pre-Permit',
    'Execution/Construction',
    'Commissioning',
    'Recovery/Troubleshooting'
  ];

  const sources = [
    'Web Search',
    'Industry Referral',
    'Previous Project',
    'Other'
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      {/* Header */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Contact MAP Projects
          </h1>
          <p className="mt-4 text-xl text-gray-700">
            Let's discuss how we can power your project forward.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <Card className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Start the Conversation
                </h2>

                <form
                  action="https://formspree.io/f/mdkzzrwn"
                  method="POST"
                  className="space-y-6"
                >
                  {/* Name & Email */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Name *
                      </label>
                      <Input id="name" name="name" required />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                      />
                    </div>
                  </div>

                  {/* Phone & Company */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Phone
                      </label>
                      <Input id="phone" name="phone" type="tel" />
                    </div>
                    <div>
                      <label
                        htmlFor="company"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Company *
                      </label>
                      <Input id="company" name="company" required />
                    </div>
                  </div>

                  {/* Project Type & Stage */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="projectType"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Project Type *
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      >
                        <option value="">Select project type</option>
                        {projectTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label
                        htmlFor="projectStage"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Project Stage *
                      </label>
                      <select
                        id="projectStage"
                        name="projectStage"
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      >
                        <option value="">Select project stage</option>
                        {projectStages.map((stage) => (
                          <option key={stage} value={stage}>
                            {stage}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Project Details
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="Tell us about your project needs, timeline, and any specific challenges..."
                    />
                  </div>

                  {/* Referral Source */}
                  <div>
                    <label
                      htmlFor="source"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      How did you hear about MAP Projects?
                    </label>
                    <select
                      id="source"
                      name="source"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    >
                      <option value="">Select an option</option>
                      {sources.map((source) => (
                        <option key={source} value={source}>
                          {source}
                        </option>
                      ))}
                    </select>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-green-700 hover:bg-green-900 text-white"
                  >
                    Submit Project Inquiry
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </Card>
            </div>

            {/* Direct Contact + Next Steps */}
            <div className="space-y-6">
              <Card className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Direct Contact
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Phone className="w-5 h-5 text-green-600 mr-3 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-900">Phone</p>
                      <a
                        href="tel:832-260-3095"
                        className="text-gray-700 hover:text-green-600"
                      >
                        832-260-3095
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Mail className="w-5 h-5 text-green-600 mr-3 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-900">Email</p>
                      <a
                        href="mailto:mapprojectsllc@gmail.com"
                        className="text-gray-700 hover:text-green-600"
                      >
                        mapprojectsllc@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 text-green-600 mr-3 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-900">Office</p>
                      <p className="text-gray-700">
                        4026 Valley Green Ct
                        <br />
                        Houston, TX 77059
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  What Happens Next?
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-green-600 font-semibold text-sm">
                        1
                      </span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Quick Response</p>
                      <p className="text-sm text-gray-700">
                        We'll respond within one business day
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-green-600 font-semibold text-sm">
                        2
                      </span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">
                        30-Minute Scoping Call
                      </p>
                      <p className="text-sm text-gray-700">
                        Understand your needs and project goals
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-green-600 font-semibold text-sm">
                        3
                      </span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">
                        Clear Next Steps
                      </p>
                      <p className="text-sm text-gray-700">
                        Proposal or engagement letter within 48 hours
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              <Alert className="bg-blue-50 border-blue-200">
                <AlertCircle className="h-4 w-4 text-blue-600" />
                <AlertDescription className="text-blue-800">
                  <strong>Urgent project?</strong> Call us directly at
                  832-260-3095 for immediate assistance.
                </AlertDescription>
              </Alert>
            </div>
          </div>
        </div>
      </section>

      <RegionalMarkets />
      <Footer />
    </div>
  ); 
};

export default ContactPage;
