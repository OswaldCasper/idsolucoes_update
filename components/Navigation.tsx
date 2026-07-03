"use client";

import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export default function Navigation() {
  return (
    <NavigationMenu className="relative" viewport={false}>
      <NavigationMenuList className="flex items-center gap-6">
        {/* INÍCIO */}
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link href="/" className="text-sm font-medium">
              Início
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        {/* SOBRE NÓS */}
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-sm font-medium">
            Sobre Nós
          </NavigationMenuTrigger>

          <NavigationMenuContent className="grid min-w-[220px] gap-2 p-4">
            <Link href="/brevemente">Quem Somos</Link>
            <Link href="/brevemente">Organigrama</Link>
            <Link href="/brevemente">Certificações</Link>
            <Link href="/brevemente">Parceiros</Link>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* SERVIÇOS */}
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-sm font-medium">
            Serviços
          </NavigationMenuTrigger>

          <NavigationMenuContent className="grid min-w-[260px] gap-2 p-4">
            <Link href="/servicos/seguranca-electronica">Segurança Electrónica</Link>
            <Link href="/servicos/manpower">Manpower</Link>
            <Link href="/servicos/formacao-profissional">Formação</Link>
            <Link href="/servicos/avac">AVAC</Link>
            <Link href="/servicos/suporte-tecnico">Suporte Técnico</Link>
            <Link href="/servicos/recrutamento-seleccao">Recrutamento</Link>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* PRODUTOS */}
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-sm font-medium">
            Produtos
          </NavigationMenuTrigger>

          <NavigationMenuContent className="grid min-w-[100px] gap-2 p-4">
            <Link href="/brevemente">Fortis</Link>
            <Link href="/brevemente">Gestis</Link>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* CONTACTOS */}
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link href="/contactos" className="text-sm font-medium">
              Contactos
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        {/* WhatsApp */}
        <NavigationMenuItem>
        <Link
            href="https://wa.me/244929481473"
            target="_blank"
            className="flex items-center gap-2 rounded-md bg-green-500 px-3 py-2 text-sm font-medium text-white transition hover:bg-green-600"
        >
            <FaWhatsapp className="h-4 w-4" />
            WhatsApp
        </Link>
        </NavigationMenuItem>

      </NavigationMenuList>

    </NavigationMenu>
  );
}