import Link from "next/link";
import {
  ArrowRight,
  Award,
  Briefcase,
  FolderGit2,
  Mail,
  MapPin,
  Network,
  Router,
  Server,
  ShieldCheck,
} from "lucide-react";
import { Card, LinkedinIcon, SectionHeading, StatusBadge } from "@/components/ui";
import { EMAIL, LINKEDIN_URL, LOCATION, PROJECTS, SKILL_GROUPS } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Haris Wadood | Networking Portfolio & Network Engineering Projects",
  description:
    "Explore Haris Wadood's networking portfolio, CCNA training, system administration background, ZTBL internship experience, GNS3 labs, and AI Network Copilot project.",
  alternates: { canonical: "/" },
};

function NetworkGraphic() {
  return (
    <div
      role="img"
      aria-label="Abstract network diagram showing routers, switches and connected devices"
      className="bg-topology relative flex aspect-square w-full max-w-sm items-center justify-center rounded-2xl border border-navy-700 bg-navy-900"
    >
      <div className="flex flex-col items-center gap-4">
        <div className="flex items-center gap-8">
          <Router className="h-10 w-10 text-accent" aria-hidden="true" />
          <Server className="h-10 w-10 text-cyan-glow" aria-hidden="true" />
        </div>
        <div className="h-px w-40 bg-gradient-to-r from-accent to-cyan-glow" aria-hidden="true" />
        <div className="flex items-center gap-8">
          <Network className="h-10 w-10 text-cyan-glow" aria-hidden="true" />
          <ShieldCheck className="h-10 w-10 text-accent" aria-hidden="true" />
        </div>
        <p className="text-xs text-slate-500">Routers · Switches · Firewall · Monitoring</p>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-topology border-b border-navy-700 bg-navy-900">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:grid-cols-2">
          <div>
            <div
              className="flex h-24 w-24 items-center justify-center rounded-2xl border border-navy-700 bg-navy-800 text-3xl font-bold text-accent-soft"
              role="img"
              aria-label="Profile photo placeholder with the initials H W"
            >
              HW
            </div>
            <p className="mt-6 text-sm font-semibold tracking-wide text-accent">
              BS Computer Science Student · UET Mardan
            </p>
            <h1 className="mt-2 text-4xl font-bold text-white sm:text-5xl">Haris Wadood</h1>
            <p className="mt-3 text-xl font-semibold text-accent-soft">
              Computer Networking Enthusiast | Future Network Engineer
            </p>
            <p className="mt-4 max-w-xl leading-relaxed text-slate-300">
              I&apos;m a BS Computer Science student at UET Mardan with a strong interest in
              enterprise networking, routing and switching, network monitoring, and data centre
              infrastructure. I enjoy building practical network labs and developing intelligent
              solutions for network monitoring and troubleshooting.
            </p>
            <p className="mt-3 flex items-center gap-2 text-sm text-slate-400">
              <MapPin className="h-4 w-4 text-accent" aria-hidden="true" />
              {LOCATION}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/projects"
                className="rounded-lg bg-accent px-5 py-2.5 font-semibold text-navy-950 transition-colors hover:bg-accent-soft"
              >
                Explore My Projects
              </Link>
              <Link
                href="/contact"
                className="rounded-lg border border-accent px-5 py-2.5 font-semibold text-accent-soft transition-colors hover:bg-navy-800"
              >
                Contact Me
              </Link>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-lg border border-navy-700 px-5 py-2.5 font-semibold text-slate-200 transition-colors hover:bg-navy-800"
              >
                <LinkedinIcon className="h-4 w-4" />
                View LinkedIn Profile
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            <NetworkGraphic />
          </div>
        </div>
      </section>

      {/* About teaser */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <SectionHeading
          title="About Me"
          description="A networking-focused computer science student building practical skills through labs, an internship, and a final year project."
        />
        <p className="max-w-3xl leading-relaxed text-slate-300">
          I am a 7th-semester BS Computer Science student at the University of Engineering and
          Technology (UET), Mardan. My direction is clear: enterprise networking, data centre
          infrastructure, network monitoring and troubleshooting. Alongside my degree I completed
          CCNA 200-301 training at Corvit Systems Peshawar and a System Administrator course
          through NAVTTC, interned in the Network Department at the ZTBL Data Centre, and I am
          now building my final year project, AI Network Copilot.
        </p>
        <Link
          href="/about"
          className="mt-4 inline-flex items-center gap-1 font-semibold text-accent-soft hover:text-accent"
        >
          Read more about me <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </section>

      {/* Skills teaser */}
      <section className="border-y border-navy-700 bg-navy-900">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <SectionHeading
            title="Technical Skills"
            description="Grouped by area. No skill percentages — these are the topics I have studied and practised in labs."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SKILL_GROUPS.slice(0, 3).map((group) => (
              <Card key={group.title}>
                <h3 className="text-lg font-semibold text-white">{group.title}</h3>
                <ul className="mt-3 list-inside list-disc space-y-1 text-sm text-slate-300">
                  {group.items.slice(0, 5).map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
          <Link
            href="/skills"
            className="mt-6 inline-flex items-center gap-1 font-semibold text-accent-soft hover:text-accent"
          >
            View all skills <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>

      {/* Featured FYP */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <SectionHeading
          title="Featured Project"
          description="My final year project — an AI-assisted approach to network monitoring and troubleshooting."
        />
        <Card>
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h3 className="text-xl font-bold text-white">
              AI Network Copilot: Intelligent Network Monitoring and Troubleshooting Assistant
            </h3>
            <StatusBadge status="In progress" />
          </div>
          <p className="mt-3 leading-relaxed text-slate-300">
            AI Network Copilot is a proposed intelligent network monitoring and troubleshooting
            system. It is intended to collect network information, identify relevant events, and
            help administrators investigate connectivity and performance problems — not to
            replace existing monitoring tools, but to add an AI-assisted explanation layer on top
            of collected evidence.
          </p>
          <p className="mt-3 text-sm text-slate-400">
            <strong className="text-slate-200">My role:</strong> Network Design, GNS3 Topology,
            Routing and Switching, and Monitoring Integration.
          </p>
          <p className="mt-2 text-sm text-slate-400">
            <strong className="text-slate-200">Status:</strong> In progress. The system is not
            yet complete and is not deployed at UET Mardan. Planned capabilities are labelled as
            planned on the project page.
          </p>
          <Link
            href="/projects"
            className="mt-4 inline-flex items-center gap-1 font-semibold text-accent-soft hover:text-accent"
          >
            View all projects <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </Card>
      </section>

      {/* Highlights */}
      <section className="border-t border-navy-700 bg-navy-900">
        <div className="mx-auto grid max-w-6xl gap-4 px-4 py-14 sm:grid-cols-3">
          <Card>
            <Briefcase className="h-8 w-8 text-accent" aria-hidden="true" />
            <h3 className="mt-3 text-lg font-semibold text-white">ZTBL Internship</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-300">
              Networking Intern at the ZTBL Data Centre, Network Department — branch connectivity
              tracking, device-status verification and Excel-based network-status reporting.
            </p>
            <Link
              href="/experience"
              className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-accent-soft hover:text-accent"
            >
              Experience <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Card>
          <Card>
            <Award className="h-8 w-8 text-accent" aria-hidden="true" />
            <h3 className="mt-3 text-lg font-semibold text-white">Training</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-300">
              CCNA 200-301 training (Corvit Systems Peshawar) and a System Administrator course
              (NAVTTC). Note: I have not passed the official Cisco CCNA exam, so I do not
              describe myself as Cisco-certified.
            </p>
            <Link
              href="/certifications"
              className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-accent-soft hover:text-accent"
            >
              Certifications <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Card>
          <Card>
            <FolderGit2 className="h-8 w-8 text-accent" aria-hidden="true" />
            <h3 className="mt-3 text-lg font-semibold text-white">Networking Labs</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-300">
              {PROJECTS.length - 1} completed Packet Tracer labs — VLANs, OSPF, redundancy, NAT
              and ACLs, and VPN — plus the AI Network Copilot FYP in progress.
            </p>
            <Link
              href="/projects"
              className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-accent-soft hover:text-accent"
            >
              Projects <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Card>
        </div>
      </section>

      {/* Contact teaser */}
      <section className="mx-auto max-w-6xl px-4 py-14 text-center">
        <h2 className="text-2xl font-bold text-white">Open to internships and entry-level roles</h2>
        <p className="mx-auto mt-3 max-w-xl text-slate-400">
          If you are hiring for a junior network engineer, network support, NOC or data centre
          networking role, I would be glad to hear from you.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <a
            href={`mailto:${EMAIL}`}
            className="flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 font-semibold text-navy-950 transition-colors hover:bg-accent-soft"
          >
            <Mail className="h-4 w-4" aria-hidden="true" />
            Email Me
          </a>
          <Link
            href="/contact"
            className="rounded-lg border border-accent px-5 py-2.5 font-semibold text-accent-soft transition-colors hover:bg-navy-800"
          >
            Contact Details
          </Link>
        </div>
      </section>
    </>
  );
}
