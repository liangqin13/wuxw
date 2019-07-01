<template>
<div style="margin-top:60px">
    <div style="padding: 20px 20px 40px;background: #f3f3f4; ">
        <div style="background:#fff;padding: 15px 20px 15px 15px;    border-top: 2px solid #e6e6e6;border-bottom: 1px solid #e6e6e6;">
            <span style="font-size: 14px;">停车位信息</span>
            <el-button style="float:right" type="success" icon="el-icon-plus" @click="dialogVisible = true">添加车位</el-button>
            <el-button style="float:right;margin-right: 70px;    margin-right: 70px;margin-left:0" type="success" icon="el-icon-search">马上查询</el-button>
            <el-form ref="form" style="float:right;margin-top: 0px;" :model="params" label-width="80px">
                <el-form-item style="    margin-top: -6px;">
                    <el-input v-model="params.name"></el-input>
                </el-form-item>
            </el-form>
        </div>
        <el-table
      :data="tableData"
      style="width: 100%;padding-top:15px">
      <el-table-column
        prop="date"
        label="车位ID"
        width="210">
      </el-table-column>
      <el-table-column
        prop="name"
        label="车位编码"
        width="150">
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
        title="添加停车位"
        :visible.sync="dialogVisible"
        width="60%">
        <el-form ref="form" :label-position="labelPosition" label-width="120px" :model="params" style="width: 100%;padding: 10px 15px;background: #fff;">
          <el-form-item label="车位编码" style="margin-bottom:20px;">
            <el-input v-model="params.name" placeholder="必填，请填写车位编码"></el-input>
          </el-form-item>
          <el-form-item label="车位类型" style="margin-bottom:20px;">
            <el-select v-model="params.region" placeholder="必填，请选择车位类型">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="面积" style="margin-bottom:20px;">
            <el-input v-model="params.name" placeholder="必填，请填写面积，如30.09"></el-input>
          </el-form-item>
          <el-form-item label="备注" style="margin-bottom:20px;">
            <el-input v-model="params.name" placeholder="可填，请填写备注"></el-input>
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
        row: 10,
        name: ''
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
.el-form-item{
    margin-bottom: 0px;
}
.el-select{
    width: 100%;
}
</style>
