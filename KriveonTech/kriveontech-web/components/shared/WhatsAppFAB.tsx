"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle } from "lucide-react";

export function WhatsAppFAB() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <a
        href="https://wa.me/917670865257?text=Hi%20KriveonTech,%20I%20am%20interested%20in%20your%20services."
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center bg-[#25D366] hover:bg-[#1DA851] text-white rounded-full shadow-[0_4px_14px_0_rgba(37,211,102,0.39)] transition-colors p-4"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6 flex-shrink-0" />
        <AnimatePresence>
          {isHovered && (
            <motion.span
              initial={{ width: 0, opacity: 0, marginLeft: 0 }}
              animate={{ width: "auto", opacity: 1, marginLeft: 8 }}
              exit={{ width: 0, opacity: 0, marginLeft: 0 }}
              className="overflow-hidden whitespace-nowrap font-medium text-sm"
            >
              Chat on WhatsApp
            </motion.span>
          )}
        </AnimatePresence>
      </a>
    </div>
  );
}
