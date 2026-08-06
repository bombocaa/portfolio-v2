import { useState } from 'react'
import EditableText from './EditableText'
import SectionLabel from './SectionLabel'
import Tag from './Tag'
import { PROJECTS } from '../data/portfolioData'

export default function ProjectsSection() {
    const [hoveredProject, setHoveredProject] = useState<string | null>(null)

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
    )
}
