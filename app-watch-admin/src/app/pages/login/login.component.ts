import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { FuseConfigService } from '@fuse/services/config.service';
import { fuseAnimations } from '@fuse/animations';
import { LoginServiceService } from './login-service.service';
import { Router } from '@angular/router';

@Component({
    selector     : 'login',
    templateUrl  : './login.component.html',
    styleUrls    : ['./login.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations
})
export class LoginComponent implements OnInit
{
    loginForm: FormGroup;

    /**
     * Constructor
     *
     * @param {FuseConfigService} _fuseConfigService
     * @param {FormBuilder} _formBuilder
     */
    constructor(
        private _fuseConfigService: FuseConfigService,
        private _formBuilder: FormBuilder,
        private _service: LoginServiceService,
        private router: Router,
    )
    {
        // Configure the layout
        this._fuseConfigService.config = {
            layout: {
                navbar   : {
                    hidden: true
                },
                toolbar  : {
                    hidden: true
                },
                footer   : {
                    hidden: true
                },
                sidepanel: {
                    hidden: true
                }
            }
        };
    }
    ngOnInit(): void
    {
        this.loginForm = this._formBuilder.group({
            Email   : ['', [Validators.required]],
            Pass: ['', Validators.required]
        });
    }

    login() {
        this._service.login(this.loginForm.value).subscribe(next => {
            if(next !== 'not found') {
                localStorage.setItem("admin", next);
                this.router.navigate(["pages/dashboards/project"]);
            }
            else {
                alert("Tên đăng nhập hoặc mật khẩu chưa đúng")
                localStorage.clear()
            }
        })
    }
}
