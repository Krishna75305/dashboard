// src/stores/auth.js
import { defineStore } from "pinia"
import { ref } from "vue"

export const useAuthStore = defineStore("auth", () => {
  const isAuthenticated = ref(localStorage.getItem("auth") === "true")

  function login(email, password) {
    // 👉 Replace with your real validation or API later
    if (email === "test@example.com" && password === "123456") {
      isAuthenticated.value = true
      localStorage.setItem("auth", "true")
      return true
    }
    return false
  }

  function logout() {
    isAuthenticated.value = false
    localStorage.removeItem("auth")
  }

  return { isAuthenticated, login, logout }
})
