import { Icons } from '@/components/Icons'
import { Badge } from '@/components/ui/badge'
import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const NotFound = () => {
  const location = useLocation()

  useEffect(() => {
    console.error(
      '404 Error: User attempted to access non-existent route:',
      location.pathname
    )
  }, [location.pathname])

  return (
    <div className="relative min-h-screen py-12 md:py-20">
      <div className="mx-auto max-w-4xl px-6">
        <div className="mb-16 text-center">
          <Badge
            variant="outline"
            className="mb-6 border-neutral-300 px-3 py-1 font-light text-neutral-600"
          >
            Error 404
          </Badge>
          <h1 className="mb-6 text-4xl font-light text-neutral-800 lg:text-6xl">
            Page not found
            <span className="block text-primary"> in the wild</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground lg:text-xl">
            The page you're looking for seems to have wandered off. Don't worry,
            let's get you back on track.
          </p>
        </div>

        <div className="space-y-6 text-center">
          <div className="flex justify-center gap-4">
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-lg bg-primary/80 px-6 py-3 text-primary-foreground transition-colors hover:bg-primary"
            >
              <Icons.Home className="h-4 w-4" />
              Back to Home
            </Link>
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center gap-2 rounded-lg border border-neutral-300 px-6 py-3 text-neutral-700 transition-colors hover:bg-neutral-50"
            >
              <Icons.ArrowLeft className="h-4 w-4" />
              Go Back
            </button>
          </div>
          <p className="text-sm text-muted-foreground">
            Tried to access:{' '}
            <span className="font-mono text-neutral-600">
              {location.pathname}
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default NotFound
