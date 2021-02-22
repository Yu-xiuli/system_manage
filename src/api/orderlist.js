import request from '@/utils/request'

export function getOrderList(params) {
  return request({
    url: '/vue-admin-template/order/list',
    method: 'get',
    params:params
  })
}

/* 
getOrderDetail(this.id).then(response => {
        this.order = response.data;
      }); */
export function getOrderDetail(params) {
  return request({
    url: '/vue-admin-template/order/detail+id',
    method: 'get',
    params
  })
}
export function getOrderLeave(params) {
  return request({
    url: '/vue-admin-template/order/leave+id',
    method: 'get',
    params
  })
}
export function updateOrderLeave(params) {
  return request({
    url: '/vue-admin-template/order/edit',
    method: 'post',
    data:params
  })
}
export function deleteOrderList(params) {
  return request({
    url: '/vue-admin-template/order/delete/',
    method: 'get',
    params:params
  })
}