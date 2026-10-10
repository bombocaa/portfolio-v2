import type { Project } from '../data/portfolioData'

export default function ProjectContribution({ project }: { project: Project }) {
    return (
        <div className="mb-4 border-l-2 border-[#c8f135]/40 pl-3" style={{ fontFamily: 'DM Sans, sans-serif' }}>
            <p className="text-xs leading-relaxed text-[#c8f135]">
                <span className="text-[#888]">My role: </span>{project.role || 'To be added'}
            </p>
            <p className="mt-1 text-xs leading-relaxed text-[#aaa]">
                <span className="text-[#888]">What I did: </span>{project.contribution || 'Contribution details to be added.'}
            </p>
        </div>
    )
}
