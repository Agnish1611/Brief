import { cn } from "@/lib/utils";

export function LogoIcon({ className }: { className?: string }) {
  return <img src="/brief_logo.png" alt="Logo" className="h-20" />;
}

export function LogoText({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "font-extrabold text-2xl tracking-tight text-foreground",
        className,
      )}
    >
      Brief
    </span>
  );
}

export function Logo({
  className,
  iconClassName,
  textClassName,
}: {
  className?: string;
  iconClassName?: string;
  textClassName?: string;
}) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <LogoIcon className={iconClassName} />
      <LogoText className={textClassName} />
    </div>
  );
}
