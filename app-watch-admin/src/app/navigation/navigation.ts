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
                title    : 'Dashboards',
                translate: 'NAV.DASHBOARDS',
                type     : 'collapsable',
                icon     : 'dashboard',
                children : [
                    {
                        id   : 'project',
                        title: 'Project',
                        type : 'item',
                        url  : '/pages/dashboards/project'
                    }
                ]
            },
            {
                id       : 'e-commerce',
                title    : 'E-Commerce',
                translate: 'NAV.ECOMMERCE',
                type     : 'collapsable',
                icon     : 'shopping_cart',
                children : [
                    {
                        id        : 'products',
                        title     : 'Products',
                        type      : 'item',
                        url       :  '/pages/e-commerce/products',
                        exactMatch: true
                    },
                    {
                        id        : 'user',
                        title     : 'user',
                        type      : 'item',
                        url       : '/pages/e-commerce/users',
                        exactMatch: true
                    },
                    {
                        id        : 'orders',
                        title     : 'orders',
                        type      : 'item',
                        url       : '/pages/e-commerce/orders',
                        exactMatch: true
                    },
                    {
                        id        : 'invoice',
                        title     : 'invoice',
                        type      : 'item',
                        url       : '/pages/e-commerce/invoice',
                        exactMatch: true
                    },
                ]
            },
            {
                id      : 'invoice',
                title   : 'Invoice',
                type    : 'collapsable',
                icon    : 'receipt',
                children: [
                    {
                        id   : 'modern',
                        title: 'Modern',
                        type : 'item',
                        url  : '/pages/invoices/modern'
                    },
                    {
                        id   : 'compact',
                        title: 'Compact',
                        type : 'item',
                        url  : '/pages/invoices/compact'
                    }
                ]
            },

            {
                id      : 'authentication',
                title   : 'Authentication',
                type    : 'collapsable',
                icon    : 'lock',
                badge   : {
                    title: '10',
                    bg   : '#525e8a',
                    fg   : '#FFFFFF'
                },
                children: [
                    {
                        id   : 'login',
                        title: 'Login',
                        type : 'item',
                        url  : '/login'
                    },
                    {
                        id   : 'register',
                        title: 'Register',
                        type : 'item',
                        url  : '/register'
                    },
                ]
            },
        ]
    },
];
