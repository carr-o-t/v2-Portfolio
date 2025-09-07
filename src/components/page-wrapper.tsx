import { useIsMobile } from '@/hooks/use-mobile'
import React, { lazy, Suspense } from 'react'
import Navigation from './ui/navigation'

// const Navigation = lazy(() => import('./ui/navigation'))
const Footer = lazy(() => import('./footer'))
const DesktopFooter = lazy(() => import('./desktop-footer'))

export const PageWrapper = ({ children }: { children: React.ReactNode }) => {
    const isMobile = useIsMobile()
    return (
        <div className="relative z-10 min-h-screen bg-background">
            <div className="hero-bg"></div>
            {/* <Suspense fallback={<Skeleton className="h-nav-mb w-full md:h-nav" />}> */}
            <Navigation />
            {/* </Suspense> */}
            {children}
            {isMobile ? (
                <Suspense fallback={<div />}>
                    <Footer />
                </Suspense>
            ) : (
                <Suspense fallback={<div />}>
                    <DesktopFooter />
                </Suspense>
            )}
        </div>
    )
}
