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

  login(authCredentials: any) {
    return this.http.post<{token:string}>(environment.apiBaseUrl + '/authenticate', authCredentials);
  }


  //Helper Methods

  setToken(token: string) {
    localStorage.setItem('token', token);
  }
  getToken() {
    return localStorage.getItem('token');
  }

  deleteToken() {
    localStorage.removeItem('token');
  }
}
