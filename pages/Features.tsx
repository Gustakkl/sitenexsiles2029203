import React from 'react';
import { Link } from 'react-router-dom';
import { Rocket, TrendingUp, CheckCircle, Briefcase, Store, Repeat, QrCode, Tag, Calculator, BarChart4 } from 'lucide-react';
import PricingSection from '../components/ui/pricing-section';
import { TestimonialsColumn } from '../components/ui/testimonials-columns';
import { motion } from 'framer-motion';

const Features: React.FC = () => {
  const testimonials = [
    {
      text: "O controle de maletas era nosso maior gargalo. Com a Nexsiles, reduzimos o tempo de conferência em 70% e eliminamos erros manuais.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=faces",
      name: "Ana Silva",
      role: "CEO, Lume Joias",
    },
    {
      text: "A interface é incrível e o suporte é sensacional. O aplicativo para as revendedoras mudou o jogo para nós, aumentando as vendas em 30%.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=faces",
      name: "Carlos Mendes",
      role: "Diretor, Gold Vendas",
    },
    {
      text: "Simples, direto e eficiente. Exatamente o que precisávamos para escalar nossa operação de consignado sem perder o controle.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=faces",
      name: "Marina Costa",
      role: "Gerente, Shine Distribuidora",
    },
    {
      text: "A integração do ERP com o app mobile facilitou muito a vida dos nossos representantes. Tudo sincronizado em tempo real.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=faces",
      name: "Omar Raza",
      role: "Gerente de TI",
    },
    {
      text: "Funcionalidades robustas e suporte rápido transformaram nosso fluxo de trabalho, nos tornando significativamente mais eficientes.",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces",
      name: "Zainab Hussain",
      role: "Gerente de Projetos",
    },
    {
      text: "A implementação foi tranquila e superou as expectativas. Otimizou processos e melhorou o desempenho geral do negócio.",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=faces",
      name: "Aliza Khan",
      role: "Analista de Negócios",
    },
    {
      text: "Nossas funções de negócios melhoraram com um design amigável e feedback positivo dos clientes.",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=faces",
      name: "Farhan Siddiqui",
      role: "Diretor de Marketing",
    },
    {
      text: "Entregaram uma solução que superou as expectativas, entendendo nossas necessidades e aprimorando nossas operações.",
      image: "https://images.unsplash.com/photo-1554151228-14d9def656ec?w=150&h=150&fit=crop&crop=faces",
      name: "Sana Sheikh",
      role: "Gerente de Vendas",
    },
    {
      text: "Usando este ERP, nossa presença online e conversões melhoraram significativamente, impulsionando o desempenho dos negócios.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=faces",
      name: "Hassan Ali",
      role: "Gerente de E-commerce",
    },
  ];

  const firstColumn = testimonials.slice(0, 3);
  const secondColumn = testimonials.slice(3, 6);
  const thirdColumn = testimonials.slice(6, 9);

  return (
    <div className="bg-[#101622] min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 sm:py-24 lg:py-32">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none opacity-20 dark:opacity-30">
          <motion.div 
            animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
                x: [0, 30, 0],
                y: [0, -30, 0]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-10 right-10 w-96 h-96 bg-primary rounded-full blur-[128px]"
          ></motion.div>
          <motion.div 
            animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.2, 0.4, 0.2],
                x: [0, -40, 0],
                y: [0, 20, 0]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-10 left-10 w-64 h-64 bg-purple-500 rounded-full blur-[128px]"
          ></motion.div>
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex flex-col gap-6 max-w-2xl"
            >
              <div className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Novo Módulo de Vendas WebGL
              </div>
              
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-white leading-[1.1]">
                Domine seu Estoque de <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Semijoias</span>
              </h1>
              
              <p className="text-lg text-gray-300 max-w-lg leading-relaxed">
                O sistema definitivo para gestão de consignado, maletas e etiquetagem inteligente. Tecnologia avançada para sua distribuidora brilhar mais.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link to="/contact" className="h-12 px-8 rounded-lg bg-primary text-white font-bold text-base hover:bg-primary-hover transition-all shadow-lg shadow-primary/25 flex items-center justify-center gap-2 hover:scale-105 active:scale-95">
                  <Rocket size={20} />
                  Falar com Consultor
                </Link>
              </div>

              {/* Social Proof */}
              <div className="flex items-center gap-4 pt-6 text-sm text-gray-400">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-[#101622] bg-gray-600">
                        <img src={`https://picsum.photos/seed/user${i}/100/100`} alt="User" className="w-full h-full rounded-full object-cover" />
                    </div>
                  ))}
                  <div className="w-8 h-8 rounded-full border-2 border-[#101622] bg-[#1c2230] flex items-center justify-center text-xs font-medium text-white">+500</div>
                </div>
                <p>distribuidoras confiam na Nexsiles</p>
              </div>
            </motion.div>

            {/* Simulated Dashboard UI */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, rotateX: 20 }}
              animate={{ opacity: 1, scale: 1, rotateX: 0 }}
              transition={{ duration: 1, delay: 0.2, type: "spring" }}
              className="relative lg:h-auto w-full perspective-1000"
            >
              <div className="relative w-full aspect-[4/3] rounded-xl bg-[#1c2230] border border-[#282e39] shadow-2xl overflow-hidden group hover:rotate-y-2 hover:rotate-x-2 transition-transform duration-500 ease-out preserve-3d">
                {/* Top Bar */}
                <div className="absolute top-0 w-full h-8 bg-[#282e39] flex items-center px-4 gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>

                <div className="p-6 pt-12 grid grid-cols-12 gap-4 h-full">
                  {/* Sidebar Mock */}
                  <div className="col-span-3 bg-[#111318] rounded-lg h-full p-3 flex flex-col gap-3">
                    <div className="h-8 bg-[#282e39] rounded w-3/4"></div>
                    <div className="h-4 bg-[#282e39] rounded w-full mt-4"></div>
                    <div className="h-4 bg-[#282e39] rounded w-full"></div>
                    <div className="h-4 bg-[#282e39] rounded w-5/6"></div>
                    <div className="mt-auto h-20 bg-gradient-to-br from-primary/20 to-transparent rounded border border-primary/30"></div>
                  </div>

                  {/* Main Area */}
                  <div className="col-span-9 flex flex-col gap-4">
                    <div className="grid grid-cols-3 gap-4">
                      <div className="h-24 bg-[#111318] rounded-lg p-3 border border-gray-800 flex flex-col justify-between relative overflow-hidden group/card">
                        <div className="absolute right-0 top-0 p-2 opacity-20 text-primary group-hover/card:opacity-100 group-hover/card:scale-110 transition-all">
                          <TrendingUp size={24} />
                        </div>
                        <div className="h-2 w-12 bg-gray-700 rounded"></div>
                        <div className="h-6 w-20 bg-primary rounded"></div>
                      </div>
                      <div className="h-24 bg-[#111318] rounded-lg p-3 border border-gray-800 flex flex-col justify-between">
                        <div className="h-2 w-12 bg-gray-700 rounded"></div>
                        <div className="h-6 w-16 bg-green-500 rounded"></div>
                      </div>
                      <div className="h-24 bg-[#111318] rounded-lg p-3 border border-gray-800 flex flex-col justify-between">
                        <div className="h-2 w-12 bg-gray-700 rounded"></div>
                        <div className="h-6 w-24 bg-purple-500 rounded"></div>
                      </div>
                    </div>
                    <div className="flex-1 bg-[#111318] rounded-lg border border-gray-800 relative overflow-hidden">
                      {/* Fake Bars */}
                      <div className="absolute bottom-0 left-0 w-full h-2/3 flex items-end justify-around px-4 pb-4">
                        <motion.div 
                          initial={{ height: 0 }}
                          animate={{ height: "40%" }}
                          transition={{ delay: 0.8, duration: 1 }}
                          className="w-8 bg-primary/40 rounded-t"
                        ></motion.div>
                         <motion.div 
                          initial={{ height: 0 }}
                          animate={{ height: "70%" }}
                          transition={{ delay: 0.9, duration: 1 }}
                          className="w-8 bg-primary/60 rounded-t"
                        ></motion.div>
                         <motion.div 
                          initial={{ height: 0 }}
                          animate={{ height: "50%" }}
                          transition={{ delay: 1.0, duration: 1 }}
                          className="w-8 bg-primary/80 rounded-t"
                        ></motion.div>
                         <motion.div 
                          initial={{ height: 0 }}
                          animate={{ height: "85%" }}
                          transition={{ delay: 1.1, duration: 1 }}
                          className="w-8 bg-primary rounded-t shadow-[0_0_20px_rgba(19,91,236,0.5)]"
                        ></motion.div>
                         <motion.div 
                          initial={{ height: 0 }}
                          animate={{ height: "60%" }}
                          transition={{ delay: 1.2, duration: 1 }}
                          className="w-8 bg-primary/50 rounded-t"
                        ></motion.div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Notification */}
                <div className="absolute bottom-6 right-6 bg-[#1c2230]/90 backdrop-blur border border-primary/30 p-3 rounded-lg shadow-xl flex items-center gap-3 animate-bounce">
                  <div className="bg-green-500/20 text-green-500 p-2 rounded-md">
                    <CheckCircle size={16} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Maleta #2049</p>
                    <p className="text-sm font-bold text-white">Retorno Confirmado</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Grid Features */}
      <section className="py-20 bg-[#0d1017] relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-base font-bold text-primary tracking-wide uppercase">Funcionalidades</h2>
                <p className="mt-2 text-3xl font-extrabold text-white sm:text-4xl">
                    Tudo que sua distribuidora precisa
                </p>
            </div>
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={{
                visible: { transition: { staggerChildren: 0.1 } }
              }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
                <GridFeature icon={<Briefcase />} title="Gestão de Maletas" desc="Rastreamento total de peças em consignado com histórico detalhado." />
                <GridFeature icon={<QrCode />} title="Etiquetagem Inteligente" desc="Geração automática de códigos de barras e QR Codes." />
                <GridFeature icon={<Calculator />} title="Financeiro Integrado" desc="Cálculo automático de comissões e fluxo de caixa em tempo real." />
                <GridFeature icon={<BarChart4 />} title="Controle de Estoque" desc="Visão completa do inventário, perdas, garantias e reposições." />
            </motion.div>
        </div>
      </section>

      {/* Visual Product Break */}
      <section className="py-20 bg-[#101622] overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-96">
                <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="relative rounded-2xl overflow-hidden group h-full border border-white/5"
                >
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all z-10"></div>
                    <div className="absolute bottom-0 left-0 p-8 z-20">
                        <h3 className="text-2xl font-bold text-white mb-2">Interface Mobile Flutter</h3>
                        <p className="text-white/80">Controle tudo pelo celular com nosso app nativo.</p>
                    </div>
                    <div className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC70y3uz9utwQ54zgn7oGpdB2OPZJ3AfOwbsnAjj1Qnw60K2BMA-LnypHGa3L4-ueJNvZNoZkfG0-MKUOwlIa5AHar6AEgs3vkLySUgdoqXXElzknV1yZHYlEh018YNCnbjetxMiZOUFrq1T9GY7ZIp_X3eXg1aPYlln-T1vVCJaXIfUFtsfmMGkisPrmx4lafdcOp41C8hMwN-nmzeQbV23dpgIfvtTSCgX8cxdLmrnHmiQxmUqy1_Ec8xx291ISWEYEtqbhHznNQ-')"}}></div>
                </motion.div>
                <motion.div 
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="grid grid-rows-2 gap-4 h-full"
                >
                     <div className="relative rounded-2xl overflow-hidden group h-full border border-white/5">
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all z-10"></div>
                        <div className="absolute bottom-0 left-0 p-6 z-20">
                            <h3 className="text-xl font-bold text-white">Catálogo Digital</h3>
                        </div>
                        <div className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAD1agzTJ2Ms-KIW3yFMR7v6tsey6Sc6RVmirxT0uLiAqmagNMy6qlR7BcicGUuB9TJTj9Pqf2f7P8rqnN4ZEGlb-344WJcXKC9PKtLV4hI48Zsi9Wo9qYDlPDlklJGGZE_BkoC0A4uV0_t1fDsP8Y4bOJLIiOGW4fzjt5A00x41orXwz6KKVoTDR3PBhCagG8aCl79PvMwb-vDEN_iJwBjeDbWfTV3qDJQp3l_AE13ap1aYJ3a0lfHJN6H6aEUtIw-tSoeVbeFJNUp')"}}></div>
                     </div>
                     <div className="relative rounded-2xl overflow-hidden group h-full border border-white/5">
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all z-10"></div>
                        <div className="absolute bottom-0 left-0 p-6 z-20">
                            <h3 className="text-xl font-bold text-white">Relatórios em Tempo Real</h3>
                        </div>
                        <div className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDJMElFdrzayBtND8ZLcdXk8o1hwRxj33WxSWnRJRt-yXH-tgVkxiiVjhfx7_JkqqTnDfRbrQPuhqpqtL_lQ_Ca9TTJEkHJLx6t-q2k7hTu0UsJz-SkcVlyG1OK2z9AJkMGTlxWHiX0LpGAh6Q5woMmElY0Dekc3INMZqBxhYTQHGYcQtX24LlUQLGmVEp0C7Bx99gzqIiNLKv8xKZGF73t8sn7oY9n4Hk31TzM2kcE2xmOqUdg91zP82mWMR37SLSXIXLEbRGS0Imp')"}}></div>
                     </div>
                </motion.div>
            </div>
        </div>
      </section>

      {/* Timeline Process */}
      <section className="py-24 bg-[#0d1017]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-16 md:text-center max-w-3xl mx-auto">
                <h2 className="text-3xl font-extrabold text-white">Fluxo de Trabalho Otimizado</h2>
                <p className="mt-4 text-lg text-gray-400">Do cadastro da peça até o retorno da maleta.</p>
            </div>
            <div className="relative">
                {/* Connecting Line */}
                <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-800 -translate-y-1/2 z-0"></div>
                <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                        visible: { transition: { staggerChildren: 0.2 } }
                    }}
                    className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10"
                >
                    <StepCard number={1} icon={<Tag />} title="Cadastro" desc="Entrada ágil de peças no estoque." />
                    <StepCard number={2} icon={<Briefcase />} title="Montagem" desc="Seleção inteligente de peças." />
                    <StepCard number={3} icon={<Store />} title="Venda" desc="Acompanhamento em tempo real." />
                    <StepCard number={4} icon={<Repeat />} title="Retorno" desc="Conferência rápida e automática." />
                </motion.div>
            </div>
        </div>
      </section>

      {/* Pricing Section */}
      <PricingSection />

      {/* Testimonials */}
      <section className="py-24 bg-[#101622] relative overflow-hidden">
        {/* Gradients to mask edges */}
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-[#101622] to-transparent z-10"></div>
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#101622] to-transparent z-10"></div>

        <div className="container z-10 mx-auto px-4 relative">
            <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center max-w-[540px] mx-auto mb-12"
            >
            <div className="flex justify-center">
                <div className="py-1 px-4 rounded-full border border-primary/20 bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-4">Depoimentos</div>
            </div>

            <h2 className="text-3xl md:text-5xl font-black text-white text-center leading-tight mb-4">
                Quem usa, recomenda
            </h2>
            <p className="text-center text-gray-400 text-lg">
                Veja o que nossos parceiros dizem sobre a transformação Nexsiles.
            </p>
            </motion.div>

            <div className="flex justify-center gap-6 mt-10 max-h-[740px] overflow-hidden">
                <TestimonialsColumn testimonials={firstColumn} duration={35} />
                <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={45} />
                <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={40} />
            </div>
        </div>
      </section>

    </div>
  );
};

