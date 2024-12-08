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
            sidebar: 1,
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
