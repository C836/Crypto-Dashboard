<script>
import "tw-elements";
import History from "./History.vue";
import Date from "./Date.vue";
import moment from "moment";

const defaultDate = new window.Date().getTime();

export default {
  props: ["coin", "index"],
  data() {
    return {
      date: defaultDate,
    };
  },

  components: { History, Date },
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
        
        <History :coin="coin" :index="index" :input="date" />
      </div>
    </div>
  </div>
</template>
