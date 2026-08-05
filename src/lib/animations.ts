import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export { gsap, ScrollTrigger }

export function useGsapReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const targets = el.querySelectorAll('[data-reveal]')
    if (!targets.length) return

    const ctx = gsap.context(() => {
      targets.forEach((target) => {
        const delay = target.getAttribute('data-reveal-delay') ?? '0'
        gsap.fromTo(
          target,
          { y: 48, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 1,
            delay: Number(delay),
            ease: 'power3.out',
            scrollTrigger: {
              trigger: target,
              start: 'top 88%',
              toggleActions: 'play none none reverse',
            },
          },
        )
      })
    }, el)

    return () => ctx.revert()
  }, [])

  return ref
}

export function useGsapParallax<T extends HTMLElement>(factor = 0.12) {
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const ctx = gsap.context(() => {
      gsap.to(el, {
        yPercent: -1 * factor * 100,
        ease: 'none',
        scrollTrigger: {
          trigger: el.parentElement,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      })
    }, el)

    return () => ctx.revert()
  }, [factor])

  return ref
}

export function useGsapCounter<T extends HTMLElement>(
  target: number,
  decimals = 0,
  suffix = '',
) {
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const obj = { value: 0 }
    const ctx = gsap.context(() => {
      gsap.to(obj, {
        value: target,
        duration: 2.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 90%',
          once: true,
        },
        onUpdate: () => {
          el.textContent = `${obj.value.toFixed(decimals)}${suffix}`
        },
      })
    }, el)

    return () => ctx.revert()
  }, [target, decimals, suffix])

  return ref
}
