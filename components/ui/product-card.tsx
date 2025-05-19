import Link from 'next/link'
import Image from 'next/image'
import { Product } from '@/lib/types'
import { cn } from '@/lib/utils'
import { ShoppingBag, Heart } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { 
  Card, 
  CardContent, 
  CardFooter 
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

interface ProductCardProps {
  product: Product
  className?: string
}

export function ProductCard({ product, className }: ProductCardProps) {
  const { id, name, price, images, rating, category, bestSeller, new: isNew, discountPercentage } = product
  
  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price)
  
  const discountedPrice = discountPercentage 
    ? price - (price * (discountPercentage / 100)) 
    : null
    
  const formattedDiscountedPrice = discountedPrice 
    ? new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(discountedPrice)
    : null
  
  return (
    <Card className={cn("product-card border-0 overflow-hidden", className)}>
      <Link href={`/products/${id}`} className="block h-[300px] relative overflow-hidden">
        <Image
          src={images[0]}
          alt={name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="product-image object-cover"
          priority
        />
        {bestSeller && (
          <Badge 
            variant="default" 
            className="absolute top-3 left-3 z-10 bg-primary text-xs uppercase tracking-wider"
          >
            Bestseller
          </Badge>
        )}
        {isNew && (
          <Badge 
            variant="secondary" 
            className="absolute top-3 left-3 z-10 text-xs uppercase tracking-wider"
          >
            New
          </Badge>
        )}
        {discountPercentage && (
          <Badge 
            variant="destructive" 
            className="absolute top-3 right-3 z-10 text-xs uppercase tracking-wider"
          >
            {discountPercentage}% Off
          </Badge>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </Link>
      
      <CardContent className="p-4">
        <Link href={`/products/${id}`}>
          <h3 className="font-medium text-base md:text-lg truncate mb-1 hover:text-primary transition-colors">
            {name}
          </h3>
        </Link>
        <div className="flex justify-between items-center">
          <div>
            <Link href={`/products?category=${category}`}>
              <p className="text-muted-foreground text-sm capitalize">
                {category}
              </p>
            </Link>
            <div className="flex items-center gap-1 mt-1">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <span 
                    key={i} 
                    className={cn(
                      "text-lg",
                      i < Math.floor(rating) 
                        ? "text-primary" 
                        : "text-muted"
                    )}
                  >
                    ★
                  </span>
                ))}
              </div>
              <span className="text-xs text-muted-foreground">
                ({rating.toFixed(1)})
              </span>
            </div>
          </div>
          <div className="text-right">
            {discountedPrice ? (
              <div>
                <span className="text-muted-foreground line-through text-sm mr-2">
                  {formattedPrice}
                </span>
                <span className="text-primary font-semibold">
                  {formattedDiscountedPrice}
                </span>
              </div>
            ) : (
              <span className="font-semibold">{formattedPrice}</span>
            )}
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="p-4 pt-0 gap-2">
        <Link href={`/products/${id}`} className="w-full">
          <Button variant="default" className="w-full">
            <ShoppingBag className="h-4 w-4 mr-2" />
            View Product
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}