<template>
    <div id="layoutSidenav_content">
      <main>
        <div class="container-fluid px-4">
          <h2 style="font-weight: 600" class="mt-4">Cập nhật sách</h2>
  
          <div class="card mb-4"></div>
          <div class="container-fluid">
            <form
              @submit.prevent="submitUpdateProduct"
              enctype="multipart/form-data"
            >
              <div class="row mb-4">
                <div class="col">
                  <div class="form-outline">
                    <label class="form-label" for="productName"
                      >Tên sách</label
                    >
                    <input
                      type="text"
                      id="productName"
                      v-model="currentProduct.productName"
                      class="form-control"
                      name="productName"
                    />
                    <div class="text-danger">
                      {{ productNameError }}
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="form-outline">
                    <label class="form-label" for="productDescription"
                      >Mô tả sách</label
                    >
                    <input
                      type="text"
                      id="productDescription"
                      v-model="currentProduct.productDes"
                      class="form-control"
                      name="productDes"
                    />
                    <div class="text-danger">
                      {{ productDesError }}
                    </div>
                  </div>
                </div>
              </div>
              <div class="row mb-4">
                <div class="col">
                  <div class="form-outline">
                    <label class="form-label" for="productCategory"
                      >Danh mục sách</label
                    >
  
                    <select
                      :key="currentProduct.categoryId"
                      id="productCategory"
                      v-model="currentProduct.categoryId"
                      class="form-select"
                      name="categoryId"
                    >
                      <option disabled value="">
                        Vui lòng chọn một danh mục
                      </option>
                      <option
                        v-for="category in categories"
                        :key="category._id"
                        :value="category._id"
                        :selected="category._id === currentProduct.categoryId"
                      >
                        {{ category.categoryName }}
                      </option>
                    </select>
  
                    <div class="text-danger">{{ categoryIdError }}</div>
                  </div>
                </div>
                <div class="col">
                  <div class="form-outline">
                    <label class="form-label" for="productImage"
                      >Hình ảnh sách</label
                    >
                    <input
                      type="file"
                      name="productImg"
                      @change="handleImageUpdate"
                      class="form-control"
                      multiple
                    />
                    <div class="text-danger"></div>
                  </div>
                </div>
              </div>
              <div class="row mb-4">
                <div class="col">
                  <div class="form-outline">
                    <label class="form-label" for="productPrice">Số lượng</label>
                    <input
                      type="text"
                      id="productPrice"
                      v-model="currentProduct.price"
                      class="form-control"
                      name="price"
                    />
                    <div class="text-danger"></div>
                  </div>
                </div>
                <div class="col">
                  <div class="form-outline">
                    <label class="form-label" for="productBrand"
                      >Nhà xuất bản</label
                    >
                    <input
                      type="text"
                      id="productBrand"
                      v-model="currentProduct.trademark"
                      class="form-control"
                      name="trademark"
                    />
                    <div class="text-danger">{{ trademarkError }}</div>
                  </div>
                </div>
              </div>
              <div class="row mb-4">
                <div class="col">
                  <div class="form-outline">
                    <label class="form-label" for="productOrigin">Đơn vị phát hành</label>
                    <input
                      type="text"
                      id="productOrigin"
                      v-model="currentProduct.origin"
                      class="form-control"
                      name="origin"
                    />
                    <div class="text-danger">{{ originError }}</div>
                  </div>
                </div>
                <div class="col"></div>
              </div>
              <!-- Submit button -->
              <button type="submit" class="btn btn-dark btn-block mb-4">
                Cập nhật
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  </template>
  
  <script>
  import { ref, toRefs, computed } from "vue";
  import * as yup from "yup";
  // Định nghĩa schema validation
  const schema = yup.object().shape({
    productName: yup.string().required("Tên sản phẩm không được để trống"),
    productDes: yup.string().required("Mô tả sản phẩm không được để trống"),
    categoryId: yup.string().required("Danh mục sản phẩm không được để trống"),
    price: yup.number().typeError("Giá sản phẩm không được để trống").nullable(),
    trademark: yup.string().required("Thương hiệu không được để trống"),
    origin: yup.string().required("Xuất xứ không được để trống"),
  });
  
  export default {
    props: {
      currentProduct: Object,
      categories: {
        type: Array,
        default: () => [],
      },
    },
  
    setup(props, { emit }) {
      // console.log("Current Product: ", currentProduct);
      const { currentProduct } = toRefs(props);
      const productNameError = ref("");
      const productDesError = ref("");
      const categoryIdError = ref("");
      const priceError = ref("");
      const trademarkError = ref("");
      const originError = ref("");
      const handleImageUpdate = (event) => {
        const imageFiles = event.target.files; // Lấy danh sách tệp hình ảnh đã chọn
  
        if (imageFiles && imageFiles.length > 0) {
          currentProduct._object.currentProduct.productImg =
            Array.from(imageFiles); // Chuyển đổi FileList thành mảng
        } else {
        }
      };
      const submitUpdateProduct = (event) => {
        event.preventDefault();
        productNameError.value = null;
        productDesError.value = null;
        categoryIdError.value = null;
        priceError.value = null;
        trademarkError.value = null;
        originError.value = null;
  
        schema
          .validate(currentProduct.value, { abortEarly: false })
          .then(() => {
            // Nếu không có lỗi, emit sự kiện updateProduct
            console.log("Super: ", currentProduct._object.currentProduct);
            emit("updateProduct", currentProduct.value);
          })
          .catch((errors) => {
            // Xử lý các lỗi validation
            errors.inner.forEach((error) => {
              if (error.path === "productName")
                productNameError.value = error.message;
              if (error.path === "productDes")
                productDesError.value = error.message;
              if (error.path === "categoryId")
                categoryIdError.value = error.message;
              if (error.path === "price") priceError.value = error.message;
              if (error.path === "trademark")
                trademarkError.value = error.message;
              if (error.path === "origin") originError.value = error.message;
            });
          });
  
        // console.log(currentProduct);
        // emit("updateProduct", currentProduct.value);
      };
  
      return {
        currentProduct,
        productNameError,
        productDesError,
        categoryIdError,
        priceError,
        trademarkError,
        originError,
        handleImageUpdate,
        submitUpdateProduct,
      };
    },
  };
  </script>