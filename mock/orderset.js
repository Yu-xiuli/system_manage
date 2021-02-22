import Mock from 'mockjs'

const data = {
    items: [
        {
            id: 1,
            flash_order_overtime: 60,
            normal_order_overtime: 120,
            confirm_overtime: 15,
            finish_overtime: 7,
            comment_overtime: 7
        }
    ]
}

export default [
    {
        url: '/vue-admin-template/order/set',
        type: 'get',
        response: config => {
            const items = data.items
            return {
                code: 20000,
                data: {
                    total: items.length,
                    //根据分页信息返回数据
                    items: items
                }
            }
        }
    },
    {
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
    }
]