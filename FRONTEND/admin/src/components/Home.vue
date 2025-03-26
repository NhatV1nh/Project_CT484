<template>
    <div id="layoutSidenav_content">
      <main>
        <div class="container-fluid px-4">
          <h1 class="mt-4" style="font-weight: 600">Danh sách quyển sách</h1>
          <ol class="breadcrumb mb-4">
            <button type="button" class="btn btn-dark">
              <router-link :to="{ name: 'add-product' }" class="router-css">
                Thêm (+)</router-link
              >
            </button>
          </ol>
          <div class="card mb-4"></div>
          <div class="card mb-4">
            <div class="card-header">
              <i class="fas fa-table me-1"></i>
            </div>
            <div class="card-body" id="scroll-container">
              <table class="table">
                <thead class="table-light">
                  <tr>
                    <th>STT</th>
                    <th>Tên sản phẩm</th>
                    <th>Hình ảnh</th>
                    <!-- <th>Số lượng</th> -->
                    <th>Nhà xuất bản</th>
                    <th>Đơn vị phát hành</th>
                    <th>Trạng thái</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(product, index) in products" :key="product._id">
                    <td>&ensp;{{ index + 1 }}</td>
                    <td>{{ product.productName }}</td>
                    <td>
                      <img
                        :src="
                          'http://localhost:3000/uploads/' + product.productImg[0]
                        "
                        alt="Hình ảnh"
                        width="50"
                        height="50"
                      />
                    </td>
                    <!-- <td>{{  }}</td> -->
                    <td>{{ product.trademark }}</td>
                    <td>{{ product.origin }}</td>
                    <td>{{ product.soldOut ? "Hết" : "Còn" }}</td>
                    <td>
                      <router-link
                        :to="{
                          name: 'edit-product',
                          params: { id: product._id },
                        }"
                        class="router-css-2"
                        ><i class="fa-regular fa-pen-to-square"></i
                      ></router-link>
                      &ensp;|&ensp;
                      <a
                        style="color: black"
                        @click="
                          confirmDeleteProduct(product._id, product.productName)
                        "
                        ><i class="fa-solid fa-trash"></i
                      ></a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  </template>
  
  <script>
  import { useAuthStore } from "@/stores/auth.js";
  import productService from "@/services/product.service.js";
  import { ref, onMounted } from "vue";
  import { useRouter } from "vue-router";
  const authStore = useAuthStore();
  
  export default {
    setup() {
      const products = ref([]);
      const router = useRouter();
      const fetchProducts = async () => {
        try {
          const response = await productService.findAll();
          products.value = response;
        } catch (error) {
          console.error("Lỗi khi lấy danh sách sản phẩm:", error);
        }
      };
  
      const confirmDeleteProduct = async (productId, productName) => {
        const shouldDelete = window.confirm(
          `Bạn có chắc muốn xóa sản phẩm "${productName}" không?`
        );
  
        if (shouldDelete) {
          try {
            const response = await productService.delete(productId);
            alert("Xóa sản phẩm thành công!");
            const responseP = await productService.findAll();
            products.value = responseP;
          } catch (error) {
            console.log(error);
          }
        } else {
        }
      };
  
      onMounted(() => {
        fetchProducts();
      });
  
      function formatPriceVND(price) {
        return price.toLocaleString("vi-VN", {
          style: "currency",
          currency: "VND",
        });
      }
  
      return {
        products,
        confirmDeleteProduct,
        formatPriceVND,
      };
    },
  };
  </script>
  
  <style>
  #scroll-container {
    padding: 0px;
    height: 800px;
    overflow: auto;
  }
  table {
    width: 100%;
    border-collapse: collapse;
  }
  
  thead {
    background-color: #000;
    /* Màu nền của phần head */
    color: #fff;
    position: sticky;
    top: 0;
  }
  
  th {
    text-align: left;
    padding: 8px 10px;
    /* Các thuộc tính CSS khác cho phần đầu bảng */
  }
  
  tbody {
    height: 200px;
    /* Đặt chiều cao cho phần body để tạo thanh cuộn */
    overflow: auto;
  }
  .router-css {
    text-decoration: none;
    color: #fff;
  }
  .router-css-2 {
    color: black;
  }
  </style>