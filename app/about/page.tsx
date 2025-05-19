import { Metadata } from 'next'
import Image from 'next/image'
import { Badge } from '@/components/ui/badge'

export const metadata: Metadata = {
  title: 'About Us | Beauty Sparkle Hub',
  description: 'Learn about our story, values, and commitment to providing premium beauty products.',
}

export default function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[500px]">
        <Image
          src="https://images.pexels.com/photos/3762655/pexels-photo-3762655.jpeg"
          alt="Beauty Sparkle Hub team"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent" />
        <div className="relative z-10 h-full container-custom flex flex-col justify-center">
          <Badge className="mb-4 w-fit bg-primary text-primary-foreground px-3 py-1">About Us</Badge>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-playfair mb-4 max-w-2xl">
            Our Story & Mission
          </h1>
          <p className="text-lg md:text-xl text-gray-100 max-w-xl">
            Creating beauty products that enhance your natural radiance
          </p>
        </div>
      </section>
      
      {/* Our Story */}
      <section className="py-16 bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-playfair mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Beauty Sparkle Hub was founded in 2018 with a simple mission: to create premium beauty products that enhance natural beauty without compromising on quality, ethics, or sustainability.
                </p>
                <p>
                  Our founder, Elizabeth Chen, struggled to find products that were both effective and aligned with her values. After years of disappointment with mainstream offerings, she assembled a team of cosmetic chemists, dermatologists, and beauty enthusiasts to create something better.
                </p>
                <p>
                  What began as a small passion project has grown into a beloved brand with a global community of customers who share our vision for beauty that doesn&apos;t sacrifice ethics for results.
                </p>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/3373736/pexels-photo-3373736.jpeg"
                alt="Beauty products"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Values */}
      <section className="py-16 bg-card">
        <div className="container-custom">
          <h2 className="text-3xl font-playfair mb-10 text-center">Our Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Quality */}
            <div className="bg-background p-8 rounded-lg">
              <div className="text-primary text-4xl mb-4">✨</div>
              <h3 className="text-xl font-playfair mb-3">Premium Quality</h3>
              <p className="text-muted-foreground">
                We source the finest ingredients and formulate our products to meet the highest standards of efficacy and safety.
              </p>
            </div>
            
            {/* Sustainability */}
            <div className="bg-background p-8 rounded-lg">
              <div className="text-primary text-4xl mb-4">🌿</div>
              <h3 className="text-xl font-playfair mb-3">Sustainability</h3>
              <p className="text-muted-foreground">
                From responsibly sourced ingredients to eco-friendly packaging, we&apos;re committed to reducing our environmental footprint.
              </p>
            </div>
            
            {/* Cruelty-Free */}
            <div className="bg-background p-8 rounded-lg">
              <div className="text-primary text-4xl mb-4">🐰</div>
              <h3 className="text-xl font-playfair mb-3">Cruelty-Free</h3>
              <p className="text-muted-foreground">
                We never test on animals and work only with suppliers who uphold the same ethical standards.
              </p>
            </div>
            
            {/* Inclusivity */}
            <div className="bg-background p-8 rounded-lg">
              <div className="text-primary text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-playfair mb-3">Inclusivity</h3>
              <p className="text-muted-foreground">
                Beauty comes in all forms. We create products for everyone, regardless of age, skin tone, or gender.
              </p>
            </div>
            
            {/* Transparency */}
            <div className="bg-background p-8 rounded-lg">
              <div className="text-primary text-4xl mb-4">👁️</div>
              <h3 className="text-xl font-playfair mb-3">Transparency</h3>
              <p className="text-muted-foreground">
                We believe you deserve to know what&apos;s in your products and how they&apos;re made. No secrets, just honesty.
              </p>
            </div>
            
            {/* Community */}
            <div className="bg-background p-8 rounded-lg">
              <div className="text-primary text-4xl mb-4">💬</div>
              <h3 className="text-xl font-playfair mb-3">Community</h3>
              <p className="text-muted-foreground">
                We listen to our customers and involve them in our product development process to create solutions that truly work.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-16 bg-background">
        <div className="container-custom">
          <h2 className="text-3xl font-playfair mb-10 text-center">Meet Our Team</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Team Member 1 */}
            <div className="text-center">
              <div className="relative h-64 mb-4 rounded-lg overflow-hidden">
                <Image
                  src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg"
                  alt="Elizabeth Chen - Founder & CEO"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <h3 className="font-playfair text-lg mb-1">Elizabeth Chen</h3>
              <p className="text-primary text-sm mb-2">Founder & CEO</p>
              <p className="text-muted-foreground text-sm">
                Visionary entrepreneur with a passion for ethical beauty
              </p>
            </div>
            
            {/* Team Member 2 */}
            <div className="text-center">
              <div className="relative h-64 mb-4 rounded-lg overflow-hidden">
                <Image
                  src="https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg"
                  alt="Dr. Maya Williams - Head of Product Development"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <h3 className="font-playfair text-lg mb-1">Dr. Maya Williams</h3>
              <p className="text-primary text-sm mb-2">Head of Product Development</p>
              <p className="text-muted-foreground text-sm">
                Cosmetic chemist with 15+ years in the beauty industry
              </p>
            </div>
            
            {/* Team Member 3 */}
            <div className="text-center">
              <div className="relative h-64 mb-4 rounded-lg overflow-hidden">
                <Image
                  src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg"
                  alt="James Kim - Creative Director"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <h3 className="font-playfair text-lg mb-1">James Kim</h3>
              <p className="text-primary text-sm mb-2">Creative Director</p>
              <p className="text-muted-foreground text-sm">
                Award-winning designer with an eye for beauty and functionality
              </p>
            </div>
            
            {/* Team Member 4 */}
            <div className="text-center">
              <div className="relative h-64 mb-4 rounded-lg overflow-hidden">
                <Image
                  src="https://images.pexels.com/photos/1181695/pexels-photo-1181695.jpeg"
                  alt="Sophia Rodriguez - Sustainability Officer"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <h3 className="font-playfair text-lg mb-1">Sophia Rodriguez</h3>
              <p className="text-primary text-sm mb-2">Sustainability Officer</p>
              <p className="text-muted-foreground text-sm">
                Environmental scientist dedicated to reducing our ecological footprint
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Join Us Section */}
      <section className="py-16 bg-primary/10">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-playfair mb-4">Join Our Journey</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            We&apos;re on a mission to redefine beauty. Join our community of beauty enthusiasts who value quality, sustainability, and authenticity.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="/products" 
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
            >
              Shop Our Products
            </a>
            <a 
              href="/contact" 
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}