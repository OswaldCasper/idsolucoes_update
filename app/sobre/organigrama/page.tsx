"use client";

import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import PageHeader from "@/components/PageHeader";

// ---------- DADOS (estrutura real, extraída do organigrama enviado) ----------

interface OrgGroup {
  title: string;
  items: string[];
}

interface OrgNode {
  id: string;
  title: string;
  functions?: string[];
  groups?: OrgGroup[];
}

const directorGeral: OrgNode = {
  id: "director-geral",
  title: "Director-Geral (CEO)",
};

const gabineteApoio: OrgNode[] = [
  { id: "assessoria-juridica", title: "Assessoria Jurídica" },
  { id: "auditoria-interna", title: "Auditoria Interna" },
  { id: "planeamento-estrategico", title: "Planeamento Estratégico" },
  { id: "comunicacao-marketing", title: "Comunicação e Marketing" },
];

const direcoes: OrgNode[] = [
  {
    id: "adm-financeira",
    title: "Dir. Adm. e Financeira",
    functions: ["Contabilidade", "Tesouraria", "Compras", "Património", "Logística"],
  },
  {
    id: "recursos-humanos",
    title: "Dir. Recursos Humanos",
    functions: [
      "Recrutamento e Selecção",
      "Cedência de Mão de Obra",
      "Administração de Pessoal",
      "Desenvolvimento e Formação",
    ],
  },
  {
    id: "comercial",
    title: "Dir. Comercial",
    functions: [
      "Vendas",
      "Atendimento ao Cliente",
      "Gestão de Contratos",
      "Desenvolvimento de Negócios",
    ],
  },
  {
    id: "operacoes",
    title: "Dir. Operações",
    groups: [
      {
        title: "Dept. Segurança Electrónica",
        items: ["Instalação", "Manutenção", "Monitorização", "Suporte Técnico"],
      },
      {
        title: "Dept. Manutenção Técnica",
        items: ["Equipamentos Eléctricos", "Equipamentos Electrónicos", "Infra-estruturas"],
      },
      {
        title: "Dept. Formação Profissional",
        items: [
          "Coordenação Pedagógica",
          "Desenvolvimento Curricular",
          "Gestão de Formadores",
          "Certificação",
        ],
      },
      {
        title: "Dept. Suporte Especializado",
        items: ["Assistência Técnica", "Help Desk", "Consultoria Técnica", "Suporte Técnico"],
      },
    ],
  },
  {
    id: "tecnologia",
    title: "Dir. Tecnologia (TI)",
    functions: ["Infra-estrutura", "Sistemas", "Redes", "Cibersegurança"],
  },
  {
    id: "qsa",
    title: "Dir. Qualidade e Segurança (QSA)",
    functions: ["Qualidade", "Saúde e Segurança no Trabalho", "Ambiente", "Gestão de Riscos"],
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
}: {
  node: OrgNode;
  variant?: "primary" | "secondary";
}) {
  const [open, setOpen] = useState(false);
  const expandable = Boolean(node.functions || node.groups);

  const styles: Record<string, string> = {
    primary: "border-gold/50 bg-card",
    secondary: "border-border bg-card",
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
        relative inline-block w-[200px] rounded-xl border p-4 text-left shadow-sm
        transition-colors duration-300 hover:border-gold/50
        ${styles[variant]}
        ${variant === "primary" ? "w-[240px] py-5" : ""}
        ${expandable ? "cursor-pointer" : ""}
      `}
    >
      <h3
        className={`font-semibold leading-snug text-foreground ${
          variant === "primary" ? "text-[15px]" : "text-[13px]"
        }`}
      >
        {node.title}
      </h3>

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
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0, marginTop: 0 }}
            animate={{ opacity: 1, height: "auto", marginTop: 10 }}
            exit={{ opacity: 0, height: 0, marginTop: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="overflow-hidden text-[12px] leading-relaxed text-muted-foreground"
          >
            {node.functions && (
              <ul className="space-y-1.5">
                {node.functions.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gold" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            )}

            {node.groups && (
              <div className="space-y-3">
                {node.groups.map((g) => (
                  <div key={g.title}>
                    <p className="text-[11.5px] font-semibold text-foreground">{g.title}</p>
                    <p className="mt-0.5">{g.items.join(", ")}</p>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ---------- LINHA DE LIGAÇÃO HORIZONTAL (CSS puro via Tailwind before/after) ----------

const branch = `
  relative pt-6
  before:absolute before:top-0 before:right-1/2 before:h-6 before:w-1/2 before:border-t before:border-border before:content-['']
  after:absolute after:top-0 after:left-1/2 after:h-6 after:w-1/2 after:border-l after:border-border after:content-['']
  first:before:border-none
  last:after:border-none
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
        description="Conheça a estrutura funcional e hierárquica que sustenta a operação da IDS."
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
            A estrutura da IDS é liderada pela Direcção-Geral, apoiada por um
            Gabinete de Apoio à Direcção com funções de assessoria jurídica,
            auditoria interna, planeamento estratégico e comunicação. A
            operação assenta em seis direcções funcionais, cada uma
            responsável por uma área específica da actividade da empresa.
          </motion.p>
        </div>
      </section>

      {/* ORGANIGRAMA */}
      <section className="bg-background pb-20 text-foreground transition-colors duration-300 md:pb-24">
        <div className="mx-auto max-w-[1240px] px-6 lg:px-8">
          <div className="overflow-x-auto py-4">
            <div className="flex min-w-max flex-col items-center">
              {/* CEO */}
              <OrgNodeCard node={directorGeral} variant="primary" />

              {/* ROW 1 — GABINETE DE APOIO */}
              <ul className={`mt-0 flex justify-center gap-3 ${stem}`}>
                {gabineteApoio.map((item) => (
                  <li key={item.id} className={branch}>
                    <OrgNodeCard node={item} variant="secondary" />
                  </li>
                ))}
              </ul>

              <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-gold">
                Gabinete de Apoio à Direcção
              </p>

              {/* conector entre as duas fiadas */}
              <div className="h-6 w-px bg-border" />

              {/* ROW 2 — DIRECÇÕES FUNCIONAIS */}
              <ul className={`mt-0 flex justify-center gap-3 ${stem}`}>
                {direcoes.map((dir) => (
                  <li key={dir.id} className={branch}>
                    <OrgNodeCard node={dir} variant="secondary" />
                  </li>
                ))}
              </ul>

              <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-gold">
                Direcções Funcionais
              </p>
            </div>
          </div>

          <p className="mt-10 text-center text-[13px] text-muted-foreground">
            Toque numa direcção funcional para ver as áreas que a compõem.
          </p>
        </div>
      </section>
    </>
  );
}