
import { Project, Experience, Service } from './types';

export const SERVICES: Service[] = [
  {
    title: "Salesforce Consulting",
    description: "Expert guidance on Sales Cloud, Service Cloud, and architectural strategy for enterprise-grade solutions.",
    icon: "briefcase"
  },
  {
    title: "Custom Development",
    description: "Scalable Apex, LWC, and Aura component development tailored to unique business workflows.",
    icon: "code"
  },
  {
    title: "AI & Agentforce",
    description: "Specialized in Agentforce platform datasets and AI-driven automation within the Salesforce ecosystem.",
    icon: "cpu"
  },
  {
    title: "System Integration",
    description: "Seamless 3rd-party integrations using REST/SOAP APIs, including Payment Gateways and ERPs.",
    icon: "link"
  }
];

export const PROJECTS: Project[] = [
  {
    id: "agentforce",
    title: "Agentforce AI Platform",
    role: "Delivery Manager & LLM Data Curator",
    client: "Salesforce (via Turing)",
    description: "Training Salesforce's next-gen intelligent assistant using generative AI and structured datasets.",
    responsibilities: [
      "Led a 33-member team for prompt creation and QA.",
      "Optimized technical prompts for Apex, LWC, and SOQL.",
      "Designed metadata-rich notebook structures for model training."
    ],
    tech: ["GenAI", "LLM", "Apex", "LWC", "Agentforce"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    fullContent: {
      problem: "Salesforce needed a high-fidelity dataset to train their Agentforce LLM to handle complex technical queries specific to the Salesforce ecosystem (Apex, SOQL, LWC). Existing general datasets lacked the depth of metadata and technical accuracy required for enterprise-grade AI agents.",
      solution: "I spearheaded a massive data curation effort, managing a team of 33 engineers. We designed custom evaluation frameworks and metadata structures that allowed the model to understand context-aware code generation. We implemented a rigorous multi-stage QA process to ensure zero-shot accuracy for generated Salesforce code snippets.",
      impact: [
        "Delivered 10,000+ high-quality annotated prompts and responses.",
        "Improved model accuracy in technical code generation by 24% during internal testing.",
        "Successfully transitioned the project to long-term delivery status with a documented curriculum."
      ]
    }
  },
  {
    id: "ecommerce",
    title: "Headless E-Commerce",
    role: "Team Lead & Salesforce Developer",
    description: "A dynamic Salesforce-backed store allowing real-time record-based UI updates for admins.",
    responsibilities: [
      "Designed dynamic object models for look-and-feel control.",
      "Integrated PayPal and Authorize.net for global payments.",
      "Implemented complex tax and shipping logic."
    ],
    tech: ["Visualforce", "Apex", "PayPal API", "Force.com"],
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800",
    fullContent: {
      problem: "A major retailer struggled with a rigid e-commerce frontend that required developers for even simple UI changes like banner updates or layout shifts. They also needed to support multiple payment gateways across different regions without fragmenting their codebase.",
      solution: "I architected a headless solution where the entire frontend UI was driven by Salesforce custom metadata and records. This allowed non-technical admins to 'build' pages from the CRM. I implemented a modular integration layer for PayPal and Authorize.net using Apex, ensuring secure and PCI-compliant transaction processing.",
      impact: [
        "Reduced UI deployment time for marketing teams from 5 days to 20 minutes.",
        "Handled over $2M in transaction volume within the first quarter post-launch.",
        "Enabled 99.9% uptime during high-traffic seasonal sales."
      ]
    }
  },
  {
    id: "quotation",
    title: "Construction Quotation Engine",
    role: "Salesforce Developer",
    description: "Automated manual paper-based calculations into a precise Lightning tool for drafting PDF quotes.",
    responsibilities: [
      "Built dynamic checkbox grids with Aura components.",
      "Developed automated math engines for materials & labor cost.",
      "Managed CI/CD with Bamboo and Bitbucket."
    ],
    tech: ["Aura Components", "SOQL", "Bamboo", "Record Triggered Flows"],
    image: "https://images.unsplash.com/photo-1503387762-592dea58ef21?auto=format&fit=crop&q=80&w=800",
    fullContent: {
      problem: "Sales reps in a large construction firm were manually calculating project quotes using spreadsheets, leading to frequent errors and inconsistent pricing. Generating a client PDF was a 3-hour manual process.",
      solution: "I developed a 'Quotation Engine' using Salesforce Aura components. It featured a dynamic material-selection grid that updated costs in real-time based on current warehouse pricing. The engine automated labor calculations and used Conga Composer to generate professional PDFs instantly.",
      impact: [
        "Slashed quote generation time from 3 hours to 10 minutes.",
        "Eliminated pricing errors, resulting in a 15% increase in bottom-line profit margins.",
        "Improved sales team adoption rate by 80% through an intuitive UI design."
      ]
    }
  }
];

export const EXPERIENCES: Experience[] = [
  {
    company: "Turing",
    role: "LLM Data Curator / Delivery Manager",
    period: "Dec 2024 - Present",
    description: "Working on AGI development datasets for Salesforce and OpenAI."
  },
  {
    company: "Upwork Inc.",
    role: "Salesforce Developer / Consultant",
    period: "Jan 2023 - Present",
    description: "Providing global consulting and development for diverse clients."
  },
  {
    company: "Tata Consultancy Services",
    role: "Salesforce Developer",
    period: "Nov 2021 - Jan 2023",
    description: "Full-stack Salesforce development for enterprise clients."
  },
  {
    company: "MV Clouds Private Limited",
    role: "Salesforce Developer",
    period: "Aug 2018 - Nov 2021",
    description: "Specialized in cloud outsourcing and core development."
  }
];
