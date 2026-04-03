import { Hero } from "@/components/landing/Hero";
import { Features } from "@/components/landing/Features";
import { Explanation } from "@/components/landing/Explanation";
import { CTA } from "@/components/landing/CTA";

export default function Home() {
  return (
    <div className="theme-beige min-h-screen">
      <main className="flex flex-col">
        <Hero />
        <Features />
        <Explanation />
        <CTA />
      </main>
      
      <footer className="bg-[hsl(var(--bg-section))] py-12 px-6 border-t border-[hsl(var(--border))]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-[hsl(var(--text-muted))] text-sm">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[hsl(var(--green-primary))]" />
            <span className="font-semibold text-[hsl(var(--text-primary))] text-lg">SentinelAI</span>
          </div>
          <div className="flex gap-8 font-medium">
             <a href="#" className="hover:text-[hsl(var(--green-primary))] transition-colors">Privacy Policy</a>
             <a href="#" className="hover:text-[hsl(var(--green-primary))] transition-colors">Terms of Service</a>
             <a href="#" className="hover:text-[hsl(var(--green-primary))] transition-colors">Support</a>
          </div>
          <p>© {new Date().getFullYear()} All rights reserved</p>
        </div>
      </footer>
    </div>
  );
}
