"use client";

import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

import menu from "@/data/navigation";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export default function DeskNav() {
  return (
    <NavigationMenu className="relative hidden lg:flex" viewport={false}>
      <NavigationMenuList className="flex items-center gap-6">

        {menu.map((item) => (
          <NavigationMenuItem key={item.id}>

            {item.children ? (
              <>
                <NavigationMenuTrigger className="text-sm font-medium">
                  {item.title}
                </NavigationMenuTrigger>

                <NavigationMenuContent className="grid min-w-[260px] gap-2 p-4 rounded-md border bg-popover p-4 text-popover-foreground shadow-md">

                  {item.children.map((child) => (
                    <NavigationMenuLink key={child.id} asChild>
                      <Link
                        href={child.href!}
                        className="rounded-md px-2 py-1.5 transition-colors hover:bg-gold/10 hover:text-gold"
                      >
                        {child.title}
                      </Link>
                    </NavigationMenuLink>
                  ))}

                </NavigationMenuContent>
              </>
            ) : (
              <NavigationMenuLink asChild>
                <Link
                  href={item.href!}
                  className="text-sm font-medium hover:bg-gold"
                >
                  {item.title}
                </Link>
              </NavigationMenuLink>
            )}

          </NavigationMenuItem>
        ))}

        {/* WhatsApp */}

        <NavigationMenuItem>
          <Link
            href="https://wa.me/244929481473"
            target="_blank"
            className="flex items-center gap-2 rounded-md bg-green-500 px-4 py-2 text-sm font-medium transition-all duration-300 hover:bg-gold hover:text-black"
          >
            <FaWhatsapp className="h-4 w-4" />
            WhatsApp
          </Link>
        </NavigationMenuItem>

      </NavigationMenuList>
    </NavigationMenu>
  );
}