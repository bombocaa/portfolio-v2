import { useState } from 'react'

const NAV_LINKS = ['Home', 'Experience', 'Stack', 'Projects', 'Contact']

const EXPERIENCE = [
    {
        role: 'Front End Developer Intern',
        company: 'Company Name',
        period: '2024 — Present',
        desc: 'Describe your responsibilities, technologies used, and key contributions. What did you ship? What did you learn?',
        tags: ['React', 'TypeScript', 'UI/UX'],
    },
    {
        role: 'UI Developer',
        company: 'Studio / Freelance',
        period: '2023 — 2024',
        desc: 'Another role, project, or freelance engagement. Focus on impact — what changed because you were there?',
        tags: ['Next.js', 'Tailwind', 'Framer Motion'],
    },
    {
        role: 'Design & Dev',
        company: 'University Project',
        period: '2022 — 2023',
        desc: 'Academic or side project that shows range. Mention collaborators, scope, outcome, or any recognition received.',
        tags: ['HTML/CSS', 'JavaScript', 'Design'],
    },
]

const STACK_GROUPS = [
    {
        label: 'Languages',
        items: ['HTML', 'CSS', 'JavaScript', 'TypeScript'],
    },
    {
        label: 'Frameworks',
        items: ['React', 'Next.js', 'Vue', 'Astro'],
    },
    {
        label: 'Styling',
        items: ['Tailwind CSS', 'CSS Modules', 'Framer Motion', 'GSAP'],
    },
    {
        label: 'Tooling',
        items: ['Vite', 'Webpack', 'Git', 'Vercel'],
    },
    {
        label: 'Design',
        items: ['UI/UX', 'Storybook', 'Zeplin'],
    },
    {
        label: 'Other',
        items: ['REST APIs', 'GraphQL', 'Accessibility', 'Performance'],
    },
]

const PROJECTS = [
    {
        num: '01',
        title: 'Project Title One',
        desc: 'A short description of what this project does, what problem it solves, and what makes it interesting technically or visually.',
        tags: ['React', 'TypeScript', 'API'],
        link: '#',
        year: '2025',
    },
    {
        num: '02',
        title: 'Project Title Two',
        desc: 'Describe the stack, your role, and any notable design or engineering decisions. Link to live site or GitHub.',
        tags: ['Next.js', 'Tailwind', 'Vercel'],
        link: '#',
        year: '2024',
    },
    {
        num: '03',
        title: 'Project Title Three',
        desc: 'A component library, open-source contribution, design system, or any work that demonstrates craft and attention to detail.',
        tags: ['CSS', 'Animation', 'Design'],
        link: '#',
        year: '2024',
    },
    {
        num: '04',
        title: 'Project Title Four',
        desc: 'Experiment, side project, or hackathon entry. Show that you build for fun, not just for work.',
        tags: ['JavaScript', 'Canvas', 'WebGL'],
        link: '#',
        year: '2023',
    },
]

function EditableText({
    placeholder,
    className,
    style,
    multiline,
    rows,
}: {
    placeholder: string
    className?: string
    style?: React.CSSProperties
    multiline?: boolean
    rows?: number
}) {
    if (multiline) {
        return (
            <textarea
                placeholder={placeholder}
                className={`bg-transparent border-none outline-none resize-none placeholder-[#333] w-full ${className ?? ''}`}
                style={style}
                rows={rows ?? 3}
            />
        )
    }
    return (
        <input
            type="text"
            placeholder={placeholder}
            className={`bg-transparent border-none outline-none placeholder-[#333] ${className ?? ''}`}
            style={style}
        />
    )
}

function Tag({ label }: { label: string }) {
    return (
        <span
            className="text-[10px] tracking-[0.15em] uppercase px-2.5 py-1"
            style={{
                border: '1px solid #222',
                color: '#555',
                fontFamily: 'DM Sans, sans-serif',
            }}
        >
            {label}
        </span>
    )
}

