// import { testMatch } from "jest.config"
import Mock from "mockjs"

const data = {
  items: [{
      "id": 1,
      "proname": "商品品牌管理",
      "propath": "/brand/**",
      "describe": "",
      "addtime": "2020-02-04 17:04:55",
      "categoryId":1
    },
    {
      "id": 2,
      "proname": "商品属性分类管理",
      "propath": "/productAttribute/**",
      "describe": "",
      "addtime": "2020-02-04 17:05:35",
      "categoryId":1
    },
    {
      "id": 3,
      "proname": "商品属性管理",
      "propath": "/productAttribute/**",
      "describe": "",
      "addtime": "2020-02-04 17:06:13",
      "categoryId":1
    },
    {
      "id": 4,
      "proname": "商品分类管理",
      "propath": "/productCategory/**",
      "describe": "",
      "addtime": "2020-02-04 17:07:15",
      "categoryId":1
    },
    {
      "id": 5,
      "proname": "商品管理",
      "propath": "/product/**",
      "describe": "",
      "addtime": "2020-02-04 17:09:16",
      "categoryId":1
    },
    {
      "id": 6,
      "proname": "商品库存管理",
      "propath": "/sku/**",
      "describe": "",
      "addtime": "2020-02-04 17:09:53",
      "categoryId":1
    },
    {
      "id": 8,
      "proname": "订单管理",
      "propath": "/order/**",
      "describe": "",
      "addtime": "2020-02-05 14:43:37",
      "categoryId":2
    },
    {
      "id": 9,
      "proname": "订单退货申请管理",
      "propath": "/returnApply/**",
      "describe": "",
      "addtime": "2020-02-05 14:44:22",
      "categoryId":2
    },
    {
      "id": 10,
      "proname": "退货原因管理",
      "propath": "/returnReason/**",
      "describe": "",
      "addtime": "2020-02-05 14:45:08",
      "categoryId":2
    },
    {
      "id": 11,
      "proname": "订单设置管理",
      "propath": "/orderSetting/**",
      "describe": "",
      "addtime": "2020-02-05 14:45:43",
      "categoryId":2
    },
    {
      "id": 12,
      "proname": "收货地址管理",
      "propath": "/companyAddress/**",
      "describe": "",
      "addtime": "2020-02-05 14:46:23",
      "categoryId":2
    },
    {
      "id": 13,
      "proname": "优惠券管理",
      "propath": "/coupon/**",
      "describe": "",
      "addtime": "2020-02-07 16:37:22",
      "categoryId":3
    },
    {
      "id": 14,
      "proname": "优惠券领取记录管理",
      "propath": "/couponHistory/**",
      "describe": "",
      "addtime": "2020-02-07 16:37:59",
      "categoryId":3
    },
    {
      "id": 15,
      "proname": "限时购活动管理",
      "propath": "/flash/**",
      "describe": "",
      "addtime": "2020-02-07 16:38:28",
      "categoryId":3
    },
    {
      "id": 16,
      "proname": "限时购商品关系管理",
      "propath": "/flashProductRelation/**",
      "describe": "",
      "addtime": "2020-02-07 16:38:59",
      "categoryId":3
    },
    {
      "id": 17,
      "proname": "限时购场次管理",
      "propath": "/flashSession/**",
      "describe": "",
      "addtime": "2020-02-07 16:39:22",
      "categoryId":3
    },
    {
      "id": 18,
      "proname": "首页轮播广告管理",
      "propath": "/home/advertise/**",
      "describe": "",
      "addtime": "2020-02-07 16:40:07",
      "categoryId":3
    },
    {
      "id": 19,
      "proname": "首页品牌管理",
      "propath": "/home/brand/**",
      "describe": "",
      "addtime": "2020-02-07 16:40:34",
      "categoryId":3
    },
    {
      "id": 20,
      "proname": "首页新品管理",
      "propath": "/home/newProduct/**",
      "describe": "",
      "addtime": "2020-02-07 16:41:06",
      "categoryId":3
    },
    {
      "id": 21,
      "proname": "首页新品管理",
      "propath": "/home/recommendProduct/**",
      "describe": "",
      "addtime": "2020-02-07 16:42:16",
      "categoryId":3
    },
    {
      "id": 22,
      "proname": "首页专题推荐管理",
      "propath": "/home/recommendSubject/**",
      "describe": "",
      "addtime": "2020-02-07 16:42:48",
      "categoryId":3
    },
    {
      "id": 23,
      "proname": "商品优选管理",
      "propath": "/prefrenceArea/**",
      "describe": "",
      "addtime": "2020-02-07 16:44:56",
      "categoryId":5
    },
    {
      "id": 24,
      "proname": "商品专题管理",
      "propath": "/subject/**",
      "describe": "",
      "addtime": "2020-02-07 16:45:39",
      "categoryId":5
    },
    {
      "id": 25,
      "proname": "后台用户管理",
      "propath": "/admin/**",
      "describe": "",
      "addtime": "2020-02-07 16:47:34",
      "categoryId":4
    },
    {
      "id": 26,
      "proname": "后台用户角色管理",
      "propath": "/role/**",
      "describe": "",
      "addtime": "2020-02-07 16:48:24",
      "categoryId":4
    },
    {
      "id": 27,
      "proname": "后台菜单管理",
      "propath": "/menu/**",
      "describe": "",
      "addtime": "2020-02-07 16:48:48",
      "categoryId":4
    },
    {
      "id": 28,
      "proname": "后台资源分类管理",
      "propath": "/resourceCategory/**",
      "describe": "",
      "addtime": "2020-02-07 16:49:18",
      "categoryId":4
    },
    {
      "id": 29,
      "proname": "后台资源管理",
      "propath": "/resource/**",
      "describe": "",
      "addtime": "2020-02-07 16:49:45",
      "categoryId":4
    },

  ]
}

export default [{
  url: '/vue-admin-template/ums/resource',
  type: 'get',
  response: config => {
    const {page = 1, limit = 3} = config.query
    const items = data.items
    return {
      code: 20000,
      data: {
        total: items.length,
        items: items.slice((page-1)*limit,limit*page)
      }
    }
  }
},
{
  url: '/vue-element-admin/resource/delete',
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
}]
