import Mock from "mockjs"

const data = {
  items: [{
    "id": 1,
    "name": "商品模块"
  },
  {
    "id": 2,
    "name": "订单模块"
  },
  {
    "id": 3,
    "name": "营销模块"
  },
  {
    "id": 4,
    "name": "权限模块"
  },
  {
    "id": 5,
    "name": "内容模块"
  },
  {
    "id": 6,
    "name": "其他模块"
  },
 ]
}


export default [{
  
    url: '/vue-element-admin/resourceCategory/listAll',
    type: 'get',
    response: config => {
      const items = data.items
      return {
        code: 20000,
        data: {
          total: items.length,
          items: items
        }
      }
    }
  }]
