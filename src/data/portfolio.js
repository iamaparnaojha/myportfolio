/**
 * Single source of truth for the portfolio.
 * Experience dates and role copy follow the 5 Oct 2026 resume.
 * Earlier portfolio entries (placement coordination, freelance work,
 * additional projects, the GeeksforGeeks challenge) are kept.
 * GATE 2026 and the IBM / Google certificates come from the August 2026 resume.
 * Academic rank: 1st at college level and department level, topping the full 3rd year batch.
 */

export const profile = {
  name: "Aparna Ojha",
  role: "Software engineer",
  headline: "Building intelligent systems.",
  subhead: "Crafting experiences that matter.",
  location: "Noida, India",
  email: "ojhaaparna0@gmail.com",
  phone: "+91 8797047316",
  phoneHref: "tel:+918797047316",
  site: "https://aparna-ojha.vercel.app/",
  resume: "/aparna_ojha_resume.pdf",
  availability: "AI Systems Evaluation Intern at Caudal AI",
  intro:
    "I design full-stack products and AI systems that have to work for real people — multilingual assistants, developer tools, and evaluation tasks you can actually trust.",
};

export const nav = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "achievements", label: "Achievements" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export const profiles = [
  {
    label: "GitHub",
    href: "https://github.com/iamaparnaojha",
    handle: "iamaparnaojha",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/iamaparnaojha/",
    handle: "iamaparnaojha",
  },
  {
    label: "LeetCode",
    href: "https://leetcode.com/u/iamaparnaojha/",
    handle: "iamaparnaojha",
  },
  {
    label: "X",
    href: "https://x.com/iamaparnaojha",
    handle: "@iamaparnaojha",
  },
  {
    label: "Email",
    href: "mailto:ojhaaparna0@gmail.com",
    handle: "ojhaaparna0@gmail.com",
  },
  {
    label: "Phone",
    href: "tel:+918797047316",
    handle: "+91 87970 47316",
  },
];

export const about = {
  paragraphs: [
    "I’m Aparna Ojha, a B.Tech Information Technology student at JSS Academy of Technical Education, Noida (2023–2027, CGPA 8.9). My work sits between full-stack product engineering and AI systems: RAG pipelines, LLM workflows, and the evaluation that decides whether an agent can be trusted.",
    "CampusQuery is a multilingual campus assistant. CodeCompassAI turns an unfamiliar GitHub repository into a contributor roadmap. NextHire helps students prepare for placements with resume analysis and a simulated interview. I currently build AI-agent benchmarks at Caudal AI, after a full-stack internship at SiteGuru and a generative AI internship with IBM SkillsBuild and BharatCares.",
    "Algorithms are daily practice: 700+ problems solved, a 500+ day LeetCode streak, AIR 844 in TCS CodeVita, and GATE 2026 qualified. Hackathons are where I compress that practice into something people can use — Convergex winner, Smart India Hackathon 2025 semi-finalist, and finalist at AM Hacks.",
  ],
  facts: [
    { label: "Degree", value: "B.Tech, Information Technology" },
    { label: "College", value: "JSSATE, Noida" },
    { label: "CGPA", value: "8.9 / 10" },
    { label: "Graduation", value: "2027" },
  ],
};

