<style>
    
</style>

<template>
    <div>
        <breadcrumb :navs="navs"></breadcrumb>
        <p>
            <strong>
                <router-link to='/movie/detail/24?name=变形金刚5'>电影详情</router-link>
            </strong>
        </p>
        <!--路由渲染的页面容器-->
        <!--<router-view></router-view>-->
    </div>
</template>

<script>
// 引入面包屑
import breadcrumbComponent from '../components/breadcrumbComponent.vue'
export default {
    data(){
        return{
            title:'电影页',
            navs:[
                { path:'/movie',name:'电影页' }
            ]
        }
    },
    components:{
        'breadcrumb':breadcrumbComponent
    }
}
</script>

