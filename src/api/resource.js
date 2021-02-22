import request from '@/utils/request'

export function fetchList(params) {
  return request({
    url: '/vue-element-admin/resource/list',
    method: 'get',
    params: params
  })
}

export function createResource(data) {
  return request({
    url: '/vue-element-admin/resource/create',
    method: 'post',
    data: data
  })
}

export function updateResource(id, data) {
  return request({
    url: '/vue-element-admin/resource/update/' + id,
    method: 'post',
    data: data
  })
}

export function deleteResource(params) {
  return request({
    url: '/vue-element-admin/resource/delete',
    method: 'get',
    params
  })
}

export function fetchAllResourceList() {
  return request({
    url: '/vue-element-admin/resource/listAll',
    method: 'get'
  })
}
