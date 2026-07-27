"use client";

import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import PageHeader from "@/components/PageHeader";

// ---------- DADOS (fictícios, ajustar depois) ----------

interface OrgMember {
  name: string;
  role: string;
}

interface OrgNode {
  id: string;
  title: string;
  subtitle?: string;
  member?: OrgMember;
  description?: string;
}

const assembleiaGeral: OrgNode = {
  id: "assembleia-geral",
  title: "Assembleia Geral",
  subtitle: "Órgão máximo de decisão",
};

const conselhoFiscal: OrgNode = {
  id: "conselho-fiscal",
  title: "Conselho Fiscal",
  subtitle: "Órgão de fiscalização",
  description:
    "Verifica e valida de forma independente as contas da empresa todos os anos.",
};

const conselhoAdministracao: OrgNode = {
  id: "conselho-administracao",
  title: "Conselho de Administração",
  subtitle: "Órgão executivo",
};

const administracaoGeral: OrgNode = {
  id: "administracao-geral",
  title: "Administração Geral",
  member: { name: "Nome Fictício", role: "Administrador Geral" },
  description:
    "Coordena as seis direcções operacionais e reporta directamente ao Conselho de Administração.",
};

const departamentos: OrgNode[] = [
  {
    id: "seguranca-electronica",
    title: "Direcção de Segurança Electrónica",
    member: { name: "Nome Fictício", role: "Director" },
    description:
      "Projecto, instalação e manutenção de sistemas de segurança electrónica.",
  },
  {
    id: "manpower-recrutamento",
    title: "Direcção de Manpower & Recrutamento",
    member: { name: "Nome Fictício", role: "Directora" },
    description:
      "Cedência de mão-de-obra e recrutamento e selecção de perfis.",
  },
  {
    id: "formacao-profissional",
    title: "Direcção de Formação Profissional",
    member: { name: "Nome Fictício", role: "Director" },
    description:
      "Programas de capacitação técnica e comportamental certificados pelo INEFOP.",
  },
  {
    id: "direccao-tecnica",
    title: "Direcção Técnica",
    member: { name: "Nome Fictício", role: "Director" },
    description:
      "AVAC, suporte técnico especializado e manutenção de interiores de viaturas.",
  },
  {
    id: "administrativa-financeira",
    title: "Direcção Administrativa e Financeira",
    member: { name: "Nome Fictício", role: "Directora" },
    description: "Gestão financeira, contabilística e administrativa da empresa.",
  },
  {
    id: "recursos-humanos",
    title: "Direcção de Recursos Humanos",
    member: { name: "Nome Fictício", role: "Director" },
    description: "Gestão de talento, formação interna e bem-estar dos colaboradores.",
  },
];

// ---------- CARTÃO DE NÓ ----------

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 16, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4, ease: "easeOut" } },
};