function SectionLabel({ num, label }: { num: string; label: string }) {
    return (
        <div className="flex items-center gap-3 mb-4">
            <span className="text-[10px] tracking-[0.3em] uppercase" style={{ color: '#c8f135', fontFamily: 'DM Sans, sans-serif' }}>
                {num}
            </span>
            <div className="w-6 h-px" style={{ backgroundColor: '#222' }} />
            <span className="text-[10px] tracking-[0.3em] uppercase" style={{ color: '#444', fontFamily: 'DM Sans, sans-serif' }}>
                {label}
            </span>
        </div>
    )
}

export default function App() {
    const [hoveredNav, setHoveredNav] = useState<string | null>(null)
    const [hoveredProject, setHoveredProject] = useState<string | null>(null)

    return (
        <div style={{ backgroundColor: '#0a0a0a', color: '#f5f0eb', minHeight: '100vh' }}>

            {/* ── Nav ── */}
            <nav
                className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-10 py-5"
                style={{ borderBottom: '1px solid #141414', backdropFilter: 'blur(16px)', backgroundColor: 'rgba(10,10,10,0.85)' }}
            >
                <EditableText
                    placeholder="your.name"
                    className="text-sm font-medium w-auto"
                    style={{ color: '#f5f0eb', fontFamily: 'DM Serif Display, serif', fontStyle: 'italic', maxWidth: '180px', fontSize: '17px' }}
                />
                <div className="hidden md:flex items-center gap-10">
                    {NAV_LINKS.map((link) => (
                        <a
                            key={link}
                            href={`#${link.toLowerCase()}`}
                            className="text-[11px] tracking-[0.22em] uppercase transition-colors duration-200"
                            style={{
                                color: hoveredNav === link ? '#f5f0eb' : '#444',
                                fontFamily: 'DM Sans, sans-serif',
                            }}
                            onMouseEnter={() => setHoveredNav(link)}
                            onMouseLeave={() => setHoveredNav(null)}
                        >
                            {link}
                        </a>
                    ))}
                </div>
                <div
                    className="text-[11px] tracking-[0.22em] uppercase px-4 py-2 transition-colors duration-200 cursor-pointer"
                    style={{ border: '1px solid #222', color: '#555', fontFamily: 'DM Sans, sans-serif' }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = '#c8f135'
                        e.currentTarget.style.color = '#c8f135'
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = '#222'
                        e.currentTarget.style.color = '#555'
                    }}
                >
                    Resume
                </div>
            </nav>

            {/* ── Home ── */}
            <section id="home" className="relative min-h-screen flex flex-col justify-center px-10 pt-28 pb-20">
                {/* Faint background number */}
                <div
                    className="absolute right-8 bottom-12 select-none pointer-events-none leading-none"
                    style={{ fontFamily: 'DM Serif Display, serif', fontSize: 'clamp(160px, 30vw, 400px)', color: '#0f0f0f', lineHeight: 1 }}
                >
                    FE
                </div>

                <div style={{ maxWidth: '900px' }}>
                    <SectionLabel num="—" label="Front End Developer" />

                    <h1 style={{ fontFamily: 'DM Serif Display, serif', fontSize: 'clamp(56px, 9vw, 130px)', lineHeight: 0.95, letterSpacing: '-0.025em', color: '#f5f0eb', marginBottom: '8px' }}>
                        <EditableText
                            placeholder="Your Name"
                            className="block w-full"
                            style={{ fontFamily: 'DM Serif Display, serif', fontSize: 'inherit', lineHeight: 'inherit', letterSpacing: 'inherit', color: '#f5f0eb' }}
                        />
                    </h1>

                    <h2 style={{ fontFamily: 'DM Serif Display, serif', fontSize: 'clamp(40px, 6.5vw, 96px)', lineHeight: 1, letterSpacing: '-0.02em', color: '#2a2a2a', fontStyle: 'italic', marginBottom: '40px' }}>
                        <EditableText
                            placeholder="Building for the web."
                            className="block w-full"
                            style={{ fontFamily: 'DM Serif Display, serif', fontSize: 'inherit', lineHeight: 'inherit', letterSpacing: 'inherit', color: '#2a2a2a', fontStyle: 'italic' }}
                        />
                    </h2>

                    <div className="flex items-start gap-12">
                        <div style={{ maxWidth: '480px' }}>
                            <EditableText
                                placeholder="I craft fast, accessible, and visually precise web interfaces. Focused on the intersection of design and engineering — where pixels meet performance."
                                multiline
                                rows={3}
                                className="text-base leading-relaxed"
                                style={{ color: '#666', fontFamily: 'DM Sans, sans-serif', fontSize: '16px', lineHeight: '1.8' }}
                            />
                        </div>
                        <div className="flex flex-col gap-3 pt-1 flex-shrink-0">
                            <div className="text-[10px] tracking-[0.25em] uppercase" style={{ color: '#333', fontFamily: 'DM Sans, sans-serif' }}>
                                Currently
                            </div>
                            <EditableText
                                placeholder="Open to opportunities"
                                className="text-sm"
                                style={{ color: '#c8f135', fontFamily: 'DM Sans, sans-serif' }}
                            />
                            <EditableText
                                placeholder="Based in — City, Country"
                                className="text-sm"
                                style={{ color: '#555', fontFamily: 'DM Sans, sans-serif' }}
                            />
                        </div>
                    </div>

                    <div className="flex items-center gap-6 mt-14">
                        <a
                            href="#projects"
                            className="text-[11px] tracking-[0.22em] uppercase px-6 py-3 transition-all duration-200"
                            style={{ backgroundColor: '#c8f135', color: '#0a0a0a', fontFamily: 'DM Sans, sans-serif' }}
                            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#d4ff40' }}
                            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#c8f135' }}
                        >
                            View Projects
                        </a>
                        <a
                            href="#contact"
                            className="text-[11px] tracking-[0.22em] uppercase px-6 py-3 transition-all duration-200"
                            style={{ border: '1px solid #222', color: '#555', fontFamily: 'DM Sans, sans-serif' }}
                            onMouseEnter={(e) => { e.currentTarget.style.color = '#f5f0eb'; e.currentTarget.style.borderColor = '#444' }}
                            onMouseLeave={(e) => { e.currentTarget.style.color = '#555'; e.currentTarget.style.borderColor = '#222' }}
                        >
                            Get in Touch
                        </a>
                    </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-px" style={{ backgroundColor: '#141414' }} />
            </section>

            {/* ── Experience ── */}
            <section id="experience" className="px-10 py-28" style={{ borderBottom: '1px solid #141414' }}>
                <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                    <div className="grid gap-20" style={{ gridTemplateColumns: '240px 1fr' }}>
                        <div className="pt-1">
                            <SectionLabel num="01" label="Experience" />
                            <div style={{ fontFamily: 'DM Serif Display, serif', fontSize: 'clamp(28px, 3vw, 44px)', lineHeight: 1.1, letterSpacing: '-0.02em', color: '#f5f0eb' }}>
                                Where I've
                                <br />
                                <span style={{ fontStyle: 'italic', color: '#444' }}>worked.</span>
                            </div>
                        </div>

                        <div className="flex flex-col">
                            {EXPERIENCE.map((exp) => (
                                <div
                                    key={exp.company}
                                    className="group py-8 transition-colors duration-200 cursor-default"
                                    style={{ borderBottom: '1px solid #141414' }}
                                >
                                    <div className="flex items-start justify-between gap-8 mb-3">
                                        <div>
                                            <EditableText
                                                placeholder={exp.role}
                                                className="text-lg font-medium block"
                                                style={{ color: '#f5f0eb', fontFamily: 'DM Sans, sans-serif', fontSize: '18px' }}
                                            />
                                            <EditableText
                                                placeholder={exp.company}
                                                className="text-sm block mt-0.5 w-full"
                                                style={{ color: '#c8f135', fontFamily: 'DM Sans, sans-serif' }}
                                            />
                                        </div>
                                        <div className="flex-shrink-0">
                                            <EditableText
                                                placeholder={exp.period}
                                                className="text-[11px] tracking-[0.15em] uppercase text-right"
                                                style={{ color: '#444', fontFamily: 'DM Sans, sans-serif' }}
                                            />
                                        </div>
                                    </div>
                                    <EditableText
                                        placeholder={exp.desc}
                                        multiline
                                        rows={2}
                                        className="text-sm leading-relaxed mb-4"
                                        style={{ color: '#555', fontFamily: 'DM Sans, sans-serif', fontSize: '14px', lineHeight: '1.75' }}
                                    />
                                    <div className="flex flex-wrap gap-2">
                                        {exp.tags.map((tag) => <Tag key={tag} label={tag} />)}
                                    </div>
                                </div>
                            ))}
                            <div
                                className="py-8 opacity-40"
                                style={{ borderBottom: '1px solid #141414' }}
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-3 h-px" style={{ backgroundColor: '#333' }} />
                                    <span className="text-[11px] tracking-[0.2em] uppercase" style={{ color: '#333', fontFamily: 'DM Sans, sans-serif' }}>
                                        Add more experience
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Stack ── */}
            <section id="stack" className="px-10 py-28" style={{ borderBottom: '1px solid #141414', backgroundColor: '#0c0c0c' }}>
                <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                    <div className="mb-16">
                        <SectionLabel num="02" label="Stack" />
                        <div style={{ fontFamily: 'DM Serif Display, serif', fontSize: 'clamp(32px, 4vw, 56px)', lineHeight: 1.05, letterSpacing: '-0.02em', color: '#f5f0eb' }}>
                            Tools I reach for
                            <span style={{ fontStyle: 'italic', color: '#333' }}> daily.</span>
                        </div>
                    </div>

                    <div className="grid gap-12" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
                        {STACK_GROUPS.map((group) => (
                            <div key={group.label}>
                                <div
                                    className="text-[10px] tracking-[0.3em] uppercase mb-5 pb-4"
                                    style={{ color: '#c8f135', fontFamily: 'DM Sans, sans-serif', borderBottom: '1px solid #181818' }}
                                >
                                    {group.label}
                                </div>
                                <ul className="space-y-3">
                                    {group.items.map((item) => (
                                        <li key={item} className="flex items-center gap-3 group cursor-default">
                                            <div
                                                className="w-1 h-1 rounded-full flex-shrink-0 transition-colors duration-200 group-hover:bg-[#c8f135]"
                                                style={{ backgroundColor: '#222' }}
                                            />
                                            <span
                                                className="text-sm transition-colors duration-200 group-hover:text-[#f5f0eb]"
                                                style={{ color: '#555', fontFamily: 'DM Sans, sans-serif' }}
                                            >
                                                {item}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/* Proficiency bar row */}
                    <div className="mt-20 pt-12" style={{ borderTop: '1px solid #141414' }}>
                        <div className="text-[10px] tracking-[0.3em] uppercase mb-8" style={{ color: '#333', fontFamily: 'DM Sans, sans-serif' }}>
                            Proficiency
                        </div>
                        <div className="flex flex-col gap-4">
                            {[
                                { label: 'React / Next.js', pct: 90 },
                                { label: 'TypeScript', pct: 82 },
                                { label: 'CSS / Tailwind', pct: 95 },
                                { label: 'JavaScript', pct: 88 },
                                { label: 'UI / Design', pct: 76 },
                            ].map((bar) => (
                                <div key={bar.label} className="flex items-center gap-6">
                                    <div className="text-xs w-40 flex-shrink-0" style={{ color: '#555', fontFamily: 'DM Sans, sans-serif' }}>
                                        {bar.label}
                                    </div>
                                    <div className="flex-1 h-px relative" style={{ backgroundColor: '#1a1a1a' }}>
                                        <div
                                            className="absolute left-0 top-0 h-px"
                                            style={{ width: `${bar.pct}%`, backgroundColor: '#c8f135', opacity: 0.6 }}
                                        />
                                    </div>
                                    <div className="text-[10px] w-8 text-right flex-shrink-0" style={{ color: '#333', fontFamily: 'DM Serif Display, serif', fontStyle: 'italic' }}>
                                        {bar.pct}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Projects ── */}
            <section id="projects" className="px-10 py-28" style={{ borderBottom: '1px solid #141414' }}>
                <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                    <div className="flex items-end justify-between mb-16">
                        <div>
                            <SectionLabel num="03" label="Projects" />
                            <div style={{ fontFamily: 'DM Serif Display, serif', fontSize: 'clamp(32px, 4vw, 56px)', lineHeight: 1.05, letterSpacing: '-0.02em', color: '#f5f0eb' }}>
                                Things I've
                                <span style={{ fontStyle: 'italic', color: '#444' }}> built.</span>
                            </div>
                        </div>
                        <div className="text-[11px] tracking-[0.2em] uppercase" style={{ color: '#333', fontFamily: 'DM Sans, sans-serif' }}>
                            {PROJECTS.length} Projects
                        </div>
                    </div>

                    <div className="flex flex-col">
                        {PROJECTS.map((project) => (
                            <div
                                key={project.num}
                                className="group py-10 flex items-start gap-10 transition-all duration-300 cursor-pointer"
                                style={{
                                    borderBottom: '1px solid #141414',
                                    borderTop: '1px solid transparent',
                                    marginTop: '-1px',
                                }}
                                onMouseEnter={() => setHoveredProject(project.num)}
                                onMouseLeave={() => setHoveredProject(null)}
                            >
                                <div
                                    className="flex-shrink-0 pt-1 transition-colors duration-300"
                                    style={{
                                        fontFamily: 'DM Serif Display, serif',
                                        fontSize: '13px',
                                        fontStyle: 'italic',
                                        color: hoveredProject === project.num ? '#c8f135' : '#2a2a2a',
                                    }}
                                >
                                    {project.num}
                                </div>

                                <div className="flex-1 min-w-0">
                                    <div className="flex items-start justify-between gap-6 mb-3">
                                        <EditableText
                                            placeholder={project.title}
                                            className="text-xl font-medium"
                                            style={{
                                                fontFamily: 'DM Serif Display, serif',
                                                fontSize: '22px',
                                                color: hoveredProject === project.num ? '#f5f0eb' : '#888',
                                                transition: 'color 0.3s',
                                            }}
                                        />
                                        <div
                                            className="flex-shrink-0 text-[10px] tracking-[0.2em] uppercase pt-1.5"
                                            style={{ color: '#333', fontFamily: 'DM Sans, sans-serif' }}
                                        >
                                            {project.year}
                                        </div>
                                    </div>
                                    <EditableText
                                        placeholder={project.desc}
                                        multiline
                                        rows={2}
                                        className="text-sm leading-relaxed mb-4"
                                        style={{ color: '#444', fontFamily: 'DM Sans, sans-serif', fontSize: '14px', lineHeight: '1.75', maxWidth: '600px' }}
                                    />
                                    <div className="flex items-center justify-between">
                                        <div className="flex flex-wrap gap-2">
                                            {project.tags.map((tag) => <Tag key={tag} label={tag} />)}
                                        </div>
                                        <div
                                            className="flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase transition-colors duration-300"
                                            style={{ color: hoveredProject === project.num ? '#c8f135' : '#2a2a2a', fontFamily: 'DM Sans, sans-serif' }}
                                        >
                                            <span>View</span>
                                            <span style={{ fontSize: '16px', lineHeight: 1 }}>→</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                        <div
                            className="py-8 opacity-30"
                            style={{ borderBottom: '1px solid #141414' }}
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-3 h-px" style={{ backgroundColor: '#333' }} />
                                <span className="text-[11px] tracking-[0.2em] uppercase" style={{ color: '#333', fontFamily: 'DM Sans, sans-serif' }}>
                                    Add more projects
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Contact ── */}
            <section id="contact" className="px-10 py-32" style={{ borderBottom: '1px solid #141414' }}>
                <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                    <SectionLabel num="04" label="Contact" />

                    <div className="grid gap-20" style={{ gridTemplateColumns: '1fr 1fr', alignItems: 'end' }}>
                        <div>
                            <div style={{ fontFamily: 'DM Serif Display, serif', fontSize: 'clamp(40px, 6vw, 88px)', lineHeight: 1, letterSpacing: '-0.025em', color: '#f5f0eb', marginBottom: '24px' }}>
                                Let's build
                                <br />
                                <span style={{ color: '#c8f135' }}>something</span>
                                <br />
                                <span style={{ fontStyle: 'italic', color: '#2a2a2a' }}>worth using.</span>
                            </div>
                            <p style={{ color: '#444', fontFamily: 'DM Sans, sans-serif', fontSize: '15px', lineHeight: '1.8', maxWidth: '380px' }}>
                                Open to internships, full-time roles, and interesting freelance work. If you're building something and need someone who cares about the front end — reach out.
                            </p>
                        </div>

                        <div className="flex flex-col gap-0">
                            {[
                                { label: 'Email', placeholder: 'your@email.com' },
                                { label: 'GitHub', placeholder: 'github.com/yourhandle' },
                                { label: 'LinkedIn', placeholder: 'linkedin.com/in/yourname' },
                                { label: 'Twitter / X', placeholder: '@yourhandle' },
                            ].map((field) => (
                                <div key={field.label} className="py-5 group" style={{ borderBottom: '1px solid #141414' }}>
                                    <div className="flex items-center justify-between">
                                        <span className="text-[10px] tracking-[0.25em] uppercase w-28 flex-shrink-0" style={{ color: '#333', fontFamily: 'DM Sans, sans-serif' }}>
                                            {field.label}
                                        </span>
                                        <EditableText
                                            placeholder={field.placeholder}
                                            className="text-sm text-right flex-1"
                                            style={{ color: '#888', fontFamily: 'DM Sans, sans-serif' }}
                                        />
                                    </div>
                                </div>
                            ))}
                            <div className="pt-8">
                                <div
                                    className="inline-flex items-center gap-3 text-[11px] tracking-[0.22em] uppercase px-8 py-4 cursor-pointer transition-all duration-200"
                                    style={{ backgroundColor: '#c8f135', color: '#0a0a0a', fontFamily: 'DM Sans, sans-serif' }}
                                    onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#d4ff40' }}
                                    onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#c8f135' }}
                                >
                                    <span>Send a message</span>
                                    <span style={{ fontSize: '16px' }}>→</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Footer ── */}
            <footer className="px-10 py-7 flex items-center justify-between" style={{ borderTop: '1px solid #141414' }}>
                <EditableText
                    placeholder="Your Name — Front End Developer"
                    className="text-[11px] tracking-[0.18em] uppercase"
                    style={{ color: '#2a2a2a', fontFamily: 'DM Sans, sans-serif', maxWidth: '320px' }}
                />
                <span className="text-[11px] tracking-[0.18em] uppercase" style={{ color: '#1e1e1e', fontFamily: 'DM Sans, sans-serif' }}>
                    © 2025
                </span>
            </footer>
        </div>
    )
}
