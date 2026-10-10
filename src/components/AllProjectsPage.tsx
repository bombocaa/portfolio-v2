import { ProjectRow } from './ProjectsSection'
import SectionLabel from './SectionLabel'
import Footer from './Footer'
import { MORE_PROJECTS, type Project } from '../data/portfolioData'
import './project-design.css'

interface AllProjectsPageProps {
    onBack: () => void
    onViewProject?: (project: Project) => void
}

export default function AllProjectsPage({ onBack, onViewProject }: AllProjectsPageProps) {
    return (
        <div className="project-page">
            <nav className="project-page-nav" aria-label="Project archive navigation">
                <div className="page-container project-nav-content">
                    <button type="button" onClick={onBack} className="project-nav-brand">Jasper Deguito</button>
                    <button type="button" onClick={onBack} className="text-link">← Back to Projects</button>
                </div>
            </nav>

            <main id="main-content" tabIndex={-1} className="page-section project-archive-main page-enter">
                <div className="page-container">
                    <header className="project-archive-heading reveal-on-scroll">
                        <SectionLabel num="Archive" label="More Projects" />
                        <div className="project-section-heading">
                            <h1 className="page-heading">More Projects.</h1>
                            <span className="project-work-count">{MORE_PROJECTS.length} Works</span>
                        </div>
                        <p className="project-archive-description">An archive of web and app applications and personal projects.</p>
                    </header>

                    {MORE_PROJECTS.length === 0 ? (
                        <div className="project-empty-state">
                            <p>No additional projects in the archive yet.</p>
                            <button type="button" onClick={onBack} className="text-link">← Back to Projects</button>
                        </div>
                    ) : <div className="project-list project-archive-list">{MORE_PROJECTS.map((project) => <ProjectRow key={project.num} project={project} onViewProject={onViewProject} />)}</div>}

                    <div className="project-page-return">
                        <button type="button" onClick={onBack} className="text-link">← Back to Projects</button>
                        <button type="button" onClick={() => window.scrollTo({ top: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' })} className="text-link">Back to Top ↑</button>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}
