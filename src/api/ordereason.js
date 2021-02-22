import request from '@/utils/request'

export function getOrderReason(params) {
  return request({
    url: '/vue-admin-template/order/reason',
    method: 'get',
    params: params
  })
}
export function UpdateOrderReason(params) {
  return request({
    url: '/vue-admin-template/order/updateReason+id',
    method: 'get',
    params
  })
}
export function editOrderReason(params) {
  return request({
    url: '/vue-admin-template/order/ereason',
    method: 'post',
    data: params
  })
}

export function delReason(params) {
  return request({
    url: '/vue-admin-template/order/dereason/',
    method: 'get',
    params
  })
}