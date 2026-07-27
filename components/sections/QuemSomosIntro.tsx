"use client";

import { motion, type Variants } from "framer-motion";

const paragraphs: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
};

export default function QuemSomosIntro() {
  return (
    <section className="relative overflow-hidden bg-background py-16 text-foreground transition-colors duration-300 md:py-20">
      <div className="pointer-events-none absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle,rgba(201,154,58,0.12)_0%,transparent_65%)]" />

      <div className="relative z-10 mx-auto max-w-[900px] px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={container}
          className="space-y-6"
        >
          <motion.span
            variants={paragraphs}
            className="mb-2 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.3em] text-foreground dark:text-gold"
          >
            <span className="h-px w-7 bg-primary dark:bg-gold" />
            A nossa história
          </motion.span>

          <motion.p variants={paragraphs} className="text-[17px] leading-relaxed text-muted-foreground">
            A IDS — Império Dourado Soluções nasceu da vontade de responder,
            de forma séria e estruturada, a três necessidades recorrentes do
            mercado angolano: segurança das instalações, capacitação de
            pessoas e acesso a mão de obra qualificada. Ao longo do nosso
            percurso, consolidámos uma estrutura capaz de acompanhar clientes
            de pequena, média e grande dimensão, com o mesmo nível de rigor
            técnico e proximidade humana.
          </motion.p>

          <motion.p variants={paragraphs} className="text-[17px] leading-relaxed text-muted-foreground">
            Hoje somos uma empresa multissectorial, mas mantemos uma lógica
            comum a tudo o que fazemos: entender o problema real do cliente
            antes de propor a solução. É essa abordagem que nos permite
            actuar tanto na instalação de sistemas de segurança electrónica
            de última geração, como na formação técnica e comportamental de
            equipas, ou na cedência de mão de obra especializada para
            projectos de curta e longa duração.
          </motion.p>

          <motion.p variants={paragraphs} className="text-[17px] leading-relaxed text-muted-foreground">
            Somos parceiros certificados de marcas de referência mundial em
            segurança electrónica — Dahua Technology e UNV — e detemos
            certificação INEFOP para as nossas formações profissionais, o que
            nos permite garantir qualidade reconhecida em cada serviço que
            prestamos.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}