<style>
    .el-breadcrumb{
        margin: 9px;
    }
</style>

<template>
    <div>
        <el-breadcrumb separator="->">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item v-for="(nav,index) in navs" :key="index" :to="{ path: '/movie' }">{{nav.name}}</el-breadcrumb-item>
        </el-breadcrumb>
    </div>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    props:['navs']
}
</script>


