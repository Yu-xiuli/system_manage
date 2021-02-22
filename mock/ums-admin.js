// import { testMatch } from "jest.config"
import Mock from "mockjs"

const data = {
  items: [{
      "id": 1,
      "admin": "test",
      "name": "测试账号",
      "email": "test@qq.com",
      "addtime": "2018-09-29 13:55:30",
      "lastlogin": "2018-09-29 13:55:39",
      "adminstatus": 1,
    },
    {
      "id": 3,
      "admin": "admin",
      "name": "系统管理员",
      "email": "test@qqadmin@163.com",
      "addtime": "2018-10-08 13:32:47",
      "lastlogin": "2019-04-20 12:45:16",
      "adminstatus": 1,
    },
    {
      "id": 4,
      "admin": "macro",
      "name": "macro",
      "email": "test@macro@qq.com",
      "addtime": "2019-10-06 15:53:51",
      "lastlogin": "2020-02-03 14:55:55",
      "adminstatus": 1,
    },
    {
      "id": 6,
      "admin": "productAdmin",
      "name": "商品管理员",
      "email": "product@qq.com",
      "addtime": "2020-02-07 16:15:08",
      "lastlogin": "N/A",
      "adminstatus": 1,
    },
    {
      "id": 7,
      "admin": "orderAdmin",
      "name": "订单管理员",
      "email": "order@qq.com",
      "addtime": "2020-02-07 16:15:50",
      "lastlogin": "N/A",
      "adminstatus": 1,
    },
  ]
}

export default [{
    url: '/vue-admin-template/ums/admin',
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
    url: '/vue-element-admin/admin/delete',
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
  },
  {
    url: '/vue-element-admin/admin/register',
    type: 'post',
    response: config => {
      console.log(config.body);
      var postman = config.body;
      data.items.unshift(postman);
      return {
        code: 20000,
        data: {
          message: "添加商品成功"
        }
      }
    }
  },
  {
    url: '/vue-element-admin/admin/update',
    type: 'post',
    response: config => {
      const admin = config.body[1].value
      const listQuery = config.body[2].listQuery
      const {
        page = 1, limit = 10, search = ""
      } =listQuery
      let items = data.items
      let maps = items.map(element => {
        if (element.id == admin.id) {
          element = admin
        }
        return element
      });
      data.items = maps
      return {
        code: 20000,
        data: {
          // total: maps.length,
          // items: maps.slice((page - 1) * limit, limit * page)
          message: "添加商品成功"
        }
      }
    }
  },
  {
    url: '/vue-element-admin/pppadmin/pppsearch',
    type: 'get',
    response: config => {
      var arr = []
      const keyword = config.query.keyword
      const items = data.items
      console.log(items,"xxxxxxxx")
      items.forEach(item => {
        if(item.admin.search(keyword)!= -1){
          arr.push(item)
        }
      });
      console.log(arr,"11111111")
      return {
        code: 20000,
        data: {
          total: arr.length,
          items: arr
        }
      }
    }
  },
]
