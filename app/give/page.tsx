"use client"
import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Copy, Check, ArrowRight } from 'lucide-react';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

export default function Give() {
    const [copiedField, setCopiedField] = useState<string | null>(null);

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

    const copyToClipboard = (text: string, field: string) => {
        navigator.clipboard.writeText(text);
        setCopiedField(field);
        setTimeout(() => setCopiedField(null), 2500);
    };

    const accounts = [
        {
            id: 'tithe',
            label: 'Tithe & Offering',
            number: '01',
            bank: 'Globus Bank',
            acct: '1000509443',
            name: 'Kingdom Ambassadors Nation Ministries',
            dark: true,
        },
        {
            id: 'project',
            label: 'Projects & Missions',
            number: '02',
            bank: 'UBA',
            acct: '1029674810',
            name: 'Kingdom Ambassadors Nation Ministries',
            dark: false,
        },
    ];

    return (
        <div className="bg-white">
            {/* ── Hero ── */}
            <section className="relative min-h-[70vh] flex items-end overflow-hidden bg-[#0D0D0D] pt-32">
                <div className="absolute inset-0 grayscale">
                    <Image
                        src="/assets/img14.jpeg"
                        alt="Give"
                        className="w-full h-full object-cover"
                        fill
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-[#0D0D0D]/60 to-[#0D0D0D]/20" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0D0D0D]/50 to-transparent" />
                </div>

                <div className="relative z-10 max-w-[1600px] mx-auto px-6 lg:px-12 pb-20 lg:pb-28 w-full">
                    <div className="overflow-hidden mb-4">
                        <p className="hero-line text-[#BF3C88] uppercase tracking-[0.3em] text-[0.85rem] md:text-[1.1rem] font-semibold">
                            Partner With Us
                        </p>
                    </div>
                    <div className="overflow-hidden mb-3">
                        <h1 className="hero-line text-white leading-[0.88] text-[2rem] md:text-[4.3rem]">Partner</h1>
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
                            With the Vision
                        </h1>
                    </div>
                    <div className="flex items-start gap-8 max-w-xl">
                        <div className="w-10 h-[1px] bg-white/30 mt-3 flex-shrink-0" />
                        <p className="hero-line text-white/60 text-base lg:text-lg leading-relaxed">
                            Your giving helps advance the work of the Kingdom—supporting discipleship, outreach, and the
                            raising of Kingdom Ambassadors across nations.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── Giving Statement ── */}
            <section className="fade-in-section py-16 lg:py-20 bg-white border-b border-[#E8E8E8]">
                <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
                    <p className="text-[#0D0D0D]/55 text-lg lg:text-xl leading-relaxed max-w-3xl">
                        Giving is one of the ways we participate in advancing the work of God's Kingdom. Your giving
                        supports discipleship, outreach, and ministry operations—enabling us to raise more Kingdom
                        Ambassadors across nations.
                    </p>
                </div>
            </section>

            {/* ── Giving Accounts ── */}
            <section className="fade-in-section py-20 lg:py-32 bg-[#F5F5F3]">
                <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
                    <div className="mb-16">
                        <p className="text-[#BF3C88] uppercase tracking-[0.3em] text-[0.8rem] md:text-[1rem] font-semibold mb-4">
                            Bank Accounts
                        </p>
                        <h2 className="text-[#0D0D0D] text-[2rem] md:text-[2.3rem]">Give to the Ministry</h2>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8">
                        {accounts.map((account) => (
                            <motion.div
                                key={account.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                                viewport={{ once: true }}
                                className={`${account.dark ? 'bg-[#0D0D0D]' : 'bg-white border border-[#E8E8E8]'}`}
                            >
                                {/* Card Header */}
                                <div className={`px-10 py-8 border-b ${account.dark ? 'border-white/10' : 'border-[#E8E8E8]'}`}>
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className={`${account.dark ? 'text-white/30' : 'text-[#0D0D0D]/30'} text-[0.75rem] uppercase tracking-[0.2em] mb-1`}>
                                                Category
                                            </p>
                                            <h3 className={`${account.dark ? 'text-white' : 'text-[#0D0D0D]'}`}>
                                                {account.label}
                                            </h3>
                                        </div>
                                        <p
                                            className={`${account.dark ? 'text-white/10' : 'text-[#0D0D0D]/10'}`}
                                            style={{
                                                fontFamily: "'Barlow Condensed', sans-serif",
                                                fontSize: '3rem',
                                                fontWeight: 900,
                                                lineHeight: 1,
                                            }}
                                        >
                                            {account.number}
                                        </p>
                                    </div>
                                </div>

                                {/* Card Body */}
                                <div className="p-10 space-y-6">
                                    {[
                                        { label: 'Bank', value: account.bank, fieldId: `${account.id}-bank`, large: false, small: false },
                                        { label: 'Account Number', value: account.acct, fieldId: `${account.id}-acct`, large: true, small: false },
                                        { label: 'Account Name', value: account.name, fieldId: `${account.id}-name`, large: false, small: true },
                                    ].map((field) => (
                                        <div key={field.fieldId}>
                                            <p className={`${account.dark ? 'text-white/25' : 'text-[#0D0D0D]/25'} text-[0.75rem] uppercase tracking-[0.2em] mb-2`}>
                                                {field.label}
                                            </p>
                                            <div className={`flex items-center justify-between gap-4 px-5 py-3.5 ${account.dark ? 'bg-white/5' : 'bg-[#F5F5F3]'}`}>
                                                <p
                                                    className={`${account.dark ? 'text-white' : 'text-[#0D0D0D]'} ${field.small ? 'text-base' : ''}`}
                                                    style={field.large ? {
                                                        fontFamily: "'Barlow Condensed', sans-serif",
                                                        fontSize: '1.8rem',
                                                        fontWeight: 700,
                                                        letterSpacing: '0.08em',
                                                    } : undefined}
                                                >
                                                    {field.value}
                                                </p>
                                                <button
                                                    onClick={() => copyToClipboard(field.value, field.fieldId)}
                                                    className={`flex-shrink-0 transition-colors ${account.dark ? 'text-white/30 hover:text-white' : 'text-[#0D0D0D]/30 hover:text-[#0D0D0D]'}`}
                                                    aria-label={`Copy ${field.label}`}
                                                >
                                                    {copiedField === field.fieldId ? (
                                                        <Check size={16} className="text-[#BF3C88]" />
                                                    ) : (
                                                        <Copy size={16} />
                                                    )}
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Vision Support ── */}
            <section className="fade-in-section py-24 lg:py-32 bg-white">
                <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <p className="text-[#BF3C88] uppercase tracking-[0.3em] text-[0.8rem] md:text-[1rem] font-semibold mb-6">
                                Building the Future
                            </p>
                            <h2 className="text-[#0D0D0D] mb-6 text-[2rem] md:text-[2.3rem]">Support the Vision</h2>
                            <div className="w-10 h-[1px] bg-[#0D0D0D]/15 mb-8" />
                            <p className="text-[#0D0D0D]/55 text-base leading-relaxed mb-5">
                                We are establishing a space for worship, discipleship, and the raising of Kingdom Ambassadors.
                                Your contribution goes directly toward building the infrastructure that will serve generations
                                of believers.
                            </p>
                            <p className="text-[#0D0D0D]/55 text-base leading-relaxed">
                                Be a part of what God is building and help us establish a lasting Kingdom legacy.
                            </p>
                        </div>
                        <div className="bg-[#0D0D0D] p-10">
                            <p className="text-white/30 text-[0.75rem] uppercase tracking-[0.2em] mb-6">Project Account</p>
                            <div className="space-y-4">
                                <div>
                                    <p className="text-white/25 text-[0.7rem] uppercase tracking-[0.2em] mb-1">Bank</p>
                                    <p className="text-white text-sm">UBA Bank</p>
                                </div>
                                <div>
                                    <p className="text-white/25 text-[0.7rem] uppercase tracking-[0.2em] mb-1">Account Number</p>
                                    <p
                                        className="text-white"
                                        style={{
                                            fontFamily: "'Barlow Condensed', sans-serif",
                                            fontSize: '2.5rem',
                                            fontWeight: 700,
                                            letterSpacing: '0.08em',
                                        }}
                                    >
                                        1029674810
                                    </p>
                                </div>
                                <div>
                                    <p className="text-white/25 text-[0.7rem] uppercase tracking-[0.2em] mb-1">Account Name</p>
                                    <p className="text-white/70 text-base">Kingdom Ambassadors Nation Ministries</p>
                                </div>
                            </div>
                            <button
                                onClick={() => copyToClipboard('1029674810', 'project-featured')}
                                className="mt-8 inline-flex items-center gap-2 border border-white/20 text-white/60 hover:text-white hover:border-white/40 px-5 py-2.5 text-sm uppercase tracking-[0.15em] transition-all"
                            >
                                {copiedField === 'project-featured' ? (
                                    <><Check size={14} className="text-[#BF3C88]" /> Copied!</>
                                ) : (
                                    <><Copy size={14} /> Copy Account Number</>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Thank You CTA — WHITE background (user request) ── */}
            <section className="fade-in-section py-20 lg:py-28 bg-white border-t border-[#E8E8E8]">
                <div className="max-w-[1200px] mx-auto px-6 lg:px-12 text-center">
                    <p className="text-[#BF3C88] uppercase tracking-[0.3em] text-[0.8rem] font-semibold mb-6">Thank You</p>
                    <h2 className="text-[#0D0D0D] mb-6">Thank You for<br />Your Partnership</h2>
                    <div className="w-10 h-[1px] bg-[#0D0D0D]/15 mx-auto mb-8" />
                    <p className="text-[#0D0D0D]/55 text-base lg:text-lg max-w-2xl mx-auto leading-relaxed mb-12">
                        Your generosity enables us to reach more people, train more disciples, and advance God's Kingdom
                        across nations. Thank you for being a partner in this mission.
                    </p>
                    <a
                        href="https://meet.google.com/osf-ddca-ohy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 bg-[#0D0D0D] text-white px-10 py-4 font-bold uppercase text-sm tracking-[0.15em] transition-all hover:bg-[#0D0D0D]/80"
                    >
                        Join Us Live
                        <ArrowRight size={14} />
                    </a>
                </div>
            </section>
        </div>
    );
}
