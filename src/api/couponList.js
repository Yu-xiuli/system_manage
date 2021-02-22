import request from '@/utils/request'

export function getProductCouponList(params) {
    return request({
        url: '/vue-admin-template/qqqproduct/couponlist',
        method: 'get',
        params
    })
}

export function getCoupon(params) {
    return request({
        url: '/vue-admin-template/abcwejzpro/abcwejcoupon+id',
        method: 'get',
        params
    })
}


export function getCouponHistory(params) {
    return request({
        url: '/vue-admin-template/aaaproduct/aaacouponhistory',
        method: 'get',
        params
    })
}


export function updateCoupon(params) {
    return request({
        url: '/vue-admin-template/ioptuproduct/ioptuefcouponupdate+id',
        method: 'post',
        data: params
    })
}


export function deleteCoupon(params) {
    return request({
        url: '/vue-admin-template/qqqproduct/delete',
        method: 'get',
        params
    })
}

export function createCoupon(params) {
    return request({
        url: '/vue-admin-template/qqqproduct/couponcreate',
        method: 'post',
        data: params
    })
}