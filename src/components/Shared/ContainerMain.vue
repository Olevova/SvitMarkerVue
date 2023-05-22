<template>
    <div class="container">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name:"containerMain"
    }
</script>

<style lang="scss" scoped>
.container {
  position: relative;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  justify-items: center;
  margin-bottom: 40px;
  gap: 28px;
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 14px;
    margin-bottom: 50px;
  }

  @media (min-width: 1440px) {
    grid-template-columns: repeat(4, 1fr);
    grid-row-gap: 50px;
  }
}

</style>