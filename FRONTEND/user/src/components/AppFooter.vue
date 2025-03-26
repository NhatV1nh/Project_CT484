<template>
  <!-- Footer -->
  <footer class="text-center text-lg-start bg-light text-muted">
    <!-- Section: Social media -->
    <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
      <!-- Left -->
    </section>
    <!-- Section: Social media -->

    <!-- Section: Links  -->
    <section class="">
      <div class="container text-center text-md-start mt-5">
        <!-- Grid row -->
        <div class="row mt-3">
          <!-- Grid column -->
          <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            <!-- Content -->
            <h6 class="text-uppercase fw-bold mb-4">
              <i class="fas fa-bookmark me-3"></i>Thư viện của tôi
            </h6>
            <p>
              Đáp ứng nhu cầu đọc cho người dùng với nguồn tài liệu phong phú và đa dạng.
            </p>
          </div>
          <!-- Grid column -->

          <!-- Grid column -->
          <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            <!-- Links -->
            <router-link :to="{ name: 'product' }" class="router-css">
              <h6 class="text-uppercase fw-bold mb-4">
                <i class="fas fa-book"></i> Sách
              </h6>
            </router-link>
            <p>
              Được cập nhật mới liên tục
            </p>
          </div>
          <!-- Grid column -->

          <!-- Grid column -->
          <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            <!-- Links -->
            <router-link :to="{ name: 'introduce' }" class="router-css">
              <h6 class="text-uppercase fw-bold mb-4">
                <i class="fas fa-info"></i> Giới thiệu
              </h6>
            </router-link>
            <p>
              Là nơi được cho là lý tưởng để đọc hoặc mượn - trả sách trong khu vực
            </p>
          </div>
          <!-- Grid column -->

          <!-- Grid column -->
          <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            <!-- Links -->
            <router-link :to="{ name: 'contact' }" class="router-css">
              <h6 class="text-uppercase fw-bold mb-4">
                <i class="fas fa-address-card"></i> Liên hệ
              </h6>
            </router-link>
            <p>
              <i class="fas fa-home me-3"></i>3/2 Xuân Khánh - Ninh Kiều - Cần Thơ
            </p>
            <p>
              <i class="fas fa-inbox me-3"></i>
              vinhb2014632@student.ctu.edu.vn
            </p>
            <p><i class="fas fa-phone me-3"></i> +84 942474202</p>
            <!-- <p><i class="fas fa-print me-3"></i> +84 976146523</p> -->
          </div>
          <!-- Grid column -->
        </div>
        <!-- Grid row -->
      </div>
    </section>
    <!-- Section: Links  -->
  </footer>
  <!-- Footer -->
</template>

<style>
.router-css {
  color: #6c757d;
}
</style>