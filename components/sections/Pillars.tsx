"use client";

import { motion } from "framer-motion";
import { Target, Eye, Gem } from "lucide-react";

const pillars = [
  {
    icon: Target,
    title: "Missão",
    text: "Capacitar talentos locais e transformar o mercado angolano com soluções inovadoras, humanas e sustentáveis.",
  },
  {
    icon: Eye,
    title: "Visão",
    text: "Ser uma referência nacional em serviços estratégicos, contribuindo activamente para o desenvolvimento de Angola.",
  },
  {
    icon: Gem,
    title: "Valores",
    values: [
      "Confiança",
      "Excelência",
      "Inovação",
      "Desenvolvimento humano",
      "Sustentabilidade",
      "Parceria",
      "Adaptabilidade",
    ],
  },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
};

const card = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Pillars() {
  return (
    <section
      id="pilares"
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
      {/* brilho dourado ambiente — mesmo padrão do Hero/About */}
      <div
        className="
          pointer-events-none
          absolute
          -right-40
          top-1/2
          h-[600px]
          w-[600px]
          -translate-y-1/2
          rounded-full
          bg-[radial-gradient(circle,rgba(201,154,58,0.12)_0%,transparent_65%)]
        "
      />

      <div className="relative z-10 mx-auto max-w-[1240px] px-6 lg:px-8">

        {/* TÍTULO */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16 max-w-[700px]"
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
            O que nos guia
          </span>

          <h2 className="font-sans text-[clamp(32px,4.5vw,52px)] font-semibold leading-[1.05] tracking-tight">
            Missão, visão e
            <span className="gold-text block">valores.</span>
          </h2>
        </motion.div>

        {/* CARDS */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={container}
          className="grid gap-6 md:grid-cols-3"
        >
          {pillars.map(({ icon: Icon, title, text, values }) => (
            <motion.div
              key={title}
              variants={card}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="
                group
                relative
                overflow-hidden
                rounded-xl
                border
                border-border
                bg-card
                p-7
                shadow-sm
                transition-colors
                duration-300
                hover:border-gold/50
                hover:shadow-[0_10px_30px_rgba(201,154,58,0.08)]
              "
            >
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

              {/* ÍCONE */}
              <motion.div
                whileHover={{ scale: 1.1, rotate: 4 }}
                transition={{ duration: 0.3 }}
                className="
                  mb-5
                  flex
                  h-12
                  w-12
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
                <Icon className="h-6 w-6" strokeWidth={1.75} />
              </motion.div>

              <h3 className="mb-3 font-sans text-[19px] font-semibold">
                {title}
              </h3>

              {text && (
                <p className="text-[15px] leading-relaxed text-muted-foreground">
                  {text}
                </p>
              )}

              {values && (
                <div className="flex flex-wrap gap-2">
                  {values.map((item) => (
                    <motion.span
                      key={item}
                      whileHover={{ scale: 1.06 }}
                      transition={{ duration: 0.2 }}
                      className="
                        border
                        border-border
                        px-3
                        py-1.5
                        text-[13px]
                        text-muted-foreground
                        transition-colors
                        duration-300
                        hover:border-gold
                        hover:text-gold
                      "
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}