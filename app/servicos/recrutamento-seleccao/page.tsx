"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import {
  Search,
  Megaphone,
  ClipboardCheck,
  FileCheck,
  Users,
  Clock,
  Target,
  Database,
  ClipboardList,
} from "lucide-react";
import PageHeader from "@/components/PageHeader";
import RelatedServices from "@/components/RelatedServices";

const process = [
  {
    icon: Search,
    title: "Levantamento do perfil",
    text: "Definição, em conjunto com o cliente, dos requisitos técnicos e comportamentais da função.",
  },
  {
    icon: Megaphone,
    title: "Divulgação e atracção de candidatos",
    text: "Pesquisa activa e divulgação das oportunidades junto dos canais adequados.",
  },
  {
    icon: ClipboardCheck,
    title: "Triagem e avaliação",
    text: "Análise curricular, entrevistas e avaliação técnica e comportamental dos candidatos.",
  },
  {
    icon: FileCheck,
    title: "Verificação documental",
    text: "Confirmação de dados e conformidade legal dos perfis seleccionados.",
  },
  {
    icon: Users,
    title: "Apresentação de finalistas",
    text: "Entrega ao cliente de uma lista curta de candidatos com parecer fundamentado.",
  },
];

const benefits = [
  {
    icon: Clock,
    text: "Redução do tempo e do esforço associados ao processo de contratação.",
  },
  {
    icon: Target,
    text: "Maior assertividade na escolha, diminuindo o risco de contratações inadequadas.",
  },
  {
    icon: Database,
    text: "Acesso a uma base alargada de candidatos e ao conhecimento do mercado local.",
  },
  {
    icon: ClipboardList,
    text: "Processo estruturado, transparente e documentado.",
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

export default function RecrutamentoSelecaoPage() {
  return (
    <main className="bg-background text-foreground">
      <PageHeader
        eyebrow="Serviços IDS"
        title="Recrutamento &"
        titleAccent="Selecção"
        description="A IDS apoia as empresas na identificação, avaliação e contratação dos profissionais certos, combinando conhecimento do mercado angolano com processos rigorosos de avaliação."
        image="/Image_11.jpeg"
        imageAlt="Recrutamento e selecção IDS"
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
              Contratação eficiente
              <span className="gold-text block">e alinhada à cultura da empresa</span>
            </h2>

            <p className="mt-8 max-w-[900px] text-[17px] leading-relaxed text-muted-foreground">
              O nosso serviço de Recrutamento & Selecção combina o
              conhecimento do mercado de trabalho angolano com processos
              rigorosos de avaliação, garantindo candidatos alinhados com os
              requisitos técnicos e com a cultura da organização.
            </p>
          </motion.div>
        </div>
      </section>

      {/* PROCESSO */}
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
              O que fazemos
            </span>

            <h2 className="font-sans text-[clamp(32px,4vw,52px)] font-semibold leading-[1.1] tracking-tight">
              Processo de
              <span className="gold-text block">recrutamento</span>
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
              Vantagens do serviço
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

      {/* COMPLEMENTARIDADE */}
      <section className="bg-background py-20 transition-colors duration-300 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mx-auto max-w-[900px] px-6 text-center md:px-8"
        >
          <h2 className="font-sans text-[clamp(34px,4vw,54px)] font-semibold leading-[1.1] tracking-tight">
            Complementaridade com o
            <span className="gold-text block">Manpower</span>
          </h2>

          <p className="mt-6 text-muted-foreground">
            O serviço de Recrutamento & Selecção pode ser contratado de forma
            isolada, para integração directa de colaboradores nos quadros do
            cliente, ou em articulação com o serviço de Manpower, quando a
            IDS assume também a gestão dos profissionais.
          </p>

          <div className="mt-10">
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className="inline-block">
              <Link href="/#contactos" className="btn btn-fill group relative">
                Falar com a IDS
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
          { title: "Suporte Técnico Especializado", href: "/servicos/suporte-tecnico" },
        ]}
      />
    </main>
  );
}