import { Component, Inject, OnInit } from '@angular/core';

import { fuseAnimations } from '@fuse/animations';
import { Product } from '../product.model';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { SanPhamService } from '../products.service';
@Component({
    selector     : 'e-commerce-product',
    templateUrl  : './them-sua-sanpham.html',
    styleUrls    : ['./them-sua-sanpham.scss'],
    animations   : fuseAnimations
})
export class ThemSuaSanPhamComponent implements OnInit {
    product: Product  = null ;

    constructor(
        @Inject(MAT_DIALOG_DATA) public _product: Product,
        private service: SanPhamService,
        private dialogRef: MatDialogRef<ThemSuaSanPhamComponent>,
    )
    {
        this.product = _product;
    }
    ngOnInit(): void {

    }

    capnhat() {
        this.service.updateProduct(this.product).subscribe(next => {
            if(next === 'Updated') {
                this.dialogRef.close(true)
            }
            else {
                alert('Chưa thể cập nhật')
            }
        })
    }
}
