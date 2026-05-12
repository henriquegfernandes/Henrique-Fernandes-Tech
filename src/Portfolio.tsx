import React from "react";
import { motion } from "framer-motion";

import Logo from "./assets/logo.png";
import HorizontalLogo from "./assets//horizontal_logo.png";
import Profile from "./assets/profile.jpeg";
import Curriculo from "./assets/curriculo.pdf";
import Resume from "./assets/resume.pdf";

type IconName =
  | "github"
  | "linkedin"
  | "mail"
  | "whatsapp"
  | "external"
  | "folder"
  | "download"
  | "sun"
  | "code"
  | "shield"
  | "church"
  | "users"
  | "cross"
  | "heart"
  | "sparkles"
  | "menu"
  | "close";

type IconProps = {
  name: IconName;
  size?: number;
  className?: string;
};

type Project = {
  title: string;
  description: string;
  tech: string[];
  icon: IconName;
  url?: string;
  company?: string;
  period?: string;
  role?: string;
  kind: "github" | "professional";
  highlight?: boolean;
};

type ValueItem = {
  title: string;
  text: string;
  icon: IconName;
};

type NavItem = {
  label: string;
  href: string;
};

type ContactLink = {
  label: string;
  href: string;
  icon: IconName;
};

type SectionTitleProps = {
  eyebrow: string;
  title: string;
  subtitle?: string;
};

