import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Cart {
    total: number;
    items: Array<CartItem>;
}
export type ProductId = bigint;
export type Collection = string;
export interface CartItem {
    productId: ProductId;
    quantity: bigint;
}
export interface Product {
    id: ProductId;
    inStock: boolean;
    collection: Collection;
    name: string;
    description: string;
    imageUrl: string;
    price: number;
}
export interface backendInterface {
    addToCart(productId: ProductId, quantity: bigint): Promise<void>;
    clearCart(): Promise<void>;
    getAllProducts(): Promise<Array<Product>>;
    getCart(): Promise<Cart>;
    getCollections(): Promise<Array<Collection>>;
    getProductById(id: ProductId): Promise<Product | null>;
    getProductsByCollection(collection: Collection): Promise<Array<Product>>;
    removeFromCart(productId: ProductId): Promise<void>;
    updateQuantity(productId: ProductId, quantity: bigint): Promise<void>;
}
