import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Github, Zap, Code, Palette } from 'lucide-react'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <header className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold text-slate-900 dark:text-slate-100">
            ByteTheCarrot v3
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-slate-600 dark:text-slate-400">
            A professional React project setup with TypeScript, Tailwind CSS,
            and modern development tools
          </p>
        </header>

        {/* Features Grid */}
        <div className="mb-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card className="transition-shadow hover:shadow-lg">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Code className="h-5 w-5 text-blue-600" />
                <CardTitle>TypeScript</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Full TypeScript support with strict type checking and modern
                ES2020 features
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="transition-shadow hover:shadow-lg">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Palette className="h-5 w-5 text-green-600" />
                <CardTitle>Tailwind CSS</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Utility-first CSS framework with custom design system and CVA
                support
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="transition-shadow hover:shadow-lg">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-yellow-600" />
                <CardTitle>Vite</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Lightning-fast build tool with HMR and optimized production
                builds
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        {/* Tech Stack */}
        <div className="mb-8 text-center">
          <h2 className="mb-4 text-2xl font-semibold text-slate-800 dark:text-slate-200">
            Tech Stack
          </h2>
          <div className="flex flex-wrap justify-center gap-2">
            <Badge variant="secondary">React 18</Badge>
            <Badge variant="secondary">TypeScript</Badge>
            <Badge variant="secondary">Tailwind CSS</Badge>
            <Badge variant="secondary">Class Variance Authority</Badge>
            <Badge variant="secondary">ESLint</Badge>
            <Badge variant="secondary">Prettier</Badge>
            <Badge variant="secondary">Vite</Badge>
            <Badge variant="secondary">Vitest</Badge>
          </div>
        </div>

        {/* Actions */}
        <div className="text-center">
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button size="lg" className="gap-2">
              <Github className="h-4 w-4" />
              View on GitHub
            </Button>
            <Button variant="outline" size="lg" className="gap-2">
              <Code className="h-4 w-4" />
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
