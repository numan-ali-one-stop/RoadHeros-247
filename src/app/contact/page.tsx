import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

import { ContactForm } from "@/components/contact-form";
import { FadeIn } from "@/components/motion/fade-in";
import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/layout/section";
import { Card, CardContent } from "@/components/ui/card";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Road Heroes 24/7 for a quote, a callout, or a question about our mobile tyre fitting and roadside assistance services.",
  openGraph: {
    title: "Contact | Road Heroes 24/7",
    description:
      "Get in touch with Road Heroes 24/7 for a quote, a callout, or a question about our mobile tyre fitting and roadside assistance services.",
  },
};

const contactDetails = [
  {
    icon: Phone,
    label: "Call us",
    value: siteConfig.phone,
    href: siteConfig.phoneHref,
  },
  {
    icon: Mail,
    label: "Email us",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  {
    icon: MapPin,
    label: "Depot address",
    value: siteConfig.address,
    href: undefined,
  },
  {
    icon: Clock,
    label: "Availability",
    value: siteConfig.hours,
    href: undefined,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Tell us where you are, we'll do the rest"
        subtitle="For a live breakdown, calling us is always fastest. For quotes, fleet accounts or general questions, the form below reaches our team directly."
      />

      <Section>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <FadeIn>
            <Card>
              <CardContent>
                <h2 className="font-heading mb-6 text-xl font-semibold tracking-tight">
                  Send us a message
                </h2>
                <ContactForm />
              </CardContent>
            </Card>
          </FadeIn>

          <FadeIn delay={0.1} className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              {contactDetails.map((detail) => {
                const content = (
                  <div className="flex items-start gap-3">
                    <span className="bg-primary/10 text-primary flex size-10 shrink-0 items-center justify-center rounded-lg">
                      <detail.icon className="size-4.5" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="text-muted-foreground text-xs font-medium tracking-wide uppercase">
                        {detail.label}
                      </p>
                      <p className="text-sm font-medium">{detail.value}</p>
                    </div>
                  </div>
                );

                return (
                  <div
                    key={detail.label}
                    className="border-border bg-card rounded-xl border p-4"
                  >
                    {detail.href ? (
                      <a href={detail.href} className="block">
                        {content}
                      </a>
                    ) : (
                      content
                    )}
                  </div>
                );
              })}
            </div>

            <div className="border-border bg-secondary/40 relative flex aspect-4/3 items-center justify-center overflow-hidden rounded-2xl border">
              <div className="bg-grid-pattern absolute inset-0" aria-hidden="true" />
              <div className="relative flex flex-col items-center gap-2 text-center">
                <MapPin className="text-primary size-6" aria-hidden="true" />
                <p className="text-muted-foreground text-sm">
                  Map placeholder — embed Google Maps here
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </Section>
    </>
  );
}
