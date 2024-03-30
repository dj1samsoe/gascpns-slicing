<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { Icon } from "@iconify/vue";
import { ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

const store = useStore();
const router = useRouter();

const userData = ref({
  email_or_username: "",
  password: "",
});

// Add a ref for password visibility
const showPassword = ref(false);

// Add a function to toggle password visibility
const togglePassword = () => {
  showPassword.value = !showPassword.value;
};

const login = async () => {
  try {
    const user = await store.dispatch("auth/login", userData.value);

    // Redirect to the appropriate page based on user role.
    router.push(
      store.getters["auth/isAdmin"] ? "/admin/dashboard" : "/member/dashboard"
    );
  } catch (error) {
    console.error("Login failed:", error);

    const loginError = store.getters["auth/loginError"];
    alert(`Login failed: ${loginError}`);
  }
};
</script>

<style scoped>
/* Inside your style tag (or in your CSS file if not scoped) */
.password-container {
  /* We'll use a wrapper to help position */
  position: relative; /* Establish a relative positioning context */
}

.password-toggle {
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  cursor: pointer; /* Indicate that the button is clickable */
}
</style>

<template>
  <div class="flex flex-row min-h-screen w-full">
    <div
      class="w-2/5 min-h-screen bg-gradient-to-b from-primary to-secondary rounded-r-3xl"
    >
      <div class="flex flex-col justify-between items-center h-full pt-10">
        <img src="/logo-white.png" class="w-48 pb-20" />
        <div class="flex flex-col h-full">
          <img src="/register-image.png" class="w-96" />
        </div>
      </div>
    </div>
    <div class="w-3/5 h-full">
      <div class="w-full flex justify-center py-48">
        <div class="flex flex-col space-y-4 w-[400px]">
          <h5 class="text-text-primary font-bold text-[20px] text-center">
            Login ke Akun GASCPNS Anda
          </h5>
          <form class="flex flex-col gap-5" @submit.prevent="login">
            <!-- <div class="flex flex-col gap-1">
              <label for="email" class="text-text-primary font-medium text-sm"
                >Email*</label
              >
              <input
                type="email"
                v-model="userData.email"
                id="email"
                name="email"
                class="w-full px-6 py-3 border border-[#C7C9D9] rounded-xl"
                placeholder="Masukkan Email Anda"
                required
              />
            </div> -->
            <div class="flex flex-col gap-1">
              <label
                for="email_or_username"
                class="text-text-primary font-medium text-sm"
                >Username*</label
              >
              <input
                type="text"
                v-model="userData.email_or_username"
                id="email_or_username"
                name="email_or_username"
                class="w-full px-6 py-3 border border-[#C7C9D9] rounded-xl"
                placeholder="Masukkan Email atau Username Anda"
                required
              />
            </div>
            <div class="flex flex-col gap-1">
              <label
                for="password"
                class="text-text-primary font-medium text-sm"
                >Password*</label
              >
              <div class="password-container">
                <input
                  :type="showPassword ? 'text' : 'password'"
                  v-model="userData.password"
                  id="password"
                  name="password"
                  class="w-full px-6 py-3 border border-[#C7C9D9] rounded-xl"
                  placeholder="Masukkan Password Anda"
                  minlength="8"
                  required
                />
                <button
                  type="button"
                  class="password-toggle"
                  @click="togglePassword"
                >
                  <Icon
                    icon="ph:eye-light"
                    class="text-xl"
                    v-if="!showPassword"
                  />
                  <Icon icon="ph:eye-slash-light" class="text-xl" v-else />
                </button>
              </div>
              <div class="flex justify-end">
                <p class="text-sm text-text-tertiary">
                  Must be at least 8 Characters.
                </p>
              </div>
            </div>

            <button
              type="submit"
              class="bg-primary text-white w-full rounded-xl py-3"
            >
              Login
            </button>
            <button class="bg-white drop-shadow-md w-full rounded-xl py-3">
              <router-link
                to="#"
                aria-lable="Google Sign In"
                class="w-full flex justify-center items-center"
              >
                <Icon icon="flat-color-icons:google" class="text-2xl" />
                <span class="ml-3">Sign up with Google</span>
              </router-link>
            </button>
            <div
              class="text-sm text-text-primary flex items-center gap-1 justify-center"
            >
              <p>Apakah kamu belum punya akun?</p>

              <router-link
                to="/register"
                class="text-primary underline cursor-pointer"
                >Daftar</router-link
              >
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
