"use client";

import Link from "next/link";
import Navigation from "@/components/Navigation";

export default function NewHeader() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur">

      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* LOGO */}
        <Link href="/" className="text-lg font-bold">
          ID Soluções
        </Link>

        {/* MENU */}
        <Navigation />

        {/* RESERVA (futuro theme toggle) */}
        <div className="w-10" />

      </div>

    </header>
  );
}