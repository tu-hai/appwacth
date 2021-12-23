import { Component, Inject, OnInit } from '@angular/core';

import { fuseAnimations } from '@fuse/animations';
import { Product } from '../product.model';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { SanPhamService } from '../products.service';
import { Alert } from 'selenium-webdriver';
@Component({
    selector     : 'e-commerce-product',
    templateUrl  : './them-sua-sanpham.html',
    styleUrls    : ['./them-sua-sanpham.scss'],
    animations   : fuseAnimations
})
export class ThemSuaSanPhamComponent implements OnInit {
    product: Product  = null

    constructor(
        @Inject(MAT_DIALOG_DATA) public _product: Product,
        private service: SanPhamService,
        private dialogRef: MatDialogRef<ThemSuaSanPhamComponent>,
    )
    {
       
    }
    ngOnInit(): void {
        if(this._product) {
            this.product = this._product;
        }
        else {
            this.product = {
                ID: null,
                TenSanPham: '',
                Gia: 0,
                HinhSP: '',
                MoTaSP: '',
                IDLoai: 1
            }
        }

    }
    onSubmit() {
        if(this._product) {
            this.capnhat()
        }
        else {
            this.themMoi();
        }
    }
    themMoi() {
        delete this.product.ID
        this.service.postProduct(this.product).subscribe(next =>  {
            if(next === 'Add') {
                this.dialogRef.close(true)
            }
            else {
                alert('Chưa thể thêm')
            }
        })

    }

    capnhat() {
        this.service.updateProduct(this.product, this.product.ID).subscribe(next => {
            if(next === 'Updated') {
                this.dialogRef.close(true)
            }
            else {
                alert('Chưa thể cập nhật')
            }
        })
    }
}
