import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  //Http Methods

  postUser(user, role){
    const data = {
      'name' : user.name,
      'email':user.Email,
      'password':user.password,
      'phone':user.phone,
      'role' : role
    }
    console.log(user);
    return this.http.post(environment.apiBaseUrl + '/signup', data);
  }



}
