import { c as createLucideIcon, u as useCart, r as reactExports, j as jsxRuntimeExports, L as Link, B as Button, a as Badge } from "./index-Dw3Hs0Rq.js";
import { u as useAllProducts, a as useCollections } from "./useProducts-wPTj0dxs.js";
import { m as motion } from "./proxy-BJYDQDN1.js";
import { A as ArrowRight } from "./arrow-right-CUNngW2g.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }]
];
const Clock = createLucideIcon("clock", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "M6 3h12l4 6-10 13L2 9Z", key: "1pcd5k" }],
  ["path", { d: "M11 3 8 9l4 13 4-13-3-6", key: "1fcu3u" }],
  ["path", { d: "M2 9h20", key: "16fsjt" }]
];
const Gem = createLucideIcon("gem", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }
  ]
];
const Shield = createLucideIcon("shield", __iconNode);
const PILLARS = [
  {
    icon: Clock,
    title: "Heritage Craft",
    description: "Over a century of watchmaking tradition distilled into every movement."
  },
  {
    icon: Gem,
    title: "Rare Materials",
    description: "Only the finest sapphire crystal, Swiss movements, and precious metals."
  },
  {
    icon: Shield,
    title: "Lifetime Warranty",
    description: "Every Maison Temporel piece is warranted for life against defects."
  }
];
function Home() {
  const { data: products = [], isLoading } = useAllProducts();
  const { data: collections = [] } = useCollections();
  const { setProducts } = useCart();
  reactExports.useEffect(() => {
    if (products.length > 0) setProducts(products);
  }, [products, setProducts]);
  const featured = products.slice(0, 3);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-ocid": "home.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30",
          style: {
            backgroundImage: "url('/assets/generated/hero-watches.dim_1600x900.jpg')"
          },
          "aria-hidden": "true"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 text-center px-6 max-w-3xl mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8 },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs tracking-[0.4em] uppercase text-primary mb-6 font-body", children: "The Art of Time" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-5xl md:text-7xl text-card leading-[1.05] mb-8", children: [
              "Maison",
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              "Temporel"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-card/70 font-body text-lg mb-10 max-w-xl mx-auto leading-relaxed", children: "Where precision meets poetry. Timepieces crafted for those who understand that every second is a luxury." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-4 justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/catalog", "data-ocid": "home.explore_cta", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                size: "lg",
                variant: "outline",
                className: "border-card/40 text-card hover:bg-card hover:text-foreground tracking-[0.15em] uppercase text-xs px-8 transition-smooth",
                children: [
                  "Explore Collections",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-2 h-4 w-4" })
                ]
              }
            ) }) })
          ]
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" })
    ] }),
    collections.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-muted/30 border-y border-border py-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-6 flex flex-wrap gap-6 justify-center", children: collections.map((col) => /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/catalog", "data-ocid": "home.collection_link", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs tracking-[0.2em] uppercase text-muted-foreground hover-gold transition-smooth", children: col }) }, col)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "bg-background py-24",
        "data-ocid": "home.featured_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 16 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { duration: 0.6 },
              className: "text-center mb-16",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs tracking-[0.35em] uppercase text-primary mb-3", children: "New Arrivals" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl text-foreground", children: "Featured Timepieces" })
              ]
            }
          ),
          isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8", children: [1, 2, 3].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "bg-card rounded-lg h-80 animate-pulse"
            },
            i
          )) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8", children: featured.map((product, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { opacity: 0, y: 24 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { duration: 0.5, delay: i * 0.1 },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                Link,
                {
                  to: "/catalog/$productId",
                  params: { productId: product.id.toString() },
                  "data-ocid": `home.featured_item.${i + 1}`,
                  children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group bg-card border border-border rounded-lg overflow-hidden hover:shadow-xl transition-smooth cursor-pointer", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-square bg-muted overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "img",
                      {
                        src: product.imageUrl || "/assets/generated/watch-placeholder.jpg",
                        alt: product.name,
                        className: "w-full h-full object-cover group-hover:scale-105 transition-smooth"
                      }
                    ) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-2 mb-2", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs tracking-[0.15em] uppercase text-muted-foreground mb-1", children: product.collection }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg text-foreground", children: product.name })
                        ] }),
                        !product.inStock && /* @__PURE__ */ jsxRuntimeExports.jsx(
                          Badge,
                          {
                            variant: "secondary",
                            className: "text-xs shrink-0",
                            children: "Sold Out"
                          }
                        )
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-primary font-body font-medium mt-3", children: [
                        "$",
                        product.price.toLocaleString()
                      ] })
                    ] })
                  ] })
                }
              )
            },
            product.id.toString()
          )) }),
          featured.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center mt-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/catalog", "data-ocid": "home.view_all_link", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              variant: "outline",
              className: "tracking-[0.15em] uppercase text-xs px-8 transition-smooth",
              children: [
                "View All Collections",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-2 h-4 w-4" })
              ]
            }
          ) }) })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "bg-muted/30 border-t border-border py-24",
        "data-ocid": "home.pillars_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-12", children: PILLARS.map((pillar, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 16 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { duration: 0.5, delay: i * 0.12 },
            className: "text-center",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex items-center justify-center w-12 h-12 rounded-full bg-card border border-border mb-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(pillar.icon, { className: "h-5 w-5 text-primary" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl text-foreground mb-3", children: pillar.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground font-body text-sm leading-relaxed", children: pillar.description })
            ]
          },
          pillar.title
        )) }) })
      }
    )
  ] });
}
export {
  Home as default
};
