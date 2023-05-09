const app = Vue.createApp({
    data() {
        return {
            currentVariantIndex: 0,
            variants: {
                0: {
                    name: 'Socks Blue',
                    image: 'assets/images/socks_blue.jpg',
                    link: 'https://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Daps&field-keywords=socks+blue',
                    inventory: 10,
                    onSale: true,
                    details: ['50% cotton', '30% wool', '20% polyester'],
                    sizes: ['S', 'M', 'L', 'XL'],
                },
                1: {
                    name: 'Socks Green',
                    image: 'assets/images/socks_green.jpg',
                    link: 'https://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Daps&field-keywords=socks+green',
                    inventory: 0,
                    onSale: false,
                    details: ['50% cotton', '30% wool', '20% polyester'],
                    sizes: ['S', 'M', 'L', 'XL'],
                },
            }
        }
    }
})