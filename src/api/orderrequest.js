import request from '@/utils/request'

export function getRequest(params) {
  return request({
    url: '/vue-admin-template/order/require',
    method: 'get',
    params
  })
}
