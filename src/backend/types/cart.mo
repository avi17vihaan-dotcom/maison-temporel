import Common "common";

module {
  public type ProductId = Common.ProductId;

  public type CartItem = {
    productId : ProductId;
    quantity : Nat;
  };

  public type Cart = {
    items : [CartItem];
    total : Float;
  };
};
