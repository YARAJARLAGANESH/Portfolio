export function Footer() {
  return (
    <footer className="px-4 pt-10 pb-28 text-center">
      <div className="max-w-5xl mx-auto border-t border-border pt-8">
        <p className="text-xs font-mono text-muted-foreground">
          © {new Date().getFullYear()} Ganesh Yarajarla — Built with React, Tailwind & Framer Motion.
        </p>
      </div>
    </footer>
  );
}
