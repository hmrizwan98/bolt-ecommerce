import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { getProductById, getAllProducts } from '@/lib/data'
import ProductDetail from './product-detail'
import { Product } from '@/lib/types'

interface ProductPageProps {
  params: {
    id: string
  }
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const product = getProductById(params.id)
  
  if (!product) {
    return {
      title: 'Product Not Found | Beauty Sparkle Hub',
      description: 'The requested product could not be found.'
    }
  }
  
  return {
    title: `${product.name} | Beauty Sparkle Hub`,
    description: product.description.substring(0, 160),
    openGraph: {
      images: [product.images[0]],
    },
  }
}

export async function generateStaticParams() {
  const products: Product[] = await getAllProducts(); // ✅ Await the async call
  console.log('All product IDs:', products.map(p => p.id));

  const paths = products.map((product: Product) => ({
    id: product.id, // ✅ No `params` wrapper needed in App Router
  }));

  console.log('Generated paths:', paths);
  return paths;
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = getProductById(params.id)
  
  if (!product) {
    notFound()
  }
  
  return <ProductDetail product={product} />
}