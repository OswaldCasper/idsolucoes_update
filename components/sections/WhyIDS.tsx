"use client";

import { motion, type Variants } from "framer-motion";
import { Users, Handshake, MapPin, Shuffle, TrendingUp } from "lucide-react";

const reasons = [
  {
    icon: Users,
    title: "Equipa jovem e altamente qualificada",
    text: "Profissionais especializados e em formação contínua, prontos para responder a desafios técnicos exigentes.",
  },
  {
    icon: Handshake,
    title: "Parcerias sólidas",
    text: "Colaboração com instituições nacionais e internacionais e com fabricantes de referência mundial.",
  },
  {
    icon: MapPin,
    title: "Conhecimento do contexto local",
    text: "Domínio profundo do talento e da realidade do mercado angolano, do recrutamento à execução.",
  },
  {
    icon: Shuffle,
    title: "Flexibilidade",
    text: "Capacidade de actuar em diversos sectores e de adaptar cada solução à realidade do cliente.",
  },
  {
    icon: TrendingUp,
    title: "Visão de longo prazo",
    text: "Foco em sustentabilidade e em relações de parceria duradouras, não em soluções pontuais.",
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

export default function WhyIDS() {
  return (
    <section className="relative overflow-hidden bg-background py-16 text-foreground transition-colors duration-300 md:py-20">
      <div className="relative z-10 mx-auto max-w-[1240px] px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-14 max-w-[600px]"
        >
          <span className="mb-6 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.3em] text-foreground dark:text-gold">
            <span className="h-px w-7 bg-primary dark:bg-gold" />
            Porquê a IDS
          </span>

          <h2 className="font-sans text-[clamp(32px,4.5vw,52px)] font-semibold leading-[1.05] tracking-tight">
            O que nos distingue
            <span className="gold-text block">no mercado.</span>
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={container}
          className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
        >
          {reasons.map(({ icon: Icon, title, text }) => (
            <motion.div
              key={title}
              variants={card}
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
              <p className="text-[14.5px] leading-relaxed text-muted-foreground">{text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}