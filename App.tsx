import React, { useState, useEffect } from 'react';
import { Menu, X, Instagram, Linkedin, Globe, Home as HomeIcon, Package, Mail, HelpCircle } from 'lucide-react';
import Home from './pages/Home';
import Features from './pages/Features';
import Contact from './pages/Contact';
import WhyNexsiles from './pages/WhyNexsiles';
import { CircleMenu } from './components/ui/circle-menu';
import { NexsilesLogo } from './components/ui/nexsiles-logo';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'features', 'why-us', 'contact'];
      // Offset matches header height roughly
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition && (element.offsetTop + element.offsetHeight) > scrollPosition) {
          setActiveSection(section);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (section: string) => activeSection === section ? "text-white font-bold" : "text-gray-400 hover:text-white";

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-[#111318]/90 supports-[backdrop-filter]:bg-[#111318]/60">
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
      <div className="max-w-[1280px] mx-auto px-6 py-4 relative z-20">
        <div className="flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3 text-white group">
            <NexsilesLogo className="group-hover:scale-105 transition-transform duration-300" size={32} />
            <span className="text-xl font-bold leading-tight tracking-tight">Nexsiles</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex flex-1 justify-center gap-8">
            <a href="#home" className={`text-sm font-medium transition-colors ${isActive('home')}`}>Início</a>
            <a href="#features" className={`text-sm font-medium transition-colors ${isActive('features')}`}>Soluções</a>
            <a href="#why-us" className={`text-sm font-medium transition-colors ${isActive('why-us')}`}>Por que Nexsiles?</a>
            <a href="#contact" className={`text-sm font-medium transition-colors ${isActive('contact')}`}>Contato</a>
          </nav>

          <div className="flex items-center gap-4">
            {/* Circle Menu integrated into Navbar - Simplified container */}
            <div className="hidden md:block relative z-50">
                 <CircleMenu
                    items={[
                    { label: 'Início', icon: <HomeIcon size={18} />, href: '#home' },
                    { label: 'Soluções', icon: <Package size={18} />, href: '#features' },
                    { label: 'Por que Nex?', icon: <HelpCircle size={18} />, href: '#why-us' },
                    { label: 'Contato', icon: <Mail size={18} />, href: '#contact' },
                    ]}
                />
            </div>
            
            {/* Mobile Menu Button - Added z-index and explicit relative positioning */}
            <button 
                className="md:hidden relative z-50 text-gray-300 hover:text-white transition-colors p-2 rounded-md hover:bg-white/5" 
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle Menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Changed to absolute positioning to ensure visibility */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full md:hidden bg-[#1c1f27] border-b border-[#282e39] py-6 px-6 space-y-4 animate-fade-in-up shadow-2xl z-40">
          <a href="#home" className="block text-lg text-gray-300 hover:text-white font-medium py-2 border-b border-white/5" onClick={() => setIsOpen(false)}>Início</a>
          <a href="#features" className="block text-lg text-gray-300 hover:text-white font-medium py-2 border-b border-white/5" onClick={() => setIsOpen(false)}>Soluções</a>
          <a href="#why-us" className="block text-lg text-gray-300 hover:text-white font-medium py-2 border-b border-white/5" onClick={() => setIsOpen(false)}>Por que Nexsiles?</a>
          <a href="#contact" className="block text-lg text-gray-300 hover:text-white font-medium py-2" onClick={() => setIsOpen(false)}>Contato</a>
        </div>
      )}
    </header>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0b0d11] pt-16 pb-8 px-6 mt-auto relative z-10">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 text-white mb-6">
              <NexsilesLogo size={32} />
              <span className="text-lg font-bold">Nexsiles</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Tecnologia especializada para o mercado de semijoias. Inovação, controle e design em um só lugar.
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6">Produtos</h4>
            <ul className="space-y-4">
              <li><a href="#features" className="text-gray-400 hover:text-primary text-sm transition-colors">Nexsiles ERP</a></li>
              <li><a href="#features" className="text-gray-400 hover:text-primary text-sm transition-colors">Nexbox Mobile</a></li>
              <li><a href="#why-us" className="text-gray-400 hover:text-primary text-sm transition-colors">Diferenciais</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6">Empresa</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-primary text-sm transition-colors">Sobre Nós</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary text-sm transition-colors">Carreiras</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary text-sm transition-colors">Blog</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-2 text-gray-400 text-sm">
                <span className="text-xs text-primary">✉️</span> contato@nexsiles.com.br
              </li>
              <li className="flex items-center gap-2 text-gray-400 text-sm">
                <span className="text-xs text-primary">📞</span> +55 11 9999-9999
              </li>
              <li className="flex items-center gap-2 text-gray-400 text-sm">
                <span className="text-xs text-primary">📍</span> São Paulo, SP
              </li>
            </ul>
          </div>
        </div>
        
        {/* Footer Divider replaced with gradient */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-8"></div>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-sm">© 2024 Nexsiles. Todos os direitos reservados.</p>
          <div className="flex gap-6 text-gray-600">
            <a href="#" className="hover:text-white transition-colors"><Globe size={18} /></a>
            <a href="#" className="hover:text-white transition-colors"><Instagram size={18} /></a>
            <a href="#" className="hover:text-white transition-colors"><Linkedin size={18} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const App: React.FC = () => {
  return (
    <div className="relative flex min-h-screen w-full flex-col font-display bg-[#101622] text-white overflow-x-hidden">
      {/* Global Noise Texture */}
      <div className="bg-noise"></div>
      
      <Navbar />
      <main className="flex-grow relative z-10 w-full">
        <section id="home">
          <Home />
        </section>
        <section id="features">
          <Features />
        </section>
        <section id="why-us">
          <WhyNexsiles />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default App;