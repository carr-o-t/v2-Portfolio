import { lazy, ReactNode, Suspense, useState } from "react"
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom"
import PageTransition from "./components/animations/page-transition"
import InitialLoadingScreen from "./components/initial-loading-screen"
import LoadingScreen from "./components/loading-screen"
import { PageWrapper } from "./components/page-wrapper"
import Index from "./pages"

// Lazy pages
// const Index = lazy(() =>
//   import("./pages")
// )

const AboutMePage = lazy(() =>
  import("./pages/about-me").then((m) => ({ default: m.AboutMePage }))
)
const ContactMePage = lazy(() =>
  import("./pages/contact-me").then((m) => ({ default: m.ContactMePage }))
)
const WorkPage = lazy(() =>
  import("./pages/works").then((m) => ({ default: m.WorkPage }))
)
const NotFound = lazy(() => import("./pages/not-found"))

const SuspenseFallback = ({ children }: { children: ReactNode }) => {

  return (
    <Suspense fallback={<LoadingScreen />}>
      <PageTransition>{children}</PageTransition>
    </Suspense>
  )
}

const AnimatedRoutes = () => {
  const location = useLocation()
  return (
    <Routes location={location} key={location.pathname}>
      <Route
        path="/"
        element={
          <SuspenseFallback>
            <Index />
          </SuspenseFallback>
        }
      />
      <Route
        path="/about-me"
        element={
          <SuspenseFallback>
            <AboutMePage />
          </SuspenseFallback>
        }
      />
      <Route
        path="/works"
        element={
          <SuspenseFallback>
            <WorkPage />
          </SuspenseFallback>
        }
      />
      <Route
        path="/contact"
        element={
          <SuspenseFallback>
            <ContactMePage />
          </SuspenseFallback>
        }
      />
      <Route
        path="*"
        element={
          <SuspenseFallback>
            <NotFound />
          </SuspenseFallback>
        }
      />
    </Routes>
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


  if (isLoading) {
    return (
      <InitialLoadingScreen
        onFinish={() => {
          sessionStorage.setItem('hasVisited', 'true');
          setIsLoading(false)
        }}
      />
    )
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
