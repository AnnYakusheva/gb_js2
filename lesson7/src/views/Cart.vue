<template>
  <div class="home">
    <product-card v-for="product of cart" :key="product.id" :data="product" :target="'cart'" v-on:productAction="onDelete"/>
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
    onDelete(product) {
      this.$emit('productDelete', product)
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