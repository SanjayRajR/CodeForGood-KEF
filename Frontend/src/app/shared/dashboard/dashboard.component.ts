import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  userDetails;
  role;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    // this.userService.getUserProfile().subscribe(
    //   res => {
    //     this.role = res['role'];
    //     console.log(this.role);
    //     this.userDetails = res['user'];
    //   },
    //   err => { 
    //     console.log(err);
    //   }
    // );
  }

}
