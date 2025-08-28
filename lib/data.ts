export interface Content {
  id: string
  title: string
  type: "video" | "article" | "course"
  platform: string
  duration: string
  free: boolean
  completed?: boolean
  url: string
  description: string
}

export interface Module {
  id: string
  title: string
  description: string
  contents: Content[]
  completed: boolean
}

export interface MarketOpportunity {
  company: string
  position: string
  location: string
  salary: string
  type: "remote" | "hybrid" | "presencial"
  urgency: "alta" | "média" | "baixa"
  requirements: string[]
  postedDays: number
  applicants: number
}

export interface TrilhaData {
  id: string
  title: string
  description: string
  longDescription: string
  image: string
  level: string
  duration: string
  progress: number
  students: string
  rating: number
  modules: Module[]
  skills: string[]
  prerequisites: string[]
  salary: string
  jobOpportunities: number
  marketIntelligence: {
    demandLevel: "alta" | "média" | "baixa"
    growthProjection: string
    averageHiringTime: string
    topHiringCompanies: string[]
    realOpportunities: MarketOpportunity[]
    skillsInDemand: string[]
    marketInsights: string[]
  }
}

export const trilhasData: Record<string, TrilhaData> = {
  "frontend-developer": {
    id: "frontend-developer",
    title: "Desenvolvedor Front-end Jr.",
    description: "Domine React, TypeScript e Next.js para criar interfaces modernas e responsivas.",
    longDescription:
      "Esta trilha foi desenvolvida para transformar você em um desenvolvedor front-end completo. Você aprenderá desde os fundamentos do HTML, CSS e JavaScript até tecnologias avançadas como React, TypeScript e Next.js. Ao final, estará preparado para criar aplicações web modernas e responsivas que atendem aos padrões da indústria.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop&crop=center",
    level: "Iniciante",
    duration: "6 meses",
    progress: 65,
    students: "1.2k",
    rating: 4.8,
    salary: "R$ 4.500 - R$ 8.000",
    jobOpportunities: 2847,
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "Git",
      "Figma",
      "Responsive Design",
    ],
    prerequisites: ["Conhecimento básico de computação", "Inglês básico para leitura", "Vontade de aprender"],
    modules: [
      {
        id: "fundamentos",
        title: "Fundamentos Web",
        description: "Aprenda HTML, CSS e JavaScript - a base de tudo no desenvolvimento web",
        completed: true,
        contents: [
          {
            id: "html-basics",
            title: "HTML5 Completo - Do Básico ao Avançado",
            type: "video",
            platform: "YouTube - Curso em Vídeo",
            duration: "4h 30min",
            free: true,
            completed: true,
            url: "https://youtube.com/playlist?list=PLHz_AreHm4dkZ9-atkcmcBaMZdmLHft8n",
            description:
              "Curso completo de HTML5 com Gustavo Guanabara, incluindo semântica, formulários e acessibilidade",
          },
          {
            id: "css-flexbox",
            title: "CSS Flexbox - Guia Completo",
            type: "article",
            platform: "MDN Web Docs",
            duration: "45min",
            free: true,
            completed: true,
            url: "https://developer.mozilla.org/pt-BR/docs/Web/CSS/CSS_Flexible_Box_Layout",
            description: "Documentação oficial sobre Flexbox com exemplos práticos e interativos",
          },
          {
            id: "css-grid",
            title: "CSS Grid Layout - Rocketseat",
            type: "video",
            platform: "YouTube - Rocketseat",
            duration: "2h 15min",
            free: true,
            completed: true,
            url: "https://youtube.com/watch?v=hKXOVD2Yrj8",
            description: "Aprenda CSS Grid do zero com Mayk Brito da Rocketseat",
          },
          {
            id: "js-fundamentals",
            title: "JavaScript Moderno - ES6+",
            type: "course",
            platform: "Udemy",
            duration: "12h",
            free: false,
            completed: false,
            url: "https://udemy.com/course/curso-web-design-completo",
            description: "Curso completo de JavaScript moderno com projetos práticos e exercícios",
          },
          {
            id: "js-dom",
            title: "Manipulação do DOM com JavaScript",
            type: "video",
            platform: "YouTube - Curso em Vídeo",
            duration: "3h 45min",
            free: true,
            completed: false,
            url: "https://youtube.com/playlist?list=PLntvgXM11X6pi7mW0O4ZmfUI1xDSIbmTm",
            description: "Aprenda a manipular elementos HTML com JavaScript puro",
          },
        ],
      },
      {
        id: "react-basics",
        title: "React Fundamentals",
        description: "Domine a biblioteca mais popular do mercado para criar interfaces dinâmicas",
        completed: false,
        contents: [
          {
            id: "react-intro",
            title: "React em 1 Hora - Curso Rápido",
            type: "video",
            platform: "YouTube - Rocketseat",
            duration: "1h 15min",
            free: true,
            completed: true,
            url: "https://youtube.com/watch?v=FXqX7oof0I0",
            description: "Introdução rápida aos conceitos do React com Diego Fernandes",
          },
          {
            id: "react-hooks",
            title: "React Hooks - useState, useEffect e mais",
            type: "video",
            platform: "YouTube - Filipe Deschamps",
            duration: "2h 30min",
            free: true,
            completed: false,
            url: "https://youtube.com/watch?v=6WB16wZS61c",
            description: "Aprenda os hooks mais importantes do React com exemplos práticos",
          },
          {
            id: "react-complete",
            title: "React - The Complete Guide 2024",
            type: "course",
            platform: "Udemy",
            duration: "48h",
            free: false,
            completed: false,
            url: "https://udemy.com/course/react-the-complete-guide-incl-redux",
            description: "Curso mais completo de React disponível, incluindo Redux e testes",
          },
          {
            id: "react-router",
            title: "React Router - Navegação em SPAs",
            type: "article",
            platform: "React Router Docs",
            duration: "1h 30min",
            free: true,
            completed: false,
            url: "https://reactrouter.com/en/main/start/tutorial",
            description: "Tutorial oficial do React Router para navegação em aplicações React",
          },
        ],
      },
      {
        id: "typescript",
        title: "TypeScript",
        description: "Adicione tipagem estática ao seu JavaScript para código mais seguro",
        completed: false,
        contents: [
          {
            id: "ts-basics",
            title: "TypeScript para Iniciantes",
            type: "article",
            platform: "TypeScript Handbook",
            duration: "2h",
            free: true,
            completed: false,
            url: "https://www.typescriptlang.org/docs/handbook/intro.html",
            description: "Documentação oficial do TypeScript com exemplos práticos",
          },
          {
            id: "ts-react",
            title: "TypeScript com React - Guia Prático",
            type: "video",
            platform: "YouTube - Rocketseat",
            duration: "3h",
            free: true,
            completed: false,
            url: "https://youtube.com/watch?v=YhQKe-aShqA",
            description: "Como usar TypeScript em projetos React do mundo real",
          },
          {
            id: "ts-advanced",
            title: "TypeScript Avançado",
            type: "course",
            platform: "Udacity",
            duration: "15h",
            free: false,
            completed: false,
            url: "https://udacity.com/course/typescript-advanced",
            description: "Conceitos avançados de TypeScript: generics, decorators e mais",
          },
        ],
      },
      {
        id: "nextjs",
        title: "Next.js",
        description: "Framework React para produção com SSR, SSG e muito mais",
        completed: false,
        contents: [
          {
            id: "nextjs-intro",
            title: "Next.js 14 - Curso Completo",
            type: "course",
            platform: "Udacity",
            duration: "20h",
            free: false,
            completed: false,
            url: "https://udacity.com/course/nextjs-complete",
            description: "Aprenda Next.js do zero ao deploy com App Router e Server Components",
          },
          {
            id: "nextjs-docs",
            title: "Documentação Oficial Next.js",
            type: "article",
            platform: "Next.js",
            duration: "4h",
            free: true,
            completed: false,
            url: "https://nextjs.org/docs",
            description: "Documentação completa do Next.js com exemplos e best practices",
          },
          {
            id: "nextjs-vercel",
            title: "Deploy Next.js na Vercel",
            type: "video",
            platform: "YouTube - Vercel",
            duration: "45min",
            free: true,
            completed: false,
            url: "https://youtube.com/watch?v=2HBIzEx6IZA",
            description: "Como fazer deploy de aplicações Next.js na Vercel",
          },
        ],
      },
      {
        id: "styling",
        title: "Estilização Moderna",
        description: "Tailwind CSS e Styled Components para interfaces profissionais",
        completed: false,
        contents: [
          {
            id: "tailwind-basics",
            title: "Tailwind CSS - Utility First",
            type: "video",
            platform: "YouTube - Tailwind Labs",
            duration: "2h",
            free: true,
            completed: false,
            url: "https://youtube.com/watch?v=UBOj6rqRUME",
            description: "Aprenda Tailwind CSS do zero com os criadores do framework",
          },
          {
            id: "styled-components",
            title: "Styled Components no React",
            type: "article",
            platform: "Styled Components Docs",
            duration: "1h 30min",
            free: true,
            completed: false,
            url: "https://styled-components.com/docs",
            description: "CSS-in-JS com Styled Components para React",
          },
        ],
      },
    ],
    marketIntelligence: {
      demandLevel: "alta",
      growthProjection: "+35% nos próximos 2 anos",
      averageHiringTime: "3-4 semanas",
      topHiringCompanies: ["Nubank", "iFood", "Stone", "PicPay", "Mercado Livre", "Magazine Luiza", "B2W", "Globo.com"],
      realOpportunities: [
        {
          company: "Nubank",
          position: "Desenvolvedor Frontend Jr.",
          location: "São Paulo, SP",
          salary: "R$ 6.500 - R$ 8.500",
          type: "hybrid",
          urgency: "alta",
          requirements: ["React", "TypeScript", "Jest", "Git"],
          postedDays: 3,
          applicants: 127,
        },
        {
          company: "iFood",
          position: "Frontend Developer",
          location: "Remote",
          salary: "R$ 7.000 - R$ 9.000",
          type: "remote",
          urgency: "alta",
          requirements: ["React", "Next.js", "Tailwind CSS", "GraphQL"],
          postedDays: 1,
          applicants: 89,
        },
        {
          company: "Stone",
          position: "Desenvolvedor React Jr.",
          location: "Rio de Janeiro, RJ",
          salary: "R$ 5.800 - R$ 7.200",
          type: "hybrid",
          urgency: "média",
          requirements: ["React", "JavaScript", "CSS3", "Git"],
          postedDays: 5,
          applicants: 156,
        },
        {
          company: "PicPay",
          position: "Frontend Engineer",
          location: "São Paulo, SP",
          salary: "R$ 8.000 - R$ 10.500",
          type: "hybrid",
          urgency: "alta",
          requirements: ["React", "TypeScript", "Next.js", "Styled Components"],
          postedDays: 2,
          applicants: 203,
        },
      ],
      skillsInDemand: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Jest", "GraphQL"],
      marketInsights: [
        "Empresas fintech lideram contratações com salários 20% acima da média",
        "TypeScript é requisito em 85% das vagas sênior",
        "Next.js cresceu 150% em demanda nos últimos 6 meses",
        "Conhecimento em testes automatizados aumenta chances em 40%",
      ],
    },
  },
  "data-scientist": {
    id: "data-scientist",
    title: "Cientista de Dados",
    description: "Aprenda Python, Machine Learning e análise de dados para tomar decisões estratégicas.",
    longDescription:
      "Torne-se um cientista de dados completo com esta trilha abrangente. Você dominará Python, estatística, machine learning e visualização de dados. Aprenderá a extrair insights valiosos de grandes volumes de dados e a criar modelos preditivos que impactam negócios reais. Esta trilha prepara você para uma das profissões mais demandadas do mercado.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&crop=center",
    level: "Intermediário",
    duration: "8 meses",
    progress: 32,
    students: "856",
    rating: 4.9,
    salary: "R$ 8.000 - R$ 15.000",
    jobOpportunities: 1523,
    skills: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "TensorFlow",
      "SQL",
      "Tableau",
      "Statistics",
      "Machine Learning",
      "Deep Learning",
    ],
    prerequisites: ["Matemática básica", "Lógica de programação", "Inglês intermediário", "Estatística básica"],
    modules: [
      {
        id: "python-basics",
        title: "Python para Data Science",
        description: "Fundamentos de Python aplicados à ciência de dados",
        completed: true,
        contents: [
          {
            id: "python-intro",
            title: "Python para Análise de Dados",
            type: "course",
            platform: "Udemy",
            duration: "15h",
            free: false,
            completed: true,
            url: "https://udemy.com/course/python-para-data-science-e-machine-learning",
            description: "Curso completo de Python focado em análise de dados com projetos reais",
          },
          {
            id: "pandas-tutorial",
            title: "Pandas - Manipulação de Dados",
            type: "video",
            platform: "YouTube - Didática Tech",
            duration: "3h",
            free: true,
            completed: true,
            url: "https://youtube.com/playlist?list=PLyqOvdQmGdTvfOh_3MoyWd6kanV9lb7Bd",
            description: "Tutorial completo da biblioteca Pandas para manipulação de dados",
          },
          {
            id: "numpy-basics",
            title: "NumPy - Computação Científica",
            type: "article",
            platform: "NumPy Documentation",
            duration: "2h",
            free: true,
            completed: true,
            url: "https://numpy.org/doc/stable/user/quickstart.html",
            description: "Guia oficial do NumPy para computação científica em Python",
          },
        ],
      },
      {
        id: "statistics",
        title: "Estatística e Probabilidade",
        description: "Base matemática essencial para ciência de dados",
        completed: false,
        contents: [
          {
            id: "stats-basics",
            title: "Estatística Descritiva e Inferencial",
            type: "course",
            platform: "Udacity",
            duration: "25h",
            free: false,
            completed: false,
            url: "https://udacity.com/course/intro-to-statistics",
            description: "Fundamentos estatísticos para data science com aplicações práticas",
          },
          {
            id: "probability",
            title: "Probabilidade para Data Science",
            type: "video",
            platform: "YouTube - Khan Academy",
            duration: "4h",
            free: true,
            completed: false,
            url: "https://youtube.com/playlist?list=PLC58778F28211FA19",
            description: "Conceitos de probabilidade aplicados à ciência de dados",
          },
        ],
      },
      {
        id: "machine-learning",
        title: "Machine Learning",
        description: "Algoritmos de aprendizado de máquina na prática",
        completed: false,
        contents: [
          {
            id: "ml-intro",
            title: "Machine Learning com Scikit-learn",
            type: "course",
            platform: "Coursera - Stanford",
            duration: "30h",
            free: false,
            completed: false,
            url: "https://coursera.org/learn/machine-learning",
            description: "Curso clássico de ML do Andrew Ng com implementações em Python",
          },
          {
            id: "ml-projects",
            title: "Projetos de Machine Learning",
            type: "video",
            platform: "YouTube - Kaggle",
            duration: "5h",
            free: true,
            completed: false,
            url: "https://youtube.com/playlist?list=PLqFaTIg4myu8t5ycqvp7I07jTjol3RCl9",
            description: "Projetos práticos de ML usando datasets reais do Kaggle",
          },
        ],
      },
    ],
    marketIntelligence: {
      demandLevel: "alta",
      growthProjection: "+42% nos próximos 2 anos",
      averageHiringTime: "4-6 semanas",
      topHiringCompanies: [
        "Banco do Brasil",
        "Itaú",
        "Ambev",
        "Vale",
        "Petrobras",
        "Magazine Luiza",
        "Americanas",
        "XP Investimentos",
      ],
      realOpportunities: [
        {
          company: "Itaú",
          position: "Cientista de Dados Jr.",
          location: "São Paulo, SP",
          salary: "R$ 9.500 - R$ 12.000",
          type: "hybrid",
          urgency: "alta",
          requirements: ["Python", "SQL", "Machine Learning", "Pandas", "Scikit-learn"],
          postedDays: 2,
          applicants: 234,
        },
        {
          company: "Magazine Luiza",
          position: "Data Scientist",
          location: "Remote",
          salary: "R$ 11.000 - R$ 14.500",
          type: "remote",
          urgency: "alta",
          requirements: ["Python", "TensorFlow", "AWS", "SQL", "Statistics"],
          postedDays: 4,
          applicants: 178,
        },
        {
          company: "Ambev",
          position: "Analista de Dados Sênior",
          location: "São Paulo, SP",
          salary: "R$ 8.500 - R$ 11.000",
          type: "presencial",
          urgency: "média",
          requirements: ["Python", "R", "Tableau", "SQL", "Statistics"],
          postedDays: 7,
          applicants: 145,
        },
      ],
      skillsInDemand: ["Python", "SQL", "Machine Learning", "TensorFlow", "AWS", "Tableau"],
      marketInsights: [
        "Setor financeiro oferece os maiores salários para cientistas de dados",
        "Conhecimento em cloud (AWS/Azure) aumenta salário em 30%",
        "MLOps é a skill mais procurada em 2024",
        "Experiência com dados em tempo real é diferencial competitivo",
      ],
    },
  },
  "ux-ui-designer": {
    id: "ux-ui-designer",
    title: "Designer UX/UI",
    description: "Crie experiências digitais incríveis com Figma, prototipagem e pesquisa de usuário.",
    longDescription:
      "Transforme-se em um designer UX/UI completo com foco em experiência do usuário e interfaces modernas. Você aprenderá desde pesquisa de usuário e arquitetura da informação até prototipagem avançada e design systems. Esta trilha prepara você para criar produtos digitais que realmente resolvem problemas dos usuários.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop&crop=center",
    level: "Iniciante",
    duration: "5 meses",
    progress: 78,
    students: "2.1k",
    rating: 4.7,
    salary: "R$ 5.000 - R$ 12.000",
    jobOpportunities: 1876,
    skills: [
      "Figma",
      "Adobe XD",
      "Sketch",
      "Prototyping",
      "User Research",
      "Design Systems",
      "Usability Testing",
      "Information Architecture",
    ],
    prerequisites: ["Criatividade", "Pensamento analítico", "Inglês básico"],
    modules: [
      {
        id: "ux-fundamentals",
        title: "Fundamentos de UX",
        description: "Princípios básicos de experiência do usuário",
        completed: true,
        contents: [
          {
            id: "ux-intro",
            title: "Introdução ao UX Design",
            type: "course",
            platform: "Google UX Design Certificate",
            duration: "20h",
            free: false,
            completed: true,
            url: "https://coursera.org/professional-certificates/google-ux-design",
            description: "Certificação oficial do Google em UX Design",
          },
          {
            id: "user-research",
            title: "Pesquisa de Usuário na Prática",
            type: "video",
            platform: "YouTube - UX Mastery",
            duration: "2h 30min",
            free: true,
            completed: true,
            url: "https://youtube.com/playlist?list=PLXmT1r4krsTqtLkHqeKRl-SZaDyZ_hQ5B",
            description: "Métodos de pesquisa de usuário e como aplicá-los",
          },
        ],
      },
      {
        id: "ui-design",
        title: "Interface Design",
        description: "Criação de interfaces visuais atrativas e funcionais",
        completed: true,
        contents: [
          {
            id: "figma-basics",
            title: "Figma do Zero ao Avançado",
            type: "video",
            platform: "YouTube - Figma",
            duration: "4h",
            free: true,
            completed: true,
            url: "https://youtube.com/playlist?list=PLXDU_eVOJTx7QHLShNqIXL1Cgbxj7HlN4",
            description: "Tutorial oficial do Figma para design de interfaces",
          },
          {
            id: "design-systems",
            title: "Design Systems na Prática",
            type: "course",
            platform: "Udemy",
            duration: "12h",
            free: false,
            completed: false,
            url: "https://udemy.com/course/design-systems",
            description: "Como criar e manter design systems escaláveis",
          },
        ],
      },
    ],
    marketIntelligence: {
      demandLevel: "alta",
      growthProjection: "+28% nos próximos 2 anos",
      averageHiringTime: "2-3 semanas",
      topHiringCompanies: ["Nubank", "iFood", "Stone", "Globo.com", "Natura", "B2W", "Mercado Livre", "99"],
      realOpportunities: [
        {
          company: "Globo.com",
          position: "UX Designer Jr.",
          location: "Rio de Janeiro, RJ",
          salary: "R$ 5.500 - R$ 7.500",
          type: "hybrid",
          urgency: "alta",
          requirements: ["Figma", "User Research", "Prototyping", "Design Systems"],
          postedDays: 1,
          applicants: 167,
        },
        {
          company: "Natura",
          position: "Product Designer",
          location: "São Paulo, SP",
          salary: "R$ 7.000 - R$ 9.500",
          type: "hybrid",
          urgency: "média",
          requirements: ["Figma", "Adobe Creative Suite", "User Testing", "Design Thinking"],
          postedDays: 6,
          applicants: 198,
        },
        {
          company: "99",
          position: "UI/UX Designer",
          location: "Remote",
          salary: "R$ 6.500 - R$ 8.500",
          type: "remote",
          urgency: "alta",
          requirements: ["Figma", "Sketch", "Principle", "User Research"],
          postedDays: 3,
          applicants: 134,
        },
      ],
      skillsInDemand: ["Figma", "Design Systems", "User Research", "Prototyping", "Design Thinking", "Accessibility"],
      marketInsights: [
        "Design Systems é requisito em 70% das vagas sênior",
        "Conhecimento em acessibilidade digital é diferencial crescente",
        "Startups oferecem equity além do salário base",
        "Portfolio com casos reais aumenta aprovação em 60%",
      ],
    },
  },
}

