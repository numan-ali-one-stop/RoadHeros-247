import type { Metadata } from "next";

import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Cookie Policy",
  // Kept out of search results until the final wording is published.
  robots: { index: false },
};

export default function Page() {
  return (
    <LegalPage title="Cookie Policy" topic="the cookies used on this website" />
  );
}
