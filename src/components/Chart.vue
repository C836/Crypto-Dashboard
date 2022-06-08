<template>
  <canvas :id="'myChart' + index" width="400" height="100"></canvas>
</template>

<script>
import Chart from "chart.js/auto";
import { watch } from "vue";

export default {
  name: "Chart",
  props: ["index", "data"],
  setup(props) {
    const data = props.data;
    const index = props.index;

    watch(
      () => data.length === 5,
      () => {
        console.log(data);
        const ctx = document.getElementById(["myChart" + index]);

        new Chart(ctx, {
          type: "line",
          data: {

            ////////// TODO: ORGANIZAR ISSO EM FUNÇÃO
            labels: data[0].prices.map((item, index) => {
              return !(new Date(item[0]).getDate() % 5)
                ? `
          ${new Date(item[0]).getDate()}/${new Date(item[0]).getMonth() + 1}`
                : "";
            }),

            //////////

            datasets: [
              {
                label: ["Preço"],
                data: data[index].prices.map((item, index) => {
                  return item[1];
                }),
                backgroundColor: "#ffffff50",
                borderColor: "white",
                borderWidth: 1,
              },
            ],
          },
          options: {
            scales: {
              x: {
                grid: {
                  color: "#ffffff10",
                  borderColor: "red",
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
                  borderColor: "green",
                },
              },
            },
          },
        });
      }
    );
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
};
</script>
