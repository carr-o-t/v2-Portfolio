import { AnimatePresence } from 'framer-motion';
import { Suspense, useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import PageTransition from './components/animations/page-transition';
import LoadingScreen from './components/loading-screen';
import { PageWrapper } from './components/page-wrapper';
import Index from './pages';
import { AboutMePage } from './pages/about-me';
import { ContactMePage } from './pages/contact-me';
import NotFound from './pages/not-found';
import { WorkPage } from './pages/works';

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Index /></PageTransition>} />
        <Route path="/about-me" element={<PageTransition><AboutMePage /></PageTransition>} />
        <Route path="/works" element={<PageTransition><WorkPage /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><ContactMePage /></PageTransition>} />
        <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
};


const App = () => {
  const [isLoading, setIsLoading] = useState(() => {
    // Check if this is the first load or a reload
    const hasVisited = sessionStorage.getItem('hasVisited');
    if (!hasVisited) {
      return true;
    }
    return false;
  });

  useEffect(() => {
    if (isLoading) {
      // Show loading screen for initial load
      const timer = setTimeout(() => {
        setIsLoading(false);
        sessionStorage.setItem('hasVisited', 'true');
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingScreen />}>
        <PageWrapper>
          <AnimatedRoutes />
        </PageWrapper>

      </Suspense>
    </BrowserRouter>
  );
};

export default App;
