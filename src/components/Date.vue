<template>
  <div>
    <input type="date" v-model="input" />
    <p>{{ input }}</p>
    <button @click="handleInput">Get input field value</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      date: new Date(),
    };
  },
  methods: {
    handleInput() {
      this.$emit("inputChange", this.input);
    },
  },
};
</script>
