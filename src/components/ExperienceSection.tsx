import SectionLabel from './SectionLabel'
import Tag from './Tag'
import { EXPERIENCE } from '../data/portfolioData'

export default function ExperienceSection() {
    return (
        <section id="experience" className="px-10 py-28" style={{ borderBottom: '1px solid #141414' }}>
            <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                <div className="grid gap-20" style={{ gridTemplateColumns: '240px 1fr' }}>
                    <div className="pt-1">
                        <SectionLabel num="01" label="Experience" />
                        <div style={{ fontFamily: 'DM Serif Display, serif', fontSize: 'clamp(28px, 3vw, 44px)', lineHeight: 1.1, letterSpacing: '-0.02em', color: '#f5f0eb' }}>
                            Where I've
                            <br />
                            <span style={{ fontStyle: 'italic', color: '#444' }}>worked.</span>
                        </div>
                    </div>

                    <div className="flex flex-col">
                        {EXPERIENCE.map((exp) => (
                            <div
                                key={exp.company}
                                className="group py-8 transition-colors duration-200 cursor-default"
                                style={{ borderBottom: '1px solid #141414' }}
                            >
                                <div className="flex items-start justify-between gap-8 mb-3">
                                    <div>
                                        <span
                                            className="text-lg font-medium block"
                                            style={{ color: '#f5f0eb', fontFamily: 'DM Sans, sans-serif', fontSize: '18px' }}
                                        >
                                            {exp.role}
                                        </span>
                                        <span
                                            className="text-sm block mt-0.5 w-full"
                                            style={{ color: '#c8f135', fontFamily: 'DM Sans, sans-serif' }}
                                        >
                                            {exp.company}
                                        </span>
                                    </div>
                                    <div className="flex-shrink-0">
                                        <span
                                            className="text-[11px] tracking-[0.15em] uppercase text-right block"
                                            style={{ color: '#444', fontFamily: 'DM Sans, sans-serif' }}
                                        >
                                            {exp.period}
                                        </span>
                                    </div>
                                </div>
                                <p
                                    className="text-sm leading-relaxed mb-4"
                                    style={{ color: '#555', fontFamily: 'DM Sans, sans-serif', fontSize: '14px', lineHeight: '1.75' }}
                                >
                                    {exp.desc}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {exp.tags.map((tag) => <Tag key={tag} label={tag} />)}
                                </div>
                            </div>
                        ))}
                        <div
                            className="py-8 opacity-40"
                            style={{ borderBottom: '1px solid #141414' }}
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-3 h-px" style={{ backgroundColor: '#333' }} />
                                <span className="text-[11px] tracking-[0.2em] uppercase" style={{ color: '#333', fontFamily: 'DM Sans, sans-serif' }}>
                                    Add more experience
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
