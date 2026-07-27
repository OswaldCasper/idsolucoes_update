"use client";

import { motion, type Variants } from "framer-motion";
import { Award, GraduationCap, Camera, Video, Trophy } from "lucide-react";
import PageHeader from "@/components/PageHeader";

// ---------- DADOS (fictícios, ajustar depois) ----------

const badges = [
  { icon: Award, label: "ISO 9001:2015" },
  { icon: GraduationCap, label: "Certificação INEFOP" },
  { icon: Camera, label: "Dahua Certified Partner" },
  { icon: Video, label: "UNV Certified Partner" },
  { icon: Trophy, label: "Prémio Excelência Angola" },
];

const certifications = [
  {
    icon: Award,
    title: "ISO 9001:2015",
    highlight: "3 áreas de negócio e 9 processos certificados",
    text: "Somos uma das poucas empresas angolanas do sector de serviços com certificação ISO 9001:2015, cobrindo segurança electrónica, manpower e formação profissional.",
  },
  {
    icon: GraduationCap,
    title: "Certificação INEFOP",
    highlight: "100% dos formadores certificados",
    text: "Todos os nossos programas de formação profissional são reconhecidos pelo Instituto Nacional de Emprego e Formação Profissional (INEFOP).",
  },
  {
    icon: Camera,
    title: "Dahua Technology — Certified Partner",
    highlight: "Parceria certificada desde 2019",
    text: "Acesso a formação técnica directa da marca e às tecnologias mais recentes em videovigilância e controlo de acessos.",
  },
  {
    icon: Video,
    title: "UNV — Certified Security Partner",
    highlight: "Cobertura completa da gama UNV",
    text: "Instalação, configuração e manutenção de sistemas UNV com suporte técnico especializado e certificado pela marca.",
  },
  {
    icon: Trophy,
    title: "Prémio Excelência em Segurança Angola",
    highlight: "Distinção em 2022 e 2024",
    text: "Reconhecimento atribuído pelas soluções de segurança electrónica implementadas para clientes corporativos em Angola.",
  },
];

// ---------- ANIMAÇÕES ----------

const badgeContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const badgeItem: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: "easeOut" } },
};

const cardContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const cardItem: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

// ---------- PÁGINA ----------

export default function CertificacoesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Sobre a IDS"
        title="Certificações"
        titleAccent="de Excelência"
        description="Qualidade validada por instituições e marcas de referência mundial no nosso sector."
        image="/Image_4.jpeg"
        imageAlt="Certificações de Excelência da IDS"
      />

      {/* INTRO */}
      <section className="relative overflow-hidden bg-background py-16 text-foreground transition-colors duration-300 md:py-20">
        <div className="pointer-events-none absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle,rgba(201,154,58,0.12)_0%,transparent_65%)]" />

        <div className="relative z-10 mx-auto max-w-[780px] px-6 text-center lg:px-8">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-6 inline-flex items-center justify-center gap-3 text-xs font-bold uppercase tracking-[0.3em] text-foreground dark:text-gold"
          >
            <span className="h-px w-7 bg-primary dark:bg-gold" />
            Qualidade reconhecida
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="font-sans text-[clamp(32px,4.5vw,52px)] font-semibold leading-[1.05] tracking-tight"
          >
            Certificações e
            <span className="gold-text block">parcerias de referência.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="mt-6 text-[16.5px] leading-relaxed text-muted-foreground"
          >
            Prestamos aos nossos clientes e parceiros serviços de excelência,
            com elevado sentido de integridade, ética e profissionalismo — um
            compromisso validado pelas certificações e parcerias que mantemos
            com instituições e marcas de referência mundial.
          </motion.p>
        </div>
      </section>

      {/* FAIXA DE BADGES */}
      <section className="border-y border-border bg-card/40 py-10 transition-colors duration-300">
        <div className="mx-auto max-w-[1240px] px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={badgeContainer}
            className="flex flex-wrap items-center justify-center gap-4 md:justify-between"
          >
            {badges.map(({ icon: Icon, label }) => (
              <motion.div
                key={label}
                variants={badgeItem}
                whileHover={{ scale: 1.06, y: -2 }}
                transition={{ duration: 0.25 }}
                className="flex items-center gap-3 rounded-full border border-border bg-background px-5 py-2.5"
              >
                <Icon className="h-4 w-4 text-gold" strokeWidth={1.75} />
                <span className="text-[13.5px] font-medium text-foreground">{label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* GRID DETALHADO */}
      <section className="relative overflow-hidden bg-background py-16 text-foreground transition-colors duration-300 md:py-20">
        <div className="relative z-10 mx-auto max-w-[1240px] px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            variants={cardContainer}
            className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
          >
            {certifications.map(({ icon: Icon, title, highlight, text }) => (
              <motion.div
                key={title}
                variants={cardItem}
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

                <h3 className="mb-2 font-sans text-[17px] font-semibold">{title}</h3>

                <p className="gold-text mb-3 text-[15px] font-semibold leading-snug">
                  {highlight}
                </p>

                <p className="text-[14px] leading-relaxed text-muted-foreground">{text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}