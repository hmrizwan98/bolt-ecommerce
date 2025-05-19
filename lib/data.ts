import { Product, Category } from '@/lib/types';

// Sample product images from Pexels
const productImages = {
  skincare: [
    'https://images.pexels.com/photos/3373738/pexels-photo-3373738.jpeg',
    'https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg',
    'https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg'
  ],
  makeup: [
    'https://images.pexels.com/photos/2253833/pexels-photo-2253833.jpeg',
    'https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg',
    'https://images.pexels.com/photos/1749452/pexels-photo-1749452.jpeg'
  ],
  haircare: [
    'https://images.pexels.com/photos/3993444/pexels-photo-3993444.jpeg',
    'https://images.pexels.com/photos/3997379/pexels-photo-3997379.jpeg',
    'https://images.pexels.com/photos/3997381/pexels-photo-3997381.jpeg'
  ],
  fragrance: [
    'https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg',
    'https://images.pexels.com/photos/3059609/pexels-photo-3059609.jpeg',
    'https://images.pexels.com/photos/4041391/pexels-photo-4041391.jpeg'
  ],
  tools: [
    'https://images.pexels.com/photos/3997399/pexels-photo-3997399.jpeg',
    'https://images.pexels.com/photos/4497369/pexels-photo-4497369.jpeg',
    'https://images.pexels.com/photos/4497567/pexels-photo-4497567.jpeg'
  ]
};

