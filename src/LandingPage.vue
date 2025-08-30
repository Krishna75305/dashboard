<template>
  <div
    class="min-h-screen text-white overflow-hidden"
    style="
      background: url('/assets/lp.svg') no-repeat center center/cover;
    "
  >
    <!-- Header / Navbar -->
    <header class="sticky top-10 z-4 bg-transparent">
      <nav class="mx-6 max-w-7xl px-4 sm:px-6 lg:px-28">
        <div class="flex h-16 items-center justify-between">
          <!-- Logo -->

          <span class="text-lg font-semibold tracking-wide">Logo</span>

          <!-- Desktop nav -->
          <div class="hidden md:flex items-center gap-8">
            <a class="hover:text-blue-400 transition-colors" href="#about"
              >About</a
            >
            <a class="hover:text-blue-400 transition-colors" href="#services"
              >Services</a
            >
            <a
              class="hover:text-blue-400 transition-colors"
              href="#case-studies"
              >Case Studies</a
            >
            <a
              class="hover:text-blue-400 transition-colors"
              href="#testimonials"
              >Testimonials</a
            >
            <a class="hover:text-blue-400 transition-colors" href="#contact"
              >Contact</a
            >
            <button
              @click="$router.push('/login')"
              class="bg-white hover:bg-gray-300 text-black px-6 py-1 rounded-sm transition"
            >
              Login
            </button>
          </div>

          <!-- Mobile menu button -->
          <button
            type="button"
            class="md:hidden inline-flex items-center justify-center rounded-xl p-2"
            @click="mobileOpen = !mobileOpen"
            aria-label="Toggle menu"
          >
            <svg
              v-if="!mobileOpen"
              class="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
              fill="none"
            >
              <path stroke-linecap="round" d="M4 7h16M4 12h16M4 17h16" />
            </svg>
            <svg
              v-else
              class="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
              fill="none"
            >
              <path stroke-linecap="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <!-- Mobile nav -->
        <div v-show="mobileOpen" class="md:hidden grid gap-2 pb-4">
          <a
            class="hover:text-blue-400 transition-colors"
            href="#about"
            @click="closeMobile"
            >About</a
          >
          <a
            class="hover:text-blue-400 transition-colors"
            href="#services"
            @click="closeMobile"
            >Services</a
          >
          <a
            class="hover:text-blue-400 transition-colors"
            href="#case-studies"
            @click="closeMobile"
            >Case Studies</a
          >
          <a
            class="hover:text-blue-400 transition-colors"
            href="#testimonials"
            @click="closeMobile"
            >Testimonials</a
          >
          <a
            class="hover:text-blue-400 transition-colors"
            href="#contact"
            @click="closeMobile"
            >Contact</a
          >
          <button
            class="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-xl mt-2 transition"
            @click="closeMobile"
          >
            Login
          </button>
        </div>
      </nav>
    </header>
    
    <!-- Hero Section -->
    <main>
      <section
        class="mx-20 my-24 grid max-w-7xl items-center gap-10 px-4 py-5 sm:py-20 md:grid-cols-2 md:gap-12 lg:py-24 lg:my-24"
      >
        <!-- Text -->
        <div class="space-y-8">
          <h1 class="text-4xl sm:text-5xl lg:text-4xl font-bold leading-tight">
            Lorem Ipsum is simply dummy text of the printing and typesetting.
          </h1>
          <p class="text-lg text-gray-300">
            Our products are fully custom-made, built with the latest
            technologies and cloud-architectures.
          </p>
          <div class="pt-2">
            <a
              href="#get-started"
              class="inline-block bg-white hover:bg-gray-300 text-black px-8 py-3 rounded-full font-semibold transition"
              @click="$router.push('/login')"
            >
              Get Started »
            </a>
          </div>
        </div>
      </section>
    </main>
  </div>
  <div>
  <section class="relative overflow-hidden">
    <div class="flex flex-col lg:flex-row items-center">
      <!-- About Us Illustration (Left Half) -->
      <div class="relative transform -translate-x-0 lg:-translate-x-[400px] mb-6 lg:mb-0">
        <img
          src="@/assets/img1.svg"
          alt="About Us Illustration"
          class="w-72 sm:w-96 md:w-[600px] lg:w-[1000px] max-w-none h-auto mx-auto"
        />
      </div>

      <!-- Right Content (Right Half) -->
      <div
        class="w-full text-center lg:text-left transform -translate-x-0 lg:-translate-x-[350px]"
      >
        <!-- Label -->
        <div
          class="flex items-center justify-center lg:justify-start mb-4 "
        >
          <img
            src="@/assets/triangle.svg"
            alt="triangle"
            class="w-6 sm:w-8 h-6 sm:h-8"
          />
          <p class="text-blue-600 font-medium uppercase ">
            About Us
          </p>
        </div>

        <!-- Title -->
        <h2 class="text-xl sm:text-2xl md:text-3xl font-bold w-96 text-gray-900 mb-4">
          Great Digital Agency
        </h2>

        <!-- Description -->
        <p
          class="text-gray-600 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto lg:mx-0 mb-4 px-4 lg:px-0 "
        >
         <span class="font-medium"> Our products are fully custom-made, built with the latest
          technologies and cloud-architectures.</span> <br /><br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ex
          odio, turpis accumsan congue. Quisque blandit dui Pellentesque
          habitant morbi tristique senectus et netus et malesuada fames ac
          turpis egestas.
        </p>

        <!-- CTA Button -->
        <a
          href="#"
          class="inline-block px-6 py-3 text-blue-600 border border-blue-600 rounded-full font-medium hover:bg-blue-600 hover:text-white transition"
        >
          Get Started
        </a>
      </div>
    </div>

    <!-- Decorative Shapes -->
    <img
      src="@/assets/triangles.svg"
      alt="triangle"
      class="absolute top-6 right-4 sm:top-10 sm:-right-10 w-24 sm:w-40 lg:w-80"
    />
    <img
      src="@/assets/dots.svg"
      alt="dots"
      class="absolute bottom-4 right-4 sm:bottom-10 sm:right-10 lg:translate-x-[150px] w-32 sm:w-48 lg:w-80"
    />
  </section>
