import React from 'react';
import { ArrowRight, Package, RefreshCw, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ParticleTextEffect } from '../components/ui/particle-text-effect';
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
      <div className="relative w-full h-[600px] md:h-[700px] overflow-hidden bg-[#111318] border-b border-[#282e39] flex items-center justify-center">
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
              <Link to="/features" className="group flex items-center justify-center gap-2 h-12 px-8 rounded-lg bg-primary text-white text-base font-bold hover:bg-primary/90 transition-all shadow-[0_0_30px_rgba(19,91,236,0.4)] hover:shadow-[0_0_40px_rgba(19,91,236,0.6)] hover:-translate-y-1">
                <span>Conheça o Nexsiles</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/contact" className="flex items-center justify-center gap-2 h-12 px-8 rounded-lg bg-[#282e39]/50 border border-white/10 backdrop-blur-sm text-white text-base font-bold hover:bg-[#282e39] transition-all hover:-translate-y-1">
                <span>Ver o Nexbox</span>
              </Link>
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
            className="flex flex-col md:flex-row justify-between items-end gap-6 border-b border-white/10 pb-6"
          >
            <div className="max-w-xl">
              <h2 className="text-primary font-bold text-sm tracking-widest uppercase mb-2">Nossas Soluções</h2>
              <h3 className="text-white text-3xl md:text-4xl font-bold leading-tight">Ecossistema completo para sua operação</h3>
            </div>
            <div className="pb-2">
              <Link to="/features" className="text-white hover:text-primary transition-colors flex items-center gap-1 font-medium">
                Ver comparativo completo <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            <motion.div variants={itemVariants}>
              <ProductCard 
                title="Nexsiles"
                tag="ERP"
                tagColor="blue"
                desc="O sistema definitivo para controle de estoque, financeiro e gestão completa da sua distribuidora. Emissão de NF-e, controle de consignado e relatórios gerenciais robustos."
                image="https://lh3.googleusercontent.com/aida-public/AB6AXuBVLFp7KU9Bm4x7GpenifUQ521ccDHWi1H5xrz5_cn9F6l7b4MZzBjE8vtsVnkYuS9mk1AuGk7lTxHhrfpVvKNU6Tppu7Y1h9bl1j3xRf24oSFIAnwzK-4gOUv9ZnMqlAdp4NXKXo3mYHcqAPzL6uYMyrY8iKEv2qKcAMqSOcaRJDU3fjfC_mSlQkntaSFGKsW4xify8WCKood2049Q1W_gOmuWdeHqhKw0yKLjApRsbR7uPPdAQapi40WMDFxNWr-n98r1ryylL8UB"
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <ProductCard 
                title="Nexbox"
                tag="POS Mobile"
                tagColor="purple"
                desc="Agilidade para suas vendas externas. Leve seu mostruário digital e feche pedidos em qualquer lugar via tablet ou smartphone, com sincronização automática."
                image="https://lh3.googleusercontent.com/aida-public/AB6AXuD9uh9O2Wa2QhGv1o4X89ns8K-nL0FBEWIx0SRo0fGTJACSGTzzuxBpazRYFyahQcZ7PwCgiUsjth8KDl8oVBFX0jDYowQC5tL8QPFRJQzN2q0a3dIQi2x9SVHr4tbRwRH5gBYfXvHCpkHWLSLHNmKUOmsk-nkLls9le8orc3BbbhYi3NysEM0jQ1G-aYWe76BNXFB3FfMo4JdVoog7Tfu0xF5NUMcN7n8rpgrkm_kMCnrLdSje4so_nbw6-4Qs6sUIqWbDJa_ZEONv"
              />
            </motion.div>
          </motion.div>
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
              <Link to="/contact" className="h-12 px-8 rounded-lg bg-primary text-white font-bold hover:bg-primary/90 shadow-lg shadow-primary/25 transition-all flex items-center justify-center hover:scale-105 active:scale-95">
                Falar com Consultor
              </Link>
              <Link to="/features" className="h-12 px-8 rounded-lg bg-transparent border border-white/20 text-white font-bold hover:bg-white/5 transition-all flex items-center justify-center hover:scale-105 active:scale-95">
                Ver Planos
              </Link>
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

const ProductCard = ({ title, tag, tagColor, desc, image }: { title: string, tag: string, tagColor: 'blue' | 'purple', desc: string, image: string }) => (
  <div className="group flex flex-col rounded-2xl overflow-hidden bg-[#1c1f27] border border-white/5 shadow-lg hover:shadow-[0_0_30px_rgba(0,0,0,0.3)] transition-all hover:-translate-y-1 h-full">
    <div className="w-full h-64 bg-cover bg-center relative overflow-hidden" style={{backgroundImage: `url('${image}')`}}>
      <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/0 transition-colors duration-500"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#1c1f27] to-transparent opacity-80"></div>
    </div>
    <div className="flex flex-col flex-1 p-8 gap-4 relative -mt-12 z-10">
      <div className="flex items-center justify-between">
        <h4 className="text-white text-2xl font-bold group-hover:text-primary transition-colors">{title}</h4>
        <span className={`px-3 py-1 rounded-full text-xs font-bold border ${tagColor === 'blue' ? 'bg-blue-900/30 text-blue-400 border-blue-800/50' : 'bg-purple-900/30 text-purple-400 border-purple-800/50'}`}>
          {tag}
        </span>
      </div>
      <p className="text-gray-400 text-base leading-relaxed flex-1">
        {desc}
      </p>
      <div className="pt-4 border-t border-white/5">
        <Link to="/features" className="w-full h-12 rounded-lg bg-[#282e39] hover:bg-primary hover:text-white text-gray-200 font-bold transition-all flex items-center justify-center gap-2 group-hover:shadow-lg group-hover:shadow-primary/20">
          <span>Explorar Recursos</span>
        </Link>
      </div>
    </div>
  </div>
);

export default Home;