<template>
  <div class="flex min-h-screen items-center justify-center bg-gray-50">
    <!-- Wrapper (full screen, no border/shadow) -->
    <div class="flex w-full h-screen">
      
      <!-- Left Illustration -->
      <div 
        class=" lg:flex  bg-center transform -translate-x-[250px]  " 
        >
        <img
            src="@/assets/img1.svg"
            alt="About Us Illustration"
            class="contain w-[2500px]  h-[800px] -mt-44 "
          />
      </div>

      <!-- Right Form -->
      <div class="w-full lg: p-16 flex flex-col -ml-60 ">
        <h2 class="text-3xl font-bold mb-8">Login to Access Dashboard</h2>

        <form class="space-y-6" @submit.prevent="handleLogin">
          <!-- Email -->
          <div>
            <label for="email" class="block text-sm font-medium">Email <span class="text-red-500">*</span></label>
            <input
              id="email"
              type="email"
              required
              placeholder="Enter your email"
              class="mt-1 w-full rounded-md px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <!-- Password -->
          <div>
            <label for="password" class="block text-sm font-medium">Password <span class="text-red-500">*</span></label>
            <input
              id="password"
              type="password"
              required
              placeholder="Enter your password"
              class="mt-1 w-full rounded-md px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div class="text-right mt-2">
              <a href="#" class="text-red-500 text-xs font-medium hover:underline">Forgot Password?</a>
            </div>
          </div>

          <!-- Button -->
          <button
            type="submit"
            class="w-full flex items-center justify-center bg-blue-500 text-white px-4 py-3 rounded-md hover:bg-blue-600 transition"
          >
            Login »
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

// 👇 write it here in <script setup>
const handleLogin = () => {
  localStorage.setItem("auth", "true")
  router.push('/dashboard')   // ✅ redirect to dashboard
}
</script>
