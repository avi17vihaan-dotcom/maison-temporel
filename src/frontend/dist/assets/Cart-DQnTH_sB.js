import { c as createLucideIcon, u as useCart, j as jsxRuntimeExports, d as ShoppingBag, L as Link, B as Button, f as Separator } from "./index-Dw3Hs0Rq.js";
import { u as ue } from "./index-0kcOUik-.js";
import { A as ArrowRight } from "./arrow-right-CUNngW2g.js";
import { m as motion } from "./proxy-BJYDQDN1.js";
import { M as Minus, P as Plus, A as ArrowLeft } from "./plus-CmWoGWuF.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }],
  ["line", { x1: "10", x2: "10", y1: "11", y2: "17", key: "1uufr5" }],
  ["line", { x1: "14", x2: "14", y1: "11", y2: "17", key: "xtxkd" }]
];
const Trash2 = createLucideIcon("trash-2", __iconNode);
function Cart() {
  const {
    cartItems,
    cartTotal,
    cartCount,
    products,
    updateQuantity,
    removeFromCart,
    clearCart
  } = useCart();
  function handleRemove(productId, name) {
    removeFromCart(productId);
    ue.success(`${name} removed from cart`);
  }
  if (cartCount === 0) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        "data-ocid": "cart.empty_state",
        className: "min-h-screen bg-background flex flex-col items-center justify-center px-6 py-24",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center max-w-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingBag, { className: "h-16 w-16 text-muted-foreground mx-auto mb-6 opacity-40" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl text-foreground mb-3", children: "Your Cart is Empty" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground font-body mb-8", children: "Explore our collections and find a timepiece that speaks to your sense of elegance." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/catalog", "data-ocid": "cart.explore_link", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { className: "tracking-[0.15em] uppercase text-xs px-8", children: [
            "Explore Collections",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-2 h-4 w-4" })
          ] }) })
        ] })
      }
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-ocid": "cart.page", className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-card border-b border-border py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-6 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs tracking-[0.35em] uppercase text-primary mb-3", children: "Your Selection" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-4xl text-foreground", children: "Cart" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-6 py-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-2 space-y-1", "data-ocid": "cart.items_list", children: [
        cartItems.map((item, i) => {
          const product = products.find((p) => p.id === item.productId);
          if (!product) return null;
          const qty = Number(item.quantity);
          const lineTotal = product.price * qty;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 10 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.3, delay: i * 0.06 },
              "data-ocid": `cart.item.${i + 1}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-5 py-6", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Link,
                    {
                      to: "/catalog/$productId",
                      params: { productId: product.id.toString() },
                      className: "shrink-0",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-24 h-24 bg-muted rounded-lg overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "img",
                        {
                          src: product.imageUrl || "/assets/generated/watch-placeholder.jpg",
                          alt: product.name,
                          className: "w-full h-full object-cover hover:scale-105 transition-smooth"
                        }
                      ) })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs tracking-[0.15em] uppercase text-muted-foreground mb-1", children: product.collection }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Link,
                      {
                        to: "/catalog/$productId",
                        params: { productId: product.id.toString() },
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg text-foreground hover-gold transition-smooth truncate", children: product.name })
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-primary font-body font-medium mt-1", children: [
                      "$",
                      product.price.toLocaleString()
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 mt-3", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 border border-border rounded-lg overflow-hidden", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "button",
                          {
                            type: "button",
                            onClick: () => updateQuantity(product.id, qty - 1),
                            "data-ocid": `cart.qty_decrease.${i + 1}`,
                            className: "px-2.5 py-1.5 hover:bg-muted transition-smooth",
                            "aria-label": "Decrease quantity",
                            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Minus, { className: "h-3 w-3" })
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-3 py-1.5 text-sm min-w-[2rem] text-center", children: qty }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "button",
                          {
                            type: "button",
                            onClick: () => updateQuantity(product.id, qty + 1),
                            "data-ocid": `cart.qty_increase.${i + 1}`,
                            className: "px-2.5 py-1.5 hover:bg-muted transition-smooth",
                            "aria-label": "Increase quantity",
                            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-3 w-3" })
                          }
                        )
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "button",
                        {
                          type: "button",
                          onClick: () => handleRemove(product.id, product.name),
                          "data-ocid": `cart.delete_button.${i + 1}`,
                          className: "text-muted-foreground hover:text-destructive transition-smooth",
                          "aria-label": "Remove item",
                          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-4 w-4" })
                        }
                      )
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-right shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-body font-medium text-foreground", children: [
                    "$",
                    lineTotal.toLocaleString()
                  ] }) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, { className: "border-border opacity-50" })
              ]
            },
            item.productId.toString()
          );
        }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-4 flex justify-between items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: "/catalog",
              "data-ocid": "cart.continue_shopping_link",
              className: "inline-flex items-center gap-2 text-xs tracking-[0.1em] uppercase text-muted-foreground hover-gold transition-smooth",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-3 w-3" }),
                "Continue Shopping"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => {
                clearCart();
                ue.success("Cart cleared");
              },
              "data-ocid": "cart.clear_button",
              className: "text-xs tracking-[0.1em] uppercase text-muted-foreground hover:text-destructive transition-smooth",
              children: "Clear Cart"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "data-ocid": "cart.summary_panel", className: "lg:col-span-1", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-lg p-6 sticky top-24 space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-xl text-foreground", children: "Order Summary" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, { className: "border-border" }),
        cartItems.map((item) => {
          const product = products.find((p) => p.id === item.productId);
          if (!product) return null;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "flex justify-between text-sm",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground truncate max-w-[70%]", children: [
                  product.name,
                  " ×",
                  Number(item.quantity)
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-foreground font-medium shrink-0", children: [
                  "$",
                  (product.price * Number(item.quantity)).toLocaleString()
                ] })
              ]
            },
            item.productId.toString()
          );
        }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, { className: "border-border" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between font-body font-medium text-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "tracking-[0.05em]", children: "Total" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xl", children: [
            "$",
            cartTotal.toLocaleString()
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            size: "lg",
            className: "w-full tracking-[0.15em] uppercase text-xs mt-2",
            "data-ocid": "cart.checkout_button",
            onClick: () => ue.info(
              "Checkout coming soon — our atelier is preparing the experience."
            ),
            children: [
              "Proceed to Checkout",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-2 h-4 w-4" })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground text-center leading-relaxed", children: "Complimentary shipping on all orders. Secure, discreet packaging." })
      ] }) })
    ] }) })
  ] });
}
export {
  Cart as default
};
