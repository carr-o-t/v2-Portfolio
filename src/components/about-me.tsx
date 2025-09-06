import { Badge } from '@/components/ui/badge'
import { toolsAndTechnology } from '@/entities'
import moments1 from '@assets/moment-1.webp'
import moments2 from '@assets/moment-2.webp'
// import { ContactMeBox } from "./ui/contact-me-box";
// import { ImageWithSkeleton } from "./ui/image-with-skeleton";
import { lazy } from 'react'

const ContactMeBox = lazy(() =>
  import('./ui/contact-me-box').then((module) => ({
    default: module.ContactMeBox,
  }))
)
const ImageWithSkeleton = lazy(() =>
  import('./ui/image-with-skeleton').then((module) => ({
    default: module.ImageWithSkeleton,
  }))
)

export default function AboutMe() {
  return (
    <div className="relative py-12 md:py-20">
      {' '}
      {/* Added 'relative' class */}
      <div className="mx-auto max-w-6xl px-6">
        {/* New Top Section: About + Skills */}
        <section className="mb-24 grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-16">
          {/* Left Column: About + Skills */}
          <div className="space-y-8 lg:col-span-2">
            <Badge
              variant="outline"
              className="border-neutral-300 px-3 py-1 font-light text-neutral-600"
            >
              About
            </Badge>
            <div className="space-y-6 text-lg font-light leading-relaxed text-neutral-800 lg:text-xl ">
              <p className="text-muted-foreground">
                I'm a{' '}
                <strong className="text-primary">
                  Front-End focused Full-Stack Developer
                </strong>{' '}
                passionate about building{' '}
                <strong className="text-primary">
                  fast, scalable, and user-friendly web applications
                </strong>
                . I specialize in{' '}
                <strong className="text-primary">
                  React, Next.js, and TypeScript
                </strong>{' '}
                to create seamless digital experiences that engage users and
                support business goals.
              </p>
              <p className="text-muted-foreground">
                I combine{' '}
                <strong className="text-primary">
                  creative problem-solving
                </strong>{' '}
                with solid{' '}
                <strong className="text-primary">engineering practices</strong>{' '}
                to deliver{' '}
                <strong className="text-primary">high-quality solutions</strong>
                . My focus is on{' '}
                <strong className="text-primary">
                  performance, usability, and innovation
                </strong>{' '}
                to make every project both technically strong and enjoyable for
                users.
              </p>
            </div>

            <div
              className="box-cover-shadow rounded-2xl bg-muted/80 p-4 lg:p-6"
              style={{
                boxShadow: '0px 0px 15px 15px white',
              }}
            >
              <h3 className="mb-4 text-sm font-medium text-neutral-600">
                Tools & Technologies
              </h3>
              <div className="space-y-2">
                {toolsAndTechnology.map(
                  (techGroup: string[], groupIndex: number) => (
                    <div
                      key={groupIndex}
                      className="marquee-container overflow-hidden"
                    >
                      <div
                        className={`animate-marquee flex gap-4 ${
                          groupIndex % 2 === 0
                            ? 'animate-marquee-left'
                            : 'animate-marquee-right'
                        }`}
                        style={{
                          animationDuration: '20s',
                          animationIterationCount: 'infinite',
                          animationTimingFunction: 'linear',
                        }}
                      >
                        {/* Duplicate content for seamless loop */}
                        {[...techGroup, ...techGroup].map((tech, techIndex) => (
                          <Badge
                            key={`${tech}-${techIndex}`}
                            variant="secondary"
                            className="whitespace-nowrap rounded-lg bg-neutral-200/80 px-4 py-2 text-sm font-semibold text-neutral-700 hover:bg-neutral-300/80"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>

          {/* Right Column: Photos + Connect */}
          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-4">
              <ImageWithSkeleton
                src={moments2}
                alt="Portrait 1"
                className="h-48 w-full rounded-2xl object-cover"
                rounded="rounded-2xl"
              />
              <ImageWithSkeleton
                src={moments1}
                alt="Portrait 2"
                className="h-48 w-full rounded-2xl object-cover"
                rounded="rounded-2xl"
              />
            </div>
            <div className="">
              <ContactMeBox />
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
