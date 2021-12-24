import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatDialog, MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { fuseAnimations } from '@fuse/animations';
import { User } from './users.model';
import { UserService } from './users.service';

@Component({
    selector     : 'e-commerce-order',
    templateUrl  : './users.component.html',
    styleUrls    : ['./users.component.scss'],
    animations   : fuseAnimations,
    encapsulation: ViewEncapsulation.None
})
export class UserComponent implements OnInit
{
    dataSource = new MatTableDataSource<User>([])
    displayedColumns: string[] = ['id', 'Name','Email', 'Add', 'Phone', 'thaoTac'];

    @ViewChild(MatPaginator, {static: true})
    paginator: MatPaginator;

    @ViewChild(MatSort, {static: true})
    sort: MatSort;

    @ViewChild('filter', {static: true})
    filter: ElementRef;

    keyword: string = ''

    constructor(
        private service: UserService,
        public dialog: MatDialog
    ) {
    }
    ngOnInit(): void {
       this.getUsers()
    }
    timkiem() {

        this.dataSource.filter = this.keyword
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

