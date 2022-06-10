<script>
import CoinTable from "./views/CoinTable.vue";

export default {
  name: "App",

  components: {
    CoinTable,
  },

  data() {
    return {
      timerCount: 30,
    };
  },

  watch: {
    timerCount: {
      handler(value) {
        if (value > 0) {
          setTimeout(() => {
            this.timerCount--;
          }, 1000);
        } else {
          this.timerCount = 30;
        }
      },
      immediate: true,
    },
  },
};
</script>

<template>
  <div class="w-full h-full p-2">
    <main class="flex flex-col items-center">
      <div class="flex items-center my-10 font-bold">
        <img class="sm:w-32 w-20 mr-5" src="./assets/logo.png" />
        <h1 class="text-text sm:text-5xl text-3xl">Crypto Dashboard</h1>
      </div>

      <CoinTable />
      <p class="text-text mt-5">Prox. Atualização: {{ timerCount }}s</p>
    </main>
  </div>
</template>
