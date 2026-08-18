import { useState } from 'react'
import { NAV_LINKS } from '../data/portfolioData'

interface NavbarProps {
    onNavigate?: (target: string) => void
}

export default function Navbar({ onNavigate }: NavbarProps = {}) {
    const [hoveredNav, setHoveredNav] = useState<string | null>(null)

    return (
        <nav
            className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 py-5"
            style={{ borderBottom: '1px solid #141414', backdropFilter: 'blur(16px)', backgroundColor: 'rgba(10,10,10,0.85)' }}
        >
            <a
                href="#home"
                onClick={(e) => {
                    if (onNavigate) {
                        e.preventDefault()
                        onNavigate('home')
                    }
                }}
                className="text-sm font-medium w-auto cursor-pointer transition-colors hover:text-[#c8f135]"
                style={{ color: '#ffffffff', fontFamily: 'DM Serif Display, serif', fontStyle: 'italic', maxWidth: '180px', fontSize: '17px', textDecoration: 'none' }}
            >
                My Portfolio
            </a>
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
            <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
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
            </a>
        </nav>
    )
}
