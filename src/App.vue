<script>
import CoinTable from "./components/CoinTable.vue";

export default {
  name: "App",
  components: {
    CoinTable,
  },
};
</script>

<template>
  <div class="w-full h-full bg-darkest p-5">
    <main class="flex justify-center">
      <CoinTable />
    </main>
  </div>
</template>
