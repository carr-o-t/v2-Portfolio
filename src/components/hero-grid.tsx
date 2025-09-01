import productDesign from '@assets/project-box.jpg';
import React from 'react';
import PhotoCarousel from './photo-carousel';
import { ContactMeBox } from './ui/contact-me-box';

const HeroGrid: React.FC = () => {
  return (
    <div className="masonry-grid max-w-4xl mx-auto">
      {/* Main Product Design Box - Spans 2 columns and 2 rows */}
      <div className="masonry-item masonry-item-main portfolio-card group cursor-pointer ">

        <div className="h-full bg-neutral-100 rounded-3xl p-6 flex flex-col justify-end relative overflow-hidden group hover:shadow-lg transition-all duration-500">
          <img
            src={productDesign}
            alt="Web Development Projects"
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <div className="relative text-white">
            <h3 className="text-xl font-medium mb-2">My Projects</h3>
            <p className="text-sm font-light text-neutral-200 leading-relaxed">
              Building scalable web applications and mobile solutions that solve real-world problems with clean, efficient code.
            </p>
          </div>
        </div>
      </div>

      {/* Projects Stats - Compact */}
      <div className="masonry-item masonry-item-compact portfolio-card">
        <div className="h-full bg-muted flex flex-col justify-center items-center p-6 text-center rounded-lg hover:shadow-lg transition-all duration-500">
          <div className="text-3xl font-bold mb-2 text-primary">08+</div>
          <p className="text-sm text-muted-foreground">Applications Built & Deployed</p>
        </div>
      </div>

      {/* Philosophy Box */}
      <div className="masonry-item masonry-item-mentality portfolio-card">
        <div className="h-full bg-accent p-6 flex flex-col justify-between rounded-lg hover:shadow-lg transition-all duration-500">
          <div>
            <h3 className="text-lg font-semibold mb-3">Philosophy</h3>
            <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
              Clean code, scalable architecture, and continuous optimization to deliver exceptional digital solutions.
            </p>
          </div>
          <div className="flex justify-center gap-2 flex-wrap">
            <span className="px-3 py-1 bg-primary/10 rounded-full text-xs font-medium">Code</span>
            <span className="px-3 py-1 bg-primary/10 rounded-full text-xs font-medium">Scale</span>
            <span className="px-3 py-1 bg-primary/10 rounded-full text-xs font-medium">Optimize</span>
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
  );
};

export default HeroGrid;