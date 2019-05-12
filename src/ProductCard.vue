
<template>
   <div class="product" id="productCard"> 
      <img class="product__image margin-b-16 w-100" :src = "picter" alt="picter">
      <div class='product__header margin-b-16 d-flex j-space-between'>
          <h2 class="header__text">{{ name }}</h2>
          <button class="header__button d-flex j-space-around pointer">
              <img class="button__img" :src = "btnUrl" alt="donate">
              <p class="button__text f-size-11" title="asd">{{ btnText }}</p>
          </button>
      </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props:{
    product: Object,
    staticDonateText: String,
    staticDonateUrl: String,
  },
  data() {
      return {
        picter: this.product.url,
        name:  this.product.name,
        btnUrl:  this.staticDonateUrl,
        btnText: this.staticDonateText
      }
    },
  computed: {
    assign(product) {
      this.picter = product.url
    }
  }
}
</script>

<style>
</style>
