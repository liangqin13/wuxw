<template>
<div>
  <page title="企业名录" :titleInCenter="false" :breadcrumb="breadcrumbList">
    <template slot="function">
      <div class="function-container">
        <span style="color:#EF8E4A;cursor:pointer" @click="downloadExcel">【导出Excel】</span>
        <el-button type="primary" icon="el-icon-plus" size="mini" @click="addPartyMember(0)">添加企业</el-button>
      </div>
    </template>
    <template slot="body">
      <div class="table-container">
        <div class="table-flex" style="justify-content: space-between;">
          <div class="table-flex" style="width:80%">
            <span>名称：</span>
            <el-input
              placeholder="请输入企业名称"
              v-model="name"
              style="width:150px"
              size="mini">
            </el-input>
            <span style="padding-left:10px">位置：</span>
            <el-select v-model="addressId" placeholder="请选择" size="mini" style="width:120px">
              <el-option
                v-for="item in buildingAddressList"
                :key="item.id"
                :label="item.name"
                :value="item.id">
              </el-option>
            </el-select>
            <span style="padding-left:10px">性质：</span>
            <el-select v-model="property" placeholder="请选择" size="mini" style="width:120px">
              <el-option
                v-for="item in propertyList"
                :key="item.dicKey"
                :label="item.name"
                :value="item.dicKey">
              </el-option>
            </el-select>
            <span style="padding-left:10px">规模：</span>
            <el-select v-model="scale" placeholder="请选择" size="small" style="width:120px">
              <el-option
                v-for="item in scaleTagsList"
                :key="item.dicKey"
                :label="item.name"
                :value="item.dicKey">
              </el-option>
            </el-select>
            <span style="padding-left:10px">类型：</span>
            <el-select v-model="type" placeholder="请选择" size="small" style="width:120px">
              <el-option
                v-for="item in merchantTypeList"
                :key="item.dicKey"
                :label="item.name"
                :value="item.dicKey">
              </el-option>
            </el-select>
          </div>
          <div class="table-flex" style="width:20%;justify-content: flex-end;">
            <span style="cursor:pointer" @click="empty">【清空搜索】</span>
            <el-button type="warning" size="mini" @click="search">确认搜索</el-button>
          </div>
        </div>
        <el-table
          :data="tableData"
          :stripe="true"
          v-loading="loading"
          size="small"
          border>
          <el-table-column
            fixed
            type="index"
            align="center"
            width="60"
            label="序号">
            <template slot-scope="scope">
              <span>{{scope.$index + (currentPage - 1) * pageSize + 1}}</span>
            </template>
          </el-table-column>
          <el-table-column
            prop="name"
            width="140"
            fixed
            label="企业名">
          </el-table-column>
          <el-table-column
            prop="buildingName"
            width="100"
            fixed
            label="企业位置">
          </el-table-column>
          <el-table-column
            prop="dicTypeStr"
            width="140"
            label="企业类型">
          </el-table-column>
          <el-table-column
            prop="dicPropertyStr"
            label="企业性质">
          </el-table-column>
          <el-table-column
            prop="scaleName"
            label="企业规模"
            width="100">
          </el-table-column>
          <el-table-column
            prop="area"
            label="建筑规模(平方)"
            width="150">
          </el-table-column>
          <el-table-column
            prop="legalPerson"
            label="法人"
            width="100">
          </el-table-column>
          <el-table-column
            prop="manager"
            label="负责人"
            width="100">
          </el-table-column>
          <el-table-column
            prop="phone"
            label="联系方式"
            width="120">
          </el-table-column>
          <el-table-column
            prop="address"
            width="200"
            label="地址">
          </el-table-column>
          <!-- <el-table-column
            prop="gis"
            align="center"
            label="GIS信息"
            width="80">
            <template slot-scope="scope">
              <span v-if="scope.row.gis">有</span>
              <span v-else>无</span>
            </template>
          </el-table-column> -->
          <el-table-column
            prop="createdTime"
            label="登记日期"
            width="160">
          </el-table-column>
          <el-table-column
            prop="disability"
            align="center"
            width="120"
            label="操作">
            <template slot-scope="scope">
              <el-button @click="addPartyMember('1', scope.row)" type="text" size="small">修改</el-button>
              <el-button @click="deleteOption(scope.row.id)" type="text" size="small">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
        <div class="pagination-container">
          <el-pagination background
            layout="prev, pager, next"
            :total="total"
            :page-size="pageSize"
            :current- ="currentPage"
            @current-change="currentChange">
          </el-pagination>
        </div>
      </div>
      <el-dialog
        :title="optionDialogVisible"
        :visible.sync="dialogVisible"
        @close="closeVisible"
        center
        width="60%">
        <el-form ref="form" :model="form" :rules="rules" style="display:flex" size="mini" label-width="80px">
          <div style="width:75%;">
            <div style="display:flex;padding-bottom: 16px;">
              <address-selector ref="addressSelector" :width="395" :titleLeftPadding="10" title="企业位置" :titleWidth="280" @onChange="onChanged"></address-selector>
            </div>
            <div style="display:flex;">
              <el-form-item label="企业名称" prop="name">
                <el-input style="width:150px" placeholder="请输入内容" size="small" v-model="form.name"></el-input>
              </el-form-item>
              <el-form-item label="企业类型" prop="dicType" style="margin-left:23px">
                <el-select v-model="form.dicType" placeholder="请选择" size="small" style="width:150px">
                  <el-option
                    v-for="item in merchantTypeList"
                    :key="item.dicKey"
                    :label="item.name"
                    :value="item.dicKey">
                  </el-option>
                </el-select>
              </el-form-item>
            </div>
            <div style="display:flex">
              <el-form-item label="企业规模" prop="scale" >
                <el-select v-model="form.scale" placeholder="请选择" size="small" style="width:150px">
                  <el-option
                    v-for="item in scaleTagsList"
                    :key="item.dicKey"
                    :label="item.name"
                    :value="item.dicKey">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="企业法人" prop="legalPerson"  style="margin-left:23px">
                <el-input style="width:150px" placeholder="请输入内容" size="small" v-model="form.legalPerson"></el-input>
              </el-form-item>
            </div>
            <div style="display:flex">
              <el-form-item label="企业性质" prop="dicProperty">
                <el-select v-model="form.dicProperty" placeholder="请选择" size="mini" style="width:150px">
                  <el-option
                    v-for="item in propertyList"
                    :key="item.dicKey"
                    :label="item.name"
                    :value="item.dicKey">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="负责人" prop="manager" style="margin-left:23px">
                <el-input style="width:150px" placeholder="请输入内容" size="small" v-model="form.manager"></el-input>
              </el-form-item>
            </div>
            <div style="display:flex;">
              <el-form-item label="联系方式" prop="phone" style="width:66%">
                <el-input style="width:150px" placeholder="请输入内容" size="small" v-model="form.phone"></el-input>
              </el-form-item>
              <el-button style="margin-top:-40px" type="text" size="mini" @click="sameUp">同法人</el-button>
            </div>
            <div style="display:flex">
              <el-form-item label="建筑规模" prop="area">
                <el-input-number style="width:150px" v-model="form.area" size="mini" :min="0" :max="10000000" label="描述文字"></el-input-number>
              </el-form-item>
              <el-form-item label="地址" prop="address" style="margin-left:23px">
                <el-input style="width:150px" placeholder="请输入内容" size="small" v-model="form.address"></el-input>
              </el-form-item>
            </div>
            <el-form-item label="备注">
              <el-input
                type="textarea"
                style="width:97%"
                :rows="6"
                placeholder="请输入内容"
                v-model="form.remark">
              </el-input>
            </el-form-item>
          </div>
          <div class="table-flex" style="width:40%;justify-content: center;align-items: flex-start;">
            <my-upload
              ref="honorUpload"
              :show-upload-list="false"
              :format="['jpg','jpeg','png']"
              :max-size="2048"
              :on-format-error="formatError"
              :on-exceeded-size="fileSizeError"
              :on-success="uploadSuccess"
              type="drag"
              :token="uploadToken"
              style="display: inline-block;width:175px;height:175px">
              <div @click="getToken" v-loading="loadings" style="padding: 40% 0;height:175px" v-if="form['photoList'] === ''">
                <i class="el-icon-upload" size="52" style="color: #3399ff"></i>
                <p>点击这里上传</p>
              </div>
              <img ref="courseImage" @click="getToken" v-loading="loadings" style="width:175px;height:175px;display:block;" v-else :src="form['photoList']">
            </my-upload>
          </div>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button type="primary" @click="addPublicResource('form')" size="mini">保存</el-button>
        </span>
      </el-dialog>
      <el-dialog
        title="确定删除该条数据"
        :visible.sync="deleteDialogVisible"
        center
        width="30%">
        <div class="table-flex" style="width:100%;justify-content: center;margin:50px 0 10px 0">
          <el-button type="primary" size="mini" @click="deleteCar">确定</el-button>
          <el-button size="mini" @click="deleteDialog('form')">取消</el-button>
        </div>
      </el-dialog>
    </template>
  </page>
