import { AnimatePresence, motion, useAnimationControls } from 'framer-motion';
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '../../lib/utils';
import { Link } from 'react-router-dom';

const CONSTANTS = {
  itemSize: 48,
  containerSize: 250,
  openStagger: 0.02,
  closeStagger: 0.07
};

const STYLES: Record<string, Record<string, string>> = {
  trigger: {
    container:
      'rounded-full flex items-center bg-primary justify-center cursor-pointer outline-none ring-0 hover:brightness-125 transition-all duration-100 z-50 text-white shadow-[0_0_20px_rgba(19,91,236,0.3)]',
    active: 'bg-primary-hover'
  },
  item: {
    container:
      'rounded-full flex items-center justify-center bg-[#1c1f27] border border-[#282e39] hover:bg-[#282e39] text-gray-300 hover:text-white cursor-pointer shadow-lg w-full h-full',
    label: 'text-xs text-white absolute top-full left-1/2 -translate-x-1/2 mt-2 font-bold whitespace-nowrap bg-black/50 px-2 py-0.5 rounded backdrop-blur-sm'
  }
};

const pointOnCircle = (i: number, n: number, r: number, cx = 0, cy = 0) => {
  const theta = (2 * Math.PI * i) / n - Math.PI / 2;
  const x = cx + r * Math.cos(theta);
  const y = cy + r * Math.sin(theta) + 0;
  return { x, y };
};

interface MenuItemProps {
  icon: React.ReactNode;
  label: string;
  href: string;
  index: number;
  totalItems: number;
  isOpen: boolean;
}

const MenuItem: React.FC<MenuItemProps> = ({ icon, label, href, index, totalItems, isOpen }) => {
  const { x, y } = pointOnCircle(index, totalItems, CONSTANTS.containerSize / 2);
  const [hovering, setHovering] = useState(false);

  return (
    <motion.div
      animate={{
        x: isOpen ? x : 0,
        y: isOpen ? y : 0
      }}
      whileHover={{
        scale: 1.1,
        transition: {
          duration: 0.1,
          delay: 0
        }
      }}
      transition={{
        delay: isOpen ? index * CONSTANTS.openStagger : index * CONSTANTS.closeStagger,
        type: 'spring',
        stiffness: 300,
        damping: 30
      }}
      style={{
        height: CONSTANTS.itemSize - 2,
        width: CONSTANTS.itemSize - 2,
        position: 'absolute'
      }}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <Link to={href} className={STYLES.item.container}>
        {icon}
        {hovering && <p className={STYLES.item.label}>{label}</p>}
      </Link>
    </motion.div>
  );
};

interface MenuTriggerProps {
  setIsOpen: (isOpen: boolean) => void;
  isOpen: boolean;
  itemsLength: number;
  closeAnimationCallback: () => void;
  openIcon?: React.ReactNode;
  closeIcon?: React.ReactNode;
}

