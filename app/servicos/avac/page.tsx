"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import {
  Wrench,
  CalendarCheck,
  Settings,
  Droplet,
  Snowflake,
  CheckCircle2,
} from "lucide-react";
import PageHeader from "@/components/PageHeader";
import RelatedServices from "@/components/RelatedServices";

const services = [
  {
    icon: Wrench,
    title: "Instalação",
    text: "Montagem e configuração de sistemas de ar condicionado domésticos e industriais.",
  },
  {
    icon: CalendarCheck,
    title: "Manutenção preventiva",
    text: "Limpeza, verificação e afinação periódica para evitar avarias e prolongar a vida útil dos equipamentos.",
  },
  {
    icon: Settings,
    title: "Manutenção correctiva",
    text: "Diagnóstico e reparação de avarias, com substituição de componentes quando necessário.",
  },
  {
    icon: Droplet,
    title: "Recarga e tratamento de gás",
    text: "Verificação de circuitos e reposição de fluido refrigerante.",
  },
  {
    icon: Snowflake,
    title: "Apoio a sistemas de refrigeração",
    text: "Suporte a equipamentos de frio em ambientes comerciais e industriais.",
  },
];

const benefits = [
  "Garante o conforto térmico de colaboradores e visitantes.",
  "Reduz o consumo energético e os custos de operação.",
  "Previne avarias dispendiosas e interrupções de actividade.",
  "Prolonga a vida útil dos equipamentos instalados.",
];

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function AvacPage() {
  return (
    <main className="bg-background text-foreground">
      <PageHeader
        eyebrow="Serviços IDS"
        title="Manutenção em Sistemas de"
        titleAccent="Frio (AVAC)"
        description="Prestamos serviços de instalação e manutenção de sistemas de ar condicionado e refrigeração, com foco em eficiência energética, conforto e longevidade dos equipamentos."
        image="/Image_6.jpeg"
        imageAlt="Manutenção de sistemas AVAC"
      />

      {/* INTRODUÇÃO */}
      <section className="bg-card/40 py-20 transition-colors duration-300 md:py-24">
        <div className="mx-auto max-w-[1240px] px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span className="mb-6 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.3em] text-foreground dark:text-gold">
              <span className="h-px w-7 bg-primary dark:bg-gold" />
              O Serviço
            </span>

            <h2 className="font-sans text-[clamp(32px,4vw,52px)] font-semibold leading-[1.1] tracking-tight">
              Climatização eficiente
              <span className="gold-text block">para ambientes modernos</span>
            </h2>

            <p className="mt-8 max-w-[900px] text-[17px] leading-relaxed text-muted-foreground">
              A IDS presta serviços de instalação e manutenção de sistemas de
              ar condicionado e refrigeração, abrangendo soluções domésticas
              e industriais. Contamos com pessoal especializado que assegura
              o bom funcionamento, a eficiência energética e a longevidade
              dos equipamentos de climatização das instalações dos nossos
              clientes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section className="bg-background py-20 transition-colors duration-300 md:py-24">
        <div className="mx-auto max-w-[1240px] px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span className="mb-6 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.3em] text-foreground dark:text-gold">
              <span className="h-px w-7 bg-primary dark:bg-gold" />
              Serviços Disponíveis
            </span>

            <h2 className="font-sans text-[clamp(32px,4vw,52px)] font-semibold leading-[1.1] tracking-tight">
              Soluções completas de
              <span className="gold-text block">AVAC</span>
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            variants={container}
            className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3"
          >
            {services.map(({ icon: Icon, title, text }) => (
              <motion.div
                key={title}
                variants={item}
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

                <h3 className="mb-2 font-sans text-[16.5px] font-semibold">{title}</h3>

                <p className="text-[14.5px] leading-relaxed text-muted-foreground">
                  {text}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* BENEFÍCIOS */}
      <section className="bg-card/40 py-20 transition-colors duration-300 md:py-24">
        <div className="mx-auto max-w-[1240px] px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span className="mb-6 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.3em] text-foreground dark:text-gold">
              <span className="h-px w-7 bg-primary dark:bg-gold" />
              Porquê manter os sistemas de frio
            </span>

            <h2 className="font-sans text-[clamp(32px,4vw,52px)] font-semibold leading-[1.1] tracking-tight">
              Vantagens da manutenção
              <span className="gold-text block">regular</span>
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={container}
            className="mt-14 grid gap-6 md:grid-cols-2"
          >
            {benefits.map((text) => (
              <motion.div
                key={text}
                variants={item}
                whileHover={{ x: 4 }}
                transition={{ duration: 0.25 }}
                className="flex items-start gap-4 rounded-xl border border-border bg-card p-6 shadow-sm transition-colors duration-300 hover:border-gold/50"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-gold" strokeWidth={1.75} />
                <p className="text-[15px] leading-relaxed text-muted-foreground">{text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CONTRATOS DE MANUTENÇÃO */}
      <section className="bg-background py-20 transition-colors duration-300 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mx-auto max-w-[900px] px-6 text-center md:px-8"
        >
          <h2 className="font-sans text-[clamp(34px,4vw,54px)] font-semibold leading-[1.1] tracking-tight">
            Contratos de
            <span className="gold-text block">manutenção</span>
          </h2>

          <p className="mt-6 text-muted-foreground">
            A IDS disponibiliza contratos de manutenção periódica que asseguram
            intervenções programadas, resposta prioritária a avarias e
            previsibilidade de custos ao longo do ano.
          </p>

          <div className="mt-10">
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className="inline-block">
              <Link href="/#contactos" className="btn btn-fill group relative">
                Solicitar Proposta
                <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[image:var(--gold-grad)] transition-all duration-500 group-hover:w-full" />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* SERVIÇOS RELACIONADOS */}
      <RelatedServices
        links={[
          { title: "Suporte Técnico Especializado", href: "/servicos/suporte-tecnico" },
          { title: "Manpower", href: "/servicos/manpower" },
          { title: "Segurança Electrónica", href: "/servicos/seguranca-electronica" },
          { title: "Formação Profissional", href: "/servicos/formacao-profissional" },
          { title: "Manutenção de Interiores - Estofos", href: "/servicos/estofos" },
          { title: "Recrutamento e Selecção", href: "/servicos/recrutamento-seleccao" },
        ]}
      />
    </main>
  );
}