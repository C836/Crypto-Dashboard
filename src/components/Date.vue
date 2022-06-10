<template>
  <div>
    <input type="date" v-model="input" />
    <button @click="handleInput">Get input field value</button>
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
