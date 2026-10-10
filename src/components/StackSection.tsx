import type { CSSProperties } from 'react'
import SectionLabel from './SectionLabel'
import { STACK_GROUPS } from '../data/portfolioData'
import './sections-design.css'

export default function StackSection() {
    return (
        <section id="stack" className="page-section stack-section" aria-labelledby="stack-heading">
            <div className="page-container">
                <header className="stack-heading page-enter">
                    <SectionLabel num="02" label="Stack" />
                    <h1 id="stack-heading" className="page-heading">
                        Tools I use for work.
                    </h1>
                </header>

                <div className="stack-grid">
                    {STACK_GROUPS.map((group, index) => (
                        <article
                            key={group.label}
                            className="stack-group reveal-on-scroll"
                            style={{ '--reveal-delay': `${index * 50}ms` } as CSSProperties}
                        >
                            <h2 className="stack-group-heading">{group.label}</h2>
                            <ul className="stack-items">
                                {group.items.map((item) => (
                                    <li key={item} className="stack-item">{item}</li>
                                ))}
                            </ul>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}
