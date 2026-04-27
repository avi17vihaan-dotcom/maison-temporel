import Common "common";

module {
  public type ProductId = Common.ProductId;
  public type Collection = Common.Collection;

  public type Product = {
    id : ProductId;
    name : Text;
    collection : Collection;
    description : Text;
    price : Float;
    imageUrl : Text;
    inStock : Bool;
  };
};
