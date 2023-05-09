app.component('product-display', {
    template:
        /*html*/
        `<div class="product-display">
    <div class="product-container">
      <div class="product-image">
        <!-- Image goes here -->
        <img :src="variants[currentImageIndex].image">
      </div>
      <div class="product-info">
        <h1>{{ title }}</h1>
        <p v-if="variants[currentVariantIndex].onSale" style="color: red; font-weight: bold;">
          On Sale!
        </p>
        <p>Shipping: {{ shipping }}</p>
        <template v-if="variants[currentVariantIndex].inventory > 10">
          <p>In Stock</p>
        </template>
        <template v-else-if="variants[currentVariantIndex].inventory <= 10 && variants[currentVariantIndex].inventory > 0">
          <p>Almost sold out!</p>
        </template>
        <template v-else>
          <p>Out of Stock</p>
        </template>
        <ul>
          <li v-for="detail in variants[currentVariantIndex].details">{{ detail }}</li>
        </ul>
        <h2>Variants</h2>
        <div v-for="(variant, index) in variants" :key="index" @click="currentVariantIndex = index" @mouseover="previewVariant(index)" @mouseout="currentImageIndex = currentVariantIndex" class="color-circle" :style="{ backgroundColor: variant.color }"></div>
        <hr>
        <h2>Sizes</h2>
        <div v-for="(size, index) in variants[currentVariantIndex].sizes" :key="index">
          <p>{{ size }}</p>
        </div>
        <p>{{ variants[currentVariantIndex].description }}</p>
        <button class="button" :class="{ disabledButton: variants[currentVariantIndex].inventory == 0 }" :disabled="variants[currentVariantIndex].inventory == 0" @click="addToCart">Add to Cart</button>
      </div>
    </div>
  </div>`,
    props: {
        premium: {
            type: Boolean,
            required: true,
        },
    },
    data() {
        return {
            cart: [],
            currentVariantIndex: 0,
            currentImageIndex: 0,
            variants: {
                0: {
                    id: 2234,
                    name: 'Socks Blue',
                    color: 'blue',
                    image: 'assets/images/socks_blue.jpg',
                    link: 'https://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Daps&field-keywords=socks+blue',
                    inventory: 10,
                    onSale: true,
                    details: ['50% cotton', '30% wool', '20% polyester'],
                    sizes: ['S', 'M', 'L', 'XL'],
                },
                1: {
                    id: 2235,
                    name: 'Socks Green',
                    color: 'green',
                    image: 'assets/images/socks_green.jpg',
                    link: 'https://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Daps&field-keywords=socks+green',
                    inventory: 0,
                    onSale: false,
                    details: ['50% cotton', '30% wool', '20% polyester'],
                    sizes: ['S', 'M', 'L', 'XL'],
                },
            }
        }
    },
    computed: {
        title() {
            return "Vue Shop - " + this.variants[this.currentVariantIndex].name
        },
        shipping() {
            if (this.premium) {
                return "Free"
            }
            return 2.99
        }
    },
    methods: {
        previewVariant(index) {
            this.currentImageIndex = index;
        },
        addToCart() {
            this.$emit('add-to-cart', this.variants[this.currentVariantIndex].id)
        }
    },
    emits: ['add-to-cart'],
})
