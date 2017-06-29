<style>
    .go{
        float: right;
    }
</style>

<template>
    <div>
        <breadcrumb :navs="navs"></breadcrumb>
        <h3>
            {{title}}
            <el-button type="small" class="go" @click="$router.go(-1)">返 回</el-button>
        </h3>
        <p v-if="id>0">
            <strong>
                {{ `id:${id},name:${name}` }}
            </strong>
        </p>
    </div>
</template>

<script>
// 引入面包屑
import breadcrumbComponent from '../components/breadcrumbComponent.vue'
export default {
    data(){
        return{
            title:'电影详情页',
            id:this.$route.params.id,
            name:this.$route.query.name,
            navs:[
                { path:'/movie',name:'电影页' },
                { path:'/movie/detail',name:'电影详情页' }
            ]
        }
    },
    components:{
        'breadcrumb':breadcrumbComponent
    },
    mounted(){
        console.log(this.$route.params.id);
        console.log(this.$route.query.name)
    }
}
</script>

