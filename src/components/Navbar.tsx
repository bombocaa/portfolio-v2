import { useState } from 'react'
import { NAV_LINKS } from '../data/portfolioData'

export default function Navbar() {
    const [hoveredNav, setHoveredNav] = useState<string | null>(null)

    return (
        <nav
            className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-10 py-5"
            style={{ borderBottom: '1px solid #141414', backdropFilter: 'blur(16px)', backgroundColor: 'rgba(10,10,10,0.85)' }}
        >
            <span
                className="text-sm font-medium w-auto"
                style={{ color: '#ffffffff', fontFamily: 'DM Serif Display, serif', fontStyle: 'italic', maxWidth: '180px', fontSize: '17px' }}
            >
                My Portfolio
            </span>
            <div className="hidden md:flex items-center gap-10">
                {NAV_LINKS.map((link) => (
                    <a
                        key={link}
                        href={`#${link.toLowerCase()}`}
                        className="text-[11px] tracking-[0.22em] uppercase transition-colors duration-200"
                        style={{
                            color: hoveredNav === link ? '#f5f0eb' : '#ffffffff',
                            fontFamily: 'DM Sans, sans-serif',
                        }}
                        onMouseEnter={() => setHoveredNav(link)}
                        onMouseLeave={() => setHoveredNav(null)}
                    >
                        {link}
                    </a>
                ))}
            </div>
            <div
                className="text-[11px] tracking-[0.22em] uppercase px-4 py-2 transition-colors duration-200 cursor-pointer"
                style={{ border: '1px solid #222', color: '#ffffffff', fontFamily: 'DM Sans, sans-serif' }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#c8f135'
                    e.currentTarget.style.color = '#c8f135'
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = '#ffffffff'
                    e.currentTarget.style.color = '#ffffffff'
                }}
            >
                Resume
            </div>
        </nav>
    )
}
