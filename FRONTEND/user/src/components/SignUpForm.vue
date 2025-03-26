<template>
    <section style="background-color: #eee">
      <div class="container h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-lg-12 col-xl-11">
            <div class="card text-black" style="border-radius: 25px">
              <div class="card-body p-md-3">
                <div class="row justify-content-center">
                  <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                      ĐĂNG KÝ
                    </p>
  
                    <form @submit="submitSignUp" class="mx-1 mx-md-4">
                      <div class="d-flex flex-row align-items-center mb-4">
                        <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                        <div class="form-outline flex-fill mb-0">
                          <input
                            type="text"
                            id="form3Example1c"
                            class="form-control"
                            name="name"
                            v-model="dataSignUp.name"
                            placeholder="Vui lòng nhập họ và tên"
                          />
                          <span class="text-danger">{{ nameErrors }}</span>
                        </div>
                      </div>
  
                      <div class="d-flex flex-row align-items-center mb-4">
                        <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                        <div class="form-outline flex-fill mb-0">
                          <input
                            type="email"
                            id="form3Example3c"
                            class="form-control"
                            name="email"
                            v-model="dataSignUp.email"
                            placeholder="Vui lòng nhập email"
                          />
                          <span class="text-danger">{{ emailErrors }}</span>
                        </div>
                      </div>
  
                      <div class="d-flex flex-row align-items-center mb-4">
                        <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                        <div class="form-outline flex-fill mb-0">
                          <input
                            type="password"
                            id="form3Example4c"
                            class="form-control"
                            name="password"
                            v-model="dataSignUp.password"
                            placeholder="Vui lòng nhập mật khẩu"
                          />
                          <span class="text-danger">{{ passwordErrors }}</span>
                        </div>
                      </div>
  
                      <div class="d-flex flex-row align-items-center mb-4">
                        <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                        <div class="form-outline flex-fill mb-0">
                          <input
                            type="password"
                            id="form3Example4cd"
                            class="form-control"
                            name="co-password"
                            v-model="dataSignUp.co_password"
                            placeholder="Vui lòng nhập lại mật khẩu"
                          />
                          <span class="text-danger">{{ copasswordErrors }}</span>
                        </div>
                      </div>
  
                      <div class="d-flex flex-row align-items-center mb-4">
                        <i class="fas fa-phone fa-lg me-3 fa-fw"></i>
                        <div class="form-outline flex-fill mb-0">
                          <input
                            type="text"
                            id="form3Example5cd"
                            class="form-control"
                            name="phone"
                            v-model="dataSignUp.phone"
                            placeholder="Vui lòng nhập số điện thoại"
                          />
                          <span class="text-danger">{{ phoneErrors }}</span>
                        </div>
                      </div>
  
                      <div class="d-flex flex-row align-items-center mb-4">
                        <i class="fas fa-address-card fa-lg me-3 fa-fw"></i>
                        <div class="form-outline flex-fill mb-0">
                          <input
                            type="text"
                            id="form3Example6cd"
                            class="form-control"
                            name="address"
                            v-model="dataSignUp.address"
                            placeholder="Vui lòng nhập địa chỉ"
                          />
                          <span class="text-danger">{{ addressErrors }}</span>
                        </div>
                      </div>
  
                      <div
                        class="d-flex justify-content-center mx-4 mb-3 mb-lg-4"
                      >
                        <button
                          type="submit"
                          class="btn btn-dark btn-lg no-ripple"
                        >
                          Đăng ký
                        </button>
                      </div>
                    </form>
                  </div>
                  <div
                    class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2"
                  >
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                      class="img-fluid"
                      alt="Sample image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  import * as Yup from "yup";
  import { ref, reactive } from "vue";
  
  const schema = Yup.object().shape({
    name: Yup.string().required("Họ và tên không được để trống"),
    email: Yup.string()
      .email("Email phải đúng định dạng")
      .required("Email không được để trống"),
    password: Yup.string()
      .min(6, "Mật khẩu phải có ít nhất 6 ký tự")
      .matches(/[a-z]/, "Mật khẩu phải có ý nhất một chữ cái thường")
      .required("Mật khẩu không được để trống"),
    co_password: Yup.string()
      .oneOf([Yup.ref("password")], "Mật khẩu nhập lại chưa khớp")
      .required("Mật khẩu nhập lại không được để trống"),
    phone: Yup.string().required("Số điện thoại không được để trống"),
    address: Yup.string().required("Địa chỉ không được để trống"),
  });
  
  export default {
    setup(props, context) {
      const dataSignUp = reactive({
        name: "",
        email: "",
        password: "",
        co_password: "",
        phone: "",
        address: "",
      });
  
      const nameErrors = ref(null);
      const emailErrors = ref(null);
      const passwordErrors = ref(null);
      const copasswordErrors = ref(null);
      const phoneErrors = ref(null);
      const addressErrors = ref(null);
  
      const submitSignUp = (event) => {
        event.preventDefault();
        nameErrors.value = null;
        emailErrors.value = null;
        passwordErrors.value = null;
        copasswordErrors.value = null;
        phoneErrors.value = null;
        addressErrors.value = null;
        schema
          .validate(dataSignUp, { abortEarly: false })
          .then(() => {
            nameErrors.value = null;
            emailErrors.value = null;
            passwordErrors.value = null;
            copasswordErrors.value = null;
            phoneErrors.value = null;
            addressErrors.value = null;
  
            // console.log(dataSignUp);
            delete dataSignUp.co_password;
  
            context.emit("submit:signup", dataSignUp);
          })
          .catch((errors) => {
            errors.inner.forEach((error) => {
              if (error.path === "name") {
                nameErrors.value = error.message;
              }
              if (error.path === "email") {
                emailErrors.value = error.message;
              }
              if (error.path === "password") {
                passwordErrors.value = error.message;
              }
              if (error.path === "co_password") {
                copasswordErrors.value = error.message;
              }
              if (error.path === "phone") {
                phoneErrors.value = error.message;
              }
              if (error.path === "address") {
                addressErrors.value = error.message;
              }
            });
          });
      };
  
      return {
        dataSignUp,
        nameErrors,
        emailErrors,
        passwordErrors,
        copasswordErrors,
        phoneErrors,
        addressErrors,
        submitSignUp,
      };
    },
  };
  </script>