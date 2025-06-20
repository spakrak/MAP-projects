"use client"

import React from 'react';
import { ChevronRight, Zap, Settings, Users, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Link from 'next/link';
import Navigation from '@/components/sections/navigation';
import Footer from '@/components/sections/Footer';

const MAPProjectsHomepage = () => {
  const stats = [
    { value: '9,100 MW', label: 'Generation Capacity Delivered' },
    { value: '25+', label: 'Years Leading Power Projects' },
    { value: '8+', label: 'Countries Operated In' },
    { value: '1,600 MW', label: 'Largest Single Project' }
  ];

  const services = [
    {
      icon: <Zap className="w-10 h-10 text-green-700" />,
      title: "Project Development",
      description:
        "From initial feasibility studies & conceptual engineering to bid packages and project scoping, we ensure your project plans are aligned with your Financial Investment Decision (FID) technical requirements and commercial goals—minimizing risk and accelerating your path to FID and beyond. ",
      anchor: "project-development",
    },
    {
      icon: <Settings className="w-10 h-10 text-green-700" />,
      title: "Project Execution",
      description:
        "Our turnkey execution consulting and management services cover planning, permitting, procurement, construction management, commissioning, and startup services. We develop detailed, usable project schedules—capturing critical milestones, progress reporting, and schedule float calculations to flag issues early. Trusted for complex industrial and data center projects requiring tight coordination and schedule certainty.",
      anchor: "project-execution",
    },
    {
      icon: <Users className="w-10 h-10 text-green-700" />,
      title: "Vendor Coordination",
      description:
        "We build closely aligned contracting strategies to minimize contract gaps and future risks—ensuring clear scopes and accountability across OEMs, EPCs, and vendors. Our proactive coordination helps prevent miscommunication and delays in complex industrial and data center applications.",
      anchor: "vendor-coordination",
    },
    {
      icon: <CheckCircle className="w-10 h-10 text-green-700" />,
      title: "Expert Staffing",
      description:
        "We deploy seasoned Project Managers, Engineers, Project & Schedule Controllers, and Commissioning Managers who integrate seamlessly with your team—providing leadership, accountability, and on-time deliverables for complex, fast-track power projects across industrial and data center environments.",
      anchor: "expert-staffing",
    },
  ];

  const advantages = [
    'EPC-grade processes, without EPC bloat',
    'Lean, agile, senior-led execution teams',
    'Deep thermal power domain expertise',
    'Regional permitting knowledge'
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-gray-50 to-white py-16 lg:py-24">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Powering Projects Forward
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Project Development & Execution for Thermal Power, Data Center,
              and Industrial Applications
            </p>
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-green-700 hover:bg-green-900 text-white px-8 py-3 text-lg mb-12"
              >
                Speak with a Project Lead
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>

            <div className="max-w-3xl mx-auto px-4 text-center">
              <blockquote className="italic text-gray-700 text-lg">
                "We built MAP to simplify energy projects—bridging ideas to
                execution with small, agile teams."
              </blockquote>
              <footer className="mt-4 font-semibold text-gray-900">
                — Sandra Poole, Founder
              </footer>
            </div>
          </div>
        </div>
      </section>

      {/* Credibility */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-green-700 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base text-gray-700">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Project */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
            Featured Project: 130MW Data Center Power Plant
          </h2>
          <Card className="p-8 hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">
              On-Site Generation. Zero Downtime.
            </h3>
            <p className="text-gray-700 mb-4">
              MAP Projects led the development and execution of a 130MW
              behind-the-meter gas turbine power solution for a data center
              campus in Virginia. The system was deployed on a highly compressed
              timeline, solving for delayed utility interconnect and tight real
              estate constraints.
            </p>
            <p className="text-gray-700 mb-6">
              Our team delivered a fully integrated plant — gas turbines,
              balance of plant, and medium-voltage interconnection — providing
              99.99% reliable power directly into the facility’s distribution
              system.
            </p>
          </Card>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Core Services
          </h2>
          <div className="space-y-8">
            {services.map((service, idx) => (
              <Card
                key={idx}
                className="p-8 border-l-4 border-green-700 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center mb-4">
                  {service.icon}
                  <h3 className="ml-4 text-2xl font-semibold text-gray-900">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed mb-6">
                  {service.description}
                </p>
                <Link href={`/services#${service.anchor}`}>
                  <Button
                    variant="outline"
                    className="border-green-700 text-green-700 hover:bg-green-50"
                  >
                    Learn More
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose MAP */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
              Why Clients Choose MAP
            </h2>
            <div className="space-y-4">
              {advantages.map((adv, i) => (
                <div key={i} className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-700 mr-3 mt-0.5" />
                  <p className="text-lg text-gray-700">{adv}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Serious about your next power project? So are we.
          </h2>
          <Link href="/contact">
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-green-700 hover:bg-gray-100 px-8 py-3 text-lg"
            >
              Schedule a Consultation
            </Button>
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default MAPProjectsHomepage;