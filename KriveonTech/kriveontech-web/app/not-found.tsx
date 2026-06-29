import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MessageCircle, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center bg-background text-center px-4">
      <h1 className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent mb-4">
        404
      </h1>
      <h2 className="text-3xl font-semibold text-foreground mb-6">
        Endpoint Not Found
      </h2>
      <p className="text-muted-foreground max-w-md mx-auto mb-10 text-lg">
        This endpoint doesn't exist in our architecture, but our engineers are ready to help you build one that does.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4">
        <Button asChild className="bg-primary text-white hover:bg-primary/90 h-12 px-6">
          <Link href="/">
            <Home className="w-4 h-4 mr-2" />
            Return to Homepage
          </Link>
        </Button>
        <Button variant="outline" asChild className="border-primary text-primary hover:bg-primary/10 h-12 px-6">
          <a href="https://wa.me/917670865257?text=Hi%20KriveonTech,%20I%20got%20lost%20on%20your%20website!" target="_blank" rel="noopener noreferrer">
            <MessageCircle className="w-4 h-4 mr-2" />
            Contact Support
          </a>
        </Button>
      </div>
    </div>
  );
}
