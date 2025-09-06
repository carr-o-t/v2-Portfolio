import productDesign from '@assets/project-box.webp'
import React from 'react'
import PhotoCarousel from './photo-carousel'
import { ContactMeBox } from './ui/contact-me-box'
import { ImageWithSkeleton } from './ui/image-with-skeleton'

const HeroGrid: React.FC = () => {
  return (
    <div className="masonry-grid mx-auto max-w-4xl">
      {/* Main Product Design Box - Spans 2 columns and 2 rows */}
      <div className="masonry-item masonry-item-main portfolio-card group cursor-pointer ">
        <div className="group relative flex h-full flex-col justify-end overflow-hidden rounded-3xl bg-neutral-100 p-6 transition-all duration-500 hover:shadow-lg">
          {/* <img
            src={productDesign}
            alt="Web Development Projects"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          /> */}
          <ImageWithSkeleton
            src={productDesign}
            alt="Web Development Projects"
            className="!absolute top-0 left-0 h-full w-full"
            rounded="rounded-3xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <div className="relative text-white">
            <h3 className="mb-2 text-xl font-medium">My Projects</h3>
            <p className="text-sm font-light leading-relaxed text-neutral-200">
              Building scalable web applications and mobile solutions that solve
              real-world problems with clean, efficient code.
            </p>
          </div>
        </div>
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
        <div className="flex h-full flex-col justify-between rounded-lg bg-accent p-6 transition-all duration-500 hover:shadow-lg">
          <div>
            <h3 className="mb-3 text-lg font-semibold">Philosophy</h3>
            <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
              Clean code, scalable architecture, and continuous optimization to
              deliver exceptional digital solutions.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium">
              Code
            </span>
            <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium">
              Scale
            </span>
            <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium">
              Optimize
            </span>
          </div>
        </div>
      </div>

      {/* Connect Box - Compact */}
      <div className="masonry-item masonry-item-compact portfolio-card group cursor-pointer">
        <ContactMeBox />
      </div>

      {/* Photo Carousel - Taller */}
      <div className="masonry-item masonry-item-tall portfolio-card overflow-hidden">
        <PhotoCarousel />
      </div>
    </div>
  )
}

export default HeroGrid