export const experience = [
  {
    role: "AI Systems Evaluation Intern",
    company: "Caudal AI",
    period: "August 2026 — Present",
    current: true,
    points: [
      "Created AI-agent benchmark tasks across Sentinel Ultra, Terminus 3, and Terminal-Bench 2.1/4.0, covering prompt design, task construction, and difficulty calibration.",
      "Audited evaluation runs end to end, diagnosing Oracle, NOP, agent, and judge failures and refining specifications so results stayed reliable and reproducible.",
    ],
    skills: ["LLM evaluation", "Prompt design", "Task QA", "AI agents"],
  },
  {
    role: "Full Stack Developer Intern",
    company: "SiteGuru",
    period: "July 2026 — August 2026",
    current: false,
    points: [
      "Built full-stack modules with Next.js, Node.js, and SQL, including 15+ REST APIs, authentication, and role-based access for 3 user roles.",
      "Shipped Socket.IO messaging for 100+ concurrent users, OTP authentication, dashboards, SSR, and 20+ responsive pages inside an Agile workflow.",
    ],
    skills: ["Next.js", "Node.js", "SQL", "REST APIs", "RBAC", "Socket.IO"],
  },
  {
    role: "Generative AI and Cloud Computing Intern",
    company: "IBM SkillsBuild / BharatCares",
    period: "June 2026 — July 2026",
    current: false,
    points: [
      "Completed industry-aligned training in generative AI, LLMs, prompt engineering, cloud computing, and model evaluation.",
      "Applied prompt engineering, technical documentation, and Agile practices in guided AI evaluation projects.",
    ],
    skills: ["Generative AI", "Prompt engineering", "Cloud computing", "LLM evaluation"],
  },
  {
    role: "Student Placement Coordinator",
    company: "JSS Academy of Technical Education",
    period: "February 2026 — Present",
    current: true,
    points: [
      "Coordinate placement drives with recruiters and students, manage communication, and help the placement team run campus hiring.",
    ],
    skills: ["Coordination", "Communication", "Campus hiring"],
  },
  {
    role: "Freelance Full Stack Developer",
    company: "Self-employed",
    period: "October 2025 — March 2026",
    current: false,
    points: [
      "Designed and deployed MERN and Next.js applications, including portfolios, event registration platforms, and RAG products with LLM APIs and vector databases.",
    ],
    skills: ["MERN", "Next.js", "RAG", "MongoDB"],
  },
];

