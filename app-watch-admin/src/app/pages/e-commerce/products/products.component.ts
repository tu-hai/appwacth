import { Product } from './../product/product.model';
import { MatTableDataSource } from '@angular/material/table';
import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { DataSource } from '@angular/cdk/collections';
import { BehaviorSubject, fromEvent, merge, Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

import { fuseAnimations } from '@fuse/animations';
import { FuseUtils } from '@fuse/utils';

import { takeUntil } from 'rxjs/internal/operators';
import { EcommerceProductsService } from './products.service';

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
    displayedColumns: string[] = ['id', 'Img','TenSanPham', 'Gia', 'MoTaSP', 'IDLoai'];

    @ViewChild(MatPaginator, {static: true})
    paginator: MatPaginator;

    @ViewChild(MatSort, {static: true})
    sort: MatSort;

    @ViewChild('filter', {static: true})
    filter: ElementRef;


    constructor(
        private service: EcommerceProductsService
    )
    {
    }
    ngOnInit(): void
    {
        this.service.getProduct().subscribe(next => {
            this.dataSource.data = next
        })
    }
}

