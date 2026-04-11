"use client"
import Link from "next/link"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ArrowRight } from "lucide-react"

gsap.registerPlugin(ScrollTrigger);

const Give = () => {
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
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
                <div className="grid lg:grid-cols-12 gap-12 items-center">
                    <div className="lg:col-span-5">
                        <p className="text-[#BF3C88] uppercase tracking-[0.3em] text-[0.8rem] md:text-[1rem] font-semibold mb-6">Partner With Us</p>
                        <h2 className="text-white mb-6 tracking-tight text-[2rem] md:text-[2.3rem]">Partner With the Vision</h2>
                        <div className="w-10 h-[1px] bg-white/20 mb-8" />
                        <p className="text-white/50 leading-relaxed text-base lg:text-lg mb-10">
                            Your giving helps advance the work of the Kingdom—supporting discipleship, outreach, and
                            the raising of Kingdom Ambassadors across nations.
                        </p>
                        <Link
                            href="/give"
                            className="inline-flex items-center gap-3 bg-white text-[#0D0D0D] px-8 py-3.5 font-bold uppercase text-sm tracking-[0.15em] transition-all hover:bg-white/90"
                        >
                            Give Now
                            <ArrowRight size={14} />
                        </Link>
                    </div>

                    <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {[
                            { label: 'Tithe & Offering', bank: 'Globus Bank', acct: '1000509443' },
                            { label: 'Projects & Missions', bank: 'UBA', acct: '1029674810' },
                        ].map((account, i) => (
                            <div key={i} className="border border-white/10 p-8 hover:border-white/20 transition-colors">
                                <p className="text-white/30 text-[0.75rem] uppercase tracking-[0.2em] mb-5">{account.label}</p>
                                <p className="text-white/50 text-sm mb-1">{account.bank}</p>
                                <p
                                    className="text-white mb-2"
                                    style={{
                                        fontFamily: "'Barlow Condensed', sans-serif",
                                        fontSize: '1.8rem',
                                        fontWeight: 700,
                                        letterSpacing: '0.05em',
                                    }}
                                >
                                    {account.acct}
                                </p>
                                <p className="text-white/30 text-sm">Kingdom Ambassadors Nation Ministries</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Give