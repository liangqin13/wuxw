import home from '@/views/home'
import header from '@/components/header'
import footer from '@/components/footer'
// -------------------------------
// import login from '@/views/login'
// -------------------------------
import communityManagement from '@/views/community/community-management'
// 小区
import floor from '@/views/building/floor'
import unit from '@/views/building/unit'
import roomFlow from '@/views/building/roomFlow'
import sellRoomFlow from '@/views/building/sellRoomFlow'
// 业主
import ownerFlow from '@/views/owner/ownerFlow'
import ownerMemberFlow from '@/views/owner/ownerMemberFlow'
import ownerRoomFlow from '@/views/owner/ownerRoomFlow'
import ownerParkingSpaceFlow from '@/views/owner/ownerParkingSpaceFlow'
// 车位
import parkingSpaceFlow from '@/views/parking/parkingSpaceFlow'
import hireParkingSpaceFlow from '@/views/parking/hireParkingSpaceFlow'
import sellOwnerCarFlow from '@/views/parking/sellOwnerCarFlow'
// 缴费
import propertyFeeConfigFlow from '@/views/pay/propertyFeeConfigFlow'
import parkingSpaceFeeConfigFlow from '@/views/pay/parkingSpaceFeeConfigFlow'
import propertyFeeFlow from '@/views/pay/propertyFeeFlow'
import parkingSpaceFeeFlow from '@/views/pay/parkingSpaceFeeFlow'
// 员工管理
import staff from '@/views/staff'
// 员工权限
import staffPrivilege from '@/views/staffRights/staffPrivilege'
import privilege from '@/views/staffRights/privilege'
// demo
import demoFlow from '@/views/demo/demoFlow'
// 报表
import reports from '@/views/report/reports'
export default [
  // {
  //   path: '/',
  //   name: 'login',
  //   component: login,
  //   meta: {}
  // },
  {
    path: '/',
    components: {
      default: home,
      header: header,
      footer: footer
    },
    meta: {},
    children: [
      // 操作记录
      {
        path: '/communityManagement',
        name: 'communityManagement',
        meta: {
          // requiresAuth: true
        },
        component: communityManagement
      },
      {
        path: '/floor',
        name: 'floor',
        meta: {
          // requiresAuth: true
        },
        component: floor
      },
      {
        path: '/unit',
        name: 'unit',
        meta: {
          // requiresAuth: true
        },
        component: unit
      },
      {
        path: '/roomFlow',
        name: 'roomFlow',
        meta: {
          // requiresAuth: true
        },
        component: roomFlow
      },
      {
        path: '/sellRoomFlow',
        name: 'sellRoomFlow',
        meta: {
          // requiresAuth: true
        },
        component: sellRoomFlow
      },
      {
        path: '/ownerFlow',
        name: 'ownerFlow',
        meta: {
          // requiresAuth: true
        },
        component: ownerFlow
      },
      {
        path: '/ownerMemberFlow',
        name: 'ownerMemberFlow',
        meta: {
          // requiresAuth: true
        },
        component: ownerMemberFlow
      },
      {
        path: '/ownerParkingSpaceFlow',
        name: 'ownerParkingSpaceFlow',
        meta: {
          // requiresAuth: true
        },
        component: ownerParkingSpaceFlow
      },
      {
        path: '/ownerRoomFlow',
        name: 'ownerRoomFlow',
        meta: {
          // requiresAuth: true
        },
        component: ownerRoomFlow
      },
      {
        path: '/parkingSpaceFlow',
        name: 'parkingSpaceFlow',
        meta: {
          // requiresAuth: true
        },
        component: parkingSpaceFlow
      },
      {
        path: '/hireParkingSpaceFlow',
        name: 'hireParkingSpaceFlow',
        meta: {
          // requiresAuth: true
        },
        component: hireParkingSpaceFlow
      },
      {
        path: '/sellOwnerCarFlow',
        name: 'sellOwnerCarFlow',
        meta: {
          // requiresAuth: true
        },
        component: sellOwnerCarFlow
      },
      {
        path: '/propertyFeeConfigFlow',
        name: 'propertyFeeConfigFlow',
        meta: {
          // requiresAuth: true
        },
        component: propertyFeeConfigFlow
      },
      {
        path: '/parkingSpaceFeeConfigFlow',
        name: 'parkingSpaceFeeConfigFlow',
        meta: {
          // requiresAuth: true
        },
        component: parkingSpaceFeeConfigFlow
      },
      {
        path: '/propertyFeeFlow',
        name: 'propertyFeeFlow',
        meta: {
          // requiresAuth: true
        },
        component: propertyFeeFlow
      },
      {
        path: '/parkingSpaceFeeFlow',
        name: 'parkingSpaceFeeFlow',
        meta: {
          // requiresAuth: true
        },
        component: parkingSpaceFeeFlow
      },
      {
        path: '/staff',
        name: 'staff',
        meta: {
          // requiresAuth: true
        },
        component: staff
      },
      {
        path: '/staffPrivilege',
        name: 'staffPrivilege',
        meta: {
          // requiresAuth: true
        },
        component: staffPrivilege
      },
      {
        path: '/demoFlow',
        name: 'demoFlow',
        meta: {
          // requiresAuth: true
        },
        component: demoFlow
      },
      {
        path: '/privilege',
        name: 'privilege',
        meta: {
          // requiresAuth: true
        },
        component: privilege
      },
      {
        path: '/',
        name: 'reports',
        meta: {
          // requiresAuth: true
        },
        component: reports
      }
    ]
  }
]
