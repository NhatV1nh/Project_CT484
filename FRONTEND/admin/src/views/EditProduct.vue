<template>
    <ProductEditForm
      :currentProduct="currentProduct"
      :categories="listCategory"
      @updateProduct="submitUpdateProduct"
    />
  </template>
  
  <script>
  import productService from "@/services/product.service.js";
  import categoryService from "@/services/category.service.js";
  import ProductEditForm from "@/components/ProductEditForm.vue";
  import { defineComponent, ref, onMounted, computed } from "vue";
  import { useRoute, useRouter } from "vue-router";
  export default {
    components: {
      ProductEditForm,
    },
    // Rest of the script
    setup() {
      const listCategory = ref([]); // Khởi tạo biến listCategory
      const currentProduct = ref({}); // Add this for the current product
      const route = useRoute();
      const router = useRouter();
      onMounted(async () => {
        try {
          listCategory.value = await categoryService.findAll(); // Lấy dữ liệu khi component được mount
          const productId = computed(() => route.params.id);
          currentProduct.value = await productService.get(productId.value);
        } catch (error) {
          console.error("Error fetching categories:", error);
        }
      });
      // Existing setup code
      // Rest of the setup code
  
      const submitUpdateProduct = async (data) => {
        try {
          const formData = new FormData();
          for (const key in data) {
            if (key !== "productImg") {
              formData.append(key, data[key]);
            } else if (data.productImg) {
              formData.append("productImg", data.productImg[0]);
              formData.append("productImg", data.productImg[1]);
            }
          }
  
          // for (let [key, value] of formData.entries()) {
          //   console.log(`${key}:`, value);
          // }
          const productId = computed(() => route.params.id);
          // console.log("My product needed update: ", formData);
          const response = await productService.update(productId, formData);
          alert("Cập nhật sản phẩm thành công");
          router.push({ name: "home" });
        } catch (error) {
          console.log(error);
        }
      };
  
      return { submitUpdateProduct, listCategory, currentProduct }; // Add productToEdit
    },
  };
  </script>