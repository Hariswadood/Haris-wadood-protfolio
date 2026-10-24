import type { Metadata } from "next";
import { Card, ImagePlaceholder, PageHeader, StatusBadge } from "@/components/ui";
import { PROJECTS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Haris Wadood's networking projects: Packet Tracer labs in VLANs, OSPF, redundancy, NAT and ACLs, and VPN, plus the AI Network Copilot final year project in progress.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        title="Projects"
        description="Networking labs and my final year project. Each card states its honest status, and topology images are placeholders — no screenshots are invented."
      />
      <div className="mx-auto max-w-6xl px-4 py-12">
        {/* Featured FYP */}
        <section aria-labelledby="fyp-heading" className="mb-12">
          <h2 id="fyp-heading" className="text-2xl font-bold text-white">
            Featured Final Year Project
          </h2>
          <Card className="mt-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h3 className="text-xl font-bold text-white">
                AI Network Copilot: Intelligent Network Monitoring and Troubleshooting Assistant
              </h3>
              <StatusBadge status="In progress" />
            </div>
            <p className="mt-1 text-sm font-semibold text-slate-400">
              Final Year Project · Networking · AI-Assisted Monitoring
            </p>
            <p className="mt-3 leading-relaxed text-slate-300">
              AI Network Copilot is a proposed intelligent network monitoring and
              troubleshooting system designed to collect network information, identify relevant
              events, and assist administrators in investigating connectivity and performance
              problems. It is intended to complement existing infrastructure and monitoring
              tools, not replace them.
            </p>
            <p className="mt-3 text-slate-300">
              <strong className="text-white">My role:</strong> Network Design, GNS3 Topology,
              Routing and Switching, and Monitoring Integration. I work with two teammates who
              focus on the AI side.
            </p>
            <h4 className="mt-6 font-semibold text-white">Intended architecture</h4>
            <ul className="mt-2 grid gap-1 text-sm text-slate-300 sm:grid-cols-2">
              <li>· Network devices (routers, switches, firewall)</li>
              <li>· SNMP monitoring</li>
              <li>· Syslog collection</li>
              <li>· ICMP reachability checks</li>
              <li>· Central monitoring server</li>
              <li>· PostgreSQL database</li>
              <li>· Monitoring engine</li>
              <li>· AI-assisted analysis</li>
              <li>· Network monitoring dashboard</li>
            </ul>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-lg border border-navy-700 bg-navy-950 p-4">
                <h4 className="font-semibold text-white">In progress / established</h4>
                <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-slate-300">
                  <li>Project scope, architecture and team roles defined</li>
                  <li>Three-branch simulated GNS3 network being built as the test environment</li>
                  <li>Monitoring and event-analysis workflow designed</li>
                </ul>
              </div>
              <div className="rounded-lg border border-navy-700 bg-navy-950 p-4">
                <h4 className="font-semibold text-white">Planned (not yet built)</h4>
                <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-slate-300">
                  <li>SNMP and syslog collection from lab devices</li>
                  <li>PostgreSQL event storage and historical analysis</li>
                  <li>Dashboard with alerts and device health</li>
                  <li>AI-assisted troubleshooting recommendations</li>
                  <li>Repeatable failure-scenario testing and evaluation</li>
                </ul>
              </div>
            </div>
            <p className="mt-4 text-sm text-slate-400">
              The system is not complete, is not deployed at UET Mardan, and is not integrated
              with real university devices. A real deployment would need supervisor and network
              administrator approval.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <span className="cursor-not-allowed rounded-lg border border-navy-700 px-4 py-2 text-sm font-semibold text-slate-500">
                GitHub repository — not published yet
              </span>
              <span className="cursor-not-allowed rounded-lg border border-navy-700 px-4 py-2 text-sm font-semibold text-slate-500">
                Live demo — not available yet
              </span>
            </div>
            <div className="mt-4">
              <ImagePlaceholder label="AI Network Copilot architecture diagram — to be added" />
            </div>
          </Card>
        </section>

        {/* Lab projects */}
        <section aria-labelledby="labs-heading">
          <h2 id="labs-heading" className="text-2xl font-bold text-white">
            Networking Labs
          </h2>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {PROJECTS.filter((p) => p.status === "Lab completed").map((project) => (
              <Card key={project.title}>
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h3 className="text-lg font-bold text-white">{project.title}</h3>
                  <StatusBadge status={project.status} />
                </div>
                <p className="mt-1 text-xs text-slate-500">{project.statusNote}</p>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">
                  {project.description}
                </p>
                <p className="mt-3 text-sm">
                  <strong className="text-white">Technologies: </strong>
                  <span className="text-slate-300">{project.technologies.join(", ")}</span>
                </p>
                <h4 className="mt-3 text-sm font-semibold text-white">Key learning outcomes</h4>
                <ul className="mt-1 list-inside list-disc space-y-1 text-sm text-slate-300">
                  {project.outcomes.map((outcome) => (
                    <li key={outcome}>{outcome}</li>
                  ))}
                </ul>
                <div className="mt-4">
                  <ImagePlaceholder label={`${project.title} topology diagram — to be added`} />
                </div>
                <p className="mt-3 text-sm text-slate-500">
                  Repository and demo links will be added only when a real repository exists.
                </p>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
