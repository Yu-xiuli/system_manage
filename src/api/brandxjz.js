import request from '@/utils/request'

export function getBrandList(params) {
    return request({
        url: '/vue-admin-template/cccproduct/cccbrandlist',
        method: 'get',
        params
    })
}