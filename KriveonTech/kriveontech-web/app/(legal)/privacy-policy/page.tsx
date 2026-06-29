import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | KriveonTech",
  description: "Privacy Policy for KriveonTech.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="py-24 bg-background min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-invert max-w-none">
        <h1 className="text-3xl md:text-5xl font-bold tracking-tighter text-foreground mb-8">
          Privacy Policy
        </h1>

        <p className="text-muted-foreground">Effective Date: January 1, 2026</p>

        <h2 className="text-2xl font-semibold text-foreground mt-12 mb-4">1. Introduction</h2>
        <p className="text-muted-foreground leading-relaxed">
          At KriveonTech, we respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website (regardless of where you visit it from) and tell you about your privacy rights.
        </p>

        <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">2. The Data We Collect</h2>
        <p className="text-muted-foreground leading-relaxed">
          We do not use lead-capture forms on our website. Any personal information we collect is provided directly by you when you contact us via Phone, WhatsApp, or Email. This may include your name, phone number, and project details.
        </p>

        <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">3. Analytics</h2>
        <p className="text-muted-foreground leading-relaxed">
          We use Google Analytics and Microsoft Clarity to understand how visitors interact with our website. These services may use cookies to collect anonymous usage data (e.g., page views, button clicks). You can opt out of analytics tracking via your browser settings.
        </p>

        <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">4. Data Security</h2>
        <p className="text-muted-foreground leading-relaxed">
          We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way, altered, or disclosed. Furthermore, project source codes and NDAs are handled with strict confidentiality.
        </p>

        <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">5. Contact Us</h2>
        <p className="text-muted-foreground leading-relaxed">
          If you have any questions about this privacy policy, please contact us at <a href="mailto:kriveontech@gmail.com" className="text-primary hover:underline">kriveontech@gmail.com</a>.
        </p>

        <div className="mt-12 pt-8 border-t border-white/10">
          <Link href="/" className="text-primary hover:text-accent">&larr; Return to Homepage</Link>
        </div>
      </div>
    </div>
  );
}
