import { cn } from "@/lib/utils"

export function Logo({ className }: { className?: string }) {
  // TODO: Replace with SVG logo
  return (
    <span className={cn("font-bold text-[var(--brand-green)]", className)}>
      Brief
    </span>
  )
}
