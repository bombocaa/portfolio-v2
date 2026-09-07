import { useState } from 'react'
import { NAV_LINKS } from '../data/portfolioData'

interface NavbarProps {
    activePage?: string
    onNavigate?: (target: string) => void
}

export default function Navbar({ activePage = 'home', onNavigate }: NavbarProps = {}) {
    const [hoveredNav, setHoveredNav] = useState<string | null>(null)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
        e.preventDefault()
        setMobileMenuOpen(false)
        if (onNavigate) {
            onNavigate(target.toLowerCase())
        }
    }

    return (
        <nav
            className="fixed top-0 left-0 right-0 z-50 px-6 md:px-10 py-5"
            style={{ borderBottom: '1px solid #141414', backdropFilter: 'blur(16px)', backgroundColor: 'rgba(10,10,10,0.85)' }}
        >
            <div className="flex items-center justify-between">
                <a
                    href="/"
                    onClick={(e) => handleLinkClick(e, 'home')}
                    className="text-sm font-medium w-auto cursor-pointer transition-colors hover:text-[#c8f135]"
                    style={{ color: '#ffffff', fontFamily: 'DM Serif Display, serif', fontStyle: 'italic', maxWidth: '180px', fontSize: '17px', textDecoration: 'none' }}
                >
                    My Portfolio
                </a>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-10">
                    {NAV_LINKS.map((link) => {
                        const linkKey = link.toLowerCase()
                        const isActive = activePage === linkKey || (activePage === 'all-projects' && linkKey === 'projects')
                        return (
                            <a
                                key={link}
                                href={linkKey === 'home' ? '/' : `/${linkKey}`}
                                onClick={(e) => handleLinkClick(e, linkKey)}
                                className="text-[11px] tracking-[0.22em] uppercase transition-colors duration-200 cursor-pointer"
                                style={{
                                    color: isActive ? '#c8f135' : hoveredNav === link ? '#f5f0eb' : '#ffffff',
                                    fontFamily: 'DM Sans, sans-serif',
                                    borderBottom: isActive ? '1px solid #c8f135' : '1px solid transparent',
                                    paddingBottom: '2px',
                                }}
                                onMouseEnter={() => setHoveredNav(link)}
                                onMouseLeave={() => setHoveredNav(null)}
                            >
                                {link}
                            </a>
                        )
                    })}
                </div>

                <div className="flex items-center gap-4">
                    <a
                        href="/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[11px] tracking-[0.22em] uppercase px-4 py-2 transition-colors duration-200 cursor-pointer hidden sm:inline-block"
                        style={{ border: '1px solid #222', color: '#ffffff', fontFamily: 'DM Sans, sans-serif' }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.borderColor = '#c8f135'
                            e.currentTarget.style.color = '#c8f135'
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.borderColor = '#ffffff'
                            e.currentTarget.style.color = '#ffffff'
                        }}
                    >
                        Resume
                    </a>

                    {/* Mobile Menu Toggle Button */}
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden flex flex-col items-center justify-center gap-1.5 p-2"
                        style={{ background: 'none', border: 'none', color: '#ffffff' }}
                        aria-label="Toggle navigation menu"
                    >
                        <span className="w-5 h-0.5 transition-all" style={{ backgroundColor: mobileMenuOpen ? '#c8f135' : '#ffffff', transform: mobileMenuOpen ? 'rotate(45deg) translate(3px, 5px)' : 'none' }} />
                        <span className="w-5 h-0.5 transition-all" style={{ backgroundColor: mobileMenuOpen ? '#c8f135' : '#ffffff', opacity: mobileMenuOpen ? 0 : 1 }} />
                        <span className="w-5 h-0.5 transition-all" style={{ backgroundColor: mobileMenuOpen ? '#c8f135' : '#ffffff', transform: mobileMenuOpen ? 'rotate(-45deg) translate(3px, -5px)' : 'none' }} />
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Drawer */}
            {mobileMenuOpen && (
                <div
                    className="md:hidden flex flex-col gap-5 pt-6 pb-4 mt-4"
                    style={{ borderTop: '1px solid #141414' }}
                >
                    {NAV_LINKS.map((link) => {
                        const linkKey = link.toLowerCase()
                        const isActive = activePage === linkKey
                        return (
                            <a
                                key={link}
                                href={linkKey === 'home' ? '/' : `/${linkKey}`}
                                onClick={(e) => handleLinkClick(e, linkKey)}
                                className="text-xs tracking-[0.22em] uppercase transition-colors"
                                style={{
                                    color: isActive ? '#c8f135' : '#ffffff',
                                    fontFamily: 'DM Sans, sans-serif',
                                }}
                            >
                                {link}
                            </a>
                        )
                    })}
                    <a
                        href="/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs tracking-[0.22em] uppercase pt-2 inline-block"
                        style={{ color: '#c8f135', fontFamily: 'DM Sans, sans-serif' }}
                    >
                        Resume ↗
                    </a>
                </div>
            )}
        </nav>
    )
}
