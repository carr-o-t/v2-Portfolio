import { useState } from "react";

interface ImageWithSkeletonProps {
    src: string;
    alt: string;
    className?: string;
    rounded?: string;
}

export function ImageWithSkeleton({
    src,
    alt,
    className = "",
    rounded = "rounded-2xl"
}: ImageWithSkeletonProps) {
    const [loaded, setLoaded] = useState(false);

    return (
        <div className={`relative ${className}`}>
            {/* Skeleton */}
            {!loaded && (
                <div
                    className={`absolute inset-0 bg-gray-300 animate-pulse ${rounded}`}
                />
            )}

            {/* Image */}
            <img
                src={src}
                alt={alt}
                className={`${rounded} object-cover w-full h-full transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"
                    }`}
                loading="lazy"
                onLoad={() => setLoaded(true)}
            />
        </div>
    );
}
