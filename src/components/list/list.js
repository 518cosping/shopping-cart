module.exports = {
    name: 'list',
    option: this,
    data () {
        return {
            list: [{
                id    : 1,
                name  : '水煮鱼',
                price : 30,
            },{
                id    : 2,
                name  : '麻辣小龙虾',
                price : 58,
            },{
                id    : 3,
                name  : '跳跳蛙',
                price : 48,
            },{
                id    : 4,
                name  : '大碗米饭',
                price : 2,
            }]
        }
    },    
    methods: {
        // 点击菜品中的+号
        menu_add(item,index) {
            if(this.list[index].num){
                this.$store.commit('allAdd',this.list[index]);
            }else{
                this.$set(this.list[index],'num',1);
            }
            this.$store.commit('add_buy',this.list[index]);
            this.$store.commit('allNum',1);
            this.$store.commit('flag');
        },
        //点击菜品中的-号
        menu_sub(item,index) {
            this.$store.commit('allSub', this.list[index]);
            this.$store.commit('sub_buy',this.list[index]);
            this.$store.commit('allNum',-1);
            this.$store.commit('flag');
        },  
    },
    computed: {
        num(){
            var len = this.list.length;
            for (var i = 0; i < len; i ++){
                // return this.$store.state.num[i];
                // break;
                // this.list[i].num = this.$store.state.num[i];
                // break;
                // return this.list[i].num
            }
        },
    }
}