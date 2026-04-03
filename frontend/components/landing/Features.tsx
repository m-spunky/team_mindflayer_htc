"use client";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { CheckCircle2, ShieldCheck, Lock, Globe, Server, UserCheck } from "lucide-react";

const features = [
  {
    title: "SSL Secure",
    description: "Encryption verification and certificate analysis.",
    icon: <Lock className="w-6 h-6 text-[hsl(var(--green-primary))]" />,
    badge: "Safe"
  },
  {
    title: "Domain Safe",
    description: "Check for domain spoofing and malicious history.",
    icon: <Globe className="w-6 h-6 text-[hsl(var(--green-primary))]" />,
    badge: "Safe"
  },
  {
    title: "AI Reputation",
    description: "Analyze the source for phishing and scam patterns.",
    icon: <ShieldCheck className="w-6 h-6 text-[hsl(var(--green-primary))]" />,
    badge: "Safe"
  },
  {
    title: "Server Scan",
    description: "Real-time checking of target server for threats.",
    icon: <Server className="w-6 h-6 text-[hsl(var(--green-primary))]" />,
    badge: "Safe"
  },
  {
    title: "User Authenticity",
    description: "Identify potential social engineering patterns.",
    icon: <UserCheck className="w-6 h-6 text-[hsl(var(--green-primary))]" />,
    badge: "Safe"
  },
  {
    title: "Link Integrity",
    description: "Track redirects and detect shortened malicious links.",
    icon: <CheckCircle2 className="w-6 h-6 text-[hsl(var(--green-primary))]" />,
    badge: "Safe"
  }
];

export function Features() {
  return (
    <section className="bg-[hsl(var(--bg-main))] py-24 px-6">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <h2 className="text-3xl font-semibold text-[hsl(var(--text-primary))]">Built for ultimate protection</h2>
          <p className="text-[hsl(var(--text-muted))] text-lg">
            Our multi-layer analysis pipeline checks every detail of a URL to ensure your security.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="bg-white border-[hsl(var(--border))] rounded-xl p-8 hover:shadow-none transition-all border-2">
              <div className="flex flex-col items-start space-y-4">
                <div className="flex items-center justify-between w-full mb-2">
                  <div className="w-12 h-12 rounded-xl bg-[hsl(var(--green-soft))] flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <Badge className="bg-[hsl(var(--green-soft))] text-[hsl(var(--green-primary))] rounded-xl border-none font-medium px-3 py-1">
                    {feature.badge}
                  </Badge>
                </div>
                <div className="space-y-2">
                   <h3 className="text-xl font-semibold text-[hsl(var(--text-primary))]">{feature.title}</h3>
                   <p className="text-[hsl(var(--text-muted))] text-base leading-relaxed">
                     {feature.description}
                   </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
