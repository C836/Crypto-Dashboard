<script>
export default {
  data() {
    return {
      info: "null",
      data: [],
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
  <table class="text-left w-full text-text bg-darker">
    <thead>
      <tr class="border-8 border-darker">


        <th>Nome</th>


        <th>Preço</th>




      </tr>
    </thead>
    <tbody v-for="(item, index) in data" class="bg-darker border-separate">
      <tr class="bg-dark border-8 border-darker">


        <td class="flex p-2">
          <img :src="item[0].image" class="h-12 p-1 mr-2" />
          <div class="h-12">
            <p>{{ item[0].name }}</p>
            <small class="opacity-60 line-">{{ item[0].symbol.toUpperCase() }}</small>
          </div>
        </td>


        <td>R$ {{ item[0].current_price }}</td>





      </tr>
    </tbody>
  </table>
</template>

<style></style>
