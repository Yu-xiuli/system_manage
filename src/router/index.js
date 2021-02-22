import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

/* Layout */
import Layout from "@/layout";

import componentsRouter from "./modules/components";
/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */

// constantRouterMap：主要是通用部分，每个用户都有的页面
export const constantRoutes = [
  {
    path: "/login",
    component: () => import("@/views/login/index"),
    hidden: true
  },

  {
    path: "/404",
    component: () => import("@/views/404"),
    hidden: true
  },

  {
    path: "/",
    component: Layout,
    redirect: "/dashboard",
    children: [
      {
        path: "dashboard",
        name: "Dashboard",
        component: () => import("@/views/dashboard/homepage"),
        meta: { title: "首页", icon: "dashboard" }
      }
    ]
  },
  // {
  //   path: "/productxuchen",
  //   component: Layout,
  //   // redirect: '/productxuchen/index',
  //   name: "sms",
  //   meta: { title: "营销", icon: "tree" },
  //   children: [
  //     {
  //       path: "index",
  //       name: "Product",
  //       component: () => import("@/views/productxuChen/index"),
  //       meta: { title: "新品推荐", icon: "tree" }
  //       // hidden: true
  //     },
  //     {
  //       path: "new",
  //       component: () => import("@/views/productxuChen/new"),
  //       meta: { title: "新增商品", icon: "table" },
  //       hidden: true //不会在菜单栏中显示
  //     },
  //     {
  //       path: "edit",
  //       component: () => import("@/views/productxuChen/edit"),
  //       meta: { title: "编辑商品", icon: "table" },
  //       hidden: true //不会在菜单栏中显示
  //     }
  //   ]
  // },

  {
    path: "/product",
    component: Layout,
    meta: { title: "商品", icon: "tree", affix: true },
    children: [
      {
        path: "index",
        component: () => import("@/views/product/index"),
        name: "Product",
        meta: { title: "商品列表", icon: "form", affix: true }
      },
      {
        path: "new",
        component: () => import("@/views/product/new"),
        name: "addProduct",
        meta: { title: "新增商品", icon: "table", affix: true }
      },
      {
        path: "delete",
        component: () => import("@/views/product/index"),
        name: "deleteProduct",
        meta: { title: "删除商品", icon: "link", affix: true },
        hidden: true
      },
      {
        path: "detail",
        component: () => import("@/views/product/productDetail"),
        name: "productDetail",
        meta: { title: "商品详情", icon: "zip", affix: true },
        hidden: true
      },
      {
        path: "edit",
        component: () => import("@/views/product/productEdit"),
        name: "productEdit",
        meta: { title: "编辑", icon: "documentation", affix: true },
        hidden: true
      },
      {
        path: "categoryedit",
        component: () => import("@/views/product/categoryedit"),
        name: "categoryedit",
        meta: { title: "编辑", icon: "documentation", affix: true },
        hidden: true
      },
      {
        path: "category",
        component: () => import("@/views/product/category"),
        name: "categoryProduct",
        meta: { title: "商品分类", icon: "dashboard", affix: true }
      },

      {
        path: "category/addCategory",
        component: () => import("@/views/product/categoryAdd"),
        name: "categoryAdd",
        meta: { title: "添加商品分类", icon: "dashboard", affix: true },
        hidden: true
      },

      {
        path: "type",
        component: () => import("@/views/product/type"),
        name: "ProductType",
        meta: { title: "商品类型", icon: "link", affix: true }
      },
      {
        path: "brand",
        component: () => import("@/views/product/brand"),
        name: "brandManagement",
        meta: { title: "品牌管理", icon: "dashboard", affix: true }
      }
    ]
  },
  {
    path: "/productxuchen",
    component: Layout,
    redirect: "/productxuchen/hot",
    name: "sms",
    meta: { title: "推荐", icon: "tree" },
    children: [
      {
        path: "index",
        name: "homeNew",
        component: () => import("@/views/productxuChen/index"),
        meta: { title: "新品推荐", icon: "form" }
      },
      {
        path: "new",
        component: () => import("@/views/productxuChen/new"),
        meta: { title: "新增商品", icon: "table" },
        hidden: true //不会在菜单栏中显示
      },
      {
        path: "edit",
        component: () => import("@/views/productxuChen/edit"),
        meta: { title: "编辑商品", icon: "table" },
        hidden: true //不会在菜单栏中显示
      },
      {
        path: "hot",
        name: "hot",
        component: () => import("@/views/hotxuChen/index"),
        meta: { title: "人气推荐", icon: "example" }
      },
      {
        path: "newhot",
        component: () => import("@/views/hotxuChen/new"),
        meta: { title: "新增商品", icon: "table" },
        hidden: true //不会在菜单栏中显示
      },
      {
        path: "edithot",
        component: () => import("@/views/hotxuChen/edit"),
        meta: { title: "编辑商品", icon: "table" },
        hidden: true //不会在菜单栏中显示
      }
    ]
  },
  //表格
  {
    path: "/order",
    component: Layout,
    redirect: "/order/list",
    name: "Order",
    meta: { title: "订单", icon: "example" },
    children: [
      {
        path: "list",
        name: "List",
        component: () => import("@/views/order/order-list"),
        meta: { title: "订单列表", icon: "table" }
      },
      {
        path: "orderdetail",
        name: "OrderDetail",
        component: () => import("@/views/order/order-list/order-detail"),
        meta: { title: "订单详情" },
        hidden: true
      },
      {
        path: "deliverOrderLeave",
        name: "OrderLeave",
        component: () => import("@/views/order/order-list/orderleave"),
        meta: { title: "订单发货" },
        hidden: true
      },
      {
        path: "formsetting",
        name: "Formsetting",
        component: () => import("@/views/order/order-setting/index"),
        meta: { title: "订单设置", icon: "tree" }
      },
      {
        path: "request",
        name: "Request",
        component: () => import("@/views/order/order-return-request/index"),
        meta: { title: "退货申请处理", icon: "table" }
      },
      {
        path: "updateOrderReason",
        name: "UpdateOrderReason",
        component: () =>
          import("@/views/order/order-return-reason/UpdateOrderReason"),
        meta: { title: "退货原因编辑" },
        hidden: true
      },
      {
        path: "reason",
        name: "Reason",
        component: () => import("@/views/order/order-return-reason/index"),
        meta: { title: "退货原因设置", icon: "tree" }
      }
    ]
  },

  // 404 page must be placed at the end !!!
  { path: "*", redirect: "/404", hidden: true }
];

