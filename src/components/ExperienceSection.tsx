import type { CSSProperties } from 'react'
import SectionLabel from './SectionLabel'
import Tag from './Tag'
import { EXPERIENCE } from '../data/portfolioData'
import './sections-design.css'

export default function ExperienceSection() {
    return (
        <section id="experience" className="page-section experience-section" aria-labelledby="experience-heading">
            <div className="page-container experience-layout">
                <header className="experience-heading page-enter">
                    <SectionLabel num="01" label="Experience" />
                    <h1 id="experience-heading" className="page-heading">
                        Professional experience.
                    </h1>
                </header>

                <div className="experience-list">
                    {EXPERIENCE.map((exp, index) => (
                        <article
                            key={exp.company}
                            className="experience-entry reveal-on-scroll"
                            style={{ '--reveal-delay': `${index * 50}ms` } as CSSProperties}
                        >
                            <div className="experience-details">
                                <div className="experience-entry-header">
                                    <div>
                                        <h2 className="experience-role">{exp.role}</h2>
                                        <p className="experience-company">{exp.company}</p>
                                    </div>
                                    <p className="experience-period">{exp.period}</p>
                                </div>
                                <p className="experience-description">{exp.desc}</p>
                                <div className="experience-tags">
                                    {exp.tags.map((tag) => <Tag key={tag} label={tag} />)}
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}
