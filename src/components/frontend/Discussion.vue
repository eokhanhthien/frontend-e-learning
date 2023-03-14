<template>
  <form @submit.prevent="submitForm">
    <div>
      <label for="username">Username:</label>
      <input id="username" v-model.trim="username" type="text" />
      <span>{{ errors.username }}</span>
    </div>

    <div>
      <label for="password">Password:</label>
      <input id="password" v-model.trim="password" type="password" />
      <span>{{ errors.password }}</span>
    </div>

    <button type="submit">Submit</button>
  </form>
</template>

<script setup>
import { defineRule, useField, useForm } from "vee-validate";
import { required } from "@vee-validate/rules";

defineRule("required", required);

const { handleSubmit } = useForm();

function validateField(value) {
  if (!value) {
    return 'Không được trống';
  }

  if (value.length < 8) {
    return 'Mật khẩu phải dài hơn 8 kí tự';
  }

  return true;
}

const { value: username, errorMessage: usernameError } = useField("username", validateField);
const { value: password, errorMessage: passwordError } = useField("password", validateField);

const errors = { username: usernameError, password: passwordError };

const submitForm = handleSubmit(() => {
  alert("Submitted!");
});
</script>
