<template>
    <div style="margin-top:62px;">
        <div style="    padding: 20px 10px 179px;    background: #f3f3f4; position: relative;   font-size: 13px;color: #676a6c;">
          <div style="display: flex;    margin-bottom: 25px;">
            <div style=" margin-right: 15px;margin-left: 15px; width: 25%;background: #fff;    border-top: 2px solid #e7eaec;color: #676a6c;">
              <div style="    padding: 15px 90px 8px 15px;border-bottom: 1px solid #e6e6e6">
                <h5 class="tel">业主</h5>
                <span class="ter">总数</span>
              </div>
              <div style="padding: 15px 20px 20px 20px;">
                <h1 style="    font-size: 30px;font-weight:100">11</h1>
                <span style="font-size:13px">未迁入</span>
                <div style="    float: right;color: #1c84c6">
                  10<i class="el-icon-lightning"></i>
                </div>
              </div>
            </div>
            <div style="  margin-right: 15px;margin-left: 15px;width: 25%;background: #fff;    border-top: 2px solid #e7eaec;color: #676a6c;">
              <div style="    padding: 15px 90px 8px 15px;border-bottom: 1px solid #e6e6e6">
                <h5 class="tel">房屋</h5>
                <span class="ter" style="background:#23c6c8">总数</span>
              </div>
              <div style="padding: 15px 20px 20px 20px;">
                <h1 style="    font-size: 30px;font-weight:100">9</h1>
                <span style="font-size:13px">空闲</span>
                <div style="    float: right;color: #23c6c8">
                  3<i class="el-icon-top"></i>
                </div>
              </div>
            </div>
            <div style="  margin-right: 15px;margin-left: 15px;width: 25%;background: #fff;    border-top: 2px solid #e7eaec;color: #676a6c;">
              <div style="    padding: 15px 90px 8px 15px;border-bottom: 1px solid #e6e6e6">
                <h5 class="tel">停车位</h5>
                <span class="ter" style="background:#23c6c8">总数</span>
              </div>
              <div style="padding: 15px 20px 20px 20px;">
                <h1 style="    font-size: 30px;font-weight:100">5</h1>
                <span style="font-size:13px">空闲</span>
                <div style="    float: right;color: #23c6c8">
                  3<i class="el-icon-top"></i>
                </div>
              </div>
            </div>
            <div style=" margin-right: 15px;margin-left: 15px;width: 25%;background: #fff;    border-top: 2px solid #e7eaec;color: #676a6c;">
              <div style="    padding: 15px 90px 8px 15px;border-bottom: 1px solid #e6e6e6">
                <h5 class="tel">商铺</h5>
                <span class="ter" style="    background-color: #ed5565;">总数</span>
              </div>
              <div style="padding: 15px 20px 20px 20px;">
                <h1 style="    font-size: 30px;font-weight:100">0</h1>
                <span style="font-size:13px">空闲</span>
                <div style="    float: right;color: #ed5565">
                  0<i class="el-icon-bottom"></i>
                </div>
              </div>
            </div>
          </div>
          <div style="background:#fff">
            <el-tabs v-model="active" type="card" @tab-click="cutover" style="padding: 20px;">
              <p style="    height: 41px;border-bottom: 1px solid #e5e5e5;">欠费信息</p>
              <el-tab-pane :key="item.active" v-for="item in tabs" :label="item.title" :name="item.active">
                <el-table :data="tableData" v-loading="loading" size="small" >
                  <el-table-column prop="loginName" width="250" label="费用ID"/>
                  <el-table-column prop="basicInformation.nameInfo.name" width="95" label="业主名称"/>
                  <el-table-column prop="role.name" width="120" label="联系电话"/>
                  <el-table-column prop="userStatus" width="120" label="房屋编号"/>
                  <el-table-column prop="operator.dateCreated" width="250" label="费用开始时间"/>
                  <el-table-column prop="operator.dateCreated" width="250" label="费用开始时间"/>
                </el-table>
                <div class="pagination-container" style="text-align: right;">
                  <el-pagination background layout="prev, pager, next" :total="total" :current-page="params.page" :page-size="params.row"
                                @current-change="handleCurrentChange"
                                @prev-click="handleCurrentChange"
                                @next-click="handleCurrentChange"></el-pagination>
                </div>
              </el-tab-pane>
            </el-tabs>
          </div>
        </div>
        <div class="footer" style="padding: 10px 20px;background:#fff;border-top: 1px solid #e7eaec;    border-bottom: 1px solid #e7e7e7;">
            <span>Copyright</span>
            <div style="float:right;">HC小区管理系统</div>
        </div>
    </div>
</template>
<script>
import financeApi from "@/api/finance/financeApi"
import utils from "@/utils/index"
export default {
  data() {
    return {
      activeName2: 'first',
      params: {
        startTime: null,
        endTime: null
      },
      active: 'user',
      loading: false,
      tableData: [],
      total: 0,
      result: {},
      tabs: [
        {
          title: '物业费',
          active: 'user'
        },
        {
          title: '停车费',
          active: 'travel'
        }
      ]
    }
  },
  methods: {
    cutover(tab) {
      this.params.page = 1
      this.tableData = []
      for (var index = 0; index < this.tabs.length; index++) {
        if (this.tabs[index].title === tab.label) {
          this.params.subType = this.tabs[index].active
          // this.getData()
        }
      }
    },
    // 点击分页
    handleCurrentChange(val) {
      this.params.page = val
      this.getData()
    },
    statistics() {
      financeApi.statistics(this.params).then((data) => {
        if (data.success) {
          this.result = data.data
        }
      })
    },
    changeParams(flag) {
      this.params = {
        startTime: null,
        endTime: null
      }
      if (flag !== 0) {
        this.params.startTime = utils.dateAddDay(new Date(), 1)
        this.params.endTime = utils.dateAddDay(new Date(), flag)
      }
      this.statistics()
    }
  },
  mounted() {
    this.statistics()
  }
}
</script>
<style scoped>
.tel{
  display: inline-block;
    font-size: 14px;
    margin: 0 0 7px;
    padding: 0;
    text-overflow: ellipsis;
    float: none;
}
.ter{
  background-color: #1c84c6;
  color: #FFFFFF;
  font-size: 10px;
  font-weight: 600;
  padding: 3px 8px;
      border-radius: 4px;
      float:right
}
</style>
