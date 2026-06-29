import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="md:col-span-1">
            <Link href="/" className="text-2xl font-bold tracking-tighter text-foreground mb-4 block">
              Kriveon<span className="text-primary">Tech</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Transforming Research into Real-World Engineering Solutions. Production-quality implementations for academics, researchers, and innovators.
            </p>
          </div>

          <div>
            <h3 className="text-foreground font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary text-sm transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-primary text-sm transition-colors">Services</Link>
              </li>
              <li>
                <Link href="/technologies" className="text-muted-foreground hover:text-primary text-sm transition-colors">Technologies</Link>
              </li>
              <li>
                <Link href="/process" className="text-muted-foreground hover:text-primary text-sm transition-colors">Development Process</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-foreground font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/privacy-policy" className="text-muted-foreground hover:text-primary text-sm transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-primary text-sm transition-colors">Terms & Conditions</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-foreground font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a href="tel:+917670865257" className="flex items-center text-muted-foreground hover:text-primary text-sm transition-colors">
                  <Phone className="w-4 h-4 mr-2" />
                  +91 76708 65257
                </a>
              </li>
              <li>
                <a href="tel:+919014012864" className="flex items-center text-muted-foreground hover:text-primary text-sm transition-colors">
                  <Phone className="w-4 h-4 mr-2" />
                  +91 90140 12864
                </a>
              </li>
              <li>
                <a href="mailto:kriveontech@gmail.com" className="flex items-center text-muted-foreground hover:text-primary text-sm transition-colors">
                  <Mail className="w-4 h-4 mr-2" />
                  kriveontech@gmail.com
                </a>
              </li>
              <li className="flex items-start text-muted-foreground text-sm">
                <MapPin className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                <span>India</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} KriveonTech. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
