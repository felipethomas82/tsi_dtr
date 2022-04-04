<template>
    <div class="card">
        <img class="img-poke" :src="pokemon.sprites ? pokemon.sprites.other['official-artwork'].front_default : ''">
        <div class="info">
            <div class="name"> {{ pokemon.name }} </div>
            <div class="id"> Id: {{ pokemon.id }} </div>
            <div class="height"> Altura: {{ pokemon.height }} </div>
            <div class="weight"> Peso: {{ pokemon.weight }} </div>
        </div>
        <a :href="`pokemon/${pokemon.id}`">Abrir</a>
    </div>
</template>

<script>

    export default {
        name: 'pokeCard',
        props : [ 'pokemon' ]
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

    .img-poke {
        width: 150px;
        background-color: white;
        margin-top: 15px;
        padding: 15px;
    }

    .name {
        font-size: 2em;
    }

    .card {
        border: 3px solid #d9d9d9;
        width: 200px;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #ededed;
        border-radius: 5px;
        margin: 10px;
    }

    .info {
        align-self: flex-start;
        padding-left: 20px;
        margin-bottom: 20px;
    }

</style>
