import { imagePaths } from '@/lib/utils';
import React, { lazy, Suspense, useState } from 'react';
import { Icons } from './Icons';
import { Skeleton } from './ui/skeleton';

const ImageWithSkeleton = lazy(() => import('./ui/image-with-skeleton').then(mod => ({ default: mod.ImageWithSkeleton })));

const photos = imagePaths
  .filter((img) => img.key.startsWith('moment'))
  .map((img) => img.path)
  .slice(0, 3);

const menuItems = [
  { icon: 'Wave', label: 'Waves' },
  { icon: 'Flower', label: 'Flower' },
  { icon: 'Paw', label: 'Dog' },
];

const PhotoCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMenuHovered, setIsMenuHovered] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleIconClick = (index: number) => {
    if (index !== currentIndex) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex(index);
        setIsTransitioning(false);
      }, 150);
    }
  };

  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-lg bg-muted group" onMouseEnter={(e) => {
      e.stopPropagation();
      setIsMenuHovered(true);
    }}
      onMouseLeave={(e) => {
        e.stopPropagation();
        setIsMenuHovered(false);
      }}>
      <Suspense fallback={<Skeleton className='h-full w-full' />}>
        <div className="h-full w-full overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20">
          <ImageWithSkeleton
            key={currentIndex}
            src={photos[currentIndex]}
            alt={`Favorite moment - ${menuItems[currentIndex].label}`}
            className={`!absolute left-0 top-0 h-full w-full object-cover transition-opacity duration-500 ease-in-out ${isTransitioning ? 'opacity-0' : 'opacity-100'
              }`}
            rounded='rounded-lg'
          />
        </div>
      </Suspense>

      {/* Heart icon - moved to top right */}
      <div className="absolute right-3 top-3 h-10 w-10 rounded-full bg-accent/20 p-3 backdrop-blur-sm">
        <Icons.Heart className="h-4 w-4 fill-red-400 text-red-400" />
      </div>

      {/* Left side expandable menu - similar to copyright component */}
      <div className="absolute left-4 top-4 flex flex-col">
        <div
          className={`cursor-pointer rounded-full absolute  h-full flex flex-col justify-center items-center  transition-all duration-300 ease-out  ${isMenuHovered ? 'border-transparent' : 'border-transparent'
            }`}
        >

          {/* Expanding menu - opens from top to bottom */}
          <div
            className={`absolute top-1/2 left-1/2 mt-2 overflow-hidden rounded-full bg-gray-300/50 backdrop-blur-md transition-all duration-300 ease-out p-3 ${isMenuHovered ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
              }`}
          >
            <div className="flex flex-col space-y-3">
              {menuItems.map((item, index) => {
                const IconComponent = Icons[item.icon as keyof typeof Icons];
                return (
                  <button
                    key={item.label}
                    onClick={() => handleIconClick(index)}
                    className={`p-2 rounded-full transition-all duration-200 hover:bg-white ${currentIndex === index
                      ? 'bg-white'
                      : ''
                      }`}
                    aria-label={`Show ${item.label} image`}
                  >
                    <IconComponent className="h-5 w-5" />
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-3 left-3 rounded-full bg-accent/20 p-3 text-xs font-medium text-white/80 backdrop-blur-sm">
        Moments
      </div>
    </div>
  );
};

export { PhotoCarousel };
