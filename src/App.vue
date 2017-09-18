<style>
    body{
        margin: 0;
        overflow: hidden;
    }
    .container a{
        text-decoration:none;
    }
    .container .el-menu{
        padding-left: 33%
    }
    .content{
        height: 100%;
    }
</style>

<template>
    <div class="container">
        <el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
            <el-menu-item index="1"><router-link to="/home">首页</router-link></el-menu-item>
            <el-menu-item index="2"><router-link to="/movie">电影</router-link></el-menu-item>
            <el-menu-item index="3"><router-link to="/about">关于我们</router-link></el-menu-item>
            <el-menu-item index="4"><router-link to="/mock">Mock</router-link></el-menu-item>
        </el-menu>
        <!--路由渲染的页面容器-->
        <div class="content">
            <el-row type="flex" class="row-bg" justify="center">
                <el-col :span="18">
                    <transition enter-active-class="animated fadeInLeft" leave-active-class="animated fadeOutRight">
                        <router-view></router-view>
                    </transition>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
    import * as demo from './api/demo/'
    export default{
        data(){
            return {
                msg:'vue-webpack-simple-pro',
                activeIndex:'1'
            }
        },
        mounted(){
            // demo.getdata_get({}).then((res)=>{
            //     console.log(res)
            // })
        }
    }
</script>