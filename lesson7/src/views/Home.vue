<template>
  <div class="home">
    <product-card v-for="product of showcase" :key="product.id" :data="product" :target="'showcase'" v-on:productAction="onBuy"/>
  </div>
</template>

<script>
import ProductCard from '../components/ProductCard.vue'
// @ is an alias to /src

export default {
  components: { ProductCard },
  name: 'Home',
  props: [
    "showcase",
    "cart"
  ],
  methods: {
    onBuy(product) {
      this.$emit('productAdd', product)
    }
  }
}
</script>

<style lang="css">
  .home {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
</style>