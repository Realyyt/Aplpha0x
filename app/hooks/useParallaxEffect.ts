import { useParallax } from "react-scroll-parallax"
import { useEffect, useState } from "react"

export const useParallaxEffect = (speed: number) => {
  const [isVisible, setIsVisible] = useState(false)
  const parallax = useParallax<HTMLDivElement>({
    speed,
    opacity: [0.5, 1],
    scale: [0.8, 1],
    easing: "easeInQuad",
  })

  useEffect(() => {
    const handleScroll = () => {
      if (parallax.ref.current) {
        const rect = parallax.ref.current.getBoundingClientRect()
        setIsVisible(rect.top < window.innerHeight && rect.bottom > 0)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [parallax])

  return { ref: parallax.ref, isVisible }
} 