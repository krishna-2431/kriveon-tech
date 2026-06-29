import { Metadata } from "next";
import { Phone, Mail, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | KriveonTech",
  description: "Get in touch directly with KriveonTech engineers.",
};

export default function ContactPage() {
  return (
    <div className="py-24 bg-background min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-foreground mb-4">
            Contact KriveonTech
          </h1>
          <p className="text-muted-foreground text-lg">
            We don't use forms. Connect directly with our engineers via phone or WhatsApp for an immediate consultation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <a href="https://wa.me/917670865257?text=Hi%20KriveonTech,%20I%20am%20interested%20in%20your%20services." target="_blank" rel="noopener noreferrer" className="bg-[#25D366]/10 border border-[#25D366]/30 rounded-2xl p-8 hover:bg-[#25D366]/20 transition-colors flex flex-col items-center text-center group">
            <div className="w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
              <Phone className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-2">WhatsApp</h2>
            <p className="text-muted-foreground mb-4">Fastest response time.</p>
            <span className="text-[#25D366] font-mono">+91 76708 65257</span>
          </a>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-6 border border-primary/50">
              <Phone className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-2">Direct Call</h2>
            <p className="text-muted-foreground mb-4">Speak with a lead engineer.</p>
            <div className="space-y-2 font-mono">
              <a href="tel:+917670865257" className="block text-primary hover:text-accent">+91 76708 65257</a>
              <a href="tel:+919014012864" className="block text-primary hover:text-accent">+91 90140 12864</a>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col items-center text-center md:col-span-2">
            <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mb-6 border border-white/10">
              <Mail className="w-8 h-8 text-foreground" />
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-2">Email</h2>
            <p className="text-muted-foreground mb-4">For official inquiries and NDA requests.</p>
            <a href="mailto:contact@kriveontech.com" className="text-primary hover:text-accent font-mono">contact@kriveontech.com</a>
          </div>

        </div>
      </div>
    </div>
  );
}
