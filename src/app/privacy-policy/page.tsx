import type { Metadata } from "next";

import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Privacy Policy",
  // Kept out of search results until the final wording is published.
  robots: { index: false },
};

export default function Page() {
  return (
    <LegalPage
      title="Privacy Policy"
      topic="how we use the personal information you share with us"
    />
  );
}
