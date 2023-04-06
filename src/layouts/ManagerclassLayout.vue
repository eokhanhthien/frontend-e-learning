<template>
    <div class="Content br-custom">
      <div class="container-xl pt-4 pb-4">
              <div class="row ">
                  <div class="col-xl-3 ">
                      <div class=" br-custom-item fixed-height">
                      <div class="tag-custom"><router-link class="link-custom" to="/manager-class"> Lớp học</router-link></div>
                      <div class="tag-custom"><router-link class="link-custom" to="create-class"> Tạo lớp học</router-link></div>
                      <div class="tag-custom"><router-link class="link-custom" to="/"> Thay đổi mật khẩu</router-link></div>

                      </div>
                  </div>
                  <div class="col-xl-9 ">
                     <slot></slot>
                  </div>
              </div>
      </div>
    </div>
</template>