<script>
import CoinTable from "./views/CoinTable.vue";
import Acordion from "./components/Details.vue";

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
      <CoinTable />
    </main>
  </div>
</template>
