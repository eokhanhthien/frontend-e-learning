<template>
    <div class="Content br-custom">
      <div class="container-xl pt-4 pb-4">
              <div class="row ">
                  <div class="col-xl-3 ">
                      <div class=" br-custom-item fixed-height">
                      <div><router-link class="link-custom" to="/info-user"> Thông tin & Liên hệ</router-link></div>
                      <div><router-link class="link-custom" to="/info-user-edit"> Thay đổi thông tin người dùng</router-link></div>
                      <div><router-link class="link-custom" to="/info-user-edit-pass"> Thay đổi mật khẩu</router-link></div>
                      </div>
                  </div>
                  <div class="col-xl-9 ">
                      <div class=" br-custom-item fixed-height">
                          <div class="title-info">
                              Thay đổi mật khẩu
                          </div>
                         
                          <form ref="form" @submit.prevent="submitForm" >
                             <div class="row g-0 mt-3">
                                <div class="col-12">
                                    <div class="row mt-3">
                                        <div class="col-4"><p>Mật khẩu hiện tại</p> </div>
                                        <div class="col-4"><input class="form-control" type="password" placeholder="Mật khẩu hiện tại" v-model="oldPassword"  > </div>
                                        <div class="col-4"><div class="message-validate">{{ errors.oldPassword }}</div></div>
                                    </div>
                                    <div class="row mt-3">
                                        <div class="col-4"><p>Mật khẩu mới</p> </div>
                                        <div class="col-4"><input class="form-control" type="password" placeholder="Mật khẩu mới" v-model="newPassword" >  </div>
                                        <div class="col-4"><div class="message-validate">{{ errors.newPassword }}</div></div>
                                    </div>
                                    <div class="row mt-3">
                                        <div class="col-4"><p>Nhập lại mật khẩu mới</p> </div>
                                        <div class="col-4"><input class="form-control" type="password" placeholder="Nhập lại mật khẩu mới" v-model="comfirmPassword" >  </div>
                                        <div class="col-4"><div class="message-validate">{{ errors.comfirmPassword }}</div></div>
                                    </div>
                                    
                                    <button class="btn btn-primary" type="submit" >Cập nhật</button>
                                </div>
                          </div>
                          </form>

                  </div>
              </div>
      </div>
    </div>
    </div>
</template>

<script setup>
import { onMounted , ref, inject} from "vue";
import { defineRule, useField, useForm } from "vee-validate";
import { required } from "@vee-validate/rules";
import userApi from '@/api-frontend/userApi';

const toast = inject('toast');

const infoUserLogin = ref({});

onMounted(()=>{
    infoUserLogin.value = JSON.parse(localStorage.getItem('user_nomal'))
    // comfirmPassword.value = '';
    console.log(infoUserLogin.value)
})

// Validate input-------------------------------------------------------
defineRule("required", required);

const { handleSubmit } = useForm();


function validateoldPass(value) {
  if (!value) {
    return 'Mật khẩu không được trống';
  }

//   else{
//     infoUserLogin.value.name = username.value;
//   }
  return true;
}

function validatenewPass(value) {
  if (!value) {
    return 'Mật khẩu không được trống';
  }

  if (value.length < 8) {
    return 'Mật khẩu phải dài hơn 8 kí tự';
  }


//   else{
//     infoUserLogin.value.name = username.value;
//   }
  return true;
}
function validatecomfirmPass(value) {
if (!value) {
    return 'Hãy nhập lại mật khẩu';
  }
  if (value != newPassword.value) {
    return 'Mật khẩu chưa khớp';
  }

  else{
    validatenewPass(newPassword.value)
  }
  return true;
}



const { value: oldPassword, errorMessage: oldPasswordError } = useField("oldPassword", validateoldPass);
const { value: newPassword, errorMessage: newPasswordError } = useField("newPassword", validatenewPass);
const { value: comfirmPassword, errorMessage: comfirmPasswordError } = useField("comfirmPassword", validatecomfirmPass);

const errors = { newPassword: newPasswordError, comfirmPassword: comfirmPasswordError,oldPassword: oldPasswordError };

const submitForm = handleSubmit( async ()=>{
    const post = {
        "idUser" : infoUserLogin.value._id,
        "old_password" : oldPassword.value,
        "new_password" : newPassword.value,
    }
    try {
      await userApi.changepassword({post}).then(() => {
         toast.success('Đổi mật khẩu thành công');
      })
    } catch (error) {
        toast.error('Mật khẩu hiện tại chưa đúng, hãy kiểm tra lại');
    }


    // console.log(post)
})
</script>

<style >

</style>