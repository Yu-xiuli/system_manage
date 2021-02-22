import request from '@/utils/request'

export function getRoutes() {
  return request({
    url: '/vue-element-admin/routes',
    method: 'get'
  })
}

export function getRoles() {
  return request({
    url: '/vue-element-admin/roles',
    method: 'get'
  })
}

export function addRole(data) {
  return request({
    url: '/vue-element-admin/role',
    method: 'post',
    data
  })
}

export function updateRole(id, data) {
  return request({
    url: `/vue-element-admin/role/${id}`,
    method: 'put',
    data
  })
}

export function deleteRole(params) {
  return request({
    url: `/vue-element-admin/role/delete`,
    method: 'get',
    params
  })
}

export function fetchAllRoleList() {
  return request({
    url: '/vue-element-admin/role/listAll',
    method: 'get'
  })
}

export function createRole(data) {
  return request({
    url: '/vue-element-admin/role/create',
    method: 'post',
    data: data
  })
}

export function updateStatus(id, params) {
  return request({
    url: '/vue-element-admin/role/updateStatus/' + id,
    method: 'post',
    params: params
  })
}

export function allocResource(data) {
  return request({
    url: '/vue-element-admin/role/allocResource',
    method: 'post',
    data:data
  })
}

export function listResourceByRole(roleId) {
  return request({
    url: '/vue-element-admin/role/listResource/'+roleId,
    method: 'get'
  })
}

export function listMenuByRole(roleId) {
  return request({
    url: '/vue-element-admin/role/listMenu/'+roleId,
    method: 'get'
  })
}

export function allocMenu(data) {
  return request({
    url: '/vue-element-admin/role/allocMenu',
    method: 'post',
    data:data
  })
}

