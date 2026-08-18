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
    | { page: 'all-projects' }
    | { page: 'project-detail'; project: Project }

function resolveViewFromUrl(): AppView {
    if (typeof window === 'undefined') return { page: 'home' }
    const path = window.location.pathname
    const hash = window.location.hash

    // Check for project detail: /project/01 or #/project/01
    const pathMatch = path.match(/^\/project\/(.+)$/)
    const hashMatch = hash.match(/^#\/project\/(.+)$/)
    const projectNum = pathMatch?.[1] || hashMatch?.[1]
    if (projectNum) {
        const project = ALL_PROJECTS.find((p) => p.num === projectNum)
        if (project) return { page: 'project-detail', project }
    }

    if (path === '/projects' || hash === '#/projects' || hash === '#all-projects') {
        return { page: 'all-projects' }
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

    const navigateToAllProjects = () => {
        window.history.pushState({}, '', '/projects')
        setView({ page: 'all-projects' })
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    const navigateToProject = (project: Project) => {
        window.history.pushState({}, '', `/project/${project.num}`)
        setView({ page: 'project-detail', project })
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    const navigateToHome = (targetSectionId?: string) => {
        window.history.pushState({}, '', targetSectionId ? `/#${targetSectionId}` : '/')
        setView({ page: 'home' })
        if (targetSectionId) {
            setTimeout(() => {
                const el = document.getElementById(targetSectionId)
                if (el) {
                    el.scrollIntoView({ behavior: 'smooth' })
                } else {
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                }
            }, 60)
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' })
        }
    }

    if (view.page === 'project-detail') {
        return (
            <ProjectDetailPage
                project={view.project}
                onBack={() => navigateToHome('projects')}
            />
        )
    }

    if (view.page === 'all-projects') {
        return (
            <AllProjectsPage
                onBack={() => navigateToHome('projects')}
                onViewProject={navigateToProject}
            />
        )
    }

    return (
        <div style={{ backgroundColor: '#0a0a0a', color: '#f5f0eb', minHeight: '100vh' }}>
            <Navbar onNavigate={(target) => {
                if (target === 'home') {
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                }
            }} />
            <HomeSection />
            <ExperienceSection />
            <StackSection />
            <ProjectsSection
                onViewAll={navigateToAllProjects}
                onViewProject={navigateToProject}
            />
            <ContactSection />
            <Footer />
        </div>
    )
}
