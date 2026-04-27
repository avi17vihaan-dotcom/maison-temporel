import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { useAllProducts, useCollections } from "@/hooks/useProducts";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Clock, Gem, Shield } from "lucide-react";
import { motion } from "motion/react";
import { useEffect } from "react";

const PILLARS = [
  {
    icon: Clock,
    title: "Heritage Craft",
    description:
      "Over a century of watchmaking tradition distilled into every movement.",
  },
  {
    icon: Gem,
    title: "Rare Materials",
    description:
      "Only the finest sapphire crystal, Swiss movements, and precious metals.",
  },
  {
    icon: Shield,
    title: "Lifetime Warranty",
    description:
      "Every Maison Temporel piece is warranted for life against defects.",
  },
];

export default function Home() {
  const { data: products = [], isLoading } = useAllProducts();
  const { data: collections = [] } = useCollections();
  const { setProducts } = useCart();

  useEffect(() => {
    if (products.length > 0) setProducts(products);
  }, [products, setProducts]);

  const featured = products.slice(0, 3);

  return (
    <div data-ocid="home.page">
      {/* Hero */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-foreground">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage:
              "url('/assets/generated/hero-watches.dim_1600x900.jpg')",
          }}
          aria-hidden="true"
        />
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xs tracking-[0.4em] uppercase text-primary mb-6 font-body">
              The Art of Time
            </p>
            <h1 className="font-display text-5xl md:text-7xl text-card leading-[1.05] mb-8">
              Maison
              <br />
              Temporel
            </h1>
            <p className="text-card/70 font-body text-lg mb-10 max-w-xl mx-auto leading-relaxed">
              Where precision meets poetry. Timepieces crafted for those who
              understand that every second is a luxury.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/catalog" data-ocid="home.explore_cta">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-card/40 text-card hover:bg-card hover:text-foreground tracking-[0.15em] uppercase text-xs px-8 transition-smooth"
                >
                  Explore Collections
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Collections strip */}
      {collections.length > 0 && (
        <section className="bg-muted/30 border-y border-border py-4">
          <div className="container mx-auto px-6 flex flex-wrap gap-6 justify-center">
            {collections.map((col) => (
              <Link key={col} to="/catalog" data-ocid="home.collection_link">
                <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground hover-gold transition-smooth">
                  {col}
                </span>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Featured Products */}
      <section
        className="bg-background py-24"
        data-ocid="home.featured_section"
      >
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-xs tracking-[0.35em] uppercase text-primary mb-3">
              New Arrivals
            </p>
            <h2 className="font-display text-4xl text-foreground">
              Featured Timepieces
            </h2>
          </motion.div>

          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="bg-card rounded-lg h-80 animate-pulse"
                />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featured.map((product, i) => (
                <motion.div
                  key={product.id.toString()}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <Link
                    to="/catalog/$productId"
                    params={{ productId: product.id.toString() }}
                    data-ocid={`home.featured_item.${i + 1}`}
                  >
                    <div className="group bg-card border border-border rounded-lg overflow-hidden hover:shadow-xl transition-smooth cursor-pointer">
                      <div className="aspect-square bg-muted overflow-hidden">
                        <img
                          src={
                            product.imageUrl ||
                            "/assets/generated/watch-placeholder.jpg"
                          }
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                        />
                      </div>
                      <div className="p-5">
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <div>
                            <p className="text-xs tracking-[0.15em] uppercase text-muted-foreground mb-1">
                              {product.collection}
                            </p>
                            <h3 className="font-display text-lg text-foreground">
                              {product.name}
                            </h3>
                          </div>
                          {!product.inStock && (
                            <Badge
                              variant="secondary"
                              className="text-xs shrink-0"
                            >
                              Sold Out
                            </Badge>
                          )}
                        </div>
                        <p className="text-primary font-body font-medium mt-3">
                          ${product.price.toLocaleString()}
                        </p>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}

          {featured.length > 0 && (
            <div className="text-center mt-12">
              <Link to="/catalog" data-ocid="home.view_all_link">
                <Button
                  variant="outline"
                  className="tracking-[0.15em] uppercase text-xs px-8 transition-smooth"
                >
                  View All Collections
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Pillars */}
      <section
        className="bg-muted/30 border-t border-border py-24"
        data-ocid="home.pillars_section"
      >
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {PILLARS.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-card border border-border mb-5">
                  <pillar.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-display text-xl text-foreground mb-3">
                  {pillar.title}
                </h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed">
                  {pillar.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
