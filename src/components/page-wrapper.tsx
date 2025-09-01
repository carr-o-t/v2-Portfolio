import { useIsMobile } from "@/hooks/use-mobile";
import React from "react";
import DesktopFooter from "./desktop-footer";
import Footer from "./footer";
import Navigation from "./ui/navigation";

export const PageWrapper = ({ children }: { children: React.ReactNode }) => {
    const isMobile = useIsMobile();
    return (
        <div className="relative z-10 min-h-screen bg-background">
            <div className="hero-bg"></div>
            <Navigation />
            {children}
            {
                isMobile ? <Footer /> : <DesktopFooter />
            }
        </div>
    )
}