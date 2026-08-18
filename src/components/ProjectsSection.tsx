import { useState } from 'react'
import SectionLabel from './SectionLabel'
import Tag from './Tag'
import ProjectModal from './ProjectModal'
import { PROJECTS, Project } from '../data/portfolioData'

interface ProjectsSectionProps {
    onViewAll?: () => void
}

export default function ProjectsSection({ onViewAll }: ProjectsSectionProps) {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null)

    return (
        <section id="projects" className="px-6 md:px-10 py-28" style={{ borderBottom: '1px solid #141414' }}>
            <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
                    <div>
                        <SectionLabel num="03" label="Projects" />
                        <div style={{ fontFamily: 'DM Serif Display, serif', fontSize: 'clamp(32px, 4vw, 56px)', lineHeight: 1.05, letterSpacing: '-0.02em', color: '#f5f0eb' }}>
                            Things I've
                            <span style={{ fontStyle: 'italic', color: '#444' }}> built.</span>
                        </div>
                    </div>

                    {onViewAll && (
                        <button
                            type="button"
                            onClick={onViewAll}
                            className="hidden sm:inline-flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase cursor-pointer transition-colors duration-200 hover:text-[#c8f135]"
                            style={{ color: '#888', fontFamily: 'DM Sans, sans-serif', background: 'none', border: 'none', padding: 0 }}
                        >
                            <span>View All Projects →</span>
                        </button>
                    )}
                </div>

                <div className="flex flex-col">
                    {PROJECTS.map((project) => (
                        <div
                            key={project.num}
                            className="group py-10 flex items-start gap-8 md:gap-10"
                            style={{
                                borderBottom: '1px solid #141414',
                                borderTop: '1px solid transparent',
                                marginTop: '-1px',
                            }}>
                            <div className="flex-shrink-0 pt-1" style={{ fontFamily: 'DM Serif Display, serif', fontSize: '13px', fontStyle: 'italic', color: '#888' }} >
                                {project.num}
                            </div>

                            <div className="flex-1 min-w-0">
                                <div className="flex items-start justify-between gap-6 mb-3">
                                    <button
                                        type="button"
                                        onClick={() => setSelectedProject(project)}
                                        className="text-left text-xl font-medium block cursor-pointer transition-colors hover:text-[#c8f135]"
                                        style={{ fontFamily: 'DM Serif Display, serif', fontSize: '22px', background: 'none', border: 'none', padding: 0, color: '#f5f0eb' }}
                                    >
                                        {project.title}
                                    </button>
                                    <div className="flex-shrink-0 text-[10px] tracking-[0.2em] uppercase pt-1.5" style={{ color: '#ffffff', fontFamily: 'DM Sans, sans-serif' }}>
                                        {project.year}
                                    </div>
                                </div>

                                <p className="text-sm leading-relaxed mb-4" style={{ color: '#999', fontFamily: 'DM Sans, sans-serif', fontSize: '14px', lineHeight: '1.75', maxWidth: '600px' }}>
                                    {project.desc}
                                </p>

                                <div className="flex items-center justify-between gap-4 flex-wrap">
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map((tag) => <Tag key={tag} label={tag} />)}
                                    </div>

                                    <button
                                        type="button"
                                        onClick={() => setSelectedProject(project)}
                                        className="flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase cursor-pointer transition-colors duration-300 hover:text-[#c8f135]"
                                        style={{ color: '#ffffff', fontFamily: 'DM Sans, sans-serif', background: 'none', border: 'none', padding: 0 }}
                                    >
                                        <span>View Details →</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View More Button Container */}
                {onViewAll && (
                    <div className="mt-14 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                        <p className="text-xs" style={{ color: '#555', fontFamily: 'DM Sans, sans-serif' }}>
                            Looking for more? Browse the complete archive of past experiments and web applications.
                        </p>
                        <button
                            type="button"
                            onClick={onViewAll}
                            className="inline-flex items-center gap-3 text-[11px] tracking-[0.22em] uppercase px-6 py-3.5 cursor-pointer transition-all duration-200"
                            style={{
                                border: '1px solid #222',
                                color: '#f5f0eb',
                                fontFamily: 'DM Sans, sans-serif',
                                backgroundColor: 'transparent',
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.borderColor = '#c8f135'
                                e.currentTarget.style.color = '#c8f135'
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.borderColor = '#222'
                                e.currentTarget.style.color = '#f5f0eb'
                            }}
                        >
                            <span>View More Projects</span>
                            <span style={{ fontSize: '14px' }}>→</span>
                        </button>
                    </div>
                )}
            </div>

            {/* Modal */}
            <ProjectModal
                project={selectedProject}
                onClose={() => setSelectedProject(null)}
            />
        </section>
    )
}
