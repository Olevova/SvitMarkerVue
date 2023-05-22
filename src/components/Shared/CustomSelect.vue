<template>
  <div>
    <input v-bind="$attrs" />
  </div>
</template>

<script>
export default {
 name: 'CustomSelect',
  computed: {
     'input': event =>{console.log("klick"); event.target.value}
     }
    }
  
</script>

<style lang="scss" scoped>

</style>