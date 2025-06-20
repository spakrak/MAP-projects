"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import { Menu, X, Phone, Mail, MapPin, ChevronRight, Award, Target, Users, Map } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Link from 'next/link';
import Navigation from '@/components/sections/navigation';
import Footer from '@/components/sections/Footer';
import RegionalMarkets from '@/components/sections/RegionalMarkets';

const AboutPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const stats = [
    { value: "9,100 MW", label: "Generation Capacity Delivered" },
    { value: "25+", label: "Years Leading Power Projects" },
    { value: "8+", label: "Countries Operated In" },
    { value: "1,600 MW", label: "Largest Single Project" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      {/* Page Header */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            About MAP Projects
          </h1>
          <p className="mt-4 text-xl text-gray-700">
            Industry Veterans Delivering Agile Power Project Execution
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Company Story
          </h2>
          <div className="prose prose-lg text-gray-700">
            <p className="mb-4">
              MAP Projects was founded by industry veterans who recognized a
              critical gap in the power generation market. After decades of
              working within large EPC firms, we saw how bureaucracy and
              overhead were slowing down project delivery and inflating costs.
              The market needed a more agile approach—one that maintained the
              discipline and expertise of major EPCs but operated with the
              efficiency of a focused consultancy.
            </p>
            <p>
              Today, MAP Projects delivers that promise. We bring senior-level
              expertise directly to your project, cutting through complexity to
              deliver thermal power assets on time and on budget. Our lean
              structure means you get experienced project leaders, not junior
              staff learning on your dime.
            </p>
          </div>
        </div>
      </section>

      {/* Our Advantage */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Our Advantage
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6">
              <Award className="w-12 h-12 text-green-700 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                EPC-Grade Structure
              </h3>
              <p className="text-gray-700">
                We implement proven processes and controls from major EPC firms,
                ensuring project discipline without the overhead and
                bureaucracy.
              </p>
            </Card>
            <Card className="p-6">
              <Target className="w-12 h-12 text-green-700 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Consultancy Agility
              </h3>
              <p className="text-gray-700">
                Operate like an embedded extension of your team. Fast decisions,
                direct communication, and no corporate red tape slowing
                progress.
              </p>
            </Card>
            <Card className="p-6">
              <Users className="w-12 h-12 text-green-700 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Trusted by Leaders
              </h3>
              <p className="text-gray-700">
                Utilities, developers, and EPCs rely on MAP Projects for
                critical path activities and complex technical challenges.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Leadership</h2>

          {/* Sandra Poole - Founder & Principal */}
          <Card className="p-8 mb-8">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="w-48 h-48 bg-gray-200 rounded-lg flex-shrink-0 overflow-hidden">
                <Image
                  src="/sandra_headshot.jpg"
                  alt="Sandra Poole, Founder & Principal"
                  width={192}
                  height={192}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Sandra Poole
                </h3>
                <p className="text-green-700 font-semibold mb-4">
                  Founder & Principal
                </p>
                <p className="text-gray-700 mb-4">
                  Sandra leads MAP Projects with a focus on clarity, speed, and
                  client success. As the first point of contact, she ensures
                  every engagement starts with alignment and momentum. Her
                  leadership keeps projects moving, connects clients with the
                  right experts, and ensures expectations are met at every
                  stage.
                </p>
                <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                  <p className="text-gray-700 italic">
                    "We don’t waste time. Clients come to us because they need
                    execution—and that’s exactly what we deliver."
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* Michael - Technical Director */}
          <Card className="p-8">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="w-48 h-48 bg-gray-200 rounded-lg flex-shrink-0 overflow-hidden">
                <Image
                  src="/michael_headshot.png"
                  alt="Michael Poole, Technical Director"
                  width={192}
                  height={192}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Michael Poole
                </h3>
                <p className="text-green-700 font-semibold mb-4">
                  Technical Director
                </p>
                <p className="text-gray-700 mb-4">
                  Michael brings decades of field expertise to MAP Projects,
                  specializing in gas turbine commissioning, vendor
                  coordination, and technical project execution. His deep
                  understanding of equipment specifications, permitting
                  requirements, and construction sequencing ensures smooth
                  project delivery from engineering through commercial
                  operation. Michael's proven ability to navigate complex
                  technical challenges and manage vendor relationships has been
                  critical to MAP's zero budget overrun track record.
                </p>
                <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                  <p className="text-gray-700 italic">
                    "Successful projects come down to technical precision and
                    proactive problem-solving. We stay ahead of issues so our
                    clients never have to worry about surprises."
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Credibility */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Impact Snapshot
          </h2>
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

      <RegionalMarkets />

      {/* CTA Section */}
      <section className="py-20 bg-green-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Experience the MAP Difference?
          </h2>
          <p className="text-xl text-white mb-8">
            Let's discuss how our approach can accelerate your next project.
          </p>
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

export default AboutPage;