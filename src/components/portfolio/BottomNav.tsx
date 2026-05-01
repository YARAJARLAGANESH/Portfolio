import { useEffect, useState } from "react";
import { Home, Briefcase, FolderGit2, Cpu, GraduationCap, Wrench, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

const items = [
  { id: "home", label: "Home", icon: Home },
  { id: "experience", label: "Experience", icon: Briefcase },
  { id: "projects", label: "Projects", icon: FolderGit2 },
  { id: "skills", label: "Skills", icon: Cpu },
  { id: "education", label: "Education", icon: GraduationCap },
  { id: "services", label: "Services", icon: Wrench },
  { id: "contact", label: "Contact", icon: Mail },
];

export function BottomNav() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    items.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        (entries) => entries.forEach((e) => e.isIntersecting && setActive(id)),
        { rootMargin: "-40% 0px -55% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <nav className="fixed bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-1 px-2 py-2 rounded-full border border-border bg-card/70 backdrop-blur-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.6)]">
        {items.map(({ id, label, icon: Icon }) => {
          const isActive = active === id;
          return (
            <a
              key={id}
              href={`#${id}`}
              className={cn(
                "group relative flex items-center gap-2 px-3 md:px-4 py-2 rounded-full text-xs font-medium transition-all duration-300",
                isActive
                  ? "bg-gradient-to-br from-primary/30 to-accent/20 text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <Icon className="h-4 w-4" />
              <span className="hidden md:inline">{label}</span>
              {isActive && <span className="absolute inset-0 rounded-full ring-1 ring-accent/40" />}
            </a>
          );
        })}
      </div>
    </nav>
  );
}
