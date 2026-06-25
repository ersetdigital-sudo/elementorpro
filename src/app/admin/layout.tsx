"use client";

import { useEffect } from "react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // Hide main site elements when admin is mounted
    const header = document.querySelector("body > header");
    const footer = document.querySelector("body > footer");
    const main = document.querySelector("body > main");
    const wa = document.querySelector("[aria-label='Hubungi via WhatsApp']");

    if (header) (header as HTMLElement).style.display = "none";
    if (footer) (footer as HTMLElement).style.display = "none";
    if (wa) (wa as HTMLElement).style.display = "none";
    if (main) {
      (main as HTMLElement).style.flex = "1";
      (main as HTMLElement).style.display = "block";
    }

    return () => {
      if (header) (header as HTMLElement).style.display = "";
      if (footer) (footer as HTMLElement).style.display = "";
      if (wa) (wa as HTMLElement).style.display = "";
      if (main) (main as HTMLElement).style.flex = "";
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#080b12] text-white">
      {children}
    </div>
  );
}
