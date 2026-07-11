"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

import menu from "@/data/navigation";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function MobNav() {
  return (
    <div className="lg:hidden">
      <Sheet>
        {/* Botão hamburguer */}
        <SheetTrigger asChild>
          <button
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-border transition hover:bg-gold/10 hover:text-gold"
            aria-label="Abrir menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </SheetTrigger>

        {/* Conteúdo lateral */}
        <SheetContent
          side="right"
          className="w-[300px] px-6"
        >
          <nav className="mt-8 flex flex-col">

            <Accordion
              type="single"
              collapsible
              className="w-full"
            >
              {menu.map((item) =>
                item.children ? (
                  <AccordionItem
                    key={item.id}
                    value={item.title}
                  >
                    <AccordionTrigger className="py-2.5 text-sm font-medium">
                      {item.title}
                    </AccordionTrigger>

                    <AccordionContent>
                      <div className="flex flex-col gap-2 pl-4">
                        {item.children.map((child) => (
                          <Link
                            key={child.id}
                            href={child.href!}
                            className="text-sm text-muted-foreground"
                          >
                            {child.title}
                          </Link>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ) : (
                  <Link
                    key={item.id}
                    href={item.href!}
                    className="block py-2.5 text-sm font-medium transition-all hover:text-gold"
                  >
                    {item.title}
                  </Link>
                )
              )}
            </Accordion>

            {/* WhatsApp */}
            <Link
              href="https://wa.me/244929481473"
              target="_blank"
              className="mt-6 flex items-center justify-center gap-2 rounded-md bg-green-500 px-4 py-3 text-sm font-medium text-white transition hover:bg-gold hover:text-black"
            >
              <FaWhatsapp className="h-5 w-5" />
              WhatsApp
            </Link>

          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}