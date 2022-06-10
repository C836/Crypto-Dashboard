<template>
  <div class="flex justify-center mt-5">
    <input type="date" class="h-10 px-3 rounded mr-3 text-darkest" v-model="input" />
    <button class="bg-transparent font-semibold bg-blue text-text py-2 px-4 hover:border-transparent rounded" @click="handleInput">Pesquisar</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: null,
    };
  },
  
  methods: {
    handleInput() {
      this.$emit("inputChange", this.input);
    },
  },
};
</script>
