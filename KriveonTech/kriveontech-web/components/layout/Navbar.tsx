"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Process", href: "/process" },
    { name: "FAQ", href: "/faq" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex flex-col items-start justify-center">
            <Link href="/" className="text-2xl font-bold tracking-tighter text-foreground leading-none">
              Kriveon<span className="text-primary">Tech</span>
            </Link>
            {/* <span className="text-[11px] sm:text-xs font-medium text-muted-foreground mt-0.5 tracking-wide ml-0.5 mt-2">
              Software Engineering Studio
            </span> */}
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" asChild className="border-primary text-primary hover:bg-primary/10">
              <Link href="https://wa.me/917670865257?text=Hi%20KriveonTech,%20I%20am%20interested%20in%20your%20services." target="_blank" rel="noopener noreferrer">
                WhatsApp
              </Link>
            </Button>
            <Button asChild className="bg-primary text-white hover:bg-primary/90 shadow-[0_0_15px_rgba(0,122,255,0.5)]">
              <a href="tel:+917670865257">
                <PhoneCall className="w-4 h-4 mr-2" />
                Call Now
              </a>
            </Button>
          </div>

          <div className="flex md:hidden items-center">
            <button
              onClick={toggleMenu}
              type="button"
              className="text-foreground hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary rounded-md p-2"
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-background border-b border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-muted-foreground hover:text-foreground hover:bg-white/5"
              >
                {link.name}
              </Link>
            ))}
            <div className="mt-4 flex flex-col space-y-2 px-3">
              <Button variant="outline" asChild className="w-full justify-center border-primary text-primary">
                <Link href="https://wa.me/917670865257?text=Hi%20KriveonTech,%20I%20am%20interested%20in%20your%20services." target="_blank" rel="noopener noreferrer">
                  WhatsApp
                </Link>
              </Button>
              <Button asChild className="w-full justify-center bg-primary text-white">
                <a href="tel:+917670865257">
                  <PhoneCall className="w-4 h-4 mr-2" />
                  Call Now
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
