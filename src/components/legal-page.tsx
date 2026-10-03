import { ContactDetails } from "@/components/contact-details";
import { Section } from "@/components/layout/section";
import { PageHero } from "@/components/page-hero";
import { siteConfig } from "@/lib/site";

/**
 * Shared layout for the legal pages. Until the owner supplies the final wording, each page
 * says it is being finalised and points to the contact details.
 */
export function LegalPage({
  title,
  topic,
}: {
  title: string;
  /** e.g. "how we use personal information" */
  topic: string;
}) {
  return (
    <>
      <PageHero eyebrow={siteConfig.legalName} title={title} />
      <Section size="sm">
        <div className="mx-auto flex max-w-3xl flex-col gap-4">
          <p className="text-muted-foreground leading-relaxed">
            Our {title.toLowerCase()} is being finalised and will be published
            here shortly.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            In the meantime, if you have any questions about {topic}, please
            contact {siteConfig.legalName}.
          </p>
          <ContactDetails className="text-foreground" />
        </div>
      </Section>
    </>
  );
}
