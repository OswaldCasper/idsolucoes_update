"use client";

import Image from "next/image";
import Link from "next/link";
import Logo from "@/components/Logo";
import DeskNav from "@/components/DeskNav";
import MobNav from "@/components/MobNav";
import ThemeToggle from "@/components/ThemeToggle";

export default function NewHeader() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 text-foreground backdrop-blur">

      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* LOGO */}
        <Link href="/" className="flex items-center">

          <Image
            src="/ids-logo-black-full.png"
            alt="IDS Soluções"
            width={180}
            height={60}
            priority
            className="h-10 w-auto dark:hidden"
          />

          <Image
            src="/logoIDS-white.png"
            alt="IDS Soluções"
            width={190}
            height={70}
            priority
            className="hidden h-10 w-auto dark:block"
          />

        </Link>


        {/* DESKTOP */}
        <DeskNav />


        {/* RIGHT ACTIONS */}
        <div className="flex items-center gap-3">

          {/* THEME TOGGLE */}
          <ThemeToggle />


          {/* MOBILE MENU */}
          <div className="lg:hidden">
            <MobNav />
          </div>

        </div>


      </div>

    </header>
  );
}