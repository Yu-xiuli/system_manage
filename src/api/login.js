import request from '@/utils/request'

export function login(username, password) {
  return request({
    url: '/vue-element-admin/admin/login',
    method: 'post',
    data: {
      username,
      password
    }
  })
}

export function getInfo() {
  return request({
    url: '/vue-element-admin/admin/info',
    method: 'get',
  })
}

export function logout() {
  return request({
    url: '/vue-element-admin/admin/logout',
    method: 'post'
  })
}

export function createAdmin(data) {
  return request({
    url: '/vue-element-admin/admin/register',
    method: 'post',
    data: data
  })
}

export function updateAdmin(data) {
  return request({
    url: '/vue-element-admin/admin/update',
    method: 'post',
    data: data
  })
}

export function updateStatus(id, params) {
  return request({
    url: '/vue-element-admin/admin/updateStatus/' + id,
    method: 'post',
    params: params
  })
}

export function deleteAdmin(params) {
  return request({
    url: '/vue-element-admin/admin/delete',
    method: 'get',
    params: params
  })
}

export function SearchAdmin(params) {
  return request({
    url: '/vue-element-admin/pppadmin/pppsearch',
    method: 'get',
    params: params
  })
}

export function getRoleByAdmin(id) {
  return request({
    url: '/vue-element-admin/admin/role/' + id,
    method: 'get'
  })
}

export function allocRole(data) {
  return request({
    url: '/vue-element-admin/admin/role/update',
    method: 'post',
    data: data
  })
}
