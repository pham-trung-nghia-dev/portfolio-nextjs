export interface SkillCapability {
  title: string;
  category: string;
  capabilities: string[];
}

export const SKILL_CAPABILITIES: Record<string, SkillCapability> = {
  // Row 1: Backend & Database
  laravel: {
    title: "Laravel (PHP Framework)",
    category: "Backend Core",
    capabilities: [
      "Architect clean MVC structure, modular services, and Eloquent ORM relationships.",
      "Design and build secure RESTful APIs for production systems (Fashion E-Commerce, E-WARD, WebBanHang).",
      "Implement authentication, role-based authorization (Gates & Policies), and automated order workflows.",
    ],
  },
  php: {
    title: "PHP 8.2+",
    category: "Backend Language",
    capabilities: [
      "Solid Object-Oriented Programming (OOP) foundation applying Design Patterns and Clean Code principles.",
      "Develop and maintain enterprise web applications (Laravel, Phalcon) at BIN Corporation Group.",
      "Handle complex business logic, input validation, data security, and response latency optimization.",
    ],
  },
  filament: {
    title: "FilamentPHP",
    category: "Admin & ERP Modules",
    capabilities: [
      "Rapidly build and customize robust ERP modules and internal business management dashboards.",
      "Develop e-commerce admin panels managing products, orders, categories, customers, and site content.",
      "Leverage interactive Form Builders, Table Builders, and statistical widgets for real-time reporting.",
    ],
  },
  redis: {
    title: "Redis Caching",
    category: "In-Memory Store",
    capabilities: [
      "Implement query result caching to reduce direct database load and scale read throughput.",
      "Accelerate API response times across E-WARD management systems and high-traffic endpoints.",
      "Manage distributed user sessions, job queues, rate limiting, and prevent bottlenecks.",
    ],
  },
  mysql: {
    title: "MySQL",
    category: "Relational Database",
    capabilities: [
      "Design normalized database schemas with strict foreign key constraints aligned with business requirements.",
      "Optimize complex SQL queries, table indexing, and query execution plans for sub-second retrieval.",
      "Maintain and operate production databases at FPT Telecom and BIN Corporation Group.",
    ],
  },
  postgres: {
    title: "PostgreSQL",
    category: "Advanced RDBMS",
    capabilities: [
      "Design and optimize robust relational database schemas utilizing rich data types (JSONB, Arrays).",
      "Manage ACID transactions ensuring data consistency across financial workflows and payments.",
      "Analyze query performance with EXPLAIN ANALYZE to identify and resolve slow query bottlenecks.",
    ],
  },

  // Row 2: Frontend & Languages
  nextjs: {
    title: "Next.js (App Router)",
    category: "Frontend Core",
    capabilities: [
      "Build high-performance e-commerce storefronts with Server-Side Rendering (SSR) & Server Components.",
      "Optimize SEO, Open Graph metadata, dynamic sitemaps, and Core Web Vitals scores.",
      "Implement secure Route Handlers and Edge Middleware protecting administrative routes.",
    ],
  },
  react: {
    title: "React.js",
    category: "Frontend Library",
    capabilities: [
      "Develop interactive Single Page Applications (SPA) with highly reusable component-driven architecture.",
      "Manage state efficiently and optimize rendering performance using Custom Hooks, useMemo, and useCallback.",
      "Integrate Tailwind CSS and animation libraries to deliver fluid, intuitive user experiences.",
    ],
  },
  vue: {
    title: "Vue.js",
    category: "Frontend Framework",
    capabilities: [
      "Develop and maintain enterprise web applications at BIN Corporation Group.",
      "Utilize Composition API, reactive state management, and Vue Router for modular architecture.",
      "Build responsive, custom interactive UI components for internal enterprise systems.",
    ],
  },
  ts: {
    title: "TypeScript",
    category: "Development Language",
    capabilities: [
      "Define strict types, interfaces, and generics to eliminate runtime errors at compile time.",
      "Establish clean architecture and type safety across Next.js frontends and backend services.",
      "Improve code maintainability, refactoring confidence, and developer velocity in team environments.",
    ],
  },
  js: {
    title: "JavaScript (ES6+)",
    category: "Core Language",
    capabilities: [
      "Deep expertise in asynchronous programming, Event Loop mechanics, Promises, and Async/Await.",
      "Implement dynamic shopping cart operations, client-side validation, and DOM manipulation.",
      "Seamlessly integrate third-party APIs, webhooks, and asynchronous client-server communication.",
    ],
  },
  tailwind: {
    title: "Tailwind CSS",
    category: "UI & Styling",
    capabilities: [
      "Craft modern, mobile-first responsive interfaces across all device screen resolutions.",
      "Build scalable design systems with custom CSS variables, theming, and dark/light mode support.",
      "Optimize CSS bundle footprint through purgeable atomic utility classes.",
    ],
  },

  // Row 3: DevOps & Tools
  docker: {
    title: "Docker & Docker Compose",
    category: "Containerization",
    capabilities: [
      "Containerize fullstack web applications, relational databases, and Redis into isolated environments.",
      "Ensure environment consistency across local development, staging, and production servers.",
      "Author multi-stage Dockerfiles to minimize container image sizes and streamline deployment.",
    ],
  },
  git: {
    title: "Git & GitHub",
    category: "Version Control",
    capabilities: [
      "Manage codebases following professional Git Flow, branch management, and clean conflict resolution.",
      "Submit well-structured Pull Requests collaborating effectively with BAs and QA under Agile/Scrum.",
      "Maintain and document open-source repositories at github.com/pham-trung-nghia-dev.",
    ],
  },
  linux: {
    title: "Linux Server",
    category: "DevOps & OS",
    capabilities: [
      "Configure, secure, and manage Ubuntu/Debian production servers hosting web services.",
      "Set up systemd services, automated Cron Jobs, file permissions, and monitor system resources.",
      "Maintain server stability, service uptime, and perform routine log rotations and maintenance.",
    ],
  },
  postman: {
    title: "Postman",
    category: "API Testing & Docs",
    capabilities: [
      "Design, test, and validate RESTful APIs across all HTTP methods (GET, POST, PUT, DELETE, PATCH).",
      "Automate test suites checking HTTP status codes, response payloads, headers, and response times.",
      "Generate clear, interactive API documentation facilitating seamless frontend and third-party integration.",
    ],
  },
  cloudflare: {
    title: "Cloudflare",
    category: "CDN & S3 / Object Storage",
    capabilities: [
      "Manage DNS, CDN caching, DDoS mitigation, and SSL/TLS encryption for enhanced web security and speed.",
      "Integrate Cloudflare R2 (S3-compatible Object Storage) for cost-effective, high-speed asset distribution.",
      "Configure Edge Cache Rules and Page Rules to maximize caching efficiency and reduce server load.",
    ],
  },
  kibana: {
    title: "Kibana",
    category: "Log Analysis & Monitoring",
    capabilities: [
      "Monitor and trace centralized system logs (ELK Stack) during backend runtime operations.",
      "Build visual dashboards tracking HTTP traffic, error distributions (4xx, 5xx), and API response latency.",
      "Perform real-time log querying, filtering, and troubleshooting to resolve production issues swiftly.",
    ],
  },

  // Row 4: AI Tools & Infrastructure
  claude: {
    title: "Claude (Anthropic)",
    category: "AI Engineering Tool",
    capabilities: [
      "Leverage Claude models for architectural planning, complex problem solving, and system design.",
      "Perform rigorous code reviews, detect security vulnerabilities, and optimize SQL query structures.",
      "Accelerate boilerplate generation, technical documentation, and comprehensive unit test coverage.",
    ],
  },
  cursor: {
    title: "Cursor (AI Code Editor)",
    category: "AI-First IDE",
    capabilities: [
      "Navigate and index large codebases rapidly with vector embeddings and multi-file context awareness.",
      "Apply prompt-driven development for high-speed refactoring, feature scaffolding, and debugging.",
      "Perform precise, multi-file code modifications and instant error remediation.",
    ],
  },
  antigravity: {
    title: "Google DeepMind Antigravity",
    category: "Agentic AI Coding",
    capabilities: [
      "Harness Google DeepMind's advanced agentic coding environment for autonomous pair programming.",
      "Automate deep code analysis, autonomous debugging loops, and multi-step engineering tasks.",
      "Maximize developer throughput and software quality with agent-assisted workflows.",
    ],
  },
  nginx: {
    title: "Nginx",
    category: "Web Server & Proxy",
    capabilities: [
      "Configure high-performance reverse proxy routing traffic securely to Laravel and Next.js services.",
      "Automate SSL/TLS certificate installation and renewal via Let's Encrypt for HTTPS enforcement.",
      "Optimize Gzip compression, rate limiting, and static asset caching to minimize origin server load.",
    ],
  },
  aws: {
    title: "AWS Cloud",
    category: "Cloud Platform",
    capabilities: [
      "Integrate Amazon S3 for durable, scalable cloud file storage and media asset delivery.",
      "Deploy, configure, and manage EC2 instances with hardened Security Groups and VPC networking.",
      "Configure IAM roles and policies ensuring least-privilege security access across cloud services.",
    ],
  },
  vnpay: {
    title: "VNPay & MoMo Payment",
    category: "Payment Gateway",
    capabilities: [
      "Integrate VNPay API utilizing cryptographic checksum verification (HMAC-SHA512 hashing).",
      "Implement MoMo Payment API supporting QR code scanning and direct online banking workflows.",
      "Handle Instant Payment Notifications (IPN), transaction reconciliation, and real-time order status updates.",
    ],
  },
};
