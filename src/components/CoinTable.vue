<script>
import arrowup from "./../assets/arrowup.svg";
import arrowdown from "./../assets/arrowdown.svg";

export default {
  data() {
    return {
      info: "null",
      data: [],
      arrows: [arrowup, arrowdown],
    };
  },
  created() {
    const coins = ["bitcoin", "dacxi", "ethereum", "cosmos", "terra-luna-2"];
    coins.map((coins) => {
      fetch(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=brl&ids=${coins}&order=market_cap_desc&per_page=100&page=1&sparkline=false`
      )
        .then((response) => response.json())
        .then((data) => this.data.push(data));
    });
  },
};
</script>

<template>
  <table class="text-left w-full h-auto max-w-3xl text-text bg-darker">
    <thead>
      <tr class="border-8 border-darker text-sm">
        <th class="text-center">Rank</th>

        <th class="pl-3">Nome</th>

        <th class="text-right">Preço</th>

        <th class="pl-20">% 24H</th>
      </tr>
    </thead>
    <tbody v-for="(item, index) in data" class="bg-darker border-separate">
      <tr class="bg-dark border-8 rounded border-darker">
        <td class="w-20 text-center text-xl font-medium">
          {{index + 1}}
        </td>

        <td class="flex p-2">
          <img :src="item[0].image" class="h-12 p-1 mr-2" />
          <div class="h-12">
            <p>{{ item[0].name }}</p>
            <small class="opacity-60 line-">{{
              item[0].symbol.toUpperCase()
            }}</small>
          </div>
        </td>

        <td class="text-right">R$ {{ item[0].current_price }}</td>

        <td class="pl-20">
          <img
            class="inline mr-2 w-4"
            :src="
              item[0].price_change_percentage_24h > 0 ? arrows[0] : arrows[1]
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
      </tr>
    </tbody>
  </table>
</template>

<style></style>
