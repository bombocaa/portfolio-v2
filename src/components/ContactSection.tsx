import SectionLabel from './SectionLabel'

const CONTACT_FIELDS = [
    { label: 'Email', value: 'jasperdeguito20@gmail.com', href: 'mailto:jasperdeguito20@gmail.com' },
    { label: 'GitHub', value: 'https://github.com/bombocaa', href: 'https://github.com/bombocaa' },
    { label: 'LinkedIn', value: 'www.linkedin.com/in/jasper-deguito-356570393', href: 'https://www.linkedin.com/in/jasper-deguito-356570393' },
]

export default function ContactSection() {
    return (
        <section id="contact" className="px-10 py-32" style={{ borderBottom: '1px solid #141414' }}>
            <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                <SectionLabel num="04" label="Contact" />

                <div className="grid gap-20" style={{ gridTemplateColumns: '1fr 1fr', alignItems: 'end' }}>
                    <div>
                        <div style={{ fontFamily: 'DM Serif Display, serif', fontSize: 'clamp(40px, 6vw, 88px)', lineHeight: 1, letterSpacing: '-0.025em', color: '#f5f0eb', marginBottom: '24px' }}>
                            Let's build
                            <br />
                            <span style={{ color: '#c8f135' }}>something</span>
                            <br />
                            <span style={{ fontStyle: 'italic', color: '#2a2a2a' }}>worth using.</span>
                        </div>
                        <p style={{ color: '#444', fontFamily: 'DM Sans, sans-serif', fontSize: '15px', lineHeight: '1.8', maxWidth: '380px' }}>
                            Open to internships, full-time roles, and interesting freelance work. If you're building something and need someone who cares about the front end — reach out.
                        </p>
                    </div>

                    <div className="flex flex-col gap-0">
                        {CONTACT_FIELDS.map((field) => (
                            <div key={field.label} className="py-5 group" style={{ borderBottom: '1px solid #141414' }}>
                                <div className="flex items-center justify-between">
                                    <span className="text-[10px] tracking-[0.25em] uppercase w-28 flex-shrink-0" style={{ color: '#333', fontFamily: 'DM Sans, sans-serif' }}>
                                        {field.label}
                                    </span>
                                    <a
                                        href={field.href}
                                        target={field.href.startsWith('mailto:') ? '_self' : '_blank'}
                                        rel="noopener noreferrer"
                                        className="text-sm text-right flex-1 transition-colors hover:text-[#c8f135]"
                                        style={{ color: '#888', fontFamily: 'DM Sans, sans-serif' }}
                                    >
                                        {field.value}
                                    </a>
                                </div>
                            </div>
                        ))}
                        <div className="pt-8">
                            <a
                                href="mailto:jasperdeguito20@gmail.com"
                                className="inline-flex items-center gap-3 text-[11px] tracking-[0.22em] uppercase px-8 py-4 cursor-pointer transition-all duration-200"
                                style={{ backgroundColor: '#c8f135', color: '#0a0a0a', fontFamily: 'DM Sans, sans-serif' }}
                                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#d4ff40' }}
                                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#c8f135' }}
                            >
                                <span>Send a message</span>
                                <span style={{ fontSize: '16px' }}>→</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
