<template>
  <header class="Header">
    <div class="container-xl">
    <div class="row">
      <div class="col col-9">
        <div class="row g-0 ">
          <div class="col-4">
            <div class="row">
              <div class="col col-3">
                <div class="logo-size">
                  <img src="../../../assets/images/logo.png" alt="">
                </div>
              </div>
              <div class="col col-9">
                <div class="name-logo"><router-link to="/">Đại Học Cần Thơ </router-link> </div>
              </div>
            </div>
          </div>
          <div class="col-8">
            <div class="row">
              <div class="col col-2 p-0">
                <p class="menu-tag-header"><router-link to="/learning">Khóa học</router-link> </p>
              </div>
              <div class="col col-2 p-0">
                <p class="menu-tag-header">Thi thử</p>
              </div>
              <div class="col col-2 p-0">
                <p class="menu-tag-header"><router-link to="/discussion">Trao đổi</router-link> </p>
              </div>
              <div class="col col-2 p-0">
                <p class="menu-tag-header">Đánh giá</p>
              </div>
            </div>
          </div>



        </div>
      </div>
      <div class="col-3">
        <div v-if="is_Login" class="row g-0 isloginsuccess">
          <div class="col-3 p-0">


          </div>
          <div class="col-2 p-0">
            <div v-if="infoUserLogin.image" class="size-avatar">
              <img :src="require('../../../assets/images/' + infoUserLogin.image)" alt="">
            </div>
            <div v-else class="size-avatar">
              <img :src="require('../../../assets/images/user-default.png')" alt="">
            </div>
          </div>
          <div class="col-2 drop_info"><i class="fa-solid fa-sort-down icon_drop_down"></i>
          <div class="dropdown_item">
            <p class="dropdown_item_border"><i class="fa-solid fa-user"></i> {{ infoUserLogin.name }}</p>
            <p class="dropdown_item_border"><span> <router-link to="/info-user"><i class="fa-solid fa-circle-info"></i> Thông tin cá nhân</router-link></span> </p>
            <p class="dropdown_item_border"><span><i class="fa-solid fa-clipboard-list"></i> Khóa học của bạn</span></p>
            <p class=""><span @click="handleLogout"><i class="fa-solid fa-arrow-right-from-bracket"></i> Đăng xuất</span> </p>
          </div>
          </div>

        </div>
        <div v-else class="row g-0">
          <div class="col col-6">
            <p class="menu-tag-header" @click="turnon"><span>Đăng nhập</span> </p>
          </div>
          <div class="col col-6"><button class="btn-signup" @click="turnon">Đăng ký</button></div>

        </div>
      </div>
    </div>
    </div>



    <div class="Model-item">
      <div class="row tab-menu g-0">
        <div class="col-6 border-right  btn-login active-tab" @click="changeTab">Đăng nhập</div>
        <div class="col-6 btn-signup_md " @click="changeTab_signup">Đăng ký</div>
      </div>
      <div class="Model-content">
        <div class="content-login active-model">
          <div>ĐĂNG NHẬP TÀI KHOẢN CỦA BẠN</div>
          <div class="row m-0 mt-5">
            <input v-model="infoUser.email" class="col col-12  input-auth" type="text" placeholder="Tài khoản">
            <input v-model="infoUser.password" class="col col-12  input-auth" type="password" placeholder="Mật khẩu">
          </div>
          <button class="btn-authen mt-2 mb-2 custom-br" @click="handleLogin">Login</button>
          <!-- <p>Bạn chưa có tài khoản <router-link to="/register" id="tab-menu"> Đăng ký ngay </router-link></p> -->
        </div>
        <div class="content-signup Model-container-off">
          <div>ĐĂNG KÝ TÀI KHOẢN MỚI</div>
          <div class="row m-0 mt-5">
            <input v-model="post.name" class="col col-12  input-auth" type="text" placeholder="Họ tên">
            <input v-model="post.email" class="col col-12  input-auth" type="text" placeholder="Email">
            <input v-model="post.password" class="col col-12  input-auth" type="password" placeholder="Mật khẩu">
          </div>
          <button class="btn-authen mt-2 mb-2 custom-br" @click="handleCreatUser">Signup</button>

        </div>
      </div>
    </div>
    <div class="Model-container" @click="turnoff">
    </div>

  </header>
</template>

<script setup>
import { onMounted, ref, inject ,computed,watch} from "vue";
import userApi from '@/api-frontend/userApi';
import { useRouter } from 'vue-router'
import {useStore} from "../../../Pinia/store.js"

const store = useStore();
// const {is_Login} = store;
const is_Login = computed(() => store.is_Login);


