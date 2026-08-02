"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import {
  Users,
  Zap,
  RefreshCw,
  UserPlus,
  Search,
  GraduationCap,
  ClipboardCheck,
  FileText,
  Banknote,
  ShieldCheck,
  Shuffle,
  Target,
} from "lucide-react";
import PageHeader from "@/components/PageHeader";
import RelatedServices from "@/components/RelatedServices";

const scope = [
  {
    icon: Users,
    text: "Cedência de profissionais para funções operacionais, técnicas e de apoio.",
  },
  {
    icon: Zap,
    text: "Reforço de equipas em períodos de maior procura ou em projectos pontuais.",
  },
  {
    icon: RefreshCw,
    text: "Equipas fixas, para criar rotinas consolidadas, ou rotativas, para maior flexibilidade.",
  },
  {
    icon: UserPlus,
    text: "Substituição imediata em caso de ausência do colaborador alocado.",
  },
];

const process = [
  {
    icon: Search,
    title: "Recrutamento e selecção",
    text: "Avaliação técnica e comportamental dos perfis e verificação documental rigorosa antes de qualquer alocação.",
  },
  {
    icon: GraduationCap,
    title: "Formação",
    text: "Capacitação inicial e contínua dos colaboradores ao longo do contrato.",
  },
  {
    icon: ClipboardCheck,
    title: "Supervisão operacional",
    text: "Acompanhamento no terreno, controlo de qualidade e reporte periódico ao cliente.",
  },
  {
    icon: FileText,
    title: "Gestão administrativa",
    text: "Processamento salarial, gestão de assiduidade e cumprimento integral das obrigações laborais vigentes em Angola.",
  },
];

const benefits = [
  {
    icon: Banknote,
    text: "Conversão de custos variáveis de pessoal em custos previsíveis e controlados.",
  },
  {
    icon: ShieldCheck,
    text: "Mitigação de riscos laborais e de exposição jurídica e administrativa.",
  },
  {
    icon: Shuffle,
    text: "Flexibilidade para aumentar ou reduzir equipas sem peso burocrático.",
  },
  {
    icon: Target,
    text: "Maior foco da empresa cliente no seu negócio principal.",
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

export default function ManpowerPage() {
  return (
    <main className="bg-background text-foreground">
      <PageHeader
        eyebrow="Serviços IDS"
        title="Manpower"
        titleAccent="Cedência de Mão de Obra"
        description="Soluções completas de outsourcing de recursos humanos, garantindo profissionais qualificados, gestão operacional e redução de custos para empresas que precisam de flexibilidade e eficiência."
        image="/Image_8.jpeg"
        imageAlt="Manpower — cedência de mão de obra"
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
              Gestão de pessoas
              <span className="gold-text block">com eficiência e rigor</span>
            </h2>

            <p className="mt-8 max-w-[850px] text-[17px] leading-relaxed text-muted-foreground">
              O serviço de Manpower da IDS consiste na disponibilização de
              profissionais qualificados, em regime de outsourcing, para
              apoiar operações, projectos e picos de actividade dos nossos
              clientes. Assumimos integralmente a selecção, a formação, a
              supervisão e a gestão administrativa dos colaboradores
              alocados, libertando a empresa cliente dos encargos e riscos
              associados à gestão directa de pessoal.
            </p>

            {/* APLICAÇÃO PRÁTICA */}
            <div className="mt-14 max-w-[950px] rounded-xl border-l-4 border-gold bg-card p-8 shadow-sm">
              <h3 className="font-sans text-[22px] font-semibold text-foreground">
                Aplicação Prática
              </h3>

              <p className="mt-4 text-[17px] leading-relaxed text-muted-foreground">
                O modelo de Manpower é particularmente vantajoso para funções
                de apoio recorrente — como limpeza, serviços gerais ou
                operações —{" "}
                <span className="font-semibold text-foreground">
                  em que a IDS assume toda a gestão da equipa e garante
                  continuidade e conformidade do serviço.
                </span>
              </p>
            </div>
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
              Âmbito do Serviço
            </span>

            <h2 className="font-sans text-[clamp(32px,4vw,52px)] font-semibold leading-[1.1] tracking-tight">
              Soluções flexíveis para
              <span className="gold-text block">diferentes necessidades</span>
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={container}
            className="mt-14 grid gap-6 md:grid-cols-2"
          >
            {scope.map(({ icon: Icon, text }) => (
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

      {/* PROCESSO / MODELO OPERACIONAL */}
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
              O Nosso Modelo
            </span>

            <h2 className="font-sans text-[clamp(32px,4vw,52px)] font-semibold leading-[1.1] tracking-tight">
              Processo estruturado
              <span className="gold-text block">e profissional</span>
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            variants={container}
            className="mt-14 grid gap-6 md:grid-cols-2"
          >
            {process.map(({ icon: Icon, title, text }) => (
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

      {/* BENEFÍCIOS */}
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
              Vantagens
            </span>

            <h2 className="font-sans text-[clamp(32px,4vw,52px)] font-semibold leading-[1.1] tracking-tight">
              Porque escolher
              <span className="gold-text block">a IDS</span>
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={container}
            className="mt-14 grid gap-6 md:grid-cols-2"
          >
            {benefits.map(({ icon: Icon, text }) => (
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

      {/* CTA */}
      <section className="bg-card/40 py-20 transition-colors duration-300 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mx-auto max-w-[900px] px-6 text-center md:px-8"
        >
          <h2 className="font-sans text-[clamp(34px,4vw,54px)] font-semibold leading-[1.1] tracking-tight">
            Precisa de reforço na sua
            <span className="gold-text block">equipa?</span>
          </h2>

          <p className="mt-6 text-muted-foreground">
            Fale connosco e receba uma solução de manpower adaptada à sua
            empresa.
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

      <RelatedServices
        links={[
          { title: "Suporte Técnico Especializado", href: "/servicos/suporte-tecnico" },
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