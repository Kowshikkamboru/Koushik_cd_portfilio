export const profile = {
  name: "Amboru Koushik",
  initials: "AK",
  email: "kowshikkamboru@gmail.com",
  phone: "+91 7780239794",
  location: "Hyderabad, India",
  linkedin: "https://www.linkedin.com/in/koushik-amboru/",
  github: "https://github.com/Kowshikkamboru",
  headline:
    "Software engineer building production mobile, web, data, and AI systems with product ownership.",
  summary:
    "I combine a builder's speed with an engineer's discipline: shipped production apps, maintained real release pipelines, published AI/ML research, filed patent-grade innovation, and use AI tools as a serious engineering multiplier.",
};

export const heroMetrics = [
  { value: "2", label: "production apps live on App Store and Google Play" },
  { value: "28+", label: "mobile releases shipped without rollbacks" },
  { value: "1", label: "IEEE first-author publication" },
  { value: "1", label: "Indian patent application in AI/IoT" },
];

export const executiveSignals = [
  {
    title: "For CEOs",
    point:
      "I understand business constraints, cost control, and time-to-market. At Shata, I owned delivery that avoided expensive vendor dependency while keeping the product live.",
  },
  {
    title: "For CTOs",
    point:
      "I can reason across architecture, APIs, release engineering, data flow, reliability, and AI-assisted development instead of only implementing isolated tickets.",
  },
  {
    title: "For HR and hiring teams",
    point:
      "My profile is easy to validate: production apps, verified internships, public research, certifications, leadership roles, and a consistent learning curve.",
  },
];

export const roleLenses = [
  {
    title: "Software / Product Engineer",
    fit:
      "Best fit for teams that need a builder who can take ambiguous product work from requirements to release.",
    proof: [
      "Built Shata and Shata Partner in Flutter for real users.",
      "Owned Android and iOS release operations end to end.",
      "Integrated REST APIs, Firebase Auth, FCM, DLT SMS, Razorpay, and Google Maps.",
    ],
  },
  {
    title: "AI / ML / GenAI Engineer",
    fit:
      "Best fit for applied AI teams where models need surrounding systems, clean context, and reliable interfaces.",
    proof: [
      "First-author IEEE paper using CNN and PSO for ALPR.",
      "Built JARVIS / FRIDAY with Whisper, LLM routing, FastAPI, and desktop tooling.",
      "Studied RAG pipelines with vector search, PostgreSQL, Docker, and document ingestion.",
    ],
  },
  {
    title: "Data / Technical Analyst",
    fit:
      "Best fit for teams that need someone who can inspect data flows, automate reporting, and translate signals into action.",
    proof: [
      "Worked with booking, payment, GPS, user, and SMS delivery data in production.",
      "Built UiPath automation for extraction, document processing, and reporting workflows.",
      "Designed ML datasets, preprocessing, metrics, and evaluation pipelines.",
    ],
  },
  {
    title: "Frontend / Mobile UI Engineer",
    fit:
      "Best fit for product teams that value polished interfaces, responsive layouts, and AI-accelerated implementation.",
    proof: [
      "Built production Flutter UI for two marketplace apps.",
      "Delivered React and HTML/CSS work through IBM SkillsBuild and CSRBOX.",
      "Uses AI for component planning, edge cases, accessibility checks, and API contract review.",
    ],
  },
];

export const operatingModel = [
  {
    title: "Frame the system",
    detail:
      "I start by mapping users, data owners, constraints, regulatory requirements, and failure modes before choosing tools.",
  },
  {
    title: "Ship a vertical slice",
    detail:
      "I build the smallest complete workflow first: UI, state, API contract, auth, persistence, errors, and deployment.",
  },
  {
    title: "Make reliability visible",
    detail:
      "I add delivery checks, meaningful states, logs, retry paths, and release discipline so the product can survive real users.",
  },
  {
    title: "Use AI as review pressure",
    detail:
      "I ask AI tools to challenge architecture, find edge cases, check security assumptions, and improve documentation.",
  },
  {
    title: "Iterate from evidence",
    detail:
      "I improve based on user behavior, delivery metrics, production defects, and stakeholder feedback rather than personal preference.",
  },
];

