import type { Metadata } from "next";

import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  // Kept out of search results until the final wording is published.
  robots: { index: false },
};

export default function Page() {
  return (
    <LegalPage
      title="Terms & Conditions"
      topic="the terms of our mobile tyre services"
    />
  );
}
