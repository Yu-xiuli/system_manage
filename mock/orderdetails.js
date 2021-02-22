import Mock from 'mockjs'
const data = {
    items: [
        {
            id: 21,
            order_id: 12,
            order_sn: '201809150101000001',
            product_id: 26,
            product_pic: 'http://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/images/20180607/5ac1bf58Ndefaac16.jpg',
            product_name: '华为 HUAWEI P20',
            product_brand: '华为',
            product_sn: '6946605',
            product_price: 3788.00,
            product_quantity: 1,
            product_sku_id: 90,
            product_sku_code: '201806070026001',
            product_category_id: 19,
            promotion_name: '单品促销',
            promotion_amount: 200.00,
            coupon_amount: 2.02,
            integration_amount: 0.00,
            real_amount: 3585.98,
            gift_integration: 3788,
            gift_growth: 3788,
            product_attr:'颜色:金色;容量:16G'
        },
        {
            id: 22,
            order_id: 12,
            order_sn: '201809150101000001',
            product_id: 27,
            product_pic: 'http://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/images/20180615/xiaomi.jpg',
            product_name: '小米8',
            product_brand: '小米',
            product_sn: '7437788',
            product_price: 2699.00,
            product_quantity: 3,
            product_sku_id: 98,
            product_sku_code: '201808270027001',
            product_category_id: 19,
            promotion_name: '打折优惠：满3件，打7.50折',
            promotion_amount: 674.75,
            coupon_amount: 1.44,
            integration_amount: 0.00,
            real_amount: 2022.81,
            gift_integration: 2699,
            gift_growth: 2699,
            product_attr:'颜色:黑色;容量:32G'
        },
        {
            id: 23,
            order_id: 12,
            order_sn: '201809150101000001',
            product_id: 28,
            product_pic: 'http://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/images/20180615/5a9d248cN071f4959.jpg',
            product_name: '红米5A',
            product_brand: '小米',
            product_sn: '7437789',
            product_price: 649.00,
            product_quantity: 1,
            product_sku_id: 102,
            product_sku_code: '201808270028001',
            product_category_id: 19,
            promotion_name: '满减优惠：满1000.00元，减120.00元',
            promotion_amount: 57.60,
            coupon_amount: 0.35,
            integration_amount: 0.00,
            real_amount: 591.05,
            gift_integration: 649,
            gift_growth: 649,
            product_attr:'颜色:金色;容量:16G'
        },
        {
            id: 24,
            order_id: 12,
            order_sn: '201809150101000001',
            product_id: 28,
            product_pic: 'http://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/images/20180615/5a9d248cN071f4959.jpg',
            product_name: '红米5A',
            product_brand: '小米',
            product_sn: '7437789',
            product_price: 699.00,
            product_quantity: 1,
            product_sku_id: 103,
            product_sku_code: '201808270028001',
            product_category_id: 19,
            promotion_name: '满减优惠：满1000.00元，减120.00元',
            promotion_amount: 62.40,
            coupon_amount: 0.37,
            integration_amount: 0.00,
            real_amount: 636.23,
            gift_integration: 649,
            gift_growth: 649,
            product_attr:'颜色:金色;容量:32G'
        }
    ]
}
export default [
    {
        url: '/vue-admin-template/order/productdetail',
        type: 'get',
        response: config => {
            const items = data.items
            const id = config.query.id
            const product = items.map((item) => {
                if (item.order_id == id) {
                    return item
                }
            })
            console.log(product,'4444')
            
            return {
                code: 20000,
                data: {
                    items: product
                }
            }
        }
    },
]