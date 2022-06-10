<script>
import arrowup from "./../assets/arrowup.svg";
import arrowdown from "./../assets/arrowdown.svg";
import arrowSlider from "./../assets/arrowSlider.svg";

import Details from "./../components/Details.vue";

export default {
  components: {
    Details,
  },
  data() {
    return {
      info: "null",
      data: [],
      details: [],
      arrows: [arrowSlider, arrowup, arrowdown],
    };
  },

  methods: {
    getApi: function () {
      const coins = ["bitcoin", "dacxi", "ethereum", "cosmos", "terra-luna-2"];
      this.data.length = 0
      coins.map((coins) => {
        fetch(
          `https://api.coingecko.com/api/v3/coins/markets?vs_currency=brl&ids=${coins}&order=market_cap_desc&per_page=100&page=1&sparkline=false`
        )
          .then((response) => response.json())
          .then((response) => this.data.push(response));
      });
    },
  },

  created() {
    this.getApi();

    setInterval(() => {
      console.log('foi')
      this.getApi()
    }, 30000);
  },
};
</script>

<template>
  <table class="text-left w-full h-auto max-w-5xl text-text bg-darker">
    <thead>
      <tr class="border-8 border-darker text-sm">
        <th class="sm:table-cell hidden text-center">Rank</th>

        <th class="pl-3">Nome</th>

        <th class="sm:table-cell hidden text-right">Cap. Mercado</th>

        <th class="text-right">Preço</th>

        <th class="sm:pl-16 pl-6">% 24H</th>
      </tr>
    </thead>
    <tbody v-for="(item, index) in data" class="bg-darker border-separate">
      <tr class="bg-dark border-8 border-darker text-sm md:text-base relative">
        <td class="sm:table-cell hidden w-18 text-center text-xl">
          {{ index + 1 }}
        </td>

        <td class="flex row-span-full col-span-full p-2">
          <img :src="item[0].image" class="h-12 p-1 mr-2" />
          <div class="h-12">
            <p>{{ item[0].name }}</p>
            <small class="opacity-60">{{ item[0].symbol.toUpperCase() }}</small>
          </div>
        </td>

        <td class="sm:table-cell hidden text-right">
          R$ {{ item[0].market_cap }}
        </td>

        <td class="text-right">R$ {{ item[0].current_price }}</td>

        <td class="sm:pl-16 pl-6">
          <img
            class="inline mr-2 w-4"
            :src="
              item[0].price_change_percentage_24h > 0 ? arrows[1] : arrows[2]
            "
          />
          <p
            :class="
              item[0].price_change_percentage_24h > 0
                ? 'text-green'
                : 'text-red'
            "
            class="inline-block"
          >
            {{ item[0].price_change_percentage_24h.toFixed(2) }}
          </p>
        </td>

        <td>
          <button
            class="collapsed relative flex items-center w-full h-full pl-2 pr-5 text-base text-gray-800 text-left rounded-none transition"
            type="button"
            data-bs-toggle="collapse"
            :data-bs-target="'#collapse' + (index + 1)"
            aria-expanded="false"
            :aria-controls="'collapse' + (index + 1)"
          >
            <figure class="sm:w-5 w-3">
              <img class="w-full" :src="arrows[0]" />
            </figure>
          </button>
        </td>
      </tr>
      <td class="relative" colspan="10">
        <Details :dailyData="data" :data="details" :index="index" />
      </td>
    </tbody>
  </table>
</template>
