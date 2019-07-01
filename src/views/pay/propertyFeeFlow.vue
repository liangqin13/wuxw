<template>
<div style="margin-top:60px">
    <div style="padding: 20px 20px 40px;background: #f3f3f4; ">
        <div style="background:#fff;padding: 15px 20px 15px 15px;    border-top: 2px solid #e6e6e6;border-bottom: 1px solid #e6e6e6;">
            <span style="font-size: 14px;font-weight:600;color:#676a6c">物业费信息</span>
            <el-button style="float:right" type="success" icon="el-icon-search" @click="dialogVis = true">选择房屋</el-button>
        </div>
        <div style="background:#fff;     flex-wrap: wrap;   padding: 20px 20px 50px 20px;    display: flex;">
            <div style="width:30%">
                <p style="color:#676a6c;font-size: 13px;">费用ID：<span></span></p>
            </div>
            <div style="width:30%">
                <p style="color:#676a6c;font-size: 13px;">小区边编号：<span></span></p>
            </div>
            <div style="width:30%">
                <p style="color:#676a6c;font-size: 13px;">房屋ID：<span></span></p>
            </div>
            <div style="width:30%;margin-top:30px">
                <p style="color:#676a6c;font-size: 13px;">房屋编号：<span></span></p>
            </div>
            <div style="width:30%;margin-top:30px">
                <p style="color:#676a6c;font-size: 13px;">业主ID：<span></span></p>
            </div>
            <div style="width:30%;margin-top:30px">
                <p style="color:#676a6c;font-size: 13px;">业主名称：<span></span></p>
            </div>
            <div style="width:30%;margin-top:30px">
                <p style="color:#676a6c;font-size: 13px;">联系电话：<span></span></p>
            </div>
            <div style="width:30%;margin-top:30px">
                <p style="color:#676a6c;font-size: 13px;">建筑面积：<span></span></p>
            </div>
            <div style="width:30%;margin-top:30px">
                <p style="color:#676a6c;font-size: 13px;">费用开始时间：<span></span></p>
            </div>
            <div style="width:30%;margin-top:30px">
                <p style="color:#676a6c;font-size: 13px;">费用到期时间：<span></span></p>
            </div>
        </div>
        <div style="margin-top:30px;">
            <p style="  font-size: 14px;    background: #fff;  height: 50px;line-height: 50px;padding-left: 20px;border-bottom: 1px solid #e6e6e6;font-weight:600;color:#676a6c">缴费历史</p>
            <el-form ref="form" :model="params" style="display: flex;width: 100%;padding: 10px 15px;background: #fff;">
                <el-form-item style="width:70%">
                    <el-col :span="11">
                        <el-date-picker type="date" placeholder="请选择开始日期" v-model="params.date1" style="width: 100%;"></el-date-picker>
                    </el-col>
                    <el-col :span="11" style="margin-left:50px">
                        <el-time-picker placeholder="请选择结束日期" v-model="params.date2" style="width: 100%;"></el-time-picker>
                    </el-col>
                </el-form-item>
                <div style="    margin-top: 5px;    margin-left: 100px;">
                    <el-button style="margin-right:40px" @click="onSearch" icon="el-icon-search" type="success">马上查询</el-button>
                </div>
                </el-form>
            <el-table
            :data="tableData"
            style="width: 100%;padding-top: 15px;">
            <el-table-column
                prop="date"
                label="缴费ID"
                >
            </el-table-column>
            <el-table-column
                prop="name"
                label="周期">
            </el-table-column>
            <el-table-column
                prop="address"
                label="应收金额">
            </el-table-column>
            <el-table-column
                prop="address"
                label="实收金额">
            </el-table-column>
            <el-table-column
                prop="address"
                label="打折率">
            </el-table-column>
            <el-table-column
                prop="address"
                label="备注">
            </el-table-column>
            <el-table-column
                prop="address"
                label="缴费时间">
            </el-table-column>
            </el-table>
        </div>
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
        title="选择房屋"
        :visible.sync="dialogVis"
        width="60%">
          <el-button style="float:right;margin-right: 70px;    margin-right: 70px;margin-left:0" type="success">查询</el-button>
          <el-form ref="form" style="display: flex;margin-top: 0px;" :model="params" label-width="80px">
            <el-form-item style="    margin-top: -6px;">
                <el-input v-model="params.name" placeholder="输入小区楼编号，必填"></el-input>
            </el-form-item>
            <el-form-item style="    margin-top: -6px;">
                <el-input v-model="params.name" placeholder="输入房屋编号"></el-input>
            </el-form-item>
          </el-form>
          <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="房屋ID"
        width="150">
      </el-table-column>
      <el-table-column
        prop="name"
        label="房屋编号"
        width="100">
      </el-table-column>
      <el-table-column
        prop="address"
        label="单元">
      </el-table-column>
      <el-table-column
        prop="address"
        label="楼层">
      </el-table-column>
      <el-table-column
        prop="address"
        label="房间数">
      </el-table-column>
      <el-table-column
        prop="address"
        label="户型">
      </el-table-column>
      <el-table-column
        prop="address"
        label="创建员工">
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
      dialogVis: false,
      tableData: [],
      total: 0,
      params: {
        page: 1,
        row: 10,
        name: '',
        date1: '',
        date2: ''
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
</style>
