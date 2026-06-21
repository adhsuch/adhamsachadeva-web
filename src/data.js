// All portfolio content lives here so it is easy to edit.

export const profile = {
  name: 'Adham Sachadeva Purwadi',
  role: 'Student at Institut Teknologi Bandung',
  detail: 'Information Systems & Technology · 4th Semester',
  tagline:
    'An Information Systems & Technology student who loves programming, product development, and exploring AI / prompt engineering.',
  // Profile photo lives in public/profile.jpg
  photo: './profile.jpg',
}

export const about = [
  "I'm Adham Sachadeva Purwadi, an Information Systems & Technology student at Institut Teknologi Bandung. I enjoy building useful software — from algorithms and desktop apps to web platforms.",
  'Beyond coding, I am active in campus organizations and love learning new things — especially applying AI and prompt engineering to solve real problems.',
]

export const skills = [
  {
    category: 'Languages',
    items: ['C', 'Java', 'Python'],
  },
  {
    category: 'Frameworks & Libraries',
    items: ['React', 'JavaFX', 'FastAPI', 'NumPy', 'pandas', 'Matplotlib'],
  },
  {
    category: 'Databases',
    items: ['MySQL', 'PostgreSQL'],
  },
  {
    category: 'AI',
    items: ['Prompt Engineering'],
  },
]

export const education = [
  {
    school: 'Institut Teknologi Bandung',
    detail: 'Information Systems & Technology · 4th Semester',
    period: 'Present',
    current: true,
  },
  {
    school: 'MAN 2 Kota Malang',
    detail: 'Senior High School',
    period: '',
  },
  {
    school: 'SMPI Baitul Izzah Nganjuk',
    detail: 'Islamic Junior High School',
    period: '',
  },
  {
    school: 'SD Aisyiyah 1 Nganjuk',
    detail: 'Elementary School',
    period: '',
  },
]

export const projects = [
  {
    name: 'For Deeper',
    description:
      'A simple browser-style program written in C, built to carry the interactive narrative of our Algorithm & Programming 1 major project.',
    tags: ['C', 'Makefile'],
    link: 'https://github.com/adhsuch/Tubes-Algoritma-Pemrograman-1-2026',
  },
  {
    name: 'CIVITASK',
    description:
      'A freelance platform built specifically for students, connecting task posters with students offering their services.',
    tags: ['Web', 'FastAPI', 'Platform'],
    link: 'https://github.com/andreas916/tubes-tekplat-CIVITASK',
  },
  {
    name: 'Nasi Bergizi Pajak',
    description:
      'A JavaFX desktop app that helps families plan healthier, more budget-friendly meals — family profiles, food budgeting, kitchen inventory, and weekly menus. I built the Budget & Shopping Planner module.',
    tags: ['Java', 'JavaFX', 'MySQL'],
    link: 'https://github.com/tyawaa/IF2050-2026-K02-G03-Nasi-Bergizi-Pajak',
  },
  {
    name: 'Image Watermarking',
    description:
      'A Python tool that embeds binary watermarks into photos using block-level DCT (8×8), then tests how well the mark survives JPEG compression across different quality factors.',
    tags: ['Python', 'DCT', 'Image Processing'],
    link: 'https://github.com/adhsuch/watermarking',
  },
  {
    name: 'Personal Portfolio',
    description:
      "The site you're looking at — a single-page portfolio built with React + Vite and plain CSS, auto-deployed to GitHub Pages via a GitHub Actions CI/CD pipeline on every push.",
    tags: ['React', 'Vite', 'CI/CD'],
    link: 'https://github.com/adhsuch/adhamsachadeva-web',
  },
]

export const organizations = [
  {
    role: 'Career Development Staff',
    org: 'HMIF ITB',
    period: '2026 / 2027',
    desc: 'Supporting members’ career readiness — curating internship and job opportunities, building industry connections, and helping run career-prep events such as company sessions, CV and interview workshops, and sharing sessions with alumni and professionals.',
  },
  {
    role: 'Sponsorship Division',
    org: 'Wisuda Oktober HMIF',
    period: '2025',
    desc: 'Managed a database of 50+ potential sponsors and coordinated strategic outreach to corporate partners and startups for the graduation event.',
  },
  {
    role: 'Logistics Staff',
    org: 'IMPACT STEI-K',
    period: '2025',
    desc: "Managed the equipment and supplies needed throughout the IMPACT competition's operations, and arranged the gala dinner layout for the winners.",
  },
]

export const contacts = [
  { label: 'Email', value: 'adsa02.asp@gmail.com', href: 'mailto:adsa02.asp@gmail.com' },
  { label: 'WhatsApp', value: '+62 857-3920-7913', href: 'https://wa.me/6285739207913' },
  { label: 'Instagram', value: '@adhamsachadeva', href: 'https://instagram.com/adhamsachadeva' },
  { label: 'GitHub', value: 'github.com/adhsuch', href: 'https://github.com/adhsuch' },
  {
    label: 'LinkedIn',
    value: 'in/adham-sachadeva-purwadi',
    href: 'https://www.linkedin.com/in/adham-sachadeva-purwadi/',
  },
]
