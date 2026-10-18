import { About } from '@/components/about'
import { AnnouncementBar } from '@/components/announcement-bar'
import { CartDrawer } from '@/components/cart-drawer'
import { Categories } from '@/components/categories'
import { CoffeeFinder } from '@/components/coffee-finder'
import { DiscoverBand } from '@/components/discover-band'
import { FeaturedProducts } from '@/components/featured-products'
import { Hero } from '@/components/hero'
import { Partners } from '@/components/partners'
import { Process } from '@/components/process'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { Testimonials } from '@/components/testimonials'
import { WhatsAppButton } from '@/components/whatsapp-button'

export default function Home() {
  return (
    <>
      <AnnouncementBar />
      <SiteHeader />
      <main>
        <Hero />
        <Process />
        <Categories />
        <FeaturedProducts />
        <CoffeeFinder />
        <Testimonials />
        <DiscoverBand />
        <About />
        <Partners />
      </main>
      <SiteFooter />
      <CartDrawer />
      <WhatsAppButton />
    </>
  )
}
