// import { testMatch } from "jest.config"
import Mock from "mockjs"

const data = {
  items: [{
      "id": 1,
      "name": "商品管理员",
      "describe": "只能查看及操作商品",
      "adnum": 0,
      "addtime": "2020-02-03 16:50:37",
      "adminstatus": 1,
    },
    {
      "id": 2,
      "name": "订单管理员",
      "describe": "只能查看及操作订单",
      "adnum": 0,
      "addtime": "2018-09-30 15:53:45",
      "adminstatus": 1,
    },
    {
      "id": 3,
      "name": "超级管理员",
      "describe": "拥有所有查看和操作功能",
      "adnum": 0,
      "addtime": "2020-02-02 15:11:05",
      "adminstatus": 1,
    }
  ]
}

export default [{
    url: '/vue-admin-template/ums/role',
    type: 'get',
    response: config => {
      const {
        page = 1, limit = 3
      } = config.query
      const items = data.items
      return {
        code: 20000,
        data: {
          total: items.length,
          items: items.slice((page - 1) * limit, limit * page)
        }
      }
    }
  },
  {
    url: '/vue-element-admin/role/delete',
    type: 'get',
    response: config => {
      const id = config.query.id
      const items = data.items
      var index = items.findIndex(item => {
        if (item.id == id) {
          return true;
        }
      })
      items.splice(index, 1);
      return {
        code: 20000,
        data: {
          message: "删除商品成功"
        }
      }
    }
  }
]
