"use client"
import { useEffect } from 'react';
import { motion } from 'motion/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import Leader from '@/sections/Leader';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.hero-line', {
                y: '100%',
                opacity: 0,
                duration: 1.1,
                stagger: 0.15,
                ease: 'power4.out',
                delay: 0.3,
            });

            gsap.utils.toArray<HTMLElement>('.fade-in-section').forEach((section) => {
                gsap.from(section, {
                    y: 60,
                    opacity: 0,
                    duration: 1,
                    scrollTrigger: {
                        trigger: section,
                        start: 'top 82%',
                        toggleActions: 'play none none none',
                    },
                });
            });
        });

        return () => ctx.revert();
    }, []);

    const mandatePillars = [
        {
            number: '01',
            title: 'Heaven Conscious',
            description:
                'Preparing believers for the imminent return of our Lord Jesus Christ by cultivating a lifestyle of holiness, purity, and consecration.',
        },
        {
            number: '02',
            title: 'Raising an Army',
            description:
                'A teaching ministry equipping believers with the knowledge of Christ and building them into strong, disciplined Kingdom ambassadors.',
        },
        {
            number: '03',
            title: 'Strengthening the Saints',
            description:
                'Discerning and strengthening believers in their individual callings, equipping them to influence every sphere of society.',
        },
        {
            number: '04',
            title: 'A Voice of Direction',
            description:
                'Serving as a prophetic voice, bringing clarity, wisdom, and divine direction to the Body of Christ in these last days.',
        },
    ];

    return (
        <div className="bg-white">
            {/* ── Hero ── */}
            <section className="relative min-h-[70vh] flex items-end overflow-hidden bg-[#0D0D0D] pt-32">
                <div className="absolute inset-0 grayscale">
                    <Image
                        src="/assets/img9.jpeg"
                        alt="About KAN"
                        className="w-full h-full object-cover"
                        fill
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-[#0D0D0D]/60 to-[#0D0D0D]/20" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0D0D0D]/50 to-transparent" />
                </div>

                <div className="relative z-10 max-w-[1600px] mx-auto px-6 lg:px-12 pb-20 lg:pb-28 w-full">
                    <div className="overflow-hidden mb-4">
                        <p className="hero-line text-[#BF3C88] uppercase tracking-[0.3em] text-[0.85rem] md:text-[1.1rem] font-semibold">
                            About Us
                        </p>
                    </div>
                    <div className="overflow-hidden mb-3">
                        <h1 className="hero-line text-white leading-[0.88] text-[2rem] md:text-[4.6rem]">About</h1>
                    </div>
                    <div className="overflow-hidden mb-10">
                        <h1
                            className="hero-line text-white leading-[0.88] text-[2rem] md:text-[3rem]"
                            style={{
                                fontStyle: 'italic',
                                color: 'transparent',
                                WebkitTextStroke: '1px rgba(255,255,255,0.5)',
                            }}
                        >
                            Kingdom<br />Ambassadors
                        </h1>
                    </div>
                    <div className="flex items-start gap-8 max-w-xl">
                        <div className="w-10 h-[1px] bg-white/30 mt-3 flex-shrink-0" />
                        <p className="hero-line text-white/60 text-base lg:text-lg leading-relaxed">
                            A movement committed to raising consecrated believers, equipped for Kingdom influence
                            and apostolic assignment.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── Our Story ── */}
            <section className="fade-in-section py-24 lg:py-36 bg-white">
                <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
                    <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
                        <div>
                            <p className="text-[#BF3C88] uppercase tracking-[0.3em] text-[0.8rem] md:text-[1rem] font-semibold mb-6">Our Story</p>
                            <h2 className="text-[#0D0D0D] mb-8 tracking-tight text-[2rem] md:text-[2.3rem]">When It Started</h2>
                            <div className="w-10 h-[1px] bg-[#0D0D0D]/20 mb-8" />
                            <div className="space-y-5 text-[#0D0D0D]/60 leading-relaxed text-base lg:text-lg">
                                <p>
                                    Kingdom Ambassadors Nation (KAN) was conceived in 2020, however, it started fully as
                                    a ministry in 2023 out of a burden to raise end-time armies and Kingdom ambassadors
                                    for the apostolic mandate across all spheres of life.
                                </p>
                                <p>
                                    The ministry began as a response to the growing need for intentional discipleship,
                                    apostolic formation, and Kingdom consciousness among believers.
                                </p>
                            </div>
                        </div>

                        <div>
                            <p className="text-[#BF3C88] uppercase tracking-[0.3em] text-[0.8rem] md:text-[1rem] font-semibold mb-6">Purpose</p>
                            <h2 className="text-[#0D0D0D] mb-8 tracking-tight text-[2rem] md:text-[2.3rem]">Why It Started</h2>
                            <div className="w-10 h-[1px] bg-[#0D0D0D]/20 mb-8" />
                            <div className="space-y-5 text-[#0D0D0D]/60 leading-relaxed text-base lg:text-lg">
                                <p>
                                    KAN was established to address the gap between salvation and spiritual maturity in
                                    the Body of Christ. Many believers come to faith but lack the spiritual training,
                                    discipline, and apostolic understanding required to represent Christ effectively.
                                </p>
                                <p>
                                    The ministry therefore exists to prepare believers to live consecrated lives and
                                    stand as true representatives of God's Kingdom in every sphere of society.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Vision */}
                    <div className="mt-20 lg:mt-28 grid lg:grid-cols-12 gap-12 items-center">
                        <div className="lg:col-span-5 order-2 lg:order-1">
                            <div className="aspect-[4/5] overflow-hidden">
                                <Image
                                    src="/assets/img9.jpeg"
                                    alt="Vision"
                                    className="w-full h-full object-cover"
                                    width={500}
                                    height={500}
                                />
                            </div>
                        </div>

                        <div className="lg:col-span-6 lg:col-start-7 order-1 lg:order-2">
                            <p className="text-[#BF3C88] uppercase tracking-[0.3em] text-[0.8rem] md:text-[1rem] font-semibold mb-6">The Vision</p>
                            <h2 className="text-[#0D0D0D] mb-8 tracking-tight text-[2rem] md:text-[2.3rem]">The Vision Behind It</h2>
                            <div className="w-10 h-[1px] bg-[#0D0D0D]/20 mb-8" />
                            <div className="space-y-5 text-[#0D0D0D]/60 leading-relaxed text-base lg:text-lg">
                                <p>
                                    The vision of Kingdom Ambassadors Nation is to raise an end-time army of believers
                                    who are deeply grounded in the Word of God, consecrated in lifestyle, and equipped
                                    for apostolic assignment.
                                </p>
                                <p>
                                    These believers are trained to influence their generation and establish the Kingdom
                                    of God in their various spheres while living in readiness for the return of the
                                    Lord Jesus Christ.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Our Mandate ── */}
            <section className="fade-in-section py-24 lg:py-36 bg-[#F5F5F3]">
                <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
                    <div className="mb-16">
                        <p className="text-[#BF3C88] uppercase tracking-[0.3em] text-[0.8rem] md:text-[1rem] font-semibold mb-4">Our Mandate</p>
                        <h2 className="text-[#0D0D0D] tracking-tight text-[2rem] md:text-[2.3rem]">Four Core Pillars</h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-0">
                        {mandatePillars.map((pillar, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                                viewport={{ once: true }}
                                className="border border-[#E0E0DC] p-8 lg:p-10 bg-white hover:bg-[#0D0D0D] group transition-all duration-500"
                            >
                                <p
                                    className="text-[#0D0D0D]/15 group-hover:text-white/15 mb-8 transition-colors"
                                    style={{
                                        fontFamily: "'Barlow Condensed', sans-serif",
                                        fontSize: '3.5rem',
                                        fontWeight: 900,
                                        lineHeight: 1,
                                    }}
                                >
                                    {pillar.number}
                                </p>
                                <div className="w-6 h-[1px] bg-[#BF3C88] mb-6" />
                                <h4 className="text-[#0D0D0D] group-hover:text-white mb-4 transition-colors">{pillar.title}</h4>
                                <p className="text-[#0D0D0D]/50 group-hover:text-white/50 text-base leading-relaxed transition-colors">
                                    {pillar.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Ministry Expressions ── */}
            <section className="fade-in-section py-24 lg:py-36 bg-white">
                <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
                    <div className="mb-16">
                        <p className="text-[#BF3C88] uppercase tracking-[0.3em] text-[0.8rem] md:text-[1rem] font-semibold mb-4">How We Function</p>
                        <h2 className="text-[#0D0D0D] tracking-tight text-[2rem] md:text-[2.3rem]">Ministry Expressions</h2>
                    </div>

                    <div className="space-y-0">
                        {[
                            { title: 'Femi Steven Enclaves', tag: 'Discipleship', desc: 'The discipleship arm where believers undergo intentional spiritual training designed to build strong foundations and cultivate disciplined Kingdom ambassadors. Through structured teaching, mentorship, and accountability, lives are transformed.' },
                            { title: 'Cell Groups', tag: 'Community', desc: 'KAN cell groups are present across multiple campuses, creating communities where believers grow together in faith, build relationships, and are equipped to reach others.' },
                            { title: 'DOXA Worship', tag: 'Worship', desc: 'The worship expression dedicated to releasing faith-filled, revelational sounds that edify the Body of Christ and stir a deeper hunger for God. It is about ministry, expression, and encountering God deeply.' },
                            { title: 'The Exodus Move', tag: 'Outreach', desc: 'An outreach arm with the mandate of getting the gospel to all and liberating men from captivity through all forms of evangelism, outreaches, and crusades across the nation and the world.' },
                        ].map((item, i) => (
                            <div key={i} className="border-t border-[#E8E8E8] py-10 grid grid-cols-1 lg:grid-cols-12 gap-6">
                                <div className="lg:col-span-1">
                                    <span className="text-[0.75rem] uppercase tracking-[0.2em] text-[#BF3C88] font-semibold">
                                        {item.tag}
                                    </span>
                                </div>
                                <div className="lg:col-span-4">
                                    <h3 className="text-[#0D0D0D] tracking-tight text-[1rem] md:text-[1.2rem]">{item.title}</h3>
                                </div>
                                <div className="lg:col-span-7">
                                    <p className="text-[#0D0D0D]/55 leading-relaxed text-base">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                        <div className="border-t border-[#E8E8E8]" />
                    </div>
                </div>
            </section>

            <Leader />

            {/* ── Join CTA ── */}
            <section className="fade-in-section py-24 lg:py-32 bg-[#0D0D0D] grain relative overflow-hidden">
                <div className="max-w-[1200px] mx-auto px-6 lg:px-12 text-center">
                    <div className="w-12 h-[1px] bg-white/20 mx-auto mb-10" />
                    <h2 className="text-white mb-8">Be Part of What<br />God Is Doing</h2>
                    <p className="text-white/50 text-base lg:text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
                        This is more than a ministry—it is a movement. A call to consecration, alignment, and Kingdom
                        representation. Join us as we grow, are equipped, and are sent to fulfill God's purpose.
                    </p>
                    <Link
                        href="/programs"
                        className="inline-flex items-center gap-3 bg-white text-[#0D0D0D] px-10 py-4 font-bold uppercase text-sm tracking-[0.15em] transition-all hover:bg-white/90"
                    >
                        Join the Community
                        <ArrowRight size={14} />
                    </Link>
                </div>
            </section>
        </div>
    );
}
