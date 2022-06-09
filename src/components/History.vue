<script>
export default {
  data() {
    return {
      history: [],
    };
  },
  created() {
    fetch(
      `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart/range?vs_currency=brl&from=1654779772&to=1654789772`
    )
      .then((response) => response.json())
      .then((response) => {
        this.history.push(response), console.log(response);
      });
  },
};
</script>

<template>
  <section v-if="history.length">
    <table class="text-left w-full h-auto max-w-5xl text-text bg-darker">
      <thead>
        <tr class="border-8 border-darker text-sm">
          <th class="text-right">Cap. Mercado</th>

          <th class="text-right">Preço</th>

          <th class="pl-10">24H</th>
        </tr>
      </thead>
      <tbody v-for="index in 30" class="bg-darker border-separate">
        <tr>
          <td class="w-18 text-center text-xl font-medium">
            <p>R$ {{ history[0].market_caps[index][1].toFixed(4) }}</p>
          </td>
          <td class="w-18 text-center text-xl font-medium">
            <p>R$ {{ history[0].prices[index][1].toFixed(4) }}</p>
          </td>

          <td class="w-18 text-center text-xl font-medium">
            <p>
              R$ {{ (history[0].prices[index][1] - history[0].prices[index - 1][1]).toFixed(2) }}
            </p>
          </td>
          
          <td class="w-18 text-center text-xl font-medium">
            <p>
              {{ (((history[0].prices[index][1] - history[0].prices[index - 1][1]) / history[0].prices[index][1]) * 100).toFixed(2) }}%
            </p>
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>
