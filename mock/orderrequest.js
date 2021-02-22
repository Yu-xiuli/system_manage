import Mock from 'mockjs'

const data = {
    items: [
        {
            id: 3,
            create_time: "2018-10-17 14:34:57",
            member_username: 'test',
            product_real_price: 3585.98,
            status: 0,
            handle_time: null,
        },
        {
            id: 4,
            create_time: "2018-10-17 14:40:21",
            member_username: 'test',
            product_real_price: 2022.81,
            status: 1,
            handle_time: '2018-10-18 13:54:10',
        },
        {
            id: 5,
            create_time: "2018-10-17 14:44:18",
            member_username: 'test',
            product_real_price: 591.05,
            status: 2,
            handle_time: '2018-10-18 13:55:28',
        },
        {
            id: 8,
            create_time: "2018-10-17 14:44:18",
            member_username: 'test',
            product_real_price: 591.05,
            status: 3,
            handle_time: '2018-10-18 13:57:12',
        },
        {
            id: 9,
            create_time: "2018-10-17 14:34:57",
            member_username: 'test',
            product_real_price: 3585.98,
            status: 2,
            handle_time: '2018-10-24 15:44:56',
        },
        {
            id: 10,
            create_time: "2018-10-17 14:40:21",
            member_username: 'test',
            product_real_price: 2022.81,
            status: 3,
            handle_time: '2018-10-24 15:46:57',
        },
        {
            id: 11,
            create_time: "2018-10-17 14:44:18",
            member_username: 'test',
            product_real_price: 591.05,
            status: 1,
            handle_time: '2018-10-24 17:09:04',
        },
        {
            id: 12,
            create_time: "2018-10-17 14:34:57",
            member_username: 'test',
            product_real_price: 3585.98,
            status: 2,
            handle_time: '2018-10-24 17:22:54',
        },
        {
            id: 13,
            create_time: "2018-10-17 14:40:21",
            member_username: 'test',
            product_real_price: 2022.81,
            status: 3,
            handle_time: '2018-10-24 17:23:30',
        },
        {
            id: 15,
            create_time: "2018-10-17 14:34:57",
            member_username: 'test',
            product_real_price: 3585.98,
            status: 0,
            handle_time: null,
        },
        {
            id: 16,
            create_time: "2018-10-17 14:40:21",
            member_username: 'test',
            product_real_price: 2022.81,
            status: 0,
            handle_time: null,
        },
        {
            id: 17,
            create_time: "2018-10-17 14:44:18",
            member_username: 'test',
            product_real_price: 591.05,
            status: 0,
            handle_time: null,
        },
        {
            id: 18,
            create_time: "2018-10-17 14:34:57",
            member_username: 'test',
            product_real_price: 3585.98,
            status: 0,
            handle_time: null,
        },
        {
            id: 19,
            create_time: "2018-10-17 14:40:21",
            member_username: 'test',
            product_real_price: 2022.81,
            status: 0,
            handle_time: null,
        }
    ]
}

export default [
    {
        url: '/vue-admin-template/order/require',
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
    /* {
        url: '/vue-admin-template/order/updateset',
        type: 'post',
        response: config => {
            const items = data.items
            const listOne = config.body;
            var product = items.map((item) => {
                if (item.id == listOne.id) {
                    return listOne;
                } else {
                    return item;
                }
            })
            data.items = product;
            return {
                code: 20000,
                data: {
                    message: "修改成功"
                }
            }
        }
    } */
]