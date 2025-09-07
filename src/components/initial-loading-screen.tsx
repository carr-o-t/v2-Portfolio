import { personalInfo } from "@/entities"
import React from "react"
import { DotPulse } from "./ui/dot-pulse"

interface InitialLoadingScreenProps {
  onFinish?: () => void
}

const InitialLoadingScreen: React.FC<InitialLoadingScreenProps> = ({ onFinish }) => {
  const handleAnimationEnd = React.useCallback(() => {
    if (onFinish) {
      onFinish()
    }
  }, [onFinish])

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-background animate-fade-in"
      onAnimationEnd={handleAnimationEnd}
    >
      <div className="flex flex-col items-center space-y-6">
        {/* Animated Logo/Initial */}
        <div className="relative flex h-16 w-16 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-primary to-rose-100/60 animate-scale-in">
          <img
            src={personalInfo.profileImage}
            alt={personalInfo.name}
            className="h-full w-full object-cover transition-transform group-hover:scale-105"
            loading="lazy"
          />
        </div>

        {/* Loading Text */}
        <div
          className="text-center animate-slide-up"
          style={{ animationDelay: "0.4s" }}
        >
          <h2 className="mb-2 text-lg font-medium text-foreground/90">
            bytethecarrot.dev
          </h2>
          <p className="text-sm text-muted-foreground">Frontend Engineer</p>
        </div>

        {/* Loading Animation */}
        <DotPulse />
      </div>
    </div>
  )
}

export default InitialLoadingScreen
