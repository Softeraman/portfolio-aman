import Link from "next/link";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import { DATA } from "@/data/resume";
import { Github, Linkedin, Mail } from "lucide-react";

export default function ContactSection() {
  return (
    <div className="relative pt-4">
      <div className="absolute left-1/2 top-0 z-20 -translate-x-1/2 rounded-md border border-primary/20 bg-primary px-4 py-1 shadow-sm">
        <span className="text-sm font-medium text-primary-foreground">Contact</span>
      </div>
      <div className="relative overflow-hidden rounded-md border border-border bg-card p-8 pt-12 sm:p-10 sm:pt-14">
        <div className="absolute inset-x-0 top-0 h-1/2 overflow-hidden">
          <FlickeringGrid
            className="h-full w-full"
            squareSize={2}
            gridGap={2}
            style={{
              maskImage: "linear-gradient(to bottom, black, transparent)",
              WebkitMaskImage: "linear-gradient(to bottom, black, transparent)",
            }}
          />
        </div>
        <div className="relative flex flex-col items-center gap-4 text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Let&apos;s build something dependable.
          </h2>
          <p className="mx-auto max-w-lg text-muted-foreground text-balance">
            Aman is available for software engineering opportunities, backend
            development work, and internship-to-full-time conversations.
          </p>
          <div className="mt-3 flex flex-col gap-3 sm:flex-row">
            <Link
              href={DATA.contact.social.Email.url}
              className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-primary px-5 text-sm font-semibold text-primary-foreground transition hover:-translate-y-0.5"
            >
              <Mail className="size-4" aria-hidden />
              Email Aman
            </Link>
            <Link
              href={DATA.contact.social.LinkedIn.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-md border border-border bg-background px-5 text-sm font-semibold transition hover:-translate-y-0.5 hover:bg-muted"
            >
              <Linkedin className="size-4" aria-hidden />
              LinkedIn
            </Link>
            <Link
              href={DATA.contact.social.GitHub.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-md border border-border bg-background px-5 text-sm font-semibold transition hover:-translate-y-0.5 hover:bg-muted"
            >
              <Github className="size-4" aria-hidden />
              GitHub
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
