<script>
import moment from "moment";
import Chart from "./Chart.vue";

const monthUnix = 2678400;

const filterMonth = (items) => {
  return items.filter((x, index) => index % 24 === 0);
};

export default {
  props: ["input"],
  components: { Chart },

  data() {
    return {
      moment: moment,
      date: this.input,
      history: { prices: [], market_caps: [] },
    };
  },

  watch: {
    input: {
      immediate: true,
      deep: true,
      handler(date) {
        fetch(
          `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart/range?vs_currency=brl&from=${
            moment(date).unix() - monthUnix
          }&to=${moment(date).unix()}`
        )
          .then((response) => response.json())
          .then((response) => {
              (this.history.prices = filterMonth(response.prices).reverse()),
              (this.history.market_caps = filterMonth(
                response.market_caps
              ).reverse());
          });
      },
    },
  },
};
</script>

<template>
  <section v-if="history.prices.length">
    <Chart :history="history.prices" />
    <table class="text-left max-w-5xl w-full h-auto mt-10 text-text bg-darker">
      <thead>
        <tr class="text-sm">
          <th class="text-center">Data</th>
          <th class="pl-3">Cap. Mercado</th>

          <th class="">Preço</th>

          <th class="">24H</th>

          <th class="">% 24H</th>
        </tr>
      </thead>
      <tbody v-for="index in 30" class="bg-darker text-lg">
        <tr class="bg-dark border-2 border-y-4 border-darker relative h-14">
          <td class="text-center text-base w-20">
            <!-- TODO: FORMATAR EM FUNÇÃO DATA -->

            <p>
              {{
                moment(history.prices[index][0]).add(1, "days").format("DD/MM")
              }}
            </p>
          </td>

          <td>
            <p class="ml-3">R$ {{ history.market_caps[index][0] }}</p>
          </td>

          <td class="">
            <p>R$ {{ history.prices[index][1].toFixed(4) }}</p>
          </td>

          <td class="">
            <p v-if="index < 30">
              R$
              {{
                (
                  history.prices[index][1] - history.prices[index + 1][1]
                ).toFixed(2)
              }}
            </p>
          </td>

          <td class="">
            <!-- TODO: FORMATAR EM FUNÇÃO -->
            <p v-if="index < 30">
              {{
                (
                  ((history.prices[index][1] - history.prices[index + 1][1]) /
                    history.prices[index][1]) *
                  100
                ).toFixed(2)
              }}
            </p>
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>
