<template>
    <div class="menu_list">
        <h4>菜品信息</h4>
        <table class="table table-striped table-shop">
            <thead>
                <tr>
                    <th>id</th>
                    <th>名称</th>
                    <th>价格</th>
                    <th>数量</th>
                    <th>选择</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for='(item,index) in list'>
                    <td>{{      item.id           }}</td>
                    <td>{{      item.name         }}</td>
                    <td>{{      item.price        }}</td>
                    <td>{{      item.num || ""    }}</td>
                    <td>
                        <div @click='menu_add(item.num,index)' class="btn btn-info">{{item.num? '+' : '我要买'}}</div>
                        <div @click='menu_sub(item.num,index)' class="btn btn-warning" v-if='item.num && item.num > 0'>-</div>
                    </td>
                </tr>
            </tbody>    
        </table>
    </div>
</template>


<script>
    import listJs from './list.js';
    export default listJs
</script>


<style>
    .table-shop th{
            text-align :center;
    }
</style>
