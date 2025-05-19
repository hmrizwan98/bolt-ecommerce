import Link from 'next/link'
import { Check, ShoppingBag } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function OrderSuccessPage() {
  return (
    <div className="container-custom py-16 min-h-[70vh] flex flex-col items-center justify-center">
      <div className="text-center max-w-lg">
        <div className="bg-primary/10 inline-flex items-center justify-center p-6 rounded-full mb-6">
          <Check className="h-12 w-12 text-primary" />
        </div>
        
        <h1 className="text-3xl font-playfair mb-4">Thank You For Your Order!</h1>
        
        <p className="text-muted-foreground mb-2">
          Your order has been placed successfully and is being processed.
        </p>
        
        <p className="text-muted-foreground mb-6">
          You will receive a confirmation email with your order details shortly.
        </p>
        
        <div className="space-y-4">
          <Button asChild size="lg">
            <Link href="/products">
              <ShoppingBag className="mr-2 h-4 w-4" />
              Continue Shopping
            </Link>
          </Button>
          
          <p className="text-sm text-muted-foreground">
            If you have any questions, please{' '}
            <Link href="/contact" className="text-primary hover:underline">
              contact us
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}