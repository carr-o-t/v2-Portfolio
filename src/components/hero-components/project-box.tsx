import { imagePaths } from '@/lib/utils';
import { lazy, Suspense } from 'react';
import { Skeleton } from '../ui/skeleton';

const ImageWithSkeleton = lazy(() => import('../ui/image-with-skeleton').then(mod => ({ default: mod.ImageWithSkeleton })));

const ProjectBox = () => {
    return (

        <div className="group relative flex h-full flex-col justify-end overflow-hidden rounded-3xl bg-theme-box-bg p-6 transition-all duration-500 hover:shadow-lg">
            {/* <img
            src={productDesign}
            alt="Web Development Projects"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          /> */}
            <div className="h-[300px] md:h-[200px] relative rounded-xl overflow-hidden mb-4">
                <Suspense fallback={<Skeleton className='h-full w-full rounded-xl' />}>
                    <ImageWithSkeleton
                        src={imagePaths.find(img => img.key === "projectBox")?.path || ''}
                        alt="Web Development Projects"
                        className="!absolute top-0 left-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        rounded="rounded-xl"
                    />
                </Suspense>
            </div>
            {/* <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div> */}
            <div className="relative ">
                <h3 className="mb-2 text-xl font-medium text-justify">My Projects</h3>
                <p className="text-sm text-justify font-light leading-relaxed ">
                    Building scalable web applications and mobile solutions that solve
                    real-world problems with clean, efficient code.
                </p>
            </div>
        </div>
    )
}

export { ProjectBox };

