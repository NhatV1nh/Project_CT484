<template>
    <nav class="sb-topnav navbar navbar-expand navbar-dark bg-dark">
      <!-- Navbar Brand-->
      <router-link :to="{ name: 'home' }" class="router-css">
        <a class="navbar-brand ps-3" href="index.html">Quản trị viên</a>
      </router-link>
      <!-- Sidebar Toggle-->
      <button
        class="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0"
        id="sidebarToggle"
        href="#!"
      >
        <i class="fas fa-bars"></i>
      </button>
      <!-- Navbar Search-->
      <form
        class="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0"
      >
        <div class="input-group">
          <input
            class="form-control"
            type="text"
            placeholder="Tìm kiếm"
            aria-label="Tìm kiếm"
            aria-describedby="btnNavbarSearch"
          />
          <button class="btn btn-primary" id="btnNavbarSearch" type="button">
            <i class="fas fa-search"></i>
          </button>
        </div>
      </form>
      <!-- Navbar-->
      <ul class="navbar-nav d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            id="navbarDropdown"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            ><i class="fas fa-user fa-fw"></i
          ></a>
          <ul
            class="dropdown-menu dropdown-menu-end"
            aria-labelledby="navbarDropdown"
          >
            <li>
              <a class="dropdown-item" href="#!" @click="signOut">Đăng xuất</a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </template>
  
  <script>
  import { useAuthStore } from "@/stores/auth";
  import { useRouter } from "vue-router";
  import adminService from "@/services/admin.service";
  
  export default {
    setup() {
      const authStore = useAuthStore();
      const router = useRouter();
  
      const signOut = async () => {
        try {
          const response = await adminService.signOut();
          authStore.logoutAdmin();
          console.log("Đăng xuất thành công");
          router.push({ name: "signin" });
        } catch (error) {
          console.log(error);
        }
      };
      return { signOut };
    },
  };
  </script>
  
  <style>
  .router-css {
    text-decoration: none;
    color: #fff;
  }
  </style>