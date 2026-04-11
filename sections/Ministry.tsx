"use client"
import { ArrowUpRight } from "lucide-react"
import { motion } from "motion/react"
import { useEffect, useRef } from "react"
import Link from "next/link"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger);

const expressions = [
    {
        number: '01',
        title: 'Femi Steven Enclaves',
        description:
            'A structured discipleship system designed to build strong spiritual foundations and raise disciplined, purpose-driven believers.',
    },
    {
        number: '02',
        title: 'Cell Groups',
        description:
            'Community-based gatherings focused on reaching the lost, building relationships, and strengthening believers in their walk with God.',
    },
    {
        number: '03',
        title: 'DOXA Worship',
        description:
            'A worship expression committed to releasing faith-filled, revelational sounds that edify the Body of Christ and stir spiritual hunger.',
    },
    {
        number: '04',
        title: 'The Exodus Move',
        description:
            'An outreach arm with the mandate of getting the gospel to all and liberating men from captivity through evangelism and crusades.',
    },
];


const Ministry = () => {
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
        <section ref={sectionRef} className="py-24 lg:py-36 bg-white">
            <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
                <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
                    <div>
                        <p className="text-[#BF3C88] uppercase tracking-[0.3em] text-[0.8rem] md:text-[1rem] font-semibold mb-4">
                            Ministry Expressions
                        </p>
                        <h2 className="text-[#0D0D0D] tracking-tight text-[2rem] md:text-[2.3rem]">There's a Place<br />for You</h2>
                    </div>
                    <Link
                        href="/expressions"
                        className="inline-flex items-center gap-2 text-[#0D0D0D]/50 hover:text-[#0D0D0D] font-semibold uppercase text-sm tracking-[0.15em] group transition-colors self-end"
                    >
                        <span>Explore All</span>
                        <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </Link>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-0">
                    {expressions.map((expression, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                            viewport={{ once: true }}
                            className="border border-[#E8E8E8] p-8 lg:p-10 hover:bg-[#0D0D0D] group transition-all duration-500 cursor-pointer"
                        >
                            <p
                                className="text-[#0D0D0D]/20 group-hover:text-white/20 mb-8 transition-colors"
                                style={{
                                    fontFamily: "'Barlow Condensed', sans-serif",
                                    fontSize: '3.5rem',
                                    fontWeight: 900,
                                    lineHeight: 1,
                                    letterSpacing: '-0.02em',
                                }}
                            >
                                {expression.number}
                            </p>
                            <div className="w-6 h-[1px] bg-[#BF3C88] mb-6" />
                            <h4 className="text-[#0D0D0D] group-hover:text-white mb-4 transition-colors">
                                {expression.title}
                            </h4>
                            <p className="text-[#0D0D0D]/50 group-hover:text-white/50 text-base leading-relaxed transition-colors">
                                {expression.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Ministry