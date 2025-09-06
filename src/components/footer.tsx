import { personalInfo } from '@/entities'
import { Icons } from './Icons'

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-neutral-300">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="mb-6 md:mb-0">
            <p className="text-sm font-light tracking-wide">
              © 2025 ByteTheCarrot.dev. All rights reserved.
            </p>
          </div>
          <div className="flex items-center space-x-6">
            <a
              href={personalInfo.social_profiles.linkedin}
              className="flex items-center gap-1 text-sm font-light tracking-wide transition-colors hover:text-white"
            >
              <Icons.Linkedin className="h-5 w-5" />
            </a>
            {/* TODO: Find X icon */}
            {/* <a
                            href={personalInfo.social_profiles.twitter}
                            className="text-sm font-light tracking-wide hover:text-white transition-colors flex items-center gap-1"
                          >
                            <LucideTwitter className="w-5 h-5" />
                          </a> */}
            <a
              href={personalInfo.social_profiles.github}
              className="flex items-center gap-1 text-sm font-light tracking-wide transition-colors hover:text-white"
            >
              <Icons.Github className="h-5 w-5" />
            </a>
            <a
              href={`mailto:${personalInfo.social_profiles.email}`}
              className="flex items-center gap-1 text-sm font-light tracking-wide transition-colors hover:text-white"
            >
              <Icons.Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
