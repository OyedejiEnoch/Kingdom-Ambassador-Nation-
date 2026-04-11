"use client"
import { useEffect, useRef } from "react"
import { motion } from "motion/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger);

const pillars = [
    {
        number: '1',
        title: 'Heaven Conscious',
        description:
            'We are committed to preparing believers for the imminent return of our Lord Jesus Christ by teaching the gospel and cultivating a lifestyle of holiness, purity, and consecration.',
    },
    {
        number: '2',
        title: 'Raising an Army',
        description:
            'We function as a teaching ministry, discipling and equipping believers with the knowledge of Christ so they can become true ambassadors of His Kingdom.',
    },
    {
        number: '3',
        title: 'Strengthening the Saints',
        description:
            'We discern and strengthen believers in their individual callings, equipping them to influence every sphere of society and establish God\'s Kingdom on earth.',
    },
    {
        number: '4',
        title: 'Voice of Wisdom and Direction',
        description:
            'We serve as a prophetic voice bringing wisdom, clarity, and divine direction to the Body of Christ in these last days. We commit to intensive teaching, prayer, fellowship, and spiritual formation.',
    },
];

const Mandate = () => {
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

            {/* Decorative background cross-hatch lines */}
            <div className="absolute inset-0 pointer-events-none select-none" aria-hidden>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-full bg-white/[0.03]" />
                <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full h-[1px] bg-white/[0.03]" />
            </div>

            <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">

                {/* ── Header ── */}
                <div className="text-center mb-20 lg:mb-28">
                    {/* Pill label */}
                    <div className="inline-flex items-center border border-white/15 px-5 py-2 mb-10">
                        <span className="text-white/50 uppercase tracking-[0.3em] text-[0.75rem] font-semibold">
                            Our Mandate
                        </span>
                    </div>

                    {/* Main headline — Barlow Condensed */}
                    <h2
                        className="text-white mb-5 leading-[1.2]"
                        style={{
                            fontFamily: "'Barlow Condensed', sans-serif",
                            fontWeight: 700,
                        }}
                    >
                        Our Divine Mandate<br />
                        Raising an Army, Redeploying a People
                    </h2>

                    {/* Pink italic sub-headline */}
                    <p
                        className="text-[#BF3C88] text-2xl lg:text-3xl mb-6"
                        style={{ fontStyle: 'italic' }}
                    >
                        in Christ, for Christ, with joy.
                    </p>

                    {/* Divider */}
                    <div className="w-10 h-[1px] bg-white/20 mx-auto mb-6" />

                    <p className="text-white/40 text-base max-w-md mx-auto leading-relaxed">
                        Our divine mandate of “Raising an Army” is carried out through the following pillars:
                    </p>
                </div>

                {/* ── Pillars Grid ── */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                    {pillars.map((pillar, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                            viewport={{ once: true }}
                            className={`group flex gap-6 p-10 border-white/[0.07] hover:bg-white/[0.03] transition-colors duration-300 ${i === 0 ? 'border-r border-b' :
                                i === 1 ? 'border-b' :
                                    i === 2 ? 'border-r' : ''
                                }`}
                        >
                            {/* Number circle */}
                            <div className="flex-shrink-0 pt-1">
                                <div className="w-10 h-10 rounded-full border border-[#BF3C88]/60 flex items-center justify-center group-hover:border-[#BF3C88] transition-colors duration-300">
                                    <span
                                        className="text-[#BF3C88] leading-none"
                                        style={{
                                            fontFamily: "'Barlow Condensed', sans-serif",
                                            fontSize: '1rem',
                                            fontWeight: 700,
                                        }}
                                    >
                                        {pillar.number}
                                    </span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="flex-1">
                                <h4 className="text-white text-xl font-bold mb-4 leading-snug">
                                    {pillar.title}
                                </h4>

                                {/* Pink vertical rule */}
                                <div className="w-[1px] h-8 bg-[#BF3C88]/40 mb-4 group-hover:bg-[#BF3C88]/80 transition-colors duration-300" />

                                <p className="text-white/45 text-base leading-relaxed group-hover:text-white/60 transition-colors duration-300">
                                    {pillar.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default Mandate