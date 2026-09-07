/* eslint-disable @next/next/no-img-element */
import GsapPageMotion from "@/components/gsap-page-motion";
import BlurFade from "@/components/magicui/blur-fade";
import ContactSection from "@/components/section/contact-section";
import HackathonsSection from "@/components/section/hackathons-section";
import ProjectsSection from "@/components/section/projects-section";
import WorkSection from "@/components/section/work-section";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DATA } from "@/data/resume";
import { ArrowDownToLine, ArrowUpRight, CheckCircle2, MapPin } from "lucide-react";
import Link from "next/link";
import Markdown from "react-markdown";

const BLUR_FADE_DELAY = 0.04;

const highlights = [
  "Java + Spring Boot backend development",
  "REST API design, testing, and integration",
  "AWS, Docker, CI/CD, and cloud delivery",
  "Database-backed systems with MySQL, MongoDB, and OracleDB",
];

const stats = [
  { value: "2", label: "Software internships" },
  { value: "13", label: "Featured engineering projects" },
  { value: "2026", label: "B.Tech IT graduation" },
];

export default function Page() {
  return (
    <main className="relative flex min-h-dvh flex-col gap-20 overflow-hidden pb-28">
      <GsapPageMotion />

      <section id="hero" className="gsap-hero pt-4">
        <div className="grid items-center gap-10 lg:grid-cols-[1.4fr_0.9fr]">
          <div className="space-y-8">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/15 bg-primary/5 px-4 py-2 text-sm font-medium text-primary">
              <span className="size-2 rounded-full bg-emerald-500" />
              Open to software engineering roles
            </div>

            <div className="space-y-5">
              <BlurFade delay={BLUR_FADE_DELAY}>
                <h1 className="max-w-4xl text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
                  Hi, I&apos;m Aman Sharma.
                  <span className="block text-muted-foreground">
                    I build reliable backend and full-stack systems.
                  </span>
                </h1>
              </BlurFade>
              <BlurFade delay={BLUR_FADE_DELAY * 2}>
                <p className="max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
                  {DATA.description}
                </p>
              </BlurFade>
            </div>

            <BlurFade delay={BLUR_FADE_DELAY * 3}>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  href={DATA.resumeUrl}
                  download
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-primary px-5 text-sm font-semibold text-primary-foreground shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg"
                >
                  <ArrowDownToLine className="size-4" aria-hidden />
                  Download Resume
                </Link>
                <Link
                  href={DATA.contact.social.GitHub.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-md border border-border bg-background px-5 text-sm font-semibold transition hover:-translate-y-0.5 hover:bg-muted"
                >
                  View GitHub
                  <ArrowUpRight className="size-4" aria-hidden />
                </Link>
              </div>
            </BlurFade>

            <BlurFade delay={BLUR_FADE_DELAY * 4}>
              <div className="grid gap-3 sm:grid-cols-3">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-md border border-border bg-card/80 p-4 shadow-sm"
                  >
                    <div className="text-2xl font-semibold">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </BlurFade>
          </div>

          <BlurFade delay={BLUR_FADE_DELAY * 2}>
            <div className="gsap-card profile-panel relative mx-auto w-full max-w-sm rounded-md border border-border bg-card p-5 shadow-xl">
              <div className="absolute inset-x-5 top-5 h-24 rounded-md bg-linear-to-r from-primary/15 via-emerald-500/15 to-sky-500/15" />
              <div className="relative flex flex-col items-center pt-8 text-center">
                <Avatar className="size-44 rounded-md border border-background shadow-2xl ring-4 ring-background">
                  <AvatarImage alt={DATA.name} src={DATA.avatarUrl} className="object-cover" />
                  <AvatarFallback>{DATA.initials}</AvatarFallback>
                </Avatar>
                <div className="mt-5 space-y-2">
                  <h2 className="text-2xl font-semibold">{DATA.name}</h2>
                  <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="size-4" aria-hidden />
                    {DATA.location}
                  </div>
                </div>
                <div className="mt-6 grid w-full gap-2 text-left">
                  {highlights.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-2 rounded-md bg-muted/60 px-3 py-2 text-sm"
                    >
                      <CheckCircle2 className="mt-0.5 size-4 flex-none text-emerald-600" aria-hidden />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </BlurFade>
        </div>
      </section>

      <section id="about" className="gsap-section">
        <div className="grid gap-8 lg:grid-cols-[0.4fr_1fr]">
          <div>
            <p className="section-kicker">About</p>
            <h2 className="section-title">Clear code, practical systems, production mindset.</h2>
          </div>
          <div className="prose max-w-full text-pretty font-sans text-base leading-8 text-muted-foreground dark:prose-invert">
            <Markdown>{DATA.summary}</Markdown>
          </div>
        </div>
      </section>

      <section id="work" className="gsap-section">
        <div className="section-heading">
          <p className="section-kicker">Experience</p>
          <h2 className="section-title">Recent engineering work</h2>
        </div>
        <WorkSection />
      </section>

      <section id="education" className="gsap-section">
        <div className="section-heading">
          <p className="section-kicker">Education</p>
          <h2 className="section-title">Academic foundation</h2>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {DATA.education.map((education, index) => (
            <BlurFade key={education.school} delay={BLUR_FADE_DELAY * 4 + index * 0.05}>
              <Link
                href={education.href}
                target="_blank"
                rel="noopener noreferrer"
                className="gsap-card flex h-full items-start gap-4 rounded-md border border-border bg-card p-5 shadow-sm transition hover:border-primary/30"
              >
                {education.logoUrl ? (
                  <img
                    src={education.logoUrl}
                    alt={education.school}
                    className="size-11 flex-none rounded-md border bg-background object-contain p-1"
                  />
                ) : (
                  <div className="size-11 flex-none rounded-md border bg-muted" />
                )}
                <div className="min-w-0 flex-1">
                  <div className="font-semibold">{education.school}</div>
                  <div className="mt-1 text-sm leading-6 text-muted-foreground">
                    {education.degree}
                  </div>
                  <div className="mt-3 text-sm font-medium text-primary">
                    {education.start} - {education.end}
                  </div>
                </div>
              </Link>
            </BlurFade>
          ))}
        </div>
      </section>

      <section id="skills" className="gsap-section">
        <div className="section-heading">
          <p className="section-kicker">Skills</p>
          <h2 className="section-title">Tools Aman uses to ship</h2>
        </div>
        <div className="flex flex-wrap gap-2.5">
          {DATA.skills.map((skill, id) => (
            <BlurFade key={skill.name} delay={BLUR_FADE_DELAY * 5 + id * 0.03}>
              <div className="inline-flex h-10 items-center gap-2 rounded-md border border-border bg-card px-3 text-sm font-medium shadow-sm">
                {skill.icon && <skill.icon className="size-4 overflow-hidden rounded object-contain" />}
                <span>{skill.name}</span>
              </div>
            </BlurFade>
          ))}
        </div>
      </section>

      <section id="projects" className="gsap-section">
        <ProjectsSection />
      </section>

      <section id="certifications" className="gsap-section">
        <HackathonsSection />
      </section>

      <section id="contact" className="gsap-section scroll-mt-24 pb-8">
        <ContactSection />
      </section>
    </main>
  );
}
