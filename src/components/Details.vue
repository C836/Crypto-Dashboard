<script>
import "tw-elements";
import Chart from "./Chart.vue";
import History from "./History.vue";
import Date from "./Date.vue";
import moment from "moment";

const defaultDate = new window.Date().getTime();

export default {
  data() {
    return {
      date: defaultDate,
    };
  },
  props: ["index", "data", "dailyData"],
  components: { Chart, History, Date },
  methods: {
    handleChange(input) {
      this.date = moment(input, "YYYY-MM-DD").add(1, "days");
    },
  },
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
          <Date v-on:inputChange="handleChange" />
        </fieldset>
        <History :input="date" />
      </div>
    </div>
  </div>
</template>
