import request from '@/utils/request'

export function getOrderSet(params) {
  return request({
    url: '/vue-admin-template/order/set',
    method: 'get',
    params
  })
}
export function updateOrderSet(params) {
    return request({
      url: '/vue-admin-template/order/updateset',
      method: 'post',
      data:params
    })
  }