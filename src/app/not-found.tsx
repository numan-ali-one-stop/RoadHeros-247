import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center px-6 py-24 text-center">
      <h1 className="text-4xl font-semibold tracking-tight">404</h1>
      <p className="text-muted-foreground mt-4 max-w-md">
        The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <Button className="mt-8" render={<Link href="/" />}>
        Back home
      </Button>
    </div>
  );
}
