"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Do you provide project reports?",
    answer: "No. We explicitly do not provide project reports, synopses, or presentation slides. We are a software engineering agency focused strictly on code, architecture diagrams, API documentation, and Knowledge Transfer (KT)."
  },
  {
    question: "How does the Knowledge Transfer (KT) work?",
    answer: "Once the code is pushed and tested, we schedule a 1-on-1 session where a senior engineer walks you through the codebase, explains the logic, shows you how to run the project locally, and prepares you for potential technical questions."
  },
  {
    question: "Do you implement IEEE base papers?",
    answer: "Yes, we specialize in implementing complex IEEE research papers into functional software, IoT, or AI/ML prototypes. Provide us the paper during the Requirement Analysis phase."
  },
  {
    question: "How long does a standard project take?",
    answer: "Timelines depend entirely on the complexity of the project. A standard web app might take 2-4 weeks, while complex hardware-integrated AI solutions can take several months. We will provide a strict timeline during Phase 2 (Planning)."
  },
  {
    question: "How do I get a quotation?",
    answer: "We believe in zero-friction contact. Call us or send a message on WhatsApp with your requirements. We usually provide an estimate within the same day after our initial consultation."
  }
];

export default function FaqPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="py-24 bg-background min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-foreground mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-muted-foreground text-lg">
            Straightforward answers to your logistical and technical questions.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">
                <button
                  className="w-full px-6 py-4 flex justify-between items-center focus:outline-none focus:bg-white/10 transition-colors"
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-foreground text-left">{faq.question}</span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="w-5 h-5 text-muted-foreground" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="px-6 pb-4 pt-2 text-muted-foreground border-t border-white/5">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-4">Still have questions?</p>
          <a href="https://wa.me/917670865257?text=Hi%20KriveonTech,%20I%20have%20a%20question..." target="_blank" rel="noopener noreferrer" className="text-primary hover:text-accent font-medium transition-colors">
            Chat with us on WhatsApp &rarr;
          </a>
        </div>
      </div>
    </div>
  );
}
