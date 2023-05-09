const app = Vue.createApp({
    data() {
        return {
            cart: [],
            premium: false,
        }
    },
    methods: {
        updateCart(index) {
            console.log("updateCart");
            this.cart.push(index)
        }
    },
})