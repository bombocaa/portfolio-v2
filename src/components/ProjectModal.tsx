import { useEffect } from 'react'
import Tag from './Tag'
import { Project } from '../data/portfolioData'

interface ProjectModalProps {
    project: Project | null
    onClose: () => void
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
    useEffect(() => {
        if (project) {
            document.body.style.overflow = 'hidden'
            const handleKeyDown = (e: KeyboardEvent) => {
                if (e.key === 'Escape') {
                    onClose()
                }
            }
            window.addEventListener('keydown', handleKeyDown)
            return () => {
                document.body.style.overflow = 'unset'
                window.removeEventListener('keydown', handleKeyDown)
            }
        } else {
            document.body.style.overflow = 'unset'
        }
    }, [project, onClose])

    if (!project) return null

    const categoryText = project.category || project.type

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={onClose}
        >
            <div
                className="relative w-full max-w-4xl p-8 rounded-lg max-h-[90vh] overflow-y-auto"
                style={{ backgroundColor: '#0a0a0a', border: '1px solid #222', color: '#f5f0eb' }}
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    type="button"
                    onClick={onClose}
                    className="absolute top-4 right-4 text-xl cursor-pointer hover:text-[#c8f135]"
                    style={{ color: '#888', background: 'none', border: 'none' }}
                >
                    ✕
                </button>

                <div className="text-xs uppercase tracking-widest mb-2 flex items-center gap-2" style={{ color: '#c8f135', fontFamily: 'DM Sans, sans-serif' }}>
                    <span>Project Details</span>
                    {categoryText && (
                        <>
                            <span>•</span>
                            <span>{categoryText}</span>
                        </>
                    )}
                    <span>•</span>
                    <span>{project.year}</span>
                </div>

                <h3 className="text-2xl font-semibold mb-6" style={{ fontFamily: 'DM Serif Display, serif' }}>
                    {project.title}
                </h3>

                <div className="flex flex-col md:flex-row gap-8 items-start">
                    {project.image && (
                        <div className="w-full md:w-1/2 overflow-hidden rounded-md flex-shrink-0" style={{ height: '400px', border: '1px solid #222' }}>
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    )}

                    <div className="flex-1 flex flex-col justify-between h-full">
                        <div>
                            <p className="text-sm leading-relaxed mb-6" style={{ color: '#aaa', fontFamily: 'DM Sans, sans-serif' }}>
                                {project.desc}
                            </p>

                            <div className="mb-6">
                                <div className="text-xs uppercase tracking-wider mb-2" style={{ color: '#666', fontFamily: 'DM Sans, sans-serif' }}>
                                    Technologies Used
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <Tag key={tag} label={tag} />
                                    ))}
                                </div>
                            </div>

                            {project.features && project.features.length > 0 && (
                                <div className="mb-6">
                                    <div className="text-xs uppercase tracking-wider mb-2" style={{ color: '#666', fontFamily: 'DM Sans, sans-serif' }}>
                                        Key Features
                                    </div>
                                    <ul className="list-disc list-inside text-xs leading-relaxed flex flex-col gap-1.5" style={{ color: '#aaa', fontFamily: 'DM Sans, sans-serif' }}>
                                        {project.features.map((feature, idx) => (
                                            <li key={idx}>{feature}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>

                        <div className="flex items-center gap-4 mt-4">
                            {project.link && project.link !== '#' && (
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block px-5 py-2.5 text-xs uppercase tracking-widest transition-colors w-fit"
                                    style={{ backgroundColor: '#c8f135', color: '#0a0a0a', fontFamily: 'DM Sans, sans-serif' }}
                                >
                                    Visit Project →
                                </a>
                            )}
                            {project.github && (
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block px-5 py-2.5 text-xs uppercase tracking-widest transition-colors w-fit"
                                    style={{ border: '1px solid #333', color: '#f5f0eb', fontFamily: 'DM Sans, sans-serif' }}
                                >
                                    Source Code →
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
