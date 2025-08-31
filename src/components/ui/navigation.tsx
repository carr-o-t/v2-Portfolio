import { personalInfo } from '@/entities'
import { cn } from '@/lib/utils'
import { Menu, X } from 'lucide-react'
import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Button } from './button'

interface NavigationProps {
  className?: string
}

const Navigation: React.FC<NavigationProps> = ({ className }) => {
  const location = useLocation()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { label: 'Works', href: '/works' },
    { label: 'CV', href: '/cv' },
  ]

  const isActive = (href: string) => location.pathname === href

  return (
    <nav
      className={cn(
        'portfolio-container sticky left-0 top-0 px-4 py-6',
        className
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <Link to="/" className="group flex items-center space-x-4">
          <div className="h-10 w-10 overflow-hidden rounded-full bg-muted md:h-12 md:w-12">
            <img
              src={personalInfo.profileImage}
              alt={personalInfo.name}
              className="h-full w-full object-cover transition-transform group-hover:scale-105"
            />
          </div>
          <div className="hidden md:block">
            <h1 className="text-sm font-medium tracking-tight">
              {personalInfo.name}
            </h1>
            <p className="text-sm text-muted-foreground">
              {personalInfo.title}
            </p>
          </div>
        </Link>

        <div className="hidden items-center space-x-8 rounded-md bg-accent/70 p-2 md:flex md:px-4 md:py-2">
          <div className="flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  'text-xs font-medium transition-colors hover:text-foreground md:text-sm',
                  isActive(item.href)
                    ? 'text-foreground'
                    : 'text-muted-foreground'
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <a
            href={`mailto:${personalInfo.email}`}
            className="hidden cursor-pointer rounded-lg bg-primary/80 px-6 py-2 text-xs font-medium text-primary-foreground transition-all hover:bg-primary md:block md:text-sm"
          >
            Contact me
          </a>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </Button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          'absolute left-0 top-nav w-full overflow-hidden border-t bg-white/80 p-6 backdrop-blur-sm transition-all duration-500 ease-out md:hidden',
          mobileMenuOpen
            ? 'max-h-64 translate-y-0 opacity-100'
            : 'max-h-0 -translate-y-4 border-none opacity-0'
        )}
      >
        <div className="space-y-4">
          {navItems.map((item, index) => (
            <Link
              key={item.label}
              to={item.href}
              className={cn(
                `block text-base font-medium tracking-wide transition-all duration-300 ease-out`,
                isActive(item.href)
                  ? 'text-neutral-900'
                  : 'text-neutral-600 hover:text-neutral-900',
                mobileMenuOpen
                  ? 'translate-y-0 opacity-100'
                  : 'pointer-events-none -translate-y-2 opacity-0'
              )}
              style={{
                transitionDelay: mobileMenuOpen ? `${index * 100}ms` : '0ms',
              }}
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <a
            href={`mailto:${personalInfo.email}`}
            className={cn(
              'block w-full cursor-pointer rounded-lg bg-primary/80 px-6 py-2 text-base font-medium text-primary-foreground transition-all duration-300 ease-out hover:bg-primary',
              mobileMenuOpen
                ? 'translate-y-0 opacity-100'
                : 'pointer-events-none -translate-y-2 opacity-0'
            )}
            style={{
              transitionDelay: mobileMenuOpen
                ? `${navItems.length * 100}ms`
                : '0ms',
            }}
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact me
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
