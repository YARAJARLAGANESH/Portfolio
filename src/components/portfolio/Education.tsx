import { motion } from "framer-motion";
import { Section } from "./Section";
import { GraduationCap } from "lucide-react";

const items = [
  {
    degree: "Bachelor of Technology — AI & ML",
    school: "Acharya Nagarjuna University",
    year: "Sep 2025 — Jun 2028",
    cgpa: "CGPA: 9.02 / 10 (ongoing)",
    points: ["Lateral entry into 2nd year (AIML specialization)", "Focus on ML, prompt engineering, applied Python"],
  },
  {
    degree: "Diploma in Computer Engineering",
    school: "Bapatla Polytechnic College",
    year: "Oct 2022 — Apr 2025",
    cgpa: "CGPA: 9.2 / 10",
    points: ["Strong foundation in core CS subjects", "Final-year Python Full Stack internship "],
  },
];

export function Education() {
  return (
    <Section
      id="education"
      eyebrow="Learning"
      title="Education"
      subtitle="Academic foundation and ongoing learning."
    >
      <div className="relative">
        <div className="absolute left-4 md:left-6 top-2 bottom-2 w-px bg-gradient-to-b from-accent/40 via-border to-transparent" />
        <div className="space-y-6">
          {items.map((it, i) => (
            <motion.div
              key={it.degree}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative pl-12 md:pl-16"
            >
              <div className="absolute left-0 top-2 h-9 w-9 md:h-12 md:w-12 rounded-xl bg-gradient-to-br from-primary/40 to-accent/20 border border-border flex items-center justify-center">
                <GraduationCap className="h-4 w-4 md:h-5 md:w-5 text-accent" />
              </div>
              <div className="rounded-2xl p-6 bg-card/60 backdrop-blur-sm border border-border">
                <p className="text-xs font-mono text-accent">{it.year}</p>
                <h3 className="mt-1 text-lg font-semibold">{it.degree}</h3>
                <p className="text-sm text-primary mt-0.5">{it.school}</p>
                <p className="mt-2 inline-block text-xs font-mono px-2.5 py-1 rounded-full border border-accent/40 bg-accent/10 text-accent">
                  {it.cgpa}
                </p>
                <ul className="mt-3 space-y-1.5">
                  {it.points.map((p) => (
                    <li key={p} className="text-sm text-muted-foreground flex gap-3">
                      <span className="mt-2 h-1 w-1 rounded-full bg-accent shrink-0" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
