import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Size = "sm" | "md" | "lg";
type Variant = "primary" | "secondary" | "alternative";
type IconVariant = "transparent" | "filled";

type CommonProps = {
  size?: Size;
  variant?: Variant;
  className?: string;
  fullWidth?: boolean;
  onClick?: () => void;
};

type TextButtonProps = CommonProps & {
  label: ReactNode;
  iconOnly?: false;
};

type IconButtonProps = CommonProps & {
  iconOnly: true;
  ariaLabel: string;
  iconVariant?: IconVariant;
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

const TEXT_SIZES: Record<Size, { pad: string; gap: string; icon: string; iconSize: string }> = {
  sm: { pad: "py-2 pl-4 pr-2", gap: "gap-2.5", icon: "h-6 w-6", iconSize: "h-3 w-3" },
  md: { pad: "py-2.5 pl-5 pr-2.5", gap: "gap-3", icon: "h-7 w-7", iconSize: "h-3.5 w-3.5" },
  lg: { pad: "py-3 pl-6 pr-3", gap: "gap-3.5", icon: "h-8 w-8", iconSize: "h-4 w-4" },
};

const ICON_SIZES: Record<Size, { box: string; icon: string }> = {
  sm: { box: "h-8 w-8", icon: "h-3.5 w-3.5" },
  md: { box: "h-9 w-9", icon: "h-4 w-4" },
  lg: { box: "h-10 w-10", icon: "h-4 w-4" },
};

const ALTERNATIVE_SIZES: Record<Size, { text: string; arrow: string; gap: string }> = {
  sm: { text: "text-[11px] tracking-[0.14em]", arrow: "h-3 w-3", gap: "gap-2" },
  md: { text: "text-xs tracking-[0.12em]", arrow: "h-3.5 w-3.5", gap: "gap-2" },
  lg: { text: "text-sm tracking-[0.1em]", arrow: "h-4 w-4", gap: "gap-2.5" },
};

const PRIMARY_BORDER_CLASSES = "border border-[color:var(--rule-color-hover)]";

const FROSTED_GLASS_CLASSES = "bg-[color:var(--khaki-soft)]/25 backdrop-blur-sm";
const DARK_FROSTED_GLASS_CLASSES = "bg-[color:var(--muted-foreground)]/75 backdrop-blur-sm";

const VARIANT_CLASSES: Record<Variant, string> = {
  primary: `${PRIMARY_BORDER_CLASSES} ${FROSTED_GLASS_CLASSES} text-[color:var(--forest)]`,
  secondary: `border border-transparent ${DARK_FROSTED_GLASS_CLASSES} text-[color:var(--khaki-soft)]`,
  alternative: "border border-transparent bg-transparent text-[color:var(--muted-foreground)]",
};

const ICON_CHIP_CLASSES: Record<Variant, string> = {
  primary: "border border-transparent bg-[color:var(--muted-foreground)] text-[color:var(--khaki-soft)]",
  secondary: "border border-transparent bg-[color:var(--khaki-soft)] text-[color:var(--muted-foreground)]",
  alternative: "bg-transparent text-[color:var(--muted-foreground)]",
};

const ICON_ONLY_CLASSES: Record<IconVariant, string> = {
  transparent: `${PRIMARY_BORDER_CLASSES} ${FROSTED_GLASS_CLASSES} text-[color:var(--forest)]`,
  filled: `border border-transparent ${DARK_FROSTED_GLASS_CLASSES} text-[color:var(--khaki-soft)]`,
};

const ARROW_HOVER_ROTATE =
  "transition-transform duration-300 ease-[var(--ease-flow)] motion-reduce:transition-none motion-reduce:group-hover:rotate-0 group-hover:rotate-45";

export function ArrowIcon({ className, size = "md" }: { className?: string; size?: Size }) {
  const iconSize = TEXT_SIZES[size].iconSize;
  return <ArrowUpRight className={cn(iconSize, className)} strokeWidth={1.5} aria-hidden />;
}

function ButtonArrow({ size, variant }: { size: Size; variant: Variant }) {
  const s = TEXT_SIZES[size];

  if (variant === "alternative") {
    const alt = ALTERNATIVE_SIZES[size];
    return (
      <ArrowRight
        className={cn(
          alt.arrow,
          "shrink-0 text-[color:var(--muted-foreground)] transition-transform duration-300 ease-[var(--ease-flow)] motion-reduce:transition-none motion-reduce:group-hover:translate-x-0 group-hover:translate-x-0.5",
          ICON_CHIP_CLASSES[variant],
        )}
        strokeWidth={1.5}
        aria-hidden
      />
    );
  }

  return (
    <span
      className={cn("flex shrink-0 items-center justify-center rounded-full", s.icon, ICON_CHIP_CLASSES[variant])}
    >
      <ArrowUpRight className={cn(s.iconSize, ARROW_HOVER_ROTATE)} strokeWidth={1.5} aria-hidden />
    </span>
  );
}

function renderInner(props: PillButtonProps) {
  const size = props.size ?? "md";

  if ("iconOnly" in props && props.iconOnly) {
    const s = ICON_SIZES[size];
    return (
      <span className={cn("flex items-center justify-center rounded-full", s.box)}>
        <ArrowUpRight className={cn(s.icon, ARROW_HOVER_ROTATE)} strokeWidth={1.5} />
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
  const isIconOnly = "iconOnly" in props && props.iconOnly;
  const isAlternative = variant === "alternative";
  const iconVariant = isIconOnly ? (props.iconVariant ?? "transparent") : undefined;
  const alternativeSize = ALTERNATIVE_SIZES[size];

  const base = cn(
    "group",
    "inline-flex items-center focus-ring",
    !isAlternative && "nav-link-text",
    !isAlternative && !isIconOnly && "rounded-full",
    isIconOnly
      ? cn(ICON_SIZES[size].box, ICON_ONLY_CLASSES[iconVariant!], "justify-center rounded-full p-0")
      : isAlternative
        ? cn(
            "rounded-none py-2 font-medium uppercase",
            alternativeSize.text,
            alternativeSize.gap,
            fullWidth ? "w-full justify-between" : "",
            VARIANT_CLASSES[variant],
          )
        : cn(
            TEXT_SIZES[size].pad,
            TEXT_SIZES[size].gap,
            fullWidth ? "w-full justify-between" : "",
            VARIANT_CLASSES[variant],
          ),
    className,
  );

  const ariaProps = isIconOnly ? { "aria-label": props.ariaLabel } : {};

  const inner = renderInner(props);

  if ("external" in props && props.external) {
    return (
      <a href={href} target={props.target} rel={props.rel} onClick={onClick} className={base} {...ariaProps}>
        {inner}
      </a>
    );
  }

  const isExternal = href.startsWith("tel:") || href.startsWith("mailto:");

  if (isExternal) {
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
