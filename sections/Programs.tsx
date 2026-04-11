"use client"
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { motion } from "motion/react";

gsap.registerPlugin(ScrollTrigger);


const programs = [
    {
        tag: 'Weekly',
        title: 'Charis Meeting',
        description: 'Weekly online gathering focused on systematic teaching, prayer, and spiritual growth.',
        detail: 'Every Tuesday · 9–11pm · Google Meet',
        cta: 'Join Meeting',
        link: 'https://meet.google.com/osf-ddca-ohy',
        external: true,
    },
    {
        tag: 'Annual',
        title: 'Kingdom Ambassadors Camp Meeting',
        description: 'An annual gathering dedicated to alignment, consecration, and impartation for the year ahead.',
        detail: 'Every January',
        cta: 'Learn More',
        link: '/programs',
        external: false,
    },
    {
        tag: 'Annual',
        title: 'Feast of Fat Things',
        description: 'A teaching meeting centered on deep revelational truths, designed to bring believers into maturity.',
        detail: 'Every August',
        cta: 'Learn More',
        link: '/programs',
        external: false,
    },
];

const Programs = () => {
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
        <section ref={sectionRef} className="py-24 lg:py-36 bg-[#F5F5F3]">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
                <div className="mb-16">
                    <p className="text-[#BF3C88] uppercase tracking-[0.3em] text-[0.8rem] md:text-[1rem] font-semibold mb-4">Our Gatherings</p>
                    <h2 className="text-[#0D0D0D] tracking-tight text-[2rem] md:text-[2.3rem]">Programs & Events</h2>
                </div>

                <div className="space-y-0">
                    {programs.map((program, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            viewport={{ once: true }}
                            className="border-t border-[#0D0D0D]/10 py-8 grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-center group hover:bg-white transition-all duration-300 px-6 -mx-6"
                        >
                            <div className="lg:col-span-1">
                                <span className="text-[0.75rem] uppercase tracking-[0.2em] text-[#BF3C88] font-semibold">
                                    {program.tag}
                                </span>
                            </div>
                            <div className="lg:col-span-5">
                                <h4 className="text-[#0D0D0D] text-xl tracking-tight">{program.title}</h4>
                            </div>
                            <div className="lg:col-span-4">
                                <p className="text-[#0D0D0D]/50 text-base leading-relaxed">{program.description}</p>
                                <p className="text-[#0D0D0D]/40 font-semibold text-sm mt-2 uppercase tracking-wider">{program.detail}</p>
                            </div>
                            <div className="lg:col-span-2 flex justify-start lg:justify-end">
                                {program.external ? (
                                    <a
                                        href={program.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-[#0D0D0D] hover:text-[#BF3C88] font-semibold uppercase text-sm tracking-[0.15em] group transition-colors"
                                    >
                                        {program.cta}
                                        <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                    </a>
                                ) : (
                                    <Link
                                        href={program.link}
                                        className="inline-flex items-center gap-2 text-[#0D0D0D] hover:text-[#BF3C88] font-semibold uppercase text-sm tracking-[0.15em] group transition-colors"
                                    >
                                        {program.cta}
                                        <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                    </Link>
                                )}
                            </div>
                        </motion.div>
                    ))}
                    <div className="border-t border-[#0D0D0D]/10" />
                </div>
            </div>
        </section>
    )
}

export default Programs