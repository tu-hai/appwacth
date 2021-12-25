import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
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
import { ProductsComponent } from './products/products.component';
import { SanPhamService } from './products/products.service';
import { MatDialogModule} from '@angular/material/dialog';
import { ThemSuaSanPhamComponent } from './products/them-sua-sanpham/them-sua-sanpham';
import { OrdersComponent } from './orders/orders.component';
import { OrdersService } from './orders/orders.service';
import { InvoiceModernComponent } from './invoice/modern.component';
import { UserService } from './Users/users.service';
import { UsersComponent } from './Users/users.component';
import { MatCardModule} from '@angular/material/card';

const routes: Routes = [
    {
        path     : 'products',
        component: ProductsComponent,
    },
    {
        path     : 'users',
        component: UsersComponent,
    },
    {
        path     : 'orders',
        component: OrdersComponent,
    },
    {
        path     : 'invoice',
        component: InvoiceModernComponent,
    },
];

@NgModule({
    declarations: [
        ProductsComponent,
        ThemSuaSanPhamComponent,
        UsersComponent,
        OrdersComponent,
        InvoiceModernComponent ,
        UsersComponent
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
        MatCardModule,
    ],
    providers   : [
        SanPhamService,
        UserService,
        OrdersService
    ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
    entryComponents: [
        ThemSuaSanPhamComponent
    ]
})
export class EcommerceModule
{
}
