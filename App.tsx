import React, { useState } from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Menu, X, Instagram, Linkedin, Globe, MessageCircle, Home as HomeIcon, Package, Mail, HelpCircle } from 'lucide-react';
import Home from './pages/Home';
import Features from './pages/Features';
import Contact from './pages/Contact';
import WhyNexsiles from './pages/WhyNexsiles';
import { CircleMenu } from './components/ui/circle-menu';
import { NexsilesLogo } from './components/ui/nexsiles-logo';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path ? "text-white font-bold" : "text-gray-400 hover:text-white";

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-[#111318]/80 border-b border-[#282e39]">
      <div className="max-w-[1280px] mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 text-white group">
            <NexsilesLogo className="group-hover:scale-105 transition-transform duration-300" size={40} />
            <h2 className="text-xl font-bold leading-tight tracking-tight">Nexsiles</h2>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex flex-1 justify-center gap-8">
            <Link to="/" className={`text-sm font-medium transition-colors ${isActive('/')}`}>Início</Link>
            <Link to="/features" className={`text-sm font-medium transition-colors ${isActive('/features')}`}>Soluções</Link>
            <Link to="/why-us" className={`text-sm font-medium transition-colors ${isActive('/why-us')}`}>Por que Nexsiles?</Link>
            <Link to="/contact" className={`text-sm font-medium transition-colors ${isActive('/contact')}`}>Contato</Link>
          </nav>

          <div className="flex items-center gap-4">
            {/* Circle Menu integrated into Navbar */}
            <div className="relative w-10 h-10 hidden md:flex items-center justify-center">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                     <CircleMenu
                        items={[
                        { label: 'Início', icon: <HomeIcon size={18} />, href: '/' },
                        { label: 'Soluções', icon: <Package size={18} />, href: '/features' },
                        { label: 'Por que Nex?', icon: <HelpCircle size={18} />, href: '/why-us' },
                        { label: 'Contato', icon: <Mail size={18} />, href: '/contact' },
                        ]}
                    />
                </div>
            </div>
            
            <button className="md:hidden text-gray-400" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#1c1f27] border-b border-[#282e39] py-4 px-6 space-y-4">
          <Link to="/" className="block text-gray-300 hover:text-white" onClick={() => setIsOpen(false)}>Início</Link>
          <Link to="/features" className="block text-gray-300 hover:text-white" onClick={() => setIsOpen(false)}>Soluções</Link>
          <Link to="/why-us" className="block text-gray-300 hover:text-white" onClick={() => setIsOpen(false)}>Por que Nexsiles?</Link>
          <Link to="/contact" className="block text-gray-300 hover:text-white" onClick={() => setIsOpen(false)}>Contato</Link>
        </div>
      )}
    </header>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0b0d11] border-t border-[#282e39] pt-16 pb-8 px-6 mt-auto relative z-10">
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
              <li><Link to="/features" className="text-gray-400 hover:text-primary text-sm transition-colors">Nexsiles ERP</Link></li>
              <li><Link to="/features" className="text-gray-400 hover:text-primary text-sm transition-colors">Nexbox Mobile</Link></li>
              <li><Link to="/why-us" className="text-gray-400 hover:text-primary text-sm transition-colors">Diferenciais</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6">Empresa</h4>
            <ul className="space-y-4">
              <li><Link to="#" className="text-gray-400 hover:text-primary text-sm transition-colors">Sobre Nós</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-primary text-sm transition-colors">Carreiras</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-primary text-sm transition-colors">Blog</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-2 text-gray-400 text-sm">
                <span className="text-xs">✉️</span> contato@nexsiles.com.br
              </li>
              <li className="flex items-center gap-2 text-gray-400 text-sm">
                <span className="text-xs">📞</span> +55 11 9999-9999
              </li>
              <li className="flex items-center gap-2 text-gray-400 text-sm">
                <span className="text-xs">📍</span> São Paulo, SP
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
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
    <HashRouter>
      <div className="relative flex min-h-screen w-full flex-col font-display bg-[#101622] text-white overflow-x-hidden">
        {/* Global Noise Texture */}
        <div className="bg-noise"></div>
        
        <Navbar />
        <main className="flex-grow relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/features" element={<Features />} />
            <Route path="/why-us" element={<WhyNexsiles />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;