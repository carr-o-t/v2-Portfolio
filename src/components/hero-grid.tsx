import productDesign from '@assets/moment-5.jpg';
import { ArrowRight, Sparkles } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';
import PhotoCarousel from './photo-carousel';
import { Button } from './ui/button';

const HeroGrid: React.FC = () => {
  return (
    <div className="masonry-grid max-w-4xl mx-auto">
      {/* Main Product Design Box - Spans 2 columns and 2 rows */}
      <div className="masonry-item masonry-item-main portfolio-card group cursor-pointer ">
        {/* <div className="h-full bg-muted relative overflow-hidden rounded-lg">
          <img 
            src={productDesign} 
            alt="Product design showcase"
            className="w-full h-48 object-cover"
          />
          <div className="p-6 space-y-4">
            <h3 className="text-xl font-semibold">Full Stack Development</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Crafting scalable applications from frontend interfaces to robust backend systems, ensuring seamless user experiences and optimal performance.
            </p>
          </div>
        </div> */}

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
          <div className="text-3xl font-bold mb-2 text-primary">50+</div>
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
          <div className="flex gap-2 flex-wrap">
            <span className="px-3 py-1 bg-primary/10 rounded-full text-xs font-medium">Code</span>
            <span className="px-3 py-1 bg-primary/10 rounded-full text-xs font-medium">Scale</span>
            <span className="px-3 py-1 bg-primary/10 rounded-full text-xs font-medium">Optimize</span>
          </div>
        </div>
      </div>

      {/* Connect Box - Compact */}
      <div className="masonry-item masonry-item-compact portfolio-card group cursor-pointer">
      <div className="h-48 md:h-auto bg-blue-50 rounded-3xl p-6 flex flex-col justify-center items-center text-center hover:shadow-lg transition-all duration-500">
              <Sparkles className="w-8 h-8 text-blue-600 mb-3" />
              <h3 className="text-lg font-light text-neutral-900 mb-2">Have an idea?</h3>
              <p className="text-sm text-neutral-600 font-light leading-relaxed mb-4">
                Let's turn your vision into a reality.
              </p>
              <Link to={"/cpontact"}>
                <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
                  Get In Touch
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
      </div>

      {/* Photo Carousel - Taller */}
      <div className="masonry-item masonry-item-tall portfolio-card overflow-hidden">
        <PhotoCarousel />
      </div>
    </div>
  );
};

export default HeroGrid;