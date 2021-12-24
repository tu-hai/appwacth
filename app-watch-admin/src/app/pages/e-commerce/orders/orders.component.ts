
import { MatTableDataSource } from '@angular/material/table';
import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { fuseAnimations } from '@fuse/animations';
import { OrdersService } from './orders.service';
import { Order } from './orders.model';
import { Router } from '@angular/router';
@Component({
    selector     : 'e-commerce-products',
    templateUrl  : './orders.component.html',
    styleUrls    : ['./orders.component.scss'],
    animations   : fuseAnimations,
     encapsulation: ViewEncapsulation.None
})
export class OrdersComponent implements OnInit
{
    dataSource = new MatTableDataSource<Order>([])
    displayedColumns: string[] = ['id', 'Name','Email', 'Add', 'Phone', 'thaoTac'];

    @ViewChild(MatPaginator, {static: true})
    paginator: MatPaginator;

    @ViewChild(MatSort, {static: true})
    sort: MatSort;

    @ViewChild('filter', {static: true})
    filter: ElementRef;

    constructor(
        private service: OrdersService,
        private router: Router
    ) {
    }
    ngOnInit(): void {
       this.getOrders()
    }
    timkiem(event: Event) {
        const keyword = (event.target as HTMLInputElement).value;
        this.dataSource.filter = keyword
    }
    getOrders() {
        this.service.getOrders().subscribe(next => {
            this.dataSource.data = next
        })
    }
    xemChiTiet(IDdonhang : number) {
        this.router.navigateByUrl('/invoice')
    }
}

