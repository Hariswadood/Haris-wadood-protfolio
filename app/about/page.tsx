import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/ui";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Haris Wadood: BS Computer Science student at UET Mardan focused on enterprise networking, with CCNA training, NAVTTC system administration training, a ZTBL internship and the AI Network Copilot final year project.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About Me"
        description="A BS Computer Science student at UET Mardan, building toward a career in enterprise and data centre networking."
      />
      <div className="mx-auto max-w-6xl space-y-8 px-4 py-12">
        <section>
          <h2 className="text-2xl font-bold text-white">Education</h2>
          <p className="mt-3 max-w-3xl leading-relaxed text-slate-300">
            I am a 7th-semester BS Computer Science student at the University of Engineering and
            Technology (UET), Mardan. While the degree covers general computer science, I have
            chosen to concentrate on computer networking: configuring routers and switches,
            designing enterprise networks, learning routing and switching protocols, and
            troubleshooting network problems.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-white">Career Direction</h2>
          <p className="mt-3 max-w-3xl leading-relaxed text-slate-300">
            My goal is an entry-level role in networking — Junior Network Engineer, Network
            Administrator, Network Support or NOC Engineer, or a Data Centre Network Support role.
            I am interested in enterprise networks, data centre infrastructure, network
            monitoring and troubleshooting, and in applying AI to network monitoring — the focus
            of my final year project. I am a student building practical skills, not a senior or
            experienced professional engineer, and this portfolio describes my work honestly on
            that basis.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-white">Training and Experience</h2>
          <ul className="mt-3 max-w-3xl list-inside list-disc space-y-2 leading-relaxed text-slate-300">
            <li>
              CCNA 200-301 training at Corvit Systems Peshawar, with institute documentation
              and a practice-lab examination certificate.
            </li>
            <li>System Administrator course through NAVTTC, certificate received.</li>
            <li>
              Networking Intern at the ZTBL Data Centre, Network Department, where I assisted
              with branch connectivity tracking, device-status verification and Excel-based
              network-status reporting.
            </li>
            <li>
              Hands-on practice with Cisco Packet Tracer 8.2.2 and developing experience with
              GNS3, using Cisco IOSv, IOSvL2 and ASAv images.
            </li>
            <li>
              Final year project: AI Network Copilot, an AI-assisted network monitoring and
              troubleshooting system, with my role on the networking and infrastructure side.
            </li>
          </ul>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-white">Resume / CV</h2>
          <p className="mt-3 max-w-3xl leading-relaxed text-slate-300">
            My CV covers my education at UET Mardan, CCNA 200-301 training, NAVTTC System
            Administrator course, ZTBL internship, networking labs and the AI Network Copilot
            final year project. The button below downloads the actual CV file.
          </p>
          <p className="mt-4">
            <a
              href="/cv/CV_HarisWadood.pdf"
              download
              className="inline-block rounded-lg bg-accent px-5 py-2.5 font-semibold text-navy-950 transition-colors hover:bg-accent-soft"
            >
              Download CV (PDF)
            </a>
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-white">Beyond Networking</h2>
          <p className="mt-3 max-w-3xl leading-relaxed text-slate-300">
            As part of my degree I also work on other computing subjects, including machine
            learning coursework, compiler construction and technical report writing. Networking
            remains my primary career direction, and the labs and projects on this site reflect
            that focus.
          </p>
          <p className="mt-6">
            <Link href="/projects" className="font-semibold text-accent-soft hover:text-accent">
              See my projects →
            </Link>
          </p>
        </section>
      </div>
    </>
  );
}
