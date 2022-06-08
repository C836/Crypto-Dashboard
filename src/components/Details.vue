<script>
import "tw-elements";
import Chart from "./Chart.vue";

export default {
  props: ["index", "data"],
  components: { Chart }
};
</script>

<template>
  <div class="accordion w-full">
    <div class="accordion-item">
      <div
        :id="'collapse' + (index + 1)"
        class="accordion-collapse collapse z-10 bg-darker"
        :aria-labelledby="'heading' + (index + 1)"
        data-bs-parent="#accordionExample"
      >
        <Chart :index="index" :data="data" />
      </div>
    </div>
  </div>
</template>
