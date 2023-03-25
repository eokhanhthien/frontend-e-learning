<template>
    <div class="content">
        <div class="animated fadeIn">
            <button class="btn-add btn btn-primary "> <router-link to="/language">Trở lại</router-link> </button>

            <div class="row">
                <div class="col-lg-12">
                    <div class="card">
                        <div class="card-header">
                            <strong class="card-title">Tạo tài khoản cho giảng viên</strong>
                        </div> 
                        <div class="card-body">

                            <div id="pay-invoice">
                                <div class="card-body">
                                    <hr>
                                    <div class="form-group">
                                        <label for="cc-payment" class="control-label mb-1">Họ và tên</label>
                                        <input v-model="username" type="text" class="form-control" placeholder="ex.Nguyễn Văn A" >
                                        <p class="message-validate">{{ errors.username }}</p>
                                    </div>
                                    <div class="form-group">
                                        <label for="cc-payment" class="control-label mb-1">Email</label>
                                        <input v-model="email" type="text" class="form-control" placeholder="vanA@gmail.com" >
                                        <p class="message-validate">{{ errors.email }}</p>
                                    </div>
                                    <div class="form-group">
                                        <label for="cc-payment" class="control-label mb-1">Mật khẩu</label>
                                        <input v-model="password" type="password" class="form-control" placeholder="" >
                                        <p class="message-validate">{{ errors.password }}</p>
                                    </div>

                                    <div>
                                        <button @click="handleCreatUser" id="payment-button"
                                            class="btn btn-lg btn-info ">
                                            <span id="payment-button-amount">Tạo tài khoản</span>
                                        </button>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div> 

                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import languageApi from '@/api/languageApi';
import { ref ,inject} from 'vue';
import { useRouter } from 'vue-router'
import userApi from "@/api-frontend/userApi";
import { defineRule, useField, useForm } from "vee-validate";
import { required } from "@vee-validate/rules";

console.log(inject('axios'));
// const axios = inject('axios')    

const inputLanguage = ref('')

const router = useRouter()
const toast = inject('toast');


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
  role: '2',

})

// Validate------------------------------------------------------------------------
const { handleSubmit } = useForm();

function validateEmail(value) {
  const pattern = /^\S+@\S+\.\S+$/;
  if (!value) {
    return 'Email không được trống';
  }

  if ( !pattern.test(value)) {
    return 'Email không hợp lệ';
  }
  else{
    post.value.email = email.value;

  }
  return true;
}

function validateName(value) {

  if (!value) {
    return 'Tên không được trống';

  }
  else{
    post.value.name = username.value;
  }
  return true;
}

function validatePassword(value){
  if (!value) {
    return 'Mật khẩu không được trống';

  }

  if (value.length < 8) {
    return 'Mật khẩu phải dài hơn 8 kí tự';
  }

  else{
    post.value.password = password.value;
  }
  return true;
}

const { value: username, errorMessage: usernameError } = useField("username", validateName);
const { value: email, errorMessage: emailError } = useField("email", validateEmail);
const { value: password, errorMessage: passwordError } = useField("password", validatePassword);

const errors = { username: usernameError , email: emailError, password: passwordError};

// Validate------------------------------------------------------------------------

const handleCreatUser = handleSubmit(async () => {
  try {
    const res = await userApi.signup({ post: post.value })
    if (res) {
      post.value.name = '';
      post.value.email = '';
      post.value.password = '';
      toast.success('Tạo tài khoản thành công');
    }
  } catch (error) {
      toast.error('Email đã tồn tại');
    
  }
console.log("123123")

})
</script>

<style>

</style>