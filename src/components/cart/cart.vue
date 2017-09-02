<template>
    <div class="cart_list">
        <h4>我的购物车</h4>
        <table class="table table-hover table-shop">
            <thead>
                <tr>
                    <th>id</th>
                    <th>名称</th>
                    <th>价格</th>
                    <th>数量</th>
                    <th>总价</th>
                    <th>选项</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for='(item,index) in cartList' >
                    <td>{{  item.id  }}</td>
                    <td>{{  item.name  }}</td>
                    <td>{{  item.price  }}</td>
                    <td>{{  item.num  }}</td>
                    <td>{{  item.num*item.price || '' }}</td>
                    <td>
                        <div @click='addCart(item.num,index)' class="btn btn-info">+</div>
                        <div @click='subCart(item.num,index)' class="btn btn-warning">-</div>
                        <div @click='deleteCart(item.num,index)' class="btn btn-danger" >x</div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>



<script>
    import cartJs from './cart.js'    
    export default cartJs
</script>


<style>

</style>
