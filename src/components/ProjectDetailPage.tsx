import ProjectTypeBadge from './ProjectTypeBadge'
import Tag from './Tag'
import ProjectContribution from './ProjectContribution'
import ProjectLiveLink from './ProjectLiveLink'
import ProjectVisual, { hasProjectVisual } from './ProjectVisual'
import Footer from './Footer'
import type { Project } from '../data/portfolioData'
import './project-design.css'

interface ProjectDetailPageProps {
    project: Project
    onBack: () => void
}

const galleryAssets = import.meta.glob<string>('../assets/{tglobal,supremo,recruitflow}-*.{png,jpg}', {
    eager: true,
    query: '?url',
    import: 'default',
})

const galleryPrefixes: Record<string, string> = { '01': 'tglobal', '03': 'supremo', '05': 'recruitflow' }

export default function ProjectDetailPage({ project, onBack }: ProjectDetailPageProps) {
    const categoryText = project.category || project.type
    const galleryPrefix = galleryPrefixes[project.num]
    const gallery = galleryPrefix ? Object.entries(galleryAssets).filter(([path]) => path.includes('/' + galleryPrefix + '-') && !path.includes('project-mockup')) : []
    const hasPreview = hasProjectVisual(project)
    const hasFeatures = Boolean(project.features?.length)

    return (
        <div className="project-page">
            <nav className="project-page-nav" aria-label="Project navigation">
                <div className="page-container project-nav-content">
                    <button type="button" onClick={onBack} className="project-nav-brand">← Back to Projects</button>
                    {project.link && project.link !== '#' && <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-link">View Live ↗</a>}
                </div>
            </nav>

            <main id="main-content" tabIndex={-1} className="page-section project-detail-main page-enter">
                <div className="page-container">
                    <header className="project-detail-header reveal-on-scroll">
                        <h1 className="project-detail-title">{project.title}</h1>
                        <div className="project-detail-meta">
                            <span>{project.num}</span>
                            <ProjectTypeBadge project={project} />
                            {categoryText && <span>{categoryText}</span>}
                            <span>{project.year}</span>
                        </div>
                    </header>

                    {hasPreview && <div className="project-detail-preview reveal-on-scroll"><ProjectVisual project={project} hero /></div>}

                    <div className="project-detail-intro">
                        <section className="project-overview reveal-on-scroll" aria-labelledby="project-overview-heading">
                            <h2 id="project-overview-heading" className="project-detail-label">Overview</h2>
                            <p>{project.desc}</p>
                            <ProjectContribution project={project} />
                            <div className="project-overview-actions"><ProjectLiveLink project={project} /></div>
                        </section>
                    </div>

                    <div className={'project-detail-grid' + (hasFeatures ? '' : ' project-detail-grid-without-features')}>
                        {hasFeatures && (
                            <section className="project-features reveal-on-scroll" aria-labelledby="project-features-heading">
                                <h2 id="project-features-heading" className="project-detail-label">Key Features</h2>
                                <ul className="project-feature-list">{project.features?.map((feature) => <li key={feature}>{feature}</li>)}</ul>
                            </section>
                        )}

                        <aside className="project-detail-metadata reveal-on-scroll" aria-label="Project details">
                            <div className="project-metadata-block">
                                <h2 className="project-detail-label">Technologies</h2>
                                <div className="project-tags">{project.tags.map((tag) => <Tag key={tag} label={tag} />)}</div>
                            </div>
                            <div className="project-metadata-facts">
                                {categoryText && <div className="project-metadata-block"><h2 className="project-detail-label">Type</h2><p>{categoryText}</p></div>}
                                <div className="project-metadata-block"><h2 className="project-detail-label">Year</h2><p>{project.year}</p></div>
                            </div>
                        </aside>
                    </div>

                    {gallery.length > 0 && (
                        <section className="project-gallery reveal-on-scroll" aria-labelledby="project-gallery-heading">
                            <h2 id="project-gallery-heading" className="project-detail-label project-gallery-heading">Project Preview</h2>
                            <div className="project-gallery-grid">
                                {gallery.map(([path, image]) => {
                                    const filename = path.split('/').pop() || ''
                                    const label = filename.replace(galleryPrefix + '-', '').replace(/\.(png|jpg)$/, '').replace(/-/g, ' ')
                                    return (
                                        <a key={path} href={image} target="_blank" rel="noopener noreferrer" className="project-gallery-item" aria-label={'Open ' + project.title + ' ' + label + ' screenshot (opens in a new tab)'}>
                                            <div className="project-gallery-image"><img src={image} alt={project.title + ' ' + label} loading="lazy" decoding="async" /></div>
                                            <span className="project-gallery-caption"><span>{label}</span><span aria-hidden="true">↗</span></span>
                                        </a>
                                    )
                                })}
                            </div>
                        </section>
                    )}

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
