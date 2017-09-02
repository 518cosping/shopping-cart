<template>
    <div class="info">
        <div>
            <div class="item">总数:
                <strong>{{  all_num  }}</strong>
            </div>
            <div class="item">总价：
                <strong>{{  all_price  }}</strong>
            </div>
            <div @click='clearBoth(cartList)' class="item pull-right btn btn-danger">
                清空购物车
            </div>
        </div>
    </div>
</template>


<script>
    import infoJs from './info.js'
    export default infoJs
</script>


<style>
    .info{
        font-size: 20px;
        text-align: left;
    }
    .item{
        display: inline-block;
        margin-right: 50px;
    }
</style>
