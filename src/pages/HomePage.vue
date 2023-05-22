
<template>
    <div class="content">
    <p>{{text}}</p>
    <input v-model="text"/>
    <MarketFilterForm @submit="marketsFilter" />
    <MarketList :items="filteredMarkets" />
    </div>
</template>

<script>
import markets from '../components/Market/market'
import MarketList from "../components/Market/MarketList.vue"

export default {
  name: 'App',
  components: {
    MarketList,
   
  },
  data() {
    return {
      markets,
      text: '',
      filters: {
        name: "",
      },
    }
  },

  computed: {
    filteredMarkets() {
      if(!this.text){
        return markets
      }
      const filteredMarkets = this.markets.filter(item => item.stuff.toLowerCase().includes(this.text.toLowerCase()))
      return filteredMarkets;
    }
  },
}
</script>

<style>

</style>
