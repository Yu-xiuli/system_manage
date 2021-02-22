import request from '@/utils/request'

export function getProductList(params) {
    return request({
        url: '/vue-admin-template/qqqxjz/list',
        method: 'get',
        params
    })
}