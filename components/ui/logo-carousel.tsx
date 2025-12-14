"use client"

import React, {
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react"
import { AnimatePresence, motion } from "framer-motion"

interface Logo {
  name: string
  id: number
  img: React.ComponentType<React.SVGProps<SVGSVGElement>>
}

interface LogoColumnProps {
  logos: Logo[]
  index: number
  currentTime: number
}

// Removed shuffleArray to keep order organized
const distributeLogos = (allLogos: Logo[], columnCount: number): Logo[][] => {
  // Distribute sequentially instead of randomly
  const columns: Logo[][] = Array.from({ length: columnCount }, () => [])

  allLogos.forEach((logo, index) => {
    columns[index % columnCount].push(logo)
  })

  // Ensure balanced columns by repeating if necessary (for visual fill)
  const maxLength = Math.max(...columns.map((col) => col.length))
  columns.forEach((col) => {
    let i = 0;
    while (col.length < maxLength) {
      col.push(allLogos[i % allLogos.length])
      i++
    }
  })

  return columns
}

const LogoColumn: React.FC<LogoColumnProps> = React.memo(
  ({ logos, index, currentTime }) => {
    const cycleInterval = 3000 // Slower rotation for better readability
    const columnDelay = index * 1000 // Staggered delay for organized wave effect
    const adjustedTime = (currentTime + columnDelay) % (cycleInterval * logos.length)
    const currentIndex = Math.floor(adjustedTime / cycleInterval)
    const CurrentLogo = useMemo(() => logos[currentIndex].img, [logos, currentIndex])

    return (
      <motion.div
        className="relative h-24 w-32 overflow-hidden md:h-32 md:w-48"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: index * 0.2,
          duration: 0.8,
          ease: "easeOut",
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={`${logos[currentIndex].id}-${currentIndex}`}
            className="absolute inset-0 flex flex-col items-center justify-center p-4 bg-[#1c1f27] rounded-xl border border-[#282e39] shadow-lg group hover:border-primary/50 transition-all duration-300 hover:shadow-primary/10 hover:-translate-y-1"
            initial={{ y: 20, opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
              filter: "blur(0px)",
              transition: {
                type: "spring",
                stiffness: 300,
                damping: 30,
              },
            }}
            exit={{
              y: -20,
              opacity: 0,
              filter: "blur(5px)",
              transition: {
                duration: 0.4,
              },
            }}
          >
            <CurrentLogo className="h-8 w-8 md:h-10 md:w-10 object-contain text-gray-300 fill-current mb-3 group-hover:text-primary transition-colors duration-300" />
            <span className="text-[10px] md:text-xs font-bold text-gray-500 uppercase tracking-widest group-hover:text-white transition-colors duration-300">
                {logos[currentIndex].name}
            </span>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    )
  }
)

interface LogoCarouselProps {
  columnCount?: number
  logos: Logo[]
}

export function LogoCarousel({ columnCount = 2, logos }: LogoCarouselProps) {
  const [logoSets, setLogoSets] = useState<Logo[][]>([])
  const [currentTime, setCurrentTime] = useState(0)

  const updateTime = useCallback(() => {
    setCurrentTime((prevTime) => prevTime + 100)
  }, [])

  useEffect(() => {
    const intervalId = setInterval(updateTime, 100)
    return () => clearInterval(intervalId)
  }, [updateTime])

  useEffect(() => {
    const distributedLogos = distributeLogos(logos, columnCount)
    setLogoSets(distributedLogos)
  }, [logos, columnCount])

  return (
    <div className="flex gap-4 md:gap-8 justify-center items-center">
      {logoSets.map((logos, index) => (
        <LogoColumn
          key={index}
          logos={logos}
          index={index}
          currentTime={currentTime}
        />
      ))}
    </div>
  )
}

export { LogoColumn };