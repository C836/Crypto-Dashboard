<script>
import CoinTable from "./views/CoinTable.vue";
import logo from "./assets/logo.png";

export default {
  name: "App",

  components: {
    CoinTable,
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
    </main>
  </div>
</template>
