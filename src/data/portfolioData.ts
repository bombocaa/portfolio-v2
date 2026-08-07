import tglobalImg from '../assets/tglobal-project-mockup.png'
import venacareImg from '../assets/venacare-project-mockup.png'
import supremoImg from '../assets/supremo-project-mockup.png'

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

export const PROJECTS = [
    {
        num: '01',
        title: 'T-Global Residences Hub',
        image: tglobalImg,
        desc: 'A complete dormitory management system with a Marketing website, Tenant app.',
        tags: ['React.Js', 'JavaScript', 'Node.Js', 'Firebase'],
        link: '',
        year: '2025-2026',
    },
    {
        num: '02',
        title: 'VenaCare',
        image: venacareImg,
        desc: 'AI healthcare app for varicose vein severity assessment, CEAP classification, scan history, and wearable vibration therapy control.',
        tags: ['Flutter', 'Node.Js', 'Firebase'],
        link: '#',
        year: '2026',
    },
    {
        num: '03',
        title: 'Supremo Barber Shop',
        image: supremoImg,
        desc: 'A Queuing Management System with a Marketing website for a barber shop with real-time live queuing app for the customers.',
        tags: ['React.js', 'Tailwind CSS', 'Node.js', 'Firebase'],
        link: '#',
        year: '2026',
    },
]
