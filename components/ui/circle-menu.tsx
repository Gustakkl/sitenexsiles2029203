import { AnimatePresence, motion } from 'framer-motion';
import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '../../lib/utils';

const CONSTANTS = {
  itemSize: 50, // Tamanho reduzido dos botões (era 60)
  radius: 90,   // Raio reduzido para ficar mais compacto (era 120)
};

const pointOnCircle = (i: number, n: number, r: number) => {
  const theta = (2 * Math.PI * i) / n - Math.PI / 2;
  const x = r * Math.cos(theta);
  const y = r * Math.sin(theta);
  return { x, y };
};

interface MenuItemProps {
  icon: React.ReactNode;
  label: string;
  href: string;
  index: number;
  totalItems: number;
  onSelect: () => void;
}

const MenuItem: React.FC<MenuItemProps> = ({ icon, label, href, index, totalItems, onSelect }) => {
  const { x, y } = pointOnCircle(index, totalItems, CONSTANTS.radius);
  const [hovering, setHovering] = useState(false);

  return (
    <motion.div
      initial={{ x: 0, y: 0, scale: 0, opacity: 0 }}
      animate={{ 
        x, 
        y, 
        scale: 1, 
        opacity: 1,
        transition: {
          type: 'spring',
          stiffness: 180,
          damping: 15,
          delay: index * 0.05
        }
      }}
      exit={{ 
        x: 0, 
        y: 0, 
        scale: 0, 
        opacity: 0,
        transition: { duration: 0.2 }
      }}
      style={{
        width: CONSTANTS.itemSize,
        height: CONSTANTS.itemSize,
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginTop: -CONSTANTS.itemSize / 2,
        marginLeft: -CONSTANTS.itemSize / 2,
      }}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <a 
        href={href} 
        onClick={onSelect}
        className="relative flex items-center justify-center w-full h-full rounded-full bg-[#1c1f27] border-2 border-[#282e39] text-gray-300 hover:text-white hover:border-primary hover:bg-[#282e39] shadow-2xl transition-colors z-50 group"
      >
        <div className="group-hover:scale-110 transition-transform duration-200">
          {icon}
        </div>
        
        {/* Label flutuante */}
        <div className={cn(
            "absolute top-full mt-3 px-3 py-1 rounded-md bg-black/80 backdrop-blur-md border border-white/10 text-xs font-bold text-white whitespace-nowrap transition-all duration-200 pointer-events-none transform -translate-y-2 opacity-0",
            hovering && "translate-y-0 opacity-100"
        )}>
            {label}
        </div>
      </a>
    </motion.div>
  );
};

const MenuOverlay = ({ 
    items, 
    onClose 
}: { 
    items: Array<{ label: string; icon: React.ReactNode; href: string }>;
    onClose: () => void;
}) => {
    // Prevent scrolling when menu is open
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm"
            onClick={onClose}
        >
             {/* Círculo decorativo de fundo - Tamanho ajustado para acompanhar o novo raio */}
             <motion.div 
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="absolute w-[280px] h-[280px] rounded-full border border-primary/20 bg-primary/5 pointer-events-none"
             />

             {/* Container relativo para os itens orbitarem o centro */}
             <div className="relative w-0 h-0" onClick={(e) => e.stopPropagation()}>
                {items.map((item, index) => (
                    <MenuItem
                        key={`menu-item-${index}`}
                        icon={item.icon}
                        label={item.label}
                        href={item.href}
                        index={index}
                        totalItems={items.length}
                        onSelect={onClose}
                    />
                ))}
             </div>

             <div className="absolute bottom-10 text-white/50 text-sm font-medium animate-pulse">
                Clique fora para fechar
             </div>
        </motion.div>
    );
};

interface CircleMenuProps {
  items: Array<{ label: string; icon: React.ReactNode; href: string }>;
  openIcon?: React.ReactNode;
  closeIcon?: React.ReactNode;
}

const CircleMenu: React.FC<CircleMenuProps> = ({
  items,
  openIcon = <Menu size={20} className="text-white" />,
  closeIcon = <X size={20} className="text-white" />
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  return (
    <>
      {/* Botão Gatilho (Fica na Navbar) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "relative z-50 flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 shadow-[0_0_15px_rgba(139,92,246,0.3)]",
          isOpen ? "bg-red-500 hover:bg-red-600 rotate-90" : "bg-primary hover:bg-primary-hover hover:scale-105"
        )}
      >
        <AnimatePresence mode="wait">
            {isOpen ? (
                <motion.div key="close" initial={{ opacity: 0, rotate: -90 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: 90 }}>
                    {closeIcon}
                </motion.div>
            ) : (
                <motion.div key="open" initial={{ opacity: 0, rotate: 90 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: -90 }}>
                    {openIcon}
                </motion.div>
            )}
        </AnimatePresence>
      </button>

      {/* Overlay Fullscreen (Portal visual) */}
      {mounted && createPortal(
          <AnimatePresence>
            {isOpen && (
                <MenuOverlay items={items} onClose={() => setIsOpen(false)} />
            )}
          </AnimatePresence>,
          document.body
      )}
    </>
  );
};

export { CircleMenu };