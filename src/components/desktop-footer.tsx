import { personalInfo } from '@/entities'
import { cn } from '@/lib/utils'
import React, { useState } from 'react'
import { Icons } from './Icons'

const DesktopFooter: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <>
      {/* Desktop Vertical Footer */}
      <footer className="fixed bottom-0 left-0 z-10">
        <div className="flex flex-col items-center space-y-6 p-6">
          {/* Social Icons */}
          <div className="flex flex-col space-y-4">
            <a
              href={`mailto:${personalInfo.social_profiles.email}`}
              className="flex h-8 w-8 items-center justify-center rounded-full border border-muted-foreground/30 bg-theme-btn-beige/50 backdrop-blur-sm transition-colors hover:border-foreground hover:text-foreground"
            >
              <Icons.Mail size={16} />
            </a>
            <a
              href={personalInfo.social_profiles.linkedin}
              className="flex h-8 w-8 items-center justify-center rounded-full border border-muted-foreground/30 bg-theme-btn-beige/50 backdrop-blur-sm transition-colors hover:border-foreground hover:text-foreground"
            >
              <Icons.Linkedin size={16} />
            </a>
            <a
              href={personalInfo.social_profiles.github}
              className="flex h-8 w-8 items-center justify-center rounded-full border border-muted-foreground/30 bg-theme-btn-beige/50 backdrop-blur-sm transition-colors hover:border-foreground hover:text-foreground"
            >
              <Icons.Github size={16} />
            </a>
            {/* TODO: Find X icon */}
            {/* <a
                            href={personalInfo.social_profiles.twitter}
                            className="w-8 h-8 rounded-full border border-muted-foreground/30 flex items-center justify-center hover:border-foreground hover:text-foreground transition-colors bg-theme-btn-beige/50 backdrop-blur-sm"
                        >
                            <Twitter size={16} />
                        </a> */}
          </div>

          {/* Copyright with expand effect */}
          <div className="relative flex h-8 w-8 items-center justify-center">
            <div
              className={cn(
                'flex cursor-pointer items-center rounded-full border bg-theme-btn-beige/50 p-2 backdrop-blur-sm',
                isHovered && 'border-primary'
              )}
              onMouseEnter={(e) => {
                e.stopPropagation()
                setIsHovered(true)
              }}
              onMouseLeave={(e) => {
                e.stopPropagation()
                setIsHovered(false)
              }}
            >
              <Icons.Copyright size={14} className="text-muted-foreground" />
              <div
                className={`absolute left-full ml-2 overflow-hidden rounded-full border bg-theme-btn-beige/50 p-2 backdrop-blur-sm transition-all duration-300 ease-out ${
                  isHovered ? 'max-w-xs opacity-100' : 'max-w-0 opacity-0'
                }`}
              >
                <span className="whitespace-nowrap text-xs text-muted-foreground">
                  2025 ByteTheCarrot.dev. All rights reserved.
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default DesktopFooter
