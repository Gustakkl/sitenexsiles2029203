import React from 'react';
import { ArrowRight, Package, RefreshCw, BarChart3, ChevronRight } from 'lucide-react';
import { ParticleTextEffect } from '../components/ui/particle-text-effect';
import { BubbleText } from '../components/ui/bubble-text';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const Home: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative w-full h-[600px] md:h-[700px] overflow-hidden bg-[#111318] flex items-center justify-center">
        {/* Bottom Gradient Border */}
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>

        {/* Particle Effect Background */}
        <div className="absolute inset-0 z-0 opacity-100">
           <ParticleTextEffect 
             words={["Nexsiles", "Inovação", "Semijoias", "Controle", "Futuro"]} 
             className="w-full h-full"
           />
        </div>
        
        {/* Gradient Overlay for Readability */}
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#111318]/30 via-transparent to-[#111318] pointer-events-none"></div>

        <div className="relative z-10 max-w-[1280px] mx-auto flex flex-col justify-center items-center px-6 pointer-events-none h-full mt-32">
          <div className="max-w-4xl text-center space-y-8 pointer-events-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center pt-32"
            >
              <a href="#features" className="group flex items-center justify-center gap-2 h-12 px-8 rounded-lg bg-primary text-white text-base font-bold hover:bg-primary/90 transition-all shadow-[0_0_30px_rgba(139,92,246,0.4)] hover:shadow-[0_0_40px_rgba(139,92,246,0.6)] hover:-translate-y-1">
                <span>Conheça o Nexsiles</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#contact" className="flex items-center justify-center gap-2 h-12 px-8 rounded-lg bg-[#282e39]/50 border border-white/10 backdrop-blur-sm text-white text-base font-bold hover:bg-[#282e39] transition-all hover:-translate-y-1">
                <span>Ver o Nexbox</span>
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Features Grid (Why Us) */}
      <div className="bg-[#111318] py-16 px-6 relative z-10">
        <div className="max-w-[1280px] mx-auto">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left"
          >
            <motion.div variants={itemVariants}>
              <FeatureItem 
                icon={<Package size={24} />}
                title="Controle de Estoque"
                desc="Rastreabilidade completa de peças, banhos e coleções em tempo real."
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <FeatureItem 
                icon={<RefreshCw size={24} />}
                title="Sincronização Offline"
                desc="Venda em qualquer lugar com o Nexbox, mesmo sem internet. Sincronize quando conectar."
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <FeatureItem 
                icon={<BarChart3 size={24} />}
                title="Dashboards Visuais"
                desc="Relatórios financeiros e de vendas com gráficos interativos e inteligência de dados."
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Products Section */}
      <div className="bg-[#111318] py-20 px-6 relative z-10">
        <div className="max-w-[1280px] mx-auto flex flex-col gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row justify-between items-end gap-6 pb-6 relative"
          >
            {/* Gradient Line replacing border-b */}
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>

            <div className="max-w-xl">
              <h2 className="text-primary font-bold text-sm tracking-widest uppercase mb-4">Nossas Soluções</h2>
              
              {/* Animated Text Component */}
              <BubbleText 
                text="Ecossistema completo para sua operação" 
                className="text-white leading-tight" 
              />
              
            </div>
            <div className="pb-2">
              <a href="#features" className="text-white hover:text-primary transition-colors flex items-center gap-1 font-medium">
                Ver comparativo completo <ArrowRight size={18} />
              </a>
            </div>
          </motion.div>

          {/* Cards removed as requested */}
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative py-24 bg-[#111318] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent pointer-events-none"></div>
        <div className="layout-container flex justify-center relative z-10 px-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-gradient-to-br from-[#1c1f27] to-[#101622] border border-white/10 rounded-3xl p-10 md:p-16 text-center max-w-4xl w-full shadow-2xl relative overflow-hidden group"
          >
            {/* Decorative glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-primary/20 rounded-full blur-[80px] pointer-events-none group-hover:bg-primary/30 transition-colors duration-1000 animate-pulse"></div>
            
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 relative z-10">Pronto para escalar seu negócio?</h2>
            <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto relative z-10">
              Junte-se a mais de 500 distribuidoras que modernizaram sua gestão com Nexsiles.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
              <a href="#contact" className="h-12 px-8 rounded-lg bg-primary text-white font-bold hover:bg-primary/90 shadow-lg shadow-primary/25 transition-all flex items-center justify-center hover:scale-105 active:scale-95">
                Falar com Consultor
              </a>
              <a href="#features" className="h-12 px-8 rounded-lg bg-transparent border border-white/20 text-white font-bold hover:bg-white/5 transition-all flex items-center justify-center hover:scale-105 active:scale-95">
                Ver Planos
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const FeatureItem = ({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) => (
  <div className="p-6 rounded-2xl bg-[#1c1f27] border border-white/5 hover:border-primary/30 transition-all duration-300 group hover:-translate-y-2 hover:shadow-lg hover:shadow-primary/10 h-full">
    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-primary group-hover:scale-110 transition-transform duration-300 group-hover:bg-primary group-hover:text-white">
      {icon}
    </div>
    <h3 className="text-white text-xl font-bold mb-2 group-hover:text-primary transition-colors">{title}</h3>
    <p className="text-gray-400 leading-relaxed">{desc}</p>
  </div>
);

export default Home;