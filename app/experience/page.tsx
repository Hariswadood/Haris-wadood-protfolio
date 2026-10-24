import type { Metadata } from "next";
import { Card, PageHeader } from "@/components/ui";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Haris Wadood's internship experience: Networking Intern at the ZTBL Data Centre, Network Department — branch connectivity tracking, device-status verification and network-status reporting.",
  alternates: { canonical: "/experience" },
};

export default function ExperiencePage() {
  return (
    <>
      <PageHeader
        title="Experience"
        description="My internship experience, described accurately: what I assisted with, observed and learned — not systems I designed or managed."
      />
      <div className="mx-auto max-w-6xl px-4 py-12">
        <Card>
          <p className="text-sm font-semibold tracking-wide text-accent">INTERNSHIP</p>
          <h2 className="mt-2 text-2xl font-bold text-white">Networking Intern</h2>
          <p className="mt-1 text-slate-300">
            Zarai Taraqiati Bank Limited (ZTBL) — Data Centre, Network Department · Pakistan
          </p>
          <p className="mt-4 leading-relaxed text-slate-300">
            During my internship at the ZTBL Data Centre I gained exposure to how networking
            concepts are applied in a real banking data-centre environment, including branch
            connectivity monitoring and network-device status tracking.
          </p>
          <h3 className="mt-6 font-semibold text-white">What I worked on</h3>
          <ul className="mt-2 list-inside list-disc space-y-2 leading-relaxed text-slate-300">
            <li>Exposure to enterprise networking and data centre operations.</li>
            <li>Assistance with branch connectivity-status tracking — noting which branches were online or experiencing connectivity issues.</li>
            <li>Network device status verification.</li>
            <li>
              H3C switch status verification with branches — contacting branches to confirm
              whether switches were installed and operational, faulty, or no longer present.
            </li>
            <li>
              Excel-based network-status reporting, including fully down and partially
              operational sites.
            </li>
            <li>Exposure to OSPF, NAT, VPN, SD-WAN and MPLS concepts in an enterprise context.</li>
            <li>
              Networking-related tasks involving internal service access and VPN connectivity,
              including a test VPN task to reach ZTBL Head Office ServiceNow.
            </li>
          </ul>
          <p className="mt-6 rounded-lg border border-navy-700 bg-navy-950 p-4 text-sm text-slate-400">
            Note: this describes assisting, observing and learning in an enterprise environment.
            I did not design or manage ZTBL&apos;s production network, and no confidential bank
            infrastructure details, private addresses or internal diagrams are shared here.
          </p>
        </Card>
      </div>
    </>
  );
}
