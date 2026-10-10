import type { CSSProperties } from 'react'
import SectionLabel from './SectionLabel'
import './sections-design.css'

const CONTACT_FIELDS = [
    { label: 'Email', value: 'jasperdeguito20@gmail.com', href: 'mailto:jasperdeguito20@gmail.com' },
    { label: 'GitHub', value: 'https://github.com/bombocaa', href: 'https://github.com/bombocaa' },
    { label: 'LinkedIn', value: 'www.linkedin.com/in/jasper-deguito-356570393', href: 'https://www.linkedin.com/in/jasper-deguito-356570393' },
]

export default function ContactSection() {
    return (
        <section id="contact" className="page-section contact-section" aria-labelledby="contact-heading">
            <div className="page-container contact-layout">
                <header className="contact-intro page-enter">
                    <SectionLabel num="04" label="Contact" />
                    <h1 id="contact-heading" className="page-heading">
                        Let's build something worth using.
                    </h1>
                    <p className="contact-description">
                        Open to internships, full-time roles, and interesting freelance work. If you're building something and need someone who cares about the front end — reach out.
                    </p>
                </header>

                <div className="contact-actions">
                    <div className="contact-links">
                        {CONTACT_FIELDS.map((field, index) => (
                            <a
                                key={field.label}
                                href={field.href}
                                target={field.href.startsWith('mailto:') ? '_self' : '_blank'}
                                rel="noopener noreferrer"
                                className={`contact-link contact-link-${field.label.toLowerCase()} reveal-on-scroll`}
                                style={{ '--reveal-delay': `${index * 50}ms` } as CSSProperties}
                            >
                                <span className="contact-link-label">{field.label}</span>
                                <span className="contact-link-value">{field.value}</span>
                            </a>
                        ))}
                    </div>
                    <div className="contact-message reveal-on-scroll">
                        <a href="mailto:jasperdeguito20@gmail.com" className="button button-primary">
                            <span>Send a message</span>
                            <span aria-hidden="true">→</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
