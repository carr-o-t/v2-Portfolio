import { imagePaths } from '@/lib/utils'
import { ImageWithSkeleton } from "../ui/image-with-skeleton"

const ProjectBox = () => {
    return (

        <div className="group relative flex h-full flex-col justify-end overflow-hidden rounded-3xl bg-neutral-100 p-6 transition-all duration-500 hover:shadow-lg">
            {/* <img
            src={productDesign}
            alt="Web Development Projects"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          /> */}
            <ImageWithSkeleton
                src={imagePaths.find(img => img.key === "projectBox")?.path || ''}
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
    )
}

export { ProjectBox }