function OrgNodeCard({
  node,
  variant = "secondary",
  expandable = false,
}: {
  node: OrgNode;
  variant?: "primary" | "secondary" | "advisory";
  expandable?: boolean;
}) {
  const [open, setOpen] = useState(false);

  const styles: Record<string, string> = {
    primary: "border-gold/40 bg-card",
    secondary: "border-border bg-card",
    advisory: "border-dashed border-border bg-card/60",
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.5 }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      onClick={() => expandable && setOpen((v) => !v)}
      className={`
        relative inline-block w-[210px] rounded-xl border p-4 text-left shadow-sm
        transition-colors duration-300 hover:border-gold/50
        ${styles[variant]}
        ${expandable ? "cursor-pointer" : ""}
      `}
    >
      <h3 className="text-[13.5px] font-semibold leading-snug text-foreground">
        {node.title}
      </h3>

      {node.subtitle && (
        <p className="mt-1 text-[12px] text-muted-foreground">{node.subtitle}</p>
      )}

      {node.member && (
        <p className="mt-2 text-[12.5px] font-medium text-foreground dark:text-gold">
          {node.member.name}
          <span className="block text-[11.5px] font-normal text-muted-foreground">
            {node.member.role}
          </span>
        </p>
      )}

      {expandable && (
        <button
          type="button"
          aria-label={open ? "Recolher detalhes" : "Expandir detalhes"}
          className="absolute -bottom-3 left-1/2 flex h-6 w-6 -translate-x-1/2 items-center justify-center rounded-full border border-gold/40 bg-background text-gold"
        >
          {open ? <Minus className="h-3 w-3" /> : <Plus className="h-3 w-3" />}
        </button>
      )}

      <AnimatePresence>
        {open && node.description && (
          <motion.p
            initial={{ opacity: 0, height: 0, marginTop: 0 }}
            animate={{ opacity: 1, height: "auto", marginTop: 10 }}
            exit={{ opacity: 0, height: 0, marginTop: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="overflow-hidden text-[12px] leading-relaxed text-muted-foreground"
          >
            {node.description}
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ---------- LINHAS DE LIGAÇÃO (CSS puro via Tailwind before/after) ----------

const branch = `
  relative pt-6
  before:absolute before:top-0 before:right-1/2 before:h-6 before:w-1/2 before:border-t before:border-border before:content-['']
  after:absolute after:top-0 after:left-1/2 after:h-6 after:w-1/2 after:border-l after:border-border after:content-['']
  first:before:border-none
  last:after:border-none
  only:before:hidden only:after:hidden
`;

const stem =
  "relative before:absolute before:-top-6 before:left-1/2 before:h-6 before:w-px before:border-l before:border-border before:content-['']";

// ---------- PÁGINA ----------

export default function OrganigramaPage() {
  return (
    <>
      <PageHeader
        eyebrow="Sobre a IDS"
        title="Estrutura"
        titleAccent="Organizacional"
        description="Conheça os órgãos de governação e as direcções que sustentam a operação da IDS."
        image="/Image_3.jpeg"
        imageAlt="Estrutura organizacional da IDS"
      />

      {/* TEXTO INTRODUTÓRIO */}
      <section className="bg-background py-16 text-foreground transition-colors duration-300 md:py-20">
        <div className="mx-auto max-w-[820px] px-6 text-center lg:px-8">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-[16.5px] leading-relaxed text-muted-foreground"
          >
            A IDS é composta pela Assembleia Geral, órgão máximo de decisão,
            coadjuvado pelo Conselho Fiscal — responsável pela fiscalização
            independente das contas — e pelo Conselho de Administração, que
            superintende a Administração Geral e as seis direcções
            operacionais da empresa.
          </motion.p>
        </div>
      </section>

      {/* ORGANIGRAMA */}
      <section className="bg-background pb-20 text-foreground transition-colors duration-300 md:pb-24">
        <div className="mx-auto max-w-[1240px] px-6 lg:px-8">
          <div className="overflow-x-auto py-4">
            <div className="flex min-w-max justify-center">
              <ul className="flex flex-col items-center text-center">
                <li>
                  <OrgNodeCard node={assembleiaGeral} variant="primary" />

                  <ul className={`mt-0 flex justify-center ${stem}`}>
                    <li className={branch}>
                      <OrgNodeCard node={conselhoFiscal} variant="advisory" expandable />
                    </li>

                    <li className={branch}>
                      <OrgNodeCard node={conselhoAdministracao} variant="secondary" />

                      <ul className={`mt-0 flex justify-center ${stem}`}>
                        <li className="relative pt-6 only:before:hidden only:after:hidden">
                          <OrgNodeCard
                            node={administracaoGeral}
                            variant="primary"
                            expandable
                          />

                          <ul className={`mt-0 flex justify-center gap-3 ${stem}`}>
                            {departamentos.map((dept) => (
                              <li key={dept.id} className={branch}>
                                <OrgNodeCard node={dept} variant="secondary" expandable />
                              </li>
                            ))}
                          </ul>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>

          <p className="mt-8 text-center text-[13px] text-muted-foreground">
            Toque num cargo para ver mais detalhes.
          </p>
        </div>
      </section>
    </>
  );
}