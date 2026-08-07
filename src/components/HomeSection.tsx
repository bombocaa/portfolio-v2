import SectionLabel from './SectionLabel'
import homeProfileImg from '../assets/home_profile.jpg'

export default function HomeSection() {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center px-6 md:px-10 pt-28 pb-20">
            <div className="w-full" style={{ maxWidth: '1100px' }}>
                <SectionLabel num="—" label="Front End Developer" />

                <div className="flex items-center justify-between gap-6 mb-12">
                    <h1 style={{ fontFamily: 'DM Serif Display, serif', fontSize: 'clamp(36px, 7vw, 110px)', lineHeight: 0.95, letterSpacing: '-0.025em', color: '#f5f0eb' }}>
                        Jasper Deguito
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
    )
}
