import { j as jsxRuntimeExports, f as Separator } from "./index-Dw3Hs0Rq.js";
import { m as motion } from "./proxy-BJYDQDN1.js";
const BRAND_NARRATIVE = `At the heart of every timepiece lies more than precision—it carries a story of heritage, artistry, and innovation. Our watch brand was founded on the belief that true luxury is timeless, defined not only by design but by the dedication behind every detail.

From the careful selection of materials to the mastery of craftsmanship, each watch reflects a commitment to excellence. We blend classic elegance with modern innovation, creating pieces that are not just instruments of time, but symbols of style, legacy, and individuality.`;
const ATELIER_FACTS = [
  { label: "Founded", value: "1891" },
  { label: "Collections", value: "12+" },
  { label: "Craftspeople", value: "47" },
  { label: "Countries", value: "60+" }
];
const VALUES = [
  {
    title: "Heritage",
    description: "More than a century of horological mastery flows through every component we produce. Our roots are our compass."
  },
  {
    title: "Artistry",
    description: "Each piece is a canvas. Our master watchmakers dedicate hundreds of hours to movements invisible to the eye."
  },
  {
    title: "Innovation",
    description: "We honour tradition while embracing the future — developing proprietary complications that define a new standard."
  },
  {
    title: "Excellence",
    description: "From the raw materials sourced across three continents to the final polish, we refuse compromise at every stage."
  }
];
function About() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-ocid": "about.page", className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-card border-b border-border py-24 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.7 },
        className: "container mx-auto px-6 max-w-2xl",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs tracking-[0.4em] uppercase text-primary mb-4", children: "Our Story" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-5xl md:text-6xl text-foreground leading-[1.1] mb-6", children: [
            "The Art of",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            "Time"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground font-body leading-relaxed", children: "Born from passion. Refined by decades of mastery. Maison Temporel stands as a testament to what is possible when artistry meets precision." })
        ]
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "bg-muted/30 border-b border-border py-12",
        "data-ocid": "about.stats_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-8 text-center", children: ATELIER_FACTS.map((fact, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 12 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { duration: 0.4, delay: i * 0.08 },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-4xl text-primary mb-1", children: fact.value }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs tracking-[0.2em] uppercase text-muted-foreground", children: fact.label })
            ]
          },
          fact.label
        )) }) })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "bg-background py-24",
        "data-ocid": "about.narrative_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-16 items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { opacity: 0, x: -20 },
              whileInView: { opacity: 1, x: 0 },
              viewport: { once: true },
              transition: { duration: 0.6 },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[4/5] bg-muted rounded-lg overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: "/assets/generated/atelier-craftsman.dim_800x1000.jpg",
                  alt: "Master watchmaker at work",
                  className: "w-full h-full object-cover"
                }
              ) })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, x: 20 },
              whileInView: { opacity: 1, x: 0 },
              viewport: { once: true },
              transition: { duration: 0.6, delay: 0.1 },
              className: "space-y-6",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs tracking-[0.35em] uppercase text-primary", children: "Our Philosophy" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl text-foreground leading-tight", children: "More Than Precision" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, { className: "border-border w-16" }),
                BRAND_NARRATIVE.split("\n\n").map((para) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "text-muted-foreground font-body leading-[1.85] text-base",
                    children: para
                  },
                  para.slice(0, 20)
                ))
              ]
            }
          )
        ] }) })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "bg-muted/30 border-t border-border py-24",
        "data-ocid": "about.values_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 16 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { duration: 0.5 },
              className: "text-center mb-16",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs tracking-[0.35em] uppercase text-primary mb-3", children: "What Drives Us" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl text-foreground", children: "Our Core Values" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8", children: VALUES.map((value, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 16 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { duration: 0.5, delay: i * 0.1 },
              className: "bg-card border border-border rounded-lg p-8",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl text-foreground mb-4", children: value.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground font-body leading-relaxed", children: value.description })
              ]
            },
            value.title
          )) })
        ] })
      }
    )
  ] });
}
export {
  About as default
};
