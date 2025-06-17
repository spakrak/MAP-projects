import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">MAP Projects</h3>
            <p className="text-gray-400">
              Powering Projects Forward with discipline and agility.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-gray-400 hover:text-white transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-2">
              <div className="flex items-center text-gray-400">
                <Phone className="w-5 h-5 mr-2" />
                <a href="tel:832-260-3095" className="hover:text-white transition-colors">
                  832-260-3095
                </a>
              </div>
              <div className="flex items-center text-gray-400">
                <Mail className="w-5 h-5 mr-2" />
                <a href="mailto:mapprojectsllc@gmail.com" className="hover:text-white transition-colors">
                  mapprojectsllc@gmail.com
                </a>
              </div>
              <div className="flex items-start text-gray-400">
                <MapPin className="w-5 h-5 mr-2 mt-0.5" />
                <span>4026 Valley Green Ct<br />Houston, TX 77059</span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; 2024 MAP Projects LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;