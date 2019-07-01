<template>
  <div class="home">
    <div class="home-left">
      <div>
        <div style="    position: absolute;top: 10px;left: 108%;width: 122px;">
          <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
            <el-radio-button :label='false'><i class="el-icon-picture-outline-round"></i></el-radio-button>
            <el-radio-button :label="true"><i class="el-icon-picture-outline-round"></i></el-radio-button>
          </el-radio-group>
        </div>
      </div>
       <el-menu default-active="pagedefault" router class="el-menu-vertical-demo" unique-opened  @open="handleOpen" @close="handleClose"  background-color="#2f4050"
      text-color="#a7b1c2"
      active-text-color="#ffd04b" :collapse="isCollapse">
         <el-menu-item style="height:80px;line-height:80px">
          <template slot="title">
            <i class="el-icon-picture-outline-round"></i>
            <span slot="title">HC小区管理系统</span>
          </template>
        </el-menu-item>
         <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-s-platform"></i>
            <span slot="title">小区管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="communityManagement">入住小区</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span slot="title">楼宇管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="floor">小区楼</el-menu-item>
            <el-menu-item index="unit">小区楼单元</el-menu-item>
            <el-menu-item index="roomFlow">房屋管理</el-menu-item>
            <el-menu-item index="sellRoomFlow">房屋售卖</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-coffee-cup"></i>
            <span slot="title">业主管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="ownerFlow">添加业主</el-menu-item>
            <el-menu-item index="ownerMemberFlow">业主成员</el-menu-item>
            <el-menu-item index="ownerRoomFlow">业主房产</el-menu-item>
            <el-menu-item index="ownerParkingSpaceFlow">业主车位</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="4">
          <template slot="title">
            <i class="el-icon-orange"></i>
            <span slot="title">车位管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="parkingSpaceFlow">添加车位</el-menu-item>
            <el-menu-item index="hireParkingSpaceFlow">车位出租</el-menu-item>
            <el-menu-item index="sellOwnerCarFlow">车位出售</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="5">
          <template slot="title">
            <i class="el-icon-document-copy"></i>
            <span slot="title">缴费管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="propertyFeeConfigFlow">初始化物业费</el-menu-item>
            <el-menu-item index="parkingSpaceFeeConfigFlow">初始化停车费</el-menu-item>
            <el-menu-item index="propertyFeeFlow">物业费</el-menu-item>
            <el-menu-item index="parkingSpaceFeeFlow">停车费</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="6">
          <template slot="title">
            <i class="el-icon-s-goods"></i>
            <span slot="title">采购管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="6-1">采购入库</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="7">
          <template slot="title">
            <i class="el-icon-edit-outline"></i>
            <span slot="title">公告管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="7-1">发布公告</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="9">
          <template slot="title">
            <i class="el-icon-thirdzuanshi1"></i>
            <span slot="title">权限管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="staffPrivilege">员工权限</el-menu-item>
            <el-menu-item index="privilege">权限组</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="10">
          <template slot="title">
            <i class="el-icon-thirdfl-baobiao"></i>
            <span slot="title">报表管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/">我的报表</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="11">
          <template slot="title">
            <i class="el-icon-thirddemo-"></i>
            <span slot="title">DEMO管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="demoFlow">DEMO用例</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
       </el-menu>
    </div>
    <link href="https://unpkg.com/animate.css@3.5.1/animate.min.css" rel="stylesheet" type="text/css">

    <div class="home-right">
      <transition name="custom-classes-transition" enter-active-class="animated fadeInRightBig">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>
