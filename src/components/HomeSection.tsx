import SectionLabel from './SectionLabel'
import VectorWordmarkRaster from './VectorWordmarkRaster'
import homeProfileImg from '../assets/home_profile.jpg'

interface HomeSectionProps {
    onNavigate?: (target: string) => void
}

export default function HomeSection({ onNavigate }: HomeSectionProps = {}) {
    return (
        <section id="home" className="relative min-h-[calc(100vh-80px)] flex items-center justify-center px-6 md:px-10 pt-28 pb-20">
            <div className="w-full" style={{ maxWidth: '1100px' }}>
                <SectionLabel num="—" label="Full-stack Developer - Web Developer - Frontend Developer" />

                <div className="flex items-center justify-between gap-6 mb-12">
                    <h1 className="min-w-0 flex-1" style={{ height: 'clamp(90px, 16vw, 220px)' }}>
                        <span className="sr-only">Jasper Deguito</span>
                        <VectorWordmarkRaster
                            text="Jasper Deguito"
                            font={{ fontFamily: 'DM Serif Display, serif', fontWeight: 400, fontSize: 200, letterSpacing: '-0.025em' }}
                            background="transparent"
                            textColor="#f5f0eb"
                            shade="#625e58"
                            accent="rgba(200, 241, 53, 0.5)"
                            grid={{ size: 10, gap: 20, labels: true }}
                        />
                    </h1>
                    <div className="flex-shrink-0">
                        <img
                            src={homeProfileImg}
                            alt="Hero"
                            className="w-20 h-20 sm:w-40 sm:h-40 md:w-60 md:h-60 rounded-full object-cover"
                        />
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row items-start gap-6 sm:gap-12">
                    <div style={{ maxWidth: '480px' }}>
                        <p
                            className="text-base leading-relaxed"
                            style={{ color: '#666', fontFamily: 'DM Sans, sans-serif', fontSize: '16px', lineHeight: '1.8' }}
                        >
                            I build, fast, accessible, and visually precise user interfaces. Focused on the user experience,performance and design.
                        </p>
                    </div>
                    <div className="flex flex-col gap-3 pt-1 flex-shrink-0">
                        <div className="text-[10px] tracking-[0.25em] uppercase" style={{ color: '#333', fontFamily: 'DM Sans, sans-serif' }}>
                            Currently
                        </div>
                        <span
                            className="text-sm"
                            style={{ color: '#c8f135', fontFamily: 'DM Sans, sans-serif' }}
                        >
                            Open to opportunities
                        </span>
                        <span
                            className="text-sm"
                            style={{ color: '#555', fontFamily: 'DM Sans, sans-serif' }}
                        >
                            Based in — Manila, Philippines
                        </span>
                    </div>
                </div>

                <div className="flex items-center gap-6 mt-14">
                    <a
                        href="/projects"
                        onClick={(e) => {
                            if (onNavigate) {
                                e.preventDefault()
                                onNavigate('projects')
                            }
                        }}
                        className="text-[11px] tracking-[0.22em] uppercase px-6 py-3 transition-all duration-200"
                        style={{ backgroundColor: '#c8f135', color: '#0a0a0a', fontFamily: 'DM Sans, sans-serif' }}
                        onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#d4ff40' }}
                        onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#c8f135' }}
                    >
                        View Projects
                    </a>
                    <a
                        href="/contact"
                        onClick={(e) => {
                            if (onNavigate) {
                                e.preventDefault()
                                onNavigate('contact')
                            }
                        }}
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
    )
}
