<template>
    <div class='heart-rating'>
        <span v-for="index in ratingLimit" :key="index" class="heart heart--notcolor" ></span>
        <div class="heart-rating__full" :style ='ratingWidthStyle'> 
            <span v-for="index in ratingLimit" :key="index" class="heart heart--color" ></span>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'RaitingComponent',
        props:{
            rating:{
                type:Number,
                default: 0
            },
            ratingLimit:{
                type:Number,
                default:5

            }
            
        },
        computed:{
        ratingWidth(){
          return  this.rating/this.ratingLimit * 100 ;
        },
        ratingWidthStyle(){
            return `width: ${this.ratingWidth}% ;`
        }
            }
    }


</script>

<style lang="scss" scoped>
.heart-rating{
    position: relative;
    display: inline-flex;
    &__full{
        display: inline-flex;
        position: absolute;
        width: 0;
        height: 100%;
        top:0;
        left: 0;
        overflow: hidden;  
    }
}
.heart{
    display: inline-block;
    width: 16px;
    height: 16px;
    margin: 0 3px;
    flex-shrink: 0;
    &--color{
        background: url('/public/img/heart.svg') center no-repeat;
    }
    &--notcolor{
        background: url('/public/img/heartcolor.svg') center no-repeat;
    }
}
</style>