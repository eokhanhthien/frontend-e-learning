<template>
    <div class="form-admin">
        <div class="form-container">
        <h2>ĐĂNG NHẬP</h2>
      
        <div class="row m-0 mt-5">
          <input v-model="post.email"  class="col col-12 input-auth" type="text" placeholder="Tài khoản" > 
          <input v-model="post.password" class="col col-12 input-auth" type="password" placeholder="Mật khẩu"> 
        </div>
  
        <button class="btn-authen mt-2 mb-2" @click="handleLogin">Login</button>
        <p>Bạn chưa có tài khoản <router-link to ="/register" id="tab-menu"> Đăng ký ngay </router-link></p>
      </div>
    </div>
  </template>

<script setup>
import { ref ,inject} from "vue";
import userApi from '@/api/userApi';
import { useRouter  } from 'vue-router'
const post = ref({
  email: '',
  password : ''
})


const router = useRouter();
const toast = inject('toast');

async function handleLogin(){
  const user = await userApi.login({email: post.value.email , password : post.value.password })
  console.log(user);
  const token = user.data.token;
  const user_info = user.data.user;
  sessionStorage.setItem('token', token)
  sessionStorage.setItem('user', JSON.stringify(user_info))
  try {
      router.push({ path: '/language' }).then(() => { 
      toast.success('Đăng nhập thành công'); })
  } catch (error) {
    console.log(error);
  }


 
    // if(res){
    //     // window.history.back();
    //     router.push({ path: '/language' }).then(() => { 
    //     toast.success('Thêm ngôn ngữ thành công'); })
    // }   
}

</script>

<style>
  .form-admin {
    display: flex;
    height: 100vh;
    align-items: center;
    justify-content: center;
    /* background-color: #e2caff; */
  }

  .form-container {
    text-align: center;
    width: 390px;
  }

  input.input-auth {
    padding: 12px;
    margin: 8px 0px;
    border: 1px solid #ccc;
    border-radius: 4px;
    background-color: #ededed;
    width: 100%;
    box-sizing: border-box;
  }
  button.btn-authen {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    color: white;
    background-color: #827ffe;
    border-radius: 4px;
}
button.btn-authen:hover{
    background-color: #615ffc;

}
</style>