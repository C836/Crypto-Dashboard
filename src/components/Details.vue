<script>
import "tw-elements";
import Chart from "./Chart.vue";
import History from "./History.vue";

export default {
  props: ["index", "data", "dailyData"],
  components: { Chart, History },
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
        <fieldset>
          <input type="date" />
        </fieldset>
        <Chart :index="index" :dailyData="dailyData" :data="data" />
        <History />
      </div>
    </div>
  </div>
</template>
