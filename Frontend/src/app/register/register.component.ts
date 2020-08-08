import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../services/user.service'
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  serverErrorMessages;
  user;
  role;
  student;
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }


  submitForm(form: NgForm){
    this.user = form.form.value;
    this.userService.postUser(this.user).subscribe(
      res => {
        this.router.navigateByUrl('/sigin');
        form.resetForm();
      },
      err => {

        console.log("error", err);
        // if (err.status === 422) {
        //   this.serverErrorMessages = err.error.join('<br/>');
        // }
        // else
        //   this.serverErrorMessages = 'Something went wrong.Please contact admin.';
      }
    );
  }

  submitSchoolForm(form: NgForm){
    this.student = form.form.value;
    console.log(this.student);
  }
}
