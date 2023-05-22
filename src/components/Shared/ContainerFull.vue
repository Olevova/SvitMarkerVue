<template>
   <slot>

   </slot>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
}

@media (min-width: 375px){
  .container {
    width: 375px;
    margin: auto;
    padding: 0;
  }
}

@media (min-width: 768px){
  .container {
    width: 768px;
    padding: 0 32px;	
  }
}


@media (min-width: 1440px){
  .container {
    width: 1440px;
    padding: 0 100px;
  }
}
</style>