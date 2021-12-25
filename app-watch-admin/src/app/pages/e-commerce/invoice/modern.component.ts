import { Order } from './../orders/orders.model';
import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
@Component({
    selector     : 'invoice-modern',
    templateUrl  : './modern.component.html',
    styleUrls    : ['./modern.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class InvoiceModernComponent implements OnInit
{
    order: Order  = null
    ngayHd = new Date()
    constructor(
        private router: Router
    ) {
        if (this.router.getCurrentNavigation().extras.state) {
            this.order = this.router.getCurrentNavigation().extras.state.data
        }
             
    }

    ngOnInit(): void
    {
        console.log(this.order)
       
    }
}
