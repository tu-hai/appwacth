import { NgModule } from '@angular/core';
import { ProjectDashboardModule } from './dashboards/project.module';
import { EcommerceModule } from './e-commerce/e-commerce.module';
import { RouterModule } from '@angular/router';
const routes = [
    {
        path        : 'pages/dashboards',
        loadChildren: () => import('./dashboards/project.module').then(m => m.ProjectDashboardModule),
    },
    {
        path        : 'pages/e-commerce',
        loadChildren: () => import('./e-commerce/e-commerce.module').then(m => m.EcommerceModule),
    },
];
@NgModule({
    imports: [
        RouterModule.forChild(routes),
        // Authentication
        ProjectDashboardModule,
        //Ecommerce
        EcommerceModule
    ]
})
export class PagesModule
{

}
