import request from '@/utils/request'

export function getProductDetail(params) {
  return request({
    url: '/vue-admin-template/order/productdetail+id',
    method: 'get',
    params
  })
}