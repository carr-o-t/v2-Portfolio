import { AnimatePresence } from 'framer-motion'
import { lazy, ReactNode, Suspense, useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import PageTransition from './components/animations/page-transition'
import InitialLoadingScreen from './components/initial-loading-screen'
import LoadingScreen from './components/loading-screen'
import { PageWrapper } from './components/page-wrapper'
import Index from './pages'

// Lazy load all pages
const AboutMePage = lazy(() =>
  import('./pages/about-me').then((module) => ({
    default: module.AboutMePage,
  }))
)
const ContactMePage = lazy(() =>
  import('./pages/contact-me').then((module) => ({
    default: module.ContactMePage,
  }))
)
const WorkPage = lazy(() =>
  import('./pages/works').then((module) => ({ default: module.WorkPage }))
)
const NotFound = lazy(() => import('./pages/not-found'))

const SuspenseFallback = ({ children }: { children: ReactNode }) => {
  return (
    <Suspense fallback={<LoadingScreen />}><PageTransition>
      {children}
    </PageTransition></Suspense>
  )
}

const AnimatedRoutes = () => {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Index /></PageTransition>} />
        <Route path="/about-me" element={<SuspenseFallback><AboutMePage /></SuspenseFallback>} />
        <Route path="/works" element={<SuspenseFallback><WorkPage /></SuspenseFallback>} />
        <Route path="/contact" element={<SuspenseFallback><ContactMePage /></SuspenseFallback>} />
        <Route path="*" element={<SuspenseFallback><NotFound /></SuspenseFallback>} />
      </Routes>
    </AnimatePresence>
  )
}

const App = () => {
  const [isLoading, setIsLoading] = useState(() => {
    // Check if this is the first load or a reload
    const hasVisited = sessionStorage.getItem('hasVisited')
    if (!hasVisited) {
      return true
    }
    return false
  })

  useEffect(() => {
    if (isLoading) {
      // Show loading screen for initial load
      const timer = setTimeout(() => {
        setIsLoading(false)
        sessionStorage.setItem('hasVisited', 'true')
      }, 1000)

      return () => clearTimeout(timer)
    }
  }, [isLoading])

  if (isLoading) {
    return <InitialLoadingScreen />
  }

  return (
    <BrowserRouter>
      <PageWrapper>
        <AnimatedRoutes />
      </PageWrapper>
    </BrowserRouter>
  )
}

export default App
