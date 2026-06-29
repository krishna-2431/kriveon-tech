import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Technologies | KriveonTech",
  description: "The modern technology stack used by KriveonTech engineers.",
};

const technologies = [
  { category: "Frontend", items: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"] },
  { category: "Backend", items: ["Node.js", "Express.js", "Python", "Django", "FastAPI"] },
  { category: "Database", items: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Firebase"] },
  { category: "Embedded / IoT", items: ["ESP32", "Raspberry Pi", "Arduino", "C/C++", "MicroPython"] },
  { category: "AI & ML", items: ["TensorFlow", "PyTorch", "Scikit-Learn", "OpenCV", "Pandas"] },
  { category: "DevOps & Cloud", items: ["AWS", "Vercel", "Docker", "GitHub Actions", "Nginx"] },
];

export default function TechnologiesPage() {
  return (
    <div className="py-24 bg-background min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-foreground mb-6">
            Technology Stack
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We utilize modern, production-tested technologies to build robust, scalable, and secure systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech) => (
            <div key={tech.category} className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors">
              <h2 className="text-2xl font-bold text-foreground mb-6 pb-4 border-b border-white/10">
                {tech.category}
              </h2>
              <ul className="space-y-4">
                {tech.items.map((item) => (
                  <li key={item} className="flex items-center text-muted-foreground font-mono text-sm">
                    <span className="text-primary mr-3">▹</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