<script>
// import menu from '../menu.js'
// import utils from '../utils'
// import router from '../router'
export default {
  data() {
    return {
      uniqueOpened: true,
      isCollapse: false,
      pagedefault: '',
      menus: this.$store.state.user.menuList
      // show demo menu
      // menus: menus,
    }
  },
  watch: {
    $route() {
      if (this.$route.meta.parentPath) {
        this.pagedefault = this.$route.meta.parentPath // 实现路由切换
      }
    }
  },
  mounted () {
    console.log('this.$store.state.user=====================>', this.$store.state.user)
    if (this.$store.state.user.length > 0) {
      if (!this.$store.state.user.menuList) {
        this.$confirm('未配置菜单权限，请联系管理员配置权限后，再尝试登录。', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'error'
        }).then(() => {
        }).catch(() => {
        })
      }
    }
    // 3秒内无法添加地址报错
    // this.checkAddressTree()
  },
  computed: {
    activeSubMenu () {
      for (let menu of this.menus) {
        if (menu.children && menu.children.length > 0) {
          for (let item of menu.children) {
            if (item.name === this.activePage) {
              return [menu.name]
            }
          }
        }
      }
      return []
    }
  },
  methods: {
    onMenuItemClicked (item) {
      console.log(item)
      if (item.query) {
        this.$router.push({
          name: item.dicKey,
          query: item.query
        })
      } else {
        if (item.dicKey === 'addVisit') {
          this.$router.push({
            name: item.dicKey,
            query: {
              index: '1'
            }
          })
        } else {
          this.$router.push({
            name: item.dicKey
          })
        }
      }
    },
    handleSelect() {
      console.log(">>>>")
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
<style lang="scss">

@import '../theme/basic.scss';
.home {
  overflow: hidden;
  .home-left {
    position: absolute;
    z-index: 2000;
    top: 0;
    left: 0;
    // padding-bottom: 20px;
    height: 100%;
    // min-width: 125px;
    background: #2f4050;
    color: #DFE4ED;
    .navi-icon{
      width: 22px;
      margin-right: 6px;
    }
    .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
  }
  }
  .home-right {
    margin-left: 200px;
    // margin-top: 80px;
    min-height: 100%;
    .el-table__header{
      .cell{
          text-align: center;
      }
      th{
        border-right: 1px solid #FFF !important;
        padding: 6px 0;
      }
      .th{
        border-right: 1px solid #FFF;
        padding: 6px 0;
      }
    }
    .el-table__body {
      td{
        border-right: 1px solid $main-color !important;
        padding: 6px 0;
      }
    }
  }
}
// .main-container{
//   width: 125px;
//   min-height: 100vh;
//   padding: 0;
//     // 左侧菜单惭变色
//     /* Safari 5.1 - 6.0 */
//     background: -webkit-linear-gradient(left top, $second-color , $main-color)!important;
//     /* Opera 11.1 - 12.0 */
//     background: -o-linear-gradient(bottom right, $second-color , $main-color)!important;
//     /* Firefox 3.6 - 15 */
//     background: -moz-linear-gradient(bottom right, $second-color , $main-color)!important;
//     /* 标准的语法 */
//     background: linear-gradient(to bottom right, $second-color , $main-color)!important;
// }
// .el-tree__empty-text {
//   display: none;
// }
// .el-submenu__title{
//     width: 125px;
//     height: 45px!important;
//     line-height: 45px!important;
//     color: #FFF !important;
//     padding: 0 0 0 8px !important;
//     .el-submenu__icon-arrow{
//       color: transparent;
//     }
//     &:hover{
//       background-color: transparent!important;
//       .el-submenu__icon-arrow{
//         color: #F8C78D;
//         height: 45px!important;
//         top: 0!important;
//         right: 0!important;
//         margin-top: 0;
//         width: 3px;
//         background-color: #F8C78D;
//       }
//     }
// }
// .el-date-picker__header{
//   // height: 30px;
// }
// .el-date-picker__header-label{
//   padding: 0;
//   margin: 0;
// }
// .el-checkbox__input.is-indeterminate .el-checkbox__inner{
//   background-color: rgba($color: $main-color, $alpha: 0.8);
//   border-color: #FFF;
// }
// .el-checkbox__input.is-checked .el-checkbox__inner{
//   background-color: rgba($color: $main-color, $alpha: 0.8);
//   border-color: #FFF;
// }
// .el-submenu{
//   flex: auto;
//   display: flex;
//   width: 100%;
//   // height: 50px!important;
//   flex-direction: row;
//   .menu-icon{
//     color: #FFF;
//     font-size: 26px;
//   }
// }
// .__menu-item{
//     width: 125px;
//     height: 45px!important;
//     line-height: 45px!important;
//     color: #FFF !important;
//     padding: 0 0 0 8px !important;
//     vertical-align: middle;
//     .title{
//       width: 125px;
//       height: 45px!important;
//       line-height: 45px!important;
//       margin-top: 6px;
//       color: #FFF !important;
//     }
//     .el-submenu__icon-arrow{
//       color: transparent;
//     }
//     &:hover{
//       background-color: transparent!important;
//       .el-submenu__icon-arrow{
//         color: #F8C78D;
//         height: 45px!important;
//         top: 0!important;
//         right: 0!important;
//         margin-top: 0;
//         width: 3px;
//         background-color: #F8C78D;
//       }
//     }
// }
// .__submenu-item{
//   height: 40px!important;
//   line-height: 40px!important;
//   background-color: #FFF !important;
//   // width: 90px;
//   padding-left: 10px !important;
//   &:hover{
//     // text-decoration: underline;
//     color: #409EFF !important;
//   }
// }
// .el-menu--popup{
//   min-width: 100px !important;
//   padding: 0 !important;
//   background-color: #FFF !important;
// }
// .el-menu--collapse{
//   width: 125px!important;
// }

// .el-card__header{
//   color: #FFF;
//   // background: #FFF;
//   background: $main-color;
//   height: 45px;
//   padding: 6px 12px;
//   .yellow {
//     background: #ECA249;
//   }
// }
// .el-tag {
//   margin-left: 8px!important;
//   background-color: rgba($color: #FFF, $alpha: 0.9)!important;
// }
// .el-card__body{
//   background: #f4f4f4;
//   padding: 14px;
// }
// .el-checkbox + .el-checkbox{
//   margin-left:0px
// }
// .required{
//   color:red
// }
</style>
