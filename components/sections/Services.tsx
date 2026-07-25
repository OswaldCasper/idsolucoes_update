"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import {
  ShieldCheck,
  Users,
  GraduationCap,
  Snowflake,
  Wrench,
  Car,
  UserPlus,
} from "lucide-react";

const services = [
  {
    icon: ShieldCheck,
    title: "Segurança Electrónica",
    desc: "Protecção integrada de instalações com tecnologia de ponta.",
    href: "/servicos/seguranca-electronica",
  },
  {
    icon: Users,
    title: "Manpower (Cedência de Mão de Obra)",
    desc: "Profissionais qualificados em regime de outsourcing.",
    href: "/servicos/manpower",
  },
  {
    icon: GraduationCap,
    title: "Formação Profissional",
    desc: "Capacitação técnica e comportamental de equipas para diversos sectores.",
    href: "/servicos/formacao-profissional",
  },
  {
    icon: Snowflake,
    title: "Manutenção em Sistemas de Frio (AVAC)",
    desc: "Climatização e refrigeração doméstica e industrial.",
    href: "/servicos/avac",
  },
  {
    icon: Wrench,
    title: "Suporte Técnico Especializado",
    desc: "Assistência a equipamentos e sistemas.",
    href: "/servicos/suporte-tecnico",
  },
  {
    icon: Car,
    title: "Manutenção de Interiores de Viaturas — Estofos",
    desc: "Recuperação e tratamento de estofos automóveis.",
    href: "/servicos/estofos",
  },
  {
    icon: UserPlus,
    title: "Recrutamento & Selecção",
    desc: "Identificação e contratação dos perfis certos.",
    href: "/servicos/recrutamento-seleccao",
  },
];

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 },
  },
};

const card: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Services() {
  return (
    <section
      id="servicos"
      className="
        relative
        overflow-hidden
        bg-background
        py-10
        text-foreground
        transition-colors
        duration-300
        md:py-16
      "
    >
      {/* brilho dourado subtil */}
      <div
        className="
          pointer-events-none
          absolute
          -right-56
          -top-40
          h-[760px]
          w-[760px]
          rounded-full
          bg-[radial-gradient(circle,rgba(201,154,58,0.10)_0%,transparent_62%)]
        "
      />

      <div className="relative z-10 mx-auto max-w-[1240px] px-6 lg:px-8">

        {/* Cabeçalho */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-14"
        >
          <span
            className="
              mb-6
              inline-flex
              items-center
              gap-3
              text-xs
              font-bold
              uppercase
              tracking-[0.3em]
              text-foreground
              dark:text-gold
            "
          >
            <span className="h-px w-7 bg-primary dark:bg-gold" />
            O que fazemos
          </span>

          <h2 className="font-sans text-[clamp(34px,4vw,54px)] font-semibold leading-[1.1] tracking-tight">
            Soluções pensadas para
            <span className="gold-text block">
              resultados reais
            </span>
          </h2>

          <p className="mt-5 max-w-[520px] text-[16px] text-muted-foreground">
            Trabalhamos com soluções tecnológicas e empresariais que ajudam
            organizações a crescer de forma estruturada.
          </p>
        </motion.div>

        {/* Grid de serviços */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={container}
          className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
        >
          {services.map(({ icon: Icon, title, desc, href }) => (
            <motion.div key={href} variants={card} whileHover={{ y: -6 }} transition={{ duration: 0.3 }}>
              <Link
                href={href}
                className="
                  group
                  relative
                  block
                  h-full
                  overflow-hidden
                  rounded-xl
                  border
                  border-border
                  bg-card
                  p-6
                  shadow-sm
                  transition-colors
                  duration-300
                  hover:border-gold/40
                "
              >
                {/* Linha dourada inferior */}
                <div
                  className="
                    absolute
                    bottom-0
                    left-0
                    h-[2px]
                    w-0
                    bg-[image:var(--gold-grad)]
                    transition-all
                    duration-500
                    group-hover:w-full
                  "
                />

                {/* Ícone */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 4 }}
                  transition={{ duration: 0.3 }}
                  className="
                    mb-5
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-lg
                    border
                    border-gold/30
                    bg-gold/10
                    text-foreground
                    dark:text-gold
                  "
                >
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                </motion.div>

                <h3 className="mb-3 font-sans text-[18px] font-semibold text-foreground transition-colors group-hover:text-gold">
                  {title}
                </h3>

                <p className="text-[15px] leading-relaxed text-muted-foreground">
                  {desc}
                </p>

                <div className="mt-6 text-[13px] font-medium uppercase tracking-[0.15em] text-gold">
                  Saber mais →
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}