export type ContentSection = {
  id: string;
  eyebrow: string;
  title: string;
  paragraphs: string[];
  listIntro?: string;
  bullets?: string[];
  closingParagraph?: string;
  note?: string;
  image?: { src: string; alt: string };
};
