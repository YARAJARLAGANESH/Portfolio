import { motion } from "framer-motion";
import { Section } from "./Section";
import { Brain, Code2, BarChart3, Workflow, Film } from "lucide-react";

const services = [
  { icon: Brain, title: "AI / ML Solutions", desc: "Custom ML pipelines, prompt-engineered LLM apps, and intelligent agent workflows." },
  { icon: Code2, title: "Web Development", desc: "Modern, responsive web apps with React, TypeScript, and clean component architecture." },
  { icon: BarChart3, title: "Data Analysis", desc: "Exploratory analysis, visualizations, and reporting from raw datasets to clear insight." },
  { icon: Workflow, title: "Automation", desc: "Python scripts and agent-driven automations for repetitive, data-heavy workflows." },
  { icon: Film, title: "Video Editing", desc: "Crisp, story-driven edits — reels, intros, and short-form content with a clean, modern feel." },
];

export function Services() {
  return (
    <Section
      id="services"
      eyebrow="Offerings"
      title="Services"
      subtitle="What I can help you build, ship, and explore."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="group rounded-2xl p-6 bg-card/60 backdrop-blur-sm border border-border hover-lift"
          >
            <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary/30 to-accent/15 border border-border flex items-center justify-center group-hover:from-accent/30 group-hover:to-primary/20 transition-colors">
              <s.icon className="h-5 w-5 text-accent" />
            </div>
            <h3 className="mt-4 font-semibold">{s.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
