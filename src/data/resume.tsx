import { Icons } from "@/components/icons";
import { BriefcaseBusiness, Code2, FolderGit2, HomeIcon, Mail } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Java } from "@/components/ui/svgs/java";

export const DATA = {
  name: "Aman Sharma",
  initials: "AS",
  resumeUrl: "/resume.pdf",
  url: "https://portfolio-aman.vercel.app",

  location: "Jaipur, Rajasthan, India",

  locationLink:
    "https://www.google.com/maps/place/Jaipur",

  description:
    "Software Engineer focused on Java, Spring Boot, backend APIs, cloud systems, and full-stack product delivery.",

  summary:
    "B.Tech Information Technology graduate from Manipal University Jaipur, focused on solving real-world problems through dependable software. I work across Java, Spring Boot, REST APIs, databases, cloud tools, and full-stack systems, with the goal of building meaningful technology that is useful in production.",

  avatarUrl: "/pfp.jpg",

  skills: [
    {
      name: "Java",
      icon: Java,
    },
    {
      name: "JavaScript",
      icon: Typescript,
    },
    {
      name: "TypeScript",
      icon: Typescript,
    },
    {
      name: "Spring Boot",
      icon: Java,
    },
    {
      name: "REST APIs",
      icon: Nodejs,
    },
    {
      name: "Angular",
      icon: ReactLight,
    },
    {
      name: "Node.js",
      icon: Nodejs,
    },
    {
      name: "Express.js",
      icon: Nodejs,
    },
    {
      name: "MySQL",
      icon: Postgresql,
    },
    {
      name: "OracleDB",
      icon: Postgresql,
    },
    {
      name: "Docker",
      icon: Docker,
    },
  ],

  navbar: [
    {
      href: "/",
      icon: HomeIcon,
      label: "Home",
    },
    {
      href: "#work",
      icon: BriefcaseBusiness,
      label: "Experience",
    },
    {
      href: "#skills",
      icon: Code2,
      label: "Skills",
    },
    {
      href: "#projects",
      icon: FolderGit2,
      label: "Projects",
    },
    {
      href: "#contact",
      icon: Mail,
      label: "Contact",
    },
  ],

  contact: {
    email: "rishiamansharma457@gmail.com",

    phone: "+919958148375",

    social: {
      GitHub: {
        url: "https://github.com/Softeraman",
        name: "GitHub",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/aman-sharma-8ab247239",
        icon: Icons.linkedin,
        navbar: true,
      },

      Email: {
        name: "Send Email",
        url: "mailto:rishiamansharma457@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Jio Platforms Limited (JPL)",
      href: "#",
      badges: [],
      location: "Noida, Uttar Pradesh, India",
      title: "Software Development Intern",
      logoUrl: "https://asset.brandfetch.io/idffwmq4aZ/iddpLBfYkK.png",
      start: "Jun 2026",
      end: "Sep 2026",
      description: [
        "Developed Java and Spring Boot backend features for enterprise applications with a focus on clean code, performance, and reliability.",
        "Built and integrated REST APIs to support data-driven workflows, backend services, and application-level information exchange.",
        "Tested application changes, fixed bugs, and worked with Git-based code reviews to improve software quality and release readiness.",
      ],
    },
    {
      company: "Insphere Solutions Pvt Ltd",
      href: "#",
      badges: [],
      location: "Delhi, India",
      title: "Cloud Intern",
      logoUrl: "/insphere.png",
      start: "Dec 2025",
      end: "Feb 2026",

      description: [
        "Resolved CI/CD, container deployment, and AWS infrastructure issues across development and testing environments.",
        "Automated Docker image build and deployment workflows using Bitbucket Pipelines and Amazon ECR.",
        "Managed containerized applications on Amazon ECS and AWS Fargate for scalable and consistent cloud delivery.",
        "Worked on application flows for official government web platforms, including CRPF applicant-facing website modules.",
      ],
    },
  ],

  education: [
    {
      school: "Manipal University Jaipur",
      href: "#",

      degree:
        "Bachelor of Technology in Information Technology",

      logoUrl: "/manipal.png",

      start: "2022",
      end: "2026",
    },
    {
      school: "KDB Public School",
      href: "#",
      degree: "CBSE Class XII: 77% | Class X: 78%",
      logoUrl: "/kdb-logo.svg",
      start: "2019",
      end: "2021",
    },
  ],

  projects: [
    {
      title: "Offline Mesh Payment Simulator",

      href: "https://github.com/Softeraman",

      dates: "2025",

      active: true,

      description:
        "A Spring Boot backend that simulates offline payment routing across a virtual mesh network. It models deferred transaction handling so payments can be stored, routed, and settled once connectivity returns, with RSA, AES-GCM, SHA-256, transactions, and optimistic locking for safer duplicate-request handling.",

      technologies: [
        "Java",
        "Spring Boot",
        "Spring Data JPA",
        "MySQL",
        "REST APIs",
        "JUnit",
      ],

      links: [
        {
          type: "GitHub",
          href: "https://github.com/Softeraman",
        },
      ],

      image: "/offline-mesh-payment.svg",
    },

    {
      title: "Deep Packet Inspection and Packet Analyzer",

      href: "https://github.com/Softeraman",

      dates: "2025",

      active: true,

      description:
        "A C++ packet analyzer that reads PCAP files and extracts Ethernet, IPv4, TCP, UDP, port, protocol, and packet metadata. It uses deep packet inspection to read TLS SNI and HTTP host data, classify traffic, apply IP/application/domain blocking rules, and produce traffic reports through a multi-threaded processing flow.",

      technologies: [
        "C++",
        "CMake",
        "PCAP",
        "TCP/IP",
        "TLS SNI",
        "Multithreading",
      ],

      links: [
        {
          type: "GitHub",
          href: "https://github.com/Softeraman",
        },
      ],

      image: "/deep-packet-inspection.svg",
    },

    {
      title: "Work-force Pilot - Company Portal",

      href: "https://github.com/Softeraman",

      dates: "2025",

      active: true,

      description:
        "A full-stack company portal for employee records, leave requests, role-based views, and HR reporting. The application includes employee CRUD, form validation, login/signup flows, leave approval workflows, REST APIs, JPA persistence, OracleDB storage, and Chart.js analytics for workforce visibility.",

      technologies: [
        "Angular",
        "TypeScript",
        "Spring Boot",
        "JPA",
        "OracleDB",
        "Chart.js",
      ],

      links: [
        {
          type: "GitHub",
          href: "https://github.com/Softeraman",
        },
      ],

      image: "/workforce-pilot.jpg",
    },
  ],
  hackathons: [
    {
      title: "DevOps Fundamentals",
      dates: "Certification",
      location: "View certificate from resume",
      description:
        "Covered CI/CD, containerization, release workflows, and infrastructure fundamentals that support production application delivery.",
      image: "",
      links: [],
    },
    {
      title: "Oracle Cloud Infrastructure Foundations",
      dates: "Certification",
      location: "View certificate from resume",
      description:
        "Built foundational understanding of cloud concepts, OCI services, compute, storage, networking, and cloud operations.",
      image: "",
      links: [],
    },
  ],
};
