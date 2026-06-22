import { Star } from "lucide-react";
import { GOOGLE_RATING, GOOGLE_REVIEW_COUNT, LINKS } from "@/lib/links";

type RatingBadgeProps = {
  variant?: "pill" | "inline";
  className?: string;
};

function PartialStars({ size = "sm" }: { size?: "sm" | "md" }) {
  const iconClass = size === "md" ? "h-4 w-4" : "h-3.5 w-3.5";
  const rating = GOOGLE_RATING;

  return (
    <span className="flex items-center gap-0.5" aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => {
        const fill = Math.min(Math.max(rating - i, 0), 1);
        if (fill >= 1) {
          return (
            <Star
              key={i}
              className={`${iconClass} fill-[color:var(--forest)] text-[color:var(--forest)]`}
              strokeWidth={1.25}
            />
          );
        }
        if (fill > 0) {
          return (
            <span key={i} className={`relative inline-block ${iconClass}`}>
              <Star className={`${iconClass} text-[color:var(--rule-color)]`} strokeWidth={1.25} />
              <span className="absolute inset-0 overflow-hidden" style={{ width: `${fill * 100}%` }}>
                <Star
                  className={`${iconClass} fill-[color:var(--forest)] text-[color:var(--forest)]`}
                  strokeWidth={1.25}
                />
              </span>
            </span>
          );
        }
        return (
          <Star key={i} className={`${iconClass} text-[color:var(--rule-color)]`} strokeWidth={1.25} />
        );
      })}
    </span>
  );
}

export function RatingBadge({ variant = "pill", className = "" }: RatingBadgeProps) {
  const label = `${GOOGLE_RATING} star rating from ${GOOGLE_REVIEW_COUNT} Google reviews`;

  if (variant === "inline") {
    return (
      <a
        href={LINKS.googleReviews}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className={`inline-flex flex-wrap items-center gap-2 transition-opacity hover:opacity-80 ${className}`}
      >
        <PartialStars size="md" />
        <span className="text-sm font-medium">{GOOGLE_RATING}</span>
        <span className="text-[11px] uppercase tracking-[0.18em] text-[color:var(--muted-foreground)]">
          {GOOGLE_REVIEW_COUNT} Google reviews
        </span>
      </a>
    );
  }

  return (
    <a
      href={LINKS.googleReviews}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={`inline-flex items-center gap-4 rounded-full border border-[color:var(--rule-color)] bg-white/60 px-5 py-2.5 backdrop-blur transition-colors hover:border-[color:var(--forest)]/30 ${className}`}
    >
      <PartialStars />
      <span className="text-sm text-[color:var(--forest)]">
        <span className="font-medium">{GOOGLE_RATING}</span>
        <span className="mx-2 text-[color:var(--muted-foreground)]">·</span>
        <span>{GOOGLE_REVIEW_COUNT} Google reviews</span>
      </span>
    </a>
  );
}
