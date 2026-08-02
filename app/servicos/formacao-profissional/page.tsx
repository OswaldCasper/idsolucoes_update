"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import {
  BookOpen,
  Users,
  Building2,
  Award,
  TrendingUp,
  Target,
  ShieldCheck,
  Heart,
  Search,
  FileText,
  PlayCircle,
  BarChart2,
  Cog,
} from "lucide-react";
import PageHeader from "@/components/PageHeader";
import RelatedServices from "@/components/RelatedServices";

const types = [
  {
    icon: BookOpen,
    title: "Formação técnica",
    text: "Desenvolvimento de competências práticas associadas a funções e operações específicas.",
  },
  {
    icon: Users,
    title: "Formação comportamental",
    text: "Reforço de competências transversais como comunicação, liderança, trabalho em equipa e atendimento.",
  },
  {
    icon: Building2,
    title: "Formação corporativa personalizada (in-company)",
    text: "Programas desenhados à medida e realizados nas instalações do cliente ou em local a combinar.",
  },
  {
    icon: Award,
    title: "Upskilling e certificações",
    text: "Actualização de competências e preparação para certificações reconhecidas.",
  },
];

const objectives = [
  { icon: TrendingUp, text: "Aumentar a produtividade e o desempenho das equipas." },
  { icon: Target, text: "Preparar os colaboradores para desafios específicos da função." },
  { icon: ShieldCheck, text: "Reforçar competências essenciais à competitividade da organização." },
  { icon: Heart, text: "Promover a valorização e a motivação do capital humano." },
];

const process = [
  { icon: Search, title: "Diagnóstico", text: "Levantamento das necessidades reais da equipa e da organização." },
  { icon: FileText, title: "Concepção", text: "Desenho do programa formativo, conteúdos e metodologia." },
  { icon: PlayCircle, title: "Execução", text: "Realização das sessões por formadores experientes." },
  { icon: BarChart2, title: "Avaliação", text: "Medição dos resultados e do impacto real da formação." },
];

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function FormacaoProfissionalPage() {
  return (
    <main className="bg-background text-foreground">
      <PageHeader
        eyebrow="Serviços IDS"
        title="Formação"
        titleAccent="Profissional"
        description="Desenvolvemos programas de formação técnica e comportamental, adaptados às necessidades específicas de cada cliente, com foco em produtividade, competências e crescimento sustentável."
        image="/Image_10.jpeg"
        imageAlt="Formação profissional IDS"
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
              Capacitação estruturada
              <span className="gold-text block">para equipas de alto desempenho</span>
            </h2>

            <p className="mt-8 max-w-[900px] text-[17px] leading-relaxed text-muted-foreground">
              Desenvolvemos programas de formação técnica e comportamental,
              adaptados às necessidades específicas de cada cliente. As acções
              de formação são concebidas para aumentar a produtividade,
              preparar equipas para desafios concretos e reforçar as
              competências-chave que sustentam a competitividade das
              organizações.
            </p>
          </motion.div>
        </div>
      </section>

      {/* TIPOS DE FORMAÇÃO */}
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
              Tipos de Formação
            </span>

            <h2 className="font-sans text-[clamp(32px,4vw,52px)] font-semibold leading-[1.1] tracking-tight">
              Programas adaptados
              <span className="gold-text block">a cada necessidade</span>
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            variants={container}
            className="mt-14 grid gap-6 md:grid-cols-2"
          >
            {types.map(({ icon: Icon, title, text }) => (
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

      {/* OBJECTIVOS */}
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
              Objectivos
            </span>

            <h2 className="font-sans text-[clamp(32px,4vw,52px)] font-semibold leading-[1.1] tracking-tight">
              O que as nossas formações
              <span className="gold-text block">ajudam a alcançar</span>
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={container}
            className="mt-14 grid gap-6 md:grid-cols-2"
          >
            {objectives.map(({ icon: Icon, text }) => (
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

      {/* COMO TRABALHAMOS — PROCESSO EM 4 PASSOS */}
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
              Como Trabalhamos
            </span>

            <h2 className="font-sans text-[clamp(32px,4vw,52px)] font-semibold leading-[1.1] tracking-tight">
              Um processo claro,
              <span className="gold-text block">do diagnóstico ao resultado</span>
            </h2>

            <p className="mt-6 max-w-[900px] text-[16.5px] leading-relaxed text-muted-foreground">
              As formações são realizadas em parceria com instituições de
              ensino de referência e ministradas por formadores experientes.
              O processo assegura que o investimento em formação se traduz
              em ganhos concretos para a organização.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            variants={container}
            className="relative mt-16 grid gap-8 md:grid-cols-4"
          >
            {/* linha de ligação horizontal (desktop) */}
            <div className="pointer-events-none absolute left-0 right-0 top-[22px] hidden h-px bg-border md:block" />

            {process.map(({ icon: Icon, title, text }, index) => (
              <motion.div key={title} variants={item} className="relative text-center">
                <div className="relative z-10 mx-auto mb-5 flex h-11 w-11 items-center justify-center rounded-full border border-gold/40 bg-background text-gold">
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                </div>

                <span className="mb-1 block text-[12px] font-semibold uppercase tracking-[0.15em] text-gold">
                  Passo {index + 1}
                </span>

                <h3 className="mb-2 font-sans text-[16px] font-semibold">{title}</h3>
                <p className="text-[14px] leading-relaxed text-muted-foreground">{text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FORTIS */}
      <section className="bg-card/40 py-20 transition-colors duration-300 md:py-24">
        <div className="mx-auto max-w-[1240px] px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-[950px] rounded-xl border-l-4 border-gold bg-card p-8 shadow-sm"
          >
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg border border-gold/30 bg-gold/10 text-foreground dark:text-gold">
              <Cog className="h-5 w-5" strokeWidth={1.75} />
            </div>

            <h3 className="font-sans text-[22px] font-semibold text-foreground">
              Sistema de Gestão de Formação FORTIS
            </h3>

            <p className="mt-4 text-[17px] leading-relaxed text-muted-foreground">
              A IDS dispõe de um sistema de gestão profissional de formação
              denominado <span className="font-semibold text-foreground">FORTIS</span>,
              baseado em princípios de qualidade e alinhado com a norma{" "}
              <span className="font-semibold text-foreground">ISO 9001</span>,
              garantindo organização, controlo e melhoria contínua dos
              processos formativos.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-background py-20 transition-colors duration-300 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mx-auto max-w-[900px] px-6 text-center md:px-8"
        >
          <h2 className="font-sans text-[clamp(34px,4vw,54px)] font-semibold leading-[1.1] tracking-tight">
            Quer elevar as competências da sua
            <span className="gold-text block">equipa?</span>
          </h2>

          <p className="mt-6 text-muted-foreground">
            Fale connosco e desenvolva um programa de formação adaptado à sua
            organização.
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
          { title: "Manpower", href: "/servicos/manpower" },
          { title: "Segurança Electrónica", href: "/servicos/seguranca-electronica" },
          { title: "AVAC - Manutenção em Sistemas de Frio", href: "/servicos/avac" },
          { title: "Manutenção de Interiores - Estofos", href: "/servicos/estofos" },
          { title: "Recrutamento e Selecção", href: "/servicos/recrutamento-seleccao" },
        ]}
      />
    </main>
  );
}