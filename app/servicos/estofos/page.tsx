"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import {
  Sparkles,
  Wrench,
  Layers,
  RefreshCw,
  Building2,
  Truck,
  User,
  TrendingUp,
  ShieldCheck,
  Star,
} from "lucide-react";
import PageHeader from "@/components/PageHeader";
import RelatedServices from "@/components/RelatedServices";

const services = [
  {
    icon: Sparkles,
    title: "Limpeza profunda de estofos",
    text: "Higienização de bancos e revestimentos em tecido, pele ou material sintético.",
  },
  {
    icon: Wrench,
    title: "Recuperação de estofos",
    text: "Reparação de desgaste, rasgões e danos nos revestimentos.",
  },
  {
    icon: Layers,
    title: "Tratamento de superfícies interiores",
    text: "Limpeza e conservação de painéis, tablier e demais componentes.",
  },
  {
    icon: RefreshCw,
    title: "Renovação do interior",
    text: "Intervenção integral para devolver ao habitáculo um aspecto cuidado.",
  },
];

const audience = [
  {
    icon: Building2,
    text: "Empresas com frotas de viaturas que pretendam preservar o valor e a imagem dos veículos.",
  },
  {
    icon: Truck,
    text: "Empresas de transporte e de aluguer de viaturas.",
  },
  {
    icon: User,
    text: "Clientes particulares que valorizem o conforto e a apresentação do automóvel.",
  },
];

const benefits = [
  {
    icon: TrendingUp,
    text: "Preservação do valor patrimonial das viaturas.",
  },
  {
    icon: ShieldCheck,
    text: "Maior conforto e higiene para condutores e passageiros.",
  },
  {
    icon: Star,
    text: "Imagem cuidada da frota, com impacto na percepção da empresa.",
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

export default function EstofosPage() {
  return (
    <main className="bg-background text-foreground">
      <PageHeader
        eyebrow="Serviços IDS"
        title="Interiores de Viaturas"
        titleAccent="Estofos"
        description="Recuperação e manutenção de interiores automóveis com foco em conforto, higiene e preservação do valor das viaturas."
        image="/Image_7.jpeg"
        imageAlt="Manutenção de interiores de viaturas — estofos"
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
              Interior automóvel
              <span className="gold-text block">renovado e cuidado</span>
            </h2>

            <p className="mt-8 max-w-[900px] text-[17px] leading-relaxed text-muted-foreground">
              A IDS presta serviços de manutenção e recuperação de interiores de
              viaturas, com especial incidência no tratamento de estofos. Este
              serviço destina-se a empresas com frotas automóveis, bem como a
              clientes particulares, e tem como objectivo recuperar o aspecto,
              o conforto e a higiene do interior dos veículos.
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
              Soluções completas para
              <span className="gold-text block">interiores automóveis</span>
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            variants={container}
            className="mt-14 grid gap-6 md:grid-cols-2"
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

      {/* DESTINATÁRIOS */}
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
              A quem se destina
            </span>

            <h2 className="font-sans text-[clamp(32px,4vw,52px)] font-semibold leading-[1.1] tracking-tight">
              Para empresas e
              <span className="gold-text block">particulares</span>
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={container}
            className="mt-14 grid gap-6 md:grid-cols-3"
          >
            {audience.map(({ icon: Icon, text }) => (
              <motion.div
                key={text}
                variants={item}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="rounded-xl border border-border bg-card p-6 shadow-sm transition-colors duration-300 hover:border-gold/50"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg border border-gold/30 bg-gold/10 text-foreground dark:text-gold">
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                </div>
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
              Benefícios
            </span>

            <h2 className="font-sans text-[clamp(32px,4vw,52px)] font-semibold leading-[1.1] tracking-tight">
              Vantagens do
              <span className="gold-text block">serviço</span>
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={container}
            className="mt-14 grid gap-6 md:grid-cols-3"
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
            Quer renovar o interior da sua
            <span className="gold-text block">viatura?</span>
          </h2>

          <p className="mt-6 text-muted-foreground">
            Fale connosco e receba uma proposta adaptada às suas necessidades.
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
          { title: "Formação Profissional", href: "/servicos/formacao-profissional" },
          { title: "Recrutamento e Selecção", href: "/servicos/recrutamento-seleccao" },
        ]}
      />
    </main>
  );
}