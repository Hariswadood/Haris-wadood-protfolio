import type { Metadata } from "next";
import { Card, PageHeader } from "@/components/ui";
import { SKILL_GROUPS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Skills",
  description:
    "Haris Wadood's networking skills: routing and switching, network services, network security, network monitoring, and tools including Cisco Packet Tracer 8.2.2 and GNS3.",
  alternates: { canonical: "/skills" },
};

export default function SkillsPage() {
  return (
    <>
      <PageHeader
        title="Technical Skills"
        description="Skills I have studied and practised in labs. I do not use skill percentages or claim expert-level proficiency — the notes under each group say where each skill was applied."
      />
      <div className="mx-auto grid max-w-6xl gap-4 px-4 py-12 sm:grid-cols-2 lg:grid-cols-3">
        {SKILL_GROUPS.map((group) => (
          <Card key={group.title}>
            <h2 className="text-lg font-semibold text-white">{group.title}</h2>
            <p className="mt-1 text-sm text-slate-400">{group.note}</p>
            <ul className="mt-3 list-inside list-disc space-y-1 text-sm text-slate-300">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Card>
        ))}
        <Card>
          <h2 className="text-lg font-semibold text-white">Also Exploring</h2>
          <p className="mt-1 text-sm text-slate-400">
            Topics I have studied at a conceptual level or asked about, not yet lab-verified.
          </p>
          <ul className="mt-3 list-inside list-disc space-y-1 text-sm text-slate-300">
            <li>BGP fundamentals</li>
            <li>MPLS and VRF concepts</li>
            <li>SD-WAN concepts</li>
            <li>Network automation basics (Python, REST APIs, JSON)</li>
            <li>Linux server administration fundamentals</li>
          </ul>
        </Card>
      </div>
    </>
  );
}
