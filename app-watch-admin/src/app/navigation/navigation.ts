import { FuseNavigation } from '@fuse/types';

export const navigation: FuseNavigation[] = [
    {
        id      : 'pages',
        title   : 'Pages',
        type    : 'group',
        icon    : 'pages',
        children: [
            {
                id       : 'dashboards',
                title    : 'Tổng quan',
                translate: 'NAV.DASHBOARDS',
                type     : 'collapsable',
                icon     : 'dashboard',
                children : [
                    {
                        id   : 'project',
                        title: 'Tổng quan',
                        type : 'item',
                        url  : '/pages/dashboards/project'
                    }
                ]
            },
            {
                id       : 'e-commerce',
                title    : 'Bán hàng',
                translate: 'NAV.ECOMMERCE',
                type     : 'collapsable',
                icon     : 'shopping_cart',
                children : [
                    {
                        id        : 'products',
                        title     : 'Sản phẩm',
                        type      : 'item',
                        url       :  '/pages/e-commerce/products',
                        exactMatch: true
                    },
                    {
                        id        : 'user',
                        title     : 'Người dùng',
                        type      : 'item',
                        url       : '/pages/e-commerce/users',
                        exactMatch: true
                    },
                    {
                        id        : 'orders',
                        title     : 'Đơn hàng',
                        type      : 'item',
                        url       : '/pages/e-commerce/orders',
                        exactMatch: true
                    },
                    {
                        id        : 'invoice',
                        title     : 'Hóa đơn',
                        type      : 'item',
                        url       : '/pages/e-commerce/invoice',
                        exactMatch: true
                    },
                ]
            },
            {
                id      : 'authentication',
                title   : 'Đăng xuất',
                type    : 'collapsable',
                icon    : 'lock',
                children: [
                    {
                        id   : 'login',
                        title: 'Login',
                        type : 'item',
                        url  : '/login'
                    },
                ]
            },
        ]
    },
];
