<style scoped>

</style>

<template>
    <div>
        <h3>{{ title }}</h3>
        <p>
            <span>{{ m1 }}</span>
            <el-button @click="changem1">change m1</el-button>
        </p>
        <p>
            <el-button @click="getlist">get list</el-button>
        </p>
        <p>
            <span>{{ now }}</span>
            <el-button @click="getnow">get now time</el-button>
        </p>
        <p>
            <img :src="imgurl" alt="" srcset="">
            <el-button @click="changecolor">change color</el-button>
        </p>
        <p>
            <h5>{{ num }}</h5>
            <el-button @click="changenum">change num</el-button>
        </p>
    </div>
</template>

<script>
    import Mock from 'mockjs'
    import * as demo from '../api/demo/'
    export default{
        data(){
            return{
                title:'mockjs demo',
                m1:'',
                now:'',
                imgurl:"",
                num:1
            }
        },
        mounted(){
            this.now=Mock.mock("@now");
            this.imgurl=Mock.Random.image('200x100', '#50B347', '#FFF', 'Mock.js')
            // demo.getpage_post({ pageindex:2,pagesize:20 }).then((res)=>{
            //     console.log(res);
            // })
            let _url=`http://www.easy-mock.com/mock/59bce026e0dc663341ac6dad/cstore/getpage`;
            fetch(_url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                body: `pageindex=2&pagesize=20`
                // body:{ pageindex:2, pagesize:20 }
            }).then(function(res) {
                if (res.ok) {
                    return res.json();
                }
            }).then((data)=>{
                console.log(data)
            }).catch((err)=>{
                console.log(err);
            })
        },
        methods:{
            changem1(){
                let _m1 = Mock.mock({
                    "stars|1-10":"★"
                })
                this.m1=_m1.stars;
            },
            getlist(){
                let _list = Mock.mock({
                    'list|10':[{
                        'id|+1':1
                    }]
                })
                console.log(_list)
            },
            getnow(){
                this.now=Mock.mock("@now");
            },
            changecolor(){
                let _color=Mock.Random.color();
                let _fcolor=Mock.Random.color();
                let _word=Mock.Random.word(4,7);
                this.imgurl=Mock.Random.image('200x100', _color, _fcolor, _word)
            },
            changenum(){
                this.num=Mock.Random.increment();
            }
        }
    }
</script>
