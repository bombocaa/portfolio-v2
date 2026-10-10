import type { Project } from '../data/portfolioData'

export default function ProjectTypeBadge({ project }: { project: Project }) {
    if (!project.projectType) return null

    return (
        <span className="border border-[#c8f135]/25 px-2 py-0.5 text-[9px] uppercase tracking-[0.2em] text-[#c8f135]" style={{ fontFamily: 'DM Sans, sans-serif' }}>
            {project.projectType}
        </span>
    )
}
