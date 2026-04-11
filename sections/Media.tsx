"use client"
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const Media = () => {
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
        <section ref={sectionRef} className="py-20 lg:py-28 bg-white border-t border-b border-[#E8E8E8]">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
                <div className="grid lg:grid-cols-12 gap-12 items-center">
                    <div className="lg:col-span-7">
                        <div className="aspect-[16/9] overflow-hidden bg-[#0D0D0D] relative">
                            <Image
                                src="/assets/img6.jpeg"
                                alt="Sermons"
                                className="w-full h-full object-cover opacity-80"
                                width={1080}
                                height={1920}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D]/60 to-transparent" />
                        </div>
                    </div>
                    <div className="lg:col-span-5">
                        <p className="text-[#BF3C88] uppercase tracking-[0.3em] text-[0.8rem] md:text-[1rem] font-semibold mb-6">Media / Sermons</p>
                        <h2 className="text-[#0D0D0D] mb-6 tracking-tight text-[2rem] md:text-[2.3rem]">Be Strengthened by the Word</h2>
                        <div className="w-10 h-[1px] bg-[#0D0D0D]/20 mb-8" />
                        <p className="text-[#0D0D0D]/60 leading-relaxed text-base lg:text-lg mb-10">
                            Access life-transforming teachings that will deepen your understanding of God's Word and
                            strengthen your walk with Him.
                        </p>
                        <Link
                            href="/media"
                            className="inline-flex items-center gap-3 bg-[#0D0D0D] text-white px-8 py-3.5 font-bold uppercase text-sm tracking-[0.15em] transition-all hover:bg-[#0D0D0D]/80"
                        >
                            Watch Sermons
                            <ArrowRight size={14} />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Media