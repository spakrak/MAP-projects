"use client"

import React, { useState } from 'react';
import { Menu, X, Phone, Mail, MapPin, ChevronRight, Zap, Settings, Users, CheckCircle, FileSearch, Wrench, Calendar, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Link from "next/link";
import Navigation from '@/components/sections/navigation';
import Footer from '@/components/sections/Footer';

const ServicesPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Contact', href: '/contact' }
  ];

  const services = [
    {
      id: "project-development",
      icon: <Zap className="w-12 h-12" />,
      title: "Project Development",
      tagline:
        "MAP works upstream to prevent scope creep and schedule slippage down the line.",
      offerings: [
        {
          name: "Feasibility Studies",
          description:
            "Technical and economic analysis to validate project viability before major capital commitment.",
        },
        {
          name: "Application Engineering",
          description:
            "Equipment selection, heat balance optimization, and plant configuration for maximum efficiency.",
        },
        {
          name: "Conceptual Design",
          description:
            "Preliminary layouts, single-lines, and P&IDs that establish project scope and budget.",
        },
        {
          name: "Commercial + Technical Strategy",
          description:
            "Align technical solutions with market opportunities and offtake requirements.",
        },
      ],
      outcomes: [
        "Validated project economics",
        "Optimized equipment selection",
        "Clear scope definition",
        "Risk identification & mitigation",
      ],
      projectTypes:
        "Greenfield developments, repowering projects, behind-the-meter installations",
    },
    {
      id: "project-execution",
      icon: <Settings className="w-12 h-12" />,
      title: "Project Execution",
      tagline: "End-to-end support from NTP to COD.",
      offerings: [
        {
          name: "Turnkey Execution Support",
          description:
            "Complete project management from notice to proceed through commercial operation.",
        },
        {
          name: "Permitting & Regulatory Navigation",
          description:
            "Air permits, building permits, interconnection agreements—we know the process and the people.",
        },
        {
          name: "Procurement Oversight",
          description:
            "RFP development, bid evaluation, contract negotiation, and expediting for all major equipment.",
        },
        {
          name: "Commissioning & Closeout",
          description:
            "Systematic startup, performance testing, and documentation for smooth transition to operations.",
        },
      ],
      outcomes: [
        "On-time project delivery",
        "Budget adherence",
        "Quality documentation",
        "Smooth operational handoff",
      ],
      projectTypes:
        "Distributed Power, utility scale, simple amd combined cycle gas turbine and reciprocating engine plants and Balance of Plants systems",
    },
    {
      id: "vendor-coordination",
      icon: <Users className="w-12 h-12" />,
      title: "Vendor Coordination",
      tagline:
        "Avoid finger-pointing. We unify suppliers behind a common objective.",
      offerings: [
        {
          name: "OEM & Subcontractor Alignment",
          description:
            "Single point of accountability for multiple vendors, ensuring seamless interfaces.",
        },
        {
          name: "Procurement Risk Mitigation",
          description:
            "Identify and address supply chain vulnerabilities before they impact schedule.",
        },
        {
          name: "Schedule & Budget Control",
          description:
            "Active management of vendor deliverables, milestones, and payment applications.",
        },
        {
          name: "Quality Assurance",
          description:
            "Factory witness testing, receipt inspection, and field quality control.",
        },
      ],
      outcomes: [
        "Reduced vendor conflicts",
        "Protected project schedule",
        "Minimized change orders",
        "Quality equipment delivery",
      ],
      projectTypes:
        "Multi-vendor projects, international procurement, fast-track schedules",
    },
    {
      id: "expert-staffing",
      icon: <ShieldCheck className="w-12 h-12" />,
      title: "Expert Staffing",
      tagline:
        "Our specialists integrate fast — no learning curve, no babysitting.",
      offerings: [
        {
          name: "Owner's Engineers",
          description:
            "Senior technical representation to protect your interests throughout project execution.",
        },
        {
          name: "Site Managers",
          description:
            "Experienced field leadership for construction oversight and contractor coordination.",
        },
        {
          name: "Temporary Project Teams",
          description:
            "Scale up with proven professionals for specific project phases or technical challenges.",
        },
        {
          name: "Specialized Expertise",
          description:
            "Commissioning engineers, startup specialists, compliance experts—the right skills when needed.",
        },
      ],
      outcomes: [
        "Immediate productivity",
        "Reduced training burden",
        "Technical depth on demand",
        "Flexible resource scaling",
      ],
      projectTypes:
        "Staff augmentation, troubled project recovery, peak workload support",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      {/* Page Header */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Our Services
          </h1>
          <p className="mt-4 text-xl text-gray-700">
            Comprehensive Solutions for Thermal Power Projects
          </p>
        </div>
      </section>

      {/* Services Sections */}
      {services.map((service, index) => (
        <section
          key={service.id}
          id={service.id}
          className={`py-16 ${index % 2 === 1 ? "bg-gray-50" : "bg-white"}`}
          style={{ scrollMarginTop: "60px" }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-start gap-4 mb-8">
              <div className="text-green-700">{service.icon}</div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  {service.title}
                </h2>
                <p className="text-lg text-gray-700 italic">
                  {service.tagline}
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  What We Deliver
                </h3>
                <div className="space-y-4">
                  {service.offerings.map((offering, idx) => (
                    <div key={idx} className="border-l-4 border-green-700 pl-4">
                      <h4 className="font-semibold text-gray-900">
                        {offering.name}
                      </h4>
                      <p className="text-gray-700 mt-1">
                        {offering.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Key Outcomes
                </h3>
                <ul className="space-y-2 mb-6">
                  {service.outcomes.map((outcome, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-700 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{outcome}</span>
                    </li>
                  ))}
                </ul>

                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Example Project Types
                  </h4>
                  <p className="text-gray-700">{service.projectTypes}</p>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <Link href="/contact">
                <Button className="bg-green-700 hover:bg-green-800 text-white">
                  Let's Talk About Your {service.title} Needs
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="py-20 bg-green-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            No Cookie-Cutter Solutions
          </h2>
          <p className="text-xl text-white mb-8">
            Every project is unique. Let's discuss your specific challenges and
            how MAP can help.
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-green-700 hover:bg-gray-100 px-8 py-3 text-lg"
            >
              Schedule Your Consultation
            </Button>
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ServicesPage;