import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | KriveonTech",
  description: "Learn about KriveonTech, our mission, and our engineering standards.",
};

export default function AboutPage() {
  return (
    <div className="py-24 bg-background min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-foreground mb-8">
          About <span className="text-primary">KriveonTech</span>
        </h1>
        
        <div className="prose prose-invert max-w-none">
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            KriveonTech is a premium software engineering agency dedicated to bridging the gap between theoretical academic research and production-grade software and hardware solutions.
          </p>
          
          <h2 className="text-2xl font-semibold text-foreground mt-12 mb-4">Our Vision</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            To be the most trusted and technically revered engineering partner for students, researchers, and startups. We aim to elevate the standard of custom development by ensuring every line of code is clean, documented, and production-ready.
          </p>
          
          <h2 className="text-2xl font-semibold text-foreground mt-12 mb-4">Our Mission</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            To deliver a digital experience that mirrors the precision, quality, and modern architecture of the code we write, educating our audience on rigorous engineering standards while providing frictionless avenues for project consultation.
          </p>

          <div className="bg-white/5 border border-white/10 rounded-xl p-8 mt-12">
            <h3 className="text-xl font-bold text-foreground mb-4">Why We Are Different</h3>
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex items-start">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
                <span><strong>No Plagiarism:</strong> We write custom code tailored to your exact requirements.</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
                <span><strong>Transparent Workflow:</strong> You receive GitHub access, Architecture diagrams, and API docs.</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
                <span><strong>Knowledge Transfer:</strong> We ensure you understand the codebase to confidently face your Viva or investors.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
