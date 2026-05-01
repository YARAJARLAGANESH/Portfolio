import { motion } from "framer-motion";
import { Section } from "./Section";
import { Code2, Boxes, Brain, Users, Lightbulb, MessagesSquare, GraduationCap, Search, HeartHandshake } from "lucide-react";
import {
  SiPython, SiC, SiCplusplus, SiJavascript, SiMysql,
  SiReact, SiFastapi, SiNodedotjs, SiGit, SiTailwindcss,
  SiScikitlearn, SiPandas, SiNumpy, SiOpenai,
  SiHtml5,
  SiCss,
  SiFramer,
} from "react-icons/si";
import type { ComponentType, SVGProps } from "react";
import { ht } from "date-fns/locale";

type IconType = ComponentType<SVGProps<SVGSVGElement>>;
type Skill = { name: string; Icon: IconType };

const groups: { icon: IconType; title: string; skills: Skill[] }[] = [
  {
    icon: Code2,
    title: "Programming Languages",
    skills: [
      { name: "Python", Icon: SiPython },
      { name: "C", Icon: SiC },
      { name: "C++", Icon: SiCplusplus },
      { name: "JavaScript", Icon: SiJavascript },
      { name: "SQL", Icon: SiMysql },
      { name: "HTML", Icon: SiHtml5 },
      { name: "CSS", Icon: SiCss },
    ],
  },
  {
    icon: Boxes,
    title: "Frameworks & Tools",
    skills: [
      { name: "React", Icon: SiReact },
      { name: "FastAPI", Icon: SiFastapi },
      { name: "Node.js", Icon: SiNodedotjs },
      { name: "Git", Icon: SiGit },
      { name: "Tailwind", Icon: SiTailwindcss },
      { name: "framer-motion", Icon: SiFramer },
    ],
  },
  {
    icon: Brain,
    title: "AI & Data Science",
    skills: [
      { name: "scikit-learn", Icon: SiScikitlearn },
      { name: "Pandas", Icon: SiPandas },
      { name: "NumPy", Icon: SiNumpy },
      { name: "LLM Agents", Icon: SiOpenai },
      { name: "Prompt Eng.", Icon: Lightbulb },
    ],
  },
  {
    icon: Users,
    title: "Soft Skills",
    skills: [
      { name: "Problem Solving", Icon: Lightbulb },
      { name: "Collaboration", Icon: HeartHandshake },
      { name: "Curiosity", Icon: Search },
      { name: "Self-Learning", Icon: GraduationCap },
      { name: "Communication", Icon: MessagesSquare },
    ],
  },
];

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Arsenal"
      title="Technical Arsenal"
      subtitle="Tools and disciplines I work with — from code to circuits."
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {groups.map((g, i) => (
          <motion.div
            key={g.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="group/card rounded-2xl p-6 bg-card/60 backdrop-blur-sm border border-border hover:border-accent/40 hover:shadow-[0_0_30px_-10px_oklch(0.58_0.19_28/0.4)] transition-all duration-300"
          >
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-primary/30 to-accent/15 border border-border flex items-center justify-center">
                <g.icon className="h-4 w-4 text-accent" />
              </div>
              <h3 className="font-semibold">{g.title}</h3>
            </div>
            <div className="mt-6 grid grid-cols-3 sm:grid-cols-4 gap-3">
              {g.skills.map(({ name, Icon }) => (
                <div
                  key={name}
                  aria-label={name}
                  className="group/icon flex flex-col items-center gap-2 p-3 rounded-xl border border-border bg-secondary/40 text-muted-foreground transition-all duration-300 hover:scale-[1.04] hover:text-accent hover:border-accent/60 hover:shadow-[0_0_22px_-2px_oklch(0.58_0.19_28/0.6)]"
                >
                  <Icon className="h-7 w-7" />
                  <span className="text-[11px] font-medium tracking-tight text-center text-foreground/80 group-hover/icon:text-accent">
                    {name}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
