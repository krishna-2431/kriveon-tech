import { Metadata } from "next";
import { Code2, Cpu, GraduationCap, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Services | KriveonTech",
  description: "Comprehensive software engineering, embedded IoT, and academic project solutions.",
};

const services = [
  {
    id: "software",
    title: "Software Development",
    icon: <Code2 className="w-10 h-10 text-primary" />,
    description: "Production-grade web apps, mobile apps, and scalable AI/ML pipelines.",
    features: [
      "Custom Web Applications (React, Next.js, Node.js)",
      "Mobile App Development (React Native, Flutter)",
      "AI & Machine Learning Integrations",
      "Cloud Architecture & DevOps",
    ]
  },
  {
    id: "embedded",
    title: "Embedded & IoT",
    icon: <Cpu className="w-10 h-10 text-accent" />,
    description: "Hardware integration, ESP32/Raspberry Pi prototyping, and custom PCB firmware.",
    features: [
      "IoT Prototype Development",
      "Microcontroller Programming (Arduino, ESP32)",
      "Sensor Integration & Data Pipelines",
      "Custom Firmware Development",
    ]
  },
  {
    id: "academic",
    title: "Academic Engineering",
    icon: <GraduationCap className="w-10 h-10 text-primary" />,
    description: "Complex IEEE paper implementations with rigorous documentation and Knowledge Transfer.",
    features: [
      "IEEE Paper Implementation (B.Tech / M.Tech / PhD)",
      "Detailed Knowledge Transfer (KT) Sessions",
      "Source Code & DB Schema Provision",
      "Execution Support until Viva",
    ]
  }
];

export default function ServicesPage() {
  return (
    <div className="py-24 bg-background min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-foreground mb-6">
            Our Services
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            We provide deep technical expertise across the entire software and hardware stack. 
            Choose a domain to see how we can architect your next breakthrough.
          </p>
        </div>

        <div className="space-y-16">
          {services.map((svc) => (
            <div key={svc.id} className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12">
              <div className="md:col-span-5 flex flex-col justify-center">
                <div className="mb-6 p-4 rounded-xl bg-background inline-block w-fit border border-white/10">
                  {svc.icon}
                </div>
                <h2 className="text-3xl font-bold text-foreground mb-4">{svc.title}</h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  {svc.description}
                </p>
                <Button asChild className="w-fit bg-primary text-white hover:bg-primary/90">
                  <a href="tel:+917670865257">
                    Discuss this service <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </div>
              <div className="md:col-span-1 hidden md:block"></div>
              <div className="md:col-span-6 bg-background rounded-xl p-6 border border-white/10">
                <h3 className="text-xl font-semibold mb-6">What's Included:</h3>
                <ul className="space-y-4">
                  {svc.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-4 flex-shrink-0"></div>
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
