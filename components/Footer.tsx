import { Mail, Phone } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export function Footer() {
    return (
        <footer className="bg-[#0D0D0D]">
            {/* Top border */}
            <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
                <div className="border-t border-white/[0.08]" />
            </div>

            {/* Large Brand Mark */}
            <div className="max-w-[1600px] mx-auto px-6 lg:px-12 pt-16 pb-12 border-b border-white/[0.06]">
                <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6">
                    <div>
                        <h2
                            className="text-white leading-none"
                            style={{
                                fontFamily: "'Barlow Condensed', sans-serif",
                                fontSize: 'clamp(2rem, 8vw, 3rem)',
                                fontWeight: 900,
                                letterSpacing: '-0.02em',
                                lineHeight: 1,
                            }}
                        >
                            Kingdom<br />Ambassadors<br />
                            <span className="text-[#BF3C88]">Nation</span>
                        </h2>
                        {/* <Image src={"/assets/kanLogo.png"} alt='Logo' width={150} height={100} /> */}
                    </div>
                    <p className="text-white/30 text-sm lg:text-base max-w-xs leading-relaxed uppercase tracking-[0.1em]">
                        Raising an Army for the<br />End-Time Apostolic Mandate
                    </p>
                </div>
            </div>

            {/* Links Grid */}
            <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-14">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-10 lg:gap-16">
                    {/* Brand / Social */}
                    <div className="col-span-2 md:col-span-1">
                        <p className="text-white/25 text-[0.75rem] uppercase tracking-[0.2em] font-semibold mb-5">Follow Us</p>
                        <div className="flex gap-5">
                            <a
                                href="https://www.instagram.com/kanationofficial"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white/40 hover:text-white transition-colors"
                                aria-label="Instagram"
                            >
                                {/* <Instagram size={18} strokeWidth={1.5} /> */}
                            </a>
                            <a
                                href="https://www.youtube.com/@FEMI_STEVEN"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white/40 hover:text-white transition-colors"
                                aria-label="YouTube"
                            >
                                {/* <Youtube size={18} strokeWidth={1.5} /> */}
                            </a>
                        </div>
                        <p className="text-white/25 text-xs mt-6 leading-relaxed">
                            © {new Date().getFullYear()} Kingdom<br />Ambassadors Nation
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <p className="text-white/25 text-[0.75rem] uppercase tracking-[0.2em] font-semibold mb-5">Pages</p>
                        <ul className="space-y-3">
                            {['About', 'Programs', 'Expressions', 'Give', 'Media'].map((item) => (
                                <li key={item}>
                                    <Link
                                        href={`/${item.toLowerCase()}`}
                                        className="text-white/50 hover:text-white transition-colors text-base"
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Expressions */}
                    <div>
                        <p className="text-white/25 text-[0.75rem] uppercase tracking-[0.2em] font-semibold mb-5">Expressions</p>
                        <ul className="space-y-3">
                            {['Femi Steven Enclaves', 'Cell Groups', 'DOXA Worship', 'The Exodus Move'].map((item) => (
                                <li key={item} className="text-white/40 text-[0.9rem]">{item}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <p className="text-white/25 text-[0.75rem] uppercase tracking-[0.2em] font-semibold mb-5">Contact</p>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <Mail size={14} className="text-[#BF3C88] mt-0.5 flex-shrink-0" />
                                <a
                                    href="mailto:kingdomambassadorsnation17@gmail.com"
                                    className="text-white/40 hover:text-white transition-colors text-sm leading-relaxed"
                                >
                                    kingdomambassadorsnation17@gmail.com
                                </a>
                            </li>
                            <li className="flex items-start gap-3">
                                <Phone size={14} className="text-[#BF3C88] mt-0.5 flex-shrink-0" />
                                <div className="text-white/40 text-sm space-y-1">
                                    <p>Admin: 08133842110</p>
                                    <p>Enclaves: +234 904 673 7827</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}
