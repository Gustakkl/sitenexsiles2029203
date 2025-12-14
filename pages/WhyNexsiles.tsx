import React, { type SVGProps } from 'react';
import { Diamond, WifiOff, Zap, Box, BarChart3, Users, Smartphone, Lock, ShieldCheck, Globe, Laptop, Monitor } from 'lucide-react';
import RadialOrbitalTimeline from '../components/ui/radial-orbital-timeline';
import { LogoCarousel } from '../components/ui/logo-carousel';
import { GradientHeading } from '../components/ui/gradient-heading';

// Platform Icons
function AndroidIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M17.523 15.3414C17.523 16.738 16.353 17.8706 14.9126 17.8706C13.4722 17.8706 12.3023 16.738 12.3023 15.3414C12.3023 13.9449 13.4722 12.8123 14.9126 12.8123C16.353 12.8123 17.523 13.9449 17.523 15.3414ZM11.6977 15.3414C11.6977 16.738 10.5278 17.8706 9.08744 17.8706C7.64706 17.8706 6.47715 16.738 6.47715 15.3414C6.47715 13.9449 7.64706 12.8123 9.08744 12.8123C10.5278 12.8123 11.6977 13.9449 11.6977 15.3414ZM21.9054 9.17297C21.4908 9.11029 21.0877 9.39706 21.0251 9.81156C20.8996 10.6358 20.3705 13.4398 18.3929 14.2821C19.7828 12.9826 20.6706 11.1378 20.6706 9.07439C20.6706 5.86431 18.0694 3.26315 14.8593 3.26315C13.2989 3.26315 11.8829 3.88204 10.8291 4.88755C10.8829 4.79796 10.9546 4.71732 11.0442 4.66357L12.9256 3.5786C13.284 3.37254 13.4094 2.91559 13.2033 2.55716C12.9972 2.19873 12.5403 2.07331 12.1819 2.27937L10.0407 3.5159C9.27018 3.96163 8.7954 4.75924 8.75061 5.62829C5.90184 6.72139 3.98779 9.35211 3.98779 12.4431C3.98779 16.3224 7.14389 19.4695 11.0232 19.4695C14.9024 19.4695 18.0585 16.3224 18.0585 12.4431C18.0585 11.0366 17.653 9.72145 16.9453 8.60144C19.642 9.24653 21.1416 12.9289 21.1416 12.9289C21.2043 13.3434 21.5985 13.6212 22.0131 13.5585C22.4276 13.4958 22.7054 13.1016 22.6427 12.6871C22.6427 12.6871 20.9135 8.16955 17.6394 6.46733C17.6394 6.45837 17.6394 6.44941 17.6305 6.44046C18.9922 7.15717 20.0853 8.25026 20.7392 9.57613C21.0528 10.2122 21.2409 10.9199 21.2409 11.6635C21.2409 11.7531 21.2409 11.8427 21.232 11.9323C21.8412 11.0364 22.119 9.94344 21.9054 9.17297Z"/>
    </svg>
  );
}

function AppleIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 384 512" fill="currentColor" {...props}>
      <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 52.3-11.4 69.5-34.3z"/>
    </svg>
  );
}

function WindowsIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 88 88" fill="currentColor" {...props}>
      <path d="M0 12.402l35.687-4.86.016 34.423-35.67.203L0 12.402zm35.67 33.529l.028 34.453L.028 75.48.01 46.15l35.66-.219zm4.318-39.043l47.969-6.835.043 42.083-48.012.26V6.888zm48.012 47.585l-.046 42.668-47.966-6.756V54.76l48.012-.287z"/>
    </svg>
  );
}

function ChromeIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
             <path d="M12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0ZM12 6.54545C8.98751 6.54545 6.54545 8.98751 6.54545 12C6.54545 15.0125 8.98751 17.4545 12 17.4545C15.0125 17.4545 17.4545 15.0125 17.4545 12C17.4545 8.98751 15.0125 6.54545 12 6.54545ZM12 8.72727C13.8075 8.72727 15.2727 10.1925 15.2727 12C15.2727 13.8075 13.8075 15.2727 12 15.2727C10.1925 15.2727 8.72727 13.8075 8.72727 12C8.72727 10.1925 10.1925 8.72727 12 8.72727Z" fillRule="evenodd" clipRule="evenodd"/>
             <path d="M12 2.18182C17.4226 2.18182 21.8182 6.57741 21.8182 12C21.8182 13.3916 21.5273 14.7148 21.0004 15.9185L17.7027 10.1952C17.6209 7.07062 15.0768 4.54545 12 4.54545H12V2.18182Z" />
             <path d="M2.18182 12C2.18182 6.57741 6.57741 2.18182 12 2.18182V4.54545C7.88293 4.54545 4.54545 7.88293 4.54545 12C4.54545 13.7371 5.14088 15.3347 6.13627 16.6083L4.4754 19.4627C3.0298 17.4208 2.18182 14.8219 2.18182 12Z" />
             <path d="M12 21.8182C6.57741 21.8182 2.18182 17.4226 2.18182 12H4.54545C4.54545 16.1171 7.88293 19.4545 12 19.4545C14.0722 19.4545 15.9472 18.6089 17.3093 17.2435L20.6139 19.1415C18.4285 20.8166 15.3533 21.8182 12 21.8182Z" />
        </svg>
    )
}

function SafariIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
             <path d="M12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0ZM12 21.8182C6.57741 21.8182 2.18182 17.4226 2.18182 12C2.18182 6.57741 6.57741 2.18182 12 2.18182C17.4226 2.18182 21.8182 6.57741 21.8182 12C21.8182 17.4226 17.4226 21.8182 12 21.8182ZM13.8409 5.86364L10.7045 10.7045L5.86364 13.8409L9.00001 9.00001L13.8409 5.86364ZM11.4545 11.4545L12.9818 10.4682L10.4682 12.9818L11.4545 11.4545Z"/>
        </svg>
    )
}

const platformLogos = [
  { name: "Windows", id: 1, img: WindowsIcon },
  { name: "MacOS", id: 2, img: AppleIcon }, 
  { name: "Android", id: 3, img: AndroidIcon },
  { name: "iOS", id: 4, img: AppleIcon }, 
  { name: "Chrome", id: 5, img: ChromeIcon },
  { name: "Safari", id: 6, img: SafariIcon },
];

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
    <div className="w-full min-h-screen bg-[#101622] relative flex flex-col">
        {/* Header Section */}
        <div className="pt-24 pb-8 w-full z-10 text-center px-4 relative">
            <h1 className="text-3xl md:text-5xl font-black text-white mb-4 drop-shadow-lg">
                Por que <span className="text-primary">Nexsiles</span>?
            </h1>
            <p className="text-gray-400 text-lg max-w-xl mx-auto drop-shadow-md">
                Explore nosso ecossistema interativo. Clique nos nós para descobrir os diferenciais.
            </p>
        </div>

        {/* Interactive Timeline */}
        <div className="flex-1 w-full relative min-h-[700px] flex items-center justify-center py-10">
             <RadialOrbitalTimeline timelineData={reasonData} />
        </div>
        
        {/* Multi-platform Section - Organized Footer */}
        <section className="bg-[#0b0d11] relative overflow-hidden">
             {/* Gradient Divider replaced border-t */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>

            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40 pointer-events-none"></div>
            
            {/* Decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[300px] bg-primary/5 blur-[120px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 py-20 text-center relative z-10">
                 <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-wider text-gray-400 mb-6">
                    <Laptop size={14} />
                    <span>Disponibilidade</span>
                 </div>
                 
                 <GradientHeading variant="purple" size="lg" className="mb-6">
                    Multiplataforma Nativo
                 </GradientHeading>
                 
                 <p className="text-gray-400 mb-12 max-w-2xl mx-auto text-lg leading-relaxed">
                    Acesse seu estoque e vendas de onde estiver. O sistema foi desenvolvido para performar com excelência em todos os dispositivos.
                 </p>
                 
                 {/* Organized Grid for Logos */}
                 <div className="flex justify-center w-full">
                    <div className="w-full max-w-3xl">
                         {/* 3 Columns ensures pairs of: Windows/Mac, Android/iOS, Chrome/Safari */}
                         <LogoCarousel columnCount={3} logos={platformLogos} />
                    </div>
                 </div>
            </div>
        </section>
    </div>
  );
};

export default WhyNexsiles;