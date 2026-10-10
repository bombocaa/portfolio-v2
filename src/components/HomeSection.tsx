import type { MouseEvent } from 'react'
import homeProfileImg from '../assets/home_profile.jpg'

interface HomeSectionProps {
    onNavigate?: (target: string) => void
}

export default function HomeSection({ onNavigate }: HomeSectionProps = {}) {
    const navigate = (event: MouseEvent<HTMLAnchorElement>, target: string) => {
        if (onNavigate && !event.metaKey && !event.ctrlKey && !event.shiftKey && !event.altKey && event.button === 0) {
            event.preventDefault()
            onNavigate(target)
        }
    }

    return (
        <section id="home" className="home-introduction">
            <div className="page-container">
                <div className="introduction-layout page-enter">
                    <div className="introduction-copy">
                        <p className="introduction-role">Full-stack Developer - Web Developer - Frontend Developer</p>
                        <h1 className="introduction-name">Jasper Deguito</h1>
                        <p className="introduction-description">
                            I build, fast, accessible, and visually precise user interfaces. Focused on the user experience,performance and design.
                        </p>
                        <div className="introduction-actions">
                            <a href="/projects" onClick={(event) => navigate(event, 'projects')} className="button button-primary">
                                View Projects
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                            </a>
                            <a href="/contact" onClick={(event) => navigate(event, 'contact')} className="text-link">
                                Get in Touch <span aria-hidden="true">↗</span>
                            </a>
                        </div>
                    </div>
                    <img className="introduction-portrait" src={homeProfileImg} alt="Jasper Deguito" width="2976" height="3360" fetchPriority="high" />
                </div>
                <div className="introduction-details">
                    <p>Based in — Manila, Philippines</p>
                    <p className="introduction-availability"><span>Currently</span><span className="availability-dot" aria-hidden="true" />Open to opportunities</p>
                </div>
            </div>
        </section>
    )
}