export const projects = [
  {
    slug: "campusquery",
    title: "CampusQuery",
    category: "AI Systems",
    featured: true,
    mark: "CQ",
    motif: "mesh",
    wash: "linear-gradient(145deg, #2a1848 0%, #0d2e36 100%)",
    tagline: "Multilingual campus assistant",
    summary:
      "A multichannel RAG assistant for campus questions, with voice support, an admin dashboard, and human review.",
    description:
      "CampusQuery answers student questions through a GPT-4 retrieval pipeline. It supports more than one channel and language, ingests documents for the knowledge base, and keeps a person in the loop when the model should not answer alone.",
    features: [
      "Multichannel assistant for web, WhatsApp, and Telegram, with role-based access.",
      "RAG query handling with GPT-4, LangChain, and Pinecone, plus multilingual voice support.",
      "Admin dashboard, automated document ingestion, and human-in-the-loop validation.",
      "Reported support for 500+ users, 95% context-aware accuracy, a 60% reduction in manual maintenance, and deployment on Azure Blob Storage.",
    ],
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "GPT-4",
      "LangChain",
      "Pinecone",
      "Azure Blob Storage",
      "REST APIs",
      "RBAC",
    ],
    github: "https://github.com/iamaparnaojha/CampusQuery",
    demo: "https://curious-gingersnap-fcf0db.netlify.app/",
  },
  {
    slug: "codecompass",
    title: "CodeCompassAI",
    category: "AI Systems",
    featured: true,
    mark: "CC",
    motif: "lines",
    wash: "linear-gradient(155deg, #12243f 0%, #241433 100%)",
    tagline: "AI onboarding for unfamiliar codebases",
    summary:
      "Reads a GitHub repository and builds a difficulty-ranked roadmap, with voice mentorship and caching.",
    description:
      "CodeCompassAI is a developer onboarding platform. It analyzes a repository with Google Gemini, explains where a new contributor should start, and adds voice guidance so the roadmap is something you can listen through.",
    features: [
      "Repository analysis that generates an onboarding roadmap and difficulty-ranked entry points.",
      "AI voice mentorship with ElevenLabs text-to-speech.",
      "MongoDB Atlas caching, with a reported 70% cache hit rate, across 100+ repositories.",
      "Packaged with Docker Compose for deployment.",
    ],
    tech: [
      "Next.js 14",
      "React 18",
      "Hono.js",
      "Google Gemini API",
      "MongoDB",
      "ElevenLabs TTS",
      "Docker",
      "Tailwind CSS",
    ],
    github: "https://github.com/iamaparnaojha/CodeCompassAI",
    demo: "https://code-compass-ai-vert.vercel.app/",
  },
  {
    slug: "nexthire",
    title: "NextHire",
    category: "AI Systems",
    featured: true,
    mark: "NH",
    motif: "dots",
    wash: "linear-gradient(150deg, #1b2433 0%, #3a2c16 100%)",
    tagline: "Placement and interview preparation",
    summary:
      "Resume analysis, ATS scoring, streaming cover letters, and an AI interview simulator.",
    description:
      "NextHire is a placement-preparation platform. A FastAPI backend scores resumes, streams a cover letter, and runs an interview simulator with authenticated sessions. The stack is containerized and served over HTTPS.",
    features: [
      "Resume analysis, ATS scoring, and skill-gap notes on a progress dashboard.",
      "Cover-letter generation streamed with server-sent events.",
      "AI interview simulator with JWT session persistence.",
      "Docker, Nginx, and Let’s Encrypt on AWS EC2 for HTTPS deployment.",
    ],
    tech: [
      "Python",
      "FastAPI",
      "MongoDB",
      "Google Gemini API",
      "Docker",
      "AWS EC2",
      "JavaScript",
      "HTML",
      "CSS",
    ],
    github: "https://github.com/iamaparnaojha/NextHire",
    demo: "https://nexthire-aparna.duckdns.org/",
  },
  {
    slug: "kawach",
    title: "Kawach",
    category: "Full Stack",
    featured: false,
    mark: "KW",
    motif: "lines",
    wash: "linear-gradient(145deg, #1c1e16 0%, #3a3214 100%)",
    tagline: "Secure document sharing",
    summary:
      "Privacy-focused file sharing built for the Convergex hackathon, with JWT auth and encrypted handling.",
    description:
      "Kawach is a document-sharing app made for the Convergex hackathon. It is built around confidentiality: authenticated access, encrypted document handling, and Cloudinary storage behind a responsive interface.",
    features: [
      "JWT authentication and encrypted document handling.",
      "Secure storage with Cloudinary.",
      "Responsive interface for sharing files.",
    ],
    tech: ["MongoDB", "Express.js", "React", "Node.js", "Cloudinary", "JWT"],
    github: "https://github.com/iamaparnaojha/kawach",
    demo: "https://kawach-git-main-sujal862s-projects.vercel.app/",
  },
  {
    slug: "artify",
    title: "Artify",
    category: "Full Stack",
    featured: false,
    mark: "AR",
    motif: "dots",
    wash: "linear-gradient(145deg, #2a1422 0%, #402430 100%)",
    tagline: "A social platform for artists",
    summary:
      "Profiles, artwork uploads, likes, and comments, with authentication and moderation.",
    description:
      "Artify is a social product for artists. People create a profile, publish work, and respond with likes and comments. Authentication and moderation sit under a Bootstrap interface.",
    features: [
      "Profiles, artwork uploads, likes, and comments.",
      "User authentication and content moderation.",
      "Responsive layout built with Django and Bootstrap.",
    ],
    tech: ["Django", "Python", "SQLite", "Bootstrap"],
    github: "https://github.com/iamaparnaojha/artify",
    demo: "https://artify-1.onrender.com/",
  },
  {
    slug: "studybuddy",
    title: "StudyBuddy",
    aka: "FlashLearn",
    category: "AI Systems",
    featured: false,
    mark: "FL",
    motif: "mesh",
    wash: "linear-gradient(145deg, #142033 0%, #243a55 100%)",
    tagline: "AI study assistant",
    summary:
      "Personalized study material, quizzes, and progress tracking, also released as FlashLearn.",
    description:
      "StudyBuddy, also called FlashLearn, is an AI study assistant. It offers personalized resources, quizzes, and progress tracking, and uses the YouTube Data API alongside AI services.",
    features: [
      "Personalized study resources and quizzes.",
      "Progress tracking for ongoing study.",
      "YouTube Data API and AI services in a MERN stack.",
    ],
    tech: ["MongoDB", "Express.js", "React", "Node.js", "YouTube Data API"],
    github: "https://github.com/iamaparnaojha/studybuddy",
    demo: "https://flash-learn-ten.vercel.app/",
  },
  {
    slug: "smartcalendar",
    title: "SmartCalendar",
    category: "Frontend",
    featured: false,
    mark: "SC",
    motif: "lines",
    wash: "linear-gradient(145deg, #1a1830 0%, #322652 100%)",
    tagline: "Calendar with notes and reminders",
    summary:
      "An interactive calendar with reminders, holiday markers, favorite dates, and notes.",
    description:
      "SmartCalendar is an interactive calendar with motion, reminders, highlighted dates, holiday markers, favorite days, and a notes feature.",
    features: [
      "Reminders, favorite dates, and holiday markers.",
      "Highlighted dates and smart notes.",
      "Built with Next.js, TypeScript, and Tailwind CSS.",
    ],
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/iamaparnaojha/SmartCalendar",
    demo: "https://smart-calendar-khaki.vercel.app/",
  },
  {
    slug: "moneysphere",
    title: "Moneysphere",
    category: "Full Stack",
    featured: false,
    mark: "MS",
    motif: "dots",
    wash: "linear-gradient(145deg, #13241c 0%, #1d3d2c 100%)",
    tagline: "Personal finance manager",
    summary:
      "Expense tracking, budgets, and charts for a clearer picture of personal spending.",
    description:
      "Moneysphere helps track expenses, set budgets, and read financial data through charts and reports.",
    features: [
      "Expense tracking and budgets.",
      "Charts and reports for spending.",
      "Next.js, TypeScript, and Tailwind CSS.",
    ],
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/iamaparnaojha/Moneysphere",
    demo: "https://moneysphere-ten.vercel.app/",
  },
  {
    slug: "audit-trail",
    title: "Mini Audit Trail Generator",
    category: "Full Stack",
    featured: false,
    mark: "AT",
    motif: "lines",
    wash: "linear-gradient(145deg, #1c1a18 0%, #34312b 100%)",
    tagline: "Versioned text diffs",
    summary:
      "Tracks text changes and records the words added or removed in each version.",
    description:
      "A small full-stack app that stores versions of a text and shows an audit trail of added and removed words.",
    features: [
      "Version history for a piece of text.",
      "Per-version trail of added and removed words.",
    ],
    tech: ["React", "Vite", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/iamaparnaojha/mini_audit_trail_generator",
    demo: "https://mini-audit-trail-generator-bay.vercel.app/",
  },
  {
    slug: "qease",
    title: "Q-ease",
    aka: "SmartQueue",
    category: "Full Stack",
    featured: false,
    mark: "QE",
    motif: "mesh",
    wash: "linear-gradient(145deg, #141a28 0%, #2a384c 100%)",
    tagline: "Smart queue management",
    summary:
      "Digital tokens, live queue status, and notifications for people waiting and the teams serving them.",
    description:
      "Q-ease, also described as SmartQueue, digitizes token generation and shows live queue status. WebSockets push updates, and Twilio sends notifications.",
    features: [
      "Token generation and real-time queue status.",
      "WebSocket updates for visitors and service providers.",
      "Twilio notifications.",
    ],
    tech: ["MongoDB", "Express.js", "React", "Node.js", "WebSockets", "Twilio"],
    github: "https://github.com/iamaparnaojha/Q-ease",
    demo: "",
  },
  {
    slug: "cowrite",
    title: "CoWrite",
    category: "AI Systems",
    featured: false,
    mark: "CW",
    motif: "dots",
    wash: "linear-gradient(145deg, #1a1630 0%, #312858 100%)",
    tagline: "Collaborative writing with AI",
    summary:
      "A writing workspace for drafting and revising with real-time AI assistance.",
    description:
      "CoWrite is a collaborative writing platform with a clean editor, real-time assistance, and a workflow aimed at getting a draft finished.",
    features: [
      "Shared writing and editing.",
      "Real-time AI assistance in the editor.",
    ],
    tech: ["React", "Node.js", "MongoDB", "Express.js"],
    github: "https://github.com/iamaparnaojha/CoWrite",
    demo: "https://co-write-sooty.vercel.app/",
  },
  {
    slug: "flowaxis",
    title: "FlowAxis",
    category: "Full Stack",
    featured: false,
    mark: "FX",
    motif: "lines",
    wash: "linear-gradient(145deg, #102028 0%, #1c3c48 100%)",
    tagline: "Tasks and team progress",
    summary:
      "A project board for organizing work, tracking progress, and collaborating.",
    description:
      "FlowAxis is a workflow and project tool for task organization, progress tracking, and team collaboration.",
    features: [
      "Task organization and progress tracking.",
      "A responsive interface for team collaboration.",
    ],
    tech: ["React", "Node.js", "MongoDB", "Express.js"],
    github: "https://github.com/iamaparnaojha/Flowaxis",
    demo: "https://flowaxis-lyart.vercel.app/",
  },
  {
    slug: "moon",
    title: "Moon",
    category: "Frontend",
    featured: false,
    mark: "MN",
    motif: "dots",
    wash: "linear-gradient(145deg, #241820 0%, #3d2a38 100%)",
    tagline: "Storefront interface",
    summary:
      "A frontend storefront for women’s essentials and luxury items.",
    description:
      "Moon is a frontend e-commerce site built with HTML, CSS, and JavaScript, laid out as a storefront for women’s essentials and luxury items.",
    features: [
      "Multi-section storefront layout.",
      "Hand-built HTML, CSS, and JavaScript.",
    ],
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/iamaparnaojha/Moon",
    demo: "https://iamaparnaojha.github.io/Moon/",
  },
  {
    slug: "spotify",
    title: "Spotify Clone",
    category: "Frontend",
    featured: false,
    mark: "SP",
    motif: "mesh",
    wash: "linear-gradient(145deg, #102016 0%, #1a3a24 100%)",
    tagline: "A learning-era interface clone",
    summary:
      "An early HTML, CSS, and JavaScript study of a music-player interface.",
    description:
      "A Spotify-style interface built while learning frontend fundamentals with HTML, CSS, and JavaScript.",
    features: [
      "Static music-player layout.",
      "Built during an early frontend learning phase.",
    ],
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/iamaparnaojha/spotify_clonegdsc",
    demo: "https://iamaparnaojha.github.io/spotify_clonegdsc/",
  },
  {
    slug: "minlink",
    title: "MinLink",
    category: "Full Stack",
    featured: false,
    mark: "ML",
    motif: "lines",
    wash: "linear-gradient(145deg, #241816 0%, #3a2a22 100%)",
    tagline: "URL shortener and QR codes",
    summary:
      "Short links with custom aliases, click counts, authentication, and QR codes.",
    description:
      "MinLink shortens URLs and generates QR codes for them. The repository includes custom aliases, click tracking, and authenticated link management.",
    features: [
      "Short links and custom aliases.",
      "Click counts and QR codes.",
      "Authenticated management of links.",
    ],
    tech: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js"],
    github: "https://github.com/iamaparnaojha/MinLink",
    demo: "",
  },
  {
    slug: "wanderlusts",
    title: "Wanderlusts",
    category: "Full Stack",
    featured: false,
    mark: "WL",
    motif: "dots",
    wash: "linear-gradient(145deg, #1a2218 0%, #2c3b28 100%)",
    tagline: "Travel listings",
    summary:
      "An Airbnb-style listings app with authentication, reviews, maps, and image uploads.",
    description:
      "Wanderlusts is a listings application for browsing and managing travel stays. It includes authentication, reviews and ratings, Cloudinary uploads, and maps.",
    features: [
      "Create, edit, and delete listings.",
      "Accounts, reviews, and ratings.",
      "Image uploads with Cloudinary and interactive maps.",
    ],
    tech: ["Node.js", "Express.js", "MongoDB", "EJS", "Cloudinary", "Passport.js"],
    github: "https://github.com/iamaparnaojha/Wanderlusts",
    demo: "",
  },
  {
    slug: "healthcare",
    title: "Healthcare Platform",
    category: "Full Stack",
    featured: false,
    mark: "HC",
    motif: "mesh",
    wash: "linear-gradient(145deg, #122028 0%, #1a3344 100%)",
    tagline: "Care services and records",
    summary:
      "Consultations, lab booking, records, and a personal AI healthcare assistant.",
    description:
      "A healthcare platform with authenticated access to online consultations, emergency-care information, lab-test booking, medical records, and a personal AI assistant.",
    features: [
      "Authentication and medical records.",
      "Online consultation, emergency care, and lab-test booking.",
      "A personal AI healthcare assistant.",
    ],
    tech: ["React", "Node.js", "MongoDB", "JWT"],
    github: "https://github.com/iamaparnaojha/health_care",
    demo: "",
  },
];

