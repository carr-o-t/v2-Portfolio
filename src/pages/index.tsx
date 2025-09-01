import HeroGrid from '@/components/hero-grid'

const Index = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full">
        <div className="portfolio-section p-4 pt-8">
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
    </>
  )
}

export default Index
