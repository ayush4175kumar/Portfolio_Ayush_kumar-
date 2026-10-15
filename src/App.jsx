import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import SolarProject from './pages/SolarProject'
import ContentWritingProject from './pages/ContentWritingProject'
import SmartCityProject from './pages/SmartCityProject'
import ProductReviewProject from './pages/ProductReviewProject'
import SocialCarouselProject from './pages/SocialCarouselProject'
import VideoScriptingProject from './pages/VideoScriptingProject'
import Skills from './pages/Skills'
import Drawings from './pages/Drawings'
import Resume from './pages/Resume'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main className="page-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/work" element={<Projects />} />
          <Route path="/projects/commercial-rooftop-solar-pv" element={<SolarProject />} />
          <Route path="/projects/content-writing" element={<ContentWritingProject />} />
          <Route path="/projects/smart-city-lighting" element={<SmartCityProject />} />
          <Route path="/projects/inverter-comparison-review" element={<ProductReviewProject />} />
          <Route path="/projects/social-media-carousel-design" element={<SocialCarouselProject />} />
          <Route path="/projects/youtube-reels-script-writing" element={<VideoScriptingProject />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/drawings" element={<Drawings />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
