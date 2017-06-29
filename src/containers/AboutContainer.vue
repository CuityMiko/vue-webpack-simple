<style>

</style>

<template>
    <div>
        <h3>{{title}}</h3>
    </div>
</template>

<script>
import MovieService from '../services/MovieService.js'
import httpHelper from '../js/commons/httpHelper.js'

export default {
    data(){
        return {
            title:'关于我们',
            name:this.$route.params.name||'',
            msg:this.$route.query.msg||''
        }
    },
    methods:{
        
    },
    mounted(){
        //let _movietype="coming_soon";
        // let _params={
        //     start:0,
        //     count:8,
        //     city:'杭州',
        //     q:''
        // }
        // let _params={
        //     start:0,
        //     count:7,
        //     city:'杭州',
        //     q:''
        // }
        // MovieService.GetMovieList(_movietype,_params,this.$http).then((data)=>{
        //     console.log(data);
        // },(err)=>{
        //     console.log(err);
        // }).catch((err)=>{
        //     console.log(err);
        // })
    },
    directives:{ // 自定义指令
        red(el,params){ // 使用的时候指令名称：v-red
            // el:当前指令所在标签的DOM元素
            // params:给指令传递的值
            el.style.backgroundColor=params.value;
        }
    },
    watch:{
    },
    components:{
    }
}
</script>
