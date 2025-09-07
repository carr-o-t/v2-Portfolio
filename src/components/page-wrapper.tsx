import { useIsMobile } from '@/hooks/use-mobile'
import React, { lazy, Suspense } from 'react'
import Navigation from './ui/navigation'

const HeroBackground = lazy(() => import('./hero-bg').then(mod => ({ default: mod.HeroBackground })))
const Footer = lazy(() => import('./footer'))
const DesktopFooter = lazy(() => import('./desktop-footer'))

export const PageWrapper = ({ children }: { children: React.ReactNode }) => {
    const isMobile = useIsMobile()
    return (
        <div className="relative z-10 min-h-screen bg-background">
            <Suspense fallback={<div className='opacity-0' />}>
                <HeroBackground />
            </Suspense>
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