</div>


  <section class="w-full bg-white py-16 px-6 md:px-16 lg:px-24">
    <div class="grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
      <!-- Left Section -->
      <div>
        <img
          src="@/assets/triangle.svg"
          alt="triangle"
          class="absolute w-1/8 h-6"
        />
        <p
          class="text-blue-600 ml-7 font-semibold flex items-center gap-2 uppercase"
        >
          Our Services
        </p>
        <h2 class="text-3xl md:text-4xl font-extrabold mt-3 leading-snug">
          Transforming your ideas <br />
          into Reality
        </h2>

        <!-- Service Buttons -->
        <div class="flex flex-wrap gap-3 mt-6">
          <span
            class="px-4 py-2 rounded-lg bg-blue-100 text-blue-600 font-medium"
            >Web Development</span
          >
          <span
            class="px-4 py-2 rounded-lg bg-blue-100 text-blue-600 font-medium"
            >Mobile Development</span
          >
          <span class="px-4 py-2 rounded-lg bg-blue-600 text-white font-medium"
            >UI/UX Designing</span
          >
          <span
            class="px-4 py-2 rounded-lg bg-blue-100 text-blue-600 font-medium"
            >Branding</span
          >
          <span
            class="px-4 py-2 rounded-lg bg-blue-100 text-blue-600 font-medium"
            >Cloud Technology</span
          >
        </div>
      </div>

      <!-- Right Section -->
      <div class="relative flex justify-center items-center">
        <!-- Blue Background covering right half -->
        <div class="absolute inset-0 flex justify-end">
          <div class="bg-blue-600 w-1/2 h-full rounded-2xl"></div>
        </div>

        <!-- White Card -->
        <div class="relative z-10 bg-white shadow-xl rounded-2xl p-8 max-w-md">
          <div class="flex items-center gap-3 mb-5">
            <img
              src="@/assets/ux.svg"
              alt="UI/UX"
              class="w-12 h-12 object-contain"
            />
            <h3 class="text-2xl font-bold">UI/UX Designing</h3>
          </div>
          <p class="text-gray-600 text-sm leading-relaxed mb-4">
            Lorem ipsum dolor sit amet, conse ctetur adipi scing elit. Aliq uam
            ex odio, is the turpis accu msan congue euisque blandit dui Pelle
            ntesque habitant.
          </p>

          <!-- Bullet Points -->
          <ul class="space-y-3">
            <li class="flex items-start gap-2">
              <img
                src="@/assets/Group 35604.svg"
                alt="bullet"
                class="w-4 h-4 mt-1"
              />
              <p class="text-gray-700 text-sm">
                Lorem ipsum dolor sit amet, conse ctetur adipi scing elit.
              </p>
            </li>
            <li class="flex items-start gap-2">
              <img
                src="@/assets/Group 35604.svg"
                alt="bullet"
                class="w-4 h-4 mt-1"
              />
              <p class="text-gray-700 text-sm">Lorem ipsum dolor sit amet.</p>
            </li>
            <li class="flex items-start gap-2">
              <img
                src="@/assets/Group 35604.svg"
                alt="bullet"
                class="w-4 h-4 mt-1"
              />
              <p class="text-gray-700 text-sm">
                Conse ctetur adipi scing elit.
              </p>
            </li>
            <li class="flex items-start gap-2">
              <img
                src="@/assets/Group 35604.svg"
                alt="bullet"
                class="w-4 h-4 mt-1"
              />
              <p class="text-gray-700 text-sm">
                Lorem ipsum dolor sit amet, conse ctetur.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  <div>
  <section class="bg-gray-50 py-40 pb-96  ">
    <!-- Decorative triangle -->
    <img
      src="@/assets/11.triangles.svg"
      alt="triangle"
      class="relative w-40 sm:w-60 md:w-80 h-auto transform -translate-y-24 md:-translate-y-[250px] mx-auto md:mx-0"
    />

    <div class="max-w-6xl mx-auto -my-20 md:-my-80 px-4 sm:px-6 lg:px-8 text-center">
      <!-- Heading -->
      <h2 class="text-2xl sm:text-3xl font-bold text-gray-900">Core Technologies</h2>
      <p class="mt-4 text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
        Lorem ipsum dolor sit amet, conse ctetur adipi scing elit. Aliq uam ex
        odio, is the turpis accu msan congue euisque blandit dui.
      </p>

      <!-- Tabs -->
      <div class="mt-8 flex justify-center">
        <div class="flex bg-white shadow-md rounded-full overflow-hidden">
          <button
            class="px-4 sm:px-6 py-2 text-sm font-medium text-gray-600 hover:text-blue-600"
          >
            Design
          </button>
          <button class="px-4 sm:px-6 py-2 text-sm font-medium text-blue-600">
            Development
          </button>
          <button
            class="px-4 sm:px-6 py-2 text-sm font-medium text-gray-600 hover:text-blue-600"
          >
            Marketing
          </button>
        </div>
      </div>

      <!-- Logos Grid (Row 1) -->
      <div
        class="mt-12 sm:mt-20 px-4 sm:px-6 md:px-12 lg:mx-24 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-7 gap-4 sm:gap-6"
      >
        <div
          class="flex items-center justify-center p-4 sm:p-6 border border-blue-200 rounded-xl bg-white shadow-sm hover:shadow-md transition"
        >
          <img src="@/assets/tech/react.svg" alt="React" class="h-10 sm:h-12 w-10 sm:w-12 object-contain" />
        </div>
        <div
          class="flex items-center justify-center p-4 sm:p-6 border border-blue-200 rounded-xl bg-[#0E77FF] shadow-sm hover:shadow-md transition"
        >
          <img src="@/assets/tech/AWS1.svg" alt="AWS1" class="h-10 sm:h-12 w-10 sm:w-12 object-contain" />
        </div>
        <div
          class="flex items-center justify-center p-4 sm:p-6 border border-blue-200 rounded-xl bg-white shadow-sm hover:shadow-md transition"
        >
          <img src="@/assets/tech/cloud.svg" alt="cloud" class="h-10 sm:h-12 w-10 sm:w-12 object-contain" />
        </div>
        <div
          class="flex items-center justify-center p-4 sm:p-6 border border-blue-200 rounded-xl bg-white shadow-sm hover:shadow-md transition"
        >
          <img src="@/assets/tech/redux.svg" alt="redux" class="h-10 sm:h-12 w-10 sm:w-12 object-contain" />
        </div>
        <div
          class="flex items-center justify-center p-4 sm:p-6 border border-blue-200 rounded-xl bg-white shadow-sm hover:shadow-md transition"
        >
          <img src="@/assets/tech/js.svg" alt="js" class="h-10 sm:h-12 w-10 sm:w-12 object-contain" />
        </div>
        <div
          class="flex items-center justify-center p-4 sm:p-6 border border-blue-200 rounded-xl bg-white shadow-sm hover:shadow-md transition"
        >
          <img src="@/assets/tech/sf.svg" alt="sf" class="h-10 sm:h-12 w-10 sm:w-12 object-contain" />
        </div>
        <div
          class="flex items-center justify-center p-4 sm:p-6 border border-blue-200 rounded-xl bg-white shadow-sm hover:shadow-md transition"
        >
          <img src="@/assets/tech/aws.svg" alt="aws" class="h-10 sm:h-12 w-10 sm:w-12 object-contain" />
        </div>
      </div>

      <!-- Logos Grid (Row 2) -->
      <div
        class="mt-8 sm:mt-10 px-4 sm:px-6 md:px-12 lg:mx-36 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 sm:gap-6"
      >
        <div
          class="flex items-center justify-center p-4 sm:p-6 border border-blue-200 rounded-xl bg-white shadow-sm hover:shadow-md transition"
        >
          <img src="@/assets/tech/sf.svg" alt="sf" class="h-10 sm:h-12 w-10 sm:w-12 object-contain" />
        </div>
        <div
          class="flex items-center justify-center p-4 sm:p-6 border border-blue-200 rounded-xl bg-white shadow-sm hover:shadow-md transition"
        >
          <img src="@/assets/tech/redux.svg" alt="redux" class="h-10 sm:h-12 w-10 sm:w-12 object-contain" />
        </div>
        <div
          class="flex items-center justify-center p-4 sm:p-6 border border-blue-200 rounded-xl bg-white shadow-sm hover:shadow-md transition"
        >
          <img src="@/assets/tech/node.svg" alt="node" class="h-10 sm:h-12 w-10 sm:w-12 object-contain" />
        </div>
        <div
          class="flex items-center justify-center p-4 sm:p-6 border border-blue-200 rounded-xl bg-white shadow-sm hover:shadow-md transition"
        >
          <img src="@/assets/tech/firebase.svg" alt="firebase" class="h-10 sm:h-12 w-10 sm:w-12 object-contain" />
        </div>
        <div
          class="flex items-center justify-center p-4 sm:p-6 border border-blue-200 rounded-xl bg-white shadow-sm hover:shadow-md transition"
        >
          <img src="@/assets/tech/react.svg" alt="react" class="h-10 sm:h-12 w-10 sm:w-12 object-contain" />
        </div>
        <div
          class="flex items-center justify-center p-4 sm:p-6 border border-blue-200 rounded-xl bg-white shadow-sm hover:shadow-md transition"
        >
          <img src="@/assets/tech/js.svg" alt="JavaScript" class="h-10 sm:h-12 w-10 sm:w-12 object-contain" />
        </div>
      </div>
    </div>
  </section>
