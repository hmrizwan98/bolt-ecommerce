import { Metadata } from 'next'
import ProductsPage from './products-page'
import { products } from '@/lib/data'

export const metadata: Metadata = {
  title: 'All Products | Beauty Sparkle Hub',
  description: 'Browse our collection of premium beauty products. Skincare, makeup, haircare and fragrances.',
}

export default function Page({ 
  searchParams,
}: {
  searchParams?: {
    category?: string;
    search?: string;
    sort?: string;
  };
}) {
  return (
    <ProductsPage searchParams={searchParams} />
  )
}