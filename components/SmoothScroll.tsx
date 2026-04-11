"use client"

import { useEffect, useLayoutEffect } from 'react'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  
  useLayoutEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 2,
      infinite: false,
    })

    // Sync Lenis with GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update)

    // Update Lenis on every GSAP ticker frame
    const update = (time: number) => {
      lenis.raf(time * 1000)
    }

    gsap.ticker.add(update)

    // Disable lag smoothing for smoother synchronization
    gsap.ticker.lagSmoothing(0)

    return () => {
      lenis.destroy()
      gsap.ticker.remove(update)
    }
  }, [])

  return <>{children}</>
}
