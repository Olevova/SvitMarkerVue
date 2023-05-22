<template>
  <div>
    <p>{{ filtername }}</p>
    <form class="form" @submit.prevent="handleSubmit">
      <input type="text" v-model="filtername" />
      <select v-model="filternumber">
        <option v-for="item in numbers" :value="item" :key="item">{{ item }}</option>
      </select>
      <ButtonMain type="submit">Button</ButtonMain>
    </form>
  </div>
</template>

<script>
import ButtonMain from '../ButtonMain.vue';

export default {
  name: 'MarketFilterForm',
  components: {
    ButtonMain
  },
data(){
return{
  filtername:'',
  filternumber:17
}
},

  computed: {
    numbers() {
      return [17, 8, 4];
    }
  },
  methods: {
    handleSubmit() {
      this.$emit('submit', {
        filtername: this.filtername,
        filternumber: this.filternumber
      });
    }
  }
};
</script>