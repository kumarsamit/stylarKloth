import { Routes } from '@angular/router';



const marketplaceRoutes: Routes = [
    {
        path: '',
        loadChildren: () => import('../pages/marketplace/homepage/homepage.module').then((m) => m.HomepageModule),
        // resolve: {
        //     routeResolver: ValidateMeta
        // },
        data: {
            module: 'website',
            header: 1,
            footer: 1,
            sidebar: 0,
            meta: {
                en:{
                    title: 'Welcome to stylarKloth',
                    description: 'stylarKloth description',
                    keyword: 'stylarKloth, fashion'
                },
            }
        },
    },
    {
        path: 'cart',
        loadChildren: () => import('../pages/marketplace/cart/cart.module').then((m) => m.CartModule),
        // resolve: {
        //     routeResolver: ValidateMeta
        // },
        data: {
            module: 'website',
            header: 1,
            footer: 1,
            sidebar: 0,
            meta: {
                en:{
                    title: 'Welcome to stylarKloth',
                    description: 'stylarKloth description',
                    keyword: 'stylarKloth, fashion'
                },
            }
        },
    },
    {
        path: 'wishlist',
        loadChildren: () => import('../pages/marketplace/wishlist/wishlist.module').then((m) => m.WishlistModule),
        // resolve: {
        //     routeResolver: ValidateMeta
        // },
        data: {
            module: 'website',
            header: 1,
            footer: 1,
            sidebar: 0,
            meta: {
                en:{
                    title: 'Welcome to stylarKloth',
                    description: 'stylarKloth description',
                    keyword: 'stylarKloth, fashion'
                },
            }
        },
    },
    {
        path: 'about',
        loadChildren: () => import('../pages/marketplace/about/about.module').then((m) => m.AboutModule),
        // resolve: {
        //     routeResolver: ValidateMeta
        // },
        data: {
            module: 'website',
            header: 1,
            footer: 1,
            sidebar: 0,
            meta: {
                en:{
                    title: 'Welcome to stylarKloth',
                    description: 'stylarKloth description',
                    keyword: 'stylarKloth, fashion'
                },
            }
        },
    },
    {
        path: 'contact',
        loadChildren: () => import('../pages/marketplace/contact/contact.module').then((m) => m.ContactModule),
        // resolve: {
        //     routeResolver: ValidateMeta
        // },
        data: {
            module: 'website',
            header: 1,
            footer: 1,
            sidebar: 0,
            meta: {
                en:{
                    title: 'Welcome to stylarKloth',
                    description: 'stylarKloth description',
                    keyword: 'stylarKloth, fashion'
                },
            }
        },
    },
    {
        path: 'products',
        loadChildren: () => import('../pages/marketplace/product-listing/product-listing.module').then((m) => m.ProductListingModule),
        // resolve: {
        //     routeResolver: ValidateMeta
        // },
        data: {
            module: 'website',
            header: 1,
            footer: 1,
            sidebar: 0,
            meta: {
                en:{
                    title: 'Welcome to stylarKloth',
                    description: 'stylarKloth description',
                    keyword: 'stylarKloth, fashion'
                },
            }
        },
    },
    {
        path: 'search-results',
        loadChildren: () => import('../pages/marketplace/search-results/search-results.module').then((m) => m.SearchResultsModule),
        // resolve: {
        //     routeResolver: ValidateMeta
        // },
        data: {
            module: 'website',
            header: 1,
            footer: 1,
            sidebar: 0,
            meta: {
                en:{
                    title: 'Welcome to stylarKloth',
                    description: 'stylarKloth description',
                    keyword: 'stylarKloth, fashion'
                },
            }
        },
    },
];

const adminRoutes: Routes = [
    {
        path: 'dashboard',
        loadChildren: () => import('../pages/admin/dashboard/dashboard.module').then((m) => m.DashboardModule),
        // resolve: {
        //     routeResolver: ValidateMeta
        // },
        data: {
            module: 'admin',
            header: 2,
            footer: 0,
            sidebar: 1,
        },
    },
];

const otherRoutes: Routes = [
    {
        path: '**',
        redirectTo: '/'
    },
];


export const routesUrl: Routes = [...marketplaceRoutes, ...adminRoutes,  ...otherRoutes];
