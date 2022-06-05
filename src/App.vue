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
    <CoinTable />
  </div>
</template>
