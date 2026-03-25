export interface Product {
  id: number;
  slug: string;
  name: string;
  price: string;
  oldPrice?: string;
  rating: number;
  image: string;
  category: string;
  badge?: {
    text: string;
    type: 'sale' | 'hot';
  };
  description: string;
}

export const products: Product[] = [
  {
    id: 1,
    slug: 'armchair-modern-livora',
    name: 'Modern Livora Armchair',
    price: '$240',
    oldPrice: '$320',
    rating: 5,
    image: '/images/product-1.png',
    category: 'Living Room',
    badge: { text: '-33%', type: 'sale' },
    description: 'A masterpiece of comfort and design. This armchair features high-quality fabric and ergonomic support for your daily relaxation.'
  },
  {
    id: 2,
    slug: 'brick-decor-accents',
    name: 'Brick Decor Accents',
    price: '$180',
    rating: 4,
    image: '/images/product-2.png',
    category: 'Decor',
    description: 'Handcrafted brick decor pieces that add a rustic yet modern touch to any room.'
  },
  {
    id: 3,
    slug: 'aqua-globe-lamp',
    name: 'Aqua Globe Lamp',
    price: '$120',
    rating: 5,
    image: '/images/product-3.png',
    category: 'Office',
    description: 'Ambient lighting meeting professional design. This lamp provides a soft, focused glow for your workspace.'
  },
  {
    id: 4,
    slug: 'starburst-wall-clock',
    name: 'Starburst Wall Clock',
    price: '$350',
    oldPrice: '$450',
    rating: 5,
    image: '/images/product-4.png',
    category: 'Decor',
    badge: { text: 'Hot', type: 'hot' },
    description: 'A mid-century modern classic. This wall clock serves as both a functional timepiece and a stunning piece of art.'
  },
  {
    id: 5,
    slug: 'lumiere-pendant-light',
    name: 'Lumiere Pendant Light',
    price: '$290',
    rating: 4,
    image: '/images/product-5.png',
    category: 'Bedroom',
    description: 'Elegant glass pendant light that creates a warm, inviting atmosphere in any bedroom or dining area.'
  }
];

export const getProductBySlug = (slug: string) => products.find(p => p.slug === slug);
export const getProductById = (id: number) => products.find(p => p.id === id);
