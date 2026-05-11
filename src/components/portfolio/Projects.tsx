import { motion } from "framer-motion";
import { Section } from "./Section";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Tourism Management System",
    desc: "Full Stack Web Application | PHP, MySQL. Developed a role-based tourism platform supporting users and administrators with secure authentication, booking system, and package management. Built an admin dashboard to manage users, packages, and bookings. Designed a relational database schema and deployed locally using XAMPP.",
    stack: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/YARAJARLAGANESH/tourism-management-system", live: "https://sanchari.infinityfreeapp.com/",
  },
  {
    title: "Car Price Prediction System",
    desc: "Machine Learning Application | Python, Scikit-learn, Flask. Built a regression-based ML system to predict car prices using structured data (~1K records). Implemented and compared Linear Regression and Random Forest, achieving ~94% R² score. Developed a Flask backend for real-time inference.",
    stack: ["Python", "Scikit-learn", "Flask"],
    github: "https://github.com/YARAJARLAGANESH/ShadowFox/tree/main/Intermediate/car_price_prediction", live: "#",
  },
  {
    title: "Syllabus AI – Multi-Agent Content Generator",
    desc: "AI System | Python, LLM Architecture. Designed a multi-agent system (Planner, Worker, Evaluator) for automated syllabus processing. Transformed raw syllabus text into structured chapters, objectives, subtopics, MCQs, and resources. Built using Python with modular architecture and deployed prototype via Hugging Face.",
    stack: ["Python", "LLM Architecture", "Jupyter Notebook"],
    github: "https://github.com/YARAJARLAGANESH/Syllabus-AI", live: "#",
  },
  {
    title: "SafeLine AI – Emergency Call Triage System",
    desc: "AI Workflow System | n8n, LLM Integration. Developed an AI-powered triage system to prioritize emergency calls based on risk levels. Designed workflow: Speech/Text → AI Analysis → Risk Scoring → Priority Classification. Integrated Google Gemini for semantic analysis and decision-making.",
    stack: ["n8n", "LLM Integration", "Google Gemini"],
    github: "https://github.com/YARAJARLAGANESH/SafeLine-AI", live: "#",
  },
];

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Work"
      title="Featured Projects"
      subtitle="A showcase of my technical application and problem-solving skills."
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="group relative rounded-2xl p-6 md:p-7 bg-card/60 backdrop-blur-sm border border-border overflow-hidden hover-lift"
          >
            <div
              aria-hidden
              className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"
              style={{ background: "var(--gradient-border)", zIndex: -1 }}
            />
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-xl font-semibold group-hover:text-gradient-rust transition-colors">
                {p.title}
              </h3>
              <div className="flex gap-2 shrink-0">
                <a href={p.github} target="_blank" rel="noreferrer" aria-label="GitHub"
                  className="h-9 w-9 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent transition-colors">
                  <Github className="h-4 w-4" />
                </a>
                <a href={p.live} target="_blank" rel="noreferrer" aria-label="Live"
                  className="h-9 w-9 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent transition-colors">
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {p.stack.map((s) => (
                <span key={s} className="text-xs font-mono px-2.5 py-1 rounded-full bg-secondary/60 border border-border text-muted-foreground">
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
