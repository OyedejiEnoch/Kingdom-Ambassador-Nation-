"use client"
import Image from "next/image"
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowRight } from "lucide-react";
import Link from "next/link";



const Hero = () => {
    const heroRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Staggered hero reveal
            gsap.from('.hero-line', {
                y: '100%',
                opacity: 0,
                duration: 1.1,
                stagger: 0.15,
                ease: 'power4.out',
                delay: 0.3,
            });
        });

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={heroRef}
            className="relative min-h-screen flex items-end overflow-hidden bg-[#0D0D0D] pt-24"
        >
            {/* Background Image */}
            <div className="absolute inset-0 grayscale">
                <Image
                    src="/assets/img12.jpeg"
                    alt="Kingdom Ambassadors Nation"
                    className="w-full h-full object-cover scale-105"
                    style={{ transformOrigin: 'center center' }}
                    width={1080}
                    height={1920}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-[#0D0D0D]/60 to-[#0D0D0D]/20" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0D0D0D]/50 to-transparent" />
            </div>

            {/* Hero Content — bottom-aligned, left */}
            <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 lg:px-12 pb-20 lg:pb-28">
                {/* Eyebrow */}
                <div className="overflow-hidden mb-6">
                    <p className="hero-line text-[#BF3C88] uppercase tracking-[0.3em] text-[0.85rem] md:text-[1.1rem] font-semibold">
                        Kingdom Ambassadors Nation
                    </p>
                </div>

                {/* Main Headline */}
                <div className="overflow-hidden mb-3">
                    <h1 className="hero-line text-white leading-[0.88] font-semibold text-[2rem] md:text-[4.6rem]" style={{ maxWidth: '12ch' }}>
                        Raising an
                    </h1>
                </div>
                <div className="overflow-hidden mb-3">
                    <h1
                        className="hero-line text-white leading-[0.88] text-[2rem] md:text-[3rem]"
                        style={{
                            maxWidth: '12ch',
                            fontStyle: 'italic',
                            color: 'transparent',
                            WebkitTextStroke: '1px rgba(255,255,255,0.5)',
                        }}
                    >
                        End-Time
                    </h1>
                </div>
                <div className="overflow-hidden mb-10">
                    <h1 className="hero-line text-white leading-[0.88] font-semibold text-[3rem] md:text-[4rem]" style={{ maxWidth: '12ch' }}>
                        Army
                    </h1>
                </div>

                {/* Divider line + description */}
                <div className="overflow-hidden mb-10 flex items-start gap-8">
                    <div className="w-12 h-[1px] bg-white/30 mt-3 flex-shrink-0" />
                    <p className="hero-line text-white/60 text-base lg:text-lg max-w-lg leading-relaxed">
                        Equipping believers through the Word, prayer, and discipleship to live consecrated lives
                        and represent God's Kingdom in every sphere.
                    </p>
                </div>

                {/* CTAs */}
                <div className="overflow-hidden">
                    <div className="hero-line flex flex-wrap items-center gap-4">
                        <a
                            href="https://meet.google.com/osf-ddca-ohy"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 bg-white text-[#0D0D0D] px-8 py-3.5 font-bold uppercase text-sm tracking-[0.15em] transition-all duration-300 hover:bg-white/90 group"
                        >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#BF3C88] animate-pulse" />
                            Join Live
                        </a>
                        <Link
                            href="/about"
                            className="inline-flex items-center gap-2 border border-white/30 text-white px-8 py-3.5 font-semibold uppercase text-sm tracking-[0.15em] transition-all duration-300 hover:border-white/70"
                        >
                            Our Story
                            <ArrowRight size={14} />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 right-8 lg:right-12 flex flex-col items-center gap-2 z-10">
                <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-white/30 to-white/60" />
                <p className="text-white/30 text-[0.65rem] uppercase tracking-[0.2em] rotate-90 origin-center translate-y-4">
                    Scroll
                </p>
            </div>
        </section>
    )
}

export default Hero