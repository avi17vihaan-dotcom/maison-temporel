import { Separator } from "@/components/ui/separator";
import { motion } from "motion/react";

const BRAND_NARRATIVE = `At the heart of every timepiece lies more than precision—it carries a story of heritage, artistry, and innovation. Our watch brand was founded on the belief that true luxury is timeless, defined not only by design but by the dedication behind every detail.

From the careful selection of materials to the mastery of craftsmanship, each watch reflects a commitment to excellence. We blend classic elegance with modern innovation, creating pieces that are not just instruments of time, but symbols of style, legacy, and individuality.`;

const ATELIER_FACTS = [
  { label: "Founded", value: "1891" },
  { label: "Collections", value: "12+" },
  { label: "Craftspeople", value: "47" },
  { label: "Countries", value: "60+" },
];

const VALUES = [
  {
    title: "Heritage",
    description:
      "More than a century of horological mastery flows through every component we produce. Our roots are our compass.",
  },
  {
    title: "Artistry",
    description:
      "Each piece is a canvas. Our master watchmakers dedicate hundreds of hours to movements invisible to the eye.",
  },
  {
    title: "Innovation",
    description:
      "We honour tradition while embracing the future — developing proprietary complications that define a new standard.",
  },
  {
    title: "Excellence",
    description:
      "From the raw materials sourced across three continents to the final polish, we refuse compromise at every stage.",
  },
];

export default function About() {
  return (
    <div data-ocid="about.page" className="min-h-screen bg-background">
      {/* Hero */}
      <section className="bg-card border-b border-border py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="container mx-auto px-6 max-w-2xl"
        >
          <p className="text-xs tracking-[0.4em] uppercase text-primary mb-4">
            Our Story
          </p>
          <h1 className="font-display text-5xl md:text-6xl text-foreground leading-[1.1] mb-6">
            The Art of
            <br />
            Time
          </h1>
          <p className="text-muted-foreground font-body leading-relaxed">
            Born from passion. Refined by decades of mastery. Maison Temporel
            stands as a testament to what is possible when artistry meets
            precision.
          </p>
        </motion.div>
      </section>

      {/* Stats */}
      <section
        className="bg-muted/30 border-b border-border py-12"
        data-ocid="about.stats_section"
      >
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {ATELIER_FACTS.map((fact, i) => (
              <motion.div
                key={fact.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <p className="font-display text-4xl text-primary mb-1">
                  {fact.value}
                </p>
                <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground">
                  {fact.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Narrative */}
      <section
        className="bg-background py-24"
        data-ocid="about.narrative_section"
      >
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="aspect-[4/5] bg-muted rounded-lg overflow-hidden">
                <img
                  src="/assets/generated/atelier-craftsman.dim_800x1000.jpg"
                  alt="Master watchmaker at work"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-6"
            >
              <p className="text-xs tracking-[0.35em] uppercase text-primary">
                Our Philosophy
              </p>
              <h2 className="font-display text-4xl text-foreground leading-tight">
                More Than Precision
              </h2>
              <Separator className="border-border w-16" />
              {BRAND_NARRATIVE.split("\n\n").map((para) => (
                <p
                  key={para.slice(0, 20)}
                  className="text-muted-foreground font-body leading-[1.85] text-base"
                >
                  {para}
                </p>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section
        className="bg-muted/30 border-t border-border py-24"
        data-ocid="about.values_section"
      >
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <p className="text-xs tracking-[0.35em] uppercase text-primary mb-3">
              What Drives Us
            </p>
            <h2 className="font-display text-4xl text-foreground">
              Our Core Values
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {VALUES.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-card border border-border rounded-lg p-8"
              >
                <h3 className="font-display text-2xl text-foreground mb-4">
                  {value.title}
                </h3>
                <p className="text-muted-foreground font-body leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
