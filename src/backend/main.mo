import CatalogLib "lib/catalog";
import CartLib "lib/cart";
import CatalogTypes "types/catalog";
import List "mo:core/List";
import Map "mo:core/Map";
import CatalogMixin "mixins/catalog-api";
import CartMixin "mixins/cart-api";

actor {
  let products : List.List<CatalogTypes.Product> = CatalogLib.allProducts();
  let cartStore : CartLib.CartStore = Map.empty<Text, List.List<CartLib.CartItem>>();

  include CatalogMixin(products);
  include CartMixin(cartStore, products);
};
