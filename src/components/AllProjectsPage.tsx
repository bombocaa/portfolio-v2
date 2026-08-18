import { useState } from 'react'
import SectionLabel from './SectionLabel'
import Tag from './Tag'
import ProjectModal from './ProjectModal'
import Footer from './Footer'
import { MORE_PROJECTS, Project } from '../data/portfolioData'

interface AllProjectsPageProps {
    onBack: () => void
}

export default function AllProjectsPage({ onBack }: AllProjectsPageProps) {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null)

    return (
        <div style={{ backgroundColor: '#0a0a0a', color: '#f5f0eb', minHeight: '100vh' }}>
            {/* Top Navigation Bar */}
            <nav
                className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 py-5"
                style={{ borderBottom: '1px solid #141414', backdropFilter: 'blur(16px)', backgroundColor: 'rgba(10,10,10,0.85)' }}
            >
                <button
                    type="button"
                    onClick={onBack}
                    className="flex items-center gap-2 text-sm font-medium cursor-pointer transition-colors duration-200 hover:text-[#c8f135]"
                    style={{ color: '#ffffff', fontFamily: 'DM Serif Display, serif', fontStyle: 'italic', fontSize: '17px', background: 'none', border: 'none', padding: 0 }}
                >
                    <span>←</span>
                    <span>Jasper Deguito</span>
                </button>

                <button
                    type="button"
                    onClick={onBack}
                    className="text-[11px] tracking-[0.22em] uppercase px-4 py-2 transition-colors duration-200 cursor-pointer"
                    style={{ border: '1px solid #222', color: '#ffffff', fontFamily: 'DM Sans, sans-serif', background: 'none' }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = '#c8f135'
                        e.currentTarget.style.color = '#c8f135'
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = '#222'
                        e.currentTarget.style.color = '#ffffff'
                    }}
                >
                    ← Back to Home
                </button>
            </nav>

            {/* Main Content Area */}
            <main className="px-6 md:px-10 pt-36 pb-28">
                <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                    {/* Header */}
                    <div className="mb-16">
                        <SectionLabel num="Archive" label="More Projects" />
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-6">
                            <h1 style={{ fontFamily: 'DM Serif Display, serif', fontSize: 'clamp(36px, 5vw, 64px)', lineHeight: 1.05, letterSpacing: '-0.02em', color: '#f5f0eb' }}>
                                More
                                <span style={{ fontStyle: 'italic', color: '#444' }}> Projects.</span>
                            </h1>
                            <div className="text-xs uppercase tracking-[0.2em]" style={{ color: '#666', fontFamily: 'DM Sans, sans-serif' }}>
                                {MORE_PROJECTS.length} Works
                            </div>
                        </div>
                        <p className="text-sm leading-relaxed" style={{ color: '#777', fontFamily: 'DM Sans, sans-serif', maxWidth: '640px', fontSize: '15px' }}>
                            An archive of web and app applications and personal projects.
                        </p>
                    </div>

                    {/* Projects List */}
                    {MORE_PROJECTS.length === 0 ? (
                        <div className="py-20 text-center" style={{ border: '1px dashed #222' }}>
                            <p className="text-sm mb-4" style={{ color: '#666', fontFamily: 'DM Sans, sans-serif' }}>
                                No additional projects in the archive yet.
                            </p>
                            <button
                                type="button"
                                onClick={onBack}
                                className="text-[11px] tracking-[0.2em] uppercase px-4 py-2 cursor-pointer transition-colors"
                                style={{ backgroundColor: '#c8f135', color: '#0a0a0a', fontFamily: 'DM Sans, sans-serif', border: 'none' }}
                            >
                                ← Back to Home
                            </button>
                        </div>
                    ) : (
                        <div className="flex flex-col">
                            {MORE_PROJECTS.map((project) => (
                                <div
                                    key={project.num}
                                    className="group py-10 flex items-start gap-8 md:gap-12 transition-colors duration-200"
                                    style={{
                                        borderBottom: '1px solid #141414',
                                        borderTop: '1px solid transparent',
                                        marginTop: '-1px',
                                    }}
                                >
                                    <div
                                        className="flex-shrink-0 pt-1 text-sm md:text-base font-medium"
                                        style={{ fontFamily: 'DM Serif Display, serif', fontStyle: 'italic', color: '#666' }}
                                    >
                                        {project.num}
                                    </div>

                                    <div className="flex-1 min-w-0">
                                        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 sm:gap-6 mb-3">
                                            <div className="flex items-center gap-3 flex-wrap">
                                                <button
                                                    type="button"
                                                    onClick={() => setSelectedProject(project)}
                                                    className="text-left text-xl font-medium block cursor-pointer transition-colors duration-200 hover:text-[#c8f135]"
                                                    style={{ fontFamily: 'DM Serif Display, serif', fontSize: '22px', color: '#f5f0eb', background: 'none', border: 'none', padding: 0 }}
                                                >
                                                    {project.title}
                                                </button>
                                                {(project.category || project.type) && (
                                                    <span className="text-[9px] tracking-[0.2em] uppercase px-2 py-0.5" style={{ border: '1px solid #222', color: '#888', fontFamily: 'DM Sans, sans-serif' }}>
                                                        {project.category || project.type}
                                                    </span>
                                                )}
                                            </div>
                                            <div className="flex-shrink-0 text-[10px] tracking-[0.2em] uppercase pt-1" style={{ color: '#888', fontFamily: 'DM Sans, sans-serif' }}>
                                                {project.year}
                                            </div>
                                        </div>

                                        <p className="text-sm leading-relaxed mb-5" style={{ color: '#999', fontFamily: 'DM Sans, sans-serif', fontSize: '14px', lineHeight: '1.75', maxWidth: '750px' }}>
                                            {project.desc}
                                        </p>

                                        {project.features && project.features.length > 0 && (
                                            <div className="mb-5 pl-4" style={{ borderLeft: '2px solid #222' }}>
                                                <ul className="text-xs leading-relaxed flex flex-col gap-1" style={{ color: '#666', fontFamily: 'DM Sans, sans-serif' }}>
                                                    {project.features.slice(0, 2).map((feat, idx) => (
                                                        <li key={idx} className="list-disc list-inside">
                                                            {feat}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}

                                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                            <div className="flex flex-wrap gap-2">
                                                {project.tags.map((tag) => (
                                                    <Tag key={tag} label={tag} />
                                                ))}
                                            </div>

                                            <div className="flex items-center gap-5">
                                                <button
                                                    type="button"
                                                    onClick={() => setSelectedProject(project)}
                                                    className="flex items-center gap-1.5 text-[11px] tracking-[0.2em] uppercase cursor-pointer transition-colors duration-300 hover:text-[#c8f135]"
                                                    style={{ color: '#ffffff', fontFamily: 'DM Sans, sans-serif', background: 'none', border: 'none', padding: 0 }}
                                                >
                                                    <span>View Details →</span>
                                                </button>

                                                {project.link && project.link !== '#' && (
                                                    <a
                                                        href={project.link}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-[11px] tracking-[0.2em] uppercase text-[#c8f135] hover:underline"
                                                        style={{ fontFamily: 'DM Sans, sans-serif' }}
                                                    >
                                                        Live Link ↗
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Back to top / return button */}
                    <div className="mt-16 pt-8 flex items-center justify-between" style={{ borderTop: '1px solid #141414' }}>
                        <button
                            type="button"
                            onClick={onBack}
                            className="inline-flex items-center gap-2 text-[11px] tracking-[0.22em] uppercase px-6 py-3 cursor-pointer transition-all duration-200 hover:text-[#0a0a0a]"
                            style={{ backgroundColor: '#c8f135', color: '#0a0a0a', fontFamily: 'DM Sans, sans-serif', border: 'none' }}
                        >
                            <span>← Back to Home</span>
                        </button>

                        <button
                            type="button"
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            className="text-[10px] tracking-[0.25em] uppercase cursor-pointer transition-colors hover:text-[#c8f135]"
                            style={{ color: '#555', fontFamily: 'DM Sans, sans-serif', background: 'none', border: 'none' }}
                        >
                            Back to Top ↑
                        </button>
                    </div>
                </div>
            </main>

            {/* Modal */}
            <ProjectModal
                project={selectedProject}
                onClose={() => setSelectedProject(null)}
            />

            {/* Footer */}
            <Footer />
        </div>
    )
}