const post = ref({
  name: '',
  email: '',
  password: '',
  image: 'user-default.png',
  city:'Chưa cập nhật',
  district:'Chưa cập nhật',
  ward:'Chưa cập nhật',
  phonenumber:'Chưa cập nhật',
  birthday:'',
  sex:'Chưa cập nhật',
  role: '3',

})

const infoUser = ref({
  email: '',
  password: '',
})

const isLogin = ref(false);

const infoUserLogin = ref({});
// console.log(isLogin.value);
const content_signup_ref = ref();
const btn_login_ref = ref();
const content_login_ref = ref();
const btn_signup_ref = ref();
const Model_container = ref();
const Model_item = ref();

const header = ref();
onMounted(() => {
  const btn_login = document.querySelector(".btn-login")
  const content_login = document.querySelector(".content-login")
  const content_signup = document.querySelector(".content-signup")
  const btn_signup = document.querySelector(".btn-signup_md")
  Model_container.value = document.querySelector(".Model-container")
  Model_item.value = document.querySelector(".Model-item")
  header.value = document.querySelector(".Header")
  content_signup_ref.value = content_signup;
  btn_login_ref.value = btn_login;
  content_login_ref.value = content_login;
  btn_signup_ref.value = btn_signup;


  //hàm lưu token nên ở đây mới có dữ liệu
  if (localStorage.getItem('tokenUser')) {
    isLogin.value = true;
    infoUserLogin.value = JSON.parse(localStorage.getItem('user_nomal'))
    // console.log(infoUserLogin.value)
  } else {
    isLogin.value = false;
  }
  window.addEventListener('scroll', handleScroll);
});


function changeTab() {
  content_signup_ref.value.classList.remove('active-model')
  btn_signup_ref.value.classList.remove('active-tab')
  content_login_ref.value.classList.add('active-model')
  btn_login_ref.value.classList.add('active-tab')
}

function changeTab_signup() {
  content_signup_ref.value.classList.add('active-model')
  btn_signup_ref.value.classList.add('active-tab')
  content_login_ref.value.classList.remove('active-model')
  btn_login_ref.value.classList.remove('active-tab')
}

function turnoff() {
  Model_container.value.classList.remove('Model-container-active')
  Model_item.value.classList.remove('Model-active')
}
function turnon() {
  Model_container.value.classList.add('Model-container-active')
  Model_item.value.classList.add('Model-active')
}

const router = useRouter()
const toast = inject('toast');

async function handleCreatUser() {
  const res = await userApi.signup({ post: post.value })
  if (res) {
    post.value.name = '';
    post.value.email = '';
    post.value.password = '';
    Model_container.value.classList.remove('Model-container-active')
    Model_item.value.classList.remove('Model-active')
    toast.success('Đăng ký thành công thành công');
  }
}

async function handleLogin() {

  console.log(is_Login.value)

  try {
      
    const user = await userApi.login({ post: infoUser.value })
    // console.log(user);
    const token = user.data.token;
    const user_info = user.data.user;
    localStorage.setItem('tokenUser', token)
    localStorage.setItem('user_nomal', JSON.stringify(user_info))
    Model_container.value.classList.remove('Model-container-active')
    Model_item.value.classList.remove('Model-active')
    infoUserLogin.value = JSON.parse(localStorage.getItem('user_nomal'))
    store.onLogin(true)
    toast.success('Đăng nhập thành công thành công');
  } catch (error) {
    toast.error('Sai thông tin đăng nhập');
  }

}

function handleLogout() {
  infoUser.value.email = '';
  infoUser.value.password = '';
  localStorage.removeItem('tokenUser')
  localStorage.removeItem('user_nomal')
  store.onLogin(false)
  toast.success('Đăng xuất thành công thành công');
  // location.reload();
}


// const scrollDirection = ref('');

let prevScrollY = 0;
const handleScroll = () => {
  const currentScrollY = window.scrollY;
  if (currentScrollY > prevScrollY && currentScrollY > 70) {
    header.value.classList.add('active-header')
    // console.log('down');
    // console.log(prevScrollY);
  } else if (currentScrollY < prevScrollY) {
    header.value.classList.remove('active-header')
    // console.log('up');
  }
  prevScrollY = currentScrollY;
};


</script>


<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Muli', sans-serif;
}

.isloginsuccess {
  line-height: 70px;
  font-size: 18px;
  justify-content: end;
}

.size-avatar {
  text-align: center;
  width: 50px;
  height: 50px;
  border: 4px solid #ccc;
  line-height: 0;
  margin-top: 10px;
  border-radius: 50px;
  overflow: hidden;
}

.size-avatar img {
  width: 50px;
  height: 50px;
}

.btn-signup_md {
  background-color: #827ffe;
  font-size: 18px;
  color: #ffffff;
}

.btn-login {
  background-color: #827ffe;
  font-size: 18px;
  color: #ffffff;
}

