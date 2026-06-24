import { type ReactNode } from "react";

/**
 * Teks dengan gradient brand (Lime → putih).
 * Server component, aman dipakai di mana saja.
 */
export function GradientText({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`bg-gradient-to-r from-brand to-white bg-clip-text text-transparent ${className}`}
    >
      {children}
    </span>
  );
}
