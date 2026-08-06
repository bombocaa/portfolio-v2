import Navbar from './components/Navbar'
import HomeSection from './components/HomeSection'
import ExperienceSection from './components/ExperienceSection'
import StackSection from './components/StackSection'
import ProjectsSection from './components/ProjectsSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

export default function App() {
    return (
        <div style={{ backgroundColor: '#0a0a0a', color: '#f5f0eb', minHeight: '100vh' }}>
            <Navbar />
            <HomeSection />
            <ExperienceSection />
            <StackSection />
            <ProjectsSection />
            <ContactSection />
            <Footer />
        </div>
    )
}
