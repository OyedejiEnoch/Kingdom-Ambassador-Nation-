"use client"
import { useEffect } from 'react';
import { motion } from 'motion/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MessageCircle, ArrowRight, Play, } from 'lucide-react';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

const sermons = [
    { title: 'The Apostolic Mandate for the End Times', series: 'Charis Meeting', date: 'March 2026' },
    { title: 'Living a Consecrated Life Before God', series: 'Charis Meeting', date: 'Feb 2026' },
    { title: 'Faith, Righteousness & Kingdom Standing', series: 'Feast of Fat Things 2025', date: 'Aug 2025' },
    { title: 'Building Strong Spiritual Foundations', series: 'Camp Meeting 2026', date: 'Jan 2026' },
    { title: 'Raising Kingdom Ambassadors', series: 'Charis Meeting', date: 'Jan 2026' },
    { title: 'The Power of the Word in Discipleship', series: 'Charis Meeting', date: 'Dec 2025' },
];

export default function Media() {
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
                        src="/assets/img15.jpeg"
                        alt="Media"
                        fill
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-[#0D0D0D]/60 to-[#0D0D0D]/20" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0D0D0D]/50 to-transparent" />
                </div>

                <div className="relative z-10 max-w-[1600px] mx-auto px-6 lg:px-12 pb-20 lg:pb-28 w-full">
                    <div className="overflow-hidden mb-4">
                        <p className="hero-line text-[#BF3C88] uppercase tracking-[0.3em] text-[0.85rem] md:text-[1.1rem] font-semibold">
                            Media
                        </p>
                    </div>
                    <div className="overflow-hidden mb-3">
                        <h1 className="hero-line text-white leading-[0.88] text-[2rem] md:text-[4.3rem]">Be Strengthened</h1>
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
                            by the Word
                        </h1>
                    </div>
                    <div className="flex items-start gap-8 max-w-xl">
                        <div className="w-10 h-[1px] bg-white/30 mt-3 flex-shrink-0" />
                        <p className="hero-line text-white/60 text-base lg:text-lg leading-relaxed">
                            Access life-transforming teachings that will deepen your understanding of God's Word and
                            strengthen your walk with Him.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── Video Messages ── */}
            <section className="fade-in-section py-20 lg:py-32 bg-white">
                <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
                    <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
                        <div>
                            <p className="text-[#BF3C88] uppercase tracking-[0.3em] text-[0.8rem] font-semibold mb-4">
                                Video Messages
                            </p>
                            <h2 className="text-[#0D0D0D]">Watch Sermons<br />&amp; Teachings</h2>
                        </div>
                        <a
                            href="https://www.youtube.com/@FEMI_STEVEN"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 border border-[#0D0D0D]/15 text-[#0D0D0D]/50 hover:text-[#0D0D0D] hover:border-[#0D0D0D]/40 px-6 py-3 font-semibold uppercase text-sm tracking-[0.15em] transition-all self-end"
                        >
                            {/* <Youtube size={14} /> */}
                            View All on YouTube
                        </a>
                    </div>

                    {/* Sermon Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-0">
                        {sermons.map((sermon, index) => (
                            <motion.a
                                key={index}
                                href="https://www.youtube.com/@FEMI_STEVEN"
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.07, duration: 0.6 }}
                                viewport={{ once: true }}
                                className="group border border-[#E8E8E8] p-8 hover:bg-[#0D0D0D] transition-all duration-400 cursor-pointer block"
                            >
                                {/* Thumbnail placeholder */}
                                <div className="aspect-video bg-[#F5F5F3] group-hover:bg-white/5 mb-6 overflow-hidden relative transition-colors">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-12 h-12 border border-[#0D0D0D]/15 group-hover:border-white/20 flex items-center justify-center transition-colors group-hover:bg-[#BF3C88]">
                                            <Play size={18} className="text-[#0D0D0D]/30 group-hover:text-white transition-colors ml-0.5" />
                                        </div>
                                    </div>
                                </div>

                                <p className="text-[#BF3C88] text-[0.75rem] uppercase tracking-[0.2em] mb-2">
                                    {sermon.series}
                                </p>
                                <h4 className="text-[#0D0D0D] group-hover:text-white transition-colors mb-2 leading-snug">
                                    {sermon.title}
                                </h4>
                                <p className="text-[#0D0D0D]/35 group-hover:text-white/35 text-sm uppercase tracking-wider transition-colors">
                                    {sermon.date}
                                </p>
                            </motion.a>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Audio Section ── */}
            <section className="fade-in-section py-20 lg:py-32 bg-[#F5F5F3]">
                <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <p className="text-[#BF3C88] uppercase tracking-[0.3em] text-[0.8rem] font-semibold mb-6">
                                Audio Messages
                            </p>
                            <h2 className="text-[#0D0D0D] mb-6">Listen to<br />Sermon Audios</h2>
                            <div className="w-10 h-[1px] bg-[#0D0D0D]/15 mb-8" />
                            <p className="text-[#0D0D0D]/55 text-base leading-relaxed mb-5">
                                All sermon audios are available on our Telegram channel. Access teachings on the go and
                                grow in your understanding of God's Word wherever you are.
                            </p>
                            <p className="text-[#0D0D0D]/55 text-base leading-relaxed mb-10">
                                Join our Telegram community to receive the latest messages, updates, and spiritual resources directly on your device.
                            </p>
                            <a
                                href="https://t.me/KANetwork"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 bg-[#0D0D0D] text-white px-8 py-4 font-bold uppercase text-sm tracking-[0.15em] transition-all hover:bg-[#0D0D0D]/80"
                            >
                                <MessageCircle size={14} />
                                Join Telegram Channel
                            </a>
                        </div>

                        {/* Audio List */}
                        <div className="space-y-0">
                            {sermons.slice(0, 4).map((sermon, i) => (
                                <a
                                    key={i}
                                    href="https://t.me/KANetwork"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-5 py-5 border-t border-[#0D0D0D]/10 hover:bg-white px-4 -mx-4 group transition-all"
                                >
                                    <div className="w-10 h-10 bg-[#0D0D0D] flex items-center justify-center flex-shrink-0 group-hover:bg-[#BF3C88] transition-colors">
                                        <Play size={14} className="text-white ml-0.5" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-[#0D0D0D] text-base group-hover:text-[#BF3C88] transition-colors truncate">
                                            {sermon.title}
                                        </p>
                                        <p className="text-[#0D0D0D]/35 text-sm mt-0.5">{sermon.series} · {sermon.date}</p>
                                    </div>
                                    <ArrowRight size={14} className="text-[#0D0D0D]/20 group-hover:text-[#BF3C88] flex-shrink-0 transition-colors" />
                                </a>
                            ))}
                            <div className="border-t border-[#0D0D0D]/10" />
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Connect CTA ── */}
            <section className="fade-in-section py-24 lg:py-32 bg-[#0D0D0D] grain relative overflow-hidden">
                <div className="max-w-[1200px] mx-auto px-6 lg:px-12 text-center">
                    <div className="w-12 h-[1px] bg-white/20 mx-auto mb-10" />
                    <h2 className="text-white mb-6">Stay Connected</h2>
                    <p className="text-white/50 text-base lg:text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
                        Subscribe to our channels to receive the latest teachings, worship sounds, and important updates.
                        Be part of a community committed to growth and Kingdom advancement.
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-4">
                        <a
                            href="https://www.youtube.com/@FEMI_STEVEN"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 bg-white text-[#0D0D0D] px-8 py-4 font-bold uppercase text-sm tracking-[0.15em] transition-all hover:bg-white/90"
                        >
                            {/* <Youtube size={14} /> */}
                            YouTube
                        </a>
                        <a
                            href="https://t.me/KANetwork"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 border border-white/25 text-white hover:border-white/60 px-8 py-4 font-bold uppercase text-sm tracking-[0.15em] transition-all"
                        >
                            <MessageCircle size={14} />
                            Telegram
                        </a>
                    </div>
                </div>
            </section>

            {/* ── Social Links ── */}
            <section className="fade-in-section py-16 lg:py-20 bg-white border-t border-[#E8E8E8]">
                <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                        <p className="text-[#0D0D0D]/40 text-sm uppercase tracking-[0.2em]">Follow Us Online</p>
                        <div className="flex flex-wrap items-center justify-center gap-8">
                            <a
                                href="https://www.instagram.com/kanationofficial"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-[#0D0D0D]/40 hover:text-[#0D0D0D] font-semibold uppercase text-sm tracking-[0.15em] transition-colors"
                            >
                                {/* <Instagram size={14} /> */}
                                Instagram
                            </a>
                            <a
                                href="https://chat.whatsapp.com/L4UUKcT1cZuAGSQrqL9FI4"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-[#0D0D0D]/40 hover:text-[#0D0D0D] font-semibold uppercase text-sm tracking-[0.15em] transition-colors"
                            >
                                <MessageCircle size={14} />
                                WhatsApp
                            </a>
                            <a
                                href="https://www.youtube.com/@FEMI_STEVEN"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-[#0D0D0D]/40 hover:text-[#0D0D0D] font-semibold uppercase text-sm tracking-[0.15em] transition-colors"
                            >
                                {/* <Youtube size={14} /> */}
                                YouTube
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
