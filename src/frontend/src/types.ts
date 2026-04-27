export type ProductId = bigint;
export type Collection = string;

export interface Product {
  id: ProductId;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  collection: Collection;
  inStock: boolean;
}

export interface CartItem {
  productId: ProductId;
  quantity: bigint;
}

export interface Cart {
  items: CartItem[];
  total: number;
}

export interface CartItemWithProduct extends CartItem {
  product?: Product;
}
