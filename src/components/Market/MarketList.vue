<template>
    <div class="marketlist">
        <ContainerMain>
        <MarketCard
        v-for="{ id, rating, stuff, imgSrc, stuffSrc, description, numberMarket} in items "
        :key="id"
        :rating ="rating"
        :stuff ="stuff"
        :imgSrc ="imgSrc"
        :stuffSrc="stuffSrc"
        :description ="description ? description.substring(0,280): ''"
        :numberMarket ="numberMarket"
        />
        </ContainerMain>
    </div>
</template>

<script>
import MarketCard from './MarketCard.vue'
import ContainerMain from '../Shared/ContainerMain.vue'
    export default {
        name: "MarketList",
        components:{
            MarketCard,
            ContainerMain
        },
        props: {
            items: {
                type:Array,
                default:()=>{}
            },
        }

    }
</script>

<style lang="scss" scoped>

</style>