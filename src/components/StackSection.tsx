import SectionLabel from './SectionLabel'
import { STACK_GROUPS } from '../data/portfolioData'

const PROFICIENCY_ITEMS = [
    { label: 'React / Next.js', pct: 90 },
    { label: 'TypeScript', pct: 82 },
    { label: 'CSS / Tailwind', pct: 95 },
    { label: 'JavaScript', pct: 88 },
    { label: 'UI / Design', pct: 76 },
]

export default function StackSection() {
    return (
        <section id="stack" className="px-10 py-28" style={{ borderBottom: '1px solid #141414', backgroundColor: '#0c0c0c' }}>
            <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                <div className="mb-16">
                    <SectionLabel num="02" label="Stack" />
                    <div style={{ fontFamily: 'DM Serif Display, serif', fontSize: 'clamp(32px, 4vw, 56px)', lineHeight: 1.05, letterSpacing: '-0.02em', color: '#f5f0eb' }}>
                        Tools I reach for
                        <span style={{ fontStyle: 'italic', color: '#333' }}> daily.</span>
                    </div>
                </div>

                <div className="grid gap-12" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
                    {STACK_GROUPS.map((group) => (
                        <div key={group.label}>
                            <div
                                className="text-[10px] tracking-[0.3em] uppercase mb-5 pb-4"
                                style={{ color: '#c8f135', fontFamily: 'DM Sans, sans-serif', borderBottom: '1px solid #181818' }}
                            >
                                {group.label}
                            </div>
                            <ul className="space-y-3">
                                {group.items.map((item) => (
                                    <li key={item} className="flex items-center gap-3 group cursor-default">
                                        <div
                                            className="w-1 h-1 rounded-full flex-shrink-0 transition-colors duration-200 group-hover:bg-[#c8f135]"
                                            style={{ backgroundColor: '#222' }}
                                        />
                                        <span
                                            className="text-sm transition-colors duration-200 group-hover:text-[#f5f0eb]"
                                            style={{ color: '#555', fontFamily: 'DM Sans, sans-serif' }}
                                        >
                                            {item}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Proficiency bar row */}
                <div className="mt-20 pt-12" style={{ borderTop: '1px solid #141414' }}>
                    <div className="text-[10px] tracking-[0.3em] uppercase mb-8" style={{ color: '#333', fontFamily: 'DM Sans, sans-serif' }}>
                        Proficiency
                    </div>
                    <div className="flex flex-col gap-4">
                        {PROFICIENCY_ITEMS.map((bar) => (
                            <div key={bar.label} className="flex items-center gap-6">
                                <div className="text-xs w-40 flex-shrink-0" style={{ color: '#555', fontFamily: 'DM Sans, sans-serif' }}>
                                    {bar.label}
                                </div>
                                <div className="flex-1 h-px relative" style={{ backgroundColor: '#1a1a1a' }}>
                                    <div
                                        className="absolute left-0 top-0 h-px"
                                        style={{ width: `${bar.pct}%`, backgroundColor: '#c8f135', opacity: 0.6 }}
                                    />
                                </div>
                                <div className="text-[10px] w-8 text-right flex-shrink-0" style={{ color: '#333', fontFamily: 'DM Serif Display, serif', fontStyle: 'italic' }}>
                                    {bar.pct}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