export const projects = [
  {
    id: "shata-apps",
    category: "Production",
    title: "Shata and Shata Partner",
    subtitle: "Two live marketplace apps for customers and vendors",
    status: "Live product",
    stack: ["Flutter", "Dart", "REST API", "Firebase Auth", "FCM", "Razorpay", "Google Maps"],
    problem:
      "Shata needed a complete digital marketplace with customer booking, vendor management, OTP login, payments, location workflows, and release-ready mobile apps.",
    architecture:
      "Built two Flutter apps with separate role flows, API-driven state, Firebase authentication, DLT SMS, push notification channels, payment integration, and store-specific release pipelines.",
    impact:
      "Both apps shipped to App Store and Google Play. I owned 28+ consecutive production releases with no rollbacks and reduced dependency on external vendors.",
    evidence: ["4.5 star customer app", "App Store and Google Play releases", "DLT SMS without vendor SDK"],
  },
  {
    id: "shata-web",
    category: "Production",
    title: "Shata Web and Admin Ecosystem",
    subtitle: "Public site plus internal and partner web portals",
    status: "Operational",
    stack: ["React", "HTML", "CSS", "JavaScript", "REST API", "Vercel"],
    problem:
      "The business needed public presence, partner access, and internal admin surfaces without waiting for a large external web team.",
    architecture:
      "Delivered responsive web surfaces with role-specific flows, API integration, environment-aware deployment, and separate interaction models for staff, partners, and public users.",
    impact:
      "Created a complete web ecosystem around the mobile product and helped the team manage operations through self-service portals.",
    evidence: ["6 web surfaces", "Role-based product areas", "Vercel deployment"],
    links: [{ label: "theshata.com", href: "https://theshata.com" }],
  },
  {
    id: "alpr",
    category: "AI Systems",
    title: "Vehicle Number Plate Detection",
    subtitle: "CNN + PSO research published at IEEE ICICCS 2025",
    status: "Published",
    stack: ["Python", "TensorFlow", "CNN", "PSO", "OpenCV", "Jupyter"],
    problem:
      "Indian road surveillance conditions include motion blur, low light, varied plate formats, and accident scenes where accurate plate detection matters.",
    architecture:
      "Designed an ML pipeline for image preprocessing, augmentation, feature selection with Particle Swarm Optimization, CNN training, and evaluation across adverse conditions.",
    impact:
      "Published as first author at IEEE ICICCS 2025 with DOI 10.1109/ICICCS65191.2025.10984880.",
    evidence: ["First author", "IEEE DOI", "91%+ reported detection accuracy"],
    links: [{ label: "IEEE DOI", href: "https://doi.org/10.1109/ICICCS65191.2025.10984880" }],
  },
  {
    id: "patent",
    category: "AI Systems",
    title: "AI/IoT Accident Detection System",
    subtitle: "Patent-filed emergency detection architecture",
    status: "Patent application",
    stack: ["Computer Vision", "IoT", "Edge AI", "Python", "OpenCV"],
    problem:
      "Accident detection and reporting often depends on delayed human reporting, which slows emergency response.",
    architecture:
      "Designed a hybrid AI/IoT system combining camera-based accident detection with impact and vibration sensor signals, then routing alerts to emergency workflows.",
    impact:
      "Indian Patent Application 202541110844 was filed and published, validating the idea as a formal innovation track.",
    evidence: ["Application 202541110844", "AI + IoT design", "Emergency response use case"],
  },
  {
    id: "jarvis",
    category: "AI Systems",
    title: "JARVIS / FRIDAY",
    subtitle: "Agentic desktop assistant with voice, LLM routing, and developer tooling",
    status: "Built",
    stack: ["Python", "FastAPI", "Whisper", "Claude API", "Gemini API", "Electron"],
    problem:
      "A useful assistant needs more than chat: it needs voice input, tool surfaces, task routing, reminders, and predictable service boundaries.",
    architecture:
      "Built modular services for speech-to-text, LLM routing, desktop UI, reminder scheduling, and VS Code assistance with clear inputs, outputs, and error handling.",
    impact:
      "Demonstrates practical GenAI engineering: context management, tool orchestration, model routing, and productized interfaces.",
    evidence: ["Whisper voice input", "LLM routing", "VS Code extension"],
  },
  {
    id: "rag",
    category: "Data",
    title: "RAG Pipeline Study",
    subtitle: "Document ingestion, vector indexing, and SQL-on-documents",
    status: "Implemented locally",
    stack: ["Python", "Pathway", "Vector Search", "PostgreSQL", "Docker"],
    problem:
      "LLM answers need traceable retrieval and structured access to unstructured documents.",
    architecture:
      "Implemented document ingestion, vector indexing, hybrid retrieval, PostgreSQL-backed querying, and Docker Compose based local deployment.",
    impact:
      "Built the foundations needed for enterprise search, AI-assisted analytics, and knowledge retrieval systems.",
    evidence: ["Vector search", "Hybrid retrieval", "Docker deployment"],
  },
  {
    id: "poze",
    category: "AI Systems",
    title: "POZE",
    subtitle: "Real-time pose advisor on cost-constrained AI infrastructure",
    status: "In development",
    stack: ["Flutter", "MediaPipe", "Cloudflare Workers AI", "LLaMA", "LLaVA"],
    problem:
      "Pose guidance needs low-latency perception and low-cost recommendation systems that can run without expensive hosted ML infrastructure.",
    architecture:
      "Uses MediaPipe Pose for live skeleton detection and Cloudflare Workers AI for contextual recommendations and visual feedback.",
    impact:
      "Shows my bias toward realistic constraints: building an AI feature around free-tier infrastructure and mobile-first UX.",
    evidence: ["Live pose detection", "Workers AI", "Cost-aware architecture"],
  },
  {
    id: "dump-them-all",
    category: "Data",
    title: "DUMP Them All",
    subtitle: "Logistics data platform for scrap pickup workflows",
    status: "Designed",
    stack: ["Next.js", "PostgreSQL", "Maps API", "Scheduling"],
    problem:
      "Scrap pickup workflows need structured seller-vendor matching, service categories, geographic logic, and scheduling visibility.",
    architecture:
      "Designed relational data structures for vendors, sellers, service types, location matching, and availability matrices with a product UI on top.",
    impact:
      "Demonstrates data modeling, geospatial thinking, and practical operations design.",
    evidence: ["Relational model", "Geospatial matching", "Scheduling workflow"],
  },
  {
    id: "kings-portal",
    category: "Frontend",
    title: "King's Portal",
    subtitle: "Community IT platform with authentication and dashboards",
    status: "Live",
    stack: ["Next.js", "Auth.js", "PostgreSQL", "Tailwind CSS", "Vercel"],
    problem:
      "A community platform needed member identity, content areas, discussion spaces, role-based dashboards, and moderation.",
    architecture:
      "Built a full-stack web app with authenticated user flows, structured content modules, dashboard areas, and security-reviewed component planning.",
    impact:
      "Shows frontend product thinking beyond static pages: identity, workflow, moderation, and deployment.",
    evidence: ["Role-based UI", "Auth flow", "Production deployment"],
    links: [{ label: "Live site", href: "https://king-s-portal-web.web.app" }],
  },
  {
    id: "apnagaadi",
    category: "Frontend",
    title: "ApnaGaadi",
    subtitle: "Automobile rental and sales site with booking capture",
    status: "Live",
    stack: ["HTML", "Bootstrap", "TypeScript", "PHP", "Google Sheets API"],
    problem:
      "Small automobile businesses needed online booking without a heavy backend or paid database setup.",
    architecture:
      "Built a responsive multi-page website with booking forms and lightweight data capture into Google Sheets.",
    impact:
      "A practical zero-cost deployment that proved full-cycle web delivery early in my journey.",
    evidence: ["6 page site", "Booking forms", "Google Sheets backend"],
    links: [{ label: "Live site", href: "https://apnagaadi.vercel.app" }],
  },
];

