import { e as useParams, u as useCart, r as reactExports, j as jsxRuntimeExports, S as Skeleton, L as Link, B as Button, a as Badge, f as Separator, d as ShoppingBag } from "./index-Dw3Hs0Rq.js";
import { b as useProductById } from "./useProducts-wPTj0dxs.js";
import { u as ue } from "./index-0kcOUik-.js";
import { A as ArrowLeft, M as Minus, P as Plus } from "./plus-CmWoGWuF.js";
import { m as motion } from "./proxy-BJYDQDN1.js";
function ProductDetail() {
  const { productId } = useParams({ from: "/catalog/$productId" });
  const id = BigInt(productId);
  const { data: product, isLoading } = useProductById(id);
  const { addToCart, getItemQuantity, updateQuantity } = useCart();
  const [qty, setQty] = reactExports.useState(1);
  const cartQty = product ? getItemQuantity(product.id) : 0;
  function handleAddToCart() {
    if (!product) return;
    addToCart(product, qty);
    ue.success(`${product.name} added to cart`);
  }
  if (isLoading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "container mx-auto px-6 py-12",
        "data-ocid": "product_detail.loading_state",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-16", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "aspect-square rounded-lg" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-6 w-1/3" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-10 w-2/3" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-full" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-4/5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-12 w-40 mt-8" })
          ] })
        ] })
      }
    );
  }
  if (!product) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "container mx-auto px-6 py-24 text-center",
        "data-ocid": "product_detail.error_state",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl text-foreground mb-4", children: "Timepiece Not Found" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-8", children: "This piece may no longer be available." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/catalog", "data-ocid": "product_detail.back_to_catalog_link", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              variant: "outline",
              className: "tracking-[0.1em] uppercase text-xs",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "mr-2 h-4 w-4" }),
                "Back to Collections"
              ]
            }
          ) })
        ]
      }
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-ocid": "product_detail.page", className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-card border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-6 py-4 flex items-center gap-2 text-xs text-muted-foreground tracking-[0.1em] uppercase", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "hover-gold transition-smooth", children: "Home" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "/" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/catalog", className: "hover-gold transition-smooth", children: "Collections" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "/" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground truncate", children: product.name })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-6 py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-16 items-start", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, x: -20 },
          animate: { opacity: 1, x: 0 },
          transition: { duration: 0.6 },
          className: "sticky top-24",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-square bg-muted rounded-lg overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: product.imageUrl || "/assets/generated/watch-placeholder.jpg",
              alt: product.name,
              className: "w-full h-full object-cover"
            }
          ) })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, x: 20 },
          animate: { opacity: 1, x: 0 },
          transition: { duration: 0.6, delay: 0.1 },
          className: "space-y-6",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs tracking-[0.25em] uppercase text-primary mb-2", children: product.collection }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-4xl text-foreground leading-tight", children: product.name })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-body text-3xl font-light text-foreground", children: [
                "$",
                product.price.toLocaleString()
              ] }),
              !product.inStock && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", className: "text-xs", children: "Sold Out" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, { className: "border-border" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground font-body leading-relaxed", children: product.description }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, { className: "border-border" }),
            product.inStock ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
              cartQty > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs tracking-[0.1em] uppercase text-muted-foreground", children: "In Cart:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 border border-border rounded-lg overflow-hidden", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: () => updateQuantity(product.id, cartQty - 1),
                      "data-ocid": "product_detail.qty_decrease",
                      className: "px-3 py-2 hover:bg-muted transition-smooth",
                      "aria-label": "Decrease quantity",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Minus, { className: "h-3 w-3" })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-4 py-2 text-sm font-medium min-w-[3rem] text-center", children: cartQty }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: () => updateQuantity(product.id, cartQty + 1),
                      "data-ocid": "product_detail.qty_increase",
                      className: "px-3 py-2 hover:bg-muted transition-smooth",
                      "aria-label": "Increase quantity",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-3 w-3" })
                    }
                  )
                ] })
              ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs tracking-[0.1em] uppercase text-muted-foreground", children: "Quantity:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 border border-border rounded-lg overflow-hidden", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: () => setQty(Math.max(1, qty - 1)),
                      "data-ocid": "product_detail.qty_decrease",
                      className: "px-3 py-2 hover:bg-muted transition-smooth",
                      "aria-label": "Decrease quantity",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Minus, { className: "h-3 w-3" })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-4 py-2 text-sm font-medium min-w-[3rem] text-center", children: qty }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: () => setQty(qty + 1),
                      "data-ocid": "product_detail.qty_increase",
                      className: "px-3 py-2 hover:bg-muted transition-smooth",
                      "aria-label": "Increase quantity",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-3 w-3" })
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Button,
                  {
                    size: "lg",
                    onClick: handleAddToCart,
                    "data-ocid": "product_detail.add_to_cart_button",
                    className: "flex-1 tracking-[0.15em] uppercase text-xs",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingBag, { className: "mr-2 h-4 w-4" }),
                      "Add to Cart"
                    ]
                  }
                ),
                cartQty > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/cart", "data-ocid": "product_detail.view_cart_link", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Button,
                  {
                    variant: "outline",
                    size: "lg",
                    className: "w-full tracking-[0.1em] uppercase text-xs",
                    children: [
                      "View Cart (",
                      cartQty,
                      ")"
                    ]
                  }
                ) })
              ] })
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm font-body italic", children: "This piece is currently sold out. Please check back or explore other collections." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Link,
              {
                to: "/catalog",
                "data-ocid": "product_detail.back_link",
                className: "inline-flex items-center gap-2 text-xs tracking-[0.1em] uppercase text-muted-foreground hover-gold transition-smooth mt-4",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-3 w-3" }),
                  "Back to Collections"
                ]
              }
            )
          ]
        }
      )
    ] }) })
  ] });
}
export {
  ProductDetail as default
};
