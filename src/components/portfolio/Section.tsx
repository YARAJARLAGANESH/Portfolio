import { motion } from "framer-motion";
import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Section({ id, eyebrow, title, subtitle, children, className }: {
  id: string; eyebrow?: string; title: string; subtitle?: string; children: ReactNode; className?: string;
}) {
  return (
    <section id={id} className={cn("relative py-24 md:py-32 px-4 md:px-8 max-w-7xl mx-auto", className)}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-12 md:mb-16"
      >
        {eyebrow && (
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full border border-accent/30 bg-accent/5 text-xs font-mono uppercase tracking-widest text-accent">
            <span className="h-1 w-1 rounded-full bg-accent animate-pulse" />
            {eyebrow}
          </div>
        )}
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
          <span className="text-gradient-coffee">{title}</span>
        </h2>
        {subtitle && <p className="mt-3 text-muted-foreground max-w-2xl">{subtitle}</p>}
      </motion.div>
      {children}
    </section>
  );
}
