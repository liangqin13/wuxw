<template>
<div style="margin-top:60px">
    <div style="padding: 20px 20px 40px;background: #f3f3f4; ">
        <div style="background:#fff;padding: 15px 20px 15px 15px;    border-top: 2px solid #e6e6e6;border-bottom: 1px solid #e6e6e6;">
            <span style="font-size: 14px;font-weight:600;color:#676a6c">小区楼信息</span>
            <el-button style="float:right" type="success" icon="el-icon-search" @click="dialogVisible = true">选择小区楼</el-button>
        </div>
        <div style="background:#fff;    padding: 20px 20px 50px 20px;    display: flex;">
            <div style="width:25%">
                <p style="color:#676a6c;font-size: 13px;">小区楼ID：<span></span></p>
            </div>
            <div style="width:25%">
                <p style="color:#676a6c;font-size: 13px;">名称：<span></span></p>
            </div>
            <div style="width:25%">
                <p style="color:#676a6c;font-size: 13px;">编号：<span></span></p>
            </div>
        </div>
    <el-table
      :data="tableData"
      style="width: 100%;margin-top:30px;padding-top: 15px;">
      <el-table-column
        prop="date"
        label="单元ID"
        width="210">
      </el-table-column>
      <el-table-column
        prop="name"
        label="单元编号"
        width="150">
      </el-table-column>
      <el-table-column
        prop="address"
        label="总层数">
      </el-table-column>
       <el-table-column
        prop="address"
        label="是否有电梯">
      </el-table-column>
       <el-table-column
        prop="address"
        label="创建人">
      </el-table-column>
      <el-table-column
        prop="address"
        label="备注">
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
        title="申请入驻"
        :visible.sync="dialogVisible"
        width="60%">
          <el-button style="float:right;margin-right: 70px;    margin-right: 70px;margin-left:0" type="success">查询</el-button>
          <el-form ref="form" style="float:right;margin-top: 0px;" :model="params" label-width="80px">
            <el-form-item style="    margin-top: -6px;">
                <el-input v-model="params.name" placeholder="输入小区楼编号"></el-input>
            </el-form-item>
          </el-form>
          <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="楼ID"
        width="150">
      </el-table-column>
      <el-table-column
        prop="name"
        label="名称"
        width="100">
      </el-table-column>
      <el-table-column
        prop="address"
        label="编号">
      </el-table-column>
      <el-table-column
        prop="address"
        label="创建人">
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
