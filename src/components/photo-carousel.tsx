import moments1 from '@assets/moment-1.jpg';
import moments2 from '@assets/moment-2.jpg';
import moments3 from '@assets/moment-3.jpg';
import moments4 from '@assets/moment-4.jpg';
import moments5 from '@assets/moment-5.jpg';
import { Heart } from 'lucide-react';
import React, { useEffect, useState } from 'react';

const PhotoCarousel: React.FC = () => {
  const photos = [moments1, moments2, moments3, moments4, moments5];

//   const shapes = [
//     "rounded-2xl", // rounded square
//     "rounded-full", // circle
//     "rounded-t-full rounded-b-lg", // heart-like
//     "rounded-lg rotate-45", // diamond
//     "rounded-3xl" // super rounded
//   ];

const shapes = [
    'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)', // Hexagon
    'circle(50% at 50% 50%)',           // Circle
    'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)', // Diamond
    'circle(50% at 50% 50%)',           // Circle
    'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)', // Hexagon
  ]

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % photos.length);
        setIsTransitioning(false);
      }, 1600); // Longer transition for zoom effect
    }, 6000); // Change every 10 seconds

    return () => clearInterval(interval);
  }, [photos.length]);

  return (
    <div className="relative w-full h-full overflow-hidden bg-muted flex items-center justify-center rounded-lg">
      <div 
        className={`w-full h-full overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20`}
      >
        <img 
          src={photos[currentIndex]}
          alt="Favorite moment"
          className={`w-full h-full object-cover transition-all duration-[4000ms] ease-out ${
            isTransitioning ? 'opacity-0 scale-100' : 'opacity-100 scale-125'
          }`}
        />
      </div>
      
      <div className="absolute top-3 left-3 p-3 h-10 w-10 bg-accent/20 backdrop-blur-sm rounded-full">
        <Heart className="w-4 h-4 text-red-400 fill-red-400" />
      </div>
      
      <div className="absolute bottom-3 left-3 text-xs text-white/80 font-medium p-3 bg-accent/20 backdrop-blur-sm rounded-full">
        Moments
      </div>
      
      <div className="absolute top-3 right-3 flex space-x-1 p-3 bg-accent/20 backdrop-blur-sm rounded-full">
        {photos.map((_, index) => (
          <div 
            key={index}
            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'bg-white' : 'bg-muted-foreground'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default PhotoCarousel;