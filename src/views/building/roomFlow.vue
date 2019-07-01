<template>
<div style="margin-top:60px">
    <div style="padding: 20px 20px 40px;background: #f3f3f4; ">
        <div style="background:#fff;padding: 15px 20px 15px 15px;    border-top: 2px solid #e6e6e6;border-bottom: 1px solid #e6e6e6;">
            <span style="font-size: 14px;font-weight:600;color:#676a6c">小区楼信息</span>
            <el-button style="float:right;margin-left:20px" type="success" @click="dialogVis = true" icon="el-icon-plus">添加房屋</el-button>
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
        <div style="margin-top:30px;">
            <p style="      background: #fff;  height: 50px;line-height: 50px;padding-left: 20px;border-bottom: 1px solid #e6e6e6;">房屋信息</p>
            <el-form ref="form" :model="params" style="display: flex;width: 100%;padding: 10px 15px;background: #fff;">
                <el-form-item style="    margin-right: 30px;">
                    <el-select v-model="params.region" placeholder="请选择单元">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item style="    margin-right: 30px;">
                    <el-select v-model="params.region" placeholder="请选择状态">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item style="    margin-right: 30px;">
                    <el-input v-model="params.name" placeholder="请填写房屋编号"></el-input>
                </el-form-item>
                <div style="    margin-top: 5px;">
                    <el-button style="margin-right:40px" @click="onSearch" icon="el-icon-search" type="success">马上查询</el-button>
                </div>
                </el-form>
            <el-table
            :data="tableData"
            style="width: 100%;padding-top: 15px;">
            <el-table-column
                prop="date"
                label="房屋ID"
                >
            </el-table-column>
            <el-table-column
                prop="name"
                label="房屋编号">
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
                label="建筑面积">
            </el-table-column>
            <el-table-column
                prop="address"
                label="单价">
            </el-table-column>
            <el-table-column
                prop="address"
                label="房屋状态">
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
      <!-- 添加房屋 -->
      <el-dialog
        title="添加小区楼"
        :visible.sync="dialogVis"
        width="60%">
        <el-form ref="form" :label-position="labelPosition" label-width="120px" :model="params" style="width: 100%;padding: 10px 15px;background: #fff;">
          <el-form-item label="房屋编号">
            <el-input v-model="params.name" placeholder="必填，请填写房屋编号"></el-input>
          </el-form-item>
          <el-form-item label="房屋楼层">
            <el-input v-model="params.name" placeholder="必填，请填写房屋楼层"></el-input>
          </el-form-item>
          <el-form-item label="房屋单元">
            <el-select v-model="params.region" placeholder="必填，请选择单元">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="房间数">
            <el-input v-model="params.name" placeholder="必填，请填写房间数"></el-input>
          </el-form-item>
          <el-form-item label="房屋户型">
            <el-select v-model="params.region" placeholder="必填，请填写房屋户型">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
           <el-form-item label="建筑面积">
            <el-input v-model="params.name" placeholder="必填，请填写房屋建筑面积"></el-input>
          </el-form-item>
           <el-form-item label="房屋单价">
            <el-input v-model="params.name" placeholder="必填，请填写房屋每平米单价"></el-input>
          </el-form-item>
          <el-form-item label="房屋状态">
            <el-select v-model="params.region" placeholder="必填，请选择房屋状态">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="备注">
            <el-input v-model="params.name" placeholder="请填写备注"></el-input>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVis = false">取 消</el-button>
          <el-button type="primary" @click="dialogVis = false">保存</el-button>
        </span>
      </el-dialog>
</div>
</template>
<script>
export default {
  data() {
    return {
      labelPosition: 'left',
      dialogVis: false,
      dialogVisible: false,
      tableData: [],
      total: 0,
      params: {
        page: 1,
        row: 10,
        name: '',
        region: ''
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
</style>
