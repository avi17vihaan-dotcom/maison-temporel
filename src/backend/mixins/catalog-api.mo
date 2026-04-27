import CatalogLib "../lib/catalog";
import CatalogTypes "../types/catalog";
import List "mo:core/List";

mixin (products : List.List<CatalogTypes.Product>) {

  public query func getAllProducts() : async [CatalogTypes.Product] {
    products.toArray()
  };

  public query func getProductById(id : CatalogTypes.ProductId) : async ?CatalogTypes.Product {
    CatalogLib.getById(products, id)
  };

  public query func getProductsByCollection(collection : CatalogTypes.Collection) : async [CatalogTypes.Product] {
    CatalogLib.byCollection(products, collection)
  };

  public query func getCollections() : async [CatalogTypes.Collection] {
    CatalogLib.collections(products)
  };
};
