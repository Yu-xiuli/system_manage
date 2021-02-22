import request from '@/utils/request'

export function getUmsadminList(params) {
  return request({
    url: '/vue-admin-template/ums/admin',
    method: 'get',
    params
  })
}

export function getUmsRoleList(params) {
    return request({
      url: '/vue-admin-template/ums/role',
      method: 'get',
      params
    })
  }

  export function getUmsResourceList(params) {
    return request({
      url: '/vue-admin-template/ums/resource',
      method: 'get',
      params
    })
  }

  export function getUmsMenuList(parentId,params) {
    return request({
      url: '/vue-admin-template/ums/menu' + parentId,
      method: 'get',
      params
    })
  }

  export function createMenu(data) {
    return request({
      url: '/vue-admin-template/menu/create',
      method: 'post',
      data: data
    })
  }

  export function updateMenu(id, data) {
    return request({
      url: '/vue-admin-template/menu/update/' + id,
      method: 'post',
      data: data
    })
  }
  
  export function getMenu(id) {
    return request({
      url: '/vue-admin-template/menu/' + id,
      method: 'get',
    })
  }

  export function deleteMenu(params) {
    return request({
      url: '/vue-admin-template/menu/delete',
      method: 'get',
      params
    })
  }
