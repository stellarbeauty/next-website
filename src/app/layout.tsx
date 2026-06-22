import type { Metadata } from "next";
import { Inter, Lora } from "next/font/google";
import "./globals.css";

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-display-family",
  weight: ["400", "500", "600"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-serif-family",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://stellarbeauty.ca"),
  title: {
    default: "Stellar Beauty — Modern Hair & Beauty Salon",
    template: "%s — Stellar Beauty",
  },
  description:
    "Stellar Beauty is Port Coquitlam's modern hair salon — precision cuts, balayage, foils, perms, keratin, makeup, threading and waxing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${lora.variable} ${inter.variable} h-full`}>
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
