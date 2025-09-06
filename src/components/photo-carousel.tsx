import { imagePaths } from '@/lib/utils'
import React, { useEffect, useState } from 'react'
import { Icons } from './Icons'

const photos = imagePaths
  .filter((img) => img.key.startsWith('moment'))
  .map((img) => img.path)

const PhotoCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [allLoaded, setAllLoaded] = useState(false)

  // Preload all images before starting slideshow
  useEffect(() => {
    let loadedCount = 0

    photos.forEach((src) => {
      const img = new Image()
      img.src = src
      img.onload = () => {
        loadedCount += 1
        if (loadedCount === photos.length) {
          setAllLoaded(true)
        }
      }
    })
  }, [photos])

  // Slideshow effect
  useEffect(() => {
    if (!allLoaded) return // wait until all images are ready

    const interval = setInterval(() => {
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % photos.length)
        setIsTransitioning(false)
      }, 1600)
    }, 6000)

    return () => clearInterval(interval)
  }, [photos.length, allLoaded])

  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-lg bg-muted">
      <div className="h-full w-full overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20">
        {photos.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Favorite moment ${index}`}
            className={`absolute left-0 top-0 h-full w-full object-cover transition-all duration-[4000ms] ease-out
        ${index === currentIndex && !isTransitioning ? 'z-10 scale-125 opacity-100' : 'z-0 scale-100 opacity-0'}
        `}
          />
        ))}
      </div>

      {/* Overlay UI */}
      <div className="absolute left-3 top-3 h-10 w-10 rounded-full bg-accent/20 p-3 backdrop-blur-sm">
        <Icons.Heart className="h-4 w-4 fill-red-400 text-red-400" />
      </div>

      <div className="absolute bottom-3 left-3 rounded-full bg-accent/20 p-3 text-xs font-medium text-white/80 backdrop-blur-sm">
        Moments
      </div>

      <div className="absolute right-3 top-3 flex space-x-1 rounded-full bg-accent/20 p-3 backdrop-blur-sm">
        {photos.map((_, index) => (
          <div
            key={index}
            className={`h-1.5 w-1.5 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-white' : 'bg-muted-foreground'
              }`}
          />
        ))}
      </div>

      {/* TODO: Loader UI while waiting for images */}
    </div>
  )
}

export default PhotoCarousel
