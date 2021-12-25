
import { MatTableDataSource } from '@angular/material/table';
import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { fuseAnimations } from '@fuse/animations';
import { MatDialog } from '@angular/material';
import { User } from './users.model';
import { UserService } from './users.service';


@Component({
    selector     : 'e-commerce-products',
    templateUrl  : './users.component.html',
    styleUrls    : ['./users.component.scss'],
    animations   : fuseAnimations,
     encapsulation: ViewEncapsulation.None
})
export class UsersComponent implements OnInit
{
    dataSource = new MatTableDataSource<User>([])
    displayedColumns: string[] = ['id', 'Name','Email', 'Add', 'Phone', 'thaoTac'];

    @ViewChild(MatPaginator, {static: true})
    paginator: MatPaginator;

    @ViewChild(MatSort, {static: true})
    sort: MatSort;

    @ViewChild('filter', {static: true})
    filter: ElementRef;

    constructor(
        private service: UserService,
        public dialog: MatDialog
    ) {
    }
    ngOnInit(): void {
       this.getUsers()
    }
    timkiem(event: Event) {
        const keyword = (event.target as HTMLInputElement).value;
        this.dataSource.filter = keyword
    }
    getUsers() {
        this.service.getUsers().subscribe(next => {
            this.dataSource.data = next
        })
    }
    xoaUser(IDuser: number) {
        this.service.deleteUserById(IDuser).subscribe(next => {
            if(next === "Deleted") {
                alert('Đã xóa ')
                this.getUsers()
            }
            else {
                alert('Chưa thể xóa')
            }
        })
    }
}

