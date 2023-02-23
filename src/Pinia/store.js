import { defineStore } from 'pinia'

export const useStore = defineStore('storeId', {
  // arrow function recommended for full type inference
  state: () => ({
    is_Login: false,
  }),

  actions: {
    onLogin(data) {
      this.is_Login = data;
      console.log(this.is_Login)
    }
  },
  persist: {
    storage: sessionStorage, // data in sessionStorage is cleared when the page session ends.
  },
})


// Bước 1: cài pinia -> cấu hình main.js, store.js , component
// Bước 2: pinia-plugin-persistedstate -> persist:{ storage: sessionStorage,}