"use client";

import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { Camera, Video, GraduationCap, Snowflake, Cpu } from "lucide-react";
import PageHeader from "@/components/PageHeader";

// ---------- DADOS ----------

const categories = ["Todos", "Segurança Electrónica", "Formação", "AVAC", "Tecnologia"] as const;
type Category = (typeof categories)[number];

interface Partner {
  name: string;
  category: Exclude<Category, "Todos">;
  icon: typeof Camera;
  description: string;
}

const partners: Partner[] = [
  {
    name: "Dahua Technology",
    category: "Segurança Electrónica",
    icon: Camera,
    description:
      "Fabricante mundial de videovigilância e controlo de acessos. Fornecemos e instalamos toda a gama de equipamentos com suporte técnico certificado.",
  },
  {
    name: "UNV",
    category: "Segurança Electrónica",
    icon: Video,
    description:
      "Parceiro de referência em sistemas de segurança electrónica, com soluções robustas para projectos residenciais, comerciais e industriais.",
  },
  {
    name: "INEFOP",
    category: "Formação",
    icon: GraduationCap,
    description:
      "Instituto Nacional de Emprego e Formação Profissional — certifica os nossos programas de formação técnica e comportamental.",
  },
  // fictício — ajustar quando tiver o parceiro real
  {
    name: "Coldtech Solutions",
    category: "AVAC",
    icon: Snowflake,
    description:
      "Fornecedor de equipamentos de climatização e refrigeração, usados na manutenção de sistemas AVAC domésticos e industriais.",
  },
  // fictício — ajustar quando tiver o parceiro real
  {
    name: "NetSys Africa",
    category: "Tecnologia",
    icon: Cpu,
    description:
      "Parceiro de suporte técnico especializado, com acesso a peças, diagnóstico avançado e formação contínua das nossas equipas técnicas.",
  },
];

// ---------- ANIMAÇÕES ----------

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const card: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  exit: { opacity: 0, y: -12, transition: { duration: 0.25 } },
};

// ---------- PÁGINA ----------

export default function ParceirosPage() {
  const [active, setActive] = useState<Category>("Todos");

  const filtered =
    active === "Todos" ? partners : partners.filter((p) => p.category === active);

  return (
    <>
      <PageHeader
        eyebrow="Sobre a IDS"
        title="Os nossos"
        titleAccent="Parceiros"
        description="Fabricantes e instituições de referência mundial que sustentam a qualidade das nossas soluções."
        image="/Image_5.jpeg"
        imageAlt="Parceiros da IDS"
      />

      {/* INTRO */}
      <section className="relative overflow-hidden bg-background py-16 text-foreground transition-colors duration-300 md:py-20">
        <div className="pointer-events-none absolute -left-40 -top-40 h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle,rgba(201,154,58,0.12)_0%,transparent_65%)]" />

        <div className="relative z-10 mx-auto max-w-[780px] px-6 text-center lg:px-8">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-6 inline-flex items-center justify-center gap-3 text-xs font-bold uppercase tracking-[0.3em] text-foreground dark:text-gold"
          >
            <span className="h-px w-7 bg-primary dark:bg-gold" />
            Parcerias estratégicas
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="font-sans text-[clamp(32px,4.5vw,52px)] font-semibold leading-[1.05] tracking-tight"
          >
            Tecnologia de ponta,
            <span className="gold-text block">parcerias de confiança.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="mt-6 text-[16.5px] leading-relaxed text-muted-foreground"
          >
            Estabelecemos parcerias estratégicas com fabricantes e instituições
            detentoras de tecnologia e conhecimento de referência nas suas
            especializações. Esta rede de parcerias permite-nos propor e
            implementar soluções adequadas ao investimento e às necessidades
            reais de cada cliente.
          </motion.p>
        </div>
      </section>

      {/* FILTRO + GRID */}
      <section className="relative overflow-hidden bg-background pb-20 text-foreground transition-colors duration-300 md:pb-24">
        <div className="relative z-10 mx-auto max-w-[1240px] px-6 lg:px-8">
          {/* TABS */}
          <div className="mb-10 flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActive(cat)}
                className={`
                  relative rounded-full px-4 py-2 text-[13.5px] font-medium transition-colors duration-300
                  ${
                    active === cat
                      ? "text-background"
                      : "text-muted-foreground hover:text-foreground"
                  }
                `}
              >
                {active === cat && (
                  <motion.span
                    layoutId="partner-tab-active"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    className="absolute inset-0 rounded-full bg-foreground"
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            ))}
          </div>

          {/* GRID */}
          <motion.div
            layout
            className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map(({ name, icon: Icon, description, category }) => (
                <motion.div
                  key={name}
                  layout
                  variants={card}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3 }}
                  className="group relative overflow-hidden rounded-xl border border-border bg-card p-6 shadow-sm transition-colors duration-300 hover:border-gold/50"
                >
                  <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[image:var(--gold-grad)] transition-all duration-500 group-hover:w-full" />

                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 4 }}
                    transition={{ duration: 0.3 }}
                    className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg border border-gold/30 bg-gold/10 text-foreground dark:text-gold"
                  >
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </motion.div>

                  <span className="mb-2 inline-block text-[11.5px] font-semibold uppercase tracking-[0.12em] text-gold">
                    {category}
                  </span>

                  <h3 className="mb-2 font-sans text-[17px] font-semibold">{name}</h3>

                  <p className="text-[14px] leading-relaxed text-muted-foreground">
                    {description}
                  </p>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </>
  );
}