export const projectFilters = ["All", "AI Systems", "Full Stack", "Frontend"];

export const skillGroups = [
  {
    id: "languages",
    label: "Languages",
    items: ["C", "C++", "Python", "Java", "JavaScript", "TypeScript"],
  },
  {
    id: "frontend",
    label: "Frontend",
    items: [
      "React.js",
      "Next.js",
      "Vue.js",
      "Nuxt.js",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Bootstrap",
      "Vuetify",
    ],
  },
  {
    id: "backend",
    label: "Backend",
    items: [
      "Node.js",
      "Express.js",
      "Hono.js",
      "Django",
      "FastAPI",
      "REST APIs",
      "JWT",
      "RBAC",
      "Microservices",
      "Socket.IO",
    ],
  },
  {
    id: "data",
    label: "Data",
    items: ["MongoDB", "MySQL", "SQL", "MongoDB Atlas", "Pinecone"],
  },
  {
    id: "ai",
    label: "AI",
    items: [
      "RAG",
      "LangChain",
      "GPT-4",
      "Gemini API",
      "AI agents",
      "Tool calling",
      "Prompt engineering",
      "LLM evaluation",
      "Hugging Face",
      "Knowledge graphs",
    ],
  },
  {
    id: "cloud",
    label: "Cloud & tools",
    items: [
      "Docker",
      "Azure Blob Storage",
      "AWS EC2",
      "AWS S3",
      "Cloudinary",
      "Git",
      "GitHub",
      "Vercel",
      "Netlify",
      "Render",
      "CI/CD",
      "Postman",
      "VS Code",
    ],
  },
  {
    id: "cs",
    label: "Computer science",
    items: [
      "Data structures & algorithms",
      "Complexity analysis",
      "OOP",
      "DBMS",
      "Operating systems",
      "Computer networks",
      "System design",
      "Distributed systems",
      "Agile / Scrum",
      "SDLC",
    ],
  },
];

