
import tglobalMarketingPreview from '../assets/tglobal-marketing-home.png'
import tglobalAdminPreview from '../assets/tglobal-overview.png'

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
    projectType?: 'Capstone' | 'Commission' | 'Personal Project'
    role?: string
    contribution?: string
    desc: string
    tags: string[]
    features?: string[]
    link?: string
    demoLogin?: { email: string; password: string }
    simulatorVideo?: string
    livePages?: { label: string; image: string; url?: string }[]
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
        projectType: 'Capstone',
        role: 'Frontend Developer · Backend Contributor',
        contribution: 'Built the entire frontend and helped with backend development.',
        category: 'Platform',
        desc: 'A complete dormitory management system with a Marketing website, Tenant app.',
        tags: ['React.Js', 'JavaScript', 'Node.Js', 'Firebase', 'Tailwind CSS'],
        features: [
            'Augmented Reality 3D room visualization & Virtual Reality floorplan tours',
            'Admin portal with predictive & descriptive analytics',
            'Cross-platform tenant mobile app with Firebase',
            'Used AI Chatbot for guest/non-tenant inquiries'
        ],
        link: 'https://tglobal-marketing-side.vercel.app/',
        livePages: [
            { label: 'Marketing Side', image: tglobalMarketingPreview, url: 'https://tglobal-marketing-side.vercel.app/' },
            { label: 'Admin Side', image: tglobalAdminPreview },
        ],
        year: '2025-2026',
        featured: true,
    },
    {
        num: '02',
        title: 'VenaCare',
        projectType: 'Commission',
        role: 'Mobile Developer',
        contribution: 'Developed the mobile side of the application.',
        simulatorVideo: '/videos/venacare-phone-walkthrough.mp4',
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
        projectType: 'Capstone',
        role: 'UI Designer',
        contribution: 'Redesigned the entire system.',
        category: 'Web App',
        desc: 'A Queuing Management System with a Marketing website for a barber shop with real-time live queuing app for the customers.',
        tags: ['Next.js', 'Tailwind CSS', 'Node.js', 'Firebase'],
        features: [
            'Real-time live queue management & customer status',
            'Barber shop marketing landing page',
            'Automated queue ticket tracking & updates',
        ],
        link: 'https://supremo-management-system-8h52.vercel.app/',
        year: '2026',
        featured: true,
    },
]

// Additional projects displayed on the "View More / All Projects" page (excluding the first 3 featured projects)
export const MORE_PROJECTS: Project[] = [
    {
        num: '04',
        title: 'SJ Homes',
        projectType: 'Personal Project',
        role: 'Full-stack Developer',
        contribution: 'Developed both the frontend and backend of the platform.',
        category: 'Web App',
        desc: 'A subdivision and community management platform featuring interactive GIS lot mapping with MapLibre & GeoJSON, resident administration, and facility booking.',
        tags: ['Laravel', 'React 18', 'Tailwind CSS', 'MySQL', 'MapLibre'],
        features: [
            'Interactive subdivision GIS lot mapping powered by MapLibre',
            'Facility booking & community event management system',
            'Homeowner and resident portal with administrative dashboard',
        ],
        link: 'https://sjhomes-subdivision-system-npo7.vercel.app/login',
        demoLogin: { email: 'demo@example.com', password: 'Demo@2026!' },
        year: '2026',
    },
    {
        num: '05',
        title: 'RecruitFlow',
        projectType: 'Personal Project',
        role: 'Full-stack Developer',
        contribution: 'Developed both the frontend and backend of the application.',
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
