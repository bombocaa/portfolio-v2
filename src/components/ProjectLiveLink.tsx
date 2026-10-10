import { useEffect, useRef, useState } from 'react'
import type { Project } from '../data/portfolioData'

export default function ProjectLiveLink({ project }: { project: Project }) {
    if (project.simulatorVideo) return <SimulatorVideo project={project} />
    if (project.livePages?.length) return <LivePageDropdown project={project} />

    const className = 'text-[11px] tracking-[0.2em] uppercase'
    if (!project.link || project.link === '#') {
        return <span className={className} style={{ color: '#666' }}>View Live ↗</span>
    }

    return (
        <div className="flex min-w-0 flex-col items-start gap-3">
            <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`${className} text-[#c8f135] hover:underline`}
                aria-label={`View ${project.title} live (opens in a new tab)`}
            >
                View Live ↗
            </a>
            {project.demoLogin && (
                <div className="max-w-full border border-[#2a2a2a] bg-[#111] p-3 text-xs leading-relaxed text-[#aaa]">
                    <p className="mb-2 text-[10px] uppercase tracking-[0.15em] text-[#888]">Demo login details</p>
                    <p>Email: <span className="select-all break-all text-[#f5f0eb]">{project.demoLogin.email}</span></p>
                    <p>Password: <span className="select-all break-all text-[#f5f0eb]">{project.demoLogin.password}</span></p>
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
            <button
                type="button"
                className="cursor-pointer text-[11px] tracking-[0.2em] uppercase text-[#c8f135] hover:underline"
                onClick={() => {
                    setOpen(true)
                    dialogRef.current?.showModal()
                }}
            >
                View Simulator ▷
            </button>
            <dialog
                ref={dialogRef}
                aria-label={`${project.title} simulator walkthrough`}
                className="fixed inset-0 m-auto max-h-[90dvh] w-[calc(100%-2rem)] max-w-xl overflow-auto border border-[#2a2a2a] bg-[#111] p-4 text-[#f5f0eb] backdrop:bg-black/80 sm:p-6"
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
                <div className="mb-4 flex items-center justify-between gap-4">
                    <h2 className="text-sm">{project.title} Simulator</h2>
                    <button type="button" onClick={() => dialogRef.current?.close()} className="cursor-pointer px-3 py-2 text-xs text-[#c8f135]">Close ✕</button>
                </div>
                {open && (
                    <video src={project.simulatorVideo} controls playsInline preload="metadata" className="max-h-[70dvh] w-full bg-black">
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
        <details ref={dropdownRef} className="relative w-full sm:w-auto">
            <summary
                className="flex cursor-pointer list-none items-center gap-2 text-[11px] tracking-[0.2em] uppercase text-[#c8f135] [&::-webkit-details-marker]:hidden"
                aria-label={`Choose a live page for ${project.title}`}
            >
                View Live <span aria-hidden="true">▾</span>
            </summary>
            <div className="absolute left-0 right-0 top-full z-30 mt-3 w-full border border-[#2a2a2a] bg-[#111] p-2 shadow-xl sm:left-auto sm:w-[480px] sm:max-w-[calc(100vw-3rem)] sm:p-3">
                <p className="mb-3 text-[10px] uppercase tracking-[0.15em] text-[#888]">Choose a live page</p>
                <div className="grid grid-cols-2 gap-2 sm:gap-3">
                    {project.livePages?.map((page) => {
                        const content = (
                            <>
                                <img src={page.image} alt={`${page.label} preview`} className="aspect-[16/10] w-full object-cover object-top" loading="lazy" />
                                <div className="flex flex-col items-start gap-1 p-2 text-[11px] sm:gap-2 sm:p-3 sm:text-xs">
                                    <span>{page.label}</span>
                                    <span className={page.url ? 'text-[#c8f135]' : 'text-[#666]'}>{page.url ? 'View Live ↗' : 'Coming soon'}</span>
                                </div>
                            </>
                        )
                        return page.url ? (
                            <a key={page.label} href={page.url} target="_blank" rel="noopener noreferrer"
                                className="block overflow-hidden border border-[#2a2a2a] text-[#f5f0eb] transition-colors hover:border-[#c8f135] focus-visible:outline-2 focus-visible:outline-[#c8f135]"
                                aria-label={`View ${project.title} ${page.label} live (opens in a new tab)`}
                                onClick={() => dropdownRef.current?.removeAttribute('open')}
                            >{content}</a>
                        ) : (
                            <div key={page.label} aria-disabled="true" className="overflow-hidden border border-[#222] text-[#888]">{content}</div>
                        )
                    })}
                </div>
            </div>
        </details>
    )
}
