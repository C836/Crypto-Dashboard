<template>
  <canvas :id="'myChart'" width="400" height="100"></canvas>
</template>

<script>
import Chart from "chart.js/auto";
import moment from "moment";
import { watch } from "vue";
import { Filler } from "chart.js";

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

        //////// TODO: ORGANIZAR ISSO EM FUNÇÃO

        gradient.addColorStop(0, monthEval() ? "#27FF3670" : "#ff2f2f70");
        gradient.addColorStop(0.8, "transparent");

        new Chart(chart, {
          type: "line",
          data: {
            labels: list.map((item, index) => {
              return index % 5 === 0 ?  moment(item[0]).format("DD/MM") : "";
            }),
            ////////// TODO: ORGANIZAR ISSO EM FUNÇÃO
            //   labels: list.map((item, index) => {
            //     return !(new Date(item[0]).getDate() % 5)
            //       ? `
            // ${new Date(item[0]).getDate()}/${new Date(item[0]).getMonth() + 1}`
            //       : "";
            //   }),

            //////////

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

    //new Date(1653436800000).toLocaleString().split(' ')
    //   mounted() {
    //     const ctx = document.getElementById(["myChart" + this.index]);
    //     const data = JSON.parse(JSON.stringify(this.data));
    //     const myChart = new Chart(ctx, {
    //       type: "line",
    //       data: {
    //         labels: data[0].prices.map((item, index) => {
    //           return `
    //           ${new Date(item[0]).getDate()}/${new Date(item[0]).getMonth() + 1}`;
    //         }),
    //         datasets: [
    //           {
    //             label: "# of Votes",
    //             data: data[0].prices.map((item, index) => {
    //               return item[1];
    //             }),
    //             backgroundColor: [
    //               "rgba(255, 99, 132, 0.2)",
    //               "rgba(54, 162, 235, 0.2)",
    //               "rgba(255, 206, 86, 0.2)",
    //               "rgba(75, 192, 192, 0.2)",
    //               "rgba(153, 102, 255, 0.2)",
    //               "rgba(255, 159, 64, 0.2)",
    //             ],
    //             borderColor: [
    //               "rgba(255, 99, 132, 1)",
    //               "rgba(54, 162, 235, 1)",
    //               "rgba(255, 206, 86, 1)",
    //               "rgba(75, 192, 192, 1)",
    //               "rgba(153, 102, 255, 1)",
    //               "rgba(255, 159, 64, 1)",
    //             ],
    //             borderWidth: 1,
    //           },
    //         ],
    //       },
    //       options: {
    //         scales: {},
    //       },
    //     });

    //     myChart;
    //   },
  },
};
</script>
