import { Separator } from "@/components/ui/separator";
import { Link } from "@tanstack/react-router";

const FOOTER_LINKS = [
  { label: "Collections", to: "/catalog" },
  { label: "About", to: "/about" },
  { label: "Cart", to: "/cart" },
];

export function Footer() {
  const year = new Date().getFullYear();
  const hostname = encodeURIComponent(window.location.hostname);

  return (
    <footer className="bg-card border-t border-luxury">
      <div className="container mx-auto px-6 py-12">
        {/* Brand row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <span className="font-display text-lg tracking-[0.25em] uppercase text-foreground">
            Maison Temporel
          </span>

          <nav className="flex items-center gap-8">
            {FOOTER_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                data-ocid={`footer.nav_${link.label.toLowerCase()}_link`}
                className="text-xs tracking-[0.15em] uppercase text-muted-foreground hover-gold transition-smooth"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <Separator className="my-8 border-luxury opacity-30" />

        {/* Copyright row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground tracking-wide">
          <p>© {year} Maison Temporel. All rights reserved.</p>
          <p>
            Built with love using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${hostname}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover-gold transition-smooth"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
