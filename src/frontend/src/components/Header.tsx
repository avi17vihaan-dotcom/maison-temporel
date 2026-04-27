import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { Link, useLocation } from "@tanstack/react-router";
import { Menu, ShoppingBag, X } from "lucide-react";
import { useState } from "react";

const NAV_LINKS = [
  { label: "Collections", to: "/catalog" },
  { label: "About", to: "/about" },
];

export function Header() {
  const { cartCount } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) =>
    location.pathname === path || location.pathname.startsWith(`${path}/`);

  return (
    <header className="sticky top-0 z-50 bg-card border-b border-luxury">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" data-ocid="header.logo_link" className="flex-shrink-0">
          <span className="font-display text-xl tracking-[0.25em] uppercase text-foreground hover-gold transition-smooth">
            Maison Temporel
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              data-ocid={`header.nav_${link.label.toLowerCase()}_link`}
              className={`text-xs tracking-[0.2em] uppercase transition-smooth font-body ${isActive(link.to) ? "gold-accent" : "text-muted-foreground hover:text-foreground"}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          <Link to="/cart" data-ocid="header.cart_link">
            <Button
              variant="ghost"
              size="icon"
              className="relative hover-gold transition-smooth"
            >
              <ShoppingBag className="h-5 w-5" />
              {cartCount > 0 && (
                <Badge
                  data-ocid="header.cart_count_badge"
                  className="absolute -top-1 -right-1 h-4 w-4 p-0 flex items-center justify-center text-[10px] bg-primary text-primary-foreground border-0 rounded-full"
                >
                  {cartCount > 99 ? "99+" : cartCount}
                </Badge>
              )}
            </Button>
          </Link>

          {/* Mobile menu toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden hover-gold transition-smooth"
            onClick={() => setMobileOpen(!mobileOpen)}
            data-ocid="header.mobile_menu_toggle"
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <nav className="md:hidden bg-card border-t border-luxury px-6 py-4 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              data-ocid={`header.mobile_nav_${link.label.toLowerCase()}_link`}
              className={`text-xs tracking-[0.2em] uppercase transition-smooth ${
                isActive(link.to) ? "gold-accent" : "text-muted-foreground"
              }`}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
