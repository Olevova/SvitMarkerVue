<template>
  <div>
    <input type="text" :value="value" @input="updateValue" />
  </div>
</template>

<script>
export default {
  name: 'CustomInput',
  props: {
    value: {
      type: String,
      default: ''
    },
  },
  methods: {
    // eslint-disable-next-line vue/no-deprecated-dollar-listeners-api
    updateValue(event) {
      this.$emit('update:value', event.target.value);
    },
  },
};
</script>

<style lang="scss" scoped>

</style>