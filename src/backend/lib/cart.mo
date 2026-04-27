import CartTypes "../types/cart";
import CatalogTypes "../types/catalog";
import Map "mo:core/Map";
import List "mo:core/List";

module {
  public type CartItem = CartTypes.CartItem;
  public type Cart = CartTypes.Cart;
  public type ProductId = CartTypes.ProductId;

  // cart storage: Principal (as Text) -> List<CartItem>
  public type CartStore = Map.Map<Text, List.List<CartItem>>;

  public func getCart(
    store : CartStore,
    caller : Principal,
    products : List.List<CatalogTypes.Product>,
  ) : Cart {
    let key = caller.toText();
    let items = switch (store.get(key)) {
      case (?list) list.toArray();
      case null [];
    };
    let total = items.foldLeft(
      0.0 : Float,
      func(acc : Float, item : CartItem) : Float {
        switch (products.find(func(p) { p.id == item.productId })) {
          case (?p) acc + p.price * item.quantity.toFloat();
          case null acc;
        };
      },
    );
    { items; total }
  };

  public func addToCart(
    store : CartStore,
    caller : Principal,
    productId : ProductId,
    quantity : Nat,
  ) {
    let key = caller.toText();
    let existing = switch (store.get(key)) {
      case (?list) list;
      case null {
        let fresh = List.empty<CartItem>();
        store.add(key, fresh);
        fresh
      };
    };
    switch (existing.findIndex(func(item) { item.productId == productId })) {
      case (?idx) {
        let current = existing.at(idx);
        existing.put(idx, { current with quantity = current.quantity + quantity })
      };
      case null existing.add({ productId; quantity });
    }
  };

  public func removeFromCart(
    store : CartStore,
    caller : Principal,
    productId : ProductId,
  ) {
    let key = caller.toText();
    switch (store.get(key)) {
      case (?list) {
        switch (list.findIndex(func(item) { item.productId == productId })) {
          case (?idx) {
            let last = list.removeLast();
            if (idx < list.size()) {
              switch last {
                case (?item) list.put(idx, item);
                case null {};
              }
            }
          };
          case null {};
        }
      };
      case null {};
    }
  };

  public func updateQuantity(
    store : CartStore,
    caller : Principal,
    productId : ProductId,
    quantity : Nat,
  ) {
    let key = caller.toText();
    if (quantity == 0) {
      removeFromCart(store, caller, productId)
    } else {
      switch (store.get(key)) {
        case (?list) {
          switch (list.findIndex(func(item) { item.productId == productId })) {
            case (?idx) list.put(idx, { productId; quantity });
            case null {};
          }
        };
        case null {};
      }
    }
  };

  public func clearCart(store : CartStore, caller : Principal) {
    let key = caller.toText();
    switch (store.get(key)) {
      case (?list) list.clear();
      case null {};
    }
  };
};
