module.exports = {
    name: "cart-list",
    computed: {
        cartList(){       
            return this.$store.state.allReady;
        },
        flag(){
            return this.$store.state.flag;
        }
    },
    methods: {
        addCart(item,index){
            this.$store.commit('allAdd',this.cartList[index]);
            this.$store.commit('add_buy',this.cartList[index]);
            this.$store.commit('allNum',1);
            this.$store.commit('flag');
        },
        subCart(item,index){
            this.$store.commit('allSub', this.cartList[index]);
            this.$store.commit('sub_buy',this.cartList[index]);
            this.$store.commit('allNum',-1);
            this.$store.commit('flag');
        },
        deleteCart(item,index){
            this.$store.commit('deleteNum',item)
            this.$store.commit('deleteList',this.cartList[index])
        }
    }
}