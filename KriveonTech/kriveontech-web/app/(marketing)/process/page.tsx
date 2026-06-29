import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Development Process | KriveonTech",
  description: "The KriveonTech 8-Step Engineering Process.",
};

const steps = [
  {
    num: "01",
    title: "Requirement Analysis",
    description: "Deep dive into your project requirements, constraints, and IEEE base papers if applicable.",
  },
  {
    num: "02",
    title: "Planning & Architecture",
    description: "Creating the technical blueprint, selecting the stack, and defining the system architecture.",
  },
  {
    num: "03",
    title: "UI/UX & Prototyping",
    description: "Designing the user interface and mapping the user flow for frontend components.",
  },
  {
    num: "04",
    title: "Code Development",
    description: "Writing clean, production-grade code adhering to strict engineering standards.",
  },
  {
    num: "05",
    title: "Version Control (Git Push)",
    description: "Uploading the complete source code to a GitHub repository with full commit history.",
  },
  {
    num: "06",
    title: "Build & Testing",
    description: "Rigorous QA testing, debugging, and performance optimization.",
  },
  {
    num: "07",
    title: "Knowledge Transfer (KT)",
    description: "Comprehensive 1-on-1 session explaining the codebase, architecture, and execution steps.",
  },
  {
    num: "08",
    title: "Delivery & Support",
    description: "Final handover of all deliverables with continued support until project completion or Viva.",
  },
];

export default function ProcessPage() {
  return (
    <div className="py-24 bg-background min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-foreground mb-6">
            Our Development Process
          </h1>
          <p className="text-muted-foreground text-lg">
            A transparent, 8-step Software Development Life Cycle (SDLC) designed to guarantee quality and predictability.
          </p>
        </div>

        <div className="relative border-l border-white/10 ml-4 md:ml-0 md:border-none space-y-12">
          {/* Vertical line for desktop */}
          <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-px bg-white/10 -translate-x-1/2"></div>
          
          {steps.map((step, index) => {
            const isEven = index % 2 === 0;
            return (
              <div key={step.num} className={`relative flex flex-col md:flex-row items-center ${isEven ? 'md:flex-row-reverse' : ''}`}>
                <div className="hidden md:block w-1/2"></div>
                <div className="absolute left-[-16px] md:left-1/2 w-8 h-8 rounded-full bg-background border-2 border-primary flex items-center justify-center text-xs font-bold text-primary md:-translate-x-1/2 z-10 shadow-[0_0_10px_rgba(0,122,255,0.3)]">
                  {step.num}
                </div>
                <div className={`w-full md:w-1/2 pl-8 md:pl-0 ${isEven ? 'md:pr-12 md:text-right' : 'md:pl-12 text-left'}`}>
                  <div className="bg-white/5 border border-white/10 p-6 rounded-xl hover:border-primary/50 transition-colors">
                    <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
