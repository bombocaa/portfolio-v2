import type { Project } from '../data/portfolioData'

export default function ProjectContribution({ project }: { project: Project }) {
    return (
        <dl className="project-contribution">
            <div><dt>My role:</dt><dd>{project.role || 'To be added'}</dd></div>
            <div><dt>What I did:</dt><dd>{project.contribution || 'Contribution details to be added.'}</dd></div>
        </dl>
    )
}
