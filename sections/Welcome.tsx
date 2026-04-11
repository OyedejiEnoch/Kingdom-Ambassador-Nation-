"use client"
import { ArrowUpRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useEffect, useRef } from "react"

gsap.registerPlugin(ScrollTrigger);

const Welcome = () => {
    const sectionRef = useRef<HTMLElement>(null);
    useEffect(() => {
        const ctx = gsap.context(() => {
            // Fade-in sections - Scoped to this component
            gsap.from(sectionRef.current, {
                y: 60,
                opacity: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 82%',
                    end: 'top 55%',
                    scrub: false,
                    toggleActions: 'play none none none',
                },
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);


    return (
        <section ref={sectionRef} className="py-24 lg:py-36 bg-white">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                    {/* Text */}
                    <div className="lg:col-span-5">
                        <p className="text-[#BF3C88] uppercase tracking-[0.3em] text-[0.8rem] font-semibold mb-6">
                            Our Story
                        </p>
                        <h2 className="text-[#0D0D0D] text-[2rem] md:text-[2.5rem] mb-8">
                            Welcome to Kingdom Ambassadors Nation
                        </h2>
                        <div className="w-10 h-[1px] bg-[#BF3C88] mb-8" />
                        <div className="space-y-5 text-[#0D0D0D]/60 leading-relaxed text-base lg:text-lg">
                            <p>
                                Kingdom Ambassadors Nation (KAN) is a movement committed to raising believers who are
                                deeply rooted in God's Word, consecrated in lifestyle, and equipped for apostolic assignment.
                            </p>
                            <p>
                                We bridge the gap between salvation and spiritual maturity by building disciplined,
                                Kingdom-minded believers who will influence their generation and establish God's purpose
                                on the earth.
                            </p>
                        </div>
                        <Link
                            href="/about"
                            className="inline-flex items-center gap-2 text-[#0D0D0D] hover:text-[#BF3C88] font-semibold uppercase text-sm tracking-[0.15em] mt-10 group transition-colors"
                        >
                            <span>Read More</span>
                            <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </Link>
                    </div>

                    {/* Image */}
                    <div className="lg:col-span-7">
                        <div className="relative">
                            <div className="aspect-[16/10] overflow-hidden">
                                <Image
                                    src="/assets/img5.jpeg"
                                    alt="Community"
                                    className="w-full h-full object-cover"
                                    width={1080}
                                    height={1920}
                                />
                            </div>
                            {/* Decorative accent */}
                            <div className="absolute -bottom-4 -right-4 w-32 h-32 border border-[#BF3C88]/20 -z-10" />
                            <div className="absolute -top-4 -left-4 w-24 h-24 border border-[#0D0D0D]/10 -z-10" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Info Cards — Added as requested */}
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12 mt-20 lg:mt-28">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {
                            title: "Who we are",
                            subtitle: "About us",
                            image: "/assets/img3.jpg",
                            link: "/about",
                            tint: "bg-[#BF3C88]/20"
                        },
                        {
                            title: "Our Programs",
                            subtitle: "Fellowship with us",
                            image: "/assets/img2.jpg",
                            link: "/programs",
                            tint: "bg-[#BF3C88]/10"
                        },
                        {
                            title: "Our Ministry",
                            subtitle: "Join the movement",
                            image: "/assets/img1.jpg",
                            link: "/expressions",
                            tint: "bg-black/5"
                        }
                    ].map((card, i) => (
                        <Link
                            key={i}
                            href={card.link}
                            className="group relative aspect-[3/4] overflow-hidden rounded-2xl block"
                        >
                            <Image
                                src={card.image}
                                alt={card.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                fill
                            />
                            {/* Color Tint Overlay */}
                            <div className={`absolute inset-0 ${card.tint} mix-blend-overlay transition-opacity duration-500 group-hover:opacity-60`} />

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-[#0D0D0D]/40 to-black/10 transition-opacity group-hover:opacity-90" />

                            {/* Content Top */}
                            <div className="absolute top-10 left-8">
                                <h3 className="text-white text-3xl font-black leading-tight mb-1">{card.title}</h3>
                                <p className="text-white/80 text-lg font-bold uppercase tracking-wider">{card.subtitle}</p>
                            </div>

                            {/* Content Bottom */}
                            <div className="absolute bottom-8 left-8">
                                <span className="text-white text-base font-bold uppercase tracking-widest inline-flex items-center gap-2">
                                    Learn more
                                    <div className="w-6 h-[1px] bg-white transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Welcome