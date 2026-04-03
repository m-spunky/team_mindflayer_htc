"use client";

import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <section className="bg-[hsl(var(--bg-main))] py-32 px-6 text-center">
      <div className="max-w-4xl mx-auto space-y-10">
        <div className="space-y-4">
           <h2 className="text-3xl md:text-5xl font-semibold text-[hsl(var(--text-primary))]">Don't Get Hooked.</h2>
           <p className="text-lg md:text-xl text-[hsl(var(--text-muted))] max-w-2xl mx-auto">
             Enter any URL below to see our analysis in action. Protect your data 
             and yourself against cyber threats.
           </p>
        </div>

        <div className="flex flex-col items-center justify-center gap-6">
           <Button className="bg-[hsl(var(--green-primary))] hover:bg-[hsl(var(--green-medium))] text-white h-14 rounded-xl text-lg font-medium px-12 transition-all">
             Scan a URL
           </Button>
           <p className="text-xs uppercase tracking-[0.2em] font-semibold text-[hsl(var(--green-medium))]">
             Trusted by 10k+ users worldwide
           </p>
        </div>
      </div>
    </section>
  );
}
