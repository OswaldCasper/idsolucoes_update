"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import Logo from "@/components/Logo";

const nav = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Contactos", href: "#contactos" },
];

const contacts = [
  { icon: Phone, href: "tel:+244929481473", label: "+244 929 481 473" },
  { icon: Phone, href: "tel:+244929826387", label: "+244 929 826 387" },
  { icon: Mail, href: "mailto:sales@idsolucoes.ao", label: "sales@idsolucoes.ao" },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

export default function Footer() {
  return (
    <footer
      className="
        border-t
        border-border
        bg-background
        pb-8
        pt-16
        text-muted-foreground
        transition-colors
        duration-300
      "
    >
      <div className="mx-auto max-w-[1240px] px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={container}
          className="grid gap-12 border-b border-border pb-11 md:grid-cols-[1.7fr_1fr_1fr]"
        >
          {/* marca */}
          <motion.div variants={item}>
            <div className="mb-5">
              <Logo className="h-14 w-auto"/>
            </div>
            <p className="max-w-[340px] text-[14.5px] leading-relaxed">
              Serviços que capacitam, conectam e desenvolvem. Soluções
              integradas para empresas em Angola, com foco em qualidade,
              segurança e resultados.
            </p>
          </motion.div>

          {/* navegação */}
          <motion.div variants={item}>
            <h5 className="mb-5 text-[12px] font-semibold uppercase tracking-[0.16em] text-foreground">
              Navegação
            </h5>
            {nav.map((navItem) => (
              <Link
                key={navItem.href}
                href={navItem.href}
                className="
                  mb-3
                  block
                  w-fit
                  text-[14.5px]
                  transition-all
                  duration-300
                  hover:translate-x-1
                  hover:text-gold
                "
              >
                {navItem.label}
              </Link>
            ))}
          </motion.div>

          {/* contacto */}
          <motion.div variants={item}>
            <h5 className="mb-5 text-[12px] font-semibold uppercase tracking-[0.16em] text-foreground">
              Contacto
            </h5>

            {contacts.map(({ icon: Icon, href, label }) => (
              <Link
                key={href}
                href={href}
                className="mb-3 flex w-fit items-center gap-2 text-[14.5px] transition-all duration-300 hover:translate-x-1 hover:text-gold">
                <Icon className="h-4 w-4 shrink-0" strokeWidth={1.75} />
                {label}
              </Link>
            ))}

            <span className="flex items-start gap-2 text-[14.5px]">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" strokeWidth={1.75} />
              Av. Mortala Mohamed, Ilha de Luanda
            </span>
          </motion.div>
        </motion.div>

        <div className="flex flex-col gap-2 pt-6 text-[13px] sm:flex-row sm:justify-between">
          <span>
            © {new Date().getFullYear()} IDS — Império Dourado Soluções. NIF 5000729728
          </span>
          <span>www.idsolucoes.ao</span>
        </div>
      </div>
    </footer>
  );
}