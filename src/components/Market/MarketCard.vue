<template>
<div class="card">
  
    <img class="market__img" :src="`${imgSrc}`" width="400">
  <div class="market__remark">
    <div class="market__number">
    <h5>{{numberMarket}}</h5>
    <h6>ПАРТНЕР</h6>
    </div>
  <span class="market__rating">
    <p>Рейтинг</p>
    <RaitingComponent :rating ='rating' /> 
  </span>
  </div>
  <router-link :to='{name: "market"}'>
  <div class="market_info">
    <div class="market__title">
      <h1>Кращий магазин Городка</h1>
      <div class= 'market_stuff'>
      <div class="stuff">
        <img :src="`${stuffSrc}`">
        <h2>{{stuff}}</h2>
      </div>
      <h6>завідуюча магазином</h6>
      </div>
      <div class="separator"></div>
      <div class="market__deskription">
        <!-- <div v-if="!showFullDescription"> -->
          <p class="partial-description">{{description}}...</p>
          <!-- <button @click="toggleDescription" class="show-more-button"> Більше</button> -->
        <!-- </div>
        <div v-else>
          <p class="full-description">{{ description }}</p>
          <button @click="toggleDescription" class="show-more-button"> Менше</button>
        </div> -->
      </div>
      
    </div>
  </div>
  </router-link>
</div>
</template>



<script>
import RaitingComponent from '../RaitingComponent.vue'
    export default {
        name:'MarketCard',
        props:{
            rating:{
                type: Number,
                default: 0
            },
            stuff:{
                type: String,
                default: ""
            },
            imgSrc:{
                type: String,
                default: ""
            },
            stuffSrc:{
                type: String,
                default: ""
            },
            destination:{
                type: Object,
                default: () => ({})
            },
            
            description:{
                    type: String,
                    default: ""
                    },

            numberMarket: {
                type: Number,
                default: null

            },    
               
        },
        components: {
            RaitingComponent
        },
        data() {
                return {
                showFullDescription: false
                        }
                },
        methods: {
                toggleDescription() {
                    this.showFullDescription = !this.showFullDescription;
                                    }
                }
        }
</script>

<style lang="scss" scoped>

/* Just the background stuff */

/* My hum... body.. yeah.. */
body {
  background-color: #f70808;
  font-family: 'Montserrat', sans-serif;
}

.card {
  position: relative;
  width: 200px;
  border-radius: 8px;
  overflow: hidden;
  min-width: 343px;
  height: 323px;
  transition-duration: 2000ms;
  @media (min-width: 768px) {
    min-width: 336px;
  }
  @media (min-width: 1440px) {
    min-width: 330px;
  }
  border: 1px solid rgb(238, 40, 40);
  background-color: transparent;
  box-shadow: 10px 10px 13px 0px rgba(78, 77, 77, 0.75);
  background-color: #36373524;
  border-radius: 15px;
  overflow: hidden;
}


.market__img {
width: 343px;
height: 323px;
object-fit: cover;

    @media (min-width: 768px) {
      width: 336px;
    }
    @media (min-width: 1440px) {
      max-width: 100%;
    }
}

.market__remark {
    position: absolute;
    bottom: 24px;
    border-radius: 8px;
    left: 16px;
    right: 16px;
    padding: 6px;
    background-color: rgb(242, 11, 11);
    color: white;
    border-radius: 8px;
    display: flex;
    justify-content: space-around;
align-items: baseline
  }

.market__number {
  margin-top: 10px;
  text-align: center;
}

.market__rating {
  margin-top: 10px;
  text-align: center;
  color: #FFFFFF;
  font-size: 12px;
  font-weight: bold;
  margin-bottom: 5px;
  p{
    margin-bottom: 5px;
  }
}

.market_info {
  position: absolute;
  top: 0;
  right: -100%;
  width: 100%;
  height: 100%;
  padding: 10px;
  background-color: #f70a0a;
  transition: right 0.3s ease-in-out;
}

.card:hover .market_info {
  right: 0;
}

.market__title h1 {
  padding: 15px;
  font-family: Helvetica;
  font-size: 18px;
  color: #FFFFFF;
}

.market_stuff{
  display: flex;
  color: #FFFFFF;
}

.stuff {
  display: flex;
  background-color: #FFFFFF;
  height: 30px;
  width: 100px;
  border-radius: 20px;
  align-items: center;
  justify-content: space-around;
  /* justify-content: flex-end; */
  margin-right: auto;
  margin-left: 15px;
}

.market__title .stuff img {
  margin: 5px;
  height: 20px;
  width: 20px;
  border-radius: 50%;
}

.market__title .stuff h2 {
  margin-right: 6px;
  /* text-align: right; */
  /* font-size: 0.8rem; */
  color: #dc1d1d;
}

.market__title .separator {
  margin-top: 10px;
  border: 1px solid #FFFFFF;
  width: 100%;
}

.market__deskription {
  position: relative;
  margin-top: 10px;
  /* border: 1px solid #dc1d1d; */
  border-radius: 15px;
  /* background-color: #FFFFFF; */
  height: 200px;
  width: 100%;
  
}

.partial-description {
  padding: 5px 5px 20px 5px;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 18px;
  color: #FFFFFF;
}

/* .full-description {
  padding: 5px 5px 20px 5px;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 12px;
  color: #dc1d1d;
} */

/* .show-more-button {
  position: absolute;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  bottom: -20px;
  left: 50%;
  font-size: 6px;
  color: #FFFFFF;
  background-color: #dc1d1d;
  border: none;
  cursor: pointer;
  transform: translateX(-50%);
}

.show-more-button:hover {
  background-color: #b31818;
} */


</style>