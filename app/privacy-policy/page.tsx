import type { Metadata } from "next";
import { PageHeader } from "@/components/ui";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy for Haris Wadood's networking portfolio: what data this site collects (none beyond standard hosting logs) and how contact details are used.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHeader
        title="Privacy Policy"
        description="Plain-language summary of how this portfolio website handles visitor data."
      />
      <div className="mx-auto max-w-6xl space-y-6 px-4 py-12 leading-relaxed text-slate-300">
        <section>
          <h2 className="text-xl font-bold text-white">Data this site collects</h2>
          <p className="mt-2">
            This website has no contact form, no accounts and no tracking beyond what is
            described below. It does not collect your name, email address or any other personal
            information directly.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-white">Hosting and analytics</h2>
          <p className="mt-2">
            When published, the site is hosted on Vercel, which may keep standard server logs
            (such as requested pages and approximate location) for security and performance.
            Google Analytics is optional and is only enabled if a measurement ID is configured
            through an environment variable; the site works fully without it.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-white">Contact links</h2>
          <p className="mt-2">
            The email button opens your own mail application with a message addressed to Haris
            Wadood, and the LinkedIn button opens his public LinkedIn profile. Anything you send
            through those channels is handled by your mail provider or LinkedIn, not by this
            website.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-white">External links</h2>
          <p className="mt-2">
            Links to LinkedIn and other external sites are governed by those sites&apos; own
            privacy policies.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-white">Changes</h2>
          <p className="mt-2">
            If this policy changes, the updated version will be published on this page.
          </p>
        </section>
      </div>
    </>
  );
}
