"use client"

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Heart, Share2, ChevronLeft, ChevronRight, ShoppingBag, Star, ChevronRight as ChevronRightIcon } from 'lucide-react'
import { useToast } from '@/components/ui/use-toast'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ProductCard } from '@/components/ui/product-card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { cn } from '@/lib/utils'
import { Product } from '@/lib/types'
import { useCart } from '@/context/cart-context'
import { getRelatedProducts } from '@/lib/data'

interface ProductDetailProps {
  product: Product
}

export default function ProductDetail({ product }: ProductDetailProps) {
  const [quantity, setQuantity] = useState(1)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const { addToCart } = useCart()
  const { toast } = useToast()
  
  const relatedProducts = getRelatedProducts(product.id)
  
  const handlePrevImage = () => {
    setCurrentImageIndex(prev => 
      prev === 0 ? product.images.length - 1 : prev - 1
    )
  }
  
  const handleNextImage = () => {
    setCurrentImageIndex(prev => 
      prev === product.images.length - 1 ? 0 : prev + 1
    )
  }
  
  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      quantity
    })
  }
  
  const handleBuyNow = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      quantity
    })
    
    if (typeof window !== 'undefined') {
      window.location.href = '/cart'
    }
  }
  
  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(product.price)
  
  return (
    <div className="py-8 md:py-12">
      <div className="container-custom">
        {/* Breadcrumbs */}
        <nav className="flex mb-6" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <Link href="/" className="text-sm text-muted-foreground hover:text-primary">
                Home
              </Link>
            </li>
            <li>
              <div className="flex items-center">
                <ChevronRightIcon className="w-4 h-4 text-muted-foreground mx-1" />
                <Link href="/products" className="text-sm text-muted-foreground hover:text-primary">
                  Products
                </Link>
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <ChevronRightIcon className="w-4 h-4 text-muted-foreground mx-1" />
                <Link 
                  href={`/products?category=${product.category}`}
                  className="text-sm text-muted-foreground hover:text-primary capitalize"
                >
                  {product.category}
                </Link>
              </div>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <ChevronRightIcon className="w-4 h-4 text-muted-foreground mx-1" />
                <span className="text-sm font-medium truncate max-w-[150px]">
                  {product.name}
                </span>
              </div>
            </li>
          </ol>
        </nav>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative aspect-square overflow-hidden rounded-lg bg-muted">
              <div className="absolute inset-0">
                <Image
                  src={product.images[currentImageIndex]}
                  alt={product.name}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute inset-0 flex items-center justify-between p-4">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-background/50 backdrop-blur-sm"
                  onClick={handlePrevImage}
                >
                  <ChevronLeft className="h-5 w-5" />
                  <span className="sr-only">Previous image</span>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-background/50 backdrop-blur-sm"
                  onClick={handleNextImage}
                >
                  <ChevronRight className="h-5 w-5" />
                  <span className="sr-only">Next image</span>
                </Button>
              </div>
              
              {/* Badges */}
              <div className="absolute top-4 left-4 flex flex-col gap-2">
                {product.bestSeller && (
                  <Badge variant="default" className="bg-primary text-primary-foreground">
                    Bestseller
                  </Badge>
                )}
                {product.new && (
                  <Badge variant="secondary">New</Badge>
                )}
              </div>
            </div>
            
            {/* Thumbnail Navigation */}
            <div className="flex space-x-2 overflow-auto pb-1">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  className={cn(
                    "relative h-20 w-20 rounded-md overflow-hidden",
                    currentImageIndex === index && "ring-2 ring-primary"
                  )}
                  onClick={() => setCurrentImageIndex(index)}
                >
                  <Image
                    src={image}
                    alt={`${product.name} thumbnail ${index + 1}`}
                    fill
                    sizes="80px"
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
          
          {/* Product Details */}
          <div>
            <div className="mb-6">
              <h1 className="text-3xl font-playfair mb-2">{product.name}</h1>
              
              <div className="flex items-center gap-2 mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={cn(
                        "h-4 w-4",
                        i < Math.floor(product.rating)
                          ? "text-primary fill-primary"
                          : "text-muted"
                      )}
                    />
                  ))}
                </div>
                <span className="text-sm">
                  {product.rating.toFixed(1)} ({product.reviews} reviews)
                </span>
              </div>
              
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-2xl font-semibold">{formattedPrice}</span>
                {product.discountPercentage && (
                  <div className="flex items-center gap-2">
                    <span className="text-lg text-muted-foreground line-through">
                      {new Intl.NumberFormat('en-US', {
                        style: 'currency',
                        currency: 'USD',
                      }).format(product.price * (1 + product.discountPercentage / 100))}
                    </span>
                    <Badge variant="destructive">
                      {product.discountPercentage}% Off
                    </Badge>
                  </div>
                )}
              </div>
              
              <div className="prose prose-sm dark:prose-invert mb-6">
                <p className="text-muted-foreground">{product.description}</p>
              </div>
              
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-medium mb-1">Category</p>
                  <Link 
                    href={`/products?category=${product.category}`}
                    className="inline-flex items-center text-sm text-primary hover:underline capitalize"
                  >
                    {product.category}
                  </Link>
                </div>
                
                <div>
                  <p className="text-sm font-medium mb-2">Quantity</p>
                  <div className="flex items-center">
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                      disabled={quantity <= 1}
                    >
                      -
                    </Button>
                    <span className="w-12 text-center">{quantity}</span>
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => setQuantity(quantity + 1)}
                    >
                      +
                    </Button>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <Button 
                    variant="default" 
                    size="lg" 
                    className="sm:flex-1"
                    onClick={handleAddToCart}
                  >
                    <ShoppingBag className="mr-2 h-4 w-4" />
                    Add to Cart
                  </Button>
                  <Button 
                    variant="secondary" 
                    size="lg" 
                    className="sm:flex-1"
                    onClick={handleBuyNow}
                  >
                    Buy Now
                  </Button>
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t">
                  <Button variant="ghost" size="sm">
                    <Heart className="mr-2 h-4 w-4" />
                    Add to Wishlist
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Share2 className="mr-2 h-4 w-4" />
                    Share
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Product Information Tabs */}
        <div className="mb-16">
          <Tabs defaultValue="details">
            <TabsList className="w-full border-b rounded-none justify-start">
              <TabsTrigger value="details">Details</TabsTrigger>
              <TabsTrigger value="ingredients">Ingredients</TabsTrigger>
              <TabsTrigger value="usage">How to Use</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>
            <TabsContent value="details" className="py-6">
              <div className="prose prose-sm dark:prose-invert max-w-none">
                <h3>Product Details</h3>
                <p>{product.description}</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed euismod, nisl id aliquam ultricies, nunc nisl ultricies nunc, quis ultricies nisl nisl id aliquam ultricies.</p>
                <ul>
                  <li>Premium quality ingredients</li>
                  <li>Cruelty-free and vegan</li>
                  <li>Made in small batches for highest quality</li>
                  <li>Suitable for all skin types</li>
                </ul>
              </div>
            </TabsContent>
            <TabsContent value="ingredients" className="py-6">
              <div className="prose prose-sm dark:prose-invert max-w-none">
                <h3>Ingredients</h3>
                <p>All ingredients are carefully sourced for maximum effectiveness and safety:</p>
                <p>Aqua/Water, Glycerin, Niacinamide, Dimethicone, Caprylic/Capric Triglyceride, Pentylene Glycol, Cetyl Alcohol, Cetearyl Alcohol, Potassium Cetyl Phosphate, Tocopheryl Acetate, Panthenol, Allantoin.</p>
                <p className="text-muted-foreground italic">* Ingredient list may vary slightly between batches to ensure optimal freshness and quality.</p>
              </div>
            </TabsContent>
            <TabsContent value="usage" className="py-6">
              <div className="prose prose-sm dark:prose-invert max-w-none">
                <h3>How to Use</h3>
                <p>For best results, follow these application instructions:</p>
                <ol>
                  <li>Cleanse your face with a gentle cleanser</li>
                  <li>Apply a small amount to your fingertips</li>
                  <li>Gently massage into the skin using upward circular motions</li>
                  <li>Allow to absorb fully before applying makeup</li>
                  <li>Use morning and evening for optimal results</li>
                </ol>
              </div>
            </TabsContent>
            <TabsContent value="reviews" className="py-6">
              <div className="prose prose-sm dark:prose-invert max-w-none">
                <h3>Customer Reviews</h3>
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex-1 max-w-sm">
                    <div className="flex items-center mb-1">
                      <span className="text-2xl font-bold mr-2">{product.rating.toFixed(1)}</span>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={cn(
                              "h-4 w-4",
                              i < Math.floor(product.rating)
                                ? "text-primary fill-primary"
                                : "text-muted"
                            )}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">Based on {product.reviews} reviews</p>
                  </div>
                  <Button>Write a Review</Button>
                </div>
                <div className="space-y-6">
                  {/* Sample reviews - would be dynamic in a real app */}
                  <div className="border-b pb-6">
                    <div className="flex justify-between mb-2">
                      <div>
                        <h4 className="font-medium">Amazing product!</h4>
                        <p className="text-sm text-muted-foreground">by Sarah J., Verified Buyer</p>
                      </div>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-3 w-3 text-primary fill-primary"
                          />
                        ))}
                      </div>
                    </div>
                    <p>I&apos;ve been using this for a month and have seen amazing results. My skin feels so much smoother and looks more radiant. Will definitely repurchase!</p>
                  </div>
                  <div className="border-b pb-6">
                    <div className="flex justify-between mb-2">
                      <div>
                        <h4 className="font-medium">Good, but pricey</h4>
                        <p className="text-sm text-muted-foreground">by Michael T., Verified Buyer</p>
                      </div>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={cn(
                              "h-3 w-3",
                              i < 4 ? "text-primary fill-primary" : "text-muted"
                            )}
                          />
                        ))}
                      </div>
                    </div>
                    <p>The product works well, but I think it&apos;s a bit overpriced for the quantity you get. I do like how it makes my skin feel though.</p>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
        
        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div>
            <h2 className="text-2xl font-playfair mb-6">You May Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {relatedProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}