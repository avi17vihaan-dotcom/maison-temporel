import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/context/CartContext";
import { Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  Minus,
  Plus,
  ShoppingBag,
  Trash2,
} from "lucide-react";
import { motion } from "motion/react";
import { toast } from "sonner";

export default function Cart() {
  const {
    cartItems,
    cartTotal,
    cartCount,
    products,
    updateQuantity,
    removeFromCart,
    clearCart,
  } = useCart();

  function handleRemove(productId: bigint, name: string) {
    removeFromCart(productId);
    toast.success(`${name} removed from cart`);
  }

  if (cartCount === 0) {
    return (
      <div
        data-ocid="cart.empty_state"
        className="min-h-screen bg-background flex flex-col items-center justify-center px-6 py-24"
      >
        <div className="text-center max-w-sm">
          <ShoppingBag className="h-16 w-16 text-muted-foreground mx-auto mb-6 opacity-40" />
          <h2 className="font-display text-3xl text-foreground mb-3">
            Your Cart is Empty
          </h2>
          <p className="text-muted-foreground font-body mb-8">
            Explore our collections and find a timepiece that speaks to your
            sense of elegance.
          </p>
          <Link to="/catalog" data-ocid="cart.explore_link">
            <Button className="tracking-[0.15em] uppercase text-xs px-8">
              Explore Collections
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div data-ocid="cart.page" className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-card border-b border-border py-16">
        <div className="container mx-auto px-6 text-center">
          <p className="text-xs tracking-[0.35em] uppercase text-primary mb-3">
            Your Selection
          </p>
          <h1 className="font-display text-4xl text-foreground">Cart</h1>
        </div>
      </section>

      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-1" data-ocid="cart.items_list">
            {cartItems.map((item, i) => {
              const product = products.find((p) => p.id === item.productId);
              if (!product) return null;
              const qty = Number(item.quantity);
              const lineTotal = product.price * qty;

              return (
                <motion.div
                  key={item.productId.toString()}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.06 }}
                  data-ocid={`cart.item.${i + 1}`}
                >
                  <div className="flex gap-5 py-6">
                    {/* Image */}
                    <Link
                      to="/catalog/$productId"
                      params={{ productId: product.id.toString() }}
                      className="shrink-0"
                    >
                      <div className="w-24 h-24 bg-muted rounded-lg overflow-hidden">
                        <img
                          src={
                            product.imageUrl ||
                            "/assets/generated/watch-placeholder.jpg"
                          }
                          alt={product.name}
                          className="w-full h-full object-cover hover:scale-105 transition-smooth"
                        />
                      </div>
                    </Link>

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <p className="text-xs tracking-[0.15em] uppercase text-muted-foreground mb-1">
                        {product.collection}
                      </p>
                      <Link
                        to="/catalog/$productId"
                        params={{ productId: product.id.toString() }}
                      >
                        <h3 className="font-display text-lg text-foreground hover-gold transition-smooth truncate">
                          {product.name}
                        </h3>
                      </Link>
                      <p className="text-primary font-body font-medium mt-1">
                        ${product.price.toLocaleString()}
                      </p>

                      <div className="flex items-center gap-4 mt-3">
                        {/* Qty controls */}
                        <div className="flex items-center gap-1 border border-border rounded-lg overflow-hidden">
                          <button
                            type="button"
                            onClick={() => updateQuantity(product.id, qty - 1)}
                            data-ocid={`cart.qty_decrease.${i + 1}`}
                            className="px-2.5 py-1.5 hover:bg-muted transition-smooth"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="h-3 w-3" />
                          </button>
                          <span className="px-3 py-1.5 text-sm min-w-[2rem] text-center">
                            {qty}
                          </span>
                          <button
                            type="button"
                            onClick={() => updateQuantity(product.id, qty + 1)}
                            data-ocid={`cart.qty_increase.${i + 1}`}
                            className="px-2.5 py-1.5 hover:bg-muted transition-smooth"
                            aria-label="Increase quantity"
                          >
                            <Plus className="h-3 w-3" />
                          </button>
                        </div>

                        <button
                          type="button"
                          onClick={() => handleRemove(product.id, product.name)}
                          data-ocid={`cart.delete_button.${i + 1}`}
                          className="text-muted-foreground hover:text-destructive transition-smooth"
                          aria-label="Remove item"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>

                    {/* Line total */}
                    <div className="text-right shrink-0">
                      <p className="font-body font-medium text-foreground">
                        ${lineTotal.toLocaleString()}
                      </p>
                    </div>
                  </div>
                  <Separator className="border-border opacity-50" />
                </motion.div>
              );
            })}

            {/* Clear cart */}
            <div className="pt-4 flex justify-between items-center">
              <Link
                to="/catalog"
                data-ocid="cart.continue_shopping_link"
                className="inline-flex items-center gap-2 text-xs tracking-[0.1em] uppercase text-muted-foreground hover-gold transition-smooth"
              >
                <ArrowLeft className="h-3 w-3" />
                Continue Shopping
              </Link>
              <button
                type="button"
                onClick={() => {
                  clearCart();
                  toast.success("Cart cleared");
                }}
                data-ocid="cart.clear_button"
                className="text-xs tracking-[0.1em] uppercase text-muted-foreground hover:text-destructive transition-smooth"
              >
                Clear Cart
              </button>
            </div>
          </div>

          {/* Order Summary */}
          <div data-ocid="cart.summary_panel" className="lg:col-span-1">
            <div className="bg-card border border-border rounded-lg p-6 sticky top-24 space-y-4">
              <h2 className="font-display text-xl text-foreground">
                Order Summary
              </h2>
              <Separator className="border-border" />

              {cartItems.map((item) => {
                const product = products.find((p) => p.id === item.productId);
                if (!product) return null;
                return (
                  <div
                    key={item.productId.toString()}
                    className="flex justify-between text-sm"
                  >
                    <span className="text-muted-foreground truncate max-w-[70%]">
                      {product.name} ×{Number(item.quantity)}
                    </span>
                    <span className="text-foreground font-medium shrink-0">
                      $
                      {(product.price * Number(item.quantity)).toLocaleString()}
                    </span>
                  </div>
                );
              })}

              <Separator className="border-border" />

              <div className="flex justify-between font-body font-medium text-foreground">
                <span className="tracking-[0.05em]">Total</span>
                <span className="text-xl">${cartTotal.toLocaleString()}</span>
              </div>

              <Button
                size="lg"
                className="w-full tracking-[0.15em] uppercase text-xs mt-2"
                data-ocid="cart.checkout_button"
                onClick={() =>
                  toast.info(
                    "Checkout coming soon — our atelier is preparing the experience.",
                  )
                }
              >
                Proceed to Checkout
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>

              <p className="text-xs text-muted-foreground text-center leading-relaxed">
                Complimentary shipping on all orders. Secure, discreet
                packaging.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
