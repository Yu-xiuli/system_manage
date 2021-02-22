import request from '@/utils/request'

export function fetchTreeList() {
  return request({
    url: '/vue-element-admin/menu/treeList',
    method: 'get'
  })
}