export const experiences = [
  {
    role: "Software Engineer",
    company: "Shata Events Pvt. Ltd.",
    period: "Feb 2025 - Mar 2026",
    location: "Hyderabad, India",
    type: "Full-time",
    summary:
      "Owned mobile app delivery, release operations, notification systems, and web surfaces for an event marketplace startup.",
    impact: [
      "Built and maintained two production Flutter apps used by customers and vendors.",
      "Handled Android and iOS releases: signing, provisioning, store submissions, and production updates.",
      "Built DLT SMS and OTP delivery through direct REST integration and monitored live transaction reliability.",
      "Integrated payments, maps, Firebase Auth, FCM, and backend APIs across real booking workflows.",
    ],
  },
  {
    role: "Frontend Web Development Intern",
    company: "IBM SkillsBuild x CSRBOX",
    period: "Jun 2024 - Aug 2024",
    location: "Remote",
    type: "Internship",
    summary:
      "Built responsive UI components and worked on live frontend product modules through the IBM SkillsBuild program.",
    impact: [
      "Created React, HTML, CSS, and JavaScript components for responsive layouts.",
      "Improved cross-browser rendering and client-side data display patterns.",
      "Practiced team workflows, Git collaboration, and deadline-driven delivery.",
    ],
  },
  {
    role: "Android Developer Intern",
    company: "Google for Developers / EduSkills",
    period: "Apr 2024 - Jun 2024",
    location: "Remote",
    type: "Internship",
    summary:
      "Completed structured Android development training focused on Kotlin, Jetpack, Flutter fundamentals, and Material Design.",
    impact: [
      "Built practice apps with navigation, lifecycle handling, API integration, and mobile UI patterns.",
      "Applied the foundation directly in later Flutter production work.",
    ],
  },
  {
    role: "Google AI-ML Virtual Intern",
    company: "Google for Developers / EduSkills",
    period: "Jan 2024 - Mar 2024",
    location: "Remote",
    type: "Internship",
    summary:
      "Studied supervised learning, preprocessing, evaluation metrics, and neural network foundations.",
    impact: [
      "Built the AI/ML base used in later ALPR research and GenAI engineering projects.",
      "Strengthened model evaluation, data preparation, and pipeline thinking.",
    ],
  },
  {
    role: "RPA Developer Intern",
    company: "UiPath / SJCET PALAI Academic Alliance",
    period: "Sep 2023 - Nov 2023",
    location: "Remote",
    type: "Internship",
    summary:
      "Built automation workflows for data extraction, document handling, and business process automation.",
    impact: [
      "Completed UiPath Foundation and Advanced RPA certifications.",
      "Built bots for scraping, document processing, spreadsheet workflows, and reporting automation.",
    ],
  },
  {
    role: "Campus Ambassador",
    company: "E-Cell, IIT Bombay",
    period: "Jul 2024 - Jun 2025",
    location: "Remote",
    type: "Leadership",
    summary:
      "Represented a national entrepreneurship community and promoted startup programs to students.",
    impact: [
      "Built communication, outreach, and stakeholder coordination habits beyond engineering tasks.",
      "Promoted entrepreneurship events and developed a stronger product/business lens.",
    ],
  },
];

