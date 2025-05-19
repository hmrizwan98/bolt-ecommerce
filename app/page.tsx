import HeroSlider from '@/components/hero-slider'
import CategoryPreview from '@/components/category-preview'
import FeaturedProducts from '@/components/featured-products'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Beauty Sparkle Hub | Luxury Beauty Products',
  description: 'Discover premium beauty products at Beauty Sparkle Hub. Skincare, makeup, and more for the modern woman.',
  keywords: 'beauty, makeup, skincare, cosmetics, luxury beauty',
}

export default function Home() {
  return (
    <div>
      <HeroSlider />
      <CategoryPreview />
      <FeaturedProducts />
      
      {/* Promo Section */}
      <section className="py-16 bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Free Shipping */}
            <div className="bg-card p-6 rounded-lg text-center">
              <div className="text-primary text-4xl mb-4">🚚</div>
              <h3 className="font-playfair text-xl mb-2">Free Shipping</h3>
              <p className="text-muted-foreground text-sm">
                On all orders over $50
              </p>
            </div>
            
            {/* Secure Payment */}
            <div className="bg-card p-6 rounded-lg text-center">
              <div className="text-primary text-4xl mb-4">🔒</div>
              <h3 className="font-playfair text-xl mb-2">Secure Payment</h3>
              <p className="text-muted-foreground text-sm">
                100% secure payment
              </p>
            </div>
            
            {/* Premium Quality */}
            <div className="bg-card p-6 rounded-lg text-center">
              <div className="text-primary text-4xl mb-4">✨</div>
              <h3 className="font-playfair text-xl mb-2">Premium Quality</h3>
              <p className="text-muted-foreground text-sm">
                Cruelty-free luxury products
              </p>
            </div>
            
            {/* Fast Support */}
            <div className="bg-card p-6 rounded-lg text-center">
              <div className="text-primary text-4xl mb-4">💬</div>
              <h3 className="font-playfair text-xl mb-2">24/7 Support</h3>
              <p className="text-muted-foreground text-sm">
                Dedicated support team
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="py-16 bg-primary/10">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-playfair mb-4">Join Our Newsletter</h2>
            <p className="text-muted-foreground mb-6">
              Subscribe to receive updates, exclusive offers, and beauty tips
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                required
              />
              <button 
                type="submit"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}