</div>
</template>
<script>
import Upload from '@/components/upload'
import page from '@/components/content-page'
import companyApi from '@/api/companyApi'
import AddressSelector from '@/components/addressSelector'
import qiniuApi from '@/api/qiniuApi'
import downloadApi from '@/api/downloadApi'
export default {
  data() {
    return {
      loading: true,
      loadings: false,
      // 选择的地址
      selectedAddressList: [],
      addressId: '',
      // 企业位置列表
      buildingAddressList: [],
      // 上面的面包屑导航数组
      breadcrumbList: [
        { path: '/', name: '首页' },
        { path: '/', name: '民情数据' },
        { path: '', name: '企业名录' }
      ],
      scaleTagsList: [],
      propertyList: [],
      merchantTypeList: [],
      tableData: [],
      dialogVisible: false,
      optionDialogVisible: '添加企业',
      deleteDialogVisible: false,
      property: '',
      name: '',
      scale: '',
      type: '',
      total: 0,
      currentPage: 1,
      pageSize: 10,
      form: {
        address: '', // (string, optional): 资源地址 ,
        createdTime: '', // (string, optional),
        deleted: '', // (boolean, optional): 删除状态 ,
        dicProperty: '', // (string, optional): 性质：私营，国有，集体，个体户 ,
        dicType: '', // (string, optional): 周边资源类型词典：超市，餐馆，银行 ,
        employee: '', // (integer, optional): 工作人员数量 ,
        // gis: '', // (string, optional): gis信息 ,
        area: 0,
        id: '', // (string, optional),
        legalPerson: '', // (string, optional): 法人 ,
        manager: '', // (string, optional): 负责人/负责单位 ,
        maxCustomer: '', // (integer, optional): 最大服务人数，可服务人数 ,
        name: '', // (string, optional): 周边资源名 ,
        operator: '', // (string, optional): 操作人员id ,
        phone: '', // (string, optional): 联系方式 ,
        photoList: '', // (string, optional): 企业照片列表 ,
        remark: '', // (string, optional): 备注 ,
        scale: '', // (string, optional): 规模人数 ,
        tenantId: '', // (string, optional): 租户id，区分租户子账号 ,
        updatedTime: '', // (string, optional),
        version: '' // (integer, optional): 乐观锁
      },
      rules: {
        name: [
          { required: true, message: '请输入企业名称', trigger: 'blur' }
        ],
        dicType: [
          { required: true, message: '请选择类型', trigger: 'blur' }
        ],
        dicProperty: [
          { required: true, message: '请选择性质', trigger: 'blur' }
        ],
        legalPerson: [
          { required: true, message: '请输入企业法人', trigger: 'blur' }
        ],
        scale: [
          { required: true, message: '请选择规模人数', trigger: 'blur' }
        ],
        maxCustomer: [
          { required: true, message: '请输入最大服务人数', trigger: 'blur' }
        ],
        phone: [
          { required: true, message: '请输入联系方式', trigger: 'blur' }
        ],
        address: [
          { required: true, message: '请输入地址', trigger: 'blur' }
        ],
        addressId: [
          { required: true, message: '请输入企业位置', trigger: 'blur' }
        ],
        manager: [
          { required: true, message: '请输入负责人', trigger: 'change' }
        ]
      },
      uploadToken: ''
    }
  },
  methods: {
    onChanged(selectItems) {
      if (selectItems.length > 1) {
        this.$notify({
          title: '无效地址',
          message: '请选择正确的商用建筑地址',
          offset: 100,
          type: 'error'
        })
      }
      this.addressId = selectItems[0]
    },
    closeVisible () {
      this.initForm()
      this.$refs['form'].resetFields()
    },
    getToken () {
      this.loadings = true
      this.getBannerQiniuToken()
      this.loadings = false
    },
    fileSizeError (file) {
      this.$Message.error('您上传的图片超过2M限制!')
    },
    formatError (file) {
      this.$Message.error('您上传的文件格式有误!')
    },
    uploadSuccess(res, file) {
      this.form.photoList = `http://img.yidazx.com/${res.key}`
    },
    // 导出excel
    downloadExcel() {
      downloadApi.downloadExcel(`api/company/${this.$store.state.user.tenantId}/excel?type=${this.type}&name=${this.name}&property=${this.property}&scale=${this.scale}&addressId=${this.addressId}`, null)
    },
    // 确认删除
    deleteCar () {
      companyApi.deleteCompany(this.form.id).then((data) => {
        if (data.code === 200) {
          this.deleteDialogVisible = false
          this.getCompanyList()
          this.$notify({
            title: '删除成功',
            offset: 100,
            type: 'success'
          })
        }
      })
    },
    // 跳出删除弹出框
    deleteOption (id) {
      this.form.id = id
      this.deleteDialogVisible = true
    },
    // 清空
    empty () {
      this.name = ''
      this.property = ''
      this.addressId = ''
      this.scale = ''
      this.type = ''
      this.getCompanyList()
    },
    // 搜索
    search () {
      this.currentPage = 1
      this.getCompanyList()
    },
    // 添加生活圈信息
    addPublicResource (form) {
      this.$refs['form'].validate((valid) => {
        if (valid) {
          var maxCustomer = parseInt(this.form.maxCustomer)
          var employee = parseInt(this.form.employee)
          var object = {
            'addressId': this.addressId,
            'address': this.form.address, // (string, optional): 资源地址 ,
            'dicProperty': this.form.dicProperty, // (string, optional): 性质：私营，国有，集体，个体户 ,
            'dicType': this.form.dicType, // (string, optional): 周边资源类型词典：超市，餐馆，银行 ,
            'employee': employee, // (integer, optional): 工作人员数量 ,
            // 'gis': this.form.gis, // (string, optional): gis信息 ,
            'legalPerson': this.form.legalPerson, // (string, optional): 法人 ,
            'area': this.form.area, // (string, optional): 企业规模(平方) ,
            'manager': this.form.manager, // (string, optional): 负责人/负责单位 ,
            'maxCustomer': maxCustomer, // (integer, optional): 最大服务人数，可服务人数 ,
            'name': this.form.name, // (string, optional): 周边资源名称 ,
            'operator': this.form.operator, // (string, optional): 操作人员id ,
            'phone': this.form.phone, // (string, optional): 联系方式 ,
            'photoList': this.form.photoList, // (string, optional): 企业照片列表 ,
            'remark': this.form.remark, // (string, optional): 备注 ,
            'scale': this.form.scale, // (string, optional): 规模人数 ,
            'tenantId': this.form.tenantId, // (string, optional): 租户id，区分租户子账号 ,
            'startTime': '2018-09-09 00:00:00', // (string, optional): 租户id，区分租户子账号 ,
            'endTime': '2018-09-09 00:00:00' // (string, optional): 租户id，区分租户子账号 ,
          }
          if (this.optionDialogVisible === '添加企业') {
            companyApi.addCompany(object).then((data) => {
              if (data.code === 200) {
                this.dialogVisible = false
                this.$notify({
                  title: '操作成功',
                  offset: 100,
                  type: 'success'
                })
                this.getCompanyList()
              }
            })
          } else {
            object['id'] = this.form.id
            companyApi.updateCompany(object).then((data) => {
              if (data.code === 200) {
                this.dialogVisible = false
                this.$notify({
                  title: '修改成功',
                  offset: 100,
                  type: 'success'
                })
                this.getCompanyList()
              }
            })
          }
        } else {
          this.$notify.error({
            title: '信息填写有误',
            offset: 100,
            type: 'error'
          })
        }
      })
    },
    // 分页
    currentChange (page) {
      this.currentPage = page
      this.getCompanyList()
    },
    // 同法人
    sameUp () {
      this.form.manager = this.form.legalPerson
    },
    // 获取企业列表
    getCompanyList () {
      companyApi.getCompanyList(this.addressId, this.name, this.property, this.scale, this.type, this.currentPage, this.pageSize).then((data) => {
        if (data.code === 200) {
          this.tableData = data.data
          this.total = data.pagination.totalItem
          this.loading = false
        }
      })
    },
    // 初始化form
    initForm () {
      this.form.address = '' // (string, optional): 资源地址 ,
      this.form.createdTime = '' // (string, optional),
      this.form.deleted = '' // (boolean, optional): 删除状态 ,
      this.form.dicProperty = '' // (string, optional): 性质：私营，国有，集体，个体户 ,
      this.form.dicType = '' // (string, optional): 周边资源类型词典：超市，餐馆，银行 ,
      this.form.employee = '' // (integer, optional): 工作人员数量 ,
      // this.form.gis = '' // (string, optional): gis信息 ,
      this.form.id = '' // (string, optional),
      this.form.area = '' // (string, optional),
      this.form.legalPerson = '' // (string, optional): 法人 ,
      this.form.manager = '' // (string, optional): 负责人/负责单位 ,
      this.form.maxCustomer = '' // (integer, optional): 最大服务人数，可服务人数 ,
      this.form.name = '' // (string, optional): 周边资源名 ,
      this.form.operator = '' // (string, optional): 操作人员id ,
      this.form.phone = '' // (string, optional): 联系方式 ,
      this.form.photoList = '' // (string, optional): 企业照片列表 ,
      this.form.remark = '' // (string, optional): 备注 ,
      this.form.scale = '' // (string, optional): 规模人数 ,
      this.form.tenantId = '' // (string, optional): 租户id，区分租户子账号 ,
      this.form.updatedTime = '' // (string, optional),
      this.form.version = '' // (integer, optional): 乐观锁
    },
    addPartyMember(index, row) {
      this.initForm()
      if (index === '1') {
        this.optionDialogVisible = '修改企业'
        this.form.id = row.id
        this.form.address = row.address // (string, optional): 资源地址 ,
        this.form.dicProperty = row.dicProperty // (string, optional): 性质：私营，国有，集体，个体户 ,
        this.form.dicType = row.dicType // (string, optional): 周边资源类型词典：超市，餐馆，银行 ,
        this.form.employee = row.employee // (integer, optional): 工作人员数量 ,
        // this.form.gis = row.gis // (string, optional): gis信息 ,
        this.form.legalPerson = row.legalPerson // (string, optional): 法人 ,
        this.form.area = row.area // (string, optional): 企业规模(平方) ,
        this.form.manager = row.manager // (string, optional): 负责人/负责单位 ,
        this.form.maxCustomer = row.maxCustomer // (integer, optional): 最大服务人数，可服务人数 ,
        this.form.name = row.name // (string, optional): 周边资源名称 ,
        this.form.operator = row.operator // (string, optional): 操作人员id ,
        this.form.phone = row.phone // (string, optional): 联系方式 ,
        this.form.photoList = row.photoList // (string, optional): 企业照片列表 ,
        this.form.remark = row.remark // (string, optional): 备注 ,
        this.form.scale = row.scale // (string, optional): 规模人数 ,
        this.form.tenantId = row.tenantId
      } else {
        this.optionDialogVisible = '添加企业'
      }
      this.dialogVisible = true
    },
    // 获取企业性质列表
    getmerchantProperties () {
      companyApi.getmerchantProperties().then((data) => {
        if (data.code === 200) {
          this.propertyList = data.data
        }
      })
    },
    // 获取企业规模列表
    getScaleTags () {
      companyApi.getScaleTags().then((data) => {
        if (data.code === 200) {
          this.scaleTagsList = data.data
        }
      })
    },
    // 获取token
    getBannerQiniuToken () {
      qiniuApi.getBannerQiniuToken().then((data) => {
        this.uploadToken = data.data
      })
    },
    // 企业类型
    getmerchantTypeList () {
      companyApi.getmerchantTypeList().then((data) => {
        this.merchantTypeList = data.data
      })
    }
  },
  mounted () {
    // this.getCompanyList()
    // this.getmerchantProperties()
    // this.getScaleTags()
    // this.getmerchantTypeList()
  },
  components: {
    page: page,
    'address-selector': AddressSelector,
    'my-upload': Upload
  }
}
</script>
<style lang='scss' scoped>
.avatar-uploader .el-upload {
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409EFF;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
.index {
  height: 100vh;
  width: 100%;
}
.function-container {
  display: flex;
  flex: auto;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  .search-btn {
    margin-left: 40px;
    padding: 8px 30px;
    color: #fff;
    font-size: 14px;
    border-radius: 3px;
    background-color: #29a8ed;
  }
}
.search-container {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
  padding: 20px 20px 0 0;
}
.table-container{
  padding: 10px 10px 0 20px;
}
.table-title{
  font-size: 16px;
  padding:10px 10px 10px 0;
}
.table-flex{
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  padding-bottom: 10px;
}
.choose{
  margin-left: 20px;
}

.pagination-container{
  text-align: right;
  padding: 10px 0;
}
</style>
