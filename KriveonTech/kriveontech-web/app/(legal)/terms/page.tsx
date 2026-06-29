import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms & Conditions | KriveonTech",
  description: "Terms and Conditions for KriveonTech.",
};

export default function TermsPage() {
  return (
    <div className="py-24 bg-background min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-invert max-w-none">
        <h1 className="text-3xl md:text-5xl font-bold tracking-tighter text-foreground mb-8">
          Terms & Conditions
        </h1>
        
        <p className="text-muted-foreground">Effective Date: January 1, 2026</p>

        <h2 className="text-2xl font-semibold text-foreground mt-12 mb-4">1. Acceptance of Terms</h2>
        <p className="text-muted-foreground leading-relaxed">
          By accessing and using the KriveonTech website and services, you accept and agree to be bound by the terms and provision of this agreement.
        </p>

        <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">2. Description of Service</h2>
        <p className="text-muted-foreground leading-relaxed">
          KriveonTech provides custom software development, embedded systems prototyping, and academic engineering solutions. We deliver source code, architecture documentation, and Knowledge Transfer sessions. We explicitly do not provide academic project reports or synopses.
        </p>

        <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">3. Intellectual Property</h2>
        <p className="text-muted-foreground leading-relaxed">
          Unless otherwise stated in a specific NDA or contract, the intellectual property rights of the custom code developed are transferred to the client upon full and final payment of all project milestones.
        </p>

        <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">4. Payment Terms</h2>
        <p className="text-muted-foreground leading-relaxed">
          Projects are executed based on agreed milestones. Work on a subsequent milestone begins only after the clearance of the previous milestone's invoice.
        </p>

        <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">5. Limitation of Liability</h2>
        <p className="text-muted-foreground leading-relaxed">
          KriveonTech shall not be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the service.
        </p>
        
        <div className="mt-12 pt-8 border-t border-white/10">
          <Link href="/" className="text-primary hover:text-accent">&larr; Return to Homepage</Link>
        </div>
      </div>
    </div>
  );
}
