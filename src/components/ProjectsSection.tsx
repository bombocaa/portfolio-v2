import { useState, useEffect } from 'react'
import SectionLabel from './SectionLabel'
import Tag from './Tag'
import { PROJECTS } from '../data/portfolioData'

export default function ProjectsSection() {
    const [selectedProject, setSelectedProject] = useState<typeof PROJECTS[number] | null>(null)

    useEffect(() => {
        if (selectedProject) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [selectedProject])

    return (
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
                </div>

                <div className="flex flex-col">
                    {PROJECTS.map((project) => (
                        <div
                            key={project.num}
                            className="group py-10 flex items-start gap-10"
                            style={{
                                borderBottom: '1px solid #141414',
                                borderTop: '1px solid transparent',
                                marginTop: '-1px',
                            }}>
                            <div className="flex-shrink-0 pt-1" style={{ fontFamily: 'DM Serif Display, serif', fontSize: '13px', fontStyle: 'italic' }} >
                                {project.num}
                            </div>

                            <div className="flex-1 min-w-0">
                                <div className="flex items-start justify-between gap-6 mb-3">
                                    <span className="text-xl font-medium block" style={{ fontFamily: 'DM Serif Display, serif', fontSize: '22px', }}>
                                        {project.title}
                                    </span>
                                    <div className="flex-shrink-0 text-[10px] tracking-[0.2em] uppercase pt-1.5" style={{ color: '#ffffffff', fontFamily: 'DM Sans, sans-serif' }}>
                                        {project.year}
                                    </div>
                                </div>

                                <p className="text-sm leading-relaxed mb-4" style={{ color: '#ffffffff', fontFamily: 'DM Sans, sans-serif', fontSize: '14px', lineHeight: '1.75', maxWidth: '600px' }}>
                                    {project.desc}
                                </p>

                                <div className="flex items-center justify-between">

                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map((tag) => <Tag key={tag} label={tag} />)}
                                    </div>

                                    <button
                                        type="button"
                                        onClick={() => setSelectedProject(project)}
                                        className="flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase cursor-pointer transition-colors duration-300 hover:text-[#c8f135]"
                                        style={{ color: '#ffffffff', fontFamily: 'DM Sans, sans-serif', background: 'none', border: 'none', padding: 0 }}
                                    >
                                        <span>View →</span>

                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {selectedProject && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
                    onClick={() => setSelectedProject(null)}
                >
                    <div
                        className="relative w-full max-w-4xl p-8 rounded-lg max-h-[90vh] overflow-y-auto"
                        style={{ backgroundColor: '#0a0a0a', border: '1px solid #222', color: '#f5f0eb' }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            type="button"
                            onClick={() => setSelectedProject(null)}
                            className="absolute top-4 right-4 text-xl cursor-pointer hover:text-[#c8f135]"
                            style={{ color: '#888', background: 'none', border: 'none' }}
                        >
                            ✕
                        </button>

                        <div className="text-xs uppercase tracking-widest mb-2" style={{ color: '#c8f135', fontFamily: 'DM Sans, sans-serif' }}>
                            Project Details • {selectedProject.year}
                        </div>

                        <h3 className="text-2xl font-semibold mb-6" style={{ fontFamily: 'DM Serif Display, serif' }}>
                            {selectedProject.title}
                        </h3>

                        <div className="flex flex-col md:flex-row gap-8 items-start">
                            {selectedProject.image && (
                                <div className="w-full md:w-1/2 overflow-hidden rounded-md flex-shrink-0" style={{ height: '400px', border: '1px solid #222' }}>
                                    <img
                                        src={selectedProject.image}
                                        alt={selectedProject.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            )}

                            <div className="flex-1 flex flex-col justify-between h-full">
                                <div>
                                    <p className="text-sm leading-relaxed mb-6" style={{ color: '#aaa', fontFamily: 'DM Sans, sans-serif' }}>
                                        {selectedProject.desc}
                                    </p>

                                    <div className="mb-6">
                                        <div className="text-xs uppercase tracking-wider mb-2" style={{ color: '#666', fontFamily: 'DM Sans, sans-serif' }}>
                                            Technologies Used
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {selectedProject.tags.map((tag) => <Tag key={tag} label={tag} />)}
                                        </div>
                                    </div>

                                    {'features' in selectedProject && selectedProject.features && (
                                        <div className="mb-6">
                                            <div className="text-xs uppercase tracking-wider mb-2" style={{ color: '#666', fontFamily: 'DM Sans, sans-serif' }}>
                                                Key Features
                                            </div>
                                            <ul className="list-disc list-inside text-xs leading-relaxed flex flex-col gap-1.5" style={{ color: '#aaa', fontFamily: 'DM Sans, sans-serif' }}>
                                                {selectedProject.features.map((feature, idx) => (
                                                    <li key={idx}>{feature}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>

                                {selectedProject.link && selectedProject.link !== '#' && (
                                    <a
                                        href={selectedProject.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block px-5 py-2.5 text-xs uppercase tracking-widest transition-colors w-fit"
                                        style={{ backgroundColor: '#c8f135', color: '#0a0a0a', fontFamily: 'DM Sans, sans-serif' }}
                                    >
                                        Visit Project →
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}
