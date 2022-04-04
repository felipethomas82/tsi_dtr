<template>
  <div id="app">
    <button @click="load">Clique</button>
    <div id="cards">
        <pokeCard  v-for="pk in pokemons" :pokemon="pk" :key="pk.id"></pokeCard>
    </div>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import pokeCard from '../../components/pokeCard.vue'

const axios = require('axios').default;

export default {
  name: 'App',
  components: {
    pokeCard
  },
  data : function() {
    return {
      pokemons : [],
      pokes : [1,2,3,4,5,6,200,300,500,600,601,602,700]
    }
  },
  methods : {
    load : async function() {
        for (const pokeId of this.pokes) {
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeId}`);
            this.pokemons.push( response.data );
        
        }
    }
  },
  created : function() {
    this.load();
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#cards {
    display: flex;
    flex-wrap: wrap;
}
</style>