.Model-container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  /* display: flex; */
  /* display: none; */
  visibility: hidden;
  z-index: 9999;

  transition: 0.3s;
}

.Model-container-active {
  visibility: visible !important;
  background-color: rgba(0, 0, 0, .5);
}

.Model-active {
  /* display: block !important; */
  visibility: visible !important;
  opacity: 1 !important;
  top: 460px !important;
}


.Model-item {
  position: absolute;
  top: 400px;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  height: 500px;
  background-color: white;
  /* border: 1px solid #ccc; */
  border-radius: 6px;
  box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
  overflow: hidden;
  z-index: 10000;
  /* display: none; */
  visibility: hidden;
  opacity: 0;

  transition: 0.3s;
}

.content-login {
  padding: 20px 10px;
  text-align: center;
  position: absolute;
  display: none;
  width: 100%
}

.content-signup {
  padding: 20px 10px;
  text-align: center;
  position: absolute;
  display: none;
  width: 100%
}

.active-model {
  display: block;
}

.active-tab {
  background-color: #ffffff;
  color: #827ffe;
}

.tab-menu {
  height: 50px;
  text-align: center;
  /* padding: 10px 0; */
  /* border-bottom: 1px solid #ccc; */
  line-height: 50px;
  cursor: pointer;
}

.border-right {
  border-right: 1px solid #ccc;
}

.Header {
  height: 70px;
  width: 100%;
  background-color: rgb(255, 255, 255);
  box-shadow: 0 1px 2px 0 rgba(0,0,0,.05);
  padding: 0 20px;
  position: fixed;
  top: 0;
  z-index: 1000;
  transition: 0.4s;
}

.active-header{
  top: -70px;
}
.hidden-header{
  position: fixed;
  top: -70px;
}


.logo-size {
  width: 70px;
  height: 70px;
  margin: auto;
}

.logo-size img {
  width: 100%;
}

.name-logo a {
  font-size: 24px;
  line-height: 70px;
  font-weight: 700;
  color: blue;
  text-decoration: none !important;

}

p.menu-tag-header {
  text-align: center;
  line-height: 70px;
  font-weight: 600;
}

button.btn-signup {
  margin-top: 17px;
  padding: 4px 17px;
  border: 1px solid #ccc;
  background-color: blue;
  color: white;
  border-radius: 5px;
}

p.menu-tag-header a {
  font-size: 18px;
  color: #4c4c4c;
  cursor: pointer;
  text-decoration: none;
  transition: 0.3s;
}

.menu-tag-header {
  position: relative;
}

.menu-tag-header::before {
  content: "";
  height: 4px;
  width: 0%;
  background-color: blue;
  display: inherit;
  position: absolute;
  border-radius: 4px;
  bottom: 0;
  transition: 0.3s;
}

.menu-tag-header:hover.menu-tag-header::before {
  width: 100%;
}

.menu-tag-header:hover a {
  color: blue;
}

.menu-tag-header span {
  cursor: pointer;
}

.menu-tag-header:hover span {
  color: blue;

}

a.vue-school-active-link.router-link-exact-active {
  color: blue;
}

.custom-br {
  background: linear-gradient(270deg, #8f73f0 0%, #5095ff 100%);
}
.icon_drop_down{
  cursor: pointer;
}

.drop_info{
  position: relative;
}
.drop_info:hover .dropdown_item{
    visibility: visible;
    opacity: 1;

}
.dropdown_item {
    position: absolute;
    width: 180px;
    background-color: #ffffff;
    right: 40%;
    padding: 10px 10px 0 10px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    border-top-left-radius: 6px;
    border-bottom-right-radius: 6px;
    border-bottom-left-radius: 6px;
    bottom: -213%;
    visibility: hidden;
    opacity: 0;
    transition: 0.3s;
    bottom: -190px;
}

.dropdown_item:before {
    content: "";
    position: absolute;
    width: 0px;
    height: 0px;
    border-left: 26px solid transparent;
    border-right: 0px solid transparent;
    border-bottom: 12px solid #ffffff;
    top: -11px;
    right: 0px;
}
.dropdown_item p{
    cursor: pointer;
    line-height: 43px;
    height: 43px;
    margin: 0;
}
.dropdown_item_border{
  border-bottom:1px solid #ccc ;
}

.dropdown_item p:hover span{
  color: #5095ff;
}

.dropdown_item p:hover a{
  text-decoration: none;
}

body::-webkit-scrollbar-track
{
	-webkit-box-shadow: inset 0 0 4px rgba(0,0,0,0.3);
	background-color: #ffffff;
}

body::-webkit-scrollbar
{
	width: 6px;
	background-color: #ffffff;
}

body::-webkit-scrollbar-thumb
{
	background-color: #4548f8;
	border: 2px solid #7b91f1;
}


.dropdown_item a{
  text-decoration: none;
}
</style>