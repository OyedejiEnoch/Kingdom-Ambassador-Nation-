"use client"
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, ChevronDown, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

export default function Expressions() {
    const [showCells, setShowCells] = useState(false);

    const cellGroups = [
        { name: 'LASU', link: 'https://chat.whatsapp.com/JSOsr8eq5xH2XK0kdJbAlF' },
        { name: 'FUOYE', link: 'https://chat.whatsapp.com/D5Drmcfij8aLchpdHIGJMV' },
        { name: 'UI', link: 'https://chat.whatsapp.com/C01FvTVrIrnHJQA4frSbGC' },
        { name: 'OAU', link: 'https://chat.whatsapp.com/IJ7GjVpQHsA7QWozafRIBC' },
        { name: 'UNILAG', link: 'https://chat.whatsapp.com/JKwuk5WlnVe0wETwGB5r4w' },
        { name: 'RUN', link: 'https://chat.whatsapp.com/FAAXHkXkjcR3d47DSF48u9' },
        { name: 'UNILORIN', link: 'https://chat.whatsapp.com/CJtFfrcJrmp5yggRBeghHt' },
    ];

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

    const expressions = [
        {
            number: '01',
            tag: 'Discipleship Expression',
            title: 'Femi Steven Enclaves',
            paragraphs: [
                'Femi Steven Enclaves is the discipleship arm of the ministry, designed to provide intentional spiritual training and formation for believers.',
                'Through structured teaching, mentorship, and accountability, participants are equipped with strong biblical foundations, disciplined spiritual habits, and clarity of purpose.',
                'This expression focuses on raising believers who are not only grounded in truth but are also prepared to live out their Kingdom assignment with conviction and consistency.',
            ],
            img: '/assets/img6.jpeg',
            imgRight: true,
        },
        {
            number: '02',
            tag: 'Community Expression',
            title: 'Cell Groups',
            paragraphs: [
                'Our cell groups are community-based gatherings established across campuses to foster spiritual growth, fellowship, and outreach.',
                'These groups serve as smaller communities where believers are nurtured, strengthened, and equipped to grow in their faith while building meaningful relationships.',
                'Through the cell system, we are able to reach more people, disciple effectively, and ensure that every individual is connected and growing.',
            ],
            img: '/assets/img2.jpg',
            imgRight: false,
        },
        {
            number: '03',
            tag: 'Worship Expression',
            title: 'DOXA Worship',
            paragraphs: [
                'DOXA Worship is the worship expression of the ministry, committed to releasing sounds that carry revelation, faith, and the presence of God.',
                'Through worship gatherings and inspired sounds, this expression seeks to edify the Body of Christ, stir spiritual hunger, and create atmospheres where lives are transformed.',
                'DOXA Worship is not just about music—it is about ministry, expression, and encountering God deeply.',
            ],
            img: '/assets/img3.jpg',
            imgRight: true,
        },
        {
            number: '04',
            tag: 'Outreach & Evangelism',
            title: 'The Exodus Move',
            paragraphs: [
                'The Exodus Move is an outreach arm with the mandate of getting the gospel to all and liberating men from captivity.',
                'This is done through all forms of evangelism, outreaches and crusades across the nation and the world at large.',
                'Through this expression, we carry the message of freedom and transformation to communities, campuses, and cities.',
            ],
            img: '/assets/evangelism.jpg',
            imgRight: false,
        },
    ];

    return (
        <div className="bg-white">
            {/* ── Hero ── */}
            <section className="relative min-h-[70vh] flex items-end overflow-hidden bg-[#0D0D0D] pt-32">
                <div className="absolute inset-0 grayscale">
                    <Image
                        src="/assets/img13.jpeg"
                        alt="Expressions"
                        className="w-full h-full object-cover"
                        fill
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-[#0D0D0D]/60 to-[#0D0D0D]/20" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0D0D0D]/50 to-transparent" />
                </div>

                <div className="relative z-10 max-w-[1600px] mx-auto px-6 lg:px-12 pb-20 lg:pb-28 w-full">
                    <div className="overflow-hidden mb-4">
                        <p className="hero-line text-[#BF3C88] uppercase tracking-[0.3em] text-[0.85rem] md:text-[1.1rem] font-semibold">
                            Ministry Expressions
                        </p>
                    </div>
                    <div className="overflow-hidden mb-3">
                        <h1 className="hero-line text-white leading-[0.88] text-[2rem] md:text-[4.3rem]">Our</h1>
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
                            Expressions
                        </h1>
                    </div>
                    <div className="flex items-start gap-8 max-w-xl">
                        <div className="w-10 h-[1px] bg-white/30 mt-3 flex-shrink-0" />
                        <p className="hero-line text-white/60 text-base lg:text-lg leading-relaxed">
                            Strategic expressions through which believers are discipled, strengthened, and equipped for Kingdom assignment.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── Intro ── */}
            <section className="fade-in-section py-16 lg:py-20 bg-white border-b border-[#E8E8E8]">
                <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
                    <p className="text-[#0D0D0D]/55 text-lg lg:text-xl leading-relaxed max-w-4xl">
                        At Kingdom Ambassadors Nation, our mandate is expressed through intentional systems designed to raise
                        disciplined, spiritually grounded, and purpose-driven believers. These expressions serve as channels for
                        discipleship, community, and spiritual impartation—ensuring that every believer is equipped to grow,
                        function, and represent God's Kingdom effectively.
                    </p>
                </div>
            </section>

            {/* ── Each Expression ── */}
            {expressions.map((expr, index) => (
                <section
                    key={expr.number}
                    className={`fade-in-section py-20 lg:py-32 ${index % 2 === 0 ? 'bg-white' : 'bg-[#F5F5F3]'}`}
                >
                    <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
                        <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${!expr.imgRight ? 'direction-normal' : ''}`}>
                            {/* Text */}
                            <div className={expr.imgRight ? 'order-1' : 'order-1 lg:order-2'}>
                                <div className="flex items-center gap-4 mb-6">
                                    <p className="text-[#BF3C88] uppercase tracking-[0.3em] text-[0.8rem] font-semibold">{expr.tag}</p>
                                    <p
                                        className="text-[#0D0D0D]/15"
                                        style={{
                                            fontFamily: "'Barlow Condensed', sans-serif",
                                            fontSize: '1.5rem',
                                            fontWeight: 900,
                                        }}
                                    >
                                        {expr.number}
                                    </p>
                                </div>
                                <h2 className="text-[#0D0D0D] mb-6 text-[2rem] md:text-[2.3rem]">{expr.title}</h2>
                                <div className="w-10 h-[1px] bg-[#BF3C88] mb-8" />
                                <div className="space-y-4">
                                    {expr.paragraphs.map((p, i) => (
                                        <p key={i} className="text-[#0D0D0D]/55 text-base leading-relaxed">{p}</p>
                                    ))}

                                    {expr.title === 'Cell Groups' && (
                                        <div className="pt-4">
                                            <button
                                                onClick={() => setShowCells(!showCells)}
                                                className="flex items-center gap-2 text-[#BF3C88] font-bold text-sm tracking-widest uppercase group/btn"
                                            >
                                                View all cells
                                                <ChevronDown
                                                    size={16}
                                                    className={`transition-transform duration-300 ${showCells ? 'rotate-180' : ''}`}
                                                />
                                            </button>

                                            <AnimatePresence>
                                                {showCells && (
                                                    <motion.div
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: 'auto', opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                                                        className="overflow-hidden"
                                                    >
                                                        <div className="pt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                            {cellGroups.map((group, idx) => (
                                                                <div
                                                                    key={idx}
                                                                    className="p-4 border border-[#E8E8E8] flex flex-col justify-between items-start gap-4 hover:border-[#BF3C88]/30 transition-colors bg-white/50"
                                                                >
                                                                    <span className="font-bold text-[#0D0D0D] tracking-tight">{group.name}</span>
                                                                    <Link
                                                                        href={group.link}
                                                                        target="_blank"
                                                                        className="text-[0.7rem] uppercase tracking-widest font-bold text-[#BF3C88] flex items-center gap-1 hover:gap-2 transition-all"
                                                                    >
                                                                        Join Group <ArrowUpRight size={12} />
                                                                    </Link>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Image */}
                            <div className={expr.imgRight ? 'order-2' : 'order-2 lg:order-1'}>
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.97 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                                    viewport={{ once: true }}
                                    className="aspect-[4/5] overflow-hidden"
                                >
                                    <Image
                                        src={expr.img}
                                        alt={expr.title}
                                        className="w-full h-full object-cover"
                                        width={400}
                                        height={400}
                                    />
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </section>
            ))}

            {/* ── Integration ── */}
            <section className="fade-in-section py-28 lg:py-40 bg-[#0D0D0D] grain relative overflow-hidden">
                <div className="max-w-[1000px] mx-auto px-6 lg:px-12 text-center">
                    <div className="w-12 h-[1px] bg-white/20 mx-auto mb-10" />
                    <p className="text-[#BF3C88] uppercase tracking-[0.3em] text-[0.8rem] font-semibold mb-8">
                        A Complete System for Growth
                    </p>
                    <blockquote
                        className="text-white mb-8"
                        style={{
                            fontFamily: "'Barlow Condensed', sans-serif",
                            fontSize: 'clamp(1.6rem, 3.5vw, 2.6rem)',
                            fontWeight: 700,
                            lineHeight: 1.2,
                        }}
                    >
                        Through discipleship, we ground in truth. Through community, we strengthen. Through worship,
                        we encounter God. Together, these expressions raise believers ready to function as Kingdom Ambassadors.
                    </blockquote>
                    <div className="w-12 h-[1px] bg-white/20 mx-auto mt-10" />
                </div>
            </section>

            {/* ── CTA ── */}
            <section className="fade-in-section py-24 lg:py-32 bg-white">
                <div className="max-w-[1200px] mx-auto px-6 lg:px-12 text-center">
                    <p className="text-[#BF3C88] uppercase tracking-[0.3em] text-[0.8rem] font-semibold mb-6">Your Place</p>
                    <h2 className="text-[#0D0D0D] mb-6">Find Your Place</h2>
                    <div className="w-10 h-[1px] bg-[#0D0D0D]/15 mx-auto mb-8" />
                    <p className="text-[#0D0D0D]/55 text-base lg:text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
                        There is a place for you in what God is doing. Whether through discipleship, community, or worship,
                        you are invited to grow, be equipped, and become all that God has called you to be.
                    </p>
                    <Link
                        href="/programs"
                        className="inline-flex items-center gap-3 bg-[#0D0D0D] text-white px-10 py-4 font-bold uppercase text-sm tracking-[0.15em] transition-all hover:bg-[#0D0D0D]/80"
                    >
                        Get Connected
                        <ArrowRight size={14} />
                    </Link>
                </div>
            </section>
        </div>
    );
}
