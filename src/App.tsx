import { AnimatePresence } from 'framer-motion'
import { Suspense, lazy, useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import InitialLoadingScreen from './components/initial-loading-screen'
import LoadingScreen from './components/loading-screen'
import { PageWrapper } from './components/page-wrapper'

// Lazy load all pages
const Index = lazy(() => import('./pages'))
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

const AnimatedRoutes = () => {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Index />} />
        <Route path="/about-me" element={<AboutMePage />} />
        <Route path="/works" element={<WorkPage />} />
        <Route path="/contact" element={<ContactMePage />} />
        <Route path="*" element={<NotFound />} />
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
      }, 3000)

      return () => clearTimeout(timer)
    }
  }, [isLoading])

  if (isLoading) {
    return <InitialLoadingScreen />
  }

  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingScreen />}>
        <PageWrapper>
          <AnimatedRoutes />
        </PageWrapper>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
