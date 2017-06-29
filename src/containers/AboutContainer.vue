<style>

</style>

<template>
    <div>
        <h3>{{title}}</h3>
        <div v-red='txtcolor'>dasdsadas</div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            title:'关于我们',
            txtcolor:'blue'
        }
    },
    methods:{
        
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
