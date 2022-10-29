import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({logged_in: false, employee: false}),
  actions: {
    login(){
      this.logged_in = true
    },
    employee_login(){
      this.employee = true
    },
    logout(){
      this.logged_in = false
      this.employee = false
    } 
  }
})
