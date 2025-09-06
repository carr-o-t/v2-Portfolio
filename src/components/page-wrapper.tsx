import { useIsMobile } from '@/hooks/use-mobile'
import React, { lazy } from 'react'
import PageTransition from './animations/page-transition'

const Navigation = lazy(() => import('./ui/navigation'))
const Footer = lazy(() => import('./footer'))
const DesktopFooter = lazy(() => import('./desktop-footer'))

export const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  const isMobile = useIsMobile()
  return (
    <div className="relative z-10 min-h-screen bg-background">
      <div className="hero-bg"></div>
      <Navigation />
      <PageTransition>{children}</PageTransition>
      {isMobile ? <Footer /> : <DesktopFooter />}
    </div>
  )
}
