"use client";

import { motion } from "framer-motion";
import { CheckCircle2, GitBranch, FileCode2, Presentation } from "lucide-react";

const deliverables = [
  {
    title: "Complete Source Code",
    description: "Production-ready, well-documented source code without obfuscation.",
    icon: <FileCode2 className="w-6 h-6 text-primary" />,
  },
  {
    title: "GitHub Repository",
    description: "Full version control history, CI/CD pipelines, and branch management.",
    icon: <GitBranch className="w-6 h-6 text-primary" />,
  },
  {
    title: "Architecture & API Docs",
    description: "Detailed system architecture diagrams, DB schemas, and Swagger API docs.",
    icon: <CheckCircle2 className="w-6 h-6 text-primary" />,
  },
  {
    title: "Knowledge Transfer (KT)",
    description: "Dedicated 1-on-1 sessions to explain the codebase, deployment, and testing.",
    icon: <Presentation className="w-6 h-6 text-primary" />,
  },
];

export function DeliverablesSection() {
  return (
    <section className="py-24 border-t border-white/10 relative overflow-hidden bg-background">
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-6">
              The KriveonTech Standard
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              We don't just deliver a compiled binary or an encrypted ZIP file. We operate with complete transparency, providing you with everything necessary to understand, scale, and defend your project.
            </p>
            <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 shadow-lg relative overflow-hidden mt-8">
              <div className="absolute top-0 left-0 w-1 h-full bg-primary"></div>
              <p className="text-lg md:text-2xl font-mono text-primary mb-3 font-extrabold tracking-tight"># IMPORTANT NOTE</p>
              <p className="text-foreground text-lg md:text-xl font-medium leading-relaxed">
                "Project Reports and Documentation are NOT included unless explicitly stated. We are engineers, not technical writers."
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {deliverables.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="p-6 rounded-xl bg-card border border-white/10 shadow-sm"
              >
                <div className="mb-4">{item.icon}</div>
                <h4 className="text-lg font-semibold text-foreground mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
