"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

export default function GsapPageMotion() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from(".gsap-hero", {
        autoAlpha: 0,
        y: 28,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.12,
      });

      gsap.utils.toArray<HTMLElement>(".gsap-section").forEach((section) => {
        gsap.from(section, {
          autoAlpha: 0,
          y: 42,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 82%",
            once: true,
          },
        });
      });

      gsap.utils.toArray<HTMLElement>(".gsap-card").forEach((card) => {
        card.addEventListener("pointermove", (event) => {
          const rect = card.getBoundingClientRect();
          const x = ((event.clientX - rect.left) / rect.width - 0.5) * 8;
          const y = ((event.clientY - rect.top) / rect.height - 0.5) * -8;
          gsap.to(card, {
            rotateX: y,
            rotateY: x,
            y: -4,
            duration: 0.35,
            ease: "power2.out",
            transformPerspective: 900,
          });
        });

        card.addEventListener("pointerleave", () => {
          gsap.to(card, {
            rotateX: 0,
            rotateY: 0,
            y: 0,
            duration: 0.45,
            ease: "power2.out",
          });
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return null;
}
