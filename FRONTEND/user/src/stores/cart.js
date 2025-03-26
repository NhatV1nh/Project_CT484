// stores/cart.js hoặc stores/cart.ts
import { defineStore } from "pinia";

export const useCartStore = defineStore({
  id: "cart",
  state: () => ({
    products: [],
    totalQuantity: 0,
    totalPrice: 0,
  }),
  //Getter: là nơi tính toán
  getters: {
    // Tính tổng số lượng và tổng giá tiền khi có sự thay đổi trong giỏ hàng
  },
  actions: {
    addProduct(product) {
      const existingProduct = this.products.find((p) => p._id === product._id);
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        this.products.push(product);
      }
      this.calculateTotals();
    },
    removeProduct(productId) {
      this.products = this.products.filter((p) => p._id !== productId);
      this.calculateTotals();
    },
    updateQuantity(productId, quantity) {
      const product = this.products.find((p) => p._id === productId);
      if (product) {
        product.quantity = quantity;
      }
      this.calculateTotals();
    },
    incrementProductQuantity(productId) {
      const product = this.products.find((p) => p._id === productId);
      if (product) {
        product.quantity++;
        this.calculateTotals();
      }
    },

    decrementProductQuantity(productId) {
      const product = this.products.find((p) => p._id === productId);
      if (product && product.quantity > 1) {
        product.quantity--;
        this.calculateTotals();
      }
    },
    clearCart() {
      this.products = [];
      this.calculateTotals();
    },
    calculateTotals() {
      this.totalQuantity = 0;
      this.totalPrice = 0;
      for (const product of this.products) {
        this.totalQuantity += product.quantity;
        this.totalPrice += product.quantity * product.price;
      }
    },
  },
  persist: {
    enabled: true,
    strategies: [
      {
        storage: window.localStorage,
      },
    ],
  },
});