</div>

  <div class=" overflow-hidden">
    <section class="font-sans">
      <!-- Contact Section -->
      <div
        class="flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 py-12 bg-white"
      >
        <!-- Left Illustration -->
        <div class="relative flex-1 flex justify-center mb-10 lg:mb-0">
          <img
            src="@/assets/12.svg"
            alt="triangle"
            class="absolute -top-60 left-44 w-28"
          />
          <img
            src="@/assets/13.svg"
            alt="Support Girl"
            class="relative mr-10 -mb-44 "
          />
        </div>

        <!-- Right Form -->
        <div
          class="flex-1 w-full max-w-lg bg-white shadow-lg mt-20 rounded-xl p-8 z-10"
        >
          <h2 class="text-2xl font-semibold mb-6">Send Us message</h2>
          <form class="space-y-4">
            <input
              type="email"
              placeholder="Your Email*"
              required
              class="w-full border-b border-gray-300 focus:outline-none focus:border-blue-500 py-2"
            />
            <input
              type="text"
              placeholder="Your Name*"
              required
              class="w-full border-b border-gray-300 focus:outline-none focus:border-blue-500 py-2"
            />
            <input
              type="tel"
              placeholder="Phone Number*"
              required
              class="w-full border-b border-gray-300 focus:outline-none focus:border-blue-500 py-2"
            />
            <input
              type="text"
              placeholder="Subject"
              class="w-full border-b border-gray-300 focus:outline-none focus:border-blue-500 py-2"
            />
            <textarea
              rows="4"
              placeholder="Your Message"
              class="w-full border-b border-gray-300 focus:outline-none focus:border-blue-500 py-2"
            ></textarea>

            <div class="flex items-start space-x-2 text-xs text-gray-600">
              <input type="checkbox" id="policy" required class="mt-1" />
              <label for="policy">
                By sending this message, you confirm that you have read and
                agreed to our privacy policy.
              </label>
            </div>

            <button
              type="submit"
              class="bg-[#0E77FF] hover:bg-[#149d5d] text-white px-6 py-3 rounded-full transition"
              @click="$router.push('/login')"
            >
              Get Started »
            </button>
          </form>
        </div>
      </div>

      <!-- Footer Section with Blue Base Image -->
      <footer
        class="relative text-white w-[1500px] h-[800px] px-6 lg:px-20 py-12 bg-cover bg-center -mt-[580px]"
        :style="{ backgroundImage: 'url(./assets/10.svg)' }"
      >
        <div
          class="relative pt-80 mt-60 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10"
        >
          <!-- About -->
          <div class="mt-8">
            <p class="text-sm leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim
              ad minim veniam consectetur adipiscing elit dolor sit amet.
            </p>

            <div class="flex space-x-5 mt-4">
              <i class="fab fa-facebook text-white w-6 h-6"></i>
              <i class="fab fa-x-twitter text-white w-6 h-6"></i>
              <i class="fab fa-instagram text-white w-6 h-6"></i>
            </div>
          </div>

          <!-- Services -->
          <div>
            <h4 class="font-semibold underline mb-3">Our Services</h4>
            <ul class="space-y-2 text-sm">
              <li>Web Development</li>
              <li>Mobile Development</li>
              <li>Cloud Technologies</li>
              <li>UI/UX Designs</li>
            </ul>
          </div>

          <!-- Links -->
          <div class="-ml-20">
            <h4 class="font-semibold mb-3 underline">Our Links</h4>
            <ul class="space-y-2 text-sm">
              <li>Terms & Condition</li>
              <li>Privacy Policy</li>
              <li>Imprint</li>
              <li>Legal</li>
            </ul>
          </div>

          <!-- Contact -->
          <div class="-ml-36">
            <h4 class="font-semibold mb-3 underline">Contact Us</h4>

            <!-- Address -->
            <div class="flex items-start space-x-3 mb-2 -ml-8">
              <img src="@/assets/16.svg" alt="location" class="w-5 h-5" />

              <p class="text-sm">
                Al Dummyroad 124/23 floor 123<br />
                Banswara Street, 02-577 India
              </p>
            </div>

            <!-- Phone -->
            <div class="flex items-center space-x-3 mb-2 -ml-8">
              <img src="@/assets/15.svg" alt="phone" class="w-5 h-5" />
              <p class="text-sm">00 1800 245 453</p>
            </div>

            <!-- Email -->
            <div class="flex items-center space-x-3 -ml-8">
              <img src="@/assets/14.svg" alt="email" class="w-5 h-5 mt-1" />
              <p class="text-sm">hello@inky.com</p>
            </div>
          </div>
        </div>
      </footer>
    </section>
  </div>
</template>

<script setup>
import { ref } from "vue";

const mobileOpen = ref(false);
const closeMobile = () => {
  mobileOpen.value = false;
};
</script>
