module.exports = {
    name : 'info',
    computed: {
        cartList(){       
            return this.$store.state.allReady;
        },
        all_num(){
            return this.$store.state.allNum;
        },
        all_price(){
            var allPrice = this.$store.state.allPrice || 0;
            this.$store.state.allReady.forEach(function(item,index){
                allPrice = allPrice + item.num * item.price
            })
            return allPrice;
        }
    },
    methods: {
        clearBoth(cartList){
            console.log(cartList)
            this.$store.commit('clearBoth',cartList)
        }
    }
}