<template>
  <header class="Header">
    <div class="row">
      <div class="col col-10">
        <div class="row g-0">
          <div class="col col-1">
            <div class="logo-size">
              <img src="../../../assets/images/logo.png" alt="">
            </div>
          </div>
          <div class="col col-2">
            <div class="name-logo"><router-link to ="/">Đại Học Cần Thơ</router-link> </div>
          </div>
          <div class="col col-1">
            <p class="menu-tag-header"><router-link to ="learning">Khóa học</router-link> </p>
          </div>
          <div class="col col-1">
            <p class="menu-tag-header">Thi thử</p>
          </div>
          <div class="col col-1">
            <p class="menu-tag-header"><router-link to ="discussion">Trao đổi</router-link> </p>
          </div>
          <div class="col col-1">
            <p class="menu-tag-header">Đánh giá</p>
          </div>

          
        </div>
      </div>
      <div class="col col-2">
        <div class="row g-0">
          <div class="col col-6"><p class="menu-tag-header">Đăng nhập</p></div>
          <div class="col col-6"><button class="btn-sigup">Đăng ký</button></div>
          
          
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
name: 'Header'
}
</script>


<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Muli',sans-serif;
}

.Header{
  height: 70px;
  width: 100%;
  background-color: white;
  box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
  padding: 0 20px;
}
  .logo-size{
    width: 70px;
    height: 70px;
    margin: auto;
  }
  .logo-size img{
    width: 100%;
  }

.name-logo a{
    font-size: 22px;
    line-height: 70px;
    font-weight: 500;
    color: blue;
    text-decoration: none;

}
p.menu-tag-header {
    text-align: center;
    line-height: 70px;

}
button.btn-sigup {
    margin-top: 17px;
    padding: 4px 17px;
    border: 1px solid #ccc;
    background-color: blue;
    color: white;
    border-radius: 5px;
}
p.menu-tag-header a{
    font-size: 18px;
    color: #4c4c4c;
    cursor: pointer;
    text-decoration: none;
}

</style>