const Icon = ({ name, size = 20, className = "" }: IconProps) => {
  const commonProps: React.SVGProps<SVGSVGElement> = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className,
    "aria-hidden": true,
  };

  const icons: Record<IconName, React.ReactElement> = {
    github: (
      <svg {...commonProps}>
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5a10.9 10.9 0 0 0-6 0C8 2 7 2 7 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 6 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
        <path d="M9 18c-4.51 2-5-2-7-2" />
      </svg>
    ),
    linkedin: (
      <svg {...commonProps}>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
    mail: (
      <svg {...commonProps}>
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
    whatsapp: (
      <svg {...commonProps}>
        <path d="M3 21l1.65-4.6A9 9 0 1 1 8 19.15L3 21z" />
        <path d="M9 10.5c.3 1.8 1.7 3.2 3.5 3.5l1.2-1.2c.2-.2.5-.3.8-.2.9.3 1.7.4 2.5.4.5 0 1 .5 1 1v1.8c0 .5-.5 1-1 1A10 10 0 0 1 7 6.8c0-.5.5-1 1-1h1.8c.5 0 1 .5 1 1 0 .8.1 1.6.4 2.5.1.3 0 .6-.2.8l-1.2 1.2z" />
      </svg>
    ),
    external: (
      <svg {...commonProps}>
        <path d="M15 3h6v6" />
        <path d="M10 14 21 3" />
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      </svg>
    ),
    folder: (
      <svg {...commonProps}>
        <path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      </svg>
    ),
    download: (
      <svg {...commonProps}>
        <path d="M12 3v12" />
        <path d="m7 10 5 5 5-5" />
        <path d="M5 21h14" />
      </svg>
    ),
    sun: (
      <svg {...commonProps}>
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2" />
        <path d="M12 20v2" />
        <path d="m4.93 4.93 1.41 1.41" />
        <path d="m17.66 17.66 1.41 1.41" />
        <path d="M2 12h2" />
        <path d="M20 12h2" />
        <path d="m6.34 17.66-1.41 1.41" />
        <path d="m19.07 4.93-1.41 1.41" />
      </svg>
    ),
    code: (
      <svg {...commonProps}>
        <path d="m16 18 6-6-6-6" />
        <path d="m8 6-6 6 6 6" />
      </svg>
    ),
    shield: (
      <svg {...commonProps}>
        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.7a1.17 1.17 0 0 1 1.52 0C14.51 3.8 17 5 19 5a1 1 0 0 1 1 1z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
    church: (
      <svg {...commonProps}>
        <path d="M12 2v5" />
        <path d="M9 5h6" />
        <path d="M5 22V11l7-4 7 4v11" />
        <path d="M9 22v-6a3 3 0 0 1 6 0v6" />
        <path d="M2 22h20" />
      </svg>
    ),
    users: (
      <svg {...commonProps}>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    cross: (
      <svg {...commonProps}>
        <path d="M12 2v20" />
        <path d="M6 8h12" />
      </svg>
    ),
    heart: (
      <svg {...commonProps}>
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
      </svg>
    ),
    sparkles: (
      <svg {...commonProps}>
        <path d="M12 3 10 9l-6 2 6 2 2 6 2-6 6-2-6-2-2-6z" />
        <path d="M19 2v4" />
        <path d="M21 4h-4" />
      </svg>
    ),
    menu: (
      <svg {...commonProps}>
        <path d="M3 12h18" />
        <path d="M3 6h18" />
        <path d="M3 18h18" />
      </svg>
    ),
    close: (
      <svg {...commonProps}>
        <path d="M18 6 6 18" />
        <path d="M6 6l12 12" />
      </svg>
    ),
  };

  return icons[name];
};

const projects: Project[] = [
  {
    title: "Dízimo",
    company: "Projeto Autônomo",
    role: "Desenvolvido em 2026",
    description:
      "Sistema para gestão de dízimo e ofertas, pensado para ajudar paróquias a se organizarem e servirem melhor seus fiéis.",
    tech: ["C#", "ASP.NET Core", "MySQL", "Bootstrap"],
    url: "https://github.com/henriquegfernandes/Dizimo",
    icon: "church",
    kind: "github",
    highlight: true,
  },
  {
    title: "ReciclaLead CRM",
    company: "ReciclaLead",
    period: "Abr/2024 — Mai/2025",
    role: "Desenvolvedor Full Stack",
    description:
      "Sistema de CRM e integrações para gestão de leads, acompanhamento comercial e automação de processos. Atuação full stack no desenvolvimento, sustentação e evolução da plataforma.",
    tech: ["Python", "Django", "React", "PostgreSQL", "Docker", "Integrações"],
    icon: "users",
    kind: "professional",
  },
  {
    title: "Mr. Sales CRM",
    company: "UsadosBR",
    period: "Jul/2022 — Jul/2023",
    role: "Desenvolvedor Back-End",
    description:
      "Produto SaaS de CRM voltado ao setor automotivo. Atuação no desenvolvimento e sustentação da API, apoiando funcionalidades comerciais e integrações usadas por lojas e concessionárias.",
    tech: ["C#", ".NET", "APIs REST", "SQL Server", "SaaS", "CRM"],
    icon: "shield",
    kind: "professional",
  },
  {
    title: "DsAutoEstoque",
    company: "UsadosBR",
    period: "Jul/2022 — Jul/2023",
    role: "Desenvolvedor Back-End",
    description:
      "Integrador de anúncios para lojas e concessionárias automotivas, conectando estoque de veículos a canais de divulgação e ajudando empresas a manter seus anúncios atualizados.",
    tech: ["C#", ".NET", "APIs", "Integrações", "SQL Server", "Automotivo"],
    icon: "code",
    kind: "professional",
  },
  {
    title: "StockSolutions",
    company: "Projeto autônomo",
    period: "Jul/2023 — Abr/2024",
    role: "Desenvolvedor Full Stack Autônomo",
    description:
      "Projeto de vitrine digital e gestão de estoque para lojas, com foco em exposição de produtos, organização de catálogo e apoio ao processo comercial online.",
    tech: ["React", "TypeScript", ".NET", "SQL", "E-commerce", "Gestão de estoque"],
    icon: "folder",
    kind: "professional",
  },
  {
    title: "CRUD MVC Repository",
    company: "Projeto Autônomo",
    role: "Desenvolvido em 2022",
    description:
      "Aplicação CRUD com arquitetura MVC e padrão Repository, aplicando boas práticas e separação de responsabilidades.",
    tech: ["C#", "ASP.NET MVC", "Entity Framework"],
    url: "https://github.com/henriquegfernandes/CRUD-MVC-Repository",
    icon: "code",
    kind: "github",
  },
];

const services: ValueItem[] = [
  {
    icon: "code",
    title: "Sistemas Web",
    text: "Aplicações modernas, responsivas e pensadas para resolver problemas reais do dia a dia.",
  },
  {
    icon: "shield",
    title: "APIs e Backend",
    text: "Criação de APIs, autenticação, regras de negócio, integrações e estrutura de dados.",
  },
  {
    icon: "church",
    title: "Projetos Católicos",
    text: "Soluções para paróquias, pastorais, comunidades e instituições que precisam ir mais longe.",
  },
];

const values: ValueItem[] = [
  { title: "Justiça", text: "Fazer o certo, com integridade e respeito ao próximo.", icon: "shield" },
  { title: "Humildade", text: "Reconhecer minhas limitações e estar sempre disposto a aprender.", icon: "users" },
  { title: "Obediência a Deus", text: "Colocar a vontade de Deus acima de tudo.", icon: "cross" },
  { title: "Caridade", text: "Amar e servir ao próximo através da tecnologia.", icon: "heart" },
];

const technologies: string[] = [
  "React",
  "Vite",
  "Tailwind",
  "TypeScript",
  "C#",
  ".NET",
  "ASP.NET Core",
  "Entity Framework",
  "SQL",
  "APIs REST",
  "Git",
  "Docker",
];

const navItems: NavItem[] = [
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Projetos", href: "#projetos" },
  { label: "Valores", href: "#valores" },
  { label: "Tecnologias", href: "#tecnologias" },
  { label: "Contato", href: "#contato" },
];

const contactLinks: ContactLink[] = [
  { label: "GitHub", href: "https://github.com/henriquegfernandes", icon: "github" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/henrique-fernandes-586537111", icon: "linkedin" },
  { label: "E-mail", href: "mailto:contato@henriquefernandes.dev", icon: "mail" },
  { label: "WhatsApp", href: "https://wa.me/5511957804108", icon: "whatsapp" },
];

function validatePortfolioData() {
  return {
    hasProjects: projects.length >= 3,
    publicProjectsHaveUrls: projects.filter((project) => project.kind === "github").every((project) => Boolean(project.url)),
    allProjectsHaveTechs: projects.every((project) => project.tech.length > 0),
    hasServices: services.length === 3,
    hasValues: values.length === 4,
    hasContactLinks: contactLinks.length === 4,
    hasLogo: Boolean(Logo),
    hasProfilePhoto: Boolean(Profile),
  };
}

const tests = validatePortfolioData();
console.assert(tests.hasProjects, "Deve existir pelo menos três projetos no portfólio.");
console.assert(tests.publicProjectsHaveUrls, "Todos os projetos públicos devem ter uma URL.");
console.assert(tests.allProjectsHaveTechs, "Todos os projetos devem listar tecnologias.");
console.assert(tests.hasServices, "Devem existir três serviços principais.");
console.assert(tests.hasValues, "Devem existir quatro valores principais.");
console.assert(tests.hasContactLinks, "Devem existir quatro formas de contato.");
console.assert(tests.hasLogo, "A logo deve estar configurada.");
console.assert(tests.hasProfilePhoto, "A foto de perfil deve estar configurada.");

const translations = {
  pt: {
    nav: {
      sobre: "Sobre",
      servicos: "Serviços",
      projetos: "Projetos",
      valores: "Valores",
      tecnologias: "Tecnologias",
      contato: "Contato",
    },
    hero: {
      greeting: "Olá, eu sou",
      title: "Henrique Fernandes",
      subtitle: "Desenvolvedor de Sistemas",
      description:
        "Desenvolvedor Full Stack atuando na área desde 2022, formado na prática entre Back-End, Front-End e projetos reais. Uso a tecnologia para criar soluções úteis, bem estruturadas e com propósito: ajudar pessoas, negócios, a Igreja e instituições católicas a irem mais longe.",
      downloadCV: "Baixar Currículo",
      seeProjects: "Ver meus projetos",
    },
    about: {
      eyebrow: "Sobre",
      title: "Quem sou eu",
      subtitle: "Um desenvolvedor movido por propósito e valores.",
      sectionTitle: "Tecnologia como vocação",
      p1: "Sou Desenvolvedor Full Stack e atuo na área desde 2022, iniciando minha trajetória como Back-End e expandindo para o Front-End ao atuar também como desenvolvedor autônomo. Tenho experiência com desenvolvimento web, APIs, integrações, sistemas de CRM, gestão de estoque e aplicações orientadas a boas práticas de código.",
      p2: "A marca nasce da união entre futuro e tradição: tecnologia moderna, valores antigos e uma missão simples — fazer bem feito, servir com honestidade e transformar necessidades reais em soluções úteis. Sou movido por desafios, aprendizado constante e pela busca de soluções que sejam ao mesmo tempo técnicas, humanas e responsáveis.",
      p3: "Assim como Carlo Acutis usou os meios digitais para evangelizar, busco usar a tecnologia para espalhar o bem: não necessariamente pregando com palavras, mas ajudando o próximo, fortalecendo a missão da Santa Igreja e criando soluções que aumentem o alcance de boas iniciativas. Como devoto de São José, carrego como inspiração a justiça, a humildade e a obediência a Deus.",
    },
    services: {
      eyebrow: "Serviços",
      title: "Soluções digitais com propósito",
      subtitle: "Desenvolvimento de sistemas para quem precisa organizar processos, ganhar alcance e servir melhor.",
      items: [
        {
          title: "Sistemas Web",
          text: "Aplicações modernas, responsivas e pensadas para resolver problemas reais do dia a dia.",
        },
        {
          title: "APIs e Backend",
          text: "Criação de APIs, autenticação, regras de negócio, integrações e estrutura de dados.",
        },
        {
          title: "Projetos Católicos",
          text: "Soluções para paróquias, pastorais, comunidades e instituições que precisam ir mais longe.",
        },
      ],
    },
    projects: {
      eyebrow: "Projetos em destaque",
      title: "Soluções que geram impacto",
      subtitle:
        "Experiências profissionais e projetos públicos que mostram minha atuação em CRM, integrações, APIs, gestão de estoque e sistemas sob medida.",
      highlight: "Destaque",
      professional: "Experiência profissional",
      github: "GitHub",
      viewProject: "Ver projeto",
      items: [
        {
          title: "Dízimo",
          company: "Projeto Autônomo",
          role: "Desenvolvido em 2026",
          description: "Sistema para gestão de dízimo e ofertas, pensado para ajudar paróquias a se organizarem e servirem melhor seus fiéis.",
          tech: ["C#", "ASP.NET Core", "MySQL", "Bootstrap"],
          url: "https://github.com/henriquegfernandes/Dizimo",
          icon: "church",
          kind: "github",
          highlight: true,
        },
        {
          title: "ReciclaLead CRM",
          company: "ReciclaLead",
          period: "Abr/2024 — Mai/2025",
          role: "Desenvolvedor Full Stack",
          description: "Sistema de CRM e integrações para gestão de leads, acompanhamento comercial e automação de processos. Atuação full stack no desenvolvimento, sustentação e evolução da plataforma.",
          tech: ["Python", "Django", "React", "PostgreSQL", "Docker", "Integrações"],
          icon: "users",
          kind: "professional",
        },
        {
          title: "Mr. Sales CRM",
          company: "UsadosBR",
          period: "Jul/2022 — Jul/2023",
          role: "Desenvolvedor Back-End",
          description: "Produto SaaS de CRM voltado ao setor automotivo. Atuação no desenvolvimento e sustentação da API, apoiando funcionalidades comerciais e integrações usadas por lojas e concessionárias.",
          tech: ["C#", ".NET", "APIs REST", "SQL Server", "SaaS", "CRM"],
          icon: "shield",
          kind: "professional",
        },
        {
          title: "DsAutoEstoque",
          company: "UsadosBR",
          period: "Jul/2022 — Jul/2023",
          role: "Desenvolvedor Back-End",
          description: "Integrador de anúcios para lojas e concessionárias automotivas, conectando estoque de veículos a canais de divulgação e ajudando empresas a manter seus anúcios atualizados.",
          tech: ["C#", ".NET", "APIs", "Integrações", "SQL Server", "Automotivo"],
          icon: "code",
          kind: "professional",
        },
        {
          title: "StockSolutions",
          company: "Projeto autônomo",
          period: "Jul/2023 — Abr/2024",
          role: "Desenvolvedor Full Stack Autônomo",
          description: "Projeto de vitrine digital e gestão de estoque para lojas, com foco em exposição de produtos, organização de catálogo e apoio ao processo comercial online.",
          tech: ["React", "TypeScript", ".NET", "SQL", "E-commerce", "Gestão de estoque"],
          icon: "folder",
          kind: "professional",
        },
        {
          title: "CRUD MVC Repository",
          company: "Projeto Autônomo",
          role: "Desenvolvido em 2022",
          description: "Aplicação CRUD com arquitetura MVC e padrão Repository, aplicando boas práticas e separação de responsabilidades.",
          tech: ["C#", "ASP.NET MVC", "Entity Framework"],
          url: "https://github.com/henriquegfernandes/CRUD-MVC-Repository",
          icon: "code",
          kind: "github",
        },
      ],
    },
    values: {
      eyebrow: "Princípios",
      title: "Valores que me guiam",
      subtitle: "A base ética e espiritual que fundamenta todo o meu trabalho.",
      items: [
        { title: "Justiça", text: "Fazer o certo, com integridade e respeito ao próximo." },
        { title: "Humildade", text: "Reconhecer minhas limitações e estar sempre disposto a aprender." },
        { title: "Obediência a Deus", text: "Colocar a vontade de Deus acima de tudo." },
        { title: "Caridade", text: "Amar e servir ao próximo através da tecnologia." },
      ],
    },
    technologies: {
      eyebrow: "Tecnologias",
      title: "Ferramentas que uso para construir",
      subtitle: "Uma base prática para criar sistemas seguros, organizados e preparados para crescer.",
    },
    contact: {
      title: "Vamos construir algo com propósito?",
      description:
        "Seja para sua empresa, pastoral, comunidade ou instituição, posso ajudar a transformar uma necessidade real em uma solução simples, bonita e funcional.",
    },
    footer: "Tecnologia para integrar, fé para transformar.",
  },
  en: {
    nav: {
      sobre: "About",
      servicos: "Services",
      projetos: "Projects",
      valores: "Values",
      tecnologias: "Tech Stack",
      contato: "Contact",
    },
    hero: {
      greeting: "Hi, I'm",
      title: "Henrique Fernandes",
      subtitle: "Systems Developer",
      description:
        "Full Stack Developer working in the field since 2022, shaped by real-world Back-End, Front-End, and custom software projects. I use technology to build useful, well-structured, purpose-driven solutions that help people, businesses, the Church, and Catholic institutions go further.",
      downloadCV: "Download Resume",
      seeProjects: "See my projects",
    },
    about: {
      eyebrow: "About",
      title: "Who am I",
      subtitle: "A developer driven by purpose and values.",
      sectionTitle: "Technology as a vocation",
      p1: "I am a Full Stack Developer working in the field since 2022, starting my career in Back-End and expanding into Front-End while also working as an independent developer. I have experience with web development, APIs, integrations, CRM systems, inventory management, and applications guided by good coding practices.",
      p2: "The brand is born from the union of future and tradition: modern technology, old values, and a simple mission — do it right, serve with honesty, and transform real needs into useful solutions. I am driven by challenges, continuous learning, and the pursuit of solutions that are technical, human, and responsible.",
      p3: "Just as Carlo Acutis used digital media to evangelize, I seek to use technology to spread goodness: not necessarily preaching with words, but helping others, strengthening the mission of the Holy Church, and creating solutions that expand the reach of good initiatives. As a devotee of Saint Joseph, I carry justice, humility, and obedience to God as inspiration.",
    },
    services: {
      eyebrow: "Services",
      title: "Digital solutions with purpose",
      subtitle: "System development for those who need to organize processes, gain reach, and serve better.",
      items: [
        {
          title: "Web Systems",
          text: "Modern, responsive applications designed to solve real everyday problems.",
        },
        {
          title: "APIs & Backend",
          text: "Creation of APIs, authentication, business logic, integrations, and data structure.",
        },
        {
          title: "Catholic Projects",
          text: "Solutions for parishes, pastoral initiatives, communities, and institutions that need to go further.",
        },
      ],
    },
    projects: {
      eyebrow: "Featured Projects",
      title: "Solutions that generate impact",
      subtitle:
        "Professional experiences and public projects that showcase my work in CRM, integrations, APIs, inventory management, and custom systems.",
      highlight: "Highlight",
      professional: "Professional experience",
      github: "GitHub",
      viewProject: "View project",
      items: [
        {
          title: "Tithe System",
          company: "Independent Project",
          role: "Developed in 2026",
          description: "A system for managing tithes and offerings, designed to help parishes organize themselves and better serve their faithful.",
          tech: ["C#", "ASP.NET Core", "MySQL", "Bootstrap"],
          url: "https://github.com/henriquegfernandes/Dizimo",
          icon: "church",
          kind: "github",
          highlight: true,
        },
        {
          title: "ReciclaLead CRM",
          company: "ReciclaLead",
          period: "Apr/2024 — May/2025",
          role: "Full Stack Developer",
          description: "A CRM and integration system for lead management, commercial monitoring, and process automation. Full-stack participation in platform development, maintenance, and evolution.",
          tech: ["Python", "Django", "React", "PostgreSQL", "Docker", "Integrations"],
          icon: "users",
          kind: "professional",
        },
        {
          title: "Mr. Sales CRM",
          company: "UsadosBR",
          period: "Jul/2022 — Jul/2023",
          role: "Back-End Developer",
          description: "A SaaS CRM product focused on the automotive sector. Participation in API development and maintenance, supporting commercial features and integrations used by dealers and dealerships.",
          tech: ["C#", ".NET", "APIs REST", "SQL Server", "SaaS", "CRM"],
          icon: "shield",
          kind: "professional",
        },
        {
          title: "DsAutoEstoque",
          company: "UsadosBR",
          period: "Jul/2022 — Jul/2023",
          role: "Back-End Developer",
          description: "An ad integrator for automotive dealers and concessionaires, connecting vehicle inventory to advertising channels and helping businesses keep their listings updated.",
          tech: ["C#", ".NET", "APIs", "Integrations", "SQL Server", "Automotive"],
          icon: "code",
          kind: "professional",
        },
        {
          title: "StockSolutions",
          company: "Independent Project",
          period: "Jul/2023 — Apr/2024",
          role: "Independent Full Stack Developer",
          description: "A digital storefront and inventory management project for stores, focused on product display, catalog organization, and support for online sales processes.",
          tech: ["React", "TypeScript", ".NET", "SQL", "E-commerce", "Inventory Management"],
          icon: "folder",
          kind: "professional",
        },
        {
          title: "CRUD MVC Repository",
          company: "Independent Project",
          role: "Developed in 2022",
          description: "A CRUD application with MVC architecture and Repository pattern, applying best practices and separation of concerns.",
          tech: ["C#", "ASP.NET MVC", "Entity Framework"],
          url: "https://github.com/henriquegfernandes/CRUD-MVC-Repository",
          icon: "code",
          kind: "github",
        },
      ],
    },
    values: {
      eyebrow: "Principles",
      title: "Values that guide me",
      subtitle: "The ethical and spiritual foundation that underpins all my work.",
      items: [
        { title: "Justice", text: "Do the right thing with integrity and respect for others." },
        { title: "Humility", text: "Recognize my limitations and always be willing to learn." },
        { title: "Obedience to God", text: "Put God's will above all else." },
        { title: "Charity", text: "Love and serve others through technology." },
      ],
    },
    technologies: {
      eyebrow: "Technologies",
      title: "Tools I use to build",
      subtitle: "A practical foundation for creating secure, organized systems ready to grow.",
    },
    contact: {
      title: "Let's build something with purpose?",
      description:
        "Whether for your company, pastoral, community, or institution, I can help transform a real need into a simple, beautiful, and functional solution.",
    },
    footer: "Technology to unite, faith to transform.",
  },
};

const SectionTitle = ({ eyebrow, title, subtitle }: SectionTitleProps) => (
  <div className="mx-auto max-w-3xl text-center">
    <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#d6a354]">{eyebrow}</p>
    <h2 className="section-title text-white md:text-5xl lg:text-5xl">{title}</h2>
    {subtitle ? <p className="mt-4 text-white/80 leading-relaxed">{subtitle}</p> : null}
  </div>
);

const detectLanguage = (): "pt" | "en" => {
  const browserLang = navigator.language || (navigator as any).userLanguage;
  return browserLang.startsWith("pt") ? "pt" : "en";
};

export default function PortfolioHenriqueFernandes() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [language, setLanguage] = React.useState<"pt" | "en">(detectLanguage());
  const t = translations[language];

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleLanguage = () => setLanguage(language === "pt" ? "en" : "pt");

  return (
    <main
      id="inicio"
      className="relative min-h-screen overflow-hidden bg-[#031428] text-white selection:bg-[#d6a354] selection:text-[#031428]"
    >
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_10%,rgba(214,163,84,.18),transparent_28%),radial-gradient(circle_at_80%_20%,rgba(255,255,255,.08),transparent_18%),linear-gradient(180deg,#031428_0%,#051c35_45%,#031428_100%)]" />
        <div className="absolute bottom-0 left-0 h-80 w-full bg-[linear-gradient(90deg,rgba(214,163,84,.08)_1px,transparent_1px),linear-gradient(rgba(214,163,84,.05)_1px,transparent_1px)] bg-[size:48px_48px] opacity-30" />
      </div>

      <header className="sticky top-0 z-40 bg-[#031428]/90 backdrop-blur-xl rounded-b-3xl shadow-lg shadow-black/30 mx-3 md:mx-4 lg:mx-5">
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-2 px-4 py-3 sm:gap-4 sm:px-5 md:py-4 lg:gap-6">
          <a href="#inicio" className="flex items-center gap-2 sm:gap-3" aria-label="Henrique Fernandes Tech">
            <img src={HorizontalLogo} alt="Henrique Fernandes Tech" className="h-8 w-auto object-contain sm:h-10 md:h-12 lg:h-16" />
          </a>
          <div className="hidden items-center gap-4 sm:gap-6 md:flex lg:gap-8">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-xs font-medium text-white transition hover:text-[#d6a354] sm:text-sm lg:text-base">
                {t.nav[item.label.toLowerCase() as keyof typeof t.nav] || item.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={toggleLanguage}
              className="hidden rounded-full border border-[#d6a354]/50 p-2 text-[#d6a354] sm:inline-flex hover:bg-[#d6a354]/10 transition"
              aria-label="Toggle language"
              title={language === "pt" ? "Switch to English" : "Mudar para Português"}
            >
              <span className="text-sm font-bold">{language.toUpperCase()}</span>
            </button>
            <button
              type="button"
              className="md:hidden inline-flex rounded-full border border-[#d6a354]/50 p-2 text-[#d6a354]"
              aria-label="Menu"
              onClick={toggleMenu}
            >
              <Icon name={menuOpen ? "close" : "menu"} size={20} />
            </button>
          </div>
        </nav>

        {/* Menu Mobile */}
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden border-t border-white/10 bg-[#031428] px-4 py-4"
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-white transition hover:text-[#d6a354]"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </header>

      <section className="relative z-10 border-b border-white/10 px-3 py-10 sm:px-5 sm:py-14 md:px-6 md:py-18 lg:py-24">
        <div className="absolute inset-0 opacity-25 [background-image:radial-gradient(circle_at_center,rgba(214,163,84,.18)_1px,transparent_1px)] [background-size:28px_28px]" />
        <div className="relative mx-auto max-w-7xl flex flex-col-reverse items-center gap-8 sm:gap-10 md:gap-12 lg:grid lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-center lg:text-left">
            <p className="text-base sm:text-lg md:text-xl text-[#d6a354]">{t.hero.greeting}</p>
            <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">{t.hero.title}</h1>
            <p className="mt-3 text-lg sm:text-xl font-semibold text-[#d6a354] md:text-2xl lg:text-3xl">{t.hero.subtitle}</p>
            <p className="mx-auto mt-5 sm:mt-6 md:mt-7 max-w-2xl text-sm sm:text-base md:text-lg leading-6 sm:leading-7 md:leading-8 text-white/85 lg:mx-0">
              {t.hero.description}
            </p>
            <div className="mt-6 sm:mt-8 flex flex-col gap-3 sm:gap-4 sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start">
              <a href={language === "pt" ? Curriculo : Resume} className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#f0c16e] to-[#b6792e] px-5 py-2.5 sm:px-6 sm:py-3 text-sm sm:text-base font-semibold text-[#031428] shadow-lg shadow-black/25 transition hover:brightness-110">
                <Icon name="download" size={16} className="sm:w-[18px]" /> {t.hero.downloadCV}
              </a>
              <a href="#projetos" className="inline-flex items-center justify-center gap-2 rounded-full border border-[#d6a354] px-5 py-2.5 sm:px-6 sm:py-3 text-sm sm:text-base font-semibold text-[#d6a354] transition hover:bg-[#d6a354] hover:text-[#031428]">
                <Icon name="folder" size={16} className="sm:w-[18px]" /> {t.hero.seeProjects}
              </a>
            </div>
            <div className="mt-6 sm:mt-8 md:mt-9 flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-5 lg:justify-start">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                  className="inline-flex items-center gap-2 text-white transition hover:text-[#d6a354]"
                >
                  <Icon name={link.icon} size={18} className="sm:w-[22px]" /> <span className="hidden sm:inline">{link.label}</span>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.12 }} className="relative flex min-h-[240px] items-center justify-center sm:min-h-[300px] md:min-h-[360px] lg:min-h-[420px]">
            <div className="absolute h-44 w-44 rounded-full border border-[#d6a354]/30 sm:h-56 sm:w-56 md:h-72 md:w-72 lg:h-80 lg:w-80 xl:h-[380px] xl:w-[380px]" />
            <div className="absolute h-52 w-52 rounded-full border border-white/15 sm:h-64 sm:w-64 md:h-80 md:w-80 lg:h-96 lg:w-96" />
            <div className="absolute h-60 w-60 rounded-full bg-[radial-gradient(circle,rgba(214,163,84,.24),transparent_60%)] blur-sm sm:h-72 sm:w-72 md:h-96 md:w-96" />
            <div className="relative z-10 rounded-full border border-[#d6a354]/45 bg-[#06172d] p-1.5 sm:p-2 md:p-3 shadow-2xl shadow-black/40">
              <img
                src={Profile}
                alt="Foto de perfil de Henrique Fernandes"
                className="h-44 w-44 rounded-full object-cover object-center sm:h-56 sm:w-56 md:h-72 md:w-72 lg:h-80 lg:w-80 xl:h-[360px] xl:w-[360px]"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <section id="sobre" className="relative z-10 border-y border-white/10 bg-[#04172d] px-3 py-12 sm:px-5 sm:py-16 md:py-20">
        <SectionTitle eyebrow={t.about.eyebrow} title={t.about.title} subtitle={t.about.subtitle} />
        <div className="mx-auto mt-8 sm:mt-10 md:mt-12 max-w-3xl">
          <div className="rounded-2xl sm:rounded-3xl border border-[#d6a354]/35 bg-[#08213f]/95 p-5 sm:p-6 md:p-8 shadow-xl shadow-black/20 backdrop-blur text-center">
            <Icon name="sparkles" size={28} className="sm:w-[34px] text-[#d6a354] mx-auto" />
            <h2 className="mt-4 sm:mt-5 text-2xl sm:text-3xl font-bold">{t.about.sectionTitle}</h2>
            <p className="mt-4 sm:mt-5 text-sm sm:text-base leading-6 sm:leading-8 text-white/85">
              {t.about.p1}
            </p>
            <p className="mt-4 sm:mt-5 text-sm sm:text-base leading-6 sm:leading-8 text-white/85">
              {t.about.p2}
            </p>
            <p className="mt-4 sm:mt-5 text-sm sm:text-base leading-6 sm:leading-8 text-white/85">
              {t.about.p3}
            </p>
          </div>
        </div>
      </section>

      <section id="servicos" className="relative z-10 px-3 py-12 sm:px-5 sm:py-16 md:py-20">
        <SectionTitle eyebrow={t.services.eyebrow} title={t.services.title} subtitle={t.services.subtitle} />
        <div className="mx-auto mt-8 sm:mt-10 md:mt-12 grid max-w-7xl gap-4 sm:gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {t.services.items.map((service, index) => {
            const icons: IconName[] = ["code", "shield", "church"];
            return (
              <motion.article key={service.title} whileHover={{ y: -4 }} className="rounded-2xl sm:rounded-3xl border border-white/15 bg-[#08213f] p-5 sm:p-6 md:p-7 shadow-xl shadow-black/25 text-center">
                <div className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full border border-[#d6a354]/45 bg-[#d6a354]/15 text-[#d6a354] mx-auto">
                  <Icon name={icons[index]} size={24} className="sm:w-[30px]" />
                </div>
                <h3 className="mt-4 sm:mt-6 text-lg sm:text-xl font-bold text-white">{service.title}</h3>
                <p className="mt-2 sm:mt-3 text-sm sm:text-base leading-6 sm:leading-7 text-white/82">{service.text}</p>
              </motion.article>
            );
          })}
        </div>
      </section>

      <section id="projetos" className="relative z-10 border-y border-white/10 bg-[#04172d] px-3 py-12 sm:px-5 sm:py-16 md:py-20">
        <SectionTitle eyebrow={t.projects.eyebrow} title={t.projects.title} subtitle={t.projects.subtitle} />
        <div className="mx-auto mt-8 sm:mt-10 md:mt-12 grid max-w-7xl gap-4 sm:gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {t.projects.items.map((project) => (
            <motion.article key={project.title} whileHover={{ y: -4 }} className="rounded-2xl sm:rounded-3xl border border-white/15 bg-[#06203d] p-5 sm:p-6 md:p-7 shadow-xl shadow-black/25 text-center">
              <div className="flex flex-col items-center gap-4 sm:gap-5">
                <div className="flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full border border-[#d6a354]/35 bg-[#06172d] text-[#d6a354]">
                  <Icon name={project.icon as IconName} size={28} className="sm:w-[36px]" />
                </div>
                <div>
                  <div className="flex flex-wrap items-center justify-center gap-2">
                    <h3 className="text-lg sm:text-xl font-bold text-white">{project.title}</h3>
                    {project.highlight ? <span className="rounded-full border border-[#d6a354]/45 bg-[#d6a354]/20 px-2.5 py-1 text-xs font-semibold text-[#f0c16e]">{t.projects.highlight}</span> : null}
                  </div>
                  {project.company ? <p className="mt-2 text-xs sm:text-sm font-semibold text-[#d6a354]">{project.company}</p> : null}
                  {project.role || project.period ? (
                    <p className="mt-1 text-xs sm:text-sm text-white/70">
                      {[project.role, project.period].filter(Boolean).join(" • ")}
                    </p>
                  ) : null}
                  <p className="mt-2 sm:mt-3 text-sm sm:text-base leading-6 sm:leading-7 text-white/82">{project.description}</p>
                </div>
              </div>
              <div className="mt-4 sm:mt-6 flex flex-wrap gap-2 justify-center">
                {project.tech.map((item) => (
                  <span key={item} className="rounded-md border border-white/15 bg-white/12 px-2.5 py-1 text-xs text-white/90">
                    {item}
                  </span>
                ))}
              </div>
              <div className="mt-5 sm:mt-7 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center">
                {project.url ? (
                  <>
                    <a href={project.url} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 text-white transition hover:text-[#d6a354]">
                      <Icon name="github" size={16} className="sm:w-[18px]" /> GitHub
                    </a>
                    <a href={project.url} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 text-white transition hover:text-[#d6a354]">
                      {t.projects.viewProject} <Icon name="external" size={15} className="sm:w-[17px]" />
                    </a>
                  </>
                ) : (
                  <span className="inline-flex items-center justify-center gap-2 rounded-full border border-[#d6a354]/30 px-4 py-2 text-sm font-semibold text-[#d6a354]">
                    <Icon name="folder" size={15} /> {t.projects.professional}
                  </span>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="valores" className="relative z-10 px-3 py-12 sm:px-5 sm:py-16 md:py-20">
        <SectionTitle eyebrow={t.values.eyebrow} title={t.values.title} subtitle={t.values.subtitle} />
        <div className="mx-auto mt-8 sm:mt-10 md:mt-12 grid max-w-7xl gap-3 sm:gap-5 grid-cols-2 sm:grid-cols-2 lg:grid-cols-4">
          {t.values.items.map((value, index) => {
            const icons: IconName[] = ["shield", "users", "cross", "heart"];
            return (
              <div key={value.title} className="flex flex-col items-center gap-3 sm:gap-4 rounded-2xl sm:rounded-3xl border border-white/15 bg-[#08213f] p-4 sm:p-5 shadow-xl shadow-black/20 text-center">
                <Icon name={icons[index]} size={26} className="sm:w-[32px] shrink-0 text-[#d6a354]" />
                <div>
                  <h3 className="font-bold text-[#d6a354] text-sm sm:text-base">{value.title}</h3>
                  <p className="mt-1 sm:mt-2 text-xs sm:text-sm leading-5 sm:leading-6 text-white/82">{value.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section id="tecnologias" className="relative z-10 border-y border-white/10 bg-[#04172d] px-3 py-12 sm:px-5 sm:py-16 md:py-20">
        <SectionTitle eyebrow={t.technologies.eyebrow} title={t.technologies.title} subtitle={t.technologies.subtitle} />
        <div className="mx-auto mt-8 sm:mt-10 md:mt-12 flex max-w-5xl flex-wrap justify-center gap-2 sm:gap-3">
          {technologies.map((tech) => (
            <span key={tech} className="rounded-full border border-[#d6a354]/35 bg-[#d6a354]/15 px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm text-white">
              {tech}
            </span>
          ))}
        </div>
      </section>

      <section id="contato" className="relative z-10 px-3 py-12 sm:px-5 sm:py-16 md:py-20">
        <div className="mx-auto max-w-5xl rounded-2xl sm:rounded-3xl border border-[#d6a354]/40 bg-[#08213f] p-5 sm:p-8 md:p-12 text-center shadow-2xl shadow-black/30">
          <div className="flex items-center justify-center mb-8 sm:mb-10 md:mb-12">
            <img src={Logo} alt="Henrique Fernandes Tech" className="h-28 w-28 sm:h-32 sm:w-32 md:h-40 md:w-40 w-auto object-contain rounded-full border-2 border-[#d6a354]/50 p-2" />
          </div>
          <p className="mt-0 mx-auto text-lg md:text-2xl font-bold text-[#d6a354]">{t.contact.title}</p>
          <p className="mx-auto mt-3 sm:mt-4 text-sm sm:text-base md:text-lg leading-6 sm:leading-8 text-white/85 text-center">
            {t.contact.description}
          </p>
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-wrap sm:flex-row sm:justify-center gap-3 sm:gap-4">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                className="inline-flex items-center justify-center gap-2 rounded-full px-4 sm:px-6 
                  py-2.5 sm:py-3 text-sm sm:text-base font-semibold transition border 
                  border-white/25 text-white hover:border-[#d6a354] hover:text-[#d6a354]"
              >
                <Icon name={link.icon} size={16} className="sm:w-[19px]" /> <span className="hidden sm:inline">{link.label}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <footer className="relative z-10 border-t border-white/10 bg-[#04172d] rounded-t-3xl px-3 py-6 sm:px-5 sm:py-8 text-center text-xs sm:text-sm text-white/75">
        © {new Date().getFullYear()} Henrique Fernandes Tech — {t.footer}
      </footer>
    </main>
  );
}
