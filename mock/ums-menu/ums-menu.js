// import { testMatch } from "jest.config"
import Mock from "mockjs"

const data = {
  items: [{
      "id": 1,
      "title": "商品",
      "level": 0,
      "name": "pms",
      "icon": "product",
      "hidden": 0,
      "sort": 0,
      "parentId":0
    },
    {
      "id": 2,
      "title": "商品列表",
      "level": 1,
      "name": "product",
      "icon": "product-list",
      "hidden": 0,
      "sort": 0,
      "parentId":1
    },
    {
      "id": 3,
      "title": "添加商品",
      "level": 1,
      "name": "addProduct",
      "icon": "product-add",
      "hidden": 0,
      "sort": 0,
      "parentId":1
    },
    {
      "id": 4,
      "title": "商品分类",
      "level": 1,
      "name": "productCate",
      "icon": "product-cate",
      "hidden": 0,
      "sort": 0,
      "parentId":1
    },
    {
      "id": 5,
      "title": "商品类型",
      "level": 1,
      "name": "productAttr",
      "icon": "product-attr",
      "hidden": 0,
      "sort": 0,
      "parentId":1
    },
    {
      "id": 6,
      "title": "品牌管理",
      "level": 1,
      "name": "brand",
      "icon": "product-brand",
      "hidden": 0,
      "sort": 0,
      "parentId":1
    },
    {
      "id": 7,
      "title": "订单",
      "level": 0,
      "name": "oms",
      "icon": "order",
      "hidden": 0,
      "sort": 0,
      "parentId":0
    },
    {
      "id": 8,
      "title": "订单列表",
      "level": 1,
      "name": "order",
      "icon": "product-list",
      "hidden": 0,
      "sort": 0,
      "parentId":7
    },
    {
      "id": 9,
      "title": "订单设置",
      "level": 1,
      "name": "orderSetting",
      "icon": "order-setting",
      "hidden": 0,
      "sort": 0,
      "parentId":7
    },
    {
      "id": 10,
      "title": "退货申请处理",
      "level": 1,
      "name": "returnApply",
      "icon": "order-return",
      "hidden": 0,
      "sort": 0,
      "parentId":7
    },
    {
      "id": 11,
      "title": "退货原因设置",
      "level": 1,
      "name": "returnReason",
      "icon": "order-return-reason",
      "hidden": 0,
      "sort": 0,
      "parentId":7
    },
    {
      "id": 12,
      "title": "营销",
      "level": 0,
      "name": "sms",
      "icon": "sms",
      "hidden": 0,
      "sort": 0,
      "parentId":0
    },
    {
      "id": 13,
      "title": "秒杀活动列表",
      "level": 1,
      "name": "flash",
      "icon": "sms-flash",
      "hidden": 0,
      "sort": 0,
      "parentId":12
    },
    {
      "id": 14,
      "title": "优惠券列表",
      "level": 1,
      "name": "coupon",
      "icon": "sms-coupon",
      "hidden": 0,
      "sort": 0,
      "parentId":12
    },
    {
      "id": 16,
      "title": "品牌推荐",
      "level": 1,
      "name": "homeBrand",
      "icon": "product-brand",
      "hidden": 0,
      "sort": 0,
      "parentId":12
    },
    {
      "id": 17,
      "title": "新品推荐",
      "level": 1,
      "name": "homeNew",
      "icon": "sms-new",
      "hidden": 0,
      "sort": 0,
      "parentId":12
    },
    {
      "id": 18,
      "title": "人气推荐",
      "level": 1,
      "name": "homeHot",
      "icon": "sms-hot",
      "hidden": 0,
      "sort": 0,
      "parentId":12
    },
    {
      "id": 19,
      "title": "专题推荐",
      "level": 1,
      "name": "homeSubject",
      "icon": "sms-subject",
      "hidden": 0,
      "sort": 0,
      "parentId":12
    },
    {
      "id": 20,
      "title": "广告列表",
      "level": 1,
      "name": "homeAdvertise",
      "icon": "sms-ad",
      "hidden": 0,
      "sort": 0,
      "parentId":12
    },
    {
      "id": 21,
      "title": "权限",
      "level": 0,
      "name": "ums",
      "icon": "ums",
      "hidden": 0,
      "sort": 0,
      "parentId":0
    },
    {
      "id": 22,
      "title": "用户列表",
      "level": 1,
      "name": "admin",
      "icon": "ums-admin",
      "hidden": 0,
      "sort": 0,
      "parentId":21
    },
    {
      "id": 23,
      "title": "角色列表",
      "level": 1,
      "name": "role",
      "icon": "ums-role",
      "hidden": 0,
      "sort": 0,
      "parentId":21
    },
    {
      "id": 24,
      "title": "菜单列表",
      "level": 1,
      "name": "menu",
      "icon": "ums-menu",
      "hidden": 0,
      "sort": 0,
      "parentId":21
    },
    {
      "id": 25,
      "title": "资源列表",
      "level": 1,
      "name": "resource",
      "icon": "ums-resource",
      "hidden": 0,
      "sort": 0,
      "parentId":21
    },

  ]
}

export default [{
  url: '/vue-admin-template/ums/menu',
  type: 'get',
  response: config => {
    // const {page = 1, limit = 3} = config.query
    const items = data.items
    return {
      code: 20000,
      data: {
        total: items.length,
        items: items
      }
    }
  }
},
{
  url: '/vue-admin-template/menu/delete',
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
