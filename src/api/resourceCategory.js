import request from '@/utils/request'

export function listAllCate() {
  return request({
    url: '/vue-element-admin/resourceCategory/listAll',
    method: 'get'
  })
}

export function createResourceCategory(data) {
  return request({
    url: '/vue-element-admin/resourceCategory/create',
    method: 'post',
    data: data
  })
}

export function updateResourceCategory(id, data) {
  return request({
    url: '/vue-element-admin/resourceCategory/update/' + id,
    method: 'post',
    data: data
  })
}

export function deleteResourceCategory(id) {
  return request({
    url: '/vue-element-admin/resourceCategory/delete/' + id,
    method: 'post'
  })
}
