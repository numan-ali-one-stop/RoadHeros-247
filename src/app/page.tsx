import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center px-6 py-24 text-center">
      <h1 className="text-4xl font-semibold tracking-tight text-balance">
        {siteConfig.name}
      </h1>
      <p className="text-muted-foreground mt-4 max-w-md text-balance">
        {siteConfig.description}
      </p>
      <Button className="mt-8" render={<a href="mailto:hello@example.com" />}>
        Get in touch
      </Button>
    </div>
  );
}
