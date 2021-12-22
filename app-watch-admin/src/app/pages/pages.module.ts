import { NgModule } from '@angular/core';
import { ProjectDashboardModule } from './dashboards/project/project.module';
import { EcommerceModule } from './e-commerce/e-commerce.module';
import { RouterModule } from '@angular/router';
import { ForgotPasswordModule } from './authentication/forgot-password/forgot-password.module';
import { RegisterModule } from './authentication/register/register.module';
import { ResetPasswordModule } from './authentication/reset-password/reset-password.module';
import { InvoiceCompactModule } from './invoices/compact/compact.module';
import { InvoiceModernModule } from './invoices/modern/modern.module';
const routes = [
    {
        path        : 'pages/dashboards',
        loadChildren: () => import('./dashboards/project/project.module').then(m => m.ProjectDashboardModule),
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
        RegisterModule,
        ForgotPasswordModule,
        ResetPasswordModule,
        // Invoices
        InvoiceModernModule,
        InvoiceCompactModule,

        ProjectDashboardModule,
        //Ecommerce
        EcommerceModule
    ]
})
export class PagesModule
{

}
