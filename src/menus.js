export default [
  {
    dicKey: 'home',
    name: '民情数据',
    data: require('./assets/index/nav_map.png'),
    children: [
      {
        dicKey: 'enterpriseList',
        name: '企业名录'
      }
    ]
  },
  {
    dicKey: 'send-sms',
    name: '短信问候',
    data: require('./assets/index/nav_message.png'),
    children: [
      {
        dicKey: 'groupInformation',
        name: '群发短信'
      },
      {
        dicKey: 'shortmessageGreet',
        name: '发送记录'
      },
      {
        dicKey: 'smsTemplate',
        name: '短信模板'
      }
    ]
  },
  {
    dicKey: 'wechat',
    name: '微信平台',
    data: require('./assets/index/nav_wechat.png'),
    children: [
      {
        dicKey: 'wechatMenu',
        name: '菜单管理'
      },
      {
        dicKey: 'wechatConfig',
        name: '微信设置'
      }
    ]
  },
  {
    dicKey: 'system-mrg',
    name: '系统管理',
    data: require('./assets/index/nav_systerm.png'),
    children: [
      {
        dicKey: 'roleAdmin',
        name: '权限管理'
      },
      {
        dicKey: 'staffAdmin',
        name: '员工管理'
      },
      {
        dicKey: 'dictionaryAdmin',
        name: '词典管理'
      },
      {
        dicKey: 'operationRecord',
        name: '操作记录'
      }
    ]
  }
]
