"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";

const STATS = [
  { value: 20, suffix: "+", label: "Years of experience" },
  { value: 4, label: "Pro team members" },
  { value: 3000, suffix: "+", label: "Happy clients", format: (n: number) => n.toLocaleString("en-US") },
] as const;

function easeInCubic(t: number) {
  return t * t * t;
}

function usePrefersReducedMotion() {
  return useSyncExternalStore(
    (onStoreChange) => {
      const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
      mq.addEventListener("change", onStoreChange);
      return () => mq.removeEventListener("change", onStoreChange);
    },
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    () => false,
  );
}

function AnimatedValue({
  value,
  suffix = "",
  format,
  active,
  duration = 2200,
}: {
  value: number;
  suffix?: string;
  format?: (n: number) => string;
  active: boolean;
  duration?: number;
}) {
  const reducedMotion = usePrefersReducedMotion();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!active || reducedMotion) return;

    let start: number | null = null;
    let frame = 0;

    const tick = (timestamp: number) => {
      if (start === null) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setCurrent(Math.round(easeInCubic(progress) * value));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, reducedMotion, value, duration]);

  const n = !active ? 0 : reducedMotion ? value : current;
  const text = format ? format(n) : String(n);
  return (
    <>
      {text}
      {suffix}
    </>
  );
}

export function PhilosophyStats() {
  const ref = useRef<HTMLDListElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <dl
      ref={ref}
      className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 border-t border-[color:var(--rule-color)] pt-8 sm:grid-cols-3"
    >
      {STATS.map((s) => (
        <div key={s.label}>
          <dt className="font-display text-2xl font-medium tracking-[-0.01em] text-[color:var(--forest)] md:text-3xl tabular-nums">
            <AnimatedValue
              value={s.value}
              suffix={"suffix" in s ? s.suffix : undefined}
              format={"format" in s ? s.format : undefined}
              active={active}
            />
          </dt>
          <dd className="mt-1 text-[11px] uppercase tracking-[0.16em] text-[color:var(--muted-foreground)]">
            {s.label}
          </dd>
        </div>
      ))}
    </dl>
  );
}
