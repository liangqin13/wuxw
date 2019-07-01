<template>
<div style="margin-top:60px">
    <div style="padding: 20px 20px 40px;background: #f3f3f4; ">
        <div style="background:#fff;padding: 15px 20px 15px 15px;    border-top: 2px solid #e6e6e6;border-bottom: 1px solid #e6e6e6;">
            <span style="font-size: 14px;font-weight:600;color:#676a6c">员工信息</span>
            <el-button style="float:right" type="success" icon="el-icon-search" @click="dialogVisible = true">定位员工</el-button>
        </div>
        <div style="background:#fff;  flex-wrap: wrap;   padding: 20px 20px 50px 20px;    display: flex;">
            <div style="width:23%">
                <p style="color:#676a6c;font-size: 13px;">员工ID：<span></span></p>
            </div>
            <div style="width:23%">
                <p style="color:#676a6c;font-size: 13px;">员工名称：<span></span></p>
            </div>
            <div style="width:23%">
                <p style="color:#676a6c;font-size: 13px;">手机号：<span></span></p>
            </div>
             <div style="width:23%">
                <p style="color:#676a6c;font-size: 13px;">邮箱：<span></span></p>
            </div>
             <div style="width:23%;margin-top:30px">
                <p style="color:#676a6c;font-size: 13px;">性别：<span></span></p>
            </div>
             <div style="width:23%;margin-top:30px">
                <p style="color:#676a6c;font-size: 13px;">地址：<span></span></p>
            </div>
        </div>
    <el-table
      :data="tableData"
      style="width: 100%;margin-top:30px;padding-top: 15px;">
      <el-table-column
        prop="date"
        label="权限ID"
        width="210">
      </el-table-column>
      <el-table-column
        prop="name"
        label="权限名称"
        width="150">
      </el-table-column>
      <el-table-column
        prop="address"
        label="权限描述">
      </el-table-column>
       <el-table-column
        prop="address"
        label="隶属权限组ID">
      </el-table-column>
       <el-table-column
        prop="address"
        label="隶属权限组名称">
      </el-table-column>
      <el-table-column
        prop="address"
        label="状态">
      </el-table-column>
       <el-table-column
        prop="address"
        label="操作">
        <template slot-scope="scope">
                        <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                        <el-button @click="handleClick(scope.row)" type="text" size="small">删除</el-button>
                    </template>
      </el-table-column>
    </el-table>
        <div class="pagination-container" style="text-align: right;background:#fff;padding-top:30px;">
            <el-pagination background layout="prev, pager, next" :total="total" :current-page="params.page" :page-size="params.row"
                            @current-change="handleCurrentChange"
                            @prev-click="handleCurrentChange"
                            @next-click="handleCurrentChange"></el-pagination>
        </div>
    </div>
    <div class="footer" style="padding: 10px 20px;background:#fff;border-top: 1px solid #e7eaec;    border-bottom: 1px solid #e7e7e7;">
            <span>Copyright</span>
            <div style="float:right;">HC小区管理系统</div>
        </div>
         <el-dialog
        title="定位员工"
        :visible.sync="dialogVisible"
        width="60%">
          <el-button style="float:right;margin-right: 70px;    margin-right: 70px;margin-left:0" type="success">查询</el-button>
          <el-form ref="form" style="float:right;margin-top: 0px;" :model="params" label-width="80px">
            <el-form-item style="    margin-top: -6px;">
                <el-input v-model="params.name" placeholder="输入员工名称"></el-input>
            </el-form-item>
          </el-form>
          <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="员工编码"
        width="150">
      </el-table-column>
      <el-table-column
        prop="name"
        label="员工名称"
        width="100">
      </el-table-column>
      <el-table-column
        prop="address"
        label="手机号">
      </el-table-column>
      <el-table-column
        prop="address"
        label="性别">
      </el-table-column>
      <el-table-column
        prop="address"
        label="创建时间">
      </el-table-column>
      <el-table-column
        prop="address"
        label="操作">
        <template slot-scope="scope">
                        <el-button @click="handleClick(scope.row)" type="text" size="small">选择</el-button>
                    </template>
      </el-table-column>
    </el-table>
      </el-dialog>
</div>
</template>
<script>
export default {
  data() {
    return {
      dialogVisible: false,
      tableData: [],
      total: 0,
      params: {
        page: 1,
        row: 10
      }
    }
  },
  methods: {
    // 点击分页
    handleCurrentChange(val) {
      this.params.page = val
      this.getData()
    }
  }
}
</script>
<style lang='scss' scoped>
.English{
  font-size: 26px;
  line-height: 26px;
  color: #6bb7e1;
  margin-bottom: 90px;
  margin-top: 14px;
  font-family: Arial,Helvetica,sans-serif;
  letter-spacing: 2px;
}
.el-button{
    padding: 6px 6px;
}
</style>
