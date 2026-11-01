// Everything about you that isn't a project lives here.
// Edit the text, save, and the site updates.

export const profile = {
  name: 'Sanil Gokarn',
  initials: 'SG',
  role: 'Business Data Analyst',
  // Short line in the homepage hero card.
  headline: 'Data in. Decisions out.',
  // Supporting line under the headline. The word "AI" is highlighted.
  subline: 'I use AI to sharpen my analysis, streamline processes and turn new ideas into working tools.',
  // Longer intro, used as the site description in search results.
  tagline:
    'I turn raw data into clear dashboards, insights and AI-powered tools that help teams make better decisions.',
  location: 'United Kingdom',
  email: 'sanil.gokarn@gmail.com',
  // Set to true to show an "Open to work" badge in the hero.
  openToWork: false,
  bio: [
    "I'm a Business Data Analyst with 2 years of experience across freelance analytics, healthcare reporting and project delivery. I build Power BI dashboards, write SQL and Python, and translate what stakeholders need into clear requirements, user stories and KPIs.",
    "I hold an MSc in Business Analytics from Aston University and a BEng in Artificial Intelligence & Data Science. Lately I've been building AI-enabled tools with Claude and MCP servers, always with a focus on data quality and decisions backed by evidence.",
  ],
  socials: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/sanil-gokarn/' },
    { label: 'GitHub', href: 'https://github.com/Sanil-Gokarn' },
  ],
  // The big numbers at the top of the homepage. A projects count is added
  // after these automatically, from the files in src/content/projects.
  stats: [
    { value: '2+', label: 'years in analytics' },
    { value: '8+', label: 'client dashboards delivered' },
    { value: '25+', label: 'stakeholders engaged' },
  ],
  // More results, shown on the About card.
  highlights: [
    { value: '90%', label: 'faster metric retrieval with InsFlow' },
    { value: '100K+', label: 'records cleaned and modelled' },
    { value: 'Top 5', label: 'of 60 teams in the HS2 challenge' },
    { value: '500+', label: 'operational tickets analysed with AI' },
  ],
};

export const experience = [
  {
    role: 'QA & Test Automation Analyst',
    company: 'Invyt',
    location: 'United Kingdom',
    period: 'Oct 2026 – Present',
    points: [
      'Test web application features manually and log defects in Jira.',
      'Write UI test automation in Playwright and TypeScript, using AI-assisted scripting with OpenAI Codex.',
      'Report test results, defects and progress directly to the CEO.',
    ],
  },
  {
    role: 'Business Analyst',
    company: 'Enactus Aston',
    location: 'United Kingdom',
    period: 'Oct 2025 – May 2026',
    points: [
      'Led requirements gathering across 25+ stakeholders in HR, Tech and Project teams.',
      'Wrote 10+ user stories and process flow diagrams that turned stakeholder needs into delivery actions.',
      'Tracked risks, dependencies and mitigations across sprint-style project cycles.',
    ],
  },
  {
    role: 'Business Analyst Intern',
    company: 'Kartavya Healtheon',
    location: 'India',
    period: 'Sep 2024 – Dec 2024',
    points: [
      'Gathered 15+ user stories and reporting requirements for workforce analytics.',
      'Supported 2 Power BI dashboards on employee retention and workforce trends.',
      'Documented data mapping and lineage from source datasets to dashboard outputs.',
    ],
  },
  {
    role: 'Business Data Analyst',
    company: 'Sunrise Media World',
    location: 'India',
    period: 'Jul 2022 – Mar 2024',
    points: [
      'Delivered 8+ Power BI dashboards across 3 clients and 4 projects in telecom, healthcare and automotive.',
      'Built ETL/ELT workflows combining SQL, APIs, SharePoint, Smartsheet and Excel data.',
      'Developed data models, DAX measures and Row-Level Security, and ran UAT before handover.',
    ],
  },
];

export const education = [
  {
    degree: 'MSc Business Analytics',
    school: 'Aston University',
    href: 'https://www.aston.ac.uk/',
    location: 'United Kingdom',
    period: 'Apr 2025 – May 2026',
    detail: 'Business Intelligence, Data Mining & Visualisation, Python for Data Analytics, Business Performance Analytics.',
  },
  {
    degree: 'BEng Artificial Intelligence & Data Science',
    school: 'Mumbai University',
    // The main site (mu.ac.in) doesn't load from the UK; this University of Mumbai portal does.
    href: 'https://mum.digitaluniversity.ac/',
    location: 'Mumbai, India',
    period: 'Aug 2021 – Jul 2024',
    detail: 'Machine Learning, Statistical Analysis, Database Management (SQL), Big Data Analytics, Predictive Modelling.',
  },
];

export const skills = [
  {
    group: 'Business Analysis',
    items: ['Requirements gathering', 'Stakeholder management', 'User stories & acceptance criteria', 'As-Is / To-Be process mapping', 'Gap analysis', 'Agile & Scrum', 'UAT'],
  },
  {
    group: 'BI & Reporting',
    items: ['Power BI', 'DAX', 'Power Query', 'Excel', 'Data modelling', 'KPI reporting', 'Row-Level Security'],
  },
  {
    group: 'Data',
    items: ['SQL / MySQL', 'Python', 'Data cleaning & validation', 'Data mapping & lineage', 'ETL / ELT', 'Correlation & regression'],
  },
  {
    group: 'AI & Development',
    items: ['Claude Code', 'MCP servers', 'OpenAI Codex', 'GitHub Copilot', 'TypeScript', 'Java', 'HTML', 'APIs'],
  },
  {
    group: 'Testing & QA',
    items: ['Playwright', 'Test automation', 'Manual testing', 'Test case design', 'Jira'],
  },
  {
    group: 'Tools',
    items: ['SharePoint', 'Smartsheet', 'Google Analytics', 'Figma', 'GitHub', 'VS Code'],
  },
];

const certs = 'https://github.com/Sanil-Gokarn/Certificates/blob/main';

export const certifications = [
  // TODO: add the issuer once confirmed.
  { name: 'Introduction to Model Context Protocol', issuer: '', href: `${certs}/Certificate-MCP.pdf` },
  {
    name: 'Career Essentials in Business Analysis',
    issuer: 'Microsoft',
    href: 'https://www.linkedin.com/learning/certificates/d96cfdceae6c9a4757ac5d1f64f42476f342a168e6b4b4d61ac8c3ba4ebb2ac5',
  },
  { name: 'Master the Art of Prompting', issuer: 'IBM', href: `${certs}/Mastering_the_Art_of_Prompting.pdf` },
  { name: 'Data Fundamentals', issuer: 'IBM', href: `${certs}/Data_Fundamentals.pdf` },
  { name: 'Artificial Intelligence Fundamentals', issuer: 'IBM', href: `${certs}/AI_Fundamentals_Certificate.pdf.pdf` },
  { name: 'What is Generative AI', issuer: 'LinkedIn', href: `${certs}/What_Is_Generative_AI.pdf` },
];

export const awards = [
  {
    name: 'HS2 Academic Project Competition: Top 5 of 60 teams',
    issuer: 'Aston University',
    period: 'Oct 2025',
    href: `${certs}/HS2_Challenge.pdf`,
  },
];
