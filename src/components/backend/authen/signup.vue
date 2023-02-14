<template>
    <div class="form-admin">
        <div class="form-container">
        <h2>ĐĂNG KÝ</h2>
      
        <div class="row m-0 mt-5">
          <input v-model="post.name" class="col col-12 input-auth" type="text" placeholder="Họ và tên" > 
          <input v-model="post.email" class="col col-12 input-auth" type="text" placeholder="Email" > 
          <input v-model="post.password" class="col col-12 input-auth" type="password" placeholder="Mật khẩu"> 
        </div>
  
        <button class="btn-authen mt-2 mb-2">Signup</button>
        <p>Bạn đã có tài khoản <router-link to ="/login" id="tab-menu"> Đăng nhập ngay </router-link></p>
      </div>
    </div>
  </template>

<script setup>
import { ref } from "vue";
const post = ref({
    name: '',
    email : '',
    password : '',
    role : '1'
})

</script>

<style>


</style>