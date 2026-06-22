import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

type Size = "sm" | "md" | "lg";
type Variant = "solid" | "ghost";

type CommonProps = {
  label: ReactNode;
  size?: Size;
  variant?: Variant;
  className?: string;
  fullWidth?: boolean;
};

type LinkProps = CommonProps & {
  href: string;
  external?: false;
  target?: never;
  rel?: never;
};

type AnchorProps = CommonProps & {
  href: string;
  external: true;
  target?: string;
  rel?: string;
};

export type PillButtonProps = LinkProps | AnchorProps;

const SIZES: Record<Size, { pad: string; text: string; icon: string; iconSize: string }> = {
  sm: { pad: "py-1 pl-3.5 pr-1", text: "text-[10px]", icon: "h-6 w-6", iconSize: "h-3 w-3" },
  md: { pad: "py-1.5 pl-4 pr-1.5", text: "text-[11px]", icon: "h-8 w-8", iconSize: "h-3.5 w-3.5" },
  lg: { pad: "py-2 pl-6 pr-2", text: "text-xs", icon: "h-10 w-10", iconSize: "h-4 w-4" },
};

export function PillButton(props: PillButtonProps) {
  const { label, size = "md", variant = "solid", className = "", fullWidth = false, href } = props;
  const s = SIZES[size];
  const variantClasses =
    variant === "ghost"
      ? "border border-black/25 bg-transparent text-black hover:border-black hover:bg-black hover:text-[color:var(--khaki-soft)]"
      : "border border-transparent bg-black text-[color:var(--khaki-soft)] hover:bg-black";

  const chipClasses =
    variant === "ghost"
      ? "bg-black text-[color:var(--khaki-soft)] group-hover:bg-[color:var(--khaki-soft)] group-hover:text-black"
      : "bg-[color:var(--khaki-soft)] text-black";

  const base = `group inline-flex ${fullWidth ? "w-full justify-between" : ""} items-center gap-3 rounded-full ${s.pad} ${s.text} font-medium uppercase tracking-[0.16em] transition-colors duration-300 ${variantClasses} ${className}`;

  const inner = (
    <>
      <span className="whitespace-nowrap transition-transform duration-300 ease-out group-hover:translate-x-0.5">
        {label}
      </span>
      <span
        className={`flex ${s.icon} shrink-0 items-center justify-center rounded-full transform-gpu transition-all duration-300 ease-out group-hover:rotate-45 ${chipClasses}`}
      >
        <ArrowUpRight className={s.iconSize} strokeWidth={2} />
      </span>
    </>
  );

  if ("external" in props && props.external) {
    return (
      <a href={href} target={props.target} rel={props.rel} className={base}>
        {inner}
      </a>
    );
  }

  const isExternal = href.startsWith("tel:") || href.startsWith("mailto:");

  if (isExternal) {
    return (
      <a href={href} className={base}>
        {inner}
      </a>
    );
  }

  return (
    <Link href={href} className={base}>
      {inner}
    </Link>
  );
}
