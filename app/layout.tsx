import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import { EMAIL, LINKEDIN_URL, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Haris Wadood | Networking Portfolio & Network Engineering Projects",
    template: "%s | Haris Wadood",
  },
  description:
    "Explore Haris Wadood's networking portfolio, CCNA training, system administration background, ZTBL internship experience, GNS3 labs, and AI Network Copilot project.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: "Haris Wadood — Networking Portfolio",
    title: "Haris Wadood | Networking Portfolio & Network Engineering Projects",
    description:
      "Explore Haris Wadood's networking portfolio, CCNA training, system administration background, ZTBL internship experience, GNS3 labs, and AI Network Copilot project.",
    url: SITE_URL,
  },
  twitter: {
    card: "summary",
    title: "Haris Wadood | Networking Portfolio & Network Engineering Projects",
    description:
      "Explore Haris Wadood's networking portfolio, CCNA training, system administration background, ZTBL internship experience, GNS3 labs, and AI Network Copilot project.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Haris Wadood",
  jobTitle: "Computer Networking Enthusiast",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Mardan",
    addressCountry: "PK",
  },
  email: EMAIL,
  url: SITE_URL,
  sameAs: [LINKEDIN_URL],
  alumniOf: {
    "@type": "EducationalOrganization",
    name: "University of Engineering and Technology (UET), Mardan",
  },
  knowsAbout: [
    "Computer Networking",
    "Routing and Switching",
    "OSPF",
    "VLANs",
    "Network Monitoring",
    "SNMP",
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Haris Wadood — Networking Portfolio",
  url: SITE_URL,
  author: {
    "@type": "Person",
    name: "Haris Wadood",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col bg-navy-950 text-slate-200">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <SiteNav />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
