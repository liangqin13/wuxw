<template>
  <div style="margin-top:60px">
      <div style="padding: 20px 20px 40px;background: #f3f3f4; ">
      <el-button style="padding: 8px 67px;" type="primary" @click="add">添加权限组</el-button>
      <p style="color:#676a6c;font-size:12px;margin:5px 0px 8px;    font-weight: 700;line-height: 38px;">权限组</p>
      <el-tabs style="    padding-top: 20px;" v-model="editableTabsValue" :tab-position="tabPosition" closable @tab-remove="removeTab">
        <el-tab-pane
          v-for="(item) in editableTabs"
          :key="item.name"
          :label="item.title"
          :name="item.name"
        >
        <div>
          <span style="    color: #676a6c;font-size: 24px;margin-left: 20px;">物业员工默认组</span>
         <el-button style="float:right;margin-right: 70px;    margin-right: 70px;margin-left:0" type="success">查询</el-button>
          <el-form ref="form" style="float:right;margin-top: 0px;" :model="params" label-width="80px">
            <el-form-item style="    margin-top: -6px;">
                <el-input v-model="params.name" placeholder="输入小区名称"></el-input>
            </el-form-item>
          </el-form>
        </div>
          <el-table
      :data="tableData"
      style="width: 80%">
      <el-table-column
        prop="date"
        label="小区ID"
        width="130">
      </el-table-column>
      <el-table-column
        prop="name"
        label="名称"
        width="50">
      </el-table-column>
      <el-table-column
        prop="address"
        label="联系方式">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地标">
      </el-table-column>
      <el-table-column
        prop="address"
        label="城市编码">
      </el-table-column>
      <el-table-column
        prop="address"
        label="操作">
        <template slot-scope="scope">
                        <el-button @click="handleClick(scope.row)" type="text" size="small">申请入驻</el-button>
                    </template>
      </el-table-column>
    </el-table>
        </el-tab-pane>
      </el-tabs>
      </div>
        <div class="footer" style="padding: 10px 20px;background:#fff;border-top: 1px solid #e7eaec;    border-bottom: 1px solid #e7e7e7;">
            <span>Copyright</span>
          <div style="float:right;">HC小区管理系统</div>
        </div>
        <el-dialog
        title="添加权限组"
        :visible.sync="dialogVisible"
        width="60%">
        <el-form ref="form" :label-position="labelPosition" label-width="120px" :model="params" style="width: 100%;padding: 10px 15px;background: #fff;">
          <el-form-item label="权限组名称">
            <el-input v-model="params.name" placeholder="必填，请填写员工名称"></el-input>
          </el-form-item>
          <el-form-item label="权限组描述">
            <el-input v-model="params.name" placeholder="必填，请填写员工描述"></el-input>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="addTab(editableTabsValue)">保存</el-button>
        </span>
      </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      labelPosition: 'left',
      dialogVisible: false,
      editableTabsValue: '2',
      editableTabs: [{
        title: '物业员工默认组',
        name: '1'
      }, {
        title: '物业管理员权限组',
        name: '2'
      }],
      tabIndex: 2,
      tabPosition: 'left',
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
    },
    add() {
      this.dialogVisible = true
    },
    addTab(targetName) {
      this.dialogVisible = false
      let newTabName = ++this.tabIndex + ''
      this.editableTabs.push({
        title: 'New Tab',
        name: newTabName,
        content: 'New Tab content'
      })
      this.editableTabsValue = newTabName
    },
    removeTab(targetName) {
      let tabs = this.editableTabs
      let activeName = this.editableTabsValue
      if (activeName === targetName) {
        tabs.forEach((tab, index) => {
          if (tab.name === targetName) {
            let nextTab = tabs[index + 1] || tabs[index - 1]
            if (nextTab) {
              activeName = nextTab.name
            }
          }
        })
      }
      this.editableTabsValue = activeName
      this.editableTabs = tabs.filter(tab => tab.name !== targetName)
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
