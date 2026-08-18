import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import HomeSection from './components/HomeSection'
import ExperienceSection from './components/ExperienceSection'
import StackSection from './components/StackSection'
import ProjectsSection from './components/ProjectsSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import AllProjectsPage from './components/AllProjectsPage'

export default function App() {
    const [currentView, setCurrentView] = useState<'home' | 'all-projects'>(() => {
        if (typeof window !== 'undefined') {
            const path = window.location.pathname
            const hash = window.location.hash
            if (path === '/projects' || hash === '#/projects' || hash === '#all-projects') {
                return 'all-projects'
            }
        }
        return 'home'
    })

    useEffect(() => {
        const handleLocationChange = () => {
            const path = window.location.pathname
            const hash = window.location.hash
            if (path === '/projects' || hash === '#/projects' || hash === '#all-projects') {
                setCurrentView('all-projects')
            } else {
                setCurrentView('home')
            }
        }

        window.addEventListener('popstate', handleLocationChange)
        window.addEventListener('hashchange', handleLocationChange)
        return () => {
            window.removeEventListener('popstate', handleLocationChange)
            window.removeEventListener('hashchange', handleLocationChange)
        }
    }, [])

    const navigateToAllProjects = () => {
        window.history.pushState({}, '', '/projects')
        setCurrentView('all-projects')
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    const navigateToHome = (targetSectionId?: string) => {
        window.history.pushState({}, '', targetSectionId ? `/#${targetSectionId}` : '/')
        setCurrentView('home')
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

    if (currentView === 'all-projects') {
        return <AllProjectsPage onBack={() => navigateToHome('projects')} />
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
            <ProjectsSection onViewAll={navigateToAllProjects} />
            <ContactSection />
            <Footer />
        </div>
    )
}
