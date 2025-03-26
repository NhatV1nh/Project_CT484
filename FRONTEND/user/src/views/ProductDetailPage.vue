<template>
    <div class="page">
      <section class="py-5">
        <div class="container">
          <div class="row gx-5">
            <ProductDetail :product="product" :formatPriceVND="formatPriceVND" />
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script>
  import { ref, computed, onMounted } from "vue";
  import { useRoute } from "vue-router";
  import productService from "@/services/product.service.js";
  import ProductDetail from "@/components/ProductDetail.vue";
  
  export default {
    components: {
      ProductDetail,
    },
    setup() {
      const product = ref({
        productName: "",
        productImg: [],
        price: null,
        productDes: "",
        trademark: "",
        origin: "",
      });
  
      const route = useRoute();
      onMounted(async () => {
        try {
          const productId = computed(() => route.params.id);
          // console.log(productId.value);
          product.value = await productService.get(productId.value);
          console.log(product);
        } catch (error) {
          console.log(error);
        }
      });
      function formatPriceVND(price) {
        return price.toLocaleString("vi-VN", {
          style: "currency",
          currency: "VND",
        });
      }
      return { product, formatPriceVND };
    },
  };
  </script>