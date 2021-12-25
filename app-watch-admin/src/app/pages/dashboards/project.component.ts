import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { fuseAnimations } from '@fuse/animations';
import { ProjectDashboardService } from './project.service';

@Component({
    selector     : 'project-dashboard',
    templateUrl  : './project.component.html',
    styleUrls    : ['./project.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations
})
export class ProjectDashboardComponent implements OnInit
{
    constructor(
        private service: ProjectDashboardService
    ){}
    totalUser = 0
    totalProduct = 0
    totalOrder = 0
    totalCategory = 0
    productMaxOrder = null
    ngOnInit(): void
    {     
        this.service.totalUser().subscribe(next => this.totalUser = next)
        this.service.totalProduct().subscribe(next => this.totalProduct = next)
        this.service.totalOrder().subscribe(next => this.totalOrder = next)
        this.service.totalCategory().subscribe(next => this.totalCategory = next)
        this.service.productMaxOrder().subscribe(next => this.productMaxOrder = next)
    }
    
}

