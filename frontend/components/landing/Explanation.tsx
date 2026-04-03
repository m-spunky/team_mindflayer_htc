"use client";

import { Button } from "@/components/ui/button";

export function Explanation() {
  return (
    <section className="bg-[hsl(var(--bg-section))] py-28 px-6">
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-between gap-12 lg:flex-row">
        <div className="flex-1 space-y-6 max-w-2xl text-center lg:text-left">
          <h2 className="text-3xl md:text-4xl font-semibold text-[hsl(var(--text-primary))] leading-tight">
            Comprehensive Analysis, <br /> Zero Compromise.
          </h2>
          <p className="text-lg text-[hsl(var(--text-muted))] leading-relaxed max-w-xl mx-auto lg:mx-0">
            We don't just check for malicious code. Our platform parses URL structure, 
            server metadata, Domain reputation, and behavioral indicators using sophisticated 
            machine learning models.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center p-8 bg-white border-2 border-[hsl(var(--border))] rounded-2xl max-w-sm w-full">
           <h3 className="text-xl font-semibold mb-3 text-[hsl(var(--text-primary))]">Ready for a scan?</h3>
           <p className="text-[hsl(var(--text-muted))] mb-6 text-center text-sm">
             Join thousands of users who protect themselves daily against phishing.
           </p>
           <Button className="bg-[hsl(var(--green-primary))] hover:bg-[hsl(var(--green-medium))] text-white w-full h-12 rounded-xl text-lg font-medium px-10">
             Try it for free
           </Button>
        </div>
      </div>
    </section>
  );
}
