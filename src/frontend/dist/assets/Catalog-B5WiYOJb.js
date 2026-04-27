import { c as createLucideIcon, j as jsxRuntimeExports, b as cn, u as useCart, r as reactExports, S as Skeleton, B as Button, L as Link, d as ShoppingBag, a as Badge } from "./index-Dw3Hs0Rq.js";
import { u as useAllProducts, a as useCollections } from "./useProducts-wPTj0dxs.js";
import { u as ue } from "./index-0kcOUik-.js";
import { m as motion } from "./proxy-BJYDQDN1.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
];
const Search = createLucideIcon("search", __iconNode);
function Input({ className, type, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "input",
    {
      type,
      "data-slot": "input",
      className: cn(
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        className
      ),
      ...props
    }
  );
}
function Catalog() {
  const { data: products = [], isLoading } = useAllProducts();
  const { data: collections = [] } = useCollections();
  const { addToCart, setProducts } = useCart();
  const [search, setSearch] = reactExports.useState("");
  const [activeCollection, setActiveCollection] = reactExports.useState("all");
  reactExports.useEffect(() => {
    if (products.length > 0) setProducts(products);
  }, [products, setProducts]);
  const filtered = reactExports.useMemo(() => {
    return products.filter((p) => {
      const matchesSearch = !search || p.name.toLowerCase().includes(search.toLowerCase()) || p.collection.toLowerCase().includes(search.toLowerCase());
      const matchesCollection = activeCollection === "all" || p.collection === activeCollection;
      return matchesSearch && matchesCollection;
    });
  }, [products, search, activeCollection]);
  function handleAddToCart(product) {
    addToCart(product, 1);
    ue.success(`${product.name} added to cart`);
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-ocid": "catalog.page", className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-card border-b border-border py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-6 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs tracking-[0.35em] uppercase text-primary mb-3", children: "Our Atelier" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-4xl md:text-5xl text-foreground", children: "Collections" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sticky top-16 z-30 bg-card/95 backdrop-blur border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-6 py-4 flex flex-col sm:flex-row gap-4 items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "flex flex-wrap gap-2",
          "data-ocid": "catalog.collection_filter",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => setActiveCollection("all"),
                "data-ocid": "catalog.filter_all.tab",
                className: `text-xs tracking-[0.15em] uppercase px-4 py-2 rounded border transition-smooth ${activeCollection === "all" ? "bg-foreground text-background border-foreground" : "border-border text-muted-foreground hover:text-foreground hover:border-foreground"}`,
                children: "All"
              }
            ),
            collections.map((col) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => setActiveCollection(col),
                "data-ocid": "catalog.filter_collection.tab",
                className: `text-xs tracking-[0.15em] uppercase px-4 py-2 rounded border transition-smooth ${activeCollection === col ? "bg-foreground text-background border-foreground" : "border-border text-muted-foreground hover:text-foreground hover:border-foreground"}`,
                children: col
              },
              col
            ))
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full sm:w-64", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            "data-ocid": "catalog.search_input",
            placeholder: "Search timepieces...",
            value: search,
            onChange: (e) => setSearch(e.target.value),
            className: "pl-9 text-sm h-9 bg-background"
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "container mx-auto px-6 py-12", children: isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6", children: [1, 2, 3, 4, 5, 6].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "aspect-square rounded-lg" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-3/4" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-1/2" })
    ] }, i)) }) : filtered.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-ocid": "catalog.empty_state", className: "text-center py-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-2xl text-foreground mb-3", children: "No timepieces found" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm mb-6", children: "Try adjusting your search or filter" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          variant: "outline",
          onClick: () => {
            setSearch("");
            setActiveCollection("all");
          },
          "data-ocid": "catalog.clear_filters_button",
          className: "tracking-[0.1em] uppercase text-xs",
          children: "Clear Filters"
        }
      )
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6", children: filtered.map((product, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.4, delay: Math.min(i * 0.05, 0.4) },
        "data-ocid": `catalog.item.${i + 1}`,
        className: "group bg-card border border-border rounded-lg overflow-hidden hover:shadow-xl transition-smooth",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: "/catalog/$productId",
              params: { productId: product.id.toString() },
              "data-ocid": `catalog.product_link.${i + 1}`,
              children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-square bg-muted overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: product.imageUrl || "/assets/generated/watch-placeholder.jpg",
                  alt: product.name,
                  className: "w-full h-full object-cover group-hover:scale-105 transition-smooth"
                }
              ) })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs tracking-[0.15em] uppercase text-muted-foreground mb-1", children: product.collection }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: "/catalog/$productId",
                params: { productId: product.id.toString() },
                children: /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-base text-foreground hover-gold transition-smooth line-clamp-1", children: product.name })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1 line-clamp-2 font-body", children: product.description }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-body font-medium text-primary", children: [
                "$",
                product.price.toLocaleString()
              ] }),
              product.inStock ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  size: "sm",
                  variant: "outline",
                  onClick: () => handleAddToCart(product),
                  "data-ocid": `catalog.add_to_cart.${i + 1}`,
                  className: "text-xs tracking-[0.1em] uppercase transition-smooth",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingBag, { className: "h-3 w-3 mr-1" }),
                    "Add"
                  ]
                }
              ) : /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", className: "text-xs", children: "Sold Out" })
            ] })
          ] })
        ]
      },
      product.id.toString()
    )) }) })
  ] });
}
export {
  Catalog as default
};
