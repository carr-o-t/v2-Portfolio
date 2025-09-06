import { Badge } from '@/components/ui/badge'
import { personalInfo } from '@/entities'

const PortfolioPreview = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute left-20 top-20 h-32 w-32 rounded-full bg-primary blur-3xl"></div>
          <div className="absolute right-32 top-40 h-24 w-24 rounded-full bg-accent blur-2xl"></div>
          <div className="absolute bottom-32 left-1/3 h-28 w-28 rounded-full bg-secondary blur-3xl"></div>
        </div>

        <div className="relative z-10 mx-auto max-w-6xl px-6 py-20">
          <div className="mb-16 text-center">
            <Badge
              variant="outline"
              className="mb-6 border-primary/30 px-4 py-2 font-light text-primary"
            >
              Portfolio Preview
            </Badge>
            <h1 className="mb-6 text-5xl font-light leading-tight text-foreground lg:text-7xl">
              Front-End focused
              <span className="block text-primary">Full-Stack Developer</span>
            </h1>
            <p className="mx-auto mb-8 max-w-3xl text-xl leading-relaxed text-muted-foreground lg:text-2xl">
              Building fast, scalable, and user-friendly web applications with
              modern technologies
            </p>

            {/* Profile Section */}
            <div className="mb-8 flex items-center justify-center gap-4">
              <div className="h-16 w-16 overflow-hidden rounded-full border-4 border-primary/20">
                <img
                  src={personalInfo.profileImage}
                  alt={personalInfo.name}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="text-left">
                <h2 className="text-xl font-medium text-foreground">
                  {personalInfo.name}
                </h2>
                <p className="text-muted-foreground">{personalInfo.title}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PortfolioPreview
