import React from 'react';
import { Diamond, WifiOff, Zap, Box, BarChart3, Users, Smartphone, Lock, ShieldCheck, Globe } from 'lucide-react';
import RadialOrbitalTimeline from '../components/ui/radial-orbital-timeline';

const WhyNexsiles: React.FC = () => {
  const reasonData = [
    {
      id: 1,
      title: "Controle Total",
      date: "Core",
      content: "Domine seu estoque com rastreabilidade completa. Saiba exatamente onde está cada peça, seja na matriz ou em maletas consignadas.",
      category: "Gestão",
      icon: Box,
      relatedIds: [2, 5],
      status: "completed" as const,
      energy: 95,
    },
    {
      id: 2,
      title: "Vendas Offline",
      date: "Mobile",
      content: "Seus representantes não param nunca. O app Nexbox funciona 100% offline e sincroniza automaticamente quando houver conexão.",
      category: "Agilidade",
      icon: WifiOff,
      relatedIds: [1, 3],
      status: "completed" as const,
      energy: 100,
    },
    {
      id: 3,
      title: "Performance",
      date: "Tech",
      content: "Tecnologia WebGL 3.0 e Flutter garantem uma experiência fluida, sem travamentos, mesmo com catálogos de milhares de peças.",
      category: "Tecnologia",
      icon: Zap,
      relatedIds: [2, 4],
      status: "in-progress" as const,
      energy: 85,
    },
    {
      id: 4,
      title: "UX Premium",
      date: "Design",
      content: "Uma interface Dark Mode elegante e intuitiva, desenhada especificamente para o mercado de luxo e semijoias.",
      category: "Design",
      icon: Diamond,
      relatedIds: [3, 5],
      status: "completed" as const,
      energy: 90,
    },
    {
      id: 5,
      title: "Dados Reais",
      date: "BI",
      content: "Dashboards visuais que transformam números em insights. Acompanhe metas, comissões e curva ABC em tempo real.",
      category: "Inteligência",
      icon: BarChart3,
      relatedIds: [1, 4],
      status: "completed" as const,
      energy: 80,
    },
    {
      id: 6,
      title: "Segurança",
      date: "Security",
      content: "Seus dados protegidos com criptografia de ponta a ponta e backups automáticos diários na nuvem.",
      category: "Infra",
      icon: ShieldCheck,
      relatedIds: [1],
      status: "completed" as const,
      energy: 100,
    },
    {
        id: 7,
        title: "Ecossistema",
        date: "Integ",
        content: "Integração nativa entre ERP, App de Vendas e E-commerce B2B. Uma única plataforma para tudo.",
        category: "Plataforma",
        icon: Globe,
        relatedIds: [2, 3],
        status: "in-progress" as const,
        energy: 75,
      },
  ];

  return (
    <div className="w-full h-[calc(100vh-80px)] overflow-hidden bg-[#101622] relative flex flex-col">
        <div className="absolute top-8 left-0 w-full z-10 text-center pointer-events-none px-4">
            <h1 className="text-3xl md:text-5xl font-black text-white mb-2 drop-shadow-lg">Por que Nexsiles?</h1>
            <p className="text-gray-400 text-lg max-w-xl mx-auto drop-shadow-md">Explore nosso ecossistema interativo. Clique nos nós para descobrir.</p>
        </div>
        <RadialOrbitalTimeline timelineData={reasonData} />
    </div>
  );
};

export default WhyNexsiles;