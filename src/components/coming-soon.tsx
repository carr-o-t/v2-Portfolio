import { Badge } from '@/components/ui/badge'
import { V1_PORTFOLIO_URL } from '@/config'
import { comingSoonMessages, personalInfo } from '@/entities'
import { cn } from '@/lib/utils'
import { Icons } from './Icons'

interface ComingSoonProps {
  page?: 'works' | 'contact' | 'cv' | 'default'
}

const ComingSoon = ({ page = 'default' }: ComingSoonProps) => {
  const message = comingSoonMessages[page] || comingSoonMessages.default
  return (
    <div className="relative min-h-screen py-12 md:py-20">
      <div className="mx-auto max-w-4xl px-6">
        <div className="mb-16 space-x-4 text-center">
          <div className="mb-6 flex flex-wrap items-center justify-center gap-4">
            <Badge
              variant="outline"
              className="border-neutral-300 px-3 py-1 font-light text-neutral-600"
            >
              Coming Soon
            </Badge>
            <a href={V1_PORTFOLIO_URL} target="_top" className={cn('')}>
              <Badge className="group cursor-pointer px-3 py-1 font-light uppercase transition-all duration-150 ease-in-out hover:scale-105 ">
                <span className="relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-current after:transition-all after:duration-300 group-hover:after:w-full">
                  Check out my works on Portfolio V1 ↗
                </span>
              </Badge>
            </a>
          </div>
          <h1 className="!ml-0 mb-6 text-4xl font-light text-neutral-800 lg:text-6xl">
            {message.title}
            <span className="block text-primary"> {message.subtitle}</span>
          </h1>
          <p className="!mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground lg:text-xl">
            {message.description}
          </p>
        </div>

        <div className="space-y-6 text-center">
          {message.showContact && (
            <div className="flex justify-center">
              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center gap-2 rounded-lg bg-primary/80 px-6 py-3 text-primary-foreground transition-colors hover:bg-primary"
              >
                <Icons.Mail className="h-4 w-4" />
                Get in Touch
              </a>
            </div>
          )}
          <p className="text-sm text-muted-foreground">
            Check back soon for updates
          </p>
        </div>
      </div>
    </div>
  )
}

export default ComingSoon
