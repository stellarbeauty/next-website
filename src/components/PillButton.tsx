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

const VARIANT_CLASSES: Record<Variant, string> = {
  primary:
    "border border-[color:var(--rule-color)] bg-[color:var(--khaki-soft)]/25 text-[color:var(--forest)] backdrop-blur-sm",
  secondary:
    "border border-transparent bg-[color:var(--forest)] text-[color:var(--khaki-soft)]",
  alternative:
    "border border-transparent bg-transparent text-[color:var(--muted-foreground)]",
};

const ICON_CHIP_CLASSES: Record<Variant, string> = {
  primary: "border border-transparent bg-[color:var(--forest)] text-[color:var(--khaki-soft)]",
  secondary: "border border-transparent bg-[color:var(--khaki-soft)] text-[color:var(--forest)]",
  alternative: "bg-transparent text-[color:var(--muted-foreground)]",
};

const ICON_ONLY_CLASSES: Record<IconVariant, string> = {
  transparent:
    "border border-[color:var(--rule-color)] bg-transparent text-[color:var(--forest)]",
  filled:
    "border border-transparent bg-[color:var(--forest)] text-[color:var(--khaki-soft)]",
};

export function ArrowIcon({ className, size = "md" }: { className?: string; size?: Size }) {
  const iconSize = TEXT_SIZES[size].iconSize;
  return <ArrowUpRight className={cn(iconSize, className)} strokeWidth={1.5} aria-hidden />;
}

function ButtonArrow({ size, variant }: { size: Size; variant: Variant }) {
  const s = TEXT_SIZES[size];
  const isAlternative = variant === "alternative";

  if (isAlternative) {
    return (
      <ArrowRight
        className={cn(
          "h-3 w-3 shrink-0 text-[color:var(--muted-foreground)] transition-transform duration-300 ease-[var(--ease-flow)] motion-reduce:transition-none motion-reduce:group-hover:translate-x-0 group-hover:translate-x-0.5",
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
      <ArrowUpRight className={s.iconSize} strokeWidth={1.5} aria-hidden />
    </span>
  );
}

function renderInner(props: PillButtonProps) {
  const size = props.size ?? "md";

  if ("iconOnly" in props && props.iconOnly) {
    const s = ICON_SIZES[size];
    return (
      <span className={cn("flex items-center justify-center rounded-full", s.box)}>
        <ArrowUpRight className={s.icon} strokeWidth={1.5} />
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

  const base = cn(
    isAlternative && "group",
    "inline-flex items-center nav-link-text focus-ring",
    !isAlternative && !isIconOnly && "rounded-full",
    isIconOnly
      ? cn(ICON_SIZES[size].box, ICON_ONLY_CLASSES[iconVariant!], "justify-center rounded-full p-0")
      : isAlternative
        ? cn("gap-2 py-2", fullWidth ? "w-full justify-between" : "", VARIANT_CLASSES[variant])
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
