import { useState, useEffect } from 'react'
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
        window.scrollTo(0, 0)
    }

    const navigateToAllProjects = () => {
        window.history.pushState({}, '', '/projects/all')
        setView({ page: 'all-projects' })
        window.scrollTo(0, 0)
    }

    const navigateToProject = (project: Project) => {
        window.history.pushState({}, '', `/project/${project.num}`)
        setView({ page: 'project-detail', project })
        window.scrollTo(0, 0)
    }

    if (view.page === 'project-detail') {
        return (
            <ProjectDetailPage
                project={view.project}
                onBack={() => navigateTo('projects')}
            />
        )
    }

    if (view.page === 'all-projects') {
        return (
            <AllProjectsPage
                onBack={() => navigateTo('projects')}
                onViewProject={navigateToProject}
            />
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
                return <HomeSection onNavigate={navigateTo} />
        }
    }

    return (
        <div style={{ backgroundColor: '#0a0a0a', color: '#f5f0eb', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Navbar activePage={view.page} onNavigate={navigateTo} />
            <main style={{ flex: 1 }}>
                {renderMainContent()}
            </main>
            <Footer />
        </div>
    )
}
