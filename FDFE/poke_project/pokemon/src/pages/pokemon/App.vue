<template>
  <div id="app">
    <h1>POKEMON</h1>
    <pokeCard  :pokemon="pk"></pokeCard>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import pokeCard from '../../components/pokeCard.vue'

const axios = require('axios').default;

export default {
  name: 'App',
  components : {
    pokeCard
  },
  data : function() {
    return {
      pk : {}
    }
  },
  created : async function() {
    const id = window.location.href.split('/').pop();
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    this.pk = response.data;
  }
}
</script>

<style lang="scss">

</style>
