"use client"

import React, { useState } from 'react';
import { Menu, X, Phone, Mail, MapPin, ChevronRight, Zap, Clock, DollarSign, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Navigation from '@/components/sections/navigation';
import Footer from '@/components/sections/Footer';

const CaseStudiesPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const stats = [
    { value: "9,100 MW", label: "Generation Capacity Delivered" },
    { value: "25+", label: "Years Leading Power Projects" },
    { value: "8+", label: "Countries Operated In" },
    { value: "1,600 MW", label: "Largest Single Project" },
  ];

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Contact', href: '/contact' }
  ];

  const featuredCase = {
    title: '45MW Combined Heat & Power Retrofit',
    location: 'Industrial Facility, Southeast Texas',
    year: '2023',
    type: 'CHP System Integration',
    challenge: 'A major petrochemical facility needed to integrate a new 45MW CHP system while maintaining 24/7 operations. The project required coordination with multiple OEMs, strict environmental compliance, and integration with existing steam and power infrastructure—all within a 12-month timeline.',
    solution: 'MAP Projects provided end-to-end project management, coordinating between the turbine OEM, HRSG supplier, and BOP contractors. We developed a phased commissioning plan that allowed plant operations to continue uninterrupted. Our team managed air permit modifications, supervised hot tie-ins, and orchestrated a complex startup sequence.',
    results: [
      { metric: 'Schedule', value: '2 weeks ahead', icon: <Clock className="w-5 h-5" /> },
      { metric: 'Budget', value: 'Under by 3%', icon: <DollarSign className="w-5 h-5" /> },
      { metric: 'Efficiency', value: '87% CHP efficiency', icon: <TrendingUp className="w-5 h-5" /> },
      { metric: 'Downtime', value: 'Zero unplanned', icon: <Zap className="w-5 h-5" /> }
    ],
    testimonial: "MAP's team integrated seamlessly with our operations staff. They anticipated issues before they became problems and kept us running throughout the entire project.",
    clientTitle: "Plant Manager, Fortune 500 Chemical Company"
  };

  const additionalCases = [
    {
      title: '25MW Peaking Plant Development',
      location: 'ERCOT Market, Central Texas',
      year: '2022',
      capacity: '25MW',
      type: 'Reciprocating Engines',
      description: 'Fast-track development of distributed generation asset from greenfield to COD in 8 months.',
      outcome: 'Captured summer peak pricing with 99.2% availability'
    },
    {
      title: '120MW Simple Cycle Expansion',
      location: 'Industrial Park, Oklahoma',
      year: '2022',
      capacity: '120MW',
      type: 'Gas Turbine',
      description: 'Added quick-start capability to existing facility for grid stability services.',
      outcome: '10-minute start capability achieved, new revenue stream activated'
    },
    {
      title: '15MW Behind-the-Meter CHP',
      location: 'Food Processing, Iowa',
      year: '2021',
      capacity: '15MW',
      type: 'Gas Turbine CHP',
      description: 'Integrated CHP system to reduce energy costs and improve reliability.',
      outcome: '40% reduction in energy costs, achieved carbon reduction goals'
    },
    {
      title: '60MW Emergency Power Recovery',
      location: 'Gulf Coast Refinery',
      year: '2021',
      capacity: '60MW',
      type: 'Project Recovery',
      description: 'Rescued stalled project, resolved vendor disputes, achieved mechanical completion.',
      outcome: 'Project delivered within 6 months of MAP engagement'
    },
    {
      title: '35MW Grid Support Facility',
      location: 'MISO Market, Michigan',
      year: '2020',
      capacity: '35MW',
      type: 'Aero-derivative GT',
      description: 'Developed flexible generation asset for capacity and ancillary services.',
      outcome: 'Secured 10-year capacity contract, ROI exceeded by 15%'
    },
    {
      title: '18MW Data Center Backup',
      location: 'Tech Campus, Texas',
      year: '2020',
      capacity: '18MW',
      type: 'Diesel Generators',
      description: 'Mission-critical backup power with N+2 redundancy and automated testing.',
      outcome: '100% reliability through multiple grid events'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      {/* Page Header */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Case Studies
          </h1>
          <p className="mt-4 text-xl text-gray-700">
            Real Projects. Real Results. No Fluff.
          </p>
        </div>
      </section>

      {/* Featured Case Study */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
            <div className="bg-green-700 text-white p-6">
              <h2 className="text-2xl font-bold">Featured Project</h2>
            </div>
            <div className="p-8">
              <div className="mb-6">
                <h3 className="text-3xl font-bold text-gray-900 mb-2">
                  {featuredCase.title}
                </h3>
                <div className="flex flex-wrap gap-4 text-gray-600">
                  <span>{featuredCase.location}</span>
                  <span>•</span>
                  <span>{featuredCase.year}</span>
                  <span>•</span>
                  <span>{featuredCase.type}</span>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Challenge
                  </h4>
                  <p className="text-gray-700">{featuredCase.challenge}</p>
                </div>
                <div className="md:col-span-2">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Solution
                  </h4>
                  <p className="text-gray-700">{featuredCase.solution}</p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 mb-8">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  Results
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {featuredCase.results.map((result, index) => (
                    <div key={index} className="text-center">
                      <div className="flex justify-center text-green-700 mb-2">
                        {result.icon}
                      </div>
                      <div className="font-bold text-gray-900">
                        {result.value}
                      </div>
                      <div className="text-sm text-gray-600">
                        {result.metric}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-l-4 border-green-700 pl-6">
                <p className="text-gray-700 italic mb-2">
                  "{featuredCase.testimonial}"
                </p>
                <p className="text-sm text-gray-600">
                  — {featuredCase.clientTitle}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Case Studies */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            More Success Stories
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalCases.map((project, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {project.title}
                    </h3>
                    <span className="text-green-700 font-bold">
                      {project.capacity}
                    </span>
                  </div>
                  <div className="text-sm text-gray-600 mb-3">
                    <p>
                      {project.location} • {project.year}
                    </p>
                    <p className="font-medium mt-1">{project.type}</p>
                  </div>
                  <p className="text-gray-700 mb-4">{project.description}</p>
                  <div className="border-t pt-3">
                    <p className="text-sm font-semibold text-green-700">
                      Outcome:
                    </p>
                    <p className="text-sm text-gray-700">{project.outcome}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Your Project Could Be Next
          </h2>
          <p className="text-xl text-white mb-8">
            Let's discuss how MAP's proven approach can deliver results for your
            power project.
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="bg-white text-green-700 hover:bg-gray-100 px-8 py-3 text-lg"
          >
            Start the Conversation
          </Button>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default CaseStudiesPage;