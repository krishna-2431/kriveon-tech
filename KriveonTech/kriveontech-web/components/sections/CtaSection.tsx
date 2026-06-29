"use client";

import { Button } from "@/components/ui/button";
import { PhoneCall } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export function CtaSection() {
  return (
    <section className="py-24 bg-background relative overflow-hidden border-t border-white/10">
      
      {/* 3D Floating Deep Background Elements */}
      <motion.div 
        animate={{ y: [0, -30, 0], scale: [1, 1.1, 1] }} 
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] pointer-events-none -z-10"
      />
      <motion.div 
        animate={{ y: [0, 40, 0], scale: [1, 1.2, 1] }} 
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        className="absolute top-1/3 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[140px] pointer-events-none -z-10"
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-foreground mb-6 drop-shadow-2xl">
          Ready to build something <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">exceptional?</span>
        </h2>
        <p className="text-muted-foreground text-lg md:text-xl mb-10 max-w-2xl mx-auto drop-shadow-md">
          Skip the lengthy forms. Get connected directly with a senior engineer and let's architect your solution today.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" asChild className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white h-14 px-8 text-lg">
            <a href="tel:+917670865257">
              <PhoneCall className="w-5 h-5 mr-2" />
              Call Now
            </a>
          </Button>
          <Button size="lg" variant="outline" asChild className="w-full sm:w-auto border-primary text-primary hover:bg-primary/10 h-14 px-8 text-lg">
            <Link href="https://wa.me/917670865257?text=Hi%20KriveonTech,%20I%20am%20ready%20to%20build!" target="_blank" rel="noopener noreferrer">
              Chat on WhatsApp
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
