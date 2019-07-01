<template>
<div style="margin-top:60px">
    <div style="padding: 20px 20px 40px;background: #f3f3f4; ">
        <div>
            <p style="      background: #fff;  height: 50px;line-height: 50px;padding-left: 20px;border-bottom: 1px solid #e6e6e6;font-size: 14px;font-weight:600;color:#676a6c">车辆信息</p>
            <el-form ref="form" :label-position="labelPosition" label-width="200px" :model="params" style="width: 100%;padding: 10px 15px;background: #fff;">
                <el-form-item label="车牌号">
                    <el-input v-model="params.name" placeholder="必填，请填写车牌号"></el-input>
                </el-form-item>
                <el-form-item label="车品牌">
                    <el-input v-model="params.name" placeholder="必填，请填写车品牌，如 宝马X6"></el-input>
                </el-form-item>
                <el-form-item label="车类型">
                    <el-select v-model="params.region" placeholder="必填，请选择类型">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="颜色">
                    <el-input v-model="params.name" placeholder="必填，请填写车颜色，如白色"></el-input>
                </el-form-item>
                <el-form-item label="备注">
                    <el-input type="textarea" placeholder="请填写备注信息"  v-model="params.desc"></el-input>
                </el-form-item>
            </el-form>
        </div>
        <div style="margin-top:30px;background:#fff;padding: 15px 20px 15px 15px;    border-top: 2px solid #e6e6e6;border-bottom: 1px solid #e6e6e6;">
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
            <span style="font-size: 14px;font-weight:600;color:#676a6c">停车位信息</span>
            <el-button style="float:right" type="success" icon="el-icon-search" @click="dialogVis = true">选择车位</el-button>
        </div>
        <div style="background:#fff;    padding: 20px 20px 50px 20px;    display: flex;flex-wrap: wrap;">
            <div style="width:30%">
                <p style="color:#676a6c;font-size: 13px;">车位ID：<span></span></p>
            </div>
            <div style="width:30%;">
                <p style="color:#676a6c;font-size: 13px;">编号：<span></span></p>
            </div>
            <div style="width:30%">
                <p style="color:#676a6c;font-size: 13px;">类型：<span></span></p>
            </div>
            <div style="width:30%;margin-top:30px">
                <p style="color:#676a6c;font-size: 13px;">车位状态：<span></span></p>
            </div>
            <div style="width:30%;margin-top:30px">
                <p style="color:#676a6c;font-size: 13px;">面积：<span></span></p>
            </div>
            <div style="width:30%;margin-top:30px">
                <p style="color:#676a6c;font-size: 13px;">备注：<span></span></p>
            </div>
        </div>
        <div style="margin-top:30px;">
            <p style="      background: #fff;  height: 50px;line-height: 50px;padding-left: 20px;border-bottom: 1px solid #e6e6e6;font-size: 14px;font-weight:600;color:#676a6c">收费信息</p>
            <el-form ref="form" :label-position="labelPosition" label-width="200px" :model="params" style="width: 100%;padding: 10px 15px;background: #fff;">
                <el-form-item label="缴费周期">
                    <el-select v-model="params.region" placeholder="必填，请选择缴费周期">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="应收费用">
                    <el-input v-model="params.name"></el-input>
                </el-form-item>
                <el-form-item label="实收费用">
                    <el-input v-model="params.name"></el-input>
                </el-form-item>
            </el-form>
            <div style="    text-align: right;margin-top: 30px;">
                <el-button type="success" icon="el-icon-check">我要出租</el-button>
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
      <!-- 选择车位 -->
      <el-dialog
        title="选择停车位"
        :visible.sync="dialogVis"
        width="60%">
          <el-button style="float:right;margin-right: 70px;    margin-right: 70px;margin-left:0" type="success">查询</el-button>
          <el-form ref="form" style="float:right;margin-top: 0px;" :model="params" label-width="80px">
            <el-form-item style="    margin-top: -6px;">
                <el-input v-model="params.name" placeholder="输入停车位编号"></el-input>
            </el-form-item>
          </el-form>
          <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="车位ID"
        width="150">
      </el-table-column>
      <el-table-column
        prop="name"
        label="车位编码"
        width="100">
      </el-table-column>
      <el-table-column
        prop="address"
        label="车位类型">
      </el-table-column>
      <el-table-column
        prop="address"
        label="车位状态">
      </el-table-column>
      <el-table-column
        prop="address"
        label="面积">
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
      dialogVisible: false,
      dialogVis: false,
      labelPosition: 'left',
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
