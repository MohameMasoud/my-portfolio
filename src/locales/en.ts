export const en = {
  // Navigation & General
  nav: {
    home: "Home",
    about: "About",
    experience: "Experience",
    skills: "Skills",
    projects: "Projects",
    services: "Services",
    certificates: "Certificates",
    testimonials: "Testimonials",
    articles: "Articles",
    contact: "Contact",
    resume: "Resume",
    aiAssistant: "AI Assistant",
    cmdPalette: "Cmd + K",
  },
  
  // Hero Section
  hero: {
    greeting: "Hello, I am",
    name: "Mohamed Mahmoud Masoud",
    role: "Full Stack MERN Developer",
    secondaryRoles: "Front-End Developer • Tech Instructor • Freelancer",
    badge: "Available for Freelance & Full-Time Roles",
    location: "Egypt (Open to Remote Worldwide)",
    tagline: "Building scalable, high-performance web applications with exceptional, human-centered digital experiences.",
    ctaProjects: "Explore Projects",
    ctaContact: "Get In Touch",
    ctaResume: "View Interactive Resume",
    yearsExp: "2+ Years Experience",
    studentsMentored: "150+ Students Taught",
    projectsCompleted: "15+ Projects Delivered",
  },

  // About Section
  about: {
    sectionBadge: "GET TO KNOW ME",
    title: "Crafting Modern Scalable Web Applications",
    bio1: "I am a passionate Full Stack MERN Developer specializing in building modern, scalable, and high-performance web applications using React.js, Node.js, Express.js, MongoDB, and PostgreSQL.",
    bio2: "I enjoy solving complex architectural challenges, optimizing frontend & database performance, and designing clean codebases built on SOLID principles.",
    bio3: "Beyond client engineering, I am a dedicated Programming Instructor who has mentored over 150+ aspiring developers through hands-on bootcamps, code reviews, and technical workshops.",
    
    strengthsTitle: "Core Architectural Strengths",
    strengths: [
      "Scalable MERN Architecture",
      "Responsive & Interactive UI/UX Design",
      "RESTful & GraphQL API Design",
      "Database Modeling & Optimization",
      "Clean Code & SOLID Principles",
      "Developer Mentorship & Team Leadership"
    ],

    valuesTitle: "Engineering Philosophy",
    values: [
      {
        title: "Quality Over Speed",
        desc: "Writing maintainable, clean code that stands the test of time."
      },
      {
        title: "User-Centric Thinking",
        desc: "Crafting intuitive interfaces that delight users with smooth interactions."
      },
      {
        title: "Continuous Evolution",
        desc: "Constantly learning modern frameworks, cloud systems, and best practices."
      }
    ]
  },

  // Experience Section
  experience: {
    sectionBadge: "CAREER TIMELINE",
    title: "Professional Journey & Milestones",
    currentRoleBadge: "Current Position",
    roles: {
      rarIt: {
        role: "Front-End Web Developer",
        company: "RAR-IT",
        period: "2025 - Present",
        location: "Germany / Remote",
        type: "Full-Time",
        desc: "Developing responsive and interactive web applications using HTML, CSS, JavaScript, and React.js while optimizing performance and integrating REST APIs.",
        achievements: [
          "Developed responsive and interactive web applications using HTML, CSS, JavaScript, and React.js.",
          "Integrated REST APIs and optimized application performance.",
          "Collaborated with cross-functional teams to deliver high-quality, user-focused solutions.",
          "Maintained and enhanced existing web applications while ensuring cross-browser compatibility."
        ],
        metrics: [
          "REST API Integration",
          "Performance Optimization",
          "Cross-Browser Compatible"
        ]
      },
      adfaz: {
        role: "Front-End Web Developer",
        company: "ADFAZ",
        period: "2023 - 2025",
        location: "Saudi Arabia",
        type: "Full-Time",
        desc: "Worked as a Front-End Web Developer at ADFAZ company in Saudi Arabia, building high-performance web solutions and user-centered interfaces.",
        achievements: [
          "Built responsive and interactive web interfaces for client platforms across Saudi Arabia.",
          "Developed modular React components and integrated REST API services.",
          "Collaborated with cross-functional product teams to deliver high-quality solutions on schedule."
        ],
        metrics: [
          "Saudi Arabia Projects",
          "Modular UI System",
          "REST API Integration"
        ]
      },
      freelance: {
        role: "MERN-Stack Web Developer",
        company: "Freelance & Remote Clients",
        period: "2023 - Present",
        location: "Global Remote",
        type: "Freelance",
        desc: "Building responsive and scalable full-stack web applications for multiple clients, businesses, and startups.",
        achievements: [
          "Built responsive and scalable web applications for multiple clients.",
          "Developed RESTful APIs and integrated authentication systems.",
          "Worked on frontend optimization and reusable React components.",
          "Delivered modern UI/UX solutions for businesses and startups."
        ],
        metrics: [
          "Scalable REST APIs",
          "Auth Systems",
          "Modern UI/UX"
        ]
      },
      instructor: {
        role: "Programming Instructor",
        company: "Smart Code Academy",
        period: "2023 - 2024",
        location: "Egypt",
        type: "Instructor",
        desc: "Taught computer science fundamentals, web development principles, and practical coding exercises to students.",
        achievements: [
          "Taught computer science and programming fundamentals.",
          "Helped students understand web development concepts.",
          "Prepared educational materials and practical coding exercises."
        ],
        metrics: [
          "CS Fundamentals",
          "Web Dev Concepts",
          "Practical Exercises"
        ]
      }
    }
  },

  // Skills Section
  skills: {
    sectionBadge: "TECHNICAL STACK",
    title: "Skills & Proficiency Radar",
    subtitle: "A comprehensive breakdown of technologies, frameworks, and tools I use daily.",
    categories: {
      frontend: "Front-End Engineering",
      backend: "Back-End & APIs",
      database: "Database & Caching",
      tools: "DevOps & Workflow",
      soft: "Professional Soft Skills"
    }
  },

  // Projects Section
  projects: {
    sectionBadge: "FEATURED WORKS",
    title: "Highlighted Engineering Projects",
    subtitle: "Real-world applications showcasing clean code, scalable backend architecture, and polished UI.",
    filterAll: "All Projects",
    filterFullStack: "Full Stack MERN",
    filterFrontend: "Front-End UI",
    filterBackend: "APIs & Services",
    liveDemo: "Live Preview",
    viewGithub: "Source Code",
    modalDetails: "View Architecture",
    items: {
      ecommerce: {
        title: "ElectroStore MERN E-Commerce",
        desc: "Production-ready online store with Stripe payments, real-time inventory management, custom admin dashboard, and order tracking.",
        longDesc: "Full-featured e-commerce solution built with React 19, Express, Node.js, and MongoDB. Features secure JWT & OAuth auth, automated email receipts via Nodemailer, Stripe Webhooks for instant payment verification, and an analytics dashboard for store owners.",
        metrics: "Sub-100ms API Response • Stripe Webhooks • 100% Mobile Responsive"
      },
      lms: {
        title: "Edutrack Learning Management System",
        desc: "Interactive educational platform for video streaming, quiz evaluations, assignment submissions, and student progress metrics.",
        longDesc: "Designed for instructors and students. Supports secure video uploads, automated quiz grading, PDF certificate generation upon completion, and real-time live Q&A chat using Socket.io.",
        metrics: "150+ Active Test Users • Real-time Socket Chat • Certificate Generator"
      },
      chatApp: {
        title: "Nexus Workspace Real-Time Chat",
        desc: "Enterprise workspace chat app featuring channels, direct messaging, active presence status, file attachments, and WebRTC voice calls.",
        longDesc: "Built with Socket.io, Express, React, and Redis session caching. Allows instant messaging, message reactions, markdown formatting, typing indicators, and media sharing with end-to-end encryption concepts.",
        metrics: "Socket.io Engine • Redis Presence • WebRTC Voice Calling"
      },
      portfolio: {
        title: "Awwwards-Level Developer Portfolio",
        desc: "Interactive developer portfolio showcasing WebGL/Canvas visuals, command palette, AI Assistant, i18n support, and light/dark theme.",
        longDesc: "Designed as a benchmark for creative technical direction. Features Framer Motion layout animations, Three.js particle canvas, local storage persistence, and Gemini-powered portfolio AI chatbot.",
        metrics: "98+ Lighthouse Score • Bilingual RTL/LTR • Gemini AI Bot"
      },
      taskManager: {
        title: "Kanban Task Management Dashboard",
        desc: "Agile project board with drag-and-drop task workflow, team collaborator permissions, task analytics, and PostgreSQL database.",
        longDesc: "Built using React, Express, and PostgreSQL with Drizzle ORM. Features smooth HTML5 drag-and-drop column sorting, tag filtering, activity timeline tracking, and team invitation links.",
        metrics: "PostgreSQL Database • Drag & Drop Engine • Agile Workflow"
      },
      socialDashboard: {
        title: "Analytics Social Feeds Dashboard",
        desc: "All-in-one metrics dashboard displaying real-time post engagement, follower growth charts, scheduled publishing, and audience insights.",
        longDesc: "Integrated data visualization using Recharts. Renders responsive bar charts, sparklines, dynamic feeds, and automated daily performance summary reports.",
        metrics: "Recharts Visualizations • Live Feed Simulation • Real-time Data"
      }
    }
  },

  // Services Section
  services: {
    sectionBadge: "WHAT I DO",
    title: "Custom Engineering & Advisory Services",
    subtitle: "Tailored web development solutions for startups, businesses, and aspiring developers.",
    fullstack: {
      title: "Full Stack Web Development",
      desc: "End-to-end MERN & PostgreSQL web applications tailored to your business needs, built for scalability, security, and high performance.",
      f1: "Architectural design & database schema planning",
      f2: "RESTful & GraphQL API development with Node.js",
      f3: "Production deployment (Cloud Run, Docker, Vercel)"
    },
    frontend: {
      title: "Front-End UI/UX Engineering",
      desc: "Pixel-perfect, ultra-responsive web user interfaces with fluid animations, accessibility focus, and modern component architecture.",
      f1: "React.js, Next.js, and TypeScript state management",
      f2: "Framer Motion, Tailwind CSS, & WebGL interactive visual design",
      f3: "Lighthouse Performance (95+) & Web Vitals Optimization"
    },
    backend: {
      title: "Backend API & Database Optimization",
      desc: "High-throughput server infrastructure, API key security, microservices architecture, and database query optimization.",
      f1: "MongoDB & PostgreSQL schema design and indexing",
      f2: "JWT, OAuth 2.0, and Role-Based Access Control (RBAC)",
      f3: "Socket.io WebSockets for real-time applications"
    },
    instructing: {
      title: "1-on-1 Mentorship & Code Reviews",
      desc: "Dedicated instruction for individuals or teams looking to master modern MERN development, React clean code, and career growth.",
      f1: "Personalized MERN stack curriculum & live sessions",
      f2: "In-depth pull request & code review sessions",
      f3: "Technical interview prep & portfolio guidance"
    }
  },

  // Certificates Section
  certificates: {
    sectionBadge: "CREDENTIALS",
    title: "Certificates & Diplomas",
    subtitle: "Verified diplomas, intensive training programs, and academic achievements in software engineering.",
    verifyLink: "Verify Credential",
    items: {
      iti: {
        title: "Intensive Training Program in Web Development (MERN)",
        issuer: "Information Technology Institute (ITI)",
        date: "2023 - 2024",
        desc: "Specialized intensive software engineering program covering full-stack MERN development, system architecture, REST APIs, and production deployment."
      },
      routeMern: {
        title: "Fullstack Diploma in Web Development (MERN)",
        issuer: "Route Academy",
        date: "2022 - 2023",
        desc: "Comprehensive full-stack diploma covering Front-End (HTML5, CSS3, Bootstrap, Sass, React.js) and Back-End (Node.js, Express.js, MongoDB, SQL)."
      },
      routeCs: {
        title: "Diploma in CS Fundamentals, OOP & Data Structures",
        issuer: "Route Academy",
        date: "2021 - 2022",
        desc: "Core software engineering diploma covering C++ Programming, Object-Oriented Programming using C++ and Java, Data Structures, and Algorithms."
      },
      vocational: {
        title: "Diploma in Computer Software Maintenance",
        issuer: "Vocational Training Center",
        date: "2018 - 2019",
        desc: "Practical technical diploma focused on software maintenance, system diagnostics, operating system administration, and software/hardware troubleshooting."
      }
    }
  },

  // Testimonials Section
  testimonials: {
    sectionBadge: "TESTIMONIALS",
    title: "What Clients & Students Say",
    subtitle: "Feedback from colleagues, business clients, and students I've mentored.",
    tabAll: "All Feedback",
    tabStudents: "Student Feedback",
    tabClients: "Client Feedback"
  },

  // GitHub Stats Section
  github: {
    sectionBadge: "OPEN SOURCE",
    title: "GitHub Activity & Statistics",
    subtitle: "Live activity metrics and top repository languages.",
    publicRepos: "Public Repositories",
    totalCommits: "Total Commits (2024-2025)",
    contributions: "Contributions This Year",
    streak: "Current Contribution Streak",
    topLangs: "Primary Tech Distribution",
    viewProfile: "Visit GitHub Profile"
  },

  // AI Assistant Section
  ai: {
    badge: "GEMINI POWERED",
    title: "Ask Mohamed's AI Assistant",
    subtitle: "Have a quick question about Mohamed's rates, skills, availability, or experience? Ask the bot below!",
    placeholder: "Ask anything about Mohamed's work, experience, or hire him...",
    send: "Send",
    thinking: "AI is thinking...",
    quickQuestions: "Suggested Queries:",
    q1: "What are Mohamed's primary technical skills?",
    q2: "Is Mohamed available for freelance or full-time roles?",
    q3: "Tell me about his experience as a Programming Instructor.",
    q4: "How can I hire Mohamed or schedule a consultation call?"
  },

  // Contact Section
  contact: {
    sectionBadge: "LET'S WORK TOGETHER",
    title: "Get In Touch",
    subtitle: "Have a project in mind, want to discuss a role, or book a mentorship call? Send a message!",
    formName: "Your Full Name",
    formEmail: "Your Email Address",
    formSubject: "Subject / Project Type",
    formMessage: "Tell me about your project or inquiry...",
    formService: "Service Needed (Optional)",
    sendButton: "Send Message",
    sending: "Sending Message...",
    successTitle: "Message Sent Successfully!",
    successDesc: "Thank you for reaching out, Mohamed will get back to you within 24 hours.",
    directEmail: "Direct Email",
    locationTitle: "Location",
    locationValue: "Egypt (Available for Global Remote)",
    whatsapp: "Chat on WhatsApp",
    copySuccess: "Copied to clipboard!",
  },

  // Articles & Publications Section
  articles: {
    sectionBadge: "ARTICLES & INSIGHTS",
    title: "Technical Articles & Guides",
    subtitle: "In-depth tutorials, architectural insights, and best practices on modern Full Stack development.",
    readMore: "Read Full Article",
    readTime: "read",
    filterAll: "All Articles",
    featuredBadge: "Featured Article",
    shareArticle: "Share Article",
    closeModal: "Close Article",
    authorTitle: "Written by Mohamed Masoud",
    authorRole: "Full Stack MERN Developer & Technical Instructor",
    items: {
      reactPerf: {
        title: "Mastering React 18 Performance & State Optimization",
        summary: "Learn how to diagnose unnecessary re-renders, leverage useMemo, useCallback, and implement concurrent rendering patterns for butter-smooth web applications.",
        readTime: "5 min read",
        content: `React 18 introduced concurrent rendering capabilities that completely change how we think about UI responsiveness. However, improper state management and unnecessary re-renders remain the number one bottleneck in large-scale applications.

### 1. Identifying Re-render Hotspots
Before optimizing, measurement is key. Use the React DevTools Profiler to record component render durations. Look for components with high render counts or long flamechart spans.

### 2. Strategic Memoization
- **React.memo**: Wrap pure display components that receive primitive props or memoized objects.
- **useCallback & useMemo**: Avoid inline objects and dynamic arrow functions passed as props to heavy child components.
- **Primitive Dependencies**: Ensure useEffect dependency arrays rely on primitive strings or numbers rather than unstable object references.

### 3. Leveraging Concurrent Features
With useTransition and useDeferredValue, non-urgent state updates can be deferred without locking the main browser thread. This ensures input fields and animations stay at 60 FPS even during heavy list filtering.`
      },
      nodeSecurity: {
        title: "Building Secure & Scalable REST APIs with Node.js & Express",
        summary: "Essential security practices for production Express apps: Helmet headers, rate limiting, JWT rotation, input sanitization, and CORS configuration.",
        readTime: "6 min read",
        content: `Security is not an afterthought when building backend REST APIs. Over 80% of web vulnerabilities stem from improper input handling, missing headers, or weak token handling.

### 1. Hardening HTTP Headers with Helmet
Always initialize Helmet as your top-level Express middleware to hide server signatures (X-Powered-By), enforce strict Transport-Security (HSTS), and protect against clickjacking.

### 2. Rate Limiting & DDoS Defense
Prevent brute-force authentication attempts and API abuse by configuring express-rate-limit with Redis or in-memory key-value stores. Apply stricter limits on sensitive auth endpoints (/api/login, /api/register).

### 3. JWT Handling & Refresh Token Rotation
Store access tokens with short expiration times (e.g., 15 minutes) and set refresh tokens inside HTTP-Only, Secure, SameSite cookies to mitigate XSS (Cross-Site Scripting) and CSRF attacks.`
      },
      mongoIndexing: {
        title: "MongoDB Indexing & Aggregation Strategies for High Traffic Apps",
        summary: "A practical guide to single-field, compound, and text indexes in MongoDB, plus optimizing aggregation pipelines for high-throughput queries.",
        readTime: "7 min read",
        content: `As your application database grows to millions of documents, unindexed MongoDB queries will result in full collection scans, exhausting server RAM and spiking CPU usage.

### 1. Understanding Compound Indexes
When filtering by multiple fields (e.g., category, status, price), order matters! Follow the ESR Rule (Equality, Sort, Range):
- Equality fields first
- Sort fields second
- Range fields last

### 2. Explain Plans & Execution Stats
Use db.collection.explain("executionStats") to inspect totalDocsExamined versus nReturned. If totalDocsExamined is significantly higher than nReturned, an index is missing or inefficient.

### 3. Aggregation Pipeline Performance
Place $match and $sort stages at the very top of your aggregation pipeline so MongoDB can leverage existing indexes before transforming data.`
      },
      cleanArch: {
        title: "Clean Architecture in MERN Applications: From Monolith to Modular",
        summary: "How to decouple business logic from UI and Express routes using Controller-Service-Repository patterns in TypeScript.",
        readTime: "8 min read",
        content: `Mixing Express database queries directly inside route handlers leads to tightly coupled spaghetti code that is difficult to test and maintain.

### 1. The Controller-Service-Repository Pattern
- **Routes & Controllers**: Handle HTTP request validation and response formatting.
- **Services**: Contain pure business logic and workflow orchestration.
- **Repositories / Models**: Abstract database persistence (Mongoose / Prisma / Drizzle).

### 2. Dependency Injection in TypeScript
Inject repositories into services via interfaces. This allows effortless mocking during unit tests and enables swapping database adapters without touching core business logic.

### 3. Modular Monolith Directory Structure
Organize your codebase by feature module (e.g., \`modules/users\`, \`modules/orders\`) rather than layer type, making team collaboration and future microservice extraction painless.`
      }
    }
  },

  // Interactive Resume Modal
  resumeModal: {
    title: "Curriculum Vitae / Resume",
    subtitle: "Mohamed Mahmoud Masoud • Full Stack MERN Developer",
    downloadBtn: "Download PDF Resume",
    printBtn: "Print Resume",
    close: "Close Preview"
  },

  // Command Palette
  cmd: {
    placeholder: "Type a command or search...",
    navigation: "Navigation",
    actions: "Quick Actions",
    socials: "Social Links",
    noResults: "No matching commands found."
  },

  // Footer
  footer: {
    rights: "All rights reserved.",
    designedBy: "Engineered with React 19, Vite, Tailwind CSS & Motion by Mohamed Mahmoud Masoud.",
    backToTop: "Back to Top"
  }
};
