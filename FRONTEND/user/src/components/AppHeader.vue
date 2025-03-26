<template>
  <div class="header">
    <!-- Navbar -->
    <nav class="container navbar navbar-expand-lg navbar-light bg-light">
      <!-- Container wrapper -->
      <div class="container-fluid">
        <!-- Toggle button -->

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <i class="fas fa-bars"></i>
        </button>
        <div id="contain-form" class="d-flex align-items-center">
          <!-- search -->
          <form class="d-flex input-group w-auto me-2" @submit.prevent="searchBooks">
            <input v-model.trim="searchKeyword" type="search" class="form-control rounded"
              placeholder="Nhập vào tên sách hoặc mô tả..." aria-label="Search" aria-describedby="search-addon" />
            <button type="submit" class="btn btn-outline-secondary">
              <i class="fas fa-search"></i>
            </button>
          </form>
          <!-- Icon -->
          <!-- cart -->
          <!-- <a class="text-reset me-3" href="#">
            <router-link
              :to="{
                name: 'cart',
              }"
              class="router-css router-li router-cart"
            >
              <i class="fas fa-shopping-cart"></i>
            </router-link>

            <span class="badge rounded-pill badge-notification bg-danger">{{
              totalQuantity
            }}</span>
          </a> -->

          <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle button-user" type="button" id="dropdownMenuButton1"
              data-bs-toggle="dropdown" aria-expanded="false">
              <i style="color: black; font-size: 18px" class="fa-solid fa-user"></i>
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <router-link v-show="isLoggedIn" :to="{
                name: 'profile',
              }" class="router-css router-li">
                <li>
                  <a class="dropdown-item" href="#">Tài khoản</a>
                </li>
              </router-link>
              <router-link v-show="!isLoggedIn" :to="{ name: 'signin' }" class="router-css router-li">
                <li>
                  <a class="dropdown-item" href="#">Đăng nhập</a>
                </li>
              </router-link>
              <router-link v-show="!isLoggedIn" :to="{ name: 'signup' }" class="router-css router-li">
                <li>
                  <a class="dropdown-item" href="#">Đăng ký</a>
                </li>
              </router-link>
              <!-- <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li> -->
            </ul>
          </div>
        </div>
        <!-- Collapsible wrapper -->
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <!-- Navbar brand -->
          <a class="navbar-brand mt-2 mt-lg-0 d-none d-md-block" href="/">
            <img
              src="https://img.lovepik.com/png/20231014/cartoon-brown-library-clipart-estate-zone-exterior_199009_wh1200.png"
              height="80" alt="MDB Logo" loading="lazy" />
          </a>
          <!-- Left links -->
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <router-link :to="{ name: 'home' }" class="router-css">
              <li class="nav-item">
                <a class="nav-link" href="#">Trang chủ</a>
              </li>
            </router-link>
            <router-link :to="{ name: 'product' }" class="router-css">
              <li class="nav-item">
                <a class="nav-link" href="#">Sách</a>
              </li>
            </router-link>
            <!-- <router-link :to="{ name: 'product' }" class="router-css">
              <li class="nav-item">
                <a class="nav-link" href="#">Mượn sách</a>
              </li>
            </router-link> -->
            <router-link :to="{ name: 'introduce' }" class="router-css">
              <li class="nav-item">
                <a class="nav-link" href="#">Giới thiệu</a>
              </li>
            </router-link>
            <router-link :to="{ name: 'contact' }" class="router-css">
              <li class="nav-item">
                <a class="nav-link" href="#">Liên hệ</a>
              </li>
            </router-link>
          </ul>
          <!-- Left links -->
        </div>
        <!-- Collapsible wrapper -->
      </div>

      <!-- Container wrapper -->
    </nav>

    <!-- Navbar -->
  </div>
</template>

<script>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import ProductService from "@/services/product.service";
 // Đảm bảo import ProductService từ đúng đường dẫn

export default {
  setup() {
    const router = useRouter();

    // Trạng thái để lưu từ khóa tìm kiếm
    const searchKeyword = ref("");

    // Dùng để lưu kết quả tìm kiếm
    const searchResult = ref([]);

    // Phương thức xử lý tìm kiếm sách dựa trên từ khóa
    const searchBooks = async () => {
      try {
        const response = await ProductService.findProductWithName(searchKeyword.value);
        searchResult.value = response.data; // Giả sử API trả về một đối tượng có trường "data" chứa dữ liệu sản phẩm
      } catch (error) {
        console.error("Error searching books:", error);
      }
    };

    return {
      searchKeyword,
      searchResult,
      searchBooks,
    };
  },
};

</script>


<style>
body {
  margin: 0 0 !important;
}

.router-css {
  text-decoration: none;
}

.router-cart {
  color: black;
}

.header {
  height: 80px;
  background-color: #fff;
  position: -webkit-sticky;
  /* Dành cho trình duyệt Safari */
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.header .navbar {
  height: 80px;
  background-color: #fff !important;
  font-size: 18px !important;
  text-transform: uppercase;
  font-weight: 600;
}

.router-li li a {
  font-size: 12px;
}

.button-user {
  background-color: #fff;
  border: none;
  padding: 4px;
}

.d-flex.align-items-center {
  order: 2;
  /* Thay đổi thứ tự cho máy tính */
}

.collapse.navbar-collapse {
  order: 1;
  /* Thay đổi thứ tự cho máy tính */
}

@media only screen and (max-width: 599px) {
  .d-none d-md-block {
    display: none;
  }
}

/* Điện thoại di động lớn đến máy tính bảng nhỏ (large phones to small tablets) */
@media only screen and (min-width: 600px) and (max-width: 767px) {
  /* CSS cho điện thoại di động lớn đến máy tính bảng nhỏ ở đây */
}
</style>