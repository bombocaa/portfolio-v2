import SectionLabel from './SectionLabel'
import homeProfileImg from '@/assets/home_profile.jpg'

export default function HomeSection() {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center px-10 pt-28 pb-20">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12 w-full" style={{ maxWidth: '1100px' }}>
                <div className="flex-1" style={{ maxWidth: '900px' }}>
                    <SectionLabel num="—" label="Front End Developer" />

                    <h1 style={{ fontFamily: 'DM Serif Display, serif', fontSize: 'clamp(56px, 9vw, 130px)', lineHeight: 0.95, letterSpacing: '-0.025em', color: '#f5f0eb', marginBottom: '8px' }}>
                        <span className="block w-full"
                            style={{
                                fontFamily: 'DM Serif Display, serif',
                                fontSize: 'inherit',
                                lineHeight: 'inherit',
                                letterSpacing: 'inherit',
                                color: '#f5f0eb',
                                marginBottom: '50px'
                            }}>
                            Jasper Deguito
                        </span>
                    </h1>

                    <div className="flex items-start gap-12">
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

                <div className="flex-shrink-0">
                    <img src={homeProfileImg} alt='Hero' style={{
                        width: '280px',
                        height: '280px',
                        borderRadius: '50%',
                        objectFit: 'cover',
                    }} />
                </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-px" style={{ backgroundColor: '#141414' }} />
        </section>
    )
}
