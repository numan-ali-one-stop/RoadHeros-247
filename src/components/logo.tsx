import Image from "next/image";
import { cn } from "cn";

import logo from "../../public/logo.png";
import { siteConfig } from "@/lib/site";

type LogoProps = {
  className?: string;
  priority?: boolean;
};

export function Logo({ className, priority = false }: LogoProps) {
  return (
    <Image
      src={logo}
      alt={siteConfig.name}
      fetchPriority={priority ? "high" : undefined}
      loading={priority ? "eager" : undefined}
      className={cn("h-11 w-auto", className)}
    />
  );
}
