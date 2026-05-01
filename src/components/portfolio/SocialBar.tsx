import { Github, Linkedin, Mail, FileText } from "lucide-react";
import resumeFile from "@/assets/Ganesh_RESUME.pdf";

const socials = [
  { icon: Github, href: "https://github.com/", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/ganeshyarajarla", label: "LinkedIn" },
  { icon: Mail, href: "mailto:ganeshyarajarla35@gmail.com", label: "Email" },
  { icon: FileText, href: resumeFile, label: "Resume", download: "Ganesh_Resume.pdf" },
];

export function SocialBar() {
  return (
    <aside className="fixed left-4 md:left-6 top-1/2 -translate-y-1/2 z-40 hidden sm:flex flex-col gap-3">
      {socials.map(({ icon: Icon, href, label, download }) => (
        <a
          key={label}
          href={href}
          target={label === "Resume" ? undefined : "_blank"}
          rel={label === "Resume" ? undefined : "noreferrer"}
          download={download}
          onClick={(event) => {
            if (label === "Resume" && !window.confirm("Do you want to download the resume?")) {
              event.preventDefault();
            }
          }}
          aria-label={label}
          className="group relative h-11 w-11 rounded-full border border-border bg-card/60 backdrop-blur-sm flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent transition-all duration-300 hover:glow-rust"
        >
          <Icon className="h-4 w-4" />
          <span className="absolute left-full ml-3 px-2 py-1 text-xs rounded-md bg-card border border-border opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all whitespace-nowrap pointer-events-none">
            {label}
          </span>
        </a>
      ))}
      <div className="mx-auto mt-2 h-16 w-px bg-gradient-to-b from-border to-transparent" />
    </aside>
  );
}
