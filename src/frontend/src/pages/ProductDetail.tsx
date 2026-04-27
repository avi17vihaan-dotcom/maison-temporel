import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { useCart } from "@/context/CartContext";
import { useProductById } from "@/hooks/useProducts";
import { Link, useParams } from "@tanstack/react-router";
import { ArrowLeft, Minus, Plus, ShoppingBag } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";

export default function ProductDetail() {
  const { productId } = useParams({ from: "/catalog/$productId" });
  const id = BigInt(productId);
  const { data: product, isLoading } = useProductById(id);
  const { addToCart, getItemQuantity, updateQuantity } = useCart();
  const [qty, setQty] = useState(1);

  const cartQty = product ? getItemQuantity(product.id) : 0;

  function handleAddToCart() {
    if (!product) return;
    addToCart(product, qty);
    toast.success(`${product.name} added to cart`);
  }

  if (isLoading) {
    return (
      <div
        className="container mx-auto px-6 py-12"
        data-ocid="product_detail.loading_state"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <Skeleton className="aspect-square rounded-lg" />
          <div className="space-y-4">
            <Skeleton className="h-6 w-1/3" />
            <Skeleton className="h-10 w-2/3" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-4/5" />
            <Skeleton className="h-12 w-40 mt-8" />
          </div>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div
        className="container mx-auto px-6 py-24 text-center"
        data-ocid="product_detail.error_state"
      >
        <h2 className="font-display text-3xl text-foreground mb-4">
          Timepiece Not Found
        </h2>
        <p className="text-muted-foreground mb-8">
          This piece may no longer be available.
        </p>
        <Link to="/catalog" data-ocid="product_detail.back_to_catalog_link">
          <Button
            variant="outline"
            className="tracking-[0.1em] uppercase text-xs"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Collections
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div data-ocid="product_detail.page" className="min-h-screen bg-background">
      {/* Breadcrumb */}
      <div className="bg-card border-b border-border">
        <div className="container mx-auto px-6 py-4 flex items-center gap-2 text-xs text-muted-foreground tracking-[0.1em] uppercase">
          <Link to="/" className="hover-gold transition-smooth">
            Home
          </Link>
          <span>/</span>
          <Link to="/catalog" className="hover-gold transition-smooth">
            Collections
          </Link>
          <span>/</span>
          <span className="text-foreground truncate">{product.name}</span>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="sticky top-24"
          >
            <div className="aspect-square bg-muted rounded-lg overflow-hidden">
              <img
                src={
                  product.imageUrl || "/assets/generated/watch-placeholder.jpg"
                }
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            <div>
              <p className="text-xs tracking-[0.25em] uppercase text-primary mb-2">
                {product.collection}
              </p>
              <h1 className="font-display text-4xl text-foreground leading-tight">
                {product.name}
              </h1>
            </div>

            <div className="flex items-center gap-4">
              <span className="font-body text-3xl font-light text-foreground">
                ${product.price.toLocaleString()}
              </span>
              {!product.inStock && (
                <Badge variant="secondary" className="text-xs">
                  Sold Out
                </Badge>
              )}
            </div>

            <Separator className="border-border" />

            <p className="text-muted-foreground font-body leading-relaxed">
              {product.description}
            </p>

            <Separator className="border-border" />

            {product.inStock ? (
              <div className="space-y-4">
                {/* Quantity selector */}
                {cartQty > 0 ? (
                  <div className="flex items-center gap-4">
                    <span className="text-xs tracking-[0.1em] uppercase text-muted-foreground">
                      In Cart:
                    </span>
                    <div className="flex items-center gap-2 border border-border rounded-lg overflow-hidden">
                      <button
                        type="button"
                        onClick={() => updateQuantity(product.id, cartQty - 1)}
                        data-ocid="product_detail.qty_decrease"
                        className="px-3 py-2 hover:bg-muted transition-smooth"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="h-3 w-3" />
                      </button>
                      <span className="px-4 py-2 text-sm font-medium min-w-[3rem] text-center">
                        {cartQty}
                      </span>
                      <button
                        type="button"
                        onClick={() => updateQuantity(product.id, cartQty + 1)}
                        data-ocid="product_detail.qty_increase"
                        className="px-3 py-2 hover:bg-muted transition-smooth"
                        aria-label="Increase quantity"
                      >
                        <Plus className="h-3 w-3" />
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center gap-4">
                    <span className="text-xs tracking-[0.1em] uppercase text-muted-foreground">
                      Quantity:
                    </span>
                    <div className="flex items-center gap-2 border border-border rounded-lg overflow-hidden">
                      <button
                        type="button"
                        onClick={() => setQty(Math.max(1, qty - 1))}
                        data-ocid="product_detail.qty_decrease"
                        className="px-3 py-2 hover:bg-muted transition-smooth"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="h-3 w-3" />
                      </button>
                      <span className="px-4 py-2 text-sm font-medium min-w-[3rem] text-center">
                        {qty}
                      </span>
                      <button
                        type="button"
                        onClick={() => setQty(qty + 1)}
                        data-ocid="product_detail.qty_increase"
                        className="px-3 py-2 hover:bg-muted transition-smooth"
                        aria-label="Increase quantity"
                      >
                        <Plus className="h-3 w-3" />
                      </button>
                    </div>
                  </div>
                )}

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    size="lg"
                    onClick={handleAddToCart}
                    data-ocid="product_detail.add_to_cart_button"
                    className="flex-1 tracking-[0.15em] uppercase text-xs"
                  >
                    <ShoppingBag className="mr-2 h-4 w-4" />
                    Add to Cart
                  </Button>
                  {cartQty > 0 && (
                    <Link to="/cart" data-ocid="product_detail.view_cart_link">
                      <Button
                        variant="outline"
                        size="lg"
                        className="w-full tracking-[0.1em] uppercase text-xs"
                      >
                        View Cart ({cartQty})
                      </Button>
                    </Link>
                  )}
                </div>
              </div>
            ) : (
              <p className="text-muted-foreground text-sm font-body italic">
                This piece is currently sold out. Please check back or explore
                other collections.
              </p>
            )}

            <Link
              to="/catalog"
              data-ocid="product_detail.back_link"
              className="inline-flex items-center gap-2 text-xs tracking-[0.1em] uppercase text-muted-foreground hover-gold transition-smooth mt-4"
            >
              <ArrowLeft className="h-3 w-3" />
              Back to Collections
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
