import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-modules',
  templateUrl: './add-modules.component.html',
  styleUrls: ['./add-modules.component.css']
})
export class AddModulesComponent implements OnInit {
  categories;
  constructor(private userService : UserService, private router : Router) { }

  ngOnInit(): void {
    this.userService.getCategory().subscribe(
      res =>{
        this.categories = res['data'];
        console.log(this.categories);
      },
      err =>{
        console.log(err);
      }
    );
  }

}
