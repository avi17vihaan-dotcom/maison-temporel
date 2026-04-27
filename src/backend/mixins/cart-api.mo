import CartLib "../lib/cart";
import CartTypes "../types/cart";
import CatalogTypes "../types/catalog";
import List "mo:core/List";

mixin (
  cartStore : CartLib.CartStore,
  products : List.List<CatalogTypes.Product>,
) {

  public query ({ caller }) func getCart() : async CartTypes.Cart {
    CartLib.getCart(cartStore, caller, products)
  };

  public shared ({ caller }) func addToCart(productId : CatalogTypes.ProductId, quantity : Nat) : async () {
    CartLib.addToCart(cartStore, caller, productId, quantity)
  };

  public shared ({ caller }) func removeFromCart(productId : CatalogTypes.ProductId) : async () {
    CartLib.removeFromCart(cartStore, caller, productId)
  };

  public shared ({ caller }) func updateQuantity(productId : CatalogTypes.ProductId, quantity : Nat) : async () {
    CartLib.updateQuantity(cartStore, caller, productId, quantity)
  };

  public shared ({ caller }) func clearCart() : async () {
    CartLib.clearCart(cartStore, caller)
  };
};