export const skillGroups = [
  {
    title: "Build",
    skills: ["Flutter", "Dart", "React", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS", "PHP"],
  },
  {
    title: "Systems",
    skills: ["REST APIs", "Firebase", "PostgreSQL", "SQL", "FCM", "Razorpay", "Google Maps", "Auth flows"],
  },
  {
    title: "AI and data",
    skills: ["Python", "TensorFlow", "OpenCV", "CNN", "PSO", "Pandas", "NumPy", "RAG", "Prompt engineering"],
  },
  {
    title: "Ship",
    skills: ["Git", "GitHub", "Vercel", "Play Console", "App Store Connect", "Android Studio", "Docker basics", "UiPath"],
  },
  {
    title: "Foundation",
    skills: ["C", "Java", "Networking", "CCNA", "Linux terminal", "DBMS", "Agile delivery", "Technical documentation"],
  },
];

export const education = [
  {
    degree: "B.Tech in Computer Science and Engineering - AI and ML",
    school: "Sree Vidyanikethan Engineering College, Tirupati",
    period: "2022 - 2025",
    result: "CGPA 7.97 / 10",
    notes: ["IEEE publication", "Indian patent application", "Joint Secretary - CSE-AIML Association", "NSS Squad Leader"],
  },
  {
    degree: "Diploma in Computer Science Engineering",
    school: "Andhra Polytechnic College, Kakinada",
    period: "2018 - 2021",
    result: "77.69%",
    notes: ["Built early web and systems projects", "Foundation in C, databases, and full-stack basics"],
  },
];

export const researchAndRecognition = [
  {
    label: "IEEE ICICCS 2025",
    title: "Detecting Vehicle Number Plates Involved in Road Accidents Using CNN and PSO",
    detail:
      "First-author research covering dataset preparation, preprocessing, PSO optimization, CNN training, and evaluation for ALPR under difficult road conditions.",
    meta: "DOI: 10.1109/ICICCS65191.2025.10984880",
    link: "https://doi.org/10.1109/ICICCS65191.2025.10984880",
  },
  {
    label: "Indian Patent Application",
    title: "AI/IoT-Based Vehicle Accident Detection and Reporting System",
    detail:
      "Hybrid accident detection concept combining computer vision and IoT signals for real-time emergency reporting.",
    meta: "Application No. 202541110844",
  },
  {
    label: "Leadership",
    title: "Joint Secretary, NSS Squad Leader, Campus Ambassador",
    detail:
      "Organized technical and community initiatives, represented entrepreneurship programs, and strengthened communication beyond code.",
    meta: "SVCE, NSS, E-Cell IIT Bombay",
  },
];

export const certifications = [
  "Google AI-ML Virtual Internship",
  "Android Developer - Google for Developers / EduSkills",
  "IBM SkillsBuild Frontend Web Development",
  "UiPath RPA Developer Foundation and Advanced",
  "Cisco CCNA Levels 1, 2, and 3",
  "Cisco IT Essentials",
  "ISRO / IIRS Python for Geoprocessing",
  "Pearson MePro English C2",
  "IBM Web Development Fundamentals",
  "IBM Project Management Fundamentals",
  "Flutter Bootcamp",
  "Intellectual Property Rights",
];
