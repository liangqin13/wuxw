<template>
<div style="margin-top:60px">
    <div style="padding: 20px 20px 40px;background: #f3f3f4; ">
        <div style="background:#fff;padding: 15px 20px 15px 15px;    border-top: 2px solid #e6e6e6;border-bottom: 1px solid #e6e6e6;">
            <span style="font-size: 14px;font-weight:600;color:#676a6c">业主信息</span>
            <el-button style="float:right" type="success" icon="el-icon-search" @click="dialogVisible = true">选择业主</el-button>
        </div>
        <div style="background:#fff;    padding: 20px 20px 50px 20px;    display: flex;flex-wrap: wrap;">
            <div style="width:30%">
                <p style="color:#676a6c;font-size: 13px;">业主ID：<span></span></p>
            </div>
            <div style="width:30%;">
                <p style="color:#676a6c;font-size: 13px;">名称：<span></span></p>
            </div>
            <div style="width:30%">
                <p style="color:#676a6c;font-size: 13px;">性别：<span></span></p>
            </div>
            <div style="width:30%;margin-top:30px">
                <p style="color:#676a6c;font-size: 13px;">年龄：<span></span></p>
            </div>
            <div style="width:30%;margin-top:30px">
                <p style="color:#676a6c;font-size: 13px;">联系方式：<span></span></p>
            </div>
            <div style="width:30%;margin-top:30px">
                <p style="color:#676a6c;font-size: 13px;">创建员工：<span></span></p>
            </div>
        </div>
        <div style="background:#fff;padding: 15px 20px 15px 15px;margin-top:30px;    border-top: 2px solid #e6e6e6;border-bottom: 1px solid #e6e6e6;">
            <span style="font-size: 14px;font-weight:600;color:#676a6c">车位信息</span>
            <el-button style="float:right" type="success" icon="el-icon-close">我要退款</el-button>
        </div>
        <div style="background:#fff;    padding: 20px 20px 50px 20px;    display: flex;flex-wrap: wrap;">
            <div style="width:30%">
                <p style="color:#676a6c;font-size: 13px;">车位ID：<span></span></p>
            </div>
            <div style="width:30%;">
                <p style="color:#676a6c;font-size: 13px;">车位编号：<span></span></p>
            </div>
            <div style="width:30%">
                <p style="color:#676a6c;font-size: 13px;">车位类型：<span></span></p>
            </div>
            <div style="width:30%;margin-top:30px">
                <p style="color:#676a6c;font-size: 13px;">车位状态：<span></span></p>
            </div>
            <div style="width:30%;margin-top:30px">
                <p style="color:#676a6c;font-size: 13px;">车位面积：<span></span></p>
            </div>
            <div style="width:30%;margin-top:30px">
                <p style="color:#676a6c;font-size: 13px;">车辆ID：<span></span></p>
            </div>
            <div style="width:30%;margin-top:30px">
                <p style="color:#676a6c;font-size: 13px;">车牌号：<span></span></p>
            </div>
            <div style="width:30%;margin-top:30px">
                <p style="color:#676a6c;font-size: 13px;">车品牌：<span></span></p>
            </div>
            <div style="width:30%;margin-top:30px">
                <p style="color:#676a6c;font-size: 13px;">车类型：<span></span></p>
            </div>
        </div>
    </div>
    <div class="footer" style="padding: 10px 20px;background:#fff;border-top: 1px solid #e7eaec;    border-bottom: 1px solid #e7e7e7;">
            <span>Copyright</span>
            <div style="float:right;">HC小区管理系统</div>
        </div>
        <el-dialog
        title="选择业主"
        :visible.sync="dialogVisible"
        width="60%">
          <el-button style="float:right;margin-right: 70px;    margin-right: 70px;margin-left:0" type="success">查询</el-button>
          <el-form ref="form" style="float:right;margin-top: 0px;" :model="params" label-width="80px">
            <el-form-item style="    margin-top: -6px;">
                <el-input v-model="params.name" placeholder="输入业主名称"></el-input>
            </el-form-item>
          </el-form>
          <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="业主ID"
        width="150">
      </el-table-column>
      <el-table-column
        prop="name"
        label="名称"
        width="100">
      </el-table-column>
      <el-table-column
        prop="address"
        label="性别">
      </el-table-column>
      <el-table-column
        prop="address"
        label="年龄">
      </el-table-column>
      <el-table-column
        prop="address"
        label="联系方式">
      </el-table-column>
      <el-table-column
        prop="address"
        label="创建员工">
      </el-table-column>
      <el-table-column
        prop="address"
        label="备注">
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
      labelPosition: 'left',
      dialogVisible: false,
      tableData: [],
      total: 0,
      params: {
        page: 1,
        row: 10,
        name: '',
        desc: ''
      },
      value1: '',
      value2: ''
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
.el-select{
    width: 100%;
}
.el-textarea{
    width: 100%;
}
</style>
