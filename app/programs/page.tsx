"use client"
import { useEffect } from 'react';
import { motion } from 'motion/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Calendar, Clock, MapPin, ArrowRight, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

export default function Programs() {
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

    return (
        <div className="bg-white">
            {/* ── Hero ── */}
            <section className="relative min-h-[70vh] flex items-end overflow-hidden bg-[#0D0D0D] pt-32">
                <div className="absolute inset-0 grayscale">
                    <Image
                        src="/assets/img12.jpeg"
                        alt="Programs"
                        fill
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-[#0D0D0D]/60 to-[#0D0D0D]/20" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0D0D0D]/50 to-transparent" />
                </div>

                <div className="relative z-10 max-w-[1600px] mx-auto px-6 lg:px-12 pb-20 lg:pb-28 w-full">
                    <div className="overflow-hidden mb-4">
                        <p className="hero-line text-[#BF3C88] uppercase tracking-[0.3em] text-[0.85rem] md:text-[1.1rem] font-semibold">
                            Our Programs
                        </p>
                    </div>
                    <div className="overflow-hidden mb-3">
                        <h1 className="hero-line text-white leading-[0.88] text-[2rem] md:text-[4.3rem]">Programs &</h1>
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
                            Gatherings
                        </h1>
                    </div>
                    <div className="flex items-start gap-8 max-w-xl">
                        <div className="w-10 h-[1px] bg-white/30 mt-3 flex-shrink-0" />
                        <p className="hero-line text-white/60 text-base lg:text-lg leading-relaxed">
                            Strategic gatherings designed to equip believers, deepen spiritual alignment, and advance Kingdom purpose.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── Intro ── */}
            <section className="fade-in-section py-16 lg:py-20 bg-white border-b border-[#E8E8E8]">
                <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
                    <p className="text-[#0D0D0D]/55 text-lg lg:text-xl leading-relaxed max-w-4xl">
                        At Kingdom Ambassadors Nation, our gatherings are designed to cultivate spiritual growth, impart truth,
                        and align believers with God's purpose. Each meeting serves as a platform for teaching, prayer, and
                        transformation—raising believers who are grounded, equipped, and ready for Kingdom assignment.
                    </p>
                </div>
            </section>

            {/* ── Charis Meeting ── */}
            <section className="fade-in-section py-20 lg:py-32 bg-white">
                <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
                    <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                        <div className="lg:col-span-5">
                            <p className="text-[#BF3C88] uppercase tracking-[0.3em] text-[0.8rem] md:text-[1rem]  font-semibold mb-6">Weekly</p>
                            <h2 className="text-[#0D0D0D] mb-4 text-[2rem] md:text-[2.3rem]">Charis Meeting</h2>
                            <p className="text-[#0D0D0D]/30 text-sm uppercase tracking-[0.2em] mb-8">Weekly Teaching Meeting</p>
                            <div className="w-10 h-[1px] bg-[#0D0D0D]/15 mb-8" />

                            <p className="text-[#0D0D0D]/60 leading-relaxed text-base mb-5">
                                The Charis Meeting is our weekly online gathering focused on the systematic teaching of the Word of God.
                                It serves as a consistent platform for spiritual growth, doctrinal clarity, and fellowship.
                            </p>
                            <p className="text-[#0D0D0D]/60 leading-relaxed text-base mb-10">
                                Through in-depth teachings and prayer, believers are grounded in truth, strengthened in faith, and
                                equipped for daily Kingdom living.
                            </p>

                            <div className="space-y-3 mb-10">
                                {[
                                    { icon: <Calendar size={14} />, text: 'Every Tuesday' },
                                    { icon: <Clock size={14} />, text: '9:00pm – 11:00pm' },
                                    { icon: <MapPin size={14} />, text: 'Google Meet (Online)' },
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3 text-[#0D0D0D]/60 text-base">
                                        <span className="text-[#BF3C88]">{item.icon}</span>
                                        {item.text}
                                    </div>
                                ))}
                            </div>

                            <a
                                href="https://meet.google.com/osf-ddca-ohy"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 bg-[#0D0D0D] text-white px-8 py-4 font-bold uppercase text-sm tracking-[0.15em] transition-all hover:bg-[#0D0D0D]/80 group"
                            >
                                <span className="w-1.5 h-1.5 rounded-full bg-[#BF3C88] animate-pulse" />
                                Join Meeting
                            </a>
                        </div>

                        <div className="lg:col-span-7">
                            <div className="aspect-[16/11] overflow-hidden">
                                <Image
                                    src="/assets/img10.jpg"
                                    alt="Charis Meeting"
                                    className="w-full h-full object-cover"
                                    width={500}
                                    height={500}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Annual Programs ── */}
            <section className="fade-in-section py-20 lg:py-32 bg-[#F5F5F3]">
                <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
                    <div className="mb-16">
                        <p className="text-[#BF3C88] uppercase tracking-[0.3em] text-[0.8rem] font-semibold mb-4">Annual</p>
                        <h2 className="text-[#0D0D0D]">Annual Gatherings</h2>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8">
                        {[
                            {
                                number: '01',
                                title: 'Kingdom Ambassadors Camp Meeting',
                                period: 'Annual Gathering · January',
                                desc1: 'The Kingdom Ambassadors Camp Meeting is an annual gathering dedicated to spiritual alignment, consecration, and impartation.',
                                desc2: 'This meeting brings together believers for an extended time of prayer, intensive teaching, worship, and prophetic direction.',
                                img: 'https://images.unsplash.com/photo-1627423894921-c55a18a2de90?=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIweW91bmclMjBwZW9wbGUlMjBwcmF5aW5nJTIwdG9nZXRoZXIlMjBiaWJsZSUyMHN0dWR5fGVufDF8fHx8MTc3NTkwODgxNnww&ixlib=rb-4.1.0&q=80&w=1080',
                            },
                            {
                                number: '02',
                                title: 'Feast of Fat Things',
                                period: 'Word & Prayer Feast · August',
                                desc1: 'The Feast of Fat Things is a teaching gathering centered on delivering deep revelational truths from the Word of God.',
                                desc2: 'Believers are fed with "strong meat," leading to maturity, deeper understanding, and alignment with God\'s purposes.',
                                img: 'https://images.unsplash.com/photo-1606876805991-3757eef672d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcGVuJTIwYmlibGUlMjBkcmFtYXRpYyUyMGxpZ2h0aW5nJTIwc3Bpcml0dWFsJTIwZGFya3xlbnwxfHx8fDE3NzU5MDg4MjN8MA&ixlib=rb-4.1.0&q=80&w=1080',
                            },
                        ].map((program, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.15, duration: 0.7 }}
                                viewport={{ once: true }}
                                className="bg-white"
                            >
                                <div className="aspect-[16/10] overflow-hidden">
                                    <Image
                                        src={program.img}
                                        alt={program.title}
                                        className="w-full h-full object-cover"
                                        width={500}
                                        height={500}
                                    />
                                </div>
                                <div className="p-8 lg:p-10">
                                    <div className="flex items-start justify-between mb-6">
                                        <div>
                                            <p className="text-[#0D0D0D]/25 text-[0.75rem] uppercase tracking-[0.2em] mb-1">{program.period}</p>
                                            <h3 className="text-[#0D0D0D]">{program.title}</h3>
                                        </div>
                                        <p
                                            className="text-[#0D0D0D]/10 flex-shrink-0"
                                            style={{
                                                fontFamily: "'Barlow Condensed', sans-serif",
                                                fontSize: '3rem',
                                                fontWeight: 900,
                                                lineHeight: 1,
                                            }}
                                        >
                                            {program.number}
                                        </p>
                                    </div>
                                    <div className="w-8 h-[1px] bg-[#BF3C88] mb-6" />
                                    <p className="text-[#0D0D0D]/55 text-base leading-relaxed mb-3">{program.desc1}</p>
                                    <p className="text-[#0D0D0D]/55 text-base leading-relaxed mb-8">{program.desc2}</p>
                                    <span className="inline-block border border-[#0D0D0D]/15 text-[#0D0D0D]/40 px-4 py-2 text-[0.8rem] uppercase tracking-[0.15em]">
                                        Registration opens soon
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CTA ── */}
            <section className="fade-in-section py-24 lg:py-32 bg-[#0D0D0D] grain relative overflow-hidden">
                <div className="max-w-[1200px] mx-auto px-6 lg:px-12 text-center">
                    <div className="w-12 h-[1px] bg-white/20 mx-auto mb-10" />
                    <h2 className="text-white mb-6">Stay Engaged</h2>
                    <p className="text-white/50 text-base lg:text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
                        Each gathering is an opportunity for transformation, growth, and alignment. Stay connected and
                        be part of what God is doing through these meetings.
                    </p>
                    <a
                        href="https://meet.google.com/osf-ddca-ohy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 bg-white text-[#0D0D0D] px-10 py-4 font-bold uppercase text-sm tracking-[0.15em] transition-all hover:bg-white/90"
                    >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#BF3C88] animate-pulse" />
                        Join Weekly Meeting
                    </a>
                </div>
            </section>
        </div>
    );
}
