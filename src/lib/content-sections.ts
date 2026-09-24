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
  closingParagraph?: string;
};

export type ContentSection = {
  id: string;
  eyebrow: string;
  title: string;
  paragraphs: string[];
  listIntro?: string;
  bullets?: string[];
  items?: ContentStep[];
  closingParagraph?: string;
  note?: string;
  subsections?: ContentSubsection[];
  image?: { src: string; alt: string };
};
