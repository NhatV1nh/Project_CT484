<template>
    <ProductForm
      :categories="listCategory"
      @submit:addproduct="submitAddproduct"
    />
  </template>
  
  <script>
  import productService from "@/services/product.service.js";
  import categoryService from "@/services/category.service.js";
  import ProductForm from "@/components/ProductForm.vue";
  import { defineComponent, ref, onMounted } from "vue";
  import { useRouter } from "vue-router";
  export default {
    components: {
      ProductForm,
    },
    setup() {
      const listCategory = ref([]); // Khởi tạo biến listCategory
      const router = useRouter();
      onMounted(async () => {
        try {
          listCategory.value = await categoryService.findAll(); // Lấy dữ liệu khi component được mount
        } catch (error) {
          console.error("Error fetching categories:", error);
        }
      });
      const submitAddproduct = async (data) => {
        try {
          const formData = new FormData();
          // Thêm các trường dữ liệu vào formData
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
          const response = await productService.create(formData);
          // console.log(data);
          // console.log(response);
          alert("Thêm sản phẩm thành công");
          router.push({ name: "home" });
        } catch (error) {
          console.log(error);
        }
      };
  
      return { submitAddproduct, listCategory };
    },
  };
  </script>