"use client"
import { useEffect, useRef } from "react"
import { motion } from "motion/react"
import { ArrowUpRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger);

const Leader = () => {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(sectionRef.current, {
                y: 60,
                opacity: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 82%',
                    end: 'top 55%',
                    toggleActions: 'play none none none',
                },
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-24 lg:py-36 bg-[#0D0D0D] grain relative overflow-hidden">

            {/* Subtle decorative rule */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-white/[0.06]" />
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/[0.06]" />

            <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">

                    {/* ── Image Column ── */}
                    <motion.div
                        className="lg:col-span-5 relative"
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                        viewport={{ once: true }}
                    >
                        {/* Decorative offset border — no gradient, matches site's accent treatment */}
                        <div className="absolute -top-4 -left-4 w-full h-full border border-[#BF3C88]/20 z-0" />

                        <div className="relative aspect-[4/5] overflow-hidden  z-10">
                            <Image
                                src="/assets/pastorFemi.png"
                                alt="Pastor Femi Steven"
                                className="w-full h-full object-cover object-top"
                                fill
                            />
                            {/* Solid dark veil — no gradient */}
                            <div className="absolute inset-0 bg-[#0D0D0D]/20" />
                        </div>

                        {/* Pink corner accent */}
                        <div className="absolute -bottom-4 -right-4 w-16 h-16 border-b-2 border-r-2 border-[#BF3C88] z-20" />
                    </motion.div>

                    {/* ── Text Column ── */}
                    <motion.div
                        className="lg:col-span-7"
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                        viewport={{ once: true }}
                    >
                        {/* Section label */}
                        <p className="uppercase tracking-[0.35em] text-[0.8rem] font-semibold mb-8">
                            <span className="text-white/60">Our Lead </span>
                            <span className="text-[#BF3C88]">Pastor</span>
                        </p>

                        {/* Name — Barlow Condensed */}
                        <h2
                            className="text-white mb-2 leading-[0.9]"
                            style={{
                                fontFamily: "'Barlow Condensed', sans-serif",
                                fontWeight: 700,
                            }}
                        >
                            Femi Steven
                        </h2>

                        {/* Role tag */}
                        <p className="text-[#BF3C88] uppercase tracking-[0.2em] text-sm font-semibold mb-8">
                            Set Man · Kingdom Ambassadors Nation
                        </p>

                        <div className="w-10 h-[1px] bg-[#BF3C88] mb-8" />

                        {/* Bio */}
                        <div className="space-y-5 text-white/50 text-base leading-relaxed mb-10">
                            <p>
                                Pastor Femi Steven is a passionate preacher and teacher of God&apos;s Word. He is
                                passionate about growth and being purposeful, as he believes everyone has a spot
                                in God&apos;s grand end-time agenda.
                            </p>
                            <p>
                                This has led him to being high and loud on discipleship. He is the Set Man of
                                Kingdom Ambassadors Nation, a non-denominational ministry with the mandate of{' '}
                                <span className="text-white/80 font-semibold uppercase tracking-wide text-sm">
                                    raising an army for the end-time apostolic mandate.
                                </span>
                            </p>
                            <p>
                                The passion of carrying out this vision has stirred up several convergences across
                                different states in Nigeria, chiefly the Campus Discipleship Meetings and the
                                weekly virtual Charis Meeting.
                            </p>
                        </div>

                        {/* Key facts strip — site style: border-divided */}
                        <div className="grid grid-cols-3 border-t border-white/[0.08] mb-10">
                            {[
                                { value: '2023', label: 'Ministry Founded' },
                                { value: '5+', label: 'States Reached' },
                                { value: '1K+', label: 'Lives Impacted' },
                            ].map((stat, i) => (
                                <div
                                    key={i}
                                    className={`py-6 pr-6 ${i < 2 ? 'border-r border-white/[0.08]' : ''}`}
                                >
                                    <p
                                        className="text-white leading-none mb-1"
                                        style={{
                                            fontFamily: "'Barlow Condensed', sans-serif",
                                            fontSize: '2rem',
                                            fontWeight: 700,
                                            letterSpacing: '-0.02em',
                                        }}
                                    >
                                        {stat.value}
                                    </p>
                                    <p className="text-white/30 text-xs uppercase tracking-[0.2em]">{stat.label}</p>
                                </div>
                            ))}
                        </div>

                        {/* CTA */}
                        <Link
                            href="/about"
                            className="inline-flex items-center gap-3 border border-white/20 text-white hover:border-white/60 px-8 py-3.5 font-bold uppercase text-sm tracking-[0.15em] transition-all group"
                        >
                            Read More
                            <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </Link>
                    </motion.div>

                </div>
            </div>
        </section>
    )
}

export default Leader