import tglobalLogin from '../assets/tglobal-login.png'
import tglobalWelcome from '../assets/tglobal-welcome.png'
import tglobalOverview from '../assets/tglobal-overview.png'
import tglobalMaintenance from '../assets/tglobal-maintenance.png'
import venacareImg from '../assets/venacare-project-mockup.png'
import supremoHome from '../assets/supremo-home.png'
import supremoApp from '../assets/supremo-app.png'
import supremoDashboard from '../assets/supremo-dashboard.png'
import supremoServices from '../assets/supremo-services.png'
import supremoProducts from '../assets/supremo-products.png'
import supremoBranches from '../assets/supremo-branches.png'
import supremoLogin from '../assets/supremo-login.png'
import supremoWhy from '../assets/supremo-why.png'

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
        role: 'IT Admin - QA Analyst Intern',
        company: 'Ollopa Corporation',
        period: 'December 2025 — Febuary 2026',
        desc: 'Conducted weekly QA testing across 4 company websites to identify and log functional bugs, ensuring optimal site performance. Managed, added, and updated property room listings across web portals to maintain accurate real-time details and availability for users.',
        tags: ['Time Management', 'Organization', 'Teamwork', 'Communication'],
    },
]

export const STACK_GROUPS = [
    {
        label: 'Frontend',
        items: ['HTML', 'CSS', 'React', 'JavaScript', 'Tailwind CSS', 'Vite', 'Vue', 'Next.js'],
    },
    {
        label: 'Backend',
        items: ['PHP', 'Laravel', 'Node.js', 'MySQL', 'REST'],
    },
    {
        label: 'Tools',
        items: ['Git', 'GitHub', 'VS Code', 'Figma', 'Qase'],
    },
]

export interface Project {
    num: string
    title: string
    image?: string
    images?: string[]
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
        image: tglobalOverview,
        images: [
            tglobalLogin,
            tglobalWelcome,
            tglobalOverview,
            tglobalMaintenance,
        ],
        desc: 'A complete dormitory management system with a Marketing website, Tenant app.',
        tags: ['React.Js', 'JavaScript', 'Node.Js', 'Firebase'],
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
        image: venacareImg,
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
        image: supremoHome,
        images: [supremoHome, supremoApp, supremoServices, supremoDashboard, supremoLogin, supremoWhy, supremoServices, supremoProducts, supremoBranches],
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

]

export const ALL_PROJECTS: Project[] = [
    ...PROJECTS,
    ...MORE_PROJECTS,
]
