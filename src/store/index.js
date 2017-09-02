import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);


const store = new Vuex.Store({
    state : {
        allReady : [],
        allNum : 0,
        flag : false,
    },
    mutations : {
        add_buy(state,buy_list){
            console.log(buy_list)
            var id = buy_list.id;
            var num = buy_list.num;
            var len = state.allReady.length;
            if(num === 1){
                state.allReady.push(buy_list);
            }else{
                for(var i = 0; i < len; i ++){
                    if(state.allReady[i].id === buy_list.id){
                        state.allReady.splice(i,1,buy_list)
                    }
                }
            }            
        },
        sub_buy(state,buy_list){
            var id = buy_list.id;
            var num = buy_list.num;
            var len = state.allReady.length;
            for(var i = 0; i < len; i ++){
                if(state.allReady[i].id === id){
                    if(num === 0){
                        state.allReady.splice(i,1);
                        break;
                    }else{
                        state.allReady.splice(i,1,buy_list)
                    }
                }
            }
        },
        flag(state){
            state.allNum > 0? state.flag = true : state.flag = false;
        },
        allAdd(state,buy_list){
            buy_list.num ++;
        },
        allSub(state,buy_list){
            buy_list.num --;
        },
        allNum(state,direct){
            direct>0? state.allNum ++ : state.allNum --;
        },
        deleteList(state,list){
            var id = list.id;
            var len = state.allReady.length;
            for(var i = 0; i < len; i ++){
                if(id === state.allReady[i].id){
                    state.allReady.splice(i,1);
                    list.num = 0;
                    break;
                }
            }
        },
        deleteNum(state,num){
            state.allNum -= num;
        },
        clearBoth(state,list){
            var len = state.allReady.length;
            for(var i = 0; i < len; i ++){
                list[i].num = 0;
            }
            state.allNum = 0 ;
            state.allReady = []                
        }
    }
})

export default store;