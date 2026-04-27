import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { useCart } from "@/context/CartContext";
import { useAllProducts, useCollections } from "@/hooks/useProducts";
import type { Product } from "@/types";
import { Link } from "@tanstack/react-router";
import { Search, ShoppingBag } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useMemo, useState } from "react";
import { toast } from "sonner";

export default function Catalog() {
  const { data: products = [], isLoading } = useAllProducts();
  const { data: collections = [] } = useCollections();
  const { addToCart, setProducts } = useCart();
  const [search, setSearch] = useState("");
  const [activeCollection, setActiveCollection] = useState<string>("all");

  useEffect(() => {
    if (products.length > 0) setProducts(products);
  }, [products, setProducts]);

  const filtered = useMemo(() => {
    return products.filter((p: Product) => {
      const matchesSearch =
        !search ||
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.collection.toLowerCase().includes(search.toLowerCase());
      const matchesCollection =
        activeCollection === "all" || p.collection === activeCollection;
      return matchesSearch && matchesCollection;
    });
  }, [products, search, activeCollection]);

  function handleAddToCart(product: Product) {
    addToCart(product, 1);
    toast.success(`${product.name} added to cart`);
  }

  return (
    <div data-ocid="catalog.page" className="min-h-screen bg-background">
      {/* Page Header */}
      <section className="bg-card border-b border-border py-16">
        <div className="container mx-auto px-6 text-center">
          <p className="text-xs tracking-[0.35em] uppercase text-primary mb-3">
            Our Atelier
          </p>
          <h1 className="font-display text-4xl md:text-5xl text-foreground">
            Collections
          </h1>
        </div>
      </section>

      {/* Filters */}
      <div className="sticky top-16 z-30 bg-card/95 backdrop-blur border-b border-border">
        <div className="container mx-auto px-6 py-4 flex flex-col sm:flex-row gap-4 items-center justify-between">
          {/* Collection Tabs */}
          <div
            className="flex flex-wrap gap-2"
            data-ocid="catalog.collection_filter"
          >
            <button
              type="button"
              onClick={() => setActiveCollection("all")}
              data-ocid="catalog.filter_all.tab"
              className={`text-xs tracking-[0.15em] uppercase px-4 py-2 rounded border transition-smooth ${
                activeCollection === "all"
                  ? "bg-foreground text-background border-foreground"
                  : "border-border text-muted-foreground hover:text-foreground hover:border-foreground"
              }`}
            >
              All
            </button>
            {collections.map((col) => (
              <button
                type="button"
                key={col}
                onClick={() => setActiveCollection(col)}
                data-ocid="catalog.filter_collection.tab"
                className={`text-xs tracking-[0.15em] uppercase px-4 py-2 rounded border transition-smooth ${
                  activeCollection === col
                    ? "bg-foreground text-background border-foreground"
                    : "border-border text-muted-foreground hover:text-foreground hover:border-foreground"
                }`}
              >
                {col}
              </button>
            ))}
          </div>
          {/* Search */}
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" />
            <Input
              data-ocid="catalog.search_input"
              placeholder="Search timepieces..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-9 text-sm h-9 bg-background"
            />
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <section className="container mx-auto px-6 py-12">
        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="space-y-3">
                <Skeleton className="aspect-square rounded-lg" />
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
              </div>
            ))}
          </div>
        ) : filtered.length === 0 ? (
          <div data-ocid="catalog.empty_state" className="text-center py-24">
            <p className="font-display text-2xl text-foreground mb-3">
              No timepieces found
            </p>
            <p className="text-muted-foreground text-sm mb-6">
              Try adjusting your search or filter
            </p>
            <Button
              variant="outline"
              onClick={() => {
                setSearch("");
                setActiveCollection("all");
              }}
              data-ocid="catalog.clear_filters_button"
              className="tracking-[0.1em] uppercase text-xs"
            >
              Clear Filters
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((product: Product, i: number) => (
              <motion.div
                key={product.id.toString()}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: Math.min(i * 0.05, 0.4) }}
                data-ocid={`catalog.item.${i + 1}`}
                className="group bg-card border border-border rounded-lg overflow-hidden hover:shadow-xl transition-smooth"
              >
                <Link
                  to="/catalog/$productId"
                  params={{ productId: product.id.toString() }}
                  data-ocid={`catalog.product_link.${i + 1}`}
                >
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
                </Link>
                <div className="p-4">
                  <p className="text-xs tracking-[0.15em] uppercase text-muted-foreground mb-1">
                    {product.collection}
                  </p>
                  <Link
                    to="/catalog/$productId"
                    params={{ productId: product.id.toString() }}
                  >
                    <h3 className="font-display text-base text-foreground hover-gold transition-smooth line-clamp-1">
                      {product.name}
                    </h3>
                  </Link>
                  <p className="text-sm text-muted-foreground mt-1 line-clamp-2 font-body">
                    {product.description}
                  </p>

                  <div className="mt-4 flex items-center justify-between">
                    <span className="font-body font-medium text-primary">
                      ${product.price.toLocaleString()}
                    </span>
                    {product.inStock ? (
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleAddToCart(product)}
                        data-ocid={`catalog.add_to_cart.${i + 1}`}
                        className="text-xs tracking-[0.1em] uppercase transition-smooth"
                      >
                        <ShoppingBag className="h-3 w-3 mr-1" />
                        Add
                      </Button>
                    ) : (
                      <Badge variant="secondary" className="text-xs">
                        Sold Out
                      </Badge>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
