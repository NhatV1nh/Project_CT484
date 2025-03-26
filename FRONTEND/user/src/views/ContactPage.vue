<template>
    <div class="page">
      <section class="contact" id="contact">
        <div class="container">
          <div class="heading text-center">
            <h2>Liên hệ</h2>
            <p></p>
          </div>
          <div class="row">
            <div class="col-md-5">
              <div class="title">
                <h3>Chi tiết liên hệ</h3>
              </div>
              <div class="content">
                <!-- Info-1 -->
                <div class="info">
                  <i class="fas fa-mobile-alt"></i>
                  <h4 class="d-inline-block">
                    Số điện thoại :
                    <br />
                    <span>+84 942474202</span>
                  </h4>
                </div>
                <!-- Info-2 -->
                <div class="info">
                  <i class="far fa-envelope"></i>
                  <h4 class="d-inline-block">
                    Email :
                    <br />
                    <span>vinhb2014632@student.ctu.edu.vn</span>
                  </h4>
                </div>
                <!-- Info-3 -->
                <div class="info">
                  <i class="fas fa-map-marker-alt"></i>
                  <h4 class="d-inline-block">
                    Địa chỉ :<br />
                    <span>3/2 Xuân Khánh - Ninh Kiều - Cần Thơ</span>
                  </h4>
                </div>
              </div>
            </div>
  
            <div class="col-md-7">
              <form>
                <div class="row">
                  <div class="col-sm-6">
                    <input type="text" class="form-control" placeholder="Tên" />
                  </div>
                  <div class="col-sm-6">
                    <input type="email" class="form-control" placeholder="Email" />
                  </div>
                  <div class="col-sm-12">
                    <input type="text" class="form-control" placeholder="Nội dung" />
                  </div>
                </div>
                <div class="form-group">
                  <textarea class="form-control" rows="5" id="comment" placeholder="Thông điệp"></textarea>
                </div>
                <button class="btn btn-block" type="submit">Gửi ngay</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  </template>
  <style>
  .contact {
    padding: 20px 0;
  }
  
  .contact .heading h2 {
    font-size: 30px;
    font-weight: 700;
    margin: 0;
    padding: 0;
  }
  
  .contact .heading h2 span {
    color: #ff9100;
  }
  
  .contact .heading p {
    font-size: 15px;
    font-weight: 400;
    line-height: 1.7;
    color: #999999;
    margin: 20px 0 60px;
    padding: 0;
  }
  
  .contact .form-control {
    padding: 25px;
    font-size: 13px;
    margin-bottom: 10px;
    background: #f9f9f9;
    border: 0;
    border-radius: 10px;
  }
  
  .contact button.btn {
    padding: 10px;
    border-radius: 10px;
    font-size: 15px;
    background: #ff9100;
    color: #ffffff;
  }
  
  .contact .title h3 {
    font-size: 18px;
    font-weight: 600;
  }
  
  .contact .title p {
    font-size: 14px;
    font-weight: 400;
    color: #999;
    line-height: 1.6;
    margin: 0 0 40px;
  }
  
  .contact .content .info {
    margin-top: 30px;
  }
  
  .contact .content .info i {
    font-size: 30px;
    padding: 0;
    margin: 0;
    color: #02434b;
    margin-right: 20px;
    text-align: center;
    width: 20px;
  }
  
  .contact .content .info h4 {
    font-size: 13px;
    line-height: 1.4;
  }
  
  .contact .content .info h4 span {
    font-size: 13px;
    font-weight: 300;
    color: #999999;
  }
  </style>