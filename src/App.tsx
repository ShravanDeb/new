import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home  from './pages/Home'
import About from './pages/About'
import Work  from './pages/Work'
import Links from './pages/Links'
import Uses  from './pages/Uses'

function AnimatedRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/"      element={<Home />}  />
        <Route path="/about" element={<About />} />
        <Route path="/work"  element={<Work />}  />
        <Route path="/links" element={<Links />} />
        <Route path="/uses"  element={<Uses />}  />
      </Routes>
    </AnimatePresence>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main><AnimatedRoutes /></main>
      <Footer />
    </BrowserRouter>
  )
}
