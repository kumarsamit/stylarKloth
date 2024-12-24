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
                title: 'Welcome to stylarKloth',
                description: 'stylarKloth description',
                keyword: 'stylarKloth, fashion'
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
                title: 'Welcome to stylarKloth | Cart',
                description: 'stylarKloth  cart description',
                keyword: 'stylarKloth, fashion ,cart'
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
                title: 'Welcome to stylarKloth',
                description: 'stylarKloth description',
                keyword: 'stylarKloth, fashion'
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
                title: 'Welcome to stylarKloth',
                description: 'stylarKloth description',
                keyword: 'stylarKloth, fashion'
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
                title: 'Welcome to stylarKloth',
                description: 'stylarKloth description',
                keyword: 'stylarKloth, fashion'
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
                title: 'Welcome to stylarKloth',
                description: 'stylarKloth description',
                keyword: 'stylarKloth, fashion'
            }
        },
    },
    {
        path: 'product-detail',
        loadChildren: () => import('../pages/marketplace/product-detail/product-detail.module').then((m) => m.ProductDetailModule),
        // resolve: {
        //     routeResolver: ValidateMeta
        // },
        data: {
            module: 'website',
            header: 1,
            footer: 1,
            sidebar: 0,
            meta: {
                title: 'Welcome to stylarKloth',
                description: 'stylarKloth description',
                keyword: 'stylarKloth, fashion'
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
                title: 'Welcome to stylarKloth',
                description: 'stylarKloth description',
                keyword: 'stylarKloth, fashion'
            }
        },
    },
    {
        path: 'user-profile',
        loadChildren: () => import('../pages/marketplace/user-profile/user-profile.module').then((m) => m.UserProfileModule),
        // resolve: {
        //     routeResolver: ValidateMeta
        // },
        data: {
            module: 'website',
            header: 1,
            footer: 1,
            sidebar: 0,
            meta: {
                title: 'Welcome to stylarKloth',
                description: 'stylarKloth description',
                keyword: 'stylarKloth, fashion'
            }
        },
    },
    {
        path: 'new-arrival',
        loadChildren: () => import('../pages/marketplace/new-arrivals/new-arrivals.module').then((m) => m.NewArrivalsModule),
        // resolve: {
        //     routeResolver: ValidateMeta
        // },
        data: {
            module: 'website',
            header: 1,
            footer: 1,
            sidebar: 0,
            meta: {
                title: 'Welcome to stylarKloth',
                description: 'stylarKloth description',
                keyword: 'stylarKloth, fashion'
            }
        },
    },
    {
        path: 'info',
        loadChildren: () => import('../pages/marketplace/legal-info/legal-info.module').then((m) => m.LegalInfoModule),
        // resolve: {
        //     routeResolver: ValidateMeta
        // },
        data: {
            module: 'website',
            header: 1,
            footer: 1,
            sidebar: 0,
            meta: {
                title: 'Welcome to stylarKloth',
                description: 'stylarKloth description',
                keyword: 'stylarKloth, fashion'
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
    {
        path: 'product-management',
        loadChildren: () => import('../pages/admin/product-management/product-management.module').then((m) => m.ProductManagementModule),
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
    {
        path: 'order-management',
        loadChildren: () => import('../pages/admin/order-management/order-management.module').then((m) => m.OrderManagementModule),
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
    {
        path: 'customer-management',
        loadChildren: () => import('../pages/admin/customer-management/customer-management.module').then((m) => m.CustomerManagementModule),
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


export const routesUrl: Routes = [...marketplaceRoutes, ...adminRoutes, ...otherRoutes];