// Helper to generate random images for each product
const getRandomImages = (category: Category, count = 3) => {
  const categoryImages = productImages[category] || productImages.skincare;
  const shuffled = [...categoryImages].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

// Generate products
export const generateProducts = (): Product[] => {
  return [
    // Skincare Products
    {
      id: 'skin-001',
      name: 'Radiance Renewal Serum',
      description: 'A powerful serum that brightens and rejuvenates the skin with Vitamin C and hyaluronic acid. Perfect for all skin types, this serum helps reduce the appearance of fine lines and dark spots while providing deep hydration.',
      category: 'skincare',
      price: 58.99,
      images: getRandomImages('skincare'),
      rating: 4.7,
      reviews: 128,
      inStock: true,
      featured: true,
      bestSeller: true
    },
    {
      id: 'skin-002',
      name: 'Hydra-Boost Moisturizer',
      description: 'An ultra-hydrating moisturizer that provides 48-hour moisture while strengthening the skin barrier. Infused with ceramides and peptides for lasting hydration and protection.',
      category: 'skincare',
      price: 42.50,
      images: getRandomImages('skincare'),
      rating: 4.5,
      reviews: 94,
      inStock: true
    },
    {
      id: 'skin-003',
      name: 'Gentle Foaming Cleanser',
      description: 'A gentle yet effective cleanser that removes makeup, dirt, and impurities without stripping the skin. Formulated with soothing botanical extracts and amino acids.',
      category: 'skincare',
      price: 28.99,
      images: getRandomImages('skincare'),
      rating: 4.6,
      reviews: 157,
      inStock: true,
      bestSeller: true
    },
    {
      id: 'skin-004',
      name: 'Overnight Recovery Mask',
      description: 'A luxurious overnight mask that works while you sleep to repair and rejuvenate your skin. Wake up to smoother, more radiant-looking skin thanks to its blend of retinol and nourishing oils.',
      category: 'skincare',
      price: 48.00,
      images: getRandomImages('skincare'),
      rating: 4.8,
      reviews: 76,
      inStock: true,
      new: true
    },
    {
      id: 'skin-005',
      name: 'Brightening Eye Cream',
      description: 'Target dark circles and puffiness with this brightening eye cream. Formulated with caffeine, vitamin K, and light-reflecting particles to instantly brighten the eye area.',
      category: 'skincare',
      price: 36.50,
      images: getRandomImages('skincare'),
      rating: 4.4,
      reviews: 63,
      inStock: true
    },
    
    // Makeup Products
    {
      id: 'makeup-001',
      name: 'Luminous Foundation',
      description: 'A lightweight, buildable foundation that provides medium to full coverage with a natural, luminous finish. Available in 40 inclusive shades to match all skin tones.',
      category: 'makeup',
      price: 38.00,
      images: getRandomImages('makeup'),
      rating: 4.6,
      reviews: 215,
      inStock: true,
      featured: true
    },
    {
      id: 'makeup-002',
      name: 'Volume Boost Mascara',
      description: 'Add dramatic volume and length to your lashes with this smudge-proof, long-wearing mascara. The unique brush separates and coats each lash for maximum impact.',
      category: 'makeup',
      price: 24.50,
      images: getRandomImages('makeup'),
      rating: 4.7,
      reviews: 183,
      inStock: true,
      bestSeller: true
    },
    {
      id: 'makeup-003',
      name: 'Velvet Matte Lipstick',
      description: 'A creamy, non-drying lipstick that delivers intense color payoff with a sophisticated matte finish. Enriched with moisturizing ingredients for comfortable all-day wear.',
      category: 'makeup',
      price: 22.00,
      images: getRandomImages('makeup'),
      rating: 4.5,
      reviews: 127,
      inStock: true
    },
    {
      id: 'makeup-004',
      name: 'Precision Liquid Eyeliner',
      description: 'Create precise, defined lines with this waterproof liquid eyeliner. The ultra-fine tip allows for ultimate control, from subtle daytime looks to dramatic wings.',
      category: 'makeup',
      price: 20.99,
      images: getRandomImages('makeup'),
      rating: 4.4,
      reviews: 92,
      inStock: true
    },
    {
      id: 'makeup-005',
      name: 'Radiant Blush Palette',
      description: 'A versatile blush palette featuring four complementary shades to create the perfect flush of color. Buildable formula allows for subtle to vibrant application.',
      category: 'makeup',
      price: 32.00,
      images: getRandomImages('makeup'),
      rating: 4.6,
      reviews: 78,
      inStock: true,
      new: true
    },
    
    // Haircare Products
    {
      id: 'hair-001',
      name: 'Repair & Restore Shampoo',
      description: 'A nourishing shampoo that repairs damaged hair and prevents breakage. Formulated with keratin proteins and argan oil to strengthen and protect hair from further damage.',
      category: 'haircare',
      price: 26.50,
      images: getRandomImages('haircare'),
      rating: 4.5,
      reviews: 104,
      inStock: true,
      featured: true
    },
    {
      id: 'hair-002',
      name: 'Hydrating Hair Mask',
      description: 'An intensive treatment mask that deeply hydrates and revitalizes dry, damaged hair. Enriched with shea butter and coconut oil for silky, manageable hair.',
      category: 'haircare',
      price: 34.99,
      images: getRandomImages('haircare'),
      rating: 4.8,
      reviews: 87,
      inStock: true
    },
    {
      id: 'hair-003',
      name: 'Volumizing Hair Spray',
      description: 'A lightweight, flexible-hold hairspray that adds volume and texture without stiffness or stickiness. Perfect for creating long-lasting styles with natural movement.',
      category: 'haircare',
      price: 22.00,
      images: getRandomImages('haircare'),
      rating: 4.3,
      reviews: 75,
      inStock: true
    },
    
    // Fragrance Products
    {
      id: 'frag-001',
      name: 'Midnight Bloom Eau de Parfum',
      description: 'An intoxicating floral fragrance with notes of jasmine, vanilla, and amber. This sophisticated scent transitions perfectly from day to evening wear.',
      category: 'fragrance',
      price: 78.00,
      images: getRandomImages('fragrance'),
      rating: 4.9,
      reviews: 156,
      inStock: true,
      featured: true,
      bestSeller: true
    },
    {
      id: 'frag-002',
      name: 'Citrus Escape Body Mist',
      description: 'A refreshing body mist with vibrant notes of mandarin, bergamot, and neroli. Perfect for a light, uplifting scent throughout the day.',
      category: 'fragrance',
      price: 32.50,
      images: getRandomImages('fragrance'),
      rating: 4.4,
      reviews: 68,
      inStock: true
    },
    {
      id: 'frag-003',
      name: 'Rose & Oud Perfume Oil',
      description: 'A luxurious perfume oil that combines delicate rose with rich, woody oud. The alcohol-free formula gently scents the skin for an intimate fragrance experience.',
      category: 'fragrance',
      price: 65.00,
      images: getRandomImages('fragrance'),
      rating: 4.7,
      reviews: 43,
      inStock: true,
      new: true
    },
    
    // Beauty Tools
    {
      id: 'tool-001',
      name: 'Rose Quartz Facial Roller',
      description: 'A dual-ended facial roller made of genuine rose quartz to help reduce puffiness, improve circulation, and enhance product absorption. Use daily for a relaxing facial massage.',
      category: 'tools',
      price: 28.00,
      images: getRandomImages('tools'),
      rating: 4.6,
      reviews: 112,
      inStock: true
    },
    {
      id: 'tool-002',
      name: 'Pro Makeup Brush Set',
      description: 'A complete set of 12 professional-quality makeup brushes for flawless application. Includes brushes for foundation, concealer, powder, contour, eyeshadow, and more.',
      category: 'tools',
      price: 65.99,
      images: getRandomImages('tools'),
      rating: 4.8,
      reviews: 97,
      inStock: true,
      featured: true
    }
  ];
};

// Slider content
export const homeSliderContent = [
  {
    id: 'slide-1',
    title: 'Discover Your Glow',
    subtitle: 'Luxury skincare for radiant beauty',
    description: 'Transform your routine with our premium products',
    image: 'https://images.pexels.com/photos/3373736/pexels-photo-3373736.jpeg',
    ctaText: 'Shop Skincare',
    ctaLink: '/products?category=skincare'
  },
  {
    id: 'slide-2',
    title: 'Express Yourself',
    subtitle: 'Bold makeup for every occasion',
    description: 'Discover products that enhance your natural beauty',
    image: 'https://images.pexels.com/photos/2681751/pexels-photo-2681751.jpeg',
    ctaText: 'Shop Makeup',
    ctaLink: '/products?category=makeup'
  },
  {
    id: 'slide-3',
    title: 'Signature Scents',
    subtitle: 'Fragrances that leave an impression',
    description: 'Find your perfect scent from our exclusive collection',
    image: 'https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg',
    ctaText: 'Shop Fragrances',
    ctaLink: '/products?category=fragrance'
  }
];

// Categories for homepage
export const homeCategories = [
  {
    id: 'cat-1',
    name: 'Skincare',
    image: 'https://images.pexels.com/photos/3762892/pexels-photo-3762892.jpeg',
    link: '/products?category=skincare'
  },
  {
    id: 'cat-2',
    name: 'Makeup',
    image: 'https://images.pexels.com/photos/2633986/pexels-photo-2633986.jpeg',
    link: '/products?category=makeup'
  },
  {
    id: 'cat-3',
    name: 'Hair Care',
    image: 'https://images.pexels.com/photos/1961784/pexels-photo-1961784.jpeg',
    link: '/products?category=haircare'
  },
  {
    id: 'cat-4',
    name: 'Fragrance',
    image: 'https://images.pexels.com/photos/3059609/pexels-photo-3059609.jpeg',
    link: '/products?category=fragrance'
  }
];

export const products = generateProducts();

// Get featured products
export const getFeaturedProducts = () => {
  return products.filter(product => product.featured);
};

// Get best sellers
export const getBestSellers = () => {
  return products.filter(product => product.bestSeller);
};

// Get new arrivals
export const getNewArrivals = () => {
  return products.filter(product => product.new);
};

// Get product by id
export const getProductById = (id: string) => {
  return products.find(product => product.id === id);
};

// Get products by category
export const getProductsByCategory = (category: Category) => {
  return products.filter(product => product.category === category);
};

// Get related products
export const getRelatedProducts = (productId: string, limit = 4) => {
  const product = getProductById(productId);
  if (!product) return [];
  
  return products
    .filter(p => p.category === product.category && p.id !== productId)
    .sort(() => 0.5 - Math.random())
    .slice(0, limit);
};

// Search products
export const searchProducts = (query: string) => {
  const searchTerm = query.toLowerCase();
  return products.filter(product => 
    product.name.toLowerCase().includes(searchTerm) || 
    product.description.toLowerCase().includes(searchTerm)
  );
};

export const getAllProducts = (): Product[] => {
  return generateProducts();
};