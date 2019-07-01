import store from "@/store"
const menus = [
  {
    name: 'home',
    lable: '签证办理',
    action: 'home',
    // icon: require('./assets/index/nav_map.png'),
    children: []
  },
  {
    name: 'order',
    lable: '订单中心',
    action: 'order',
    // icon: require('./assets/index/nav_public.png'),
    children: []
  }
]

const expendMenus = [
  {
    name: 'customer',
    lable: '客户库',
    action: 'customer',
    // icon: require('./assets/index/nav_work.png'),
    children: []
  },
  {
    name: 'systemConfig',
    lable: '系统设置',
    action: 'systemConfig',
    // icon: require('./assets/index/nav_message.png'),
    children: []
  }
]
const getMenus = () => {
  const m = []
  menus.forEach((menu) => {
    m.push(menu)
  })
  console.log('menu')
  console.log(m)
  const user = store.state.user
  let role = false
  if (user) {
    user.roles.forEach((r) => {
      if (r.code === 'administrator') {
        role = true
      }
    })
  }
  console.log('role')
  console.log(role)
  if (role) {
    expendMenus.forEach((menu) => {
      m.push(menu)
    })
  }
  return m
}

export default {
  getMenus
}
