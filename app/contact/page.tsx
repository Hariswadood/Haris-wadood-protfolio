import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { Card, LinkedinIcon, PageHeader } from "@/components/ui";
import { EMAIL, LINKEDIN_URL, LOCATION, PHONE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Haris Wadood: email wadoodharis200@gmail.com, LinkedIn profile, phone 03139265709, based in Mardan, Pakistan.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact"
        description="The best way to reach me is by email or LinkedIn. There is no contact form on this site — the email link below opens your mail app directly."
      />
      <div className="mx-auto grid max-w-6xl gap-4 px-4 py-12 sm:grid-cols-2">
        <Card>
          <Mail className="h-8 w-8 text-accent" aria-hidden="true" />
          <h2 className="mt-3 text-lg font-semibold text-white">Email</h2>
          <p className="mt-2 text-sm text-slate-400">
            For internships, entry-level roles and project questions.
          </p>
          <a
            href={`mailto:${EMAIL}`}
            className="mt-3 inline-block rounded-lg bg-accent px-5 py-2.5 font-semibold text-navy-950 transition-colors hover:bg-accent-soft"
          >
            {EMAIL}
          </a>
        </Card>
        <Card>
          <LinkedinIcon className="h-8 w-8 text-accent" />
          <h2 className="mt-3 text-lg font-semibold text-white">LinkedIn</h2>
          <p className="mt-2 text-sm text-slate-400">
            Connect with me professionally and see my full profile.
          </p>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-block rounded-lg border border-accent px-5 py-2.5 font-semibold text-accent-soft transition-colors hover:bg-navy-800"
          >
            View LinkedIn Profile
          </a>
        </Card>
        <Card>
          <Phone className="h-8 w-8 text-accent" aria-hidden="true" />
          <h2 className="mt-3 text-lg font-semibold text-white">Phone</h2>
          <p className="mt-2 text-sm text-slate-400">Available on request for recruiters.</p>
          <a
            href={`tel:${PHONE}`}
            className="mt-3 inline-block font-semibold text-accent-soft hover:text-accent"
          >
            {PHONE}
          </a>
        </Card>
        <Card>
          <MapPin className="h-8 w-8 text-accent" aria-hidden="true" />
          <h2 className="mt-3 text-lg font-semibold text-white">Location</h2>
          <p className="mt-2 text-sm text-slate-400">
            {LOCATION} — open to opportunities in Mardan, Peshawar and across Pakistan.
          </p>
        </Card>
      </div>
    </>
  );
}
