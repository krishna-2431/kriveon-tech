"use client";

import { motion } from "framer-motion";
import { Search, PenTool, Code2, Rocket } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

import { TiltCard } from "@/components/shared/TiltCard";

const steps = [
  {
    id: "01",
    title: "Requirement Analysis",
    description: "Deep dive into your specifications and goals.",
    icon: <Search className="w-6 h-6 text-foreground" />,
  },
  {
    id: "02",
    title: "Architecture Design",
    description: "Blueprinting the system for scalability.",
    icon: <PenTool className="w-6 h-6 text-foreground" />,
  },
  {
    id: "03",
    title: "Agile Development",
    description: "Iterative coding with continuous testing.",
    icon: <Code2 className="w-6 h-6 text-foreground" />,
  },
  {
    id: "04",
    title: "Delivery & Transfer",
    description: "Handover with complete documentation.",
    icon: <Rocket className="w-6 h-6 text-foreground" />,
  },
];

export function ProcessTeaser() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
            The 8-Step Engineering Process
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            We follow a rigorous SDLC to ensure absolute precision, from initial wireframing to the final Knowledge Transfer session.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Horizontal Line connecting nodes */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-white/10 -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="w-full"
              >
                <TiltCard className="flex flex-col items-center bg-white/5 border border-white/10 rounded-2xl p-6 shadow-2xl backdrop-blur-md">
                  <div style={{ transform: "translateZ(30px)", transformStyle: "preserve-3d" }} className="w-16 h-16 rounded-2xl bg-black border border-white/20 shadow-[0_10px_20px_rgba(0,0,0,0.5)] flex items-center justify-center mb-6 relative z-10">
                    {step.icon}
                  </div>
                  <div className="text-center" style={{ transform: "translateZ(20px)" }}>
                    <span className="text-xs font-mono text-primary uppercase tracking-widest mb-2 block drop-shadow-md">
                      Step {step.id}
                    </span>
                    <h3 className="text-lg font-semibold text-foreground mb-2 drop-shadow-lg">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <Link href="/process" className="text-muted-foreground hover:text-foreground font-medium text-sm inline-flex items-center transition-colors">
            View Full 8-Step Process &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
