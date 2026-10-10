import type { Project } from '../data/portfolioData'

export default function ProjectLiveLink({ project }: { project: Project }) {
    const className = 'text-[11px] tracking-[0.2em] uppercase'
    if (!project.link || project.link === '#') {
        return <span className={className} style={{ color: '#666' }}>View Live ↗</span>
    }

    return (
        <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`${className} text-[#c8f135] hover:underline`}
            aria-label={`View ${project.title} live (opens in a new tab)`}
        >
            View Live ↗
        </a>
    )
}
