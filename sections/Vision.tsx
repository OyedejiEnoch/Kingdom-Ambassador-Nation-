"use client"
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const Vision = () => {

    const sectionRef = useRef<HTMLElement>(null);
    useEffect(() => {
        const ctx = gsap.context(() => {
            // Fade-in sections - Scoped to this component
            gsap.from(sectionRef.current, {
                y: 60,
                opacity: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 82%',
                    end: 'top 55%',
                    scrub: false,
                    toggleActions: 'play none none none',
                },
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-28 lg:py-40 bg-[#0D0D0D] grain relative overflow-hidden">
            <div className="max-w-[1000px] mx-auto px-6 lg:px-12 text-center">
                <div className="w-12 h-[1px] bg-white/20 mx-auto mb-10" />
                <p className="text-[#BF3C88] uppercase tracking-[0.3em] text-[0.8rem] font-semibold mb-8">Our Vision</p>
                <blockquote
                    className="text-white"
                    style={{
                        fontFamily: "'Barlow Condensed', sans-serif",
                        fontSize: 'clamp(1.6rem, 3.5vw, 2.8rem)',
                        fontWeight: 700,
                        lineHeight: 1.2,
                        letterSpacing: '-0.01em',
                    }}
                >
                    We are a movement raising Kingdom Ambassadors for the end-time mandate—believers who carry
                    God's presence, walk in truth, and advance His Kingdom in every sphere of life.
                </blockquote>
                <div className="w-12 h-[1px] bg-white/20 mx-auto mt-10" />
            </div>
        </section>
    )
}

export default Vision