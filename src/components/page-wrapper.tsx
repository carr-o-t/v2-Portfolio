import { useIsMobile } from '@/hooks/use-mobile'
import React, { lazy } from 'react'

const Navigation = lazy(() => import('./ui/navigation'))
const Footer = lazy(() => import('./footer'))
const DesktopFooter = lazy(() => import('./desktop-footer'))

export const PageWrapper = ({ children }: { children: React.ReactNode }) => {
    const isMobile = useIsMobile()
    return (
        <div className="relative z-10 min-h-screen bg-background">
            <div className="hero-bg"></div>
            <Navigation />
            {children}
            {isMobile ? <Footer /> : <DesktopFooter />}
        </div>
    )
}
