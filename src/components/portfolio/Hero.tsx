import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import profilePhoto from "@/assets/profile-photo.png";

export function Hero() {
  const photoRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let raf = 0;
    let tx = 0,
      ty = 0,
      cx = 0,
      cy = 0;
    let px = 0,
      py = 0,
      cpx = 0,
      cpy = 0;

    const onMove = (e: MouseEvent) => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const nx = (e.clientX / w) * 2 - 1;
      const ny = (e.clientY / h) * 2 - 1;
      tx = nx * 20;
      ty = ny * 10;
      px = nx * 10;
      py = ny * 7;
    };

    const tick = () => {
      cx += (tx - cx) * 0.05;
      cy += (ty - cy) * 0.05;
      cpx += (px - cpx) * 0.07;
      cpy += (py - cpy) * 0.07;
      if (photoRef.current) {
        photoRef.current.style.transform = `translate3d(${cpx}px, ${cpy}px, 0)`;
      }
      if (marqueeRef.current) {
        marqueeRef.current.style.setProperty("--mqx", cx + "px");
        marqueeRef.current.style.setProperty("--mqy", cy + "px");
      }
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background warm gradient */}
      <div
        aria-hidden
        className="absolute inset-0 -z-[1] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 50% 40%, oklch(0.22 0.05 50 / 0.5), transparent 65%), radial-gradient(circle at 80% 90%, oklch(0.35 0.12 28 / 0.15), transparent 60%)",
        }}
      />

      {/* Subtle dot grain */}
      <div
        aria-hidden
        className="absolute inset-0 -z-[1] pointer-events-none opacity-[0.12]"
        style={{
          backgroundImage: "radial-gradient(oklch(0.9 0.01 60 / 0.15) 1px, transparent 1px)",
          backgroundSize: "18px 18px",
        }}
      />

      {/* TOP-LEFT: Signature */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="absolute top-6 left-6 md:top-10 md:left-10 z-20 text-xs font-mono text-muted-foreground"
      >
        © Code by Ganesh
      </motion.div>

      {/* TOP-RIGHT: Tagline */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.35 }}
        className="absolute top-6 right-4 md:top-10 md:right-10 z-20 text-right max-w-[140px] md:max-w-xs"
      >
        <p className="text-[9px] sm:text-[10px] md:text-xs text-muted-foreground leading-relaxed font-mono">
          crafting intelligent systems and
          <br />
          exceptional AI-powered experiences
          <br />
          through modern technologies
        </p>
      </motion.div>

      {/* CENTER: Full portrait photo with cursor parallax */}
      <div className="relative z-10 mt-2 flex justify-center md:mt-0"> 
         <div ref={photoRef} className="will-change-transform">
          <motion.img
            src={profilePhoto}
            alt="Ganesh Yarajarla — Developer & Prompt Engineer"
            loading="eager"
            initial={{ opacity: 0, scale: 0.97, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="h-[42vh] sm:h-[52vh] md:h-[105vh] w-[400px] sm:w-[400px] md:w-[1400px]"
            style={{
              maskImage: "linear-gradient(to bottom, black 0%, black 65%, transparent 100%)",
              WebkitMaskImage: "linear-gradient(to bottom, black 0%, black 65%, transparent 100%)",
              filter: "contrast(1.05) brightness(0.9)",
            }}
          />                                                                        
        </div>
      </div>

      {/* RIGHT: Identity block */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-1/2 right-6 md:right-10 transform -translate-y-1/2 z-20 text-right max-w-[180px] sm:max-w-[240px] md:max-w-[300px]">
        <p className="mb-2 text-sm tracking-[0.4em] text-orange-500 md:text-base">
          CREATIVE
        </p>
        <div className="text-lg sm:text-2xl md:text-4xl font-bold tracking-tight leading-[1.15]">
          <span className="block text-foreground">Developer &amp;</span>
          <span className="block text-foreground">Prompt Engineer</span>
        </div>
      </motion.div>

      {/* BOTTOM: Marquee */}
      <div
        ref={marqueeRef}
        className="absolute bottom-24 md:bottom-15 w-full will-change-transform"
        style={{
          ["--mqx" as string]: "0px",
          ["--mqy" as string]: "0px",
          transform: "translate3d(var(--mqx), var(--mqy), 0)",
        }}
      >
        <div className="marquee">
          <div className="marquee-track">
            <span className="marquee-item">Developer • Prompt Engineer • Video Editor •</span>
            <span className="marquee-item">Developer • Prompt Engineer • Video Editor •</span>
          </div>
        </div>  
      </div>
    </section>
  );
}
