"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import {
  Camera,
  Bell,
  Flame,
  Fingerprint,
  KeyRound,
  Zap,
  ArrowLeftRight,
  Users,
  Compass,
  Wrench,
  Link2,
  LifeBuoy,
  ShieldCheck,
  Settings2,
  UserCog,
  Layers,
  Scale,
} from "lucide-react";
import PageHeader from "@/components/PageHeader";
import RelatedServices from "@/components/RelatedServices";

const solutions = [
  {
    icon: Camera,
    title: "CFTV — Videovigilância",
    desc: "Câmaras de vigilância e sistemas de gravação para monitorização permanente de espaços interiores e exteriores.",
  },
  {
    icon: Bell,
    title: "Sistemas de Intrusão",
    desc: "Detecção de acessos não autorizados através de sensores e centrais de alarme.",
  },
  {
    icon: Flame,
    title: "Sistemas de Detecção de Incêndio",
    desc: "Detectores, centrais e sinalização para alerta precoce e protecção de vidas e património.",
  },
  {
    icon: Fingerprint,
    title: "Biometria",
    desc: "Identificação por impressão digital ou reconhecimento facial para controlo rigoroso de acessos.",
  },
  {
    icon: KeyRound,
    title: "Controlo de Acessos e Assiduidade",
    desc: "Gestão de entradas e saídas e registo automático de presenças de colaboradores.",
  },
  {
    icon: Zap,
    title: "Cerca Eléctrica",
    desc: "Protecção perimetral dissuasora para reforço da segurança das instalações.",
  },
  {
    icon: ArrowLeftRight,
    title: "Cancelas e Barreiras",
    desc: "Controlo automatizado da circulação de viaturas em parques e acessos.",
  },
  {
    icon: Users,
    title: "Catracas e Portões Automáticos",
    desc: "Gestão ordenada do fluxo de pessoas e veículos.",
  },
];

const howWeWork = [
  { icon: Compass, title: "Estudo e dimensionamento", text: "Da solução adequada a cada espaço." },
  { icon: Wrench, title: "Fornecimento e instalação", text: "Instalação e configuração dos equipamentos." },
  { icon: Link2, title: "Integração", text: "Com sistemas já existentes nas instalações." },
  { icon: LifeBuoy, title: "Manutenção e suporte", text: "Preventiva, correctiva e suporte técnico contínuo." },
];

const benefits = [
  { icon: ShieldCheck, text: "Equipamentos certificados e fabricantes de referência." },
  { icon: Settings2, text: "Projectos adaptados à realidade de cada cliente." },
  { icon: UserCog, text: "Equipa técnica especializada." },
  { icon: Wrench, text: "Instalação, configuração e suporte contínuo." },
  { icon: Layers, text: "Soluções escaláveis para empresas e residências." },
  { icon: Scale, text: "Maior protecção de pessoas, património e operações." },
];

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function SegurancaElectronicaPage() {
  return (
    <main className="bg-background text-foreground">
      <PageHeader
        eyebrow="Serviços IDS"
        title="Segurança"
        titleAccent="Electrónica"
        description="Soluções completas de protecção para empresas, condomínios, instituições e residências, utilizando tecnologia moderna, equipamentos certificados e projectos adaptados à realidade de cada cliente."
        image="/Image_12.jpeg"
        imageAlt="Segurança electrónica IDS"
      />

      {/* INTRODUÇÃO */}
      <section className="bg-card/40 py-20 transition-colors duration-300 md:py-24">
        <div className="mx-auto max-w-[1240px] px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-[850px]"
          >
            <span className="mb-6 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.3em] text-foreground dark:text-gold">
              <span className="h-px w-7 bg-primary dark:bg-gold" />
              O Serviço
            </span>

            <h2 className="font-sans text-[clamp(32px,4vw,52px)] font-semibold leading-[1.1] tracking-tight">
              Protecção inteligente
              <span className="gold-text block">para pessoas e património</span>
            </h2>

            <p className="mt-8 text-[17px] leading-relaxed text-muted-foreground">
              Disponibilizamos soluções completas de segurança electrónica
              para empresas, condomínios, instituições e residências, com o
              objectivo de proteger pessoas, bens e instalações através de
              tecnologia fiável e devidamente integrada. Trabalhamos com
              equipamentos certificados e com fabricantes de referência,
              assegurando projectos robustos, escaláveis e adequados a cada
              realidade.
            </p>
          </motion.div>

          {/* COMO TRABALHAMOS */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            variants={container}
            className="relative mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
          >
            <div className="pointer-events-none absolute left-0 right-0 top-[22px] hidden h-px bg-border lg:block" />

            {howWeWork.map(({ icon: Icon, title, text }, index) => (
              <motion.div key={title} variants={item} className="relative text-center lg:text-left">
                <div className="relative z-10 mx-auto mb-5 flex h-11 w-11 items-center justify-center rounded-full border border-gold/40 bg-background text-gold lg:mx-0">
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                </div>

                <span className="mb-1 block text-[12px] font-semibold uppercase tracking-[0.15em] text-gold">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="mb-1 font-sans text-[15.5px] font-semibold">{title}</h3>
                <p className="text-[13.5px] leading-relaxed text-muted-foreground">{text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SOLUÇÕES */}
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
              Soluções Disponíveis
            </span>

            <h2 className="font-sans text-[clamp(32px,4vw,52px)] font-semibold leading-[1.1] tracking-tight">
              Tecnologias que reforçam
              <span className="gold-text block">a segurança do seu negócio</span>
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            variants={container}
            className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4"
          >
            {solutions.map(({ icon: Icon, title, desc }) => (
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
                  className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg border border-gold/30 bg-gold/10 text-foreground dark:text-gold"
                >
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                </motion.div>

                <h3 className="mb-3 font-sans text-[16px] font-semibold text-foreground transition-colors group-hover:text-gold">
                  {title}
                </h3>

                <p className="text-[14px] leading-relaxed text-muted-foreground">{desc}</p>
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

          {/* VANTAGEM PARA O CLIENTE */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mt-14 max-w-[950px] rounded-xl border-l-4 border-gold bg-card p-8 shadow-sm"
          >
            <h3 className="font-sans text-[22px] font-semibold text-foreground">
              Vantagem para o cliente
            </h3>

            <p className="mt-4 text-[17px] leading-relaxed text-muted-foreground">
              Uma única empresa responsável por todo o ciclo do projecto —
              desde o estudo inicial até à manutenção — garantindo{" "}
              <span className="font-semibold text-foreground">
                coerência técnica, rapidez de resposta e um único ponto de
                contacto.
              </span>
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
            Precisa de uma solução de
            <span className="gold-text block">Segurança Electrónica?</span>
          </h2>

          <p className="mt-6 text-muted-foreground">
            Solicite um levantamento técnico e receba uma proposta adaptada
            às necessidades da sua organização.
          </p>

          <div className="mt-10">
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className="inline-block">
              <Link href="/#contactos" className="btn btn-fill group relative">
                Pedir Levantamento Técnico
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
          { title: "Suporte Técnico Especializado", href: "/servicos/suporte-tecnico" },
          { title: "AVAC - Manutenção em Sistemas de Frio", href: "/servicos/avac" },
          { title: "Manutenção de Interiores - Estofos", href: "/servicos/estofos" },
          { title: "Recrutamento e Selecção", href: "/servicos/recrutamento-seleccao" },
        ]}
      />
    </main>
  );
}