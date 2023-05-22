
<template>
<HeaderMarket/>
 <router-view/>
<FooterMarket />
</template>

<script>
import FooterMarket from './components/Market/FooterMarket.vue'
import HeaderMarket from './components/Market/HeaderMarket.vue'
export default {
  name: 'App',
  components: {
    FooterMarket,
    HeaderMarket
  },
}
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Додали min-height: 100vh; */
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
 
}
.content {
  flex-grow: 1;
}
</style>






 <!-- <template> -->
<!-- // <HeaderMarket/>
//     <div class="content">
//     <p>{{text}}</p>
//     <input v-model="text"/>
//     <MarketFilterForm @submit="marketsFilter" />
//     <MarketList :items="filteredMarkets" />
//     </div>
//     <FooterMarket /> -->
 <!-- </template> -->

<!-- // <script>
// import markets from './components/Market/market'
// // import MarketFilterForm from './components/Market/MarketFilterForm.vue'
// import MarketList from "./components/Market/MarketList.vue"
// // import CustomSelect from './components/Shared/CustomSelect.vue'
// import FooterMarket from './components/Market/FooterMarket.vue'
// import HeaderMarket from './components/Market/HeaderMarket.vue'
// export default {
//   name: 'App',
//   components: {
//     MarketList,
//     FooterMarket,
//     HeaderMarket
//     // MarketFilterForm,
//     // CustomSelect
//   },
//   data() {
//     return {
//       markets,
//       text: '',
//       filters: {
//         name: "",
//       },
//     }
//   }, -->

<!-- //   computed: {
//     filteredMarkets() {
//       if(!this.text){
//         return markets
//       }
//       const filteredMarkets = this.markets.filter(item => item.stuff.toLowerCase().includes(this.text.toLowerCase()))
//       return filteredMarkets;
//     }
//   },
// }
// </script> -->

<!-- // <style> -->
<!-- // #app {
//   display: flex;
//   flex-direction: column;
//   min-height: 100vh; /* Додали min-height: 100vh; */
//   font-family: 'Montserrat', sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
 
// }
// .content {
//   flex-grow: 1;
// }
// </style> -->



