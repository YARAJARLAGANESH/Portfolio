import { useEffect, useRef } from "react";

/**
 * Full-page reactive background:
 * - Fixed grid + grain
 * - A soft "spotlight" radial gradient that follows the cursor
 * - Subtle parallax dots that drift based on mouse position
 */
export function InteractiveBackground() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    let tx = 50, ty = 30;
    let cx = 50, cy = 30;

    const onMove = (e: MouseEvent) => {
      tx = (e.clientX / window.innerWidth) * 100;
      ty = (e.clientY / window.innerHeight) * 100;
    };
    const tick = () => {
      cx += (tx - cx) * 0.08;
      cy += (ty - cy) * 0.08;
      el.style.setProperty("--mx", cx + "%");
      el.style.setProperty("--my", cy + "%");
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
    <div
      ref={ref}
      aria-hidden
      className="fixed inset-0 -z-10 pointer-events-none"
      style={{ ["--mx" as string]: "50%", ["--my" as string]: "30%" }}
    >
      {/* base vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at top, oklch(0.20 0.04 50 / 0.55), transparent 55%), radial-gradient(ellipse at bottom right, oklch(0.25 0.10 28 / 0.18), transparent 55%)",
        }}
      />
      {/* grid */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(oklch(0.85 0.04 60) 1px, transparent 1px), linear-gradient(90deg, oklch(0.85 0.04 60) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse 80% 70% at var(--mx) var(--my), black 10%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 70% at var(--mx) var(--my), black 10%, transparent 75%)",
        }}
      />
      {/* dots */}
      <div
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "radial-gradient(oklch(0.85 0.04 60 / 0.45) 1px, transparent 1.5px)",
          backgroundSize: "22px 22px",
          maskImage:
            "radial-gradient(circle 360px at var(--mx) var(--my), black 0%, transparent 70%)",
          WebkitMaskImage:
            "radial-gradient(circle 360px at var(--mx) var(--my), black 0%, transparent 70%)",
        }}
      />
      {/* warm cursor glow */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle 500px at var(--mx) var(--my), oklch(0.55 0.18 28 / 0.18), transparent 70%)",
          transition: "background 0.05s linear",
        }}
      />
      {/* fine grain */}
      <div
        className="absolute inset-0 opacity-[0.08] mix-blend-overlay"
        style={{
          backgroundImage:
            "radial-gradient(oklch(1 0 0 / 0.5) 1px, transparent 1px)",
          backgroundSize: "3px 3px",
        }}
      />
    </div>
  );
}