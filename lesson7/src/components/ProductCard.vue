<template>
    <div class="card">
        <img :src="`./assets/${data.img}`" alt="photo">
        <h3>{{ data.title }}</h3>
        <strong>{{ data.price }}$</strong>
        <button v-on:click="onClick" v-if="target == 'showcase'" >Buy</button>
        <button v-on:click="onClick" v-if="target == 'cart'" >Remove</button>
    </div>
</template>

<script>
export default {
    name: "Card",
    props: [
        "data",
        "target"
    ],
    methods: {
        onClick() {
            this.$emit('productAction', this.data)
        }
    }
}
</script>

<style lang="css">
    .card {
        width: 400px;
        margin: 20px 10px;
    }
    .card img {
        width: 100%;
    }
</style>
