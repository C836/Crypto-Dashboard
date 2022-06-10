<script>
import moment from "moment";

const monthUnix = 2678400;

const filterMonth = (items) => {
  return items.filter((x, index) => index % 24 === 0);
};

export default {
  props: ["index", "input"],

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
    <table class="text-left text-text max-w-5xl w-full h-auto mt-10 text-sm md:text-base bg-darker">
      <thead>
        <tr class="text-sm">
          <th class="text-center">Data</th>
          <th class="hidden sm:table-cell pl-3">Cap. Mercado</th>

          <th class="pl-2">Preço</th>

          <th>24H</th>

          <th>% 24H</th>
        </tr>
      </thead>
      <tbody v-for="index in 30" class="bg-darker">
        <tr
          class="border-2 border-y-8 border-darker relative h-14"
          :class="index % 2 ? 'bg-dark' : 'bg-light'"
        >
          <td class="text-center w-25">
            <p>
              {{
                moment(history.prices[index][0]).add(1, "days").format("DD/MM")
              }}
            </p>
          </td>

          <td class="hidden sm:table-cell ">
            <p class="ml-3">R$ {{ history.market_caps[index][0] }}</p>
          </td>

          <td class="pl-2">
            <p>R$ {{ history.prices[index][1].toFixed(2) }}</p>
          </td>

          <td>
            <p
              v-if="index < 30"
              :class="
                history.prices[index][1] - history.prices[index + 1][1] > 0
                  ? 'text-green'
                  : 'text-red'
              "
            >
              R$
              {{
                (
                  history.prices[index][1] - history.prices[index + 1][1]
                ).toFixed(2)
              }}
            </p>
          </td>

          <td class="">
            <p
              v-if="index < 30"
              :class="
                history.prices[index][1] - history.prices[index + 1][1] > 0
                  ? 'text-green'
                  : 'text-red'
              "
            >
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
