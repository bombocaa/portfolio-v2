import Tag from './Tag'
import Footer from './Footer'
import { Project } from '../data/portfolioData'

interface ProjectDetailPageProps {
    project: Project
    onBack: () => void
}

export default function ProjectDetailPage({ project, onBack }: ProjectDetailPageProps) {
    const categoryText = project.category || project.type

    return (
        <div style={{ backgroundColor: '#0a0a0a', color: '#f5f0eb', minHeight: '100vh' }}>
            {/* Navbar */}
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
                    <span>Back to Projects</span>
                </button>

                <div className="hidden md:flex items-center gap-6">
                    {project.link && project.link !== '#' && (
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[11px] tracking-[0.22em] uppercase px-4 py-2 transition-all duration-200 cursor-pointer"
                            style={{ backgroundColor: '#c8f135', color: '#0a0a0a', fontFamily: 'DM Sans, sans-serif', textDecoration: 'none' }}
                        >
                            View Live →
                        </a>
                    )}
                    
                </div>
            </nav>

            <main className="px-6 md:px-10" style={{ paddingTop: '120px', paddingBottom: '80px' }}>
                <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                    {/* Project Header */}
                    <div className="pt-12 pb-10" style={{ borderBottom: '1px solid #141414' }}>
                        <div className="flex items-center gap-3 mb-3">
                            <span className="text-[10px] tracking-[0.3em] uppercase" style={{ color: '#c8f135', fontFamily: 'DM Sans, sans-serif' }}>
                                {project.num}
                            </span>
                            <div className="w-6 h-px" style={{ backgroundColor: '#222' }} />
                            {categoryText && (
                                <span className="text-[10px] tracking-[0.2em] uppercase px-2 py-0.5" style={{ border: '1px solid #222', color: '#888', fontFamily: 'DM Sans, sans-serif' }}>
                                    {categoryText}
                                </span>
                            )}
                            <span className="text-[10px] tracking-[0.2em] uppercase" style={{ color: '#555', fontFamily: 'DM Sans, sans-serif' }}>
                                {project.year}
                            </span>
                        </div>
                        <h1 style={{ fontFamily: 'DM Serif Display, serif', fontSize: 'clamp(32px, 5vw, 56px)', lineHeight: 1.05, letterSpacing: '-0.02em', color: '#f5f0eb' }}>
                            {project.title}
                        </h1>
                    </div>

                    {/* Two-column details layout */}
                    <div className="grid grid-cols-1 md:grid-cols-[1fr_320px] gap-12 md:gap-20 pt-10">
                        {/* Left column — Description & Features */}
                        <div>
                            <div className="mb-10">
                                <div className="text-[10px] tracking-[0.25em] uppercase mb-4" style={{ color: '#444', fontFamily: 'DM Sans, sans-serif' }}>
                                    Overview
                                </div>
                                <p className="text-base leading-relaxed" style={{ color: '#aaa', fontFamily: 'DM Sans, sans-serif', fontSize: '16px', lineHeight: '1.85' }}>
                                    {project.desc}
                                </p>
                            </div>

                            {project.features && project.features.length > 0 && (
                                <div className="mb-10">
                                    <div className="text-[10px] tracking-[0.25em] uppercase mb-5" style={{ color: '#444', fontFamily: 'DM Sans, sans-serif' }}>
                                        Key Features
                                    </div>
                                    <div className="flex flex-col gap-4">
                                        {project.features.map((feature, idx) => (
                                            <div key={idx} className="flex items-start gap-4">
                                                <div
                                                    className="flex-shrink-0 w-6 h-6 flex items-center justify-center mt-0.5"
                                                    style={{ border: '1px solid #222', color: '#c8f135', fontFamily: 'DM Serif Display, serif', fontSize: '11px', fontStyle: 'italic' }}
                                                >
                                                    {String(idx + 1).padStart(2, '0')}
                                                </div>
                                                <p className="text-sm leading-relaxed" style={{ color: '#999', fontFamily: 'DM Sans, sans-serif' }}>
                                                    {feature}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Action buttons — mobile only */}
                            <div className="flex md:hidden flex-wrap items-center gap-4 mt-6 mb-10">
                                {project.link && project.link !== '#' && (
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-[11px] tracking-[0.22em] uppercase px-6 py-3 transition-all duration-200"
                                        style={{ backgroundColor: '#c8f135', color: '#0a0a0a', fontFamily: 'DM Sans, sans-serif', textDecoration: 'none' }}
                                    >
                                        View Live →
                                    </a>
                                )}
                                
                            </div>
                        </div>

                        {/* Right column — Sidebar metadata */}
                        <div>
                            <div className="mb-8">
                                <div className="text-[10px] tracking-[0.25em] uppercase mb-4 pb-3" style={{ color: '#444', fontFamily: 'DM Sans, sans-serif', borderBottom: '1px solid #181818' }}>
                                    Technologies
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <Tag key={tag} label={tag} />
                                    ))}
                                </div>
                            </div>

                            {categoryText && (
                                <div className="mb-8">
                                    <div className="text-[10px] tracking-[0.25em] uppercase mb-3 pb-3" style={{ color: '#444', fontFamily: 'DM Sans, sans-serif', borderBottom: '1px solid #181818' }}>
                                        Type
                                    </div>
                                    <span className="text-sm" style={{ color: '#888', fontFamily: 'DM Sans, sans-serif' }}>
                                        {categoryText}
                                    </span>
                                </div>
                            )}

                            <div className="mb-8">
                                <div className="text-[10px] tracking-[0.25em] uppercase mb-3 pb-3" style={{ color: '#444', fontFamily: 'DM Sans, sans-serif', borderBottom: '1px solid #181818' }}>
                                    Year
                                </div>
                                <span className="text-sm" style={{ color: '#888', fontFamily: 'DM Sans, sans-serif' }}>
                                    {project.year}
                                </span>
                            </div>

                            {/* Desktop action buttons */}
                            <div className="hidden md:flex flex-col gap-3 mt-10">
                                {project.link && project.link !== '#' && (
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center gap-2 text-[11px] tracking-[0.22em] uppercase px-6 py-3.5 transition-all duration-200 w-full text-center"
                                        style={{ backgroundColor: '#c8f135', color: '#0a0a0a', fontFamily: 'DM Sans, sans-serif', textDecoration: 'none' }}
                                        onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#d4ff40' }}
                                        onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#c8f135' }}
                                    >
                                        View Live →
                                    </a>
                                )}
                                
                            </div>
                        </div>
                    </div>

                    {/* Back button */}
                    <div className="mt-20 pt-8 flex items-center justify-between" style={{ borderTop: '1px solid #141414' }}>
                        <button
                            type="button"
                            onClick={onBack}
                            className="inline-flex items-center gap-2 text-[11px] tracking-[0.22em] uppercase px-6 py-3 cursor-pointer transition-all duration-200"
                            style={{ backgroundColor: '#c8f135', color: '#0a0a0a', fontFamily: 'DM Sans, sans-serif', border: 'none' }}
                            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#d4ff40' }}
                            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#c8f135' }}
                        >
                            <span>← Back to Projects</span>
                        </button>

                        <button
                            type="button"
                            onClick={() => window.scrollTo(0, 0)}
                            className="text-[10px] tracking-[0.25em] uppercase cursor-pointer transition-colors hover:text-[#c8f135]"
                            style={{ color: '#555', fontFamily: 'DM Sans, sans-serif', background: 'none', border: 'none' }}
                        >
                            Back to Top ↑
                        </button>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
}
