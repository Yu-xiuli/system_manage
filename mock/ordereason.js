import Mock from 'mockjs'

const data = {
    items: [
        {
            id: 1,
            name: '质量问题',
            sort: 1,
            status: 1,
            create_time: '2018-10-17 10:00:45'
        },
        {
            id: 2,
            name: '尺码太大',
            sort: 1,
            status: 1,
            create_time: '2018-10-17 10:01:03'
        },
        {
            id: 3,
            name: '颜色不喜欢',
            sort: 1,
            status: 0,
            create_time: '2018-10-17 10:01:13'
        },
        {
            id: 4,
            name: '7天无理由退货',
            sort: 1,
            status: 1,
            create_time: '2018-10-17 10:01:47'
        },
        {
            id: 5,
            name: '价格问题',
            sort: 1,
            status: 0,
            create_time: '2018-10-17 10:01:57'
        },
        {
            id: 12,
            name: '发票问题',
            sort: 2,
            status: 1,
            create_time: '2018-10-19 16:28:36'
        },
        {
            id: 13,
            name: '其他问题',
            sort: 2,
            status: 1,
            create_time: '2018-10-19 16:28:51'
        },
        {
            id: 14,
            name: '物流问题',
            sort: 2,
            status: 1,
            create_time: '2018-10-19 16:29:01'
        },
        {
            id: 15,
            name: '售后问题',
            sort: 2,
            status: 1,
            create_time: '2018-10-19 16:29:11'
        }
    ]
}

export default [
    {
        url: '/vue-admin-template/order/reason',
        type: 'get',
        response: config => {
            const { page = 1, limit = 5 } = config.query
            const items = data.items
            return {
                code: 20000,
                data: {
                    total: items.length,
                    //根据分页信息返回数据
                    items: items.slice((page - 1) * limit, limit * page)
                }
            }
        }
    },
    {
        url: '/vue-admin-template/order/updateReason',
        type: 'get',
        response: config => {
            const items = data.items
            const id = config.query.id
            const product = items.find((item) => {
                if (item.id == id) {
                    return item
                }
            })
            return {
                code: 20000,
                data: {
                    items: product
                }
            }
        }

    },
    {
        url: '/vue-admin-template/order/ereason',
        type: 'post',
        response: config => {
            const items = data.items
            console.log('99999')
            console.log(config.body,'ssss')
            const listOne = config.body;
            
            var product = items.map((item) => {
                if (item.id == listOne.id) {
                    return listOne;
                } else {
                    return item;
                }
            })
            console.log(product,'ppppp')
            data.items = product;
            return {
                code: 20000,
                data: {
                    message: "修改成功"
                }
            }
        }
    },
    {
        url: '/vue-admin-template/order/dereason',
        type: 'get',
        response: config => {
          var id = config.query.id;
          const items = data.items
          var index = items.findIndex(item=>{
            if(item.id == id){
              return true;
            }
          })
          items.splice(index,1);
          return {
            code: 20000,
            data: {
              message: "删除商品成功"
            }
          }
        }
      },
]