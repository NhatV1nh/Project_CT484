<template>
    <aside class="col-lg-6">
      <div class="border rounded-4 mb-3 d-flex justify-content-center">
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img :src="'http://localhost:3000/uploads/' + product.productImg[0]" class="d-block w-100" alt="..."
                style="height: 350px" />
            </div>
            <div class="carousel-item">
              <img :src="'http://localhost:3000/uploads/' + product.productImg[1]" class="d-block w-100" alt="..."
                height="350" />
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
            data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
            data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <!-- thumbs-wrap.// -->
      <!-- gallery-wrap .end// -->
    </aside>
    <main class="col-lg-6">
      <div class="ps-lg-3">
        <h4 class="title text-dark">
          {{ product.productName }}
        </h4>
        <div class="d-flex flex-row my-3">
          <!-- <div class="text-warning mb-1 me-2">
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fas fa-star-half-alt"></i>
            <span class="ms-1"> 4.5 </span>
          </div>
          <span class="text-muted"
            ><i class="fas fa-shopping-basket fa-sm mx-1"></i>154 orders</span
          >
          <span class="text-success ms-2">In stock</span> -->
        </div>
  
        <!-- <div class="mb-3">
          <span style="color: red; font-size: 28px" class="h5">
            {{
              product.price ? formatPriceVND(product.price) : "Loading..."
            }}</span
          >
        </div> -->
  
        <p>
          {{ product.productDes }}
        </p>
  
        <div class="row">
          <dt class="col-3">Nhà xuất bản:</dt>
          <dd class="col-9">{{ product.trademark }}</dd>
  
          <dt class="col-3">Đơn vị phát hành:</dt>
          <dd class="col-9">{{ product.origin }}</dd>
        </div>
  
        <hr />
        <div class="row mb-2">
          <div class="col-md-4 col-6">
            <div class="row mt-4" style="margin-top: 32px !important">
              <!-- <a
                href="#"
                class="btn btn-dark shadow-0"
                @click="addToCart(product)"
              >
                <i class="me-1 fa fa-shopping-basket"></i> Thêm vào giỏ hàng
              </a> -->
            </div>
          </div>
        </div>
      </div>
    </main>
  </template>
  <script>
  import { useCartStore } from "@/stores/cart";
  export default {
    props: {
      product: {
        type: Object,
        required: true,
      },
      formatPriceVND: {
        type: Function,
        required: true,
      },
    },
    setup(props) {
      const cart = useCartStore();
  
      const addToCart = (product) => {
        cart.addProduct({ ...product, quantity: 1 }); // Thêm sản phẩm với số lượng là 1
        alert("Thêm sản phẩm vào giỏ hàng thành công!");
      };
  
      return {
        addToCart,
      };
    },
  };
  </script>
  
  <style>
  .icon-hover:hover {
    border-color: #3b71ca !important;
    background-color: white !important;
    color: #3b71ca !important;
  }
  
  .icon-hover:hover i {
    color: #3b71ca !important;
  }
  </style>