const MenuTrigger = ({
  setIsOpen,
  isOpen,
  itemsLength,
  closeAnimationCallback,
  openIcon,
  closeIcon
}: MenuTriggerProps) => {
  const animate = useAnimationControls();
  const shakeAnimation = useAnimationControls();

  const scaleTransition = Array.from({ length: itemsLength - 1 })
    .map((_, index) => index + 1)
    .reduce((acc, _, index) => {
      const increasedValue = index * 0.15;
      acc.push(1 + increasedValue);
      return acc;
    }, [] as number[]);

  // Helper to simulate color mix for background (Primary #135bec to Background #101622)
  const getMixedColor = (percentage: number) => {
    // Primary #135bec -> r:19, g:91, b:236
    // Background #101622 -> r:16, g:22, b:34
    // This is a simplified approximation for visual effect
    if (percentage > 50) return '#135bec';
    return '#101622';
  };

  const closeAnimation = async () => {
    shakeAnimation.start({
      translateX: [0, 2, -2, 0, 2, -2, 0],
      transition: {
        duration: CONSTANTS.closeStagger,
        ease: 'linear',
        repeat: Infinity,
        repeatType: 'loop'
      }
    });
    for (let i = 0; i < scaleTransition.length; i++) {
      await animate.start({
        height: Math.min(
          CONSTANTS.itemSize * scaleTransition[i],
          CONSTANTS.itemSize + CONSTANTS.itemSize / 2
        ),
        width: Math.min(
          CONSTANTS.itemSize * scaleTransition[i],
          CONSTANTS.itemSize + CONSTANTS.itemSize / 2
        ),
        backgroundColor: getMixedColor(Math.max(100 - i * 10, 40)), 
        transition: {
          duration: CONSTANTS.closeStagger / 2,
          ease: 'linear'
        }
      });
      if (i !== scaleTransition.length - 1) {
        await new Promise((resolve) => setTimeout(resolve, CONSTANTS.closeStagger * 1000));
      }
    }

    shakeAnimation.stop();
    shakeAnimation.start({
      translateX: 0,
      transition: {
        duration: 0
      }
    });

    animate.start({
      height: CONSTANTS.itemSize,
      width: CONSTANTS.itemSize,
      backgroundColor: '#135bec', // Fixed primary color
      transition: {
        duration: 0.1,
        ease: 'backInOut'
      }
    });
  };

  return (
    <motion.div animate={shakeAnimation} className="z-50 relative">
      <motion.button
        animate={animate}
        style={{
          height: CONSTANTS.itemSize,
          width: CONSTANTS.itemSize
        }}
        className={cn(STYLES.trigger.container, isOpen && STYLES.trigger.active)}
        onClick={() => {
          if (isOpen) {
            setIsOpen(false);
            closeAnimationCallback();
            closeAnimation();
          } else {
            setIsOpen(true);
          }
        }}
      >
        <AnimatePresence mode="popLayout">
          {isOpen ? (
            <motion.span
              key="menu-close"
              initial={{
                opacity: 0,
                filter: 'blur(10px)'
              }}
              animate={{
                opacity: 1,
                filter: 'blur(0px)'
              }}
              exit={{
                opacity: 0,
                filter: 'blur(10px)'
              }}
              transition={{
                duration: 0.2
              }}
            >
              {closeIcon}
            </motion.span>
          ) : (
            <motion.span
              key="menu-open"
              initial={{
                opacity: 0,
                filter: 'blur(10px)'
              }}
              animate={{
                opacity: 1,
                filter: 'blur(0px)'
              }}
              exit={{
                opacity: 0,
                filter: 'blur(10px)'
              }}
              transition={{
                duration: 0.2
              }}
            >
              {openIcon}
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </motion.div>
  );
};

const CircleMenu = ({
  items,
  openIcon = <Menu size={20} className="text-white" />,
  closeIcon = <X size={20} className="text-white" />
}: {
  items: Array<{ label: string; icon: React.ReactNode; href: string }>;
  openIcon?: React.ReactNode;
  closeIcon?: React.ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const animate = useAnimationControls();

  const closeAnimationCallback = async () => {
    await animate.start({
      rotate: -360,
      filter: 'blur(1px)',
      transition: {
        duration: CONSTANTS.closeStagger * (items.length + 2),
        ease: 'linear'
      }
    });
    await animate.start({
      rotate: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0
      }
    });
  };

  return (
    <div
      style={{
        width: CONSTANTS.containerSize,
        height: CONSTANTS.containerSize
      }}
      className="relative flex items-center justify-center place-self-center pointer-events-none"
    >
      <div className="pointer-events-auto relative z-50">
        <MenuTrigger
          setIsOpen={setIsOpen}
          isOpen={isOpen}
          itemsLength={items.length}
          closeAnimationCallback={closeAnimationCallback}
          openIcon={openIcon}
          closeIcon={closeIcon}
        />
      </div>
      <motion.div
        animate={animate}
        className={cn('absolute inset-0 z-0 flex items-center justify-center pointer-events-none')}
      >
        <div className="pointer-events-auto absolute inset-0 flex items-center justify-center">
        {items.map((item, index) => {
          return (
            <MenuItem
              key={`menu-item-${index}`}
              icon={item.icon}
              label={item.label}
              href={item.href}
              index={index}
              totalItems={items.length}
              isOpen={isOpen}
            />
          );
        })}
        </div>
      </motion.div>
    </div>
  );
};

export { CircleMenu };