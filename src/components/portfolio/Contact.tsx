import { motion } from "framer-motion";
import { useState } from "react";
import { Section } from "./Section";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import { toast } from "sonner";

export function Contact() {
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);

    const data = new FormData(e.currentTarget);

    const subject = encodeURIComponent(
      `Portfolio inquiry from ${data.get("name")}`
    );

    const body = encodeURIComponent(
      `${data.get("message")}\n\n— ${data.get("name")} (${data.get("email")})`
    );

    window.location.href = `mailto:ganeshyarajarla35@gmail.com?subject=${subject}&body=${body}`;

    setTimeout(() => {
      setSending(false);
      toast.success("Opening your mail app…");
    }, 600);
  };

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let’s build something impactful"
      subtitle="Open to internships, collaborations, hackathons, and interesting problems."
    >
      <div className="grid lg:grid-cols-5 gap-4 md:gap-6 px-2 sm:px-0">

        {/* LEFT CONTACT CARD */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="
            lg:col-span-2
            rounded-2xl
            p-4
            sm:p-5
            md:p-7
            bg-card/60
            backdrop-blur-sm
            border
            border-border
            overflow-hidden
          "
        >
          <h3 className="text-lg font-semibold">
            Reach out directly
          </h3>

          <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
            Prefer a quick message? Hit me up on any of these — I read everything.
          </p>

          <div className="mt-5 space-y-3">

            <a
              href="mailto:ganeshyarajarla35@gmail.com"
              className="
                flex
                items-center
                gap-2
                sm:gap-3
                p-3
                rounded-xl
                border
                border-border
                hover:border-accent
                hover:text-accent
                transition-colors
                overflow-hidden
              "
            >
              <Mail className="h-4 w-4 shrink-0" />

              <span className="text-xs sm:text-sm font-mono break-all">
                ganeshyarajarla35@gmail.com
              </span>
            </a>

            <a
              href="https://www.linkedin.com/in/ganeshyarajarla"
              target="_blank"
              rel="noreferrer"
              className="
                flex
                items-center
                gap-2
                sm:gap-3
                p-3
                rounded-xl
                border
                border-border
                hover:border-accent
                hover:text-accent
                transition-colors
                overflow-hidden
              "
            >
              <Linkedin className="h-4 w-4 shrink-0" />

              <span className="text-xs sm:text-sm font-mono break-all">
                linkedin.com/in/ganeshyarajarla
              </span>
            </a>

            <a
              href="https://github.com/ganeshyarajarla"
              target="_blank"
              rel="noreferrer"
              className="
                flex
                items-center
                gap-2
                sm:gap-3
                p-3
                rounded-xl
                border
                border-border
                hover:border-accent
                hover:text-accent
                transition-colors
                overflow-hidden
              "
            >
              <Github className="h-4 w-4 shrink-0" />

              <span className="text-xs sm:text-sm font-mono break-all">
                github.com/ganeshyarajarla
              </span>
            </a>

          </div>
        </motion.div>

        {/* FORM CARD */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="
            lg:col-span-3
            rounded-2xl
            p-4
            sm:p-5
            md:p-7
            bg-card/60
            backdrop-blur-sm
            border
            border-border
            space-y-4
            overflow-hidden
          "
        >

          <div className="grid sm:grid-cols-2 gap-3 md:gap-4">
            <Field
              name="name"
              label="Name"
              placeholder="Your name"
            />

            <Field
              name="email"
              label="Email"
              type="email"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
              Message
            </label>

            <textarea
              name="message"
              required
              rows={4}
              placeholder="Tell me about your project, role, or idea…"
              className="
                mt-2
                w-full
                rounded-xl
                bg-input/40
                border
                border-border
                px-4
                py-3
                text-sm
                placeholder:text-muted-foreground/60
                focus:outline-none
                focus:border-accent
                focus:ring-1
                focus:ring-accent/40
                transition-colors
                resize-none
              "
            />
          </div>

          <button
            type="submit"
            disabled={sending}
            className="
              group
              inline-flex
              w-full
              sm:w-auto
              justify-center
              items-center
              gap-2
              px-5
              py-3
              rounded-full
              bg-gradient-to-br
              from-primary
              to-[oklch(0.42_0.07_50)]
              text-primary-foreground
              font-medium
              text-sm
              hover:scale-[1.02]
              transition-transform
              disabled:opacity-60
            "
          >
            <Send className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />

            {sending ? "Opening…" : "Send message"}
          </button>
        </motion.form>
      </div>
    </Section>
  );
}

function Field({
  name,
  label,
  type = "text",
  placeholder,
}: {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div className="overflow-hidden">
      <label className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
        {label}
      </label>

      <input
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="
          mt-2
          w-full
          rounded-xl
          bg-input/40
          border
          border-border
          px-4
          py-3
          text-sm
          placeholder:text-muted-foreground/60
          focus:outline-none
          focus:border-accent
          focus:ring-1
          focus:ring-accent/40
          transition-colors
        "
      />
    </div>
  );
}