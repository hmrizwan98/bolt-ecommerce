// import { Metadata } from 'next'
// import ProductsPage from './products-page'
// import { products } from '@/lib/data'
// import { Suspense } from 'react';

// export const metadata: Metadata = {
//   title: 'All Products | Beauty Sparkle Hub',
//   description: 'Browse our collection of premium beauty products. Skincare, makeup, haircare and fragrances.',
// }

// export default function Page({ 
//   searchParams,
// }: {
//   searchParams?: {
//     category?: string;
//     search?: string;
//     sort?: string;
//   };
// }) {
//   return (
//     <Suspense fallback={
//       <div className="flex items-center justify-center h-screen">
//         <div className="loader"></div>
//       </div>
//     }>
//       {/* ProductsPage will handle the searchParams */}
//       <ProductsPage searchParams={searchParams} />
//     </Suspense>
//   )
// }

import React from 'react'

interface Props {}

function Page(props: Props) {
  const {} = props

  return (
    <div className="container-custom py-16 min-h-[70vh] flex items-center justify-center">
      <div className="w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6">Products</h1>
        <p className="text-gray-600">Browse our collection of premium beauty products.</p>
      </div>
    </div>
  )
}

export default Page
