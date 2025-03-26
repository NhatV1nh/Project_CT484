<template>
  <div class="form-container" style="background-image: url(https://th.bing.com/th/id/OIP.ggFzJR_5oVouGpl-C1tyHAHaFj?rs=1&pid=ImgDetMain);">
    <form @submit="submitSignIn">
      <h1 class="text-center mb-4" style="font-weight: 600">Đăng nhập</h1>
      <!-- Email input -->
      <div class="form-outline mb-4">
        <input
          type="text"
          name="username"
          id="form1Example1"
          class="form-control"
          placeholder="Vui lòng nhập username"
          v-model="dataSignIn.username"
        />
        <span class="text-danger">{{ usernameErrors }}</span>
      </div>

      <!-- Password input -->
      <div class="form-outline mb-4">
        <input
          type="password"
          name="password"
          id="form1Example2"
          class="form-control"
          placeholder="Vui lòng nhập mật khẩu"
          v-model="dataSignIn.password"
        />
        <span class="text-danger">{{ passwordErrors }}</span>
      </div>

      <!-- 2 column grid layout for inline styling -->

      <!-- Submit button -->
      <button type="submit" class="btn btn-primary btn-block">Đăng nhập</button>
    </form>
  </div>
</template>

<script>
import * as Yup from "yup";
import { ref, reactive } from "vue";

const schema = Yup.object().shape({
  username: Yup.string().required("Username không được để trống!"),
  password: Yup.string()
    .min(6, "Mật khẩu phải có ít nhất 6 ký tự")
    .matches(/[a-z]/, "Mật khẩu phải có ít nhất một chữ cái thường")
    .required("Mật khẩu không được để trống"),
});

export default {
  setup(props, context) {
    const dataSignIn = reactive({
      username: "",
      password: "",
    });

    const usernameErrors = ref("");
    const passwordErrors = ref("");

    const submitSignIn = (event) => {
      event.preventDefault();
      usernameErrors.value = null;
      passwordErrors.value = null;
      schema
        .validate(dataSignIn, { abortEarly: false })
        .then(() => {
          (usernameErrors.value = null),
            (passwordErrors.value = null),
            console.log(dataSignIn);
          context.emit("submit:signin", dataSignIn);
        })
        .catch((errors) => {
          errors.inner.forEach((error) => {
            if (error.path === "username") {
              usernameErrors.value = error.message;
            }
            if (error.path === "password") {
              passwordErrors.value = error.message;
            }
          });
        });
    };

    return {
      dataSignIn,
      usernameErrors,
      passwordErrors,
      submitSignIn,
    };
  },
};
</script>
<style scoped>
body {
  background-image: url("https://images5.alphacoders.com/423/thumb-1920-423529.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
}

.form-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Đảm bảo form nằm giữa màn hình dọc */
  text-align: center; /* Căn giữa nút button */
}

form {
  padding: 10px 30px;
  border-radius: 4px;
  background-color: white; /* Đặt màu nền của form là màu trắng */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); /* Thêm box-shadow cho form */
}

button {
  background-color: black !important;
  margin-top: 20px; /* Đặt khoảng cách từ nút button đến form */
}
</style>