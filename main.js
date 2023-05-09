const app = Vue.createApp({
    data() {
        return {
            cart: [],
            premium: false,
        }
    },
    methods: {
        addToCart() {
            this.cart.push(this.variants[this.currentVariantIndex].id)
        }
    },
})