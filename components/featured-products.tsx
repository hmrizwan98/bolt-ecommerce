"use client"

import { useState } from 'react'
import Link from 'next/link'
import { ProductCard } from '@/components/ui/product-card'
import { Button } from '@/components/ui/button'
import { getFeaturedProducts, getBestSellers, getNewArrivals } from '@/lib/data'
import { cn } from '@/lib/utils'

type ProductTab = 'featured' | 'bestsellers' | 'new'

export default function FeaturedProducts() {
  const [activeTab, setActiveTab] = useState<ProductTab>('featured')
  
  const featuredProducts = getFeaturedProducts()
  const bestSellers = getBestSellers()
  const newArrivals = getNewArrivals()
  
  let productsToShow = featuredProducts
  
  switch (activeTab) {
    case 'featured':
      productsToShow = featuredProducts
      break
    case 'bestsellers':
      productsToShow = bestSellers
      break
    case 'new':
      productsToShow = newArrivals
      break
  }
  
  return (
    <section className="py-16 bg-card">
      <div className="container-custom">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-playfair mb-8">Our Products</h2>
          
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <Button
              variant={activeTab === 'featured' ? 'default' : 'outline'}
              onClick={() => setActiveTab('featured')}
              className={cn(
                "rounded-full min-w-[120px]",
                activeTab === 'featured' ? 'bg-primary text-primary-foreground' : ''
              )}
            >
              Featured
            </Button>
            <Button
              variant={activeTab === 'bestsellers' ? 'default' : 'outline'}
              onClick={() => setActiveTab('bestsellers')}
              className={cn(
                "rounded-full min-w-[120px]",
                activeTab === 'bestsellers' ? 'bg-primary text-primary-foreground' : ''
              )}
            >
              Best Sellers
            </Button>
            <Button
              variant={activeTab === 'new' ? 'default' : 'outline'}
              onClick={() => setActiveTab('new')}
              className={cn(
                "rounded-full min-w-[120px]",
                activeTab === 'new' ? 'bg-primary text-primary-foreground' : ''
              )}
            >
              New Arrivals
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {productsToShow.slice(0, 8).map((product, index) => (
            <div 
              key={product.id}
              className="animate-slide-up opacity-0"
              style={{ 
                animationDelay: `${index * 100}ms`,
                animationFillMode: 'forwards' 
              }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button asChild size="lg" variant="outline" className="min-w-[200px]">
            <Link href="/products">View All Products</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}