<template>
<div style="margin-top:60px">
    <div style="padding: 20px 20px 40px;background: #f3f3f4; ">
        <div style="background:#fff;padding: 15px 20px 15px 15px;    border-top: 2px solid #e6e6e6;border-bottom: 1px solid #e6e6e6;">
            <span style="font-size: 14px;font-weight:600;color:#676a6c">出租地上停车费信息</span>
            <el-button style="float:right" type="success" icon="el-icon-plus">编辑</el-button>
        </div>
        <div style="background:#fff;    padding: 20px 20px 50px 20px;    display: flex;">
            <div style="width:50%">
                <p style="color:#676a6c;font-size: 13px;">地上停车费配置ID：<span></span></p>
            </div>
            <div style="width:50%">
                <p style="color:#676a6c;font-size: 13px;">每月费用：<span></span></p>
            </div>
        </div>
        <div style="margin-top:30px;background:#fff;padding: 15px 20px 15px 15px;    border-top: 2px solid #e6e6e6;border-bottom: 1px solid #e6e6e6;">
            <span style="font-size: 14px;font-weight:600;color:#676a6c">出租地下停车费信息</span>
            <el-button style="float:right" type="success" icon="el-icon-plus">编辑</el-button>
        </div>
        <div style="background:#fff;    padding: 20px 20px 50px 20px;    display: flex;">
            <div style="width:50%">
                <p style="color:#676a6c;font-size: 13px;">地下停车费配置ID：<span></span></p>
            </div>
            <div style="width:50%">
                <p style="color:#676a6c;font-size: 13px;">每月费用：<span></span></p>
            </div>
        </div>
        <div style="margin-top:30px;background:#fff;padding: 15px 20px 15px 15px;    border-top: 2px solid #e6e6e6;border-bottom: 1px solid #e6e6e6;">
            <span style="font-size: 14px;font-weight:600;color:#676a6c">出租地上停车费信息</span>
            <el-button style="float:right" type="success" icon="el-icon-plus">编辑</el-button>
        </div>
        <div style="background:#fff;    padding: 20px 20px 50px 20px;    display: flex;">
            <div style="width:50%">
                <p style="color:#676a6c;font-size: 13px;">地上停车费配置ID：<span></span></p>
            </div>
            <div style="width:50%">
                <p style="color:#676a6c;font-size: 13px;">每月费用：<span></span></p>
            </div>
        </div>
        <div style="margin-top:30px;background:#fff;padding: 15px 20px 15px 15px;    border-top: 2px solid #e6e6e6;border-bottom: 1px solid #e6e6e6;">
            <span style="font-size: 14px;font-weight:600;color:#676a6c">出租地下停车费信息</span>
            <el-button style="float:right" type="success" icon="el-icon-plus">编辑</el-button>
        </div>
        <div style="background:#fff;    padding: 20px 20px 50px 20px;    display: flex;">
            <div style="width:50%">
                <p style="color:#676a6c;font-size: 13px;">地下停车费配置ID：<span></span></p>
            </div>
            <div style="width:50%">
                <p style="color:#676a6c;font-size: 13px;">每月费用：<span></span></p>
            </div>
        </div>
    </div>
    <div class="footer" style="padding: 10px 20px;background:#fff;border-top: 1px solid #e7eaec;    border-bottom: 1px solid #e7e7e7;">
            <span>Copyright</span>
            <div style="float:right;">HC小区管理系统</div>
        </div>
</div>
</template>
<script>
export default {
  data() {
    return {
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
