"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ProductCard } from "@/components/ui/product-card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Slider } from "@/components/ui/slider";
import { products } from "@/lib/data";
import { Category, Product, SortOption } from "@/lib/types";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

interface ProductsPageProps {}

const categories: Category[] = [
  "skincare",
  "makeup",
  "haircare",
  "fragrance",
  "tools",
];
const sortOptions: { value: SortOption; label: string }[] = [
  { value: "price_asc", label: "Price: Low to High" },
  { value: "price_desc", label: "Price: High to Low" },
  { value: "popular", label: "Most Popular" },
  { value: "newest", label: "Newest" },
];

export default function ProductsPage({}: ProductsPageProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Filter states
  const [category, setCategory] = useState<Category | undefined>(
    (searchParams.get("category") as Category) || undefined
  );
  const [searchTerm, setSearchTerm] = useState(
    searchParams.get("search") || ""
  );
  const [sort, setSort] = useState<SortOption>(
    (searchParams.get("sort") as SortOption) || "popular"
  );
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 100]);

  // Derived state
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);

  // Filter and sort products when filter criteria change
  useEffect(() => {
    let result = [...products];

    // Filter by category
    if (category) {
      result = result.filter((product) => product.category === category);
    }

    // Filter by search term
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(
        (product) =>
          product.name.toLowerCase().includes(term) ||
          product.description.toLowerCase().includes(term)
      );
    }

    // Filter by price range
    const minPrice = priceRange[0];
    const maxPrice = priceRange[1];

    if (minPrice > 0 || maxPrice < 100) {
      // Convert percentage to actual price range
      const allPrices = products.map((p) => p.price);
      const lowestPrice = Math.min(...allPrices);
      const highestPrice = Math.max(...allPrices);
      const priceSpread = highestPrice - lowestPrice;

      const actualMinPrice = lowestPrice + priceSpread * (minPrice / 100);
      const actualMaxPrice = lowestPrice + priceSpread * (maxPrice / 100);

      result = result.filter(
        (product) =>
          product.price >= actualMinPrice && product.price <= actualMaxPrice
      );
    }

    // Sort products
    if (sort) {
      switch (sort) {
        case "price_asc":
          result.sort((a, b) => a.price - b.price);
          break;
        case "price_desc":
          result.sort((a, b) => b.price - a.price);
          break;
        case "popular":
          result.sort((a, b) => b.rating - a.rating);
          break;
        case "newest":
          // For this example, we'll simulate "newest" with random sorting
          result.sort(() => 0.5 - Math.random());
          break;
      }
    }

    setFilteredProducts(result);
  }, [category, searchTerm, sort, priceRange]);

  // Update URL when filters change
  useEffect(() => {
    const params = new URLSearchParams();

    if (category) params.set("category", category);
    if (searchTerm) params.set("search", searchTerm);
    if (sort) params.set("sort", sort);

    router.push(`/products?${params.toString()}`, { scroll: false });
  }, [category, searchTerm, sort, router]);

  // Handle search submit
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Search is already handled by the effect
  };

  // Clear all filters
  const clearFilters = () => {
    setCategory(undefined);
    setSearchTerm("");
    setSort("popular");
    setPriceRange([0, 100]);
  };

  // Calculate price range values for display
  const allPrices = products.map((p) => p.price);
  const lowestPrice = Math.min(...allPrices);
  const highestPrice = Math.max(...allPrices);
  const priceSpread = highestPrice - lowestPrice;

  const displayMinPrice = Math.round(
    lowestPrice + priceSpread * (priceRange[0] / 100)
  );
  const displayMaxPrice = Math.round(
    lowestPrice + priceSpread * (priceRange[1] / 100)
  );

  return (
    <div className="py-8 md:py-12">
      <div className="container-custom">
        <div className="flex flex-col mb-8">
          <h1 className="text-3xl md:text-4xl font-playfair mb-4">
            {category
              ? `${category.charAt(0).toUpperCase() + category.slice(1)}`
              : "All Products"}
          </h1>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <p className="text-muted-foreground">
              Showing {filteredProducts.length} products
            </p>

            <div className="flex items-center gap-3">
              {/* Mobile Filter Button */}
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size="sm" className="md:hidden">
                    <SlidersHorizontal className="h-4 w-4 mr-2" />
                    Filters
                  </Button>
                </SheetTrigger>
                <SheetContent side="left">
                  <SheetHeader>
                    <SheetTitle>Filters</SheetTitle>
                    <SheetDescription>
                      Narrow down products by applying filters
                    </SheetDescription>
                  </SheetHeader>

                  <div className="py-6 space-y-6">
                    {/* Categories */}
                    <div>
                      <h3 className="font-medium mb-3">Categories</h3>
                      <div className="space-y-2">
                        <Button
                          variant={!category ? "default" : "outline"}
                          size="sm"
                          onClick={() => setCategory(undefined)}
                          className="mr-2 mb-2"
                        >
                          All
                        </Button>
                        {categories.map((cat) => (
                          <Button
                            key={cat}
                            variant={category === cat ? "default" : "outline"}
                            size="sm"
                            onClick={() => setCategory(cat)}
                            className="mr-2 mb-2"
                          >
                            {cat.charAt(0).toUpperCase() + cat.slice(1)}
                          </Button>
                        ))}
                      </div>
                    </div>

                    {/* Price Range */}
                    <div>
                      <h3 className="font-medium mb-3">Price Range</h3>
                      <div className="px-2">
                        <Slider
                          defaultValue={[0, 100]}
                          value={priceRange}
                          onValueChange={(value) =>
                            setPriceRange(value as [number, number])
                          }
                          max={100}
                          step={1}
                          className="mb-6"
                        />
                        <div className="flex items-center justify-between text-sm">
                          <span>${displayMinPrice}</span>
                          <span>${displayMaxPrice}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <SheetFooter>
                    <Button variant="outline" onClick={clearFilters}>
                      Reset Filters
                    </Button>
                    <SheetClose asChild>
                      <Button>Apply Filters</Button>
                    </SheetClose>
                  </SheetFooter>
                </SheetContent>
              </Sheet>

              {/* Search Bar */}
              <div className="relative flex-1">
                <form
                  onSubmit={handleSearch}
                  className="flex w-full max-w-sm items-center"
                >
                  <Input
                    type="search"
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pr-8"
                  />
                  <Button
                    type="submit"
                    size="icon"
                    variant="ghost"
                    className="absolute right-0 top-0 h-full"
                  >
                    <Search className="h-4 w-4" />
                  </Button>
                </form>
              </div>

              {/* Sort Dropdown */}
              <Select
                value={sort}
                onValueChange={(value) => setSort(value as SortOption)}
              >
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  {sortOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Active Filters */}
          {(category ||
            searchTerm ||
            priceRange[0] > 0 ||
            priceRange[1] < 100) && (
            <div className="flex flex-wrap items-center gap-2 mt-4">
              <span className="text-sm text-muted-foreground">
                Active filters:
              </span>

              {/* Category filter badge */}
              {category && (
                <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-secondary text-secondary-foreground">
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                  <button
                    onClick={() => setCategory(undefined)}
                    className="ml-1 rounded-full hover:bg-secondary-foreground/10"
                  >
                    <X className="h-3 w-3" />
                    <span className="sr-only">Remove category filter</span>
                  </button>
                </span>
              )}

              {/* Search term badge */}
              {searchTerm && (
                <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-secondary text-secondary-foreground">
                  &quot;{searchTerm}&quot;
                  <button
                    onClick={() => setSearchTerm("")}
                    className="ml-1 rounded-full hover:bg-secondary-foreground/10"
                  >
                    <X className="h-3 w-3" />
                    <span className="sr-only">Remove search filter</span>
                  </button>
                </span>
              )}

              {/* Price range badge */}
              {(priceRange[0] > 0 || priceRange[1] < 100) && (
                <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-secondary text-secondary-foreground">
                  ${displayMinPrice} - ${displayMaxPrice}
                  <button
                    onClick={() => setPriceRange([0, 100])}
                    className="ml-1 rounded-full hover:bg-secondary-foreground/10"
                  >
                    <X className="h-3 w-3" />
                    <span className="sr-only">Remove price filter</span>
                  </button>
                </span>
              )}

              <Button
                variant="ghost"
                size="sm"
                onClick={clearFilters}
                className="text-xs"
              >
                Clear all
              </Button>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Desktop Sidebar */}
          <div className="hidden md:block">
            <div className="sticky top-24 space-y-6">
              <Accordion type="single" collapsible defaultValue="category">
                {/* Categories */}
                <AccordionItem value="category">
                  <AccordionTrigger>Categories</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <Button
                          variant={!category ? "subtle" : "ghost"}
                          size="sm"
                          onClick={() => setCategory(undefined)}
                          className="justify-start w-full"
                        >
                          All Products
                        </Button>
                      </div>
                      {categories.map((cat) => (
                        <div key={cat} className="flex items-center">
                          <Button
                            variant={category === cat ? "subtle" : "ghost"}
                            size="sm"
                            onClick={() => setCategory(cat)}
                            className="justify-start w-full"
                          >
                            {cat.charAt(0).toUpperCase() + cat.slice(1)}
                          </Button>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* Price Range */}
                <AccordionItem value="price">
                  <AccordionTrigger>Price Range</AccordionTrigger>
                  <AccordionContent>
                    <div className="px-2">
                      <Slider
                        defaultValue={[0, 100]}
                        value={priceRange}
                        onValueChange={(value) =>
                          setPriceRange(value as [number, number])
                        }
                        max={100}
                        step={1}
                        className="mb-6"
                      />
                      <div className="flex items-center justify-between">
                        <span>${displayMinPrice}</span>
                        <span>${displayMaxPrice}</span>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <Button
                variant="outline"
                onClick={clearFilters}
                className="w-full"
              >
                Reset Filters
              </Button>
            </div>
          </div>

          {/* Product Grid */}
          <div className="md:col-span-2 lg:col-span-3">
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <h3 className="text-lg font-medium mb-2">No products found</h3>
                <p className="text-muted-foreground mb-6">
                  Try adjusting your search or filters
                </p>
                <Button onClick={clearFilters}>Clear Filters</Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