export interface Mentor {
  id: string
  name: string
  title: string
  company: string
  location: string
  experience: string
  rating: number
  reviews: number
  specialties: string[]
  avatar: string
  price: string
  available: boolean
  bio: string
  languages: string[]
  responseTime: string
  sessionsCompleted: number
}

export const mentorsData: Mentor[] = [
  {
    id: "1",
    name: "Ana Silva",
    title: "Senior Frontend Developer",
    company: "Google",
    location: "São Paulo, SP",
    experience: "8 anos",
    rating: 4.9,
    reviews: 127,
    specialties: ["React", "TypeScript", "Next.js", "UI/UX", "Performance"],
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
    price: "R$ 150/hora",
    available: true,
    bio: "Desenvolvedora sênior com 8 anos de experiência em grandes empresas de tecnologia. Especialista em React e arquitetura frontend. Já mentorei mais de 200 desenvolvedores e ajudei muitos a conseguirem suas primeiras vagas em tech.",
    languages: ["Português", "Inglês", "Espanhol"],
    responseTime: "< 2 horas",
    sessionsCompleted: 340,
  },
  {
    id: "2",
    name: "Carlos Mendes",
    title: "Data Science Manager",
    company: "Microsoft",
    location: "Rio de Janeiro, RJ",
    experience: "10 anos",
    rating: 4.8,
    reviews: 89,
    specialties: ["Python", "Machine Learning", "SQL", "Leadership", "Deep Learning"],
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    price: "R$ 200/hora",
    available: true,
    bio: "Gerente de Data Science com vasta experiência em projetos de ML e liderança de equipes técnicas. PhD em Ciência da Computação e autor de artigos científicos na área de IA. Especialista em transição de carreira para dados.",
    languages: ["Português", "Inglês"],
    responseTime: "< 4 horas",
    sessionsCompleted: 156,
  },
  {
    id: "3",
    name: "Mariana Costa",
    title: "UX Design Lead",
    company: "Nubank",
    location: "São Paulo, SP",
    experience: "6 anos",
    rating: 4.9,
    reviews: 156,
    specialties: ["Design Systems", "User Research", "Figma", "Prototyping", "Product Strategy"],
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    price: "R$ 120/hora",
    available: false,
    bio: "Design Lead especializada em produtos financeiros e design systems. Focada em pesquisa de usuário e experiência. Liderou o redesign de produtos que impactaram milhões de usuários. Mentora certificada em Design Thinking.",
    languages: ["Português", "Inglês"],
    responseTime: "< 6 horas",
    sessionsCompleted: 278,
  },
  {
    id: "4",
    name: "Roberto Santos",
    title: "DevOps Engineer",
    company: "AWS",
    location: "Belo Horizonte, MG",
    experience: "7 anos",
    rating: 4.7,
    reviews: 73,
    specialties: ["Docker", "Kubernetes", "AWS", "CI/CD", "Terraform"],
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    price: "R$ 180/hora",
    available: true,
    bio: "Engenheiro DevOps especialista em cloud computing e automação de infraestrutura. Certificado AWS Solutions Architect e Kubernetes Administrator. Ajuda profissionais a migrarem para DevOps e Cloud.",
    languages: ["Português", "Inglês"],
    responseTime: "< 3 horas",
    sessionsCompleted: 124,
  },
  {
    id: "5",
    name: "Juliana Oliveira",
    title: "Product Manager",
    company: "iFood",
    location: "São Paulo, SP",
    experience: "5 anos",
    rating: 4.8,
    reviews: 92,
    specialties: ["Product Strategy", "Agile", "Data Analysis", "User Stories", "Roadmapping"],
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face",
    price: "R$ 140/hora",
    available: true,
    bio: "Product Manager com experiência em produtos de alta escala. Especialista em metodologias ágeis e análise de dados para tomada de decisão. Mentora focada em transição de carreira para produto.",
    languages: ["Português", "Inglês"],
    responseTime: "< 2 horas",
    sessionsCompleted: 187,
  },
  {
    id: "6",
    name: "Felipe Rodrigues",
    title: "Backend Engineer",
    company: "Spotify",
    location: "São Paulo, SP",
    experience: "9 anos",
    rating: 4.9,
    reviews: 134,
    specialties: ["Node.js", "Python", "Microservices", "Database Design", "API Design"],
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
    price: "R$ 170/hora",
    available: true,
    bio: "Engenheiro Backend sênior com experiência em sistemas de alta escala. Especialista em arquitetura de microserviços e design de APIs. Contribuidor open source e palestrante em conferências de tecnologia.",
    languages: ["Português", "Inglês"],
    responseTime: "< 4 horas",
    sessionsCompleted: 203,
  },
]

export const jobMarketData = {
  totalJobs: 12847,
  averageSalary: "R$ 7.200",
  topCompanies: ["Google", "Microsoft", "Amazon", "Meta", "Nubank", "iFood", "Stone", "PicPay"],
  growthRate: "+23%",
  remoteJobs: "78%",
}
