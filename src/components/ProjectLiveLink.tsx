import { useEffect, useRef, useState } from 'react'
import type { Project } from '../data/portfolioData'

export default function ProjectLiveLink({ project }: { project: Project }) {
    if (project.simulatorVideo) return <SimulatorVideo project={project} />
    if (project.livePages?.length) return <LivePageDropdown project={project} />

    if (!project.link || project.link === '#') {
        return <span className="project-live-unavailable" aria-disabled="true">View Live ↗</span>
    }

    return (
        <div className="project-live-access">
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-live-action" aria-label={`View ${project.title} live (opens in a new tab)`}>
                View Live ↗
            </a>
            {project.demoLogin && (
                <div className="demo-credentials">
                    <p className="demo-credentials-label">Demo login details</p>
                    <p>Email: <span>{project.demoLogin.email}</span></p>
                    <p>Password: <span>{project.demoLogin.password}</span></p>
                </div>
            )}
        </div>
    )
}

function SimulatorVideo({ project }: { project: Project }) {
    const dialogRef = useRef<HTMLDialogElement>(null)
    const [open, setOpen] = useState(false)

    return (
        <>
            <button type="button" className="project-live-action" onClick={() => {
                setOpen(true)
                dialogRef.current?.showModal()
            }}>View Simulator ▷</button>
            <dialog
                ref={dialogRef}
                aria-label={`${project.title} simulator walkthrough`}
                className="simulator-dialog"
                onClose={() => setOpen(false)}
                onClick={(event) => {
                    if (event.target === event.currentTarget) {
                        const bounds = event.currentTarget.getBoundingClientRect()
                        if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) {
                            dialogRef.current?.close()
                        }
                    }
                }}
            >
                <div className="simulator-dialog-header">
                    <h2>{project.title} Simulator</h2>
                    <button type="button" onClick={() => dialogRef.current?.close()} className="project-live-action">Close ✕</button>
                </div>
                {open && (
                    <video src={project.simulatorVideo} controls playsInline preload="metadata" className="simulator-video">
                        Your browser does not support video playback. <a href={project.simulatorVideo}>Download the walkthrough</a>.
                    </video>
                )}
            </dialog>
        </>
    )
}

function LivePageDropdown({ project }: { project: Project }) {
    const dropdownRef = useRef<HTMLDetailsElement>(null)

    useEffect(() => {
        const closeOutside = (event: PointerEvent) => {
            if (event.target instanceof Node && !dropdownRef.current?.contains(event.target)) {
                dropdownRef.current?.removeAttribute('open')
            }
        }
        const closeOnEscape = (event: KeyboardEvent) => {
            if (event.key === 'Escape' && dropdownRef.current?.open) {
                dropdownRef.current.removeAttribute('open')
                dropdownRef.current.querySelector('summary')?.focus()
            }
        }
        document.addEventListener('pointerdown', closeOutside)
        document.addEventListener('keydown', closeOnEscape)
        return () => {
            document.removeEventListener('pointerdown', closeOutside)
            document.removeEventListener('keydown', closeOnEscape)
        }
    }, [])

    return (
        <details ref={dropdownRef} className="live-pages-choice">
            <summary className="project-live-action live-page-summary" aria-label={`Choose a live page for ${project.title}`}>
                View Live <span aria-hidden="true">▾</span>
            </summary>
            <div className="live-page-picker">
                <p className="live-page-picker-label">Choose a live page</p>
                <div className="live-page-options">
                    {project.livePages?.map((page) => {
                        const content = (
                            <>
                                <img src={page.image} alt={`${page.label} preview`} className="live-page-preview" loading="lazy" />
                                <div className="live-page-caption">
                                    <span>{page.label}</span>
                                    <span className={`live-page-state${page.url ? ' is-available' : ''}`}>{page.url ? 'View Live ↗' : 'Coming soon'}</span>
                                </div>
                            </>
                        )
                        return page.url ? (
                            <a key={page.label} href={page.url} target="_blank" rel="noopener noreferrer" className="live-page-option" aria-label={`View ${project.title} ${page.label} live (opens in a new tab)`} onClick={() => dropdownRef.current?.removeAttribute('open')}>
                                {content}
                            </a>
                        ) : (
                            <div key={page.label} aria-disabled="true" className="live-page-option is-unavailable">{content}</div>
                        )
                    })}
                </div>
            </div>
        </details>
    )
}
