export const SITE_NAME = "Haris Wadood";
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://hariswadood.vercel.app";
export const LINKEDIN_URL = "https://www.linkedin.com/in/haris-wadood-ab057a317/";
export const EMAIL = "wadoodharis200@gmail.com";
export const PHONE = "03139265709";
export const LOCATION = "Mardan, Pakistan";

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/skills", label: "Skills" },
  { href: "/experience", label: "Experience" },
  { href: "/certifications", label: "Certifications" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export type SkillGroup = {
  title: string;
  note: string;
  items: string[];
};

export const SKILL_GROUPS: SkillGroup[] = [
  {
    title: "Routing & Switching",
    note: "Studied in CCNA training and practised in Packet Tracer and GNS3 labs.",
    items: [
      "IPv4 addressing and subnetting",
      "VLANs and trunking",
      "Inter-VLAN routing",
      "Static routing",
      "OSPF",
      "Spanning Tree Protocol (STP)",
      "EtherChannel",
      "HSRP, VRRP and GLBP concepts",
    ],
  },
  {
    title: "Network Services",
    note: "Core services configured in lab environments.",
    items: [
      "DHCP",
      "NAT and PAT",
      "DNS fundamentals",
      "Access Control Lists (ACLs)",
      "SSH and remote device management",
    ],
  },
  {
    title: "Network Security",
    note: "Fundamentals studied and explored in lab scenarios.",
    items: [
      "Firewall fundamentals",
      "VPN concepts",
      "IPsec VPN fundamentals",
      "Network access control",
      "Switch port security",
    ],
  },
  {
    title: "Network Monitoring",
    note: "Monitoring concepts that also shape the AI Network Copilot FYP.",
    items: [
      "SNMP fundamentals",
      "Syslog",
      "ICMP monitoring",
      "Network availability",
      "Interface monitoring",
      "Network troubleshooting",
    ],
  },
  {
    title: "Tools",
    note: "Hands-on experience in lab environments.",
    items: [
      "Cisco Packet Tracer 8.2.2",
      "GNS3",
      "VMware Workstation",
      "Cisco IOSv",
      "Cisco IOSvL2",
      "Cisco ASAv",
    ],
  },
];

export type Project = {
  title: string;
  status: "Lab completed" | "In progress";
  statusNote: string;
  description: string;
  technologies: string[];
  outcomes: string[];
};

export const PROJECTS: Project[] = [
  {
    title: "Multi-VLAN Enterprise Network",
    status: "Lab completed",
    statusNote: "Packet Tracer lab exercise, completed.",
    description:
      "A multi-VLAN enterprise-style network built in Cisco Packet Tracer, with VLAN segmentation, trunk links and routing between VLANs.",
    technologies: ["Cisco Packet Tracer", "VLANs", "Trunking", "Inter-VLAN routing"],
    outcomes: [
      "Configured VLANs and trunk ports on switches",
      "Implemented inter-VLAN routing",
      "Verified connectivity between VLANs",
    ],
  },
  {
    title: "OSPF Routing Lab",
    status: "Lab completed",
    statusNote: "Packet Tracer lab exercise, completed.",
    description:
      "A dynamic routing lab focused on OSPF configuration, multi-area concepts, route verification and troubleshooting.",
    technologies: ["OSPF", "Multi-area routing concepts", "Route verification", "Troubleshooting"],
    outcomes: [
      "Configured OSPF on multiple routers",
      "Verified OSPF neighbour relationships and routing tables",
      "Practised diagnosing missing routes",
    ],
  },
  {
    title: "Network Redundancy Lab",
    status: "Lab completed",
    statusNote: "Packet Tracer lab exercise, completed.",
    description:
      "A redundancy lab combining loop prevention, link aggregation and gateway redundancy concepts.",
    technologies: ["STP", "EtherChannel", "HSRP concepts", "VRRP concepts"],
    outcomes: [
      "Observed STP loop prevention in a redundant topology",
      "Bundled links with EtherChannel",
      "Explored first-hop redundancy concepts",
    ],
  },
  {
    title: "NAT and Access Control Lab",
    status: "Lab completed",
    statusNote: "Packet Tracer lab exercise, completed.",
    description:
      "A lab covering address translation and traffic filtering, with routing between networks.",
    technologies: ["NAT/PAT", "ACLs", "Routing"],
    outcomes: [
      "Configured NAT and PAT for private-to-public translation",
      "Applied ACLs to control traffic between networks",
      "Verified permitted and denied traffic flows",
    ],
  },
  {
    title: "Site-to-Site VPN Lab",
    status: "Lab completed",
    statusNote: "Packet Tracer lab exercise, completed.",
    description:
      "A lab exploring secure connectivity between sites, covering VPN fundamentals and IPsec concepts.",
    technologies: ["VPN fundamentals", "IPsec concepts", "Connectivity testing"],
    outcomes: [
      "Explored site-to-site VPN concepts",
      "Tested connectivity across the tunnel",
      "Compared IPsec and SSL VPN approaches at a conceptual level",
    ],
  },
  {
    title: "AI Network Copilot",
    status: "In progress",
    statusNote: "Final Year Project — in progress, not yet complete or deployed.",
    description:
      "An AI-assisted network monitoring and troubleshooting system, developed on a three-branch simulated GNS3 network. It is intended to collect SNMP, syslog and ICMP data, store events in PostgreSQL, and present alerts and troubleshooting guidance on a dashboard.",
    technologies: ["GNS3", "SNMP", "Syslog", "PostgreSQL", "AI integration", "Dashboard"],
    outcomes: [
      "Defined the project scope, architecture and team roles",
      "Building a three-branch GNS3 test environment",
      "Designing the monitoring and event-analysis workflow",
    ],
  },
];

export type BlogPostMeta = {
  slug: string;
  title: string;
  description: string;
  date: string;
  readingTime: string;
};

export const BLOG_POSTS: BlogPostMeta[] = [
  {
    slug: "vlan-configuration-inter-vlan-routing",
    title: "VLAN Configuration and Inter-VLAN Routing Explained",
    description:
      "How VLANs segment a network, how trunk links carry multiple VLANs, and how router-on-a-stick and Layer 3 switching connect VLANs together.",
    date: "2026-10-24",
    readingTime: "8 min read",
  },
  {
    slug: "what-is-snmp-network-monitoring",
    title: "What Is SNMP in Network Monitoring?",
    description:
      "A practical introduction to SNMP: managers, agents, MIBs and OIDs, polling versus traps, and why SNMP versions matter for security.",
    date: "2026-10-24",
    readingTime: "7 min read",
  },
  {
    slug: "gns3-vs-packet-tracer",
    title: "GNS3 vs Cisco Packet Tracer",
    description:
      "An honest comparison from a student's perspective: when Packet Tracer's simplicity wins, and when GNS3's real device images are worth the extra resources.",
    date: "2026-10-24",
    readingTime: "7 min read",
  },
];

export const PLANNED_BLOG_IDEAS: string[] = [
  "CCNA Networking Labs for Beginners",
  "OSPF Routing: Practical Configuration and Troubleshooting",
  "How Syslog Helps Network Engineers Troubleshoot Problems",
  "How AI Can Assist Network Troubleshooting",
  "What Does a Data Centre Network Engineer Do?",
  "Essential Networking Skills for Fresh Computer Science Graduates",
  "How to Build a Networking Portfolio as a Student",
];
