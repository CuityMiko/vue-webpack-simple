<style scoped>
    .container{
        overflow:auto
    }
    .center{
        text-align: center;
    }
</style>

<template>
    <div class="container" v-loading="loading" element-loading-text="数据加载中...">
        <h3 class="center">Mock-分页数据列表</h3>
        <el-table
            :data="tableData"
            border
            style="width: 100%">
            <el-table-column
            prop="id"
            label="编号"
            width="70">
            </el-table-column>
            <el-table-column
            prop="name"
            label="名称"
            width="200">
            </el-table-column>
            <el-table-column
            prop="image"
            label="图片"
            width="240">
            <template scope="scope">
                <img :src="scope.row.image" alt="" srcset="" style="height:3rem;">
            </template>
            </el-table-column>
            <el-table-column
            prop="province"
            label="省份"
            width="110">
            </el-table-column>
            <el-table-column
            prop="city"
            label="城市"
            width="110">
            </el-table-column>
            <el-table-column
            prop="county"
            label="区县"
            width="80">
            </el-table-column>
            <el-table-column
            prop="count"
            label="数量"
            width="100">
            </el-table-column>
            <el-table-column
            prop="isopen"
            label="是否开启"
            width="100">
            <template scope="scope">
                <el-tag v-if="scope.row.isopen" type="success">开启</el-tag>
                <el-tag v-else type="danger">关闭</el-tag>
            </template>
            </el-table-column>
            <el-table-column
            prop="created"
            label="创建时间"
            width="200">
            </el-table-column>
        </el-table>
        <p class="center">
            <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="currentPage"
                :page-sizes="[20, 30, 40, 50]"
                :page-size="100"
                layout="total, sizes, prev, pager, next, jumper"
                :total="total">
            </el-pagination>
        </p>
    </div>
</template>

<script>
require('promise.prototype.finally').shim()

export default {
    data(){
        return {
            loading: true,
            tableData: [],
            currentPage:1,
            pageconf:{
                pageindex:1,
                pagesize:10
            },
            total:0
        }
    },
    mounted(){
        this.getdata();
    },
    methods:{
        getdata(){
            let _self=this;
            _self.loading=true;
            let _url=`http://www.easy-mock.com/mock/59bce026e0dc663341ac6dad/cstore/getpage`;
            fetch(_url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                body: `pageindex=${_self.pageconf.pageindex}&pagesize=${_self.pageconf.pagesize}`
                // body:{ pageindex:2, pagesize:20 }
            }).then(function(res) {
                if (res.ok) {
                    return res.json();
                }
            }).then((data)=>{
                _self.tableData=data.list;
                _self.total=parseInt(data.total);
            }).catch((err)=>{
                console.log(err);
            }).finally(()=>{
                _self.loading=false;
            })
        },
        handleSizeChange(val) {
            let _self=this;
            _self.pageconf.pageindex=1;
            _self.pageconf.pagesize=parseInt(val);
            _self.getdata();
            console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
            let _self=this;
            _self.currentPage=parseInt(val);
            _self.pageconf.pageindex=parseInt(val);
            _self.getdata();
            console.log(`当前页: ${val}`);
        }
    }
}
</script>


