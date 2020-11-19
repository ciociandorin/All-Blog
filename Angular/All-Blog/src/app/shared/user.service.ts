import { User } from './user.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  selectedUser: User = {
    username: '',
    email: '',
    password: ''
    // sublist: ''
  };

  constructor( private http: HttpClient ) { }

  postUser(user: User){
    return this.http.post(environment.apiBaseUrl+'/register',user);
  }
}
