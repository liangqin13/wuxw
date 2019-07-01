<template>
<div style="margin-top:60px">
    <div style="padding: 20px 20px 40px;background: #f3f3f4; ">
        <div style="background:#fff;padding: 15px 20px 15px 15px;    border-top: 2px solid #e6e6e6;border-bottom: 1px solid #e6e6e6;">
            <span style="font-size: 14px;font-weight:600;color:#676a6c">物业费初始化信息</span>
            <el-button style="float:right" type="success" icon="el-icon-plus" @click="dialogVisible = true">编辑</el-button>
        </div>
        <div style="background:#fff;    padding: 20px 20px 50px 20px;    display: flex;">
            <div style="width:30%">
                <p style="color:#676a6c;font-size: 13px;">物业费配置ID：<span></span></p>
            </div>
            <div style="width:30%">
                <p style="color:#676a6c;font-size: 13px;">每平方单价：<span></span></p>
            </div>
            <div style="width:30%">
                <p style="color:#676a6c;font-size: 13px;">附加费：<span></span></p>
            </div>
        </div>
    </div>
    <div class="footer" style="padding: 10px 20px;background:#fff;border-top: 1px solid #e7eaec;    border-bottom: 1px solid #e7e7e7;">
            <span>Copyright</span>
            <div style="float:right;">HC小区管理系统</div>
        </div>
        <el-dialog
        title="编辑物业费"
        :visible.sync="dialogVisible"
        width="60%">
        <el-form ref="form" :label-position="labelPosition" label-width="120px" :model="params" style="width: 100%;padding: 10px 15px;background: #fff;">
          <el-form-item label="每平方米单价">
            <el-input v-model="params.name" placeholder="必填，请填写房屋每平方米的物业费单价，如10000.00"></el-input>
          </el-form-item>
          <el-form-item label="附加费用">
            <el-input v-model="params.name" placeholder="必填，请填写附加费，如200.00"></el-input>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogVisible = false">保存</el-button>
        </span>
      </el-dialog>
</div>
</template>
<script>
export default {
  data() {
    return {
      dialogVisible: false,
      labelPosition: 'left',
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
