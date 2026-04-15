"use client"
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';


export function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setMobileMenuOpen(false);
    }, [pathname]);

    const navLinks = [
        { path: '/', label: 'Home' },
        { path: '/about', label: 'About' },
        { path: '/programs', label: 'Programs' },
        { path: '/expressions', label: 'Expressions' },
        { path: '/give', label: 'Give' },
        { path: '/media', label: 'Media' },
    ];

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                    ? 'bg-[#0D0D0D]/98 backdrop-blur-xl border-b border-white/[0.06]'
                    : 'bg-transparent'
                    }`}
            >
                <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
                    <div className="flex items-center justify-between h-18 lg:h-20">
                        {/* Logo */}
                        <Link href="/" className="flex flex-col z-50 group">
                            <Image src={"/assets/kanLogo.png"} alt='Logo' width={100} height={100} />
                            {/* <span className="text-[1.6rem] lg:text-[1.8rem] font-black text-white leading-none tracking-[-0.02em]"
                                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                                KAN
                            </span>
                            <span className="text-[0.6rem] lg:text-[0.65rem] uppercase tracking-[0.22em] text-white/40 leading-none mt-[2px] font-medium hidden sm:block">
                                Kingdom Ambassadors Nation
                            </span> */}
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center space-x-9">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    href={link.path}
                                    className={`text-[0.8rem] font-semibold uppercase tracking-[0.15em] transition-colors relative group pb-0.5 ${pathname === link.path
                                        ? 'text-white'
                                        : 'text-white/50 hover:text-white'
                                        }`}
                                >
                                    {link.label}
                                    <span
                                        className={`absolute bottom-0 left-0 h-[1px] bg-[#BF3C88] transition-all duration-300 ${pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'
                                            }`}
                                    />
                                </Link>
                            ))}
                        </div>

                        {/* CTA Button */}
                        <a
                            href="https://meet.google.com/osf-ddca-ohy"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hidden lg:flex items-center gap-2 border border-white/20 hover:border-white/60 text-white px-7 py-2.5 font-semibold uppercase text-[0.75rem] tracking-[0.15em] transition-all duration-300 hover:bg-white/5"
                        >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#BF3C88] animate-pulse flex-shrink-0" />
                            Join Live
                        </a>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="lg:hidden text-white z-50 p-2"
                            aria-label="Toggle menu"
                        >
                            {mobileMenuOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: 'spring', damping: 30, stiffness: 250 }}
                        className="fixed inset-0 bg-[#0D0D0D] z-40 lg:hidden"
                    >
                        <div className="flex flex-col justify-center h-full px-10 space-y-2">
                            <p className="text-white/30 text-[0.75rem] uppercase tracking-[0.25em] font-semibold mb-8">Navigation</p>
                            {navLinks.map((link, index) => (
                                <motion.div
                                    key={link.path}
                                    initial={{ opacity: 0, x: 30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
                                >
                                    <Link
                                        href={link.path}
                                        className={`block text-[2.4rem] font-black uppercase leading-tight transition-colors ${location.pathname === link.path ? 'text-white' : 'text-white/30 hover:text-white'
                                            }`}
                                        style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: '-0.02em' }}
                                    >
                                        {link.label}
                                    </Link>
                                </motion.div>
                            ))}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: navLinks.length * 0.07 + 0.1 }}
                                className="pt-10 border-t border-white/10 mt-4"
                            >
                                <a
                                    href="https://meet.google.com/osf-ddca-ohy"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-3 border border-white/30 text-white px-8 py-4 font-semibold uppercase text-xs tracking-[0.15em]"
                                >
                                    <span className="w-2 h-2 rounded-full bg-[#BF3C88] animate-pulse" />
                                    Join Our Community
                                </a>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Floating Join Live Button (Mobile) */}
            <motion.a
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
                href="https://chat.whatsapp.com/L4UUKcT1cZuAGSQrqL9FI4?mode=gi_t"
                target="_blank"
                rel="noopener noreferrer"
                className="lg:hidden fixed bottom-6 right-6 bg-white text-[#0D0D0D] px-6 py-3.5 font-bold uppercase text-[0.75rem] tracking-[0.15em] shadow-2xl z-50 flex items-center gap-2 transition-all hover:bg-white/90"
            >
                <span className="w-1.5 h-1.5 rounded-full bg-[#BF3C88] animate-pulse" />
                Join Our Community
            </motion.a>
        </>
    );
}
