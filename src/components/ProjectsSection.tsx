import ProjectTypeBadge from './ProjectTypeBadge'
import ProjectLiveLink from './ProjectLiveLink'
import ProjectContribution from './ProjectContribution'
import ProjectVisual, { hasProjectVisual } from './ProjectVisual'
import SectionLabel from './SectionLabel'
import Tag from './Tag'
import { PROJECTS, type Project } from '../data/portfolioData'
import './project-design.css'

interface ProjectsSectionProps {
    onViewAll?: () => void
    onViewProject?: (project: Project) => void
    compact?: boolean
}

export function ProjectRow({ project, onViewProject, compact = false, highlight = false }: { project: Project; onViewProject?: (project: Project) => void; compact?: boolean; highlight?: boolean }) {
    const hasPreview = hasProjectVisual(project)
    const Title = compact ? 'h3' : 'h2'

    return (
        <article className={'project-row reveal-on-scroll' + (highlight ? ' project-row-highlight' : '') + (hasPreview ? '' : ' project-row-without-preview')}>
            {hasPreview && (onViewProject ? (
                <button type="button" className="project-preview-button" onClick={() => onViewProject(project)} aria-label={'View ' + project.title + ' project details'}>
                    <ProjectVisual project={project} />
                </button>
            ) : <ProjectVisual project={project} />)}

            <div className="project-row-content">
                <div className="project-row-meta">
                    <span>{project.num}</span>
                    <ProjectTypeBadge project={project} />
                    {(project.category || project.type) && <span>{project.category || project.type}</span>}
                    <span className="project-row-year">{project.year}</span>
                </div>
                <Title className="project-row-title">
                    {onViewProject ? <button type="button" onClick={() => onViewProject(project)}>{project.title}</button> : project.title}
                </Title>
                <p className="project-description">{project.desc}</p>
                <ProjectContribution project={project} />
                <div className="project-tags">{project.tags.map((tag) => <Tag key={tag} label={tag} />)}</div>
                <div className="project-row-actions">
                    {onViewProject && <button type="button" onClick={() => onViewProject(project)} className="text-link">View Project ↗</button>}
                    <ProjectLiveLink project={project} />
                </div>
            </div>
        </article>
    )
}

export default function ProjectsSection({ onViewAll, onViewProject, compact = false }: ProjectsSectionProps) {
    const Heading = compact ? 'h2' : 'h1'

    return (
        <section id="projects" className={'project-section' + (compact ? ' project-section-compact' : ' page-section')}>
            <div className="page-container">
                <div className="project-section-heading reveal-on-scroll">
                    <div>
                        {!compact && <SectionLabel num="03" label="Projects" />}
                        <Heading className="page-heading">Things I've built.</Heading>
                    </div>
                    {onViewAll && <button type="button" onClick={onViewAll} className="text-link">View All Projects ↗</button>}
                </div>

                <div className="project-list">{PROJECTS.map((project, index) => <ProjectRow key={project.num} project={project} onViewProject={onViewProject} compact={compact} highlight={index === 0} />)}</div>

                {onViewAll && (
                    <div className="project-archive-prompt reveal-on-scroll">
                        <p>Looking for more? Browse the complete archive of past experiments and web applications.</p>
                        <button type="button" onClick={onViewAll} className="text-link">View More Projects ↗</button>
                    </div>
                )}
            </div>
        </section>
    )
}
