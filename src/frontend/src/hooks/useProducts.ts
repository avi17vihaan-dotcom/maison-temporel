import { createActor } from "@/backend";
import type { Collection, Product } from "@/types";
import { useActor } from "@caffeineai/core-infrastructure";
import { useQuery } from "@tanstack/react-query";

export function useAllProducts() {
  const { actor, isFetching } = useActor(createActor);
  return useQuery<Product[]>({
    queryKey: ["products"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllProducts();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useProductById(id: bigint | undefined) {
  const { actor, isFetching } = useActor(createActor);
  return useQuery<Product | null>({
    queryKey: ["product", id?.toString()],
    queryFn: async () => {
      if (!actor || id === undefined) return null;
      return actor.getProductById(id);
    },
    enabled: !!actor && !isFetching && id !== undefined,
  });
}

export function useProductsByCollection(collection: Collection | undefined) {
  const { actor, isFetching } = useActor(createActor);
  return useQuery<Product[]>({
    queryKey: ["products", "collection", collection],
    queryFn: async () => {
      if (!actor || !collection) return [];
      return actor.getProductsByCollection(collection);
    },
    enabled: !!actor && !isFetching && !!collection,
  });
}

export function useCollections() {
  const { actor, isFetching } = useActor(createActor);
  return useQuery<Collection[]>({
    queryKey: ["collections"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getCollections();
    },
    enabled: !!actor && !isFetching,
  });
}
