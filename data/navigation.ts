import { MenuItem } from "@/types/menu";

const menu: MenuItem[] = [
  {
    id: 1,
    title: "Início",
    href: "/",
  },

  {
    id: 2,
    title: "Sobre Nós",
    children: [
      {
        id: 21,
        title: "Quem Somos",
        href: "/sobre/quem-somos",
      },
      {
        id: 22,
        title: "Organigrama",
        href: "/sobre/organigrama",
      },
      {
        id: 23,
        title: "Certificações",
        href: "/sobre/certificacoes",
      },
      {
        id: 24,
        title: "Parceiros",
        href: "/sobre/parceiros",
      },
    ],
  },

  {
    id: 3,
    title: "Serviços",
    children: [
      {
        id: 31,
        title: "Segurança Electrónica",
        href: "/servicos/seguranca-electronica",
      },
      {
        id: 32,
        title: "Manpower",
        href: "/servicos/manpower",
      },
      {
        id: 33,
        title: "Formação Profissional",
        href: "/servicos/formacao-profissional",
      },
      {
        id: 34,
        title: "AVAC",
        href: "/servicos/avac",
      },
      {
        id: 35,
        title: "Suporte Técnico",
        href: "/servicos/suporte-tecnico",
      },
      {
        id: 36,
        title: "Recrutamento & Selecção",
        href: "/servicos/recrutamento-seleccao",
      },
      {
        id: 37,
        title: "Estofos",
        href: "/servicos/estofos",
      },
    ],
  },

  {
    id: 4,
    title: "Projectos",
    children: [
      {
        id: 41,
        title: "FORTIS",
        href: "/brevemente",
      },
      {
        id: 42,
        title: "GESTIS",
        href: "/brevemente",
      },
    ],
  },

  {
    id: 5,
    title: "Contactos",
    href: "/contactos",
  },
];

export default menu;