export const marquee = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "FastAPI",
  "MongoDB",
  "RAG",
  "LangChain",
  "GPT-4",
  "Gemini",
  "Docker",
  "Python",
  "DSA",
];

export const stats = [
  { value: 844, prefix: "", suffix: "", label: "AIR in TCS CodeVita" },
  { value: 700, prefix: "", suffix: "+", label: "DSA problems solved" },
  { value: 500, prefix: "", suffix: "+", label: "day LeetCode streak" },
  { value: null, display: "8.9", label: "CGPA / 10" },
  { value: null, display: "6+", label: "hackathons" },
];

export const awards = [
  {
    title: "Semi-finalist, Smart India Hackathon 2025",
    detail: "National hackathon round reached with a team project.",
  },
  {
    title: "Winner, Convergex Hackathon",
    detail: "First place at the JSS University hackathon with Kawach, a secure document-sharing app.",
  },
  {
    title: "Runner-up, CodeShowdown",
    detail: "DSA contest at BVCOE, Delhi.",
  },
  {
    title: "Finalist, AM Hacks",
    detail: "Hackathon at IGDTUW, Delhi.",
  },
  {
    title: "GeeksforGeeks 21 Days Challenge",
    detail: "Completed and won the 21-day coding challenge.",
  },
  {
    title: "College topper, 3rd year",
    detail:
      "1st rank at college level and department level. Topped the entire 3rd year batch.",
  },
  {
    title: "GATE 2026 qualified",
    detail: "Graduate Aptitude Test in Engineering, 2026.",
  },
];

export const education = {
  school: "JSS Academy of Technical Education, Noida",
  degree: "B.Tech — Information Technology",
  period: "2023 — 2027",
  cgpa: "8.9 / 10",
  notes: [
    "1st rank at college level and department level.",
    "Topped the entire 3rd year batch.",
    "GATE 2026 qualified.",
  ],
};

export const certifications = [
  {
    title: "Generative AI & Cloud Computing",
    issuer: "AICTE · IBM SkillsBuild",
    detail:
      "Prompt engineering, cloud computing, large language models, generative AI, and AWS.",
  },
  {
    title: "Crash Course on Python",
    issuer: "Google",
    detail: "Python, automation, data structures, debugging, and programming.",
  },
];
