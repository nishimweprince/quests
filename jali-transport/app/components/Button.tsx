import Link from "next/link";
import { ArrowIcon } from "./ArrowIcon";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "default" | "cream" | "sand" | "nav";
  className?: string;
};

export function Button({
  href,
  children,
  variant = "default",
  className = "",
}: ButtonProps) {
  const variantClass =
    variant === "cream"
      ? " button--cream"
      : variant === "sand"
        ? " button--sand"
        : variant === "nav"
          ? " button--nav"
          : "";

  return (
    <Link href={href} className={`button btn-arrow${variantClass} ${className}`}>
      <span>{children}</span>
      <ArrowIcon />
    </Link>
  );
}
