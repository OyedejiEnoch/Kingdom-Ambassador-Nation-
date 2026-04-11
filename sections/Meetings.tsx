"use client"
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Meetings = () => {
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
            <div className="max-w-[1200px] mx-auto px-6 lg:px-12 text-center">
                <p className="text-[#BF3C88] uppercase tracking-[0.3em] text-[0.8rem] font-semibold mb-6">Join Us</p>
                <h2 className="text-[#0D0D0D] mb-6">Join Us This Week</h2>
                <div className="w-10 h-[1px] bg-[#0D0D0D]/15 mx-auto mb-8" />
                <p className="text-[#0D0D0D]/60 text-base lg:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
                    Be a part of our weekly gathering for worship, prayer, and the teaching of God's Word. Come and
                    be strengthened, equipped, and aligned with God's purpose.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
                    <span className="text-[#0D0D0D]/40 text-sm uppercase tracking-wider">Every Tuesday</span>
                    <span className="text-[#0D0D0D]/20">·</span>
                    <span className="text-[#0D0D0D]/40 text-sm uppercase tracking-wider">9:00pm – 11:00pm</span>
                    <span className="text-[#0D0D0D]/20">·</span>
                    <span className="text-[#0D0D0D]/40 text-sm uppercase tracking-wider">Google Meet</span>
                </div>
                <a
                    href="https://meet.google.com/osf-ddca-ohy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-[#0D0D0D] text-white hover:bg-[#0D0D0D]/85 px-10 py-4 font-bold uppercase text-sm tracking-[0.15em] transition-all"
                >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#BF3C88] animate-pulse" />
                    Join Live Now
                </a>
            </div>
        </section>
    )
}

export default Meetings