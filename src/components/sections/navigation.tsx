"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link
              href="/"
              className="flex items-center text-2xl font-bold leading-none"
            >
              <span className="text-green-700">MAP</span>
              <span className="text-gray-900 ml-1">Projects</span>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`font-medium transition-all duration-200 relative py-2 ${
                    isActive
                      ? "text-green-700"
                      : "text-gray-700 hover:text-green-700"
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-green-700 rounded-full"></div>
                  )}
                </Link>
              );
            })}
            <Link href="/contact">
              <Button className="bg-green-700 hover:bg-green-900 text-white">
                Let's Talk
              </Button>
            </Link>
          </div>
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block px-3 py-2 font-medium rounded-md transition-colors ${
                    isActive
                      ? "text-green-700 bg-green-50"
                      : "text-gray-700 hover:text-green-700 hover:bg-gray-50"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              );
            })}
            <div className="px-3 py-2">
              <Link href="/contact">
                <Button className="w-full bg-green-700 hover:bg-green-900 text-white">
                  Let's Talk
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
