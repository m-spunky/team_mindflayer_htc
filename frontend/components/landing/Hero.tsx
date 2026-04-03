"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { ShieldCheck } from "lucide-react";

export function Hero() {
  return (
    <section className="bg-[hsl(var(--green-dark))] text-white py-20 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Side */}
        <div className="flex-1 space-y-6 text-center lg:text-left">
          <Badge className="bg-[hsl(var(--green-soft))] text-[hsl(var(--green-primary))] border-none rounded-xl px-4 py-1.5 hover:bg-[hsl(var(--green-soft))]">
            AI Detection
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight">
            Detect phishing links instantly
          </h1>
          <p className="text-lg md:text-xl text-neutral-300 max-w-lg mx-auto lg:mx-0">
            Advanced real-time analysis powered by mult-layered AI to protect you from malicious threats.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 mt-8 max-w-md mx-auto lg:mx-0">
            <Input 
              placeholder="Paste URL to scan..." 
              className="bg-white text-[hsl(var(--text-primary))] border-[hsl(var(--border))] rounded-xl h-12 focus-visible:ring-offset-0 focus-visible:ring-0"
            />
            <Button className="bg-[hsl(var(--green-primary))] hover:bg-[hsl(var(--green-medium))] text-white rounded-xl h-12 px-8 font-medium">
              Scan
            </Button>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex-1 w-full max-w-sm lg:max-w-md">
          <Card className="bg-white border-[hsl(var(--border))] rounded-[2rem] p-8 shadow-none border-2">
            <div className="flex flex-col items-center text-center space-y-6">
              <div className="w-24 h-24 rounded-full border-8 border-[hsl(var(--green-soft))] flex items-center justify-center relative">
                 <ShieldCheck className="w-10 h-10 text-[hsl(var(--green-primary))]" />
              </div>
              <div className="space-y-2 w-full">
                <p className="text-[hsl(var(--text-muted))] text-sm font-medium uppercase tracking-wider">Trust Score</p>
                <div className="flex items-end justify-center gap-1">
                   <span className="text-5xl font-semibold text-[hsl(var(--green-primary))] Tracking-tighter">85</span>
                   <span className="text-2xl font-medium text-[hsl(var(--text-muted))] mb-1">%</span>
                </div>
              </div>
              <div className="w-full space-y-3">
                 <Progress value={85} className="h-3 bg-[hsl(var(--green-soft))] rounded-full overflow-hidden" />
                 <div className="flex justify-between text-xs font-medium text-[hsl(var(--text-muted))]">
                   <span>Suspicious</span>
                   <span>Secure</span>
                 </div>
              </div>
              <div className="pt-4 border-t border-[hsl(var(--border))] w-full">
                <p className="text-sm font-medium text-[hsl(var(--text-primary))]">URL Status: Likely Safe</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
