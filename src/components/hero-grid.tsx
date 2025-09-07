import React, { Suspense } from 'react'
import { PhilosophyBox } from './hero-components/philosphy-box'
import { ProjectBox } from './hero-components/project-box'
// import PhotoCarousel from './photo-carousel'
import { ContactMeBox } from './ui/contact-me-box'
import { Skeleton } from './ui/skeleton'

const PhotoCarousel = React.lazy(
  () => import('./photo-carousel')
)
// const ContactMeBox = React.lazy(() => import('./ui/contact-me-box').then(mod => ({ default: mod.ContactMeBox })))
// const ProjectBox = React.lazy(
//   () => import('./hero-components/project-box').then(mod => ({ default: mod.ProjectBox }))
// )
// const PhilosophyBox = React.lazy(
//   () => import('./hero-components/philosphy-box').then(mod => ({ default: mod.PhilosophyBox }))
// )

const HeroGrid: React.FC = () => {
  return (
    <div className="masonry-grid mx-auto max-w-4xl">
      {/* Main Product Design Box - Spans 2 columns and 2 rows */}
      <div className="masonry-item masonry-item-main portfolio-card group cursor-pointer ">
        {/* <Suspense fallback={<Skeleton className='h-full' />}> */}
        <ProjectBox />
        {/* </Suspense> */}
      </div>

      {/* Projects Stats - Compact */}
      <div className="masonry-item masonry-item-compact portfolio-card">
        <div className="flex h-full flex-col items-center justify-center rounded-lg bg-muted p-6 text-center transition-all duration-500 hover:shadow-lg">
          <div className="mb-2 text-3xl font-bold text-primary">08+</div>
          <p className="text-sm text-muted-foreground">
            Applications Built & Deployed
          </p>
        </div>
      </div>

      {/* Philosophy Box */}
      <div className="masonry-item masonry-item-mentality portfolio-card">
        {/* <Suspense fallback={<Skeleton className='h-full' />}> */}
        <PhilosophyBox />
        {/* </Suspense> */}
      </div>

      {/* Connect Box - Compact */}
      <div className="masonry-item masonry-item-compact portfolio-card group cursor-pointer">
        {/* <Suspense fallback={<Skeleton className='h-[200px]' />}> */}
        <ContactMeBox />
        {/* </Suspense> */}
      </div>

      {/* Photo Carousel - Taller */}
      <div className="masonry-item masonry-item-tall portfolio-card overflow-hidden">
        <Suspense fallback={<Skeleton className='h-[340px]' />}>
          <PhotoCarousel />
        </Suspense>
      </div>
    </div>
  )
}

export default HeroGrid
