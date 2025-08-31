import Footer from '@/components/footer'
import HeroGrid from '@/components/hero-grid'
import Navigation from '@/components/ui/navigation'

const Index = () => {
  return (
    <>
    <div className="hero-bg"></div>
    <div className="relative z-10 min-h-screen bg">
      <Navigation />


      {/* Hero Section */}
      <section className="relative w-full">
        <div className="portfolio-section pt-8">
        <div className="portfolio-container">
          <div className="mb-16 text-center">
            <h1 className="mb-12 text-3xl font-medium tracking-normal text-foreground/90 lg:text-4xl">
              Let's build it together.
            </h1>
            <HeroGrid />
          </div>
        </div>

        </div>
      </section>

      <Footer />
    </div>
    </>
  )
}

export default Index
