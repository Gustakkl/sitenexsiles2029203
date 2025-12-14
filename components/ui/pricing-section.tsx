"use client";
import { TimelineContent } from "./timeline-animation";
import { VerticalCutReveal } from "./vertical-cut-reveal";
import { cn } from "../../lib/utils";
import { CheckCheck, Zap, Diamond, Box } from "lucide-react";
import { motion } from "framer-motion";
import { useId, useRef, useState } from "react";

const PricingSwitch = ({
  button1,
  button2,
  onSwitch,
  className,
  layoutId,
}: {
  button1: string;
  button2: string;
  onSwitch: (value: string) => void;
  className?: string;
  layoutId?: string;
}) => {
  const [selected, setSelected] = useState("0");
  const uniqueId = useId();
  const switchLayoutId = layoutId || `switch-${uniqueId}`;

  const handleSwitch = (value: string) => {
    setSelected(value);
    onSwitch(value);
  };

  return (
    <div
      className={cn(
        "relative z-10 w-full flex rounded-full bg-[#111318] border border-[#282e39] p-1",
        className,
      )}
    >
      <button
        onClick={() => handleSwitch("0")}
        className={cn(
          "relative z-10 w-full sm:h-12 h-10 rounded-full sm:px-6 px-3 sm:py-2 py-1 text-sm font-medium transition-colors",
          selected === "0"
            ? "text-white"
            : "text-gray-400 hover:text-white",
        )}
      >
        {selected === "0" && (
          <motion.span
            layoutId={switchLayoutId}
            className="absolute top-0 left-0 sm:h-12 h-10 w-full rounded-full border border-primary/50 shadow-[0_0_15px_rgba(19,91,236,0.3)] bg-primary"
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
          />
        )}
        <span className="relative z-20">{button1}</span>
      </button>

      <button
        onClick={() => handleSwitch("1")}
        className={cn(
          "relative z-10 w-full sm:h-12 h-10 flex-shrink-0 rounded-full sm:px-6 px-3 sm:py-2 py-1 text-sm font-medium transition-colors",
          selected === "1"
            ? "text-white"
            : "text-gray-400 hover:text-white",
        )}
      >
        {selected === "1" && (
          <motion.span
            layoutId={switchLayoutId}
            className="absolute top-0 left-0 sm:h-12 h-10 w-full rounded-full border border-primary/50 shadow-[0_0_15px_rgba(19,91,236,0.3)] bg-primary"
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
          />
        )}
        <span className="relative z-20 flex justify-center items-center gap-2">
          {button2}
        </span>
      </button>
    </div>
  );
};

