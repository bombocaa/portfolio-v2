import { useEffect, useRef, useState } from 'react'
import type { MouseEvent } from 'react'
import { NAV_LINKS } from '../data/portfolioData'

interface NavbarProps {
    activePage?: string
    onNavigate?: (target: string) => void
}

export default function Navbar({ activePage = 'home', onNavigate }: NavbarProps = {}) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const toggleRef = useRef<HTMLButtonElement>(null)

    useEffect(() => {
        setMobileMenuOpen(false)
    }, [activePage])

    useEffect(() => {
        if (!mobileMenuOpen) return
        const closeOnEscape = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setMobileMenuOpen(false)
                toggleRef.current?.focus()
            }
        }
        const closeOnDesktop = () => {
            if (window.innerWidth >= 900) setMobileMenuOpen(false)
        }
        document.addEventListener('keydown', closeOnEscape)
        window.addEventListener('resize', closeOnDesktop)
        return () => {
            document.removeEventListener('keydown', closeOnEscape)
            window.removeEventListener('resize', closeOnDesktop)
        }
    }, [mobileMenuOpen])

    const handleLinkClick = (event: MouseEvent<HTMLAnchorElement>, target: string) => {
        setMobileMenuOpen(false)
        if (onNavigate && !event.metaKey && !event.ctrlKey && !event.shiftKey && !event.altKey && event.button === 0) {
            event.preventDefault()
            onNavigate(target.toLowerCase())
            if (target.toLowerCase() === activePage) {
                document.getElementById('main-content')?.focus({ preventScroll: true })
            }
        }
    }

    const isActive = (target: string) => activePage === target || ((activePage === 'all-projects' || activePage === 'project-detail') && target === 'projects')

    return (
        <header className="site-header">
            <nav className="navbar" aria-label="Main navigation">
                <a href="/" onClick={(event) => handleLinkClick(event, 'home')} className="nav-brand">My Portfolio</a>
                <div className="desktop-nav">
                    {NAV_LINKS.map((link) => {
                        const target = link.toLowerCase()
                        return (
                            <a key={link} href={target === 'home' ? '/' : `/${target}`} onClick={(event) => handleLinkClick(event, target)} className={`nav-link${isActive(target) ? ' is-active' : ''}`} aria-current={isActive(target) ? 'page' : undefined}>{link}</a>
                        )
                    })}
                </div>
                <div className="nav-actions">
                    <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="nav-resume">Resume <span aria-hidden="true">↗</span></a>
                    <button ref={toggleRef} type="button" onClick={() => setMobileMenuOpen((open) => !open)} className={`menu-toggle${mobileMenuOpen ? ' is-open' : ''}`} aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={mobileMenuOpen} aria-controls="mobile-navigation">
                        <span /><span />
                    </button>
                </div>
                {mobileMenuOpen && (
                    <div id="mobile-navigation" className="mobile-nav">
                        {NAV_LINKS.map((link) => {
                            const target = link.toLowerCase()
                            return (
                                <a key={link} href={target === 'home' ? '/' : `/${target}`} onClick={(event) => handleLinkClick(event, target)} className={`mobile-nav-link${isActive(target) ? ' is-active' : ''}`} aria-current={isActive(target) ? 'page' : undefined}>{link}</a>
                            )
                        })}
                    </div>
                )}
            </nav>
        </header>
    )
}
