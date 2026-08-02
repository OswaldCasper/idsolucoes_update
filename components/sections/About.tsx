"use client";

import { motion, type Variants } from "framer-motion";
import { Quote } from "lucide-react";

const whyIds = [
  {
    title: "Equipa jovem e altamente qualificada",
    text: "profissionais especializados e em formação contínua.",
  },
  {
    title: "Parcerias sólidas",
    text: "colaboração com instituições nacionais e internacionais e com fabricantes de referência.",
  },
  {
    title: "Conhecimento do contexto local",
    text: "domínio profundo do talento e da realidade do mercado angolano.",
  },
  {
    title: "Flexibilidade",
    text: "capacidade de actuar em diversos sectores e de adaptar a solução a cada cliente.",
  },
  {
    title: "Visão de longo prazo",
    text: "foco em sustentabilidade e em relações de parceria duradouras.",
  },
];

const listContainer: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

const listItem: Variants = {
  hidden: { opacity: 0, x: -16 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function About() {
  return (
    <section
      id="sobre"
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
      {/* brilho dourado ambiente — espelha o Hero, do lado oposto */}
      <div
        className="
          pointer-events-none
          absolute
          -left-40
          -bottom-40
          h-[600px]
          w-[600px]
          rounded-full
          bg-[radial-gradient(circle,rgba(201,154,58,0.12)_0%,transparent_65%)]
        "
      />

      <div className="relative z-10 mx-auto max-w-[1240px] px-6 lg:px-8">

        {/* TÍTULO DA SECÇÃO */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16"
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
            Sobre nós
          </span>

          <h2 className="max-w-[1200px] font-sans text-[clamp(36px,5vw,64px)] font-semibold leading-[1.05] tracking-tight">
            Pessoas, conhecimento e soluções para
            <span className="gold-text block">
              desenvolver Angola.
            </span>
          </h2>
        </motion.div>

        {/* MENSAGEM DO PRESIDENTE + CONTEÚDO */}
        <div className="grid items-start gap-16 lg:grid-cols-[0.9fr_1.1fr]">

          {/* MENSAGEM DO PRESIDENTE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="relative"
          >
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.4 }}
              className="relative overflow-hidden rounded-2xl border border-border bg-card p-8 shadow-xl md:p-10"
            >
              {/* linha dourada vertical */}
              <div className="absolute left-0 top-0 h-full w-1 bg-[image:var(--gold-grad)]" />

              <Quote className="mb-6 h-9 w-9 text-gold/30" strokeWidth={1.5} />

              <p className="font-sans text-[18.5px] italic leading-relaxed text-foreground md:text-[20px]">
                Acreditamos que o verdadeiro desenvolvimento de Angola passa
                por investir nas pessoas. Cada solução que entregamos carrega
                o nosso compromisso de capacitar, proteger e transformar, não
                só empresas, mas também as comunidades em que actuamos.
              </p>

              <div className="mt-8 flex items-center gap-4">
                <div className="h-px w-10 shrink-0 bg-gold" />
                <div>
                  <p className="font-sans text-[15px] font-semibold text-foreground">
                    Ribas Contreiras
                  </p>
                  <p className="text-[13px] text-muted-foreground">
                    Presidente da IDS — Império Dourado Soluções
                  </p>
                </div>
              </div>

              {/* overlay dourado subtil */}
              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  bg-gradient-to-tr
                  from-gold/5
                  via-transparent
                  to-transparent
                "
              />
            </motion.div>
          </motion.div>

          {/* TEXTO */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-6 max-w-[650px] text-[16.5px] leading-relaxed text-muted-foreground"
            >
              A IDS — Império Dourado Soluções é uma empresa angolana de prestação
              de serviços estratégicos, com actuação nas áreas de segurança
              electrónica, cedência de mão de obra (manpower), formação
              profissional, manutenção técnica e suporte especializado.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: 0.22 }}
              className="mb-10 max-w-[650px] text-[16.5px] leading-relaxed text-muted-foreground"
            >
              A nossa missão é capacitar pessoas e transformar o mercado angolano
              através de soluções práticas, humanas e sustentáveis.
            </motion.p>

            {/* PORQUÊ A IDS */}
            <div>
              <h3 className="mb-5 font-sans text-[20px] font-semibold">
                Porquê a IDS
              </h3>

              <motion.ul
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                variants={listContainer}
                className="space-y-4 text-[15px] leading-relaxed text-muted-foreground"
              >
                {whyIds.map(({ title, text }) => (
                  <motion.li
                    key={title}
                    variants={listItem}
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.25 }}
                    className="flex gap-3"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                    <span>
                      <strong className="font-semibold text-foreground">
                        {title}
                      </strong>{" "}
                      — {text}
                    </span>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}