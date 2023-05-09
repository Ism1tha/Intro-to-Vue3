const app = Vue.createApp({
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
    methods: {
        addToCart() {
            this.cart.push(this.variants[this.currentVariantIndex].id)
        },
        previewVariant(index) {
            this.currentImageIndex = index;
        }
    },
    computed: {
        title() {
            return "Vue Shop - " + this.variants[this.currentVariantIndex].name
        }
    }
})