const GridFeature = ({ icon, title, desc }: {icon: React.ReactNode, title: string, desc: string}) => (
    <motion.div 
        variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
        }}
        className="group relative rounded-xl border border-[#282e39] bg-[#1c1f27] p-6 hover:shadow-xl transition-all hover:border-primary/50 hover:-translate-y-1"
    >
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
            {React.cloneElement(icon as React.ReactElement<any>, { size: 24 })}
        </div>
        <h3 className="mt-4 text-lg font-bold text-white">{title}</h3>
        <p className="mt-2 text-sm text-gray-400">{desc}</p>
    </motion.div>
);

const StepCard = ({ number, icon, title, desc }: {number: number, icon: React.ReactNode, title: string, desc: string}) => (
    <motion.div 
        variants={{
            hidden: { opacity: 0, scale: 0.9 },
            visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
        }}
        className="flex flex-col items-center text-center group"
    >
        <div className={`w-16 h-16 rounded-full bg-[#1c1f27] border-2 ${number === 1 ? 'border-primary' : 'border-gray-700 group-hover:border-primary'} flex items-center justify-center mb-4 transition-all group-hover:scale-110 shadow-lg group-hover:shadow-primary/30 z-10 relative`}>
            <div className={`${number === 1 ? 'text-primary' : 'text-gray-400 group-hover:text-primary'}`}>
                {React.cloneElement(icon as React.ReactElement<any>, { size: 28 })}
            </div>
        </div>
        <h3 className="text-lg font-bold text-white">{number}. {title}</h3>
        <p className="text-sm text-gray-400 mt-2 px-4">{desc}</p>
    </motion.div>
);

export default Features;