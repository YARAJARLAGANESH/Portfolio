import { motion } from "framer-motion";
import { Section } from "./Section";
import { Briefcase } from "lucide-react";

const items = [
  {
    role: "AI & ML Virtual Intern",
    company: "ShadowFox",
    duration: "March 2026",
    points: [
      "Developed House Price and Car Price Prediction models using Regression & Random Forest",
      "Achieved ~94% R² score on datasets (~1K samples)",
      "Executed full ML pipeline: preprocessing, feature engineering, training, and evaluation",
      "Deployed Car Price model locally using a Flask backend (app.py) to serve predictions via HTTP",
      "Performed model analysis to improve prediction performance",
      "Completed a 1-month AI/ML internship program"    
    ],
  },
  {
    role: "Python Full Stack Intern",
    company: "Techin IT Process Pvt. Ltd.(Vijayawada)",
    duration: "Nov 2024 – May 2025",
    points: [
      "Completed a 6-month industrial training program in Python full stack development",
      "Built applications including a quiz system and a voice-enabled bot using Flask and Python.",
      "Applied OOP, backend development, and API integration in real-world scenarios.",
      "Worked in a collaborative environment following structured coding practices."
    ],
  },
];

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Professional Experience"
      subtitle="My journey, internships, and hands-on learning so far."
    >
      <div className="grid md:grid-cols-2 gap-5">
        {items.map((item, i) => (
          <motion.article
            key={item.role}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group relative rounded-2xl p-6 md:p-7 bg-card/60 backdrop-blur-sm border border-border hover-lift overflow-hidden"
          >
            <div className="absolute -top-px left-6 right-6 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="flex items-start gap-4">
              <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-primary/30 to-accent/20 border border-border flex items-center justify-center shrink-0">
                <Briefcase className="h-5 w-5 text-accent" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-semibold">{item.role}</h3>
                <p className="text-sm text-primary mt-0.5">{item.company}</p>
                <p className="text-xs font-mono text-muted-foreground mt-1">{item.duration}</p>
              </div>
            </div>
            <ul className="mt-5 space-y-2">
              {item.points.map((p) => (
                <li key={p} className="text-sm text-muted-foreground flex gap-3">
                  <span className="mt-2 h-1 w-1 rounded-full bg-accent shrink-0" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
