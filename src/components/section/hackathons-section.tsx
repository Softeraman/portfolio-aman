import { DATA } from "@/data/resume";
import { Award } from "lucide-react";

export default function HackathonsSection() {
  if (!DATA.hackathons.length) {
    return null;
  }

  return (
    <div className="space-y-6">
      <div className="section-heading">
        <p className="section-kicker">Certifications</p>
        <h2 className="section-title">Additional credentials</h2>
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        {DATA.hackathons.map((certificate) => (
          <div
            key={certificate.title}
            className="gsap-card rounded-md border border-border bg-card p-5 shadow-sm"
          >
            <div className="flex items-start gap-3">
              <div className="rounded-md bg-primary/10 p-2 text-primary">
                <Award className="size-5" aria-hidden />
              </div>
              <div>
                <h3 className="font-semibold">{certificate.title}</h3>
                <p className="mt-1 text-sm font-medium text-primary">
                  {certificate.dates}
                </p>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {certificate.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