export default function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(false);
  const [isNexbox, setIsNexbox] = useState(false);
  const pricingRef = useRef<HTMLDivElement>(null);

  const revealVariants = {
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.3,
        duration: 0.5,
      },
    }),
    hidden: {
      filter: "blur(10px)",
      y: -20,
      opacity: 0,
    },
  };
  const timelineVaraints = {
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
    hidden: {
      filter: "blur(10px)",
      y: -20,
      opacity: 0,
    },
  };

  const toggleFrequency = (value: string) =>
    setIsAnnual(Number.parseInt(value) === 1);
  const toggleProduct = (value: string) =>
    setIsNexbox(Number.parseInt(value) === 1);

  const calculatePrice = () => {
    let basePrice = 189; // Nexsiles ERP
    if (isNexbox) basePrice = 129; // Nexbox App

    if (isAnnual) {
        // Apply 10% discount for annual (simulated)
        return Math.floor(basePrice * 0.9);
    }
    return basePrice;
  };

  const calculateOriginalPrice = () => {
    let basePrice = 189;
    if (isNexbox) basePrice = 129;
    return Math.floor(basePrice * 1.25); // Show a markup as original
  };

  const currentPrice = calculatePrice();
  const originalPrice = calculateOriginalPrice();

  const featuresERP = [
    "Controle de Estoque Completo",
    "Gestão de Consignado (Maletas)",
    "Emissão de NF-e e Etiquetas",
    "Financeiro e Fluxo de Caixa",
    "Relatórios de Vendas e Comissões",
    "Usuários Ilimitados",
    "Suporte via WhatsApp",
  ];

  const featuresBox = [
    "Vendas Offline no Tablet/Celular",
    "Catálogo Digital Interativo",
    "Sincronização Automática",
    "Leitura de Códigos de Barras",
    "Assinatura Digital de Pedidos",
    "Compatível com Android e iOS",
    "Modo Apresentação (Showcase)",
  ];

  const currentFeatures = isNexbox ? featuresBox : featuresERP;

  return (
    <div className="px-4 py-20 w-full mx-auto relative bg-[#101622] border-t border-[#282e39]" ref={pricingRef}>
      <div className="py-16 px-4 relative overflow-hidden">
         {/* Background Glow */}
        <div
          className="absolute inset-0 z-0 opacity-20 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, #135bec 0%, transparent 70%)",
          }}
        />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <TimelineContent
            as="div"
            animationNum={0}
            timelineRef={pricingRef}
            customVariants={revealVariants}
            className="flex items-center justify-center mb-6"
          >
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase">
                <Zap className="h-4 w-4 fill-primary" />
                <span>Planos Flexíveis</span>
            </div>
          </TimelineContent>

          <h1 className="md:text-5xl sm:text-4xl text-3xl font-bold text-white mb-6 leading-tight">
            <VerticalCutReveal
              splitBy="words"
              staggerDuration={0.15}
              staggerFrom="first"
              reverse={true}
              containerClassName="justify-center"
              transition={{
                type: "spring",
                stiffness: 250,
                damping: 40,
                delay: 0.4,
              }}
            >
              Invista no crescimento
            </VerticalCutReveal>
          </h1>

          <TimelineContent
            as="p"
            animationNum={1}
            timelineRef={pricingRef}
            customVariants={revealVariants}
            className="text-xl text-gray-400 max-w-2xl mx-auto"
          >
            Escolha a solução ideal para o estágio atual da sua distribuidora.
            Escalabilidade garantida quando você precisar.
          </TimelineContent>
        </div>
      </div>

      {/* Product Features */}
      <div className="px-4 relative z-10">
        <div className="max-w-6xl mx-auto bg-[#1c1f27] border border-[#282e39] rounded-3xl p-8 md:p-12 shadow-2xl">
          <div className="grid md:grid-cols-2 md:gap-16 gap-12 items-start">
            
            {/* Left Side: Features */}
            <div>
              <TimelineContent
                as="div"
                animationNum={2}
                timelineRef={pricingRef}
                customVariants={revealVariants}
                className="mb-8"
              >
                 <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg text-primary">
                        {isNexbox ? <Box size={24} /> : <Diamond size={24} />}
                    </div>
                    <h3 className="text-3xl font-bold text-white">
                        {isNexbox ? "Nexbox App" : "Nexsiles ERP"}
                    </h3>
                 </div>
                 <p className="text-gray-400">
                    {isNexbox 
                        ? "Potencialize suas vendas externas com o melhor catálogo digital do mercado." 
                        : "O coração da sua operação. Gestão completa para quem quer crescer."}
                 </p>
              </TimelineContent>

              <div className="space-y-4">
                {currentFeatures.map((feature, index) => (
                  <TimelineContent
                    key={index}
                    as="div"
                    animationNum={3 + index}
                    timelineRef={pricingRef}
                    customVariants={timelineVaraints}
                    className="flex items-center p-3 rounded-lg bg-[#111318]/50 border border-white/5 hover:border-primary/30 transition-colors"
                  >
                    <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <CheckCheck className="h-3.5 w-3.5 text-primary" />
                    </div>
                    <span className="text-gray-300 text-sm font-medium">{feature}</span>
                  </TimelineContent>
                ))}
              </div>
            </div>

            {/* Right Side: Configuration & Price */}
            <div className="space-y-8 bg-[#111318] p-8 rounded-2xl border border-[#282e39]">
              <TimelineContent
                as="div"
                animationNum={3}
                timelineRef={pricingRef}
                customVariants={revealVariants}
              >
                <h4 className="font-bold text-white mb-3 flex justify-between items-center">
                  Produto
                  <span className="text-xs font-normal text-gray-500">Selecione o módulo</span>
                </h4>
                <PricingSwitch
                  button1="Nexsiles ERP"
                  button2="Nexbox App"
                  onSwitch={toggleProduct}
                  className="grid grid-cols-2 w-full"
                />
              </TimelineContent>

              <TimelineContent
                as="div"
                animationNum={4}
                timelineRef={pricingRef}
                customVariants={revealVariants}
              >
                <h4 className="font-bold text-white mb-3 flex justify-between items-center">
                  Frequência
                  <span className="text-xs font-normal text-primary">Economize 10% no anual</span>
                </h4>
                <PricingSwitch
                  button1="Mensal"
                  button2="Anual"
                  onSwitch={toggleFrequency}
                  className="grid grid-cols-2 w-full"
                />
              </TimelineContent>

              <div className="h-px bg-[#282e39] w-full"></div>

              <TimelineContent
                as="div"
                animationNum={5}
                timelineRef={pricingRef}
                customVariants={revealVariants}
                className="text-center"
              >
                <div className="flex items-end justify-center gap-2 mb-2">
                   <span className="text-gray-500 text-lg mb-1">R$</span>
                  <span className="text-6xl font-bold text-white tracking-tighter">
                     {currentPrice}
                  </span>
                  <span className="text-gray-500 text-lg mb-1">,00</span>
                  <span className="text-sm text-gray-500 mb-2 ml-1">/mês</span>
                </div>
                
                <div className="flex justify-center items-center gap-2 mb-6">
                    <span className="text-sm text-gray-500">De</span>
                    <span className="text-sm text-gray-400 line-through decoration-red-500/50">
                        R$ {originalPrice},00
                    </span>
                </div>

                <TimelineContent
                  as="button"
                  animationNum={6}
                  timelineRef={pricingRef}
                  customVariants={revealVariants}
                  className="w-full h-14 rounded-lg bg-primary hover:bg-primary-hover text-white font-bold text-lg shadow-[0_0_25px_rgba(19,91,236,0.4)] hover:shadow-[0_0_35px_rgba(19,91,236,0.6)] hover:-translate-y-1 transition-all active:scale-[0.98] relative overflow-hidden group"
                >
                  <span className="relative z-10">Contratar Agora</span>
                  {/* Shimmer Effect */}
                  <div className="absolute inset-0 group-hover:animate-shimmer bg-gradient-to-r from-transparent via-white/20 to-transparent z-0 pointer-events-none" style={{ transform: 'translateX(-100%)' }}></div>
                </TimelineContent>
                <p className="text-xs text-gray-500 mt-4">
                    7 dias de garantia incondicional. Cancele quando quiser.
                </p>
              </TimelineContent>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}