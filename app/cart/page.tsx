"use client"

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ChevronLeft, ShoppingBag, Trash2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import { useCart } from '@/context/cart-context'
import { useAuth } from '@/context/auth-context'

export default function CartPage() {
  const router = useRouter()
  const { cartItems, removeFromCart, updateQuantity, getTotalPrice, clearCart } = useCart()
  const { user } = useAuth()
  const [promoCode, setPromoCode] = useState('')
  
  const subtotal = getTotalPrice()
  const shippingCost = subtotal > 50 ? 0 : 5.99
  const total = subtotal + shippingCost
  
  const handleCheckout = () => {
    if (!user) {
      router.push('/login?redirect=/checkout')
      return
    }
    
    router.push('/checkout')
  }
  
  if (cartItems.length === 0) {
    return (
      <div className="container-custom py-16 min-h-[70vh] flex flex-col items-center justify-center">
        <div className="text-center">
          <div className="bg-muted inline-flex items-center justify-center p-6 rounded-full mb-6">
            <ShoppingBag className="h-10 w-10 text-muted-foreground" />
          </div>
          <h1 className="text-3xl font-playfair mb-3">Your cart is empty</h1>
          <p className="text-muted-foreground mb-6 max-w-md">
            Looks like you haven&apos;t added any items to your cart yet. 
            Explore our products and find something you&apos;ll love.
          </p>
          <Button asChild size="lg">
            <Link href="/products">
              Continue Shopping
            </Link>
          </Button>
        </div>
      </div>
    )
  }
  
  return (
    <div className="container-custom py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-playfair mb-2">Shopping Cart</h1>
        <p className="text-muted-foreground">
          You have {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'} in your cart
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          <div className="space-y-6">
            {cartItems.map((item) => (
              <div key={item.id} className="flex flex-col sm:flex-row gap-4 pb-6 border-b">
                <div className="relative h-24 w-24 sm:h-32 sm:w-32 rounded-md overflow-hidden flex-shrink-0">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 96px, 128px"
                  />
                </div>
                
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between mb-1">
                      <Link href={`/products/${item.id}`}>
                        <h3 className="font-medium hover:text-primary transition-colors">
                          {item.name}
                        </h3>
                      </Link>
                      <p className="font-medium">
                        {new Intl.NumberFormat('en-US', {
                          style: 'currency',
                          currency: 'USD',
                        }).format(item.price)}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8 rounded-r-none"
                        onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                        disabled={item.quantity <= 1}
                      >
                        -
                      </Button>
                      <div className="h-8 px-3 flex items-center justify-center border-y border-input">
                        {item.quantity}
                      </div>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8 rounded-l-none"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        +
                      </Button>
                    </div>
                    
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => removeFromCart(item.id)}
                    >
                      <Trash2 className="h-4 w-4 mr-1" />
                      Remove
                    </Button>
                  </div>
                </div>
              </div>
            ))}
            
            <div className="flex justify-between items-center pt-4">
              <Button variant="ghost" asChild>
                <Link href="/products" className="flex items-center">
                  <ChevronLeft className="mr-2 h-4 w-4" />
                  Continue Shopping
                </Link>
              </Button>
              
              <Button 
                variant="outline" 
                onClick={clearCart}
              >
                Clear Cart
              </Button>
            </div>
          </div>
        </div>
        
        {/* Order Summary */}
        <div>
          <div className="bg-card rounded-lg border p-6 sticky top-24">
            <h2 className="font-playfair text-xl mb-4">Order Summary</h2>
            
            <div className="space-y-3 mb-6">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Subtotal</span>
                <span>
                  {new Intl.NumberFormat('en-US', {
                    style: 'currency',
                    currency: 'USD',
                  }).format(subtotal)}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Shipping</span>
                <span>
                  {shippingCost === 0 
                    ? 'Free' 
                    : new Intl.NumberFormat('en-US', {
                        style: 'currency',
                        currency: 'USD',
                      }).format(shippingCost)
                  }
                </span>
              </div>
              
              <Separator className="my-4" />
              
              <div className="flex justify-between font-medium text-lg">
                <span>Total</span>
                <span>
                  {new Intl.NumberFormat('en-US', {
                    style: 'currency',
                    currency: 'USD',
                  }).format(total)}
                </span>
              </div>
            </div>
            
            {/* Promo Code */}
            <div className="mb-6">
              <p className="text-sm font-medium mb-2">Promo Code</p>
              <div className="flex space-x-2">
                <Input
                  placeholder="Enter code"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                />
                <Button variant="outline">Apply</Button>
              </div>
            </div>
            
            <Button 
              className="w-full mb-4" 
              size="lg"
              onClick={handleCheckout}
            >
              Proceed to Checkout
            </Button>
            
            <p className="text-sm text-muted-foreground text-center">
              Free shipping on orders over $50
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}