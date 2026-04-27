import Types "../types/catalog";
import List "mo:core/List";
import Set "mo:core/Set";
import Text "mo:core/Text";

module {
  public type Product = Types.Product;
  public type Collection = Types.Collection;
  public type ProductId = Types.ProductId;

  public func allProducts() : List.List<Product> {
    let list = List.empty<Product>();
    list.add({ id = 1; name = "Lumière Perpétuelle"; collection = "Horlogerie Classique"; description = "A timeless dress watch with a silver guilloche dial, 18k rose gold case, and a hand-stitched alligator strap. The calibre beats at 28,800 vph with 72-hour power reserve."; price = 4850.00; imageUrl = "https://picsum.photos/seed/watch1/600/600"; inStock = true });
    list.add({ id = 2; name = "Héritage Romantique"; collection = "Horlogerie Classique"; description = "Inspired by early 20th-century pocket watches, this piece features a moon-phase complication, guilloché champagne dial, and a sapphire display caseback revealing its hand-finished movement."; price = 6200.00; imageUrl = "https://picsum.photos/seed/watch2/600/600"; inStock = true });
    list.add({ id = 3; name = "Élégance Intemporelle"; collection = "Horlogerie Classique"; description = "A refined time-only piece in polished stainless steel. The opaline white dial with applied gold indices embodies understated luxury for the discerning collector."; price = 3750.00; imageUrl = "https://picsum.photos/seed/watch3/600/600"; inStock = true });
    list.add({ id = 4; name = "Vitesse Séculaire"; collection = "Chronographe Moderne"; description = "A column-wheel flyback chronograph with a bold black ceramic case. The skeletonised dial reveals the bi-directional quick-set mechanism beneath its anti-reflective sapphire crystal."; price = 7400.00; imageUrl = "https://picsum.photos/seed/watch4/600/600"; inStock = true });
    list.add({ id = 5; name = "Cadence Sportive"; collection = "Chronographe Moderne"; description = "Built for precision timing, this steel chronograph offers 100m water resistance, an integrated rubber strap, and a tachymetre bezel. Powered by a certified chronometer movement."; price = 5100.00; imageUrl = "https://picsum.photos/seed/watch5/600/600"; inStock = true });
    list.add({ id = 6; name = "Rythme Urbain"; collection = "Chronographe Moderne"; description = "Where sport meets sophistication — a 42mm brushed titanium case, sunburst anthracite dial, and bidirectional rotating bezel. Water-resistant to 200m with a screw-down crown."; price = 5950.00; imageUrl = "https://picsum.photos/seed/watch6/600/600"; inStock = false });
    list.add({ id = 7; name = "Minuit Absolu"; collection = "Édition Nocturne"; description = "The deep cobalt fumé dial evokes the midnight sky. Hand-applied luminescent indexes glow with a warm azure hue, while the case in black PVD steel ensures an air of mystique."; price = 8300.00; imageUrl = "https://picsum.photos/seed/watch7/600/600"; inStock = true });
    list.add({ id = 8; name = "Étoile Solitaire"; collection = "Édition Nocturne"; description = "A stellar-inspired piece featuring a meteorite dial — no two are alike. Set in a 40mm white gold case with diamond-set lugs, this limited-release watch is as rare as the cosmos itself."; price = 14500.00; imageUrl = "https://picsum.photos/seed/watch8/600/600"; inStock = true });
    list.add({ id = 9; name = "Crépuscule Ardent"; collection = "Édition Nocturne"; description = "Capturing the warm gradient of dusk, the sunburst orange dial transitions to deep burgundy at its edge. Housed in a polished rose gold case with a handmade calfskin strap."; price = 9200.00; imageUrl = "https://picsum.photos/seed/watch9/600/600"; inStock = true });
    list.add({ id = 10; name = "Souverain Tourbillon"; collection = "Tourbillon Prestige"; description = "The crown jewel of the collection. A hand-wound tourbillon with a flying cage, visible through the open-worked dial. Platinum case, bevelled bridges, and 120-hour power reserve."; price = 48000.00; imageUrl = "https://picsum.photos/seed/watch10/600/600"; inStock = true });
    list.add({ id = 11; name = "Grand Complication Impériale"; collection = "Tourbillon Prestige"; description = "A masterpiece of horological engineering combining a tourbillon, perpetual calendar, and minute repeater within a 45mm 18k yellow gold case. Limited to 25 pieces worldwide."; price = 72000.00; imageUrl = "https://picsum.photos/seed/watch11/600/600"; inStock = true });
    list.add({ id = 12; name = "Calendrier Perpétuel"; collection = "Perpetuel Élégance"; description = "A self-correcting perpetual calendar that accounts for leap years until 2100. The slate grey dial displays day, date, month, and leap year in a clean, symmetrical layout."; price = 16800.00; imageUrl = "https://picsum.photos/seed/watch12/600/600"; inStock = true });
    list.add({ id = 13; name = "Équinoxe Annuel"; collection = "Perpetuel Élégance"; description = "An annual calendar correcting automatically for months of different lengths. The cream lacquered dial and blued steel hands create a classic palette revered by purists."; price = 11200.00; imageUrl = "https://picsum.photos/seed/watch13/600/600"; inStock = false });
    list.add({ id = 14; name = "Phases de Lune Éternelle"; collection = "Perpetuel Élégance"; description = "A poetic moon-phase perpetual calendar accurate to one day in 122 years. The aventurine night-sky sub-dial is hand-painted by a master artisan, each dial unique."; price = 19500.00; imageUrl = "https://picsum.photos/seed/watch14/600/600"; inStock = true });
    list
  };

  public func getById(products : List.List<Product>, id : ProductId) : ?Product {
    products.find(func(p) { p.id == id })
  };

  public func byCollection(products : List.List<Product>, collection : Collection) : [Product] {
    products.filter(func(p) { p.collection == collection }).toArray()
  };

  public func collections(products : List.List<Product>) : [Collection] {
    let seen = Set.empty<Text>();
    let result = List.empty<Collection>();
    products.forEach(func(p) {
      if (not seen.contains(p.collection)) {
        seen.add(p.collection);
        result.add(p.collection)
      }
    });
    result.toArray()
  };
};
