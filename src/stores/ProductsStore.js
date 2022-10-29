import { defineStore } from "pinia";

export const useProductsStore = defineStore({
  id: "ProductsStore",
  state: () => ({
    products: [],
  }),
  getters: {
    getProductData: (state) => {
      return (name) => state.products.product.find((product) => product.name === name);
    }
  },
  actions: {
    async fill() {
      this.products = (await import("@/data/products.json")).default;
    },
  },
});
