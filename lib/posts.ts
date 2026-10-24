import type { BlogPostMeta } from "./site";

export type ArticleSection = {
  id: string;
  heading: string;
  paragraphs: string[];
  code?: string;
};

export type Article = BlogPostMeta & {
  sections: ArticleSection[];
};

export const ARTICLES: Article[] = [
  {
    slug: "vlan-configuration-inter-vlan-routing",
    title: "VLAN Configuration and Inter-VLAN Routing Explained",
    description:
      "How VLANs segment a network, how trunk links carry multiple VLANs, and how router-on-a-stick and Layer 3 switching connect VLANs together.",
    date: "2026-10-24",
    readingTime: "8 min read",
    sections: [
      {
        id: "what-is-a-vlan",
        heading: "What a VLAN is, and why it matters",
        paragraphs: [
          "A VLAN (Virtual Local Area Network) is a logical grouping of devices on a network, independent of where they are physically plugged in. By default, every port on a switch belongs to VLAN 1, which means every device shares one broadcast domain: a broadcast from one device reaches all the others.",
          "Splitting a switch into VLANs breaks that single broadcast domain into several smaller ones. That gives you three practical benefits: less broadcast traffic, basic isolation between groups (for example, separating staff devices from lab devices), and simpler management, because you can group devices by function rather than by location.",
          "The key rule to remember is that devices in different VLANs cannot talk to each other directly at Layer 2. They need a Layer 3 device — a router, or a Layer 3 switch — to route between them. That is what inter-VLAN routing is.",
        ],
      },
      {
        id: "access-vs-trunk",
        heading: "Access ports and trunk ports",
        paragraphs: [
          "A switch port is either an access port or a trunk port. An access port belongs to exactly one VLAN and connects to an end device such as a PC. A trunk port carries traffic for multiple VLANs and connects to another switch or to a router.",
          "Trunks work by tagging frames. With IEEE 802.1Q, the switch inserts a small tag into the Ethernet frame that identifies which VLAN it belongs to. The receiving switch reads the tag and forwards the frame to the right VLAN. One VLAN on a trunk can be untagged — the native VLAN — which is used for traffic that arrives without a tag. Mismatched native VLANs on the two ends of a trunk are a classic source of strange connectivity problems, so both ends should agree.",
        ],
      },
      {
        id: "configuring-vlans",
        heading: "Configuring VLANs on a switch",
        paragraphs: [
          "On a Cisco switch, creating VLANs and assigning ports is straightforward. The pattern below creates VLAN 10 and VLAN 20, assigns two access ports, and turns a third port into a trunk:",
        ],
        code: "Switch(config)# vlan 10\nSwitch(config-vlan)# name STAFF\nSwitch(config-vlan)# vlan 20\nSwitch(config-vlan)# name LAB\nSwitch(config-vlan)# exit\nSwitch(config)# interface fa0/1\nSwitch(config-if)# switchport mode access\nSwitch(config-if)# switchport access vlan 10\nSwitch(config-if)# interface fa0/2\nSwitch(config-if)# switchport mode access\nSwitch(config-if)# switchport access vlan 20\nSwitch(config-if)# interface fa0/24\nSwitch(config-if)# switchport mode trunk",
      },
      {
        id: "router-on-a-stick",
        heading: "Inter-VLAN routing with router-on-a-stick",
        paragraphs: [
          "Router-on-a-stick uses a single physical router interface, divided into logical subinterfaces — one per VLAN. Each subinterface is configured with the VLAN's gateway address and the 802.1Q encapsulation for that VLAN. The switch port facing the router is a trunk, so all VLANs reach the router over one cable.",
        ],
        code: "Router(config)# interface g0/0.10\nRouter(config-subif)# encapsulation dot1Q 10\nRouter(config-subif)# ip address 192.168.10.1 255.255.255.0\nRouter(config-subif)# interface g0/0.20\nRouter(config-subif)# encapsulation dot1Q 20\nRouter(config-subif)# ip address 192.168.20.1 255.255.255.0",
      },
      {
        id: "layer-3-switch",
        heading: "Inter-VLAN routing with a Layer 3 switch",
        paragraphs: [
          "In larger networks, a Layer 3 switch often does the routing instead. You create a Switched Virtual Interface (SVI) for each VLAN — a virtual interface that acts as the VLAN's gateway — and enable IP routing on the switch. This keeps inter-VLAN traffic on the switch, which is faster than sending it to an external router, and it is the approach used in many enterprise and campus designs.",
        ],
        code: "Switch(config)# ip routing\nSwitch(config)# interface vlan 10\nSwitch(config-if)# ip address 192.168.10.1 255.255.255.0\nSwitch(config-if)# no shutdown\nSwitch(config-if)# interface vlan 20\nSwitch(config-if)# ip address 192.168.20.1 255.255.255.0\nSwitch(config-if)# no shutdown",
      },
      {
        id: "verify-troubleshoot",
        heading: "Verifying and troubleshooting",
        paragraphs: [
          "After configuring, verify before moving on. On the switch, check which VLANs exist and which ports belong to them, and confirm trunk status. On the router or Layer 3 switch, check that the gateway interfaces are up and that the routing table contains the connected VLAN networks. Then test with pings between VLANs, and between a PC and its gateway.",
          "The most common mistakes I have seen in labs are: a PC in the wrong VLAN, a trunk port left in access mode, a missing encapsulation command on a router subinterface, an SVI that is still shut down, and a native VLAN mismatch on a trunk. Working through that checklist, in that order, fixes most inter-VLAN problems.",
        ],
        code: "show vlan brief\nshow interfaces trunk\nshow ip interface brief\nshow ip route",
      },
      {
        id: "my-practice",
        heading: "What I practised",
        paragraphs: [
          "I have built multi-VLAN networks and router-on-a-stick topologies in Cisco Packet Tracer, including a multi-VLAN network with VLANs 10, 20 and 30, and I am carrying the same concepts into Layer 3 switching in GNS3 for my final year project. The lab habit that helped most was verifying each step — VLANs first, then trunks, then gateways, then end-to-end pings — instead of configuring everything and debugging all at once.",
        ],
      },
    ],
  },
  {
    slug: "what-is-snmp-network-monitoring",
    title: "What Is SNMP in Network Monitoring?",
    description:
      "A practical introduction to SNMP: managers, agents, MIBs and OIDs, polling versus traps, and why SNMP versions matter for security.",
    date: "2026-10-24",
    readingTime: "7 min read",
    sections: [
      {
        id: "the-problem",
        heading: "The problem SNMP solves",
        paragraphs: [
          "A network administrator cannot log in to every router, switch and firewall one by one to check whether it is healthy. SNMP (Simple Network Management Protocol) solves that by letting one central system — the manager — collect status information from many devices automatically, on a schedule.",
          "That is the core idea behind network monitoring platforms: instead of discovering a problem when users complain, you see interface failures, rising CPU usage or growing error counters early, from one dashboard.",
        ],
      },
      {
        id: "manager-agent-mib",
        heading: "Manager, agent, MIB and OID",
        paragraphs: [
          "SNMP has three building blocks. The agent is software running on the monitored device; it tracks the device's state and answers questions. The manager is the monitoring system that asks those questions and stores the answers. The MIB (Management Information Base) is the structured definition of what can be asked — a tree of named values, where each value has an OID (Object Identifier), a dotted-number address such as 1.3.6.1.2.1.1.3.0 for system uptime.",
          "Common things a manager reads through SNMP include interface status (up or down), traffic counters (bytes in and out), device uptime, CPU and memory usage where the device supports it, and interface error and discard counts. Comparing traffic counters over time is how monitoring tools draw bandwidth graphs.",
        ],
      },
      {
        id: "polling-vs-traps",
        heading: "Polling versus traps",
        paragraphs: [
          "There are two directions of communication. In polling, the manager asks the agent for values at regular intervals — for example, every minute. In traps, the agent sends an unsolicited message when something happens, such as an interface going down. Polling gives you regular history and graphs; traps give you fast notification of sudden events. Most monitoring setups use both: polling for trends, traps for alerts.",
        ],
      },
      {
        id: "versions",
        heading: "SNMP versions and security",
        paragraphs: [
          "SNMPv1 and SNMPv2c authenticate with a community string, which works like a simple password — but it is sent in clear text, so anyone who can capture the traffic can read it. SNMPv3 fixes this properly: it supports authentication (proving who you are) and privacy (encrypting the conversation). For any real network, SNMPv3 with authentication and encryption (authPriv) is the right choice, and read-only credentials should be used wherever possible so a monitoring system can never change a device's configuration.",
        ],
      },
      {
        id: "limits",
        heading: "What SNMP does not tell you",
        paragraphs: [
          "SNMP reports what a device can measure, not why something happened. A counter can show packet loss, but it cannot by itself say whether the cause is congestion, a faulty link or a routing problem. That is why my final year project, AI Network Copilot, pairs SNMP data with syslog events and ping results: the numbers show something is wrong, and the logs and reachability checks add the context an administrator needs to investigate.",
        ],
      },
      {
        id: "getting-started",
        heading: "Getting started with SNMP",
        paragraphs: [
          "If you are learning, start small: enable SNMP on one lab router with a read-only community or SNMPv3 user, point a monitoring tool or a simple script at it, and read interface status and uptime. Once you can graph one interface's traffic, you understand the whole pattern — the rest is adding more devices, more values and sensible alert thresholds.",
        ],
      },
    ],
  },
  {
    slug: "gns3-vs-packet-tracer",
    title: "GNS3 vs Cisco Packet Tracer",
    description:
      "An honest comparison from a student's perspective: when Packet Tracer's simplicity wins, and when GNS3's real device images are worth the extra resources.",
    date: "2026-10-24",
    readingTime: "7 min read",
    sections: [
      {
        id: "two-tools",
        heading: "Two tools, two different jobs",
        paragraphs: [
          "Cisco Packet Tracer and GNS3 are the two tools I use most for networking labs, but they are not the same kind of tool. Packet Tracer is a simulator: it mimics how Cisco devices behave, with a simplified command set, and it runs comfortably on an ordinary laptop. GNS3 is an emulator: it runs real device operating system images — such as Cisco IOSv routers, IOSvL2 switches and ASAv firewalls — inside virtual machines, so the behaviour is much closer to real hardware.",
          "That single difference explains almost every trade-off between them.",
        ],
      },
      {
        id: "packet-tracer",
        heading: "Cisco Packet Tracer: fast, light, great for learning",
        paragraphs: [
          "Packet Tracer (I use version 8.2.2) is the best place to start. It installs quickly, includes routers, switches, PCs, servers and wireless devices out of the box, and its simulation mode lets you watch packets travel step by step — which is genuinely helpful when you are learning VLANs, routing or NAT for the first time. I have built most of my CCNA-level labs in it: multi-VLAN networks, OSPF, STP and EtherChannel, NAT and ACLs, and site-to-site VPN concepts.",
          "Its limits show up when you need behaviour it does not simulate. Some commands and features are missing or simplified, and you cannot load a real device image. A lab that works perfectly in Packet Tracer can still behave differently on real equipment, so it is a learning tool, not a proof of production behaviour.",
        ],
      },
      {
        id: "gns3",
        heading: "GNS3: real images, real resource cost",
        paragraphs: [
          "GNS3 runs actual IOS images, so the CLI, the features and even the quirks match the real device. That is why my final year project uses it: a three-branch simulated enterprise network with IOSv routers, IOSvL2 switches and an ASAv firewall, which will feed monitoring data to the AI Network Copilot system.",
          "The cost is resources and setup. GNS3 needs a GNS3 VM (usually under VMware or VirtualBox), device images that you must obtain legitimately, and enough RAM and CPU to run every device at once. My laptop — a Dell Latitude 7480 with an i5 processor and 8 GB of RAM — limits how many devices I can run simultaneously, so I keep topologies small and start devices only when I need them. I have also hit the usual setup friction, including a VMware driver version mismatch, which is part of learning to run virtualised labs.",
        ],
      },
      {
        id: "which-to-choose",
        heading: "Which one should you choose?",
        paragraphs: [
          "If you are studying CCNA topics or testing an idea quickly, start with Packet Tracer: you will have a working lab in minutes. If you need real device behaviour — for a final year project, for advanced routing and switching practice, or to test monitoring against real SNMP and syslog output — move to GNS3 and accept the heavier setup.",
          "In practice I use both: Packet Tracer for quick drills and concept checks, GNS3 for the project topology where realism matters. The habit that transfers between them is the same either way: build small, verify each stage, and document the topology, addressing and verification steps so the lab can be rebuilt and explained later.",
        ],
      },
    ],
  },
];

export function getArticle(slug: string): Article | undefined {
  return ARTICLES.find((article) => article.slug === slug);
}
