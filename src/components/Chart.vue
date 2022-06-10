<template>
  <canvas :id="'myChart'" width="400" height="100"></canvas>
</template>

<script>
import Chart from "chart.js/auto";
import moment from "moment";

export default {
  name: "Chart",
  props: ["history"],

  watch: {
    history: {
      handler(history) {
        const list = history.reverse();

        const monthEval = () => {
          return list[30][1] > list[0][1] ? true : false;
        };

        const ctx = document.getElementById(["myChart"]);
        const chart = ctx.getContext("2d");

        const gradient = chart.createLinearGradient(0, 0, 0, 300);

        gradient.addColorStop(0, monthEval() ? "#27FF3670" : "#ff2f2f70");
        gradient.addColorStop(0.8, "transparent");

        new Chart(chart, {
          type: "line",
          data: {
            labels: list.map((item, index) => {
              return index % 5 === 0 ? moment(item[0]).format("DD/MM") : "";
            }),
            datasets: [
              {
                label: ["Preço"],
                data: list.map((item) => {
                  return item[1];
                }),
                backgroundColor: gradient,
                borderColor: monthEval() ? "#27FF36" : "#ff2f2f",
                borderWidth: 1,
                pointRadius: 4,
                fill: true,
              },
            ],
          },
          options: {
            scales: {
              x: {
                grid: {
                  color: "#ffffff10",
                  borderColor: monthEval() ? "#27FF36" : "#ff2f2f",
                },
                ticks: {
                  autoSkip: false,
                  maxRotation: 360,
                  minRotation: 360,
                },
              },
              y: {
                grid: {
                  color: "#ffffff10",
                  borderColor: monthEval() ? "#27FF36" : "#ff2f2f",
                },
              },
            },
          },
        });
      },
    },
  },
};
</script>
