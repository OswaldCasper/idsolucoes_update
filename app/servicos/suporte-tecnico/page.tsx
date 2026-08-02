"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import {
  Headset,
  CalendarCheck,
  Settings,
  Monitor,
  Lightbulb,
  Phone,
  ClipboardList,
  ClipboardCheck,
} from "lucide-react";
import PageHeader from "@/components/PageHeader";
import RelatedServices from "@/components/RelatedServices";

const scope = [
  {
    icon: Headset,
    title: "Assistência a equipamentos e sistemas",
    text: "Apoio técnico a sistemas de segurança electrónica, climatização e demais equipamentos instalados.",
  },
  {
    icon: CalendarCheck,
    title: "Manutenção preventiva",
    text: "Verificações periódicas para antecipar e evitar falhas.",
  },
  {
    icon: Settings,
    title: "Manutenção correctiva",
    text: "Diagnóstico e resolução de avarias com rapidez de resposta.",
  },
  {
    icon: Monitor,
    title: "Apoio em tecnologias de informação",
    text: "Suporte ao funcionamento de equipamentos informáticos e sistemas associados.",
  },
  {
    icon: Lightbulb,
    title: "Aconselhamento técnico",
    text: "Recomendações para optimização, actualização e bom uso dos equipamentos.",
  },
];

const model = [
  {
    icon: Phone,
    text: "Intervenções pontuais, mediante solicitação do cliente.",
  },
  {
    icon: ClipboardList,
    text: "Contratos de assistência com intervenções programadas e resposta prioritária.",
  },
  {
    icon: ClipboardCheck,
    text: "Acompanhamento e reporte das intervenções realizadas.",
  },
];

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function SuporteTecnicoPage() {
  return (
    <main className="bg-background text-foreground">
      <PageHeader
        eyebrow="Serviços IDS"
        title="Suporte Técnico"
        titleAccent="Especializado"
        description="Garantimos o bom funcionamento dos sistemas e equipamentos dos nossos clientes, com actuação preventiva e correctiva para assegurar continuidade operacional."
        image="/Image_13.jpeg"
        imageAlt="Suporte técnico especializado IDS"
      />

      {/* INTRO */}
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
              Suporte integrado
              <span className="gold-text block">e contínuo</span>
            </h2>

            <p className="mt-8 max-w-[900px] text-[17px] leading-relaxed text-muted-foreground">
              Disponibilizamos serviços de suporte técnico especializado,
              destinados a garantir o bom funcionamento dos equipamentos e
              sistemas dos nossos clientes. A nossa equipa actua de forma
              preventiva e correctiva, minimizando interrupções de actividade
              e assegurando a continuidade das operações.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ÂMBITO */}
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
              Âmbito do Suporte
            </span>

            <h2 className="font-sans text-[clamp(32px,4vw,52px)] font-semibold leading-[1.1] tracking-tight">
              Apoio técnico
              <span className="gold-text block">completo</span>
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            variants={container}
            className="mt-14 grid gap-6 md:grid-cols-2"
          >
            {scope.map(({ icon: Icon, title, text }) => (
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
                <p className="text-[14.5px] leading-relaxed text-muted-foreground">{text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* MODELO */}
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
              Modelo de Prestação
            </span>

            <h2 className="font-sans text-[clamp(32px,4vw,52px)] font-semibold leading-[1.1] tracking-tight">
              Serviço flexível
              <span className="gold-text block">e adaptado</span>
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={container}
            className="mt-14 grid gap-6 md:grid-cols-2"
          >
            {model.map(({ icon: Icon, text }) => (
              <motion.div
                key={text}
                variants={item}
                whileHover={{ x: 4 }}
                transition={{ duration: 0.25 }}
                className="flex items-start gap-4 rounded-xl border border-border bg-card p-6 shadow-sm transition-colors duration-300 hover:border-gold/50"
              >
                <Icon className="mt-0.5 h-5 w-5 shrink-0 text-gold" strokeWidth={1.75} />
                <p className="text-[15px] leading-relaxed text-muted-foreground">{text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* VANTAGEM */}
      <section className="bg-background py-20 transition-colors duration-300 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mx-auto max-w-[900px] px-6 text-center md:px-8"
        >
          <h2 className="font-sans text-[clamp(34px,4vw,54px)] font-semibold leading-[1.1] tracking-tight">
            Vantagem para o
            <span className="gold-text block">cliente</span>
          </h2>

          <p className="mt-6 text-muted-foreground">
            Ao centralizar o suporte técnico na IDS, a empresa cliente passa
            a dispor de um parceiro único, com conhecimento das suas
            instalações e capacidade de resposta integrada a vários tipos de
            equipamento.
          </p>

          <div className="mt-10">
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className="inline-block">
              <Link href="/#contactos" className="btn btn-fill group relative">
                Solicitar Suporte
                <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[image:var(--gold-grad)] transition-all duration-500 group-hover:w-full" />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <RelatedServices
        links={[
          { title: "Manpower", href: "/servicos/manpower" },
          { title: "Formação Profissional", href: "/servicos/formacao-profissional" },
          { title: "Segurança Electrónica", href: "/servicos/seguranca-electronica" },
          { title: "AVAC - Manutenção em Sistemas de Frio", href: "/servicos/avac" },
          { title: "Manutenção de Interiores - Estofos", href: "/servicos/estofos" },
          { title: "Recrutamento e Selecção", href: "/servicos/recrutamento-seleccao" },
        ]}
      />
    </main>
  );
}