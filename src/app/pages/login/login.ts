import { Component, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { UserData } from '../../providers/user-data';

import { UserOptions } from '../../interfaces/user-options';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  styleUrls: ['./login.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginPage {
  login: UserOptions = { username: '', password: '' };
  submitted = false;

  constructor(
    public userData: UserData,
    public router: Router,
    public http: HttpClient
  ) { }

  onLogin(form: NgForm) {
    this.submitted = true;

    if (form.valid) {
      this.http.get(this.userData.LDAP_URL+'?username='+this.login.username+'&password='+this.login.password)
        .subscribe(data => {
          console.log(data); 
          this.userData.login(data);
          this.router.navigateByUrl('/app/tabs/(schedule:schedule)');
        });
    }
  }

  onSignup() {
    this.router.navigateByUrl('/signup');
  }
}
