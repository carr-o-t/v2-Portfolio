import { useState } from 'react'

interface ImageWithSkeletonProps {
  src: string
  alt: string
  className?: string
  rounded?: string
}

export function ImageWithSkeleton({
  src,
  alt,
  className = '',
  rounded = 'rounded-2xl',
}: ImageWithSkeletonProps) {
  const [loaded, setLoaded] = useState(false)

  return (
    <div className={`relative ${className}`}>
      {/* Skeleton */}
      {!loaded && (
        <div
          className={`absolute inset-0 animate-pulse bg-gray-100 ${rounded}`}
        />
      )}

      {/* Image */}
      <img
        src={src}
        alt={alt}
        className={`${rounded} h-full w-full object-cover transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'
          }`}
        loading="lazy"
        onLoad={() => setLoaded(true)}
      />
    </div>
  )
}
