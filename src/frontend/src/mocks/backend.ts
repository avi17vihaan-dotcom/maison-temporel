import type { backendInterface, Cart, Product } from "../backend";

const mockProducts: Product[] = [
  {
    id: BigInt(1),
    name: "Chronographe Céleste",
    description: "A masterpiece of precision engineering, featuring a 42mm rose gold case and sapphire crystal dial.",
    price: 12500,
    collection: "La Collection Classique",
    imageUrl: "https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?w=600&q=80",
    inStock: true,
  },
  {
    id: BigInt(2),
    name: "Montre Lumière Perpétuelle",
    description: "Ultra-thin minimalist design with a pure white lacquer dial and platinum indices.",
    price: 9800,
    collection: "La Collection Classique",
    imageUrl: "https://images.unsplash.com/photo-1612817288484-6f916006741a?w=600&q=80",
    inStock: true,
  },
  {
    id: BigInt(3),
    name: "Tourbillon Nocturne",
    description: "Hand-wound flying tourbillon with a midnight blue enamel dial and guilloché texture.",
    price: 42000,
    collection: "La Collection Haute Horlogerie",
    imageUrl: "https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=600&q=80",
    inStock: true,
  },
  {
    id: BigInt(4),
    name: "Grande Complication Soleil",
    description: "A grand complication featuring perpetual calendar, moon phase, and minute repeater.",
    price: 68000,
    collection: "La Collection Haute Horlogerie",
    imageUrl: "https://images.unsplash.com/photo-1606744888344-493238951221?w=600&q=80",
    inStock: false,
  },
  {
    id: BigInt(5),
    name: "Aquaterre Profond",
    description: "Professional diver's timepiece with 300m water resistance and ceramic bezel.",
    price: 7200,
    collection: "La Collection Sport",
    imageUrl: "https://images.unsplash.com/photo-1548171915-f9cac733e4d1?w=600&q=80",
    inStock: true,
  },
  {
    id: BigInt(6),
    name: "Chronos Aviateur",
    description: "Pilot's chronograph with slide rule bezel, 44mm steel case and anti-reflective crystal.",
    price: 8400,
    collection: "La Collection Sport",
    imageUrl: "https://images.unsplash.com/photo-1595520407624-0970dc9c9d60?w=600&q=80",
    inStock: true,
  },
];

const mockCart: Cart = {
  items: [],
  total: 0,
};

export const mockBackend: backendInterface = {
  getAllProducts: async () => mockProducts,

  getProductById: async (id) => mockProducts.find((p) => p.id === id) ?? null,

  getCollections: async () => [
    "La Collection Classique",
    "La Collection Haute Horlogerie",
    "La Collection Sport",
  ],

  getProductsByCollection: async (collection) =>
    mockProducts.filter((p) => p.collection === collection),

  getCart: async () => ({ ...mockCart, items: [...mockCart.items] }),

  addToCart: async (productId, quantity) => {
    const existing = mockCart.items.find((i) => i.productId === productId);
    if (existing) {
      existing.quantity += quantity;
    } else {
      mockCart.items.push({ productId, quantity });
    }
    mockCart.total = mockCart.items.reduce((sum, item) => {
      const product = mockProducts.find((p) => p.id === item.productId);
      return sum + (product?.price ?? 0) * Number(item.quantity);
    }, 0);
  },

  removeFromCart: async (productId) => {
    const index = mockCart.items.findIndex((i) => i.productId === productId);
    if (index !== -1) mockCart.items.splice(index, 1);
    mockCart.total = mockCart.items.reduce((sum, item) => {
      const product = mockProducts.find((p) => p.id === item.productId);
      return sum + (product?.price ?? 0) * Number(item.quantity);
    }, 0);
  },

  updateQuantity: async (productId, quantity) => {
    const item = mockCart.items.find((i) => i.productId === productId);
    if (item) item.quantity = quantity;
    mockCart.total = mockCart.items.reduce((sum, i) => {
      const product = mockProducts.find((p) => p.id === i.productId);
      return sum + (product?.price ?? 0) * Number(i.quantity);
    }, 0);
  },

  clearCart: async () => {
    mockCart.items = [];
    mockCart.total = 0;
  },
};
