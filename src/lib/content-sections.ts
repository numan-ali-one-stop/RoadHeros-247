export type ContentStep = {
  title: string;
  description: string;
};

export type ContentSubsection = {
  title: string;
  paragraphs?: string[];
  listIntro?: string;
  bullets?: string[];
  steps?: ContentStep[];
  items?: ContentStep[];
  closingParagraph?: string | string[];
};

export type ContentSection = {
  id: string;
  eyebrow: string;
  title: string;
  paragraphs: string[];
  listIntro?: string;
  bullets?: string[];
  steps?: ContentStep[];
  items?: ContentStep[];
  closingParagraph?: string | string[];
  note?: string;
  subsections?: ContentSubsection[];
  image?: { src: string; alt: string };
};

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/** Turns every subsection into a section of its own, placed straight after its parent. */
export function flattenSections(sections: ContentSection[]): ContentSection[] {
  return sections.flatMap((section) => {
    const { subsections, ...parent } = section;
    if (!subsections) return [parent];

    return [
      parent,
      ...subsections.map(
        (subsection): ContentSection => ({
          id: `${section.id}-${slugify(subsection.title)}`,
          eyebrow: section.eyebrow,
          title: subsection.title,
          paragraphs: subsection.paragraphs ?? [],
          listIntro: subsection.listIntro,
          bullets: subsection.bullets,
          steps: subsection.steps,
          items: subsection.items,
          closingParagraph: subsection.closingParagraph,
        }),
      ),
    ];
  });
}
