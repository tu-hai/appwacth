
import { MatTableDataSource } from '@angular/material/table';
import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { fuseAnimations } from '@fuse/animations';
import { SanPhamService } from './products.service';
import { MatDialog } from '@angular/material';
import { Product } from './product.model';
import { ThemSuaSanPhamComponent } from './them-sua-sanpham/them-sua-sanpham';


@Component({
    selector     : 'e-commerce-products',
    templateUrl  : './products.component.html',
    styleUrls    : ['./products.component.scss'],
    animations   : fuseAnimations,
    encapsulation: ViewEncapsulation.None
})
export class EcommerceProductsComponent implements OnInit
{
    dataSource = new MatTableDataSource<Product>([])
    displayedColumns: string[] = ['id', 'Img','TenSanPham', 'Gia', 'MoTaSP', 'IDLoai', 'thaoTac'];

    @ViewChild(MatPaginator, {static: true})
    paginator: MatPaginator;

    @ViewChild(MatSort, {static: true})
    sort: MatSort;

    @ViewChild('filter', {static: true})
    filter: ElementRef;

    constructor(
        private service: SanPhamService,
        public dialog: MatDialog
    ) {
    }
    ngOnInit(): void {
       this.getDanhSachSanPham()
    }
    timkiem(event: Event) {
        const keyword = (event.target as HTMLInputElement).value;
        this.dataSource.filter = keyword
    }
    getDanhSachSanPham() {
        this.service.getProduct().subscribe(next => {
            this.dataSource.data = next
        })
    }
    capNhaHoacThemSanPham(product: Product) {
        const dialogRef = this.dialog.open(ThemSuaSanPhamComponent, {data: product});
        
        dialogRef.afterClosed().subscribe(next => {
           if(next) {
               this.getDanhSachSanPham()
               alert('Thành công!')
           }
        });
    }
    xoaSanPham(id: number) {
        this.service.deleteProductById(id).subscribe(next => {
            if(next === "Deleted") {
                alert('Đã xóa ')
                this.getDanhSachSanPham()
            }
            else {
                alert('Chưa thể xóa')
            }
        })
    }
}

