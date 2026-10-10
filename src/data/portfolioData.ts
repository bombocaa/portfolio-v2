
export const NAV_LINKS = ['Home', 'Experience', 'Stack', 'Projects', 'Contact']

export const EXPERIENCE = [
    {
        role: 'Web Developer Intern',
        company: 'National University - Manila',
        period: 'February 2026 — May 2026',
        desc: 'Built 20+ responsive web pages across 3 system projects using React.js and Tailwind CSS with 100% visual accuracy from Figma designs. Collaborated with a developer team to fix 20+ UI bugs, deliver 12+ feature updates, manage test cases using Git and Qase, and assist with technical database documentation.',
        tags: ['React.JS', 'Tailwind CSS', 'Laravel', 'PostgreSQL'],
    },
    {
        role: 'IT Admin & QA Analyst Intern',
        company: 'Ollopa Corporation',
        period: 'December 2025 — Febuary 2026',
        desc: 'Conducted weekly QA testing across 4 company websites to identify and log functional bugs, ensuring optimal site performance. Managed, added, and updated property room listings across web portals to maintain accurate real-time details and availability for users.',
        tags: ['Time Management', 'Organization', 'Teamwork', 'Communication'],
    },
]

export const STACK_GROUPS = [
    {
        label: 'Frontend',
        items: ['HTML', 'CSS', 'JavaScript'],
    },
    {
        label: 'Frameworks',
        items: ['React', 'Next.js', 'Vue', 'Laravel', 'Tailwind CSS', 'Flutter'],
    },
    {
        label: 'Backend & Database',
        items: ['PHP', 'Node.js', 'MySQL', 'PostgreSQL', 'Firebase', 'REST'],
    },
    {
        label: 'Tools',
        items: ['Git', 'GitHub', 'VS Code', 'Figma', 'MapLibre', 'Vite', 'Qase'],
    },
]

export interface Project {
    num: string
    title: string
    desc: string
    tags: string[]
    features?: string[]
    link?: string
    github?: string
    year: string
    featured?: boolean
    category?: string
    type?: string
}

// First 3 featured projects shown on the main homepage
export const PROJECTS: Project[] = [
    {
        num: '01',
        title: 'T-Global Residences Hub',
        category: 'Platform',
        desc: 'A complete dormitory management system with a Marketing website, Tenant app.',
        tags: ['React.Js', 'JavaScript', 'Node.Js', 'Firebase', 'Tailwind CSS'],
        features: [
            'Augmented Reality 3D room visualization & Virtual Reality floorplan tours',
            'Admin portal with predictive & descriptive analytics',
            'Cross-platform tenant mobile app with Firebase',
            'Used AI Chatbot for guest/non-tenant inquiries'
        ],
        link: '',
        year: '2025-2026',
        featured: true,
    },
    {
        num: '02',
        title: 'VenaCare',
        category: 'Mobile App',
        desc: 'AI healthcare app for varicose vein severity assessment, CEAP classification, scan history, and wearable vibration therapy control.',
        tags: ['Flutter', 'Node.Js', 'Firebase'],
        features: [
            'Varicose vein severity assessment & CEAP classification',
            'Scan history tracking & health monitoring',
            'Wearable vibration therapy device control',
        ],
        link: '#',
        year: '2026',
        featured: true,
    },
    {
        num: '03',
        title: 'Supremo Barber Shop',
        category: 'Web App',
        desc: 'A Queuing Management System with a Marketing website for a barber shop with real-time live queuing app for the customers.',
        tags: ['Next.js', 'Tailwind CSS', 'Node.js', 'Firebase'],
        features: [
            'Real-time live queue management & customer status',
            'Barber shop marketing landing page',
            'Automated queue ticket tracking & updates',
        ],
        link: '#',
        year: '2026',
        featured: true,
    },
]

// Additional projects displayed on the "View More / All Projects" page (excluding the first 3 featured projects)
export const MORE_PROJECTS: Project[] = [
    {
        num: '04',
        title: 'SJ Homes',
        category: 'Web App',
        desc: 'A subdivision and community management platform featuring interactive GIS lot mapping with MapLibre & GeoJSON, resident administration, and facility booking.',
        tags: ['Laravel', 'React 18', 'Tailwind CSS', 'MySQL', 'MapLibre'],
        features: [
            'Interactive subdivision GIS lot mapping powered by MapLibre',
            'Facility booking & community event management system',
            'Homeowner and resident portal with administrative dashboard',
        ],
        link: '#',
        year: '2026',
    },
    {
        num: '05',
        title: 'RecruitFlow',
        category: 'Web App',
        desc: 'An end-to-end applicant tracking and candidate matching platform featuring automated resume parsing, interactive hiring pipelines, AI job-match scoring, and interview scheduling.',
        tags: ['Laravel', 'React 19', 'Tailwind CSS', 'MySQL', 'Vite', 'Recharts'],
        features: [
            'Interactive candidate pipeline & automated resume parsing engine',
            'AI job-match scoring with candidate timeline & communication management',
            'Interview scheduling with automated reminders & HR analytics portal',
        ],
        link: '#',
        year: '2026',
    },
]

export const ALL_PROJECTS: Project[] = [
    ...PROJECTS,
    ...MORE_PROJECTS,
]
