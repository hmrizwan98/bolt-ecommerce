// Product Types
export interface Product {
  id: string;
  name: string;
  description: string;
  category: Category;
  price: number;
  images: string[];
  rating: number;
  reviews: number;
  inStock: boolean;
  featured?: boolean;
  bestSeller?: boolean;
  new?: boolean;
  discountPercentage?: number;
}

export type Category = 'skincare' | 'makeup' | 'haircare' | 'fragrance' | 'tools';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

// User/Auth Types
export interface User {
  id: string;
  email: string;
  name?: string;
  avatar?: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface SignupCredentials {
  email: string;
  password: string;
  name?: string;
}

// Order Types
export interface ShippingAddress {
  fullName: string;
  address: string;
  city: string;
  postalCode: string;
  country: string;
  phone: string;
}

export interface Order {
  id: string;
  userId: string;
  items: CartItem[];
  shippingAddress: ShippingAddress;
  subtotal: number;
  shippingCost: number;
  totalAmount: number;
  paymentMethod: 'cod';
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  createdAt: string;
}

// Filter Types
export type SortOption = 'price_asc' | 'price_desc' | 'popular' | 'newest';

export interface ProductFilters {
  category?: Category;
  search?: string;
  sort?: SortOption;
  minPrice?: number;
  maxPrice?: number;
}