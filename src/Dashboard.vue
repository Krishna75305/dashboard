<template>
  <div class="flex min-h-screen bg-gray-50">
    <!-- Sidebar -->
    <aside class="hidden md:flex w-20 lg:w-64 bg-white shadow-md flex-col justify-between">
      <nav class="mt-6 space-y-6">
        <a href="#" class="flex items-center p-4 text-blue-500 font-semibold">
          <img src="@/assets/icons/db.svg" class="w-6 h-6 mr-2" />
          <span class="hidden lg:inline">Dashboard</span>
        </a>
        <a href="#" class="flex items-center p-4 text-gray-600 hover:text-blue-500">
          <img src="@/assets/icons/analytics.svg" class="w-6 h-6 mr-2" />
          <span class="hidden lg:inline">Analytics</span>
        </a>
        <a href="#" class="flex items-center p-4 text-gray-600 hover:text-blue-500">
          <img src="@/assets/icons/trading.svg" class="w-6 h-6 mr-2" />
          <span class="hidden lg:inline">Trading</span>
        </a>
        <a href="#" class="flex items-center p-4 text-gray-600 hover:text-blue-500">
          <img src="@/assets/icons/notifications.svg" class="w-6 h-6 mr-2" />
          <span class="hidden lg:inline">Notifications</span>
        </a>
      </nav>
      <div class="p-6">
        <a href="#" class="flex items-center text-gray-600 hover:text-red-500" @click="handleLogout">
          <img src="@/assets/icons/logout.svg" class="w-6 h-6 mr-2" />
          <span class="hidden lg:inline">Logout</span>
        </a>
      </div>
    </aside>

    <!-- Main Content -->
    <main class="flex-1 p-4 sm:p-6 lg:p-8">
      <!-- Header -->
      <div class="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-8 gap-4">
        <div>
          <h1 class="text-xl sm:text-2xl font-bold">Dashboard</h1>
          <p class="text-gray-500 text-sm sm:text-base">Welcome back, Andrew</p>
        </div>
        <div class="flex items-center space-x-4">
          <button class="bg-blue-500 text-white px-3 sm:px-4 py-2 rounded text-sm sm:text-base">+ Add Unit</button>
          <img src="@/assets/nouser.png" class="w-8 h-8 sm:w-10 sm:h-10 rounded-full border" />
        </div>
      </div>

      <!-- Balance / Profits / Losses -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div class="bg-white p-6 rounded shadow">
          <p class="text-gray-500">Balance</p>
          <h2 class="text-xl sm:text-2xl font-bold">$5900.00</h2>
        </div>
        <div class="bg-white p-6 rounded shadow">
          <p class="text-gray-500">Profits</p>
          <h2 class="text-xl sm:text-2xl font-bold text-green-500">$950.00 <span class="text-xs">+56%</span></h2>
        </div>
        <div class="bg-white p-6 rounded shadow">
          <p class="text-gray-500">Losses</p>
          <h2 class="text-xl sm:text-2xl font-bold text-red-500">$450.00 <span class="text-xs">-56%</span></h2>
        </div>
        <div class="bg-white p-6 rounded shadow">
          <h3 class="text-gray-500">Currencies</h3>
          <ul class="flex flex-wrap mt-2 gap-2">
            <li><img src="@/assets/dollar.svg" alt="USD" class="w-6 h-6 rounded-full" /></li>
            <li><img src="@/assets/euro.svg" alt="EUR" class="w-6 h-6 rounded-full" /></li>
            <li><img src="@/assets/bitcoin.svg" alt="BTC" class="w-6 h-6 rounded-full" /></li>
            <li><img src="@/assets/yen.svg" alt="JPY" class="w-6 h-6 rounded-full" /></li>
          </ul>
        </div>
      </div>

      <!-- Country Stats -->
      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
        <div v-for="(stat, i) in countryStats" :key="i" class="bg-white p-4 rounded shadow text-center">
          <p class="font-bold">{{ stat.country }}</p>
          <p :class="stat.value >= 200 ? 'text-green-500' : 'text-red-500'">{{ stat.value }}</p>
        </div>
      </div>

      <!-- Team & Comparison -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <!-- Team Members -->
        <div class="bg-white p-6 rounded shadow">
          <div class="flex justify-between mb-4">
            <h2 class="font-bold">Team Members</h2>
            <a href="#" class="text-blue-500 text-sm">View All</a>
          </div>
          <div v-for="(member, i) in teamMembers" :key="i" class="flex items-center justify-between py-2">
            <div class="flex items-center space-x-3">
              <img :src="member.image" class="w-8 h-8 rounded-full" />
              <span class="text-sm sm:text-base">{{ member.name }}</span>
            </div>
            <span class="text-xs bg-gray-100 px-2 py-1 rounded">{{ member.role }}</span>
          </div>
        </div>

        <!-- Comparison -->
        <div class="bg-white p-6 rounded shadow">
          <div class="flex justify-between mb-4">
            <h2 class="font-bold">Comparison</h2>
            <a href="#" class="text-blue-500 text-sm">View All</a>
          </div>
          <div v-for="(c, i) in comparisons" :key="i" class="mb-4">
            <div class="flex items-center justify-between mb-1">
              <div class="flex items-center space-x-2">
                <img :src="c.flag" class="w-5 h-5" />
                <span class="text-sm sm:text-base">{{ c.country }}</span>
              </div>
              <span class="text-sm">{{ c.percent }}%</span>
            </div>
            <div class="w-full bg-gray-200 rounded h-2">
              <div class="bg-blue-500 h-2 rounded" :style="{ width: c.percent + '%' }"></div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router"

const router = useRouter()

function handleLogout() {
  localStorage.removeItem("token")
  router.push("/")
}

const countryStats = [
  { country: "Italy", value: 475 },
  { country: "United States", value: 431 },
  { country: "Canada", value: 174 },
  { country: "Spain", value: 475 },
  { country: "Japan", value: 134 },
  { country: "South Africa", value: 471 },
]

const teamMembers = [
  { name: "Andrew Johnstons", role: "Top Trader", image: "./assets/nouser.png" },
  { name: "Anna Atkinsons", role: "Manager", image: "./assets/nouser.png" },
  { name: "Mark Atkinsons", role: "Manager", image: "./assets/nouser.png" },
  { name: "Johanna Tairons", role: "Manager", image: "./assets/nouser.png" },
]

const comparisons = [
  { country: "United States", percent: 93, flag: "./assets/flags/usa.svg" },
  { country: "Italy", percent: 73, flag: "./assets/flags/italy.svg" },
  { country: "Spain", percent: 13, flag: "./assets/flags/spain.svg" },
]
</script>
