import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  //inject Router object
  constructor(
    private router: Router,
    private ls: LoginService,
    private ac: ActivatedRoute
  ) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.ls.logout();
    }, 0);
  }

  doLogin(ngFormObj: NgForm) {
    let userObj = ngFormObj.value;
    // console.log(userObj);
      this.ls.login(userObj).subscribe((res) => {
        if (res['message'] == 'invalid username') {
          alert('invalid username..plz try again');
          ngFormObj.reset();
        }
        if (res['message'] == 'invalid password') {
          alert('invalid password..plz try again');
          ngFormObj.reset();
        }
        if (res['message'] == 'success') {
          //store token in local storage
          localStorage.setItem('signedJwtToken', res['token']);

          //update user status in Login Service
          this.ls.LoggedInUsername = res['username'];
          this.ls.isLoggedIn = true;

          //navigate to dashboard component
          this.router.navigate(['./', res['username']]);
        }
      });
    }
}
