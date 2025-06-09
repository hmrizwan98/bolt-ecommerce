import { Metadata } from "next";
import { Suspense } from "react";
import ProductsPage from "./products-page";

export const metadata: Metadata = {
  title: "All Products | Beauty Sparkle Hub",
  description:
    "Browse our collection of premium beauty products. Skincare, makeup, haircare and fragrances.",
};

export default function Page() {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center h-screen">
          <div className="loader"></div>
        </div>
      }
    >
      {/* ProductsPage will handle the searchParams */}
      <ProductsPage />
    </Suspense>
  );
}
