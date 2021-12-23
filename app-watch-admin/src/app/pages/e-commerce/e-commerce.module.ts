import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatRippleModule } from '@angular/material/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { FuseSharedModule } from '@fuse/shared.module';
import { EcommerceOrderComponent } from './order/order.component';
import { EcommerceOrderService } from './order/order.service';
import { EcommerceOrdersComponent } from './orders/orders.component';
import { EcommerceOrdersService } from './orders/orders.service';
import { EcommerceProductsComponent } from './products/products.component';
import { SanPhamService } from './products/products.service';
import { MatDialogModule} from '@angular/material/dialog';
import { ThemSuaSanPhamComponent } from './products/them-sua-sanpham/them-sua-sanpham';

const routes: Routes = [
    {
        path     : 'products',
        component: EcommerceProductsComponent,
    },
    {
        path     : 'orders',
        component: EcommerceOrdersComponent,
    },
    {
        path     : 'orders/:id',
        component: EcommerceOrderComponent,
    }
];

@NgModule({
    declarations: [
        EcommerceProductsComponent,
        ThemSuaSanPhamComponent,
        EcommerceOrdersComponent,
        EcommerceOrderComponent
    ],
    imports     : [
        RouterModule.forChild(routes),

        MatButtonModule,
        MatChipsModule,
        MatExpansionModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatPaginatorModule,
        MatRippleModule,
        MatSelectModule,
        MatSortModule,
        MatTableModule,
        MatTabsModule,
        MatDialogModule,
        FuseSharedModule,
    ],
    providers   : [
        SanPhamService,
        EcommerceOrdersService,
        EcommerceOrderService
    ],
    entryComponents: [
        ThemSuaSanPhamComponent
    ]
})
export class EcommerceModule
{
}
