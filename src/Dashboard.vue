<template>
  <div class="flex min-h-screen bg-gray-50">
    <!-- Sidebar -->
    <aside class="hidden md:flex w-20 lg:w-64 bg-white shadow-md flex-col justify-between">
      <nav class="mt-6 space-y-6">
        <a href="#" class="flex items-center p-4 text-blue-500 font-semibold">
          <img src="/assets/icons/dashboard.svg" class="w-6 h-6 mr-2" alt="Dashboard" />
          <span class="hidden lg:inline">Dashboard</span>
        </a>
        <a href="#" class="flex items-center p-4 text-gray-600 hover:text-blue-500">
          <img src="/assets/icons/analytics.svg" class="w-6 h-6 mr-2" alt="Analytics" />
          <span class="hidden lg:inline">Analytics</span>
        </a>
        <a href="#" class="flex items-center p-4 text-gray-600 hover:text-blue-500">
          <img src="/assets/icons/trading.svg" class="w-6 h-6 mr-2" alt="Trading" />
          <span class="hidden lg:inline">Trading</span>
        </a>
        <a href="#" class="flex items-center p-4 text-gray-600 hover:text-blue-500">
          <img src="/assets/icons/notifications.svg" class="w-6 h-6 mr-2" alt="Notifications" />
          <span class="hidden lg:inline">Notifications</span>
        </a>
      </nav>
      <div class="p-6">
        <a href="#" class="flex items-center text-gray-600 hover:text-red-500" @click="handleLogout">
          <img src="/assets/icons/logout.svg" class="w-6 h-6 mr-2" alt="Logout" />
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
          <img src="/assets/nouser.png" class="w-8 h-8 sm:w-10 sm:h-10 rounded-full border" alt="User" />
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
            <li><img src="/assets/dollar.svg" alt="USD" class="w-6 h-6 rounded-full" /></li>
            <li><img src="/assets/euro.svg" alt="EUR" class="w-6 h-6 rounded-full" /></li>
            <li><img src="/assets/bitcoin.svg" alt="BTC" class="w-6 h-6 rounded-full" /></li>
            <li><img src="/assets/yen.svg" alt="JPY" class="w-6 h-6 rounded-full" /></li>
          </ul>
        </div>
      </div>

      <!-- Country Stats -->
      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
        <div class="bg-white p-4 rounded shadow text-center">
          <p class="font-bold">Italy</p>
          <p class="text-green-500">475</p>
        </div>
        <div class="bg-white p-4 rounded shadow text-center">
          <p class="font-bold">United States</p>
          <p class="text-green-500">431</p>
        </div>
        <div class="bg-white p-4 rounded shadow text-center">
          <p class="font-bold">Canada</p>
          <p class="text-red-500">174</p>
        </div>
        <div class="bg-white p-4 rounded shadow text-center">
          <p class="font-bold">Spain</p>
          <p class="text-green-500">475</p>
        </div>
        <div class="bg-white p-4 rounded shadow text-center">
          <p class="font-bold">Japan</p>
          <p class="text-red-500">134</p>
        </div>
        <div class="bg-white p-4 rounded shadow text-center">
          <p class="font-bold">South Africa</p>
          <p class="text-green-500">471</p>
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
          <div class="flex items-center justify-between py-2">
            <div class="flex items-center space-x-3">
              <img src="/assets/nouser.png" class="w-8 h-8 rounded-full" alt="Andrew Johnstons" />
              <span class="text-sm sm:text-base">Andrew Johnstons</span>
            </div>
            <span class="text-xs bg-gray-100 px-2 py-1 rounded">Top Trader</span>
          </div>
          <div class="flex items-center justify-between py-2">
            <div class="flex items-center space-x-3">
              <img src="/assets/nouser.png" class="w-8 h-8 rounded-full" alt="Anna Atkinsons" />
              <span class="text-sm sm:text-base">Anna Atkinsons</span>
            </div>
            <span class="text-xs bg-gray-100 px-2 py-1 rounded">Manager</span>
          </div>
          <div class="flex items-center justify-between py-2">
            <div class="flex items-center space-x-3">
              <img src="/assets/nouser.png" class="w-8 h-8 rounded-full" alt="Mark Atkinsons" />
              <span class="text-sm sm:text-base">Mark Atkinsons</span>
            </div>
            <span class="text-xs bg-gray-100 px-2 py-1 rounded">Manager</span>
          </div>
          <div class="flex items-center justify-between py-2">
            <div class="flex items-center space-x-3">
              <img src="/assets/nouser.png" class="w-8 h-8 rounded-full" alt="Johanna Tairons" />
              <span class="text-sm sm:text-base">Johanna Tairons</span>
            </div>
            <span class="text-xs bg-gray-100 px-2 py-1 rounded">Manager</span>
          </div>
        </div>

        <!-- Comparison -->
        <div class="bg-white p-6 rounded shadow">
          <div class="flex justify-between mb-4">
            <h2 class="font-bold">Comparison</h2>
            <a href="#" class="text-blue-500 text-sm">View All</a>
          </div>

          <div class="mb-4">
            <div class="flex items-center justify-between mb-1">
              <div class="flex items-center space-x-2">
                <img src="/images/usa.svg" class="w-5 h-5" alt="USA" />
                <span class="text-sm sm:text-base">United States</span>
              </div>
              <span class="text-sm">93%</span>
            </div>
            <div class="w-full bg-gray-200 rounded h-2">
              <div class="bg-blue-500 h-2 rounded" style="width: 93%"></div>
            </div>
          </div>

          <div class="mb-4">
            <div class="flex items-center justify-between mb-1">
              <div class="flex items-center space-x-2">
                <img src="/images/italy.svg" class="w-5 h-5" alt="Italy" />
                <span class="text-sm sm:text-base">Italy</span>
              </div>
              <span class="text-sm">73%</span>
            </div>
            <div class="w-full bg-gray-200 rounded h-2">
              <div class="bg-blue-500 h-2 rounded" style="width: 73%"></div>
            </div>
          </div>

          <div class="mb-4">
            <div class="flex items-center justify-between mb-1">
              <div class="flex items-center space-x-2">
                <img src="/images/spain.svg" class="w-5 h-5" alt="Spain" />
                <span class="text-sm sm:text-base">Spain</span>
              </div>
              <span class="text-sm">13%</span>
            </div>
            <div class="w-full bg-gray-200 rounded h-2">
              <div class="bg-blue-500 h-2 rounded" style="width: 13%"></div>
            </div>
          </div>

        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

function handleLogout() {
  localStorage.removeItem("token");
  router.push("/");
}
</script>