// asyncRouterMap：需要进行权限过滤的页面
export const asyncRoutes = [
  componentsRouter,
  // {
  //   path: "/permission",
  //   component: Layout,
  //   redirect: "/permission/page",
  //   alwaysShow: true, // will always show the root menu
  //   name: "Permission",
  //   meta: {
  //     title: "Permission",
  //     icon: "tree",
  //     roles: ["admin", "editor"] // you can set roles in root nav
  //   },
  //   children: [
  //     {
  //       path: "page",
  //       component: () => import("@/views/permission/page"),
  //       name: "PagePermission",
  //       meta: {
  //         title: "Page Permission",
  //         roles: ["admin"] // or you can only set roles in sub nav
  //       }
  //     },
  //     {
  //       path: "directive",
  //       component: () => import("@/views/permission/directive"),
  //       name: "DirectivePermission",
  //       meta: {
  //         title: "Directive Permission"
  //         // if do not set roles, means: this page does not require permission
  //       }
  //     }
  //   ]
  // }
  {
    path:'/ums',
    component: Layout,
    redirect: '/ums/admin',
    name: 'ums',
    meta: {title: '权限', icon: 'ums' , roles: ['admin']},
    children: [
      {
        path: 'admin',
        name: 'admin',
        component: () => import('@/views/ums/admin/index'),
        meta: {title: '用户列表', icon: 'ums-admin'}
      },
      {
        path: 'role',
        name: 'role',
        component: () => import('@/views/ums/role/index'),
        meta: {title: '角色列表', icon: 'ums-role'}
      },
      {
        path: 'allocMenu',
        name: 'allocMenu',
        component: () => import('@/views/ums/role/allocMenu'),
        meta: {title: '分配菜单'},
        hidden: true
      },
      {
        path: 'allocResource',
        name: 'allocResource',
        component: () => import('@/views/ums/role/allocResource'),
        meta: {title: '分配资源'},
        hidden: true
      },
      {
        path: 'menu',
        name: 'menu',
        component: () => import('@/views/ums/menu/index'),
        meta: {title: '菜单列表', icon: 'ums-menu'}
      },
      {
        path: 'addMenu',
        name: 'addMenu',
        component: () => import('@/views/ums/menu/add'),
        meta: {title: '添加菜单'},
        hidden: true
      },
      {
        path: 'updateMenu',
        name: 'updateMenu',
        component: () => import('@/views/ums/menu/update'),
        meta: {title: '修改菜单'},
        hidden: true
      },
      {
        path: 'resource',
        name: 'resource',
        component: () => import('@/views/ums/resource/index'),
        meta: {title: '资源列表', icon: 'ums-resource'}
      },
      {
        path: 'resourceCategory',
        name: 'resourceCategory',
        component: () => import('@/views/ums/resource/categoryList'),
        meta: {title: '资源分类'},
        hidden: true
      }
    ]
  },
];

const createRouter = () =>
  new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
  });

const router = createRouter();

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher; // reset router
}

export default router;
