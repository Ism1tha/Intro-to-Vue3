const app = Vue.createApp({
    data() {
        return {
            currentProductIndex: 1,
            products: {
                0: {
                    name: 'Socks Blue',
                    image: 'assets/images/socks_blue.jpg',
                    link: 'https://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Daps&field-keywords=socks+blue',
                    inventory: 10
                },
                1: {
                    name: 'Socks Green',
                    image: 'assets/images/socks_green.jpg',
                    link: 'https://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Daps&field-keywords=socks+green',
                    inventory: 0
                },
            }
        }
    }
})