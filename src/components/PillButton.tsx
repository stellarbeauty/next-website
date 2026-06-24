import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import type { MouseEventHandler, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Size = "sm" | "md" | "lg";
type Variant = "primary" | "secondary" | "alternative";
type IconVariant = "transparent" | "filled";

type CommonProps = {
  size?: Size;
  variant?: Variant;
  className?: string;
  fullWidth?: boolean;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
};

type TextButtonProps = CommonProps & {
  label: ReactNode;
  iconOnly?: false;
};

type IconButtonProps = CommonProps & {
  iconOnly: true;
  ariaLabel: string;
  iconVariant?: IconVariant;
  icon?: ReactNode;
};

type LinkProps = (TextButtonProps | IconButtonProps) & {
  href: string;
  external?: false;
  target?: never;
  rel?: never;
};

type AnchorProps = (TextButtonProps | IconButtonProps) & {
  href: string;
  external: true;
  target?: string;
  rel?: string;
};

export type PillButtonProps = LinkProps | AnchorProps;

const SIZE_STYLES: Record<
  Size,
  {
    text: { pad: string; gap: string; iconBox: string; iconSize: string };
    iconOnly: { box: string; iconSize: string };
    alternative: { text: string; arrowSize: string; gap: string };
  }
> = {
  sm: {
    text: { pad: "py-2 pl-4 pr-2", gap: "gap-2.5", iconBox: "h-6 w-6", iconSize: "h-3 w-3" },
    iconOnly: { box: "h-8 w-8", iconSize: "h-3.5 w-3.5" },
    alternative: { text: "text-[11px] tracking-[0.14em]", arrowSize: "h-3 w-3", gap: "gap-2" },
  },
  md: {
    text: { pad: "py-2.5 pl-5 pr-2.5", gap: "gap-3", iconBox: "h-7 w-7", iconSize: "h-3.5 w-3.5" },
    iconOnly: { box: "h-9 w-9", iconSize: "h-4 w-4" },
    alternative: { text: "text-xs tracking-[0.12em]", arrowSize: "h-3.5 w-3.5", gap: "gap-2" },
  },
  lg: {
    text: { pad: "py-3 pl-6 pr-3", gap: "gap-3.5", iconBox: "h-8 w-8", iconSize: "h-4 w-4" },
    iconOnly: { box: "h-10 w-10", iconSize: "h-4 w-4" },
    alternative: { text: "text-sm tracking-[0.1em]", arrowSize: "h-4 w-4", gap: "gap-2.5" },
  },
};

const TRANSPARENT_BORDER_CLASSES = "border border-transparent";
const PRIMARY_BORDER_CLASSES = "border border-[color:var(--rule-color-hover)]";

const FROSTED_GLASS_CLASSES = "bg-[color:var(--khaki-soft)]/25 backdrop-blur-sm";
const DARK_FROSTED_GLASS_CLASSES = "bg-[color:var(--muted-foreground)]/75 backdrop-blur-sm";

const VARIANT_CLASSES: Record<Variant, string> = {
  primary: `${PRIMARY_BORDER_CLASSES} ${FROSTED_GLASS_CLASSES} text-[color:var(--forest)]`,
  secondary: `${TRANSPARENT_BORDER_CLASSES} ${DARK_FROSTED_GLASS_CLASSES} text-[color:var(--khaki-soft)]`,
  alternative: `${TRANSPARENT_BORDER_CLASSES} bg-transparent text-[color:var(--muted-foreground)]`,
};

export const PILL_VARIANT_SURFACE = VARIANT_CLASSES;

const ICON_CHIP_CLASSES: Record<Variant, string> = {
  primary: `${TRANSPARENT_BORDER_CLASSES} bg-[color:var(--muted-foreground)] text-[color:var(--khaki-soft)]`,
  secondary: `${TRANSPARENT_BORDER_CLASSES} bg-[color:var(--khaki-soft)] text-[color:var(--muted-foreground)]`,
  alternative: "bg-transparent text-[color:var(--muted-foreground)]",
};

const ICON_ONLY_CLASSES: Record<IconVariant, string> = {
  transparent: VARIANT_CLASSES.primary,
  filled: VARIANT_CLASSES.secondary,
};

const ARROW_HOVER_ROTATE =
  "transition-transform duration-300 ease-[var(--ease-flow)] motion-reduce:transition-none motion-reduce:group-hover:rotate-0 group-hover:rotate-45";
const ALTERNATIVE_ARROW_SLIDE =
  "shrink-0 text-[color:var(--muted-foreground)] transition-transform duration-300 ease-[var(--ease-flow)] motion-reduce:transition-none motion-reduce:group-hover:translate-x-0 group-hover:translate-x-0.5";

function withNoopenerRel(rel?: string) {
  const parts = new Set((rel ?? "").split(/\s+/).filter(Boolean));
  parts.add("noopener");
  parts.add("noreferrer");
  return [...parts].join(" ");
}

export function ArrowIcon({ className, size = "md" }: { className?: string; size?: Size }) {
  const iconSize = SIZE_STYLES[size].text.iconSize;
  return <ArrowUpRight className={cn(iconSize, className)} strokeWidth={1.5} aria-hidden />;
}

function ButtonArrow({ size, variant }: { size: Size; variant: Variant }) {
  const styles = SIZE_STYLES[size];

  if (variant === "alternative") {
    return (
      <ArrowRight
        className={cn(
          styles.alternative.arrowSize,
          ALTERNATIVE_ARROW_SLIDE,
          ICON_CHIP_CLASSES[variant],
        )}
        strokeWidth={1.5}
        aria-hidden
      />
    );
  }

  return (
    <span
      className={cn(
        "flex shrink-0 items-center justify-center rounded-full",
        styles.text.iconBox,
        ICON_CHIP_CLASSES[variant],
      )}
    >
      <ArrowUpRight className={cn(styles.text.iconSize, ARROW_HOVER_ROTATE)} strokeWidth={1.5} aria-hidden />
    </span>
  );
}

function renderInner(props: PillButtonProps) {
  const size = props.size ?? "md";
  const styles = SIZE_STYLES[size];

  if ("iconOnly" in props && props.iconOnly) {
    return (
      <span className={cn("flex items-center justify-center rounded-full", styles.iconOnly.box)}>
        {props.icon ?? (
          <ArrowUpRight className={cn(styles.iconOnly.iconSize, ARROW_HOVER_ROTATE)} strokeWidth={1.5} aria-hidden />
        )}
      </span>
    );
  }

  const variant = props.variant ?? "primary";

  return (
    <>
      <span className="whitespace-nowrap">{props.label}</span>
      <ButtonArrow size={size} variant={variant} />
    </>
  );
}

export function PillButton(props: PillButtonProps) {
  const { size = "md", variant = "primary", className = "", fullWidth = false, href, onClick } = props;
  const styles = SIZE_STYLES[size];
  const isIconOnly = "iconOnly" in props && props.iconOnly;
  const isAlternative = variant === "alternative";
  const iconVariant = isIconOnly ? (props.iconVariant ?? "transparent") : undefined;

  const base = cn(
    "group",
    "inline-flex items-center focus-ring",
    !isAlternative && "nav-link-text",
    !isAlternative && !isIconOnly && "rounded-full",
    isIconOnly
      ? cn(styles.iconOnly.box, ICON_ONLY_CLASSES[iconVariant!], "justify-center rounded-full p-0")
      : isAlternative
        ? cn(
            "rounded-none py-2 font-medium uppercase",
            styles.alternative.text,
            styles.alternative.gap,
            fullWidth ? "w-full justify-between" : "",
            VARIANT_CLASSES[variant],
          )
        : cn(
            styles.text.pad,
            styles.text.gap,
            fullWidth ? "w-full justify-between" : "",
            VARIANT_CLASSES[variant],
          ),
    className,
  );

  const ariaProps = isIconOnly ? { "aria-label": props.ariaLabel } : {};

  const inner = renderInner(props);

  if ("external" in props && props.external) {
    const rel = props.target === "_blank" ? withNoopenerRel(props.rel) : props.rel;
    return (
      <a href={href} target={props.target} rel={rel} onClick={onClick} className={base} {...ariaProps}>
        {inner}
      </a>
    );
  }

  const isExternalHref =
    href.startsWith("tel:") || href.startsWith("mailto:") || href.startsWith("http://") || href.startsWith("https://") || href.startsWith("//");

  if (isExternalHref) {
    return (
      <a href={href} onClick={onClick} className={base} {...ariaProps}>
        {inner}
      </a>
    );
  }

  return (
    <Link href={href} onClick={onClick} className={base} {...ariaProps}>
      {inner}
    </Link>
  );
}
