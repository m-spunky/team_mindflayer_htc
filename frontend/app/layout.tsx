import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import "@/styles/themes/beige-theme.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "SentinelAI Phishing Detector",
  description: "Detect phishing links instantly with AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} h-full antialiased`}>
      <body className="min-h-full font-poppins">{children}</body>
    </html>
  );
}
