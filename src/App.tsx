import { useState, useEffect, useRef } from 'react'
import type { MouseEvent } from 'react'
import Navbar from './components/Navbar'
import HomeSection from './components/HomeSection'
import ExperienceSection from './components/ExperienceSection'
import StackSection from './components/StackSection'
import ProjectsSection from './components/ProjectsSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import AllProjectsPage from './components/AllProjectsPage'
import ProjectDetailPage from './components/ProjectDetailPage'
import { ALL_PROJECTS, Project } from './data/portfolioData'

type AppView =
    | { page: 'home' }
    | { page: 'experience' }
    | { page: 'stack' }
    | { page: 'projects' }
    | { page: 'contact' }
    | { page: 'all-projects' }
    | { page: 'project-detail'; project: Project }

function resolveViewFromUrl(): AppView {
    if (typeof window === 'undefined') return { page: 'home' }
    const path = window.location.pathname.toLowerCase()
    const hash = window.location.hash.toLowerCase()

    // Check for project detail: /project/01 or #/project/01
    const pathMatch = path.match(/^\/project\/(.+)$/)
    const hashMatch = hash.match(/^#\/project\/(.+)$/)
    const projectNum = pathMatch?.[1] || hashMatch?.[1]
    if (projectNum) {
        const project = ALL_PROJECTS.find((p) => p.num.toLowerCase() === projectNum)
        if (project) return { page: 'project-detail', project }
    }

    if (path === '/projects/all' || path === '/all-projects' || hash === '#/projects/all' || hash === '#/all-projects' || hash === '#all-projects') {
        return { page: 'all-projects' }
    }
    if (path === '/experience' || hash === '#/experience' || hash === '#experience') {
        return { page: 'experience' }
    }
    if (path === '/stack' || hash === '#/stack' || hash === '#stack') {
        return { page: 'stack' }
    }
    if (path === '/projects' || hash === '#/projects' || hash === '#projects') {
        return { page: 'projects' }
    }
    if (path === '/contact' || hash === '#/contact' || hash === '#contact') {
        return { page: 'contact' }
    }

    return { page: 'home' }
}

export default function App() {
    const [view, setView] = useState<AppView>(resolveViewFromUrl)
    const viewKey = view.page === 'project-detail' ? `project-${view.project.num}` : view.page
    const previousView = useRef(viewKey)

    const skipToContent = (event: MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault()
        const main = document.getElementById('main-content')
        main?.focus({ preventScroll: true })
        main?.scrollIntoView({ block: 'start' })
    }

    useEffect(() => {
        const elements = document.querySelectorAll<HTMLElement>('.reveal-on-scroll')
        const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)')
        const revealAll = () => elements.forEach((element) => element.classList.add('is-visible'))
        let observer: IntersectionObserver | undefined

        if (motionPreference.matches || !('IntersectionObserver' in window)) {
            revealAll()
        } else {
            observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible')
                        observer?.unobserve(entry.target)
                    }
                })
            }, { threshold: 0.08, rootMargin: '0px 0px -24px 0px' })
            elements.forEach((element) => {
                element.classList.add('reveal-ready')
                observer?.observe(element)
            })
        }

        const handleMotionPreference = () => {
            if (motionPreference.matches) {
                observer?.disconnect()
                revealAll()
            }
        }
        motionPreference.addEventListener('change', handleMotionPreference)

        if (previousView.current !== viewKey) {
            document.getElementById('main-content')?.focus({ preventScroll: true })
            previousView.current = viewKey
        }

        return () => {
            observer?.disconnect()
            motionPreference.removeEventListener('change', handleMotionPreference)
        }
    }, [viewKey])

    useEffect(() => {
        const handleLocationChange = () => setView(resolveViewFromUrl())
        window.addEventListener('popstate', handleLocationChange)
        window.addEventListener('hashchange', handleLocationChange)
        return () => {
            window.removeEventListener('popstate', handleLocationChange)
            window.removeEventListener('hashchange', handleLocationChange)
        }
    }, [])

    const navigateTo = (pageName: string) => {
        const target = pageName.toLowerCase()
        const path = target === 'home' ? '/' : `/${target}`
        window.history.pushState({}, '', path)
        setView(resolveViewFromUrl())
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    }

    const navigateToAllProjects = () => {
        window.history.pushState({}, '', '/projects/all')
        setView({ page: 'all-projects' })
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    }

    const navigateToProject = (project: Project) => {
        window.history.pushState({}, '', `/project/${project.num}`)
        setView({ page: 'project-detail', project })
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    }

    if (view.page === 'project-detail') {
        return (
            <>
                <a className="skip-link" href="#main-content" onClick={skipToContent}>Skip to content</a>
                <ProjectDetailPage
                    key={viewKey}
                    project={view.project}
                    onBack={() => navigateTo('projects')}
                />
            </>
        )
    }

    if (view.page === 'all-projects') {
        return (
            <>
                <a className="skip-link" href="#main-content" onClick={skipToContent}>Skip to content</a>
                <AllProjectsPage
                    onBack={() => navigateTo('projects')}
                    onViewProject={navigateToProject}
                />
            </>
        )
    }

    const renderMainContent = () => {
        switch (view.page) {
            case 'experience':
                return <ExperienceSection />
            case 'stack':
                return <StackSection />
            case 'projects':
                return (
                    <ProjectsSection
                        onViewAll={navigateToAllProjects}
                        onViewProject={navigateToProject}
                    />
                )
            case 'contact':
                return <ContactSection />
            case 'home':
            default:
                return (
                    <>
                        <HomeSection onNavigate={navigateTo} />
                        <ProjectsSection
                            compact
                            onViewAll={navigateToAllProjects}
                            onViewProject={navigateToProject}
                        />
                    </>
                )
        }
    }

    return (
        <div className="app-shell">
            <a className="skip-link" href="#main-content" onClick={skipToContent}>Skip to content</a>
            <Navbar activePage={view.page} onNavigate={navigateTo} />
            <main key={viewKey} id="main-content" tabIndex={-1} className="app-main">
                {renderMainContent()}
            </main>
            <Footer />
        </div>
    )
}
