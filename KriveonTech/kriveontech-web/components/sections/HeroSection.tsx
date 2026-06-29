"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { PhoneCall } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 lg:pt-48 lg:pb-32 perspective-[1000px]">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:48px_48px] [transform:rotateX(60deg)_translateY(-100px)_scale(2)] transform-origin-top opacity-30"></div>

      {/* Floating 3D Orbs */}
      <motion.div
        animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-primary/20 rounded-full blur-[100px] -z-10"
      />
      <motion.div
        animate={{ y: [0, 30, 0], x: [0, -15, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[120px] -z-10"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <motion.div
          initial={{ opacity: 0, rotateX: 20, y: 50 }}
          animate={{ opacity: 1, rotateX: 0, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter text-foreground mb-6 drop-shadow-2xl">
            Transforming Research into <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary bg-300% animate-gradient">
              Real-World Engineering Solutions
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed drop-shadow-lg">
            Freelance engineers group helps in production-quality implementations for academics, researchers, and innovators.
            We build the architecture so you can focus on the breakthrough.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" asChild className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white h-14 px-8 text-lg shadow-[0_0_30px_rgba(0,122,255,0.5)] transition-all hover:scale-105">
              <a href="tel:+917670865257">
                <PhoneCall className="w-5 h-5 mr-2" />
                Call Now
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild className="w-full sm:w-auto border-primary/50 text-foreground hover:bg-primary/10 h-14 px-8 text-lg backdrop-blur-md transition-all hover:scale-105">
              <Link href="https://wa.me/917670865257?text=Hi%20KriveonTech,%20I%20am%20interested%20in%20your%20services." target="_blank" rel="noopener noreferrer">
                Chat on WhatsApp
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
