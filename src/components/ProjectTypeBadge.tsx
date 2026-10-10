import type { Project } from '../data/portfolioData'

export default function ProjectTypeBadge({ project }: { project: Project }) {
    if (!project.projectType) return null
    return <span className="project-type-badge">{project.projectType}</span>
}
