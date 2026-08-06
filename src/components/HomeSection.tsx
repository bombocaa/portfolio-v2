import EditableText from './EditableText'
import SectionLabel from './SectionLabel'

export default function HomeSection() {
    return (
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
    )
}
