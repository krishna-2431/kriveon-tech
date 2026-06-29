"use client";

import { useRef } from "react";
import { Code2, Cpu, GraduationCap, Network } from "lucide-react";
import Link from "next/link";
// import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { Scene } from "./Scene";
import { motion, type Variants } from "framer-motion";

/* ────────────────────────────────────────────
   Data
   ──────────────────────────────────────────── */
const services = [
  {
    title: "Software Engineering",
    description:
      "Production-grade web apps, mobile apps, and scalable AI/ML pipelines.",
    icon: Code2,
    direction: "left" as const,
    colSpan: "md:col-span-2",
    ariaLabel: "Software Engineering capabilities",
  },
  {
    title: "Embedded & IoT",
    description:
      "Hardware integration, ESP32/Raspberry Pi prototyping, and custom PCB firmware.",
    icon: Cpu,
    direction: "right" as const,
    colSpan: "md:col-span-1",
    ariaLabel: "Embedded and IoT capabilities",
  },
  {
    title: "Academic Solutions",
    description:
      "Complex IEEE paper implementations with rigorous documentation and Knowledge Transfer.",
    icon: GraduationCap,
    direction: "bottom" as const,
    colSpan: "md:col-span-3",
    ariaLabel: "Academic Solutions capabilities",
  },
];

/* ────────────────────────────────────────────
   Animation Variants
   ──────────────────────────────────────────── */
const headerVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }
  }
};

const cardVariants: Variants = {
  hidden: (direction: string) => ({
    opacity: 0,
    scale: 0.8,
    x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
    y: direction === "bottom" ? 100 : 20,
    rotateZ: direction === "left" ? -2 : direction === "right" ? 2 : 0,
  }),
  visible: (direction: string) => ({
    opacity: 1,
    scale: 1,
    x: 0,
    y: 0,
    rotateZ: 0,
    transition: {
      type: "spring",
      damping: 20,
      stiffness: 70,
      mass: 1,
      delay: direction === "left" ? 0.0 : direction === "right" ? 0.1 : 0.12,
    }
  })
};

/* ────────────────────────────────────────────
   Component
   ──────────────────────────────────────────── */
export function ServicesBento() {
  const containerRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={containerRef}
      id="engineering-capabilities"
      className="relative py-32 bg-background overflow-hidden min-h-[100vh] flex flex-col justify-center"
      aria-label="Engineering Capabilities"
    >
      {/* ── 3D Background Canvas ── */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Canvas dpr={[1, 1.5]} gl={{ antialias: false }}>
          <Scene />
        </Canvas>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* ── Header ── */}
        <motion.div
          className="text-center mb-24"
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-20%" }}
        >
          <div className="inline-flex items-center justify-center p-3 mb-6 rounded-2xl bg-white/5 border border-white/10 shadow-[0_0_30px_rgba(255,255,255,0.05)] backdrop-blur-md">
            <Network className="w-5 h-5 text-primary mr-3" aria-hidden="true" />
            <span className="font-mono text-sm tracking-widest uppercase text-primary font-semibold">
              Core Architecture
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
            Our Engineering Capabilities
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
            From pure software systems to integrated hardware-software architectures.
          </p>
        </motion.div>

        {/* ── Card Grid ── */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          role="list"
          aria-label="Engineering service categories"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                custom={service.direction}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-20%" }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  transition: { type: "spring", stiffness: 300, damping: 20 }
                }}
                className={`capability-card ${service.colSpan} rounded-3xl bg-white/[0.04] backdrop-blur-xl border border-white/10 relative overflow-hidden group cursor-pointer`}
                role="listitem"
                aria-label={service.ariaLabel}
                tabIndex={0}
              >
                {/* Hover gradient overlay */}
                <div
                  className="absolute inset-0 bg-gradient-to-br from-primary/[0.15] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  aria-hidden="true"
                />

                {/* Inner Glow on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
                </div>

                <div className="relative z-10 p-8 md:p-10 flex flex-col justify-between h-full">
                  <div>
                    {/* Icon */}
                    <div className="mb-8 inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white/10 border border-white/20 shadow-[0_0_20px_rgba(255,255,255,0.04)] group-hover:scale-110 group-hover:border-primary/50 group-hover:shadow-[0_0_30px_rgba(0,122,255,0.3)] transition-all duration-500">
                      <Icon
                        className="w-7 h-7 text-primary group-hover:text-white transition-colors duration-300"
                        aria-hidden="true"
                      />
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4 tracking-tight drop-shadow-sm">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed text-base md:text-lg group-hover:text-white/80 transition-colors duration-300">
                      {service.description}
                    </p>
                  </div>

                  {/* CTA */}
                  <div className="mt-10">
                    <Link
                      href="/services"
                      className="text-primary font-medium text-sm md:text-base inline-flex items-center group-hover:text-white transition-colors duration-300 group/link"
                      tabIndex={-1}
                    >
                      Explore Capabilities
                      <span
                        className="ml-2 inline-block group-hover/link:translate-x-1.5 transition-transform duration-300"
                        aria-hidden="true"
                      >
                        →
                      </span>
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

