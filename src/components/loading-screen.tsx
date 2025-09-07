import { useMemo } from "react"
import { useLocation } from "react-router-dom"
import { DotPulse } from "./ui/dot-pulse"

const LoadingScreen = () => {
  const location = useLocation()
  const pageName = useMemo(
    () =>
      location.pathname === "/"
        ? "Home"
        : location.pathname
          .slice(1)
          .replace(/-/g, " ")
          .replace(/\b\w/g, (c) => c.toUpperCase()),
    [location.pathname]
  )

  return (
    <div className="min-h-screen flex items-center justify-center bg-background animate-fade-in">
      <div className="flex flex-col items-center space-y-6">
        {/* Loading Text */}
        <div className="text-center animate-slide-up delay-400">
          <h1 className="mb-2 text-2xl font-medium text-foreground/90">
            {pageName}
          </h1>
        </div>

        {/* Loading Animation */}
        <DotPulse />
      </div>
    </div>
  )
}

export default LoadingScreen
