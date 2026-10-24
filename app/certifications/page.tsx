import type { Metadata } from "next";
import { Award, ImageOff } from "lucide-react";
import { Card, PageHeader } from "@/components/ui";

export const metadata: Metadata = {
  title: "Certifications",
  description:
    "Haris Wadood's training: CCNA 200-301 training at Corvit Systems Peshawar and a System Administrator course through NAVTTC. Note: he has not passed the official Cisco CCNA exam.",
  alternates: { canonical: "/certifications" },
};

function CertificateImagePlaceholder({ label }: { label: string }) {
  return (
    <div
      role="img"
      aria-label={`Certificate image placeholder: ${label}`}
      className="flex aspect-video flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-navy-700 bg-charcoal-800 px-4 text-center"
    >
      <ImageOff className="h-8 w-8 text-slate-500" aria-hidden="true" />
      <p className="text-sm text-slate-400">{label}</p>
    </div>
  );
}

export default function CertificationsPage() {
  return (
    <>
      <PageHeader
        title="Certifications & Training"
        description="Training I have completed. Certificate images are placeholders until I upload the real documents — no certificate images, IDs or verification links are invented here."
      />
      <div className="mx-auto grid max-w-6xl gap-4 px-4 py-12 md:grid-cols-2">
        <Card>
          <Award className="h-8 w-8 text-accent" aria-hidden="true" />
          <h2 className="mt-3 text-xl font-bold text-white">CCNA 200-301 Training</h2>
          <p className="mt-1 font-semibold text-slate-300">Corvit Systems Peshawar</p>
          <p className="mt-3 leading-relaxed text-slate-300">
            Completed CCNA 200-301 training and obtained institute training documentation and a
            practice-lab examination certificate.
          </p>
          <p className="mt-3 rounded-lg border border-amber-400/30 bg-amber-400/10 p-3 text-sm text-amber-200">
            Important: I have not passed the official Cisco CCNA certification examination. I do
            not display the official Cisco CCNA badge and I do not describe myself as
            Cisco-certified.
          </p>
          <div className="mt-4">
            <CertificateImagePlaceholder label="CCNA 200-301 training certificate — image to be uploaded" />
          </div>
        </Card>
        <Card>
          <Award className="h-8 w-8 text-accent" aria-hidden="true" />
          <h2 className="mt-3 text-xl font-bold text-white">System Administrator Course</h2>
          <p className="mt-1 font-semibold text-slate-300">NAVTTC</p>
          <p className="mt-3 leading-relaxed text-slate-300">
            Completed a System Administrator course and received a certificate. This complements
            my networking knowledge with operating systems, servers and basic IT support skills.
          </p>
          <div className="mt-4">
            <CertificateImagePlaceholder label="NAVTTC System Administrator certificate — image to be uploaded" />
          </div>
        </Card>
      </div>
    </